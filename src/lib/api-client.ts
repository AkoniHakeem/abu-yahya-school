import { mockApiRouter } from './mock-api';

interface FetchOptions extends RequestInit {
  // Add any custom options here if needed later
}

/**
 * A wrapper around native fetch that intercepts calls if NEXT_PUBLIC_USE_MOCK_API is true.
 * This allows seamless frontend development before the real backend is ready.
 */
export async function fetchAPI(endpoint: string, options: FetchOptions = {}): Promise<any> {
  const useMockApi = process.env.NEXT_PUBLIC_USE_MOCK_API === 'true';

  if (useMockApi) {
    try {
      const mockResponse = await mockApiRouter(endpoint, options.method || 'GET', options.body);
      return mockResponse;
    } catch (error) {
      console.error('[API Client Error]', error);
      throw error;
    }
  }

  // --- Real Backend Fallback ---
  // If we are not using the mock API, we perform a standard fetch
  const defaultBase = typeof window !== 'undefined' ? '' : 'http://localhost:3000';
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || defaultBase;
  const url = `${baseUrl}${endpoint}`;

  const headers = new Headers(options.headers);
  if (!headers.has('Content-Type') && !(options.body instanceof FormData)) {
    headers.set('Content-Type', 'application/json');
  }

  let token = undefined;
  if (typeof window !== 'undefined') {
    // client-side
    const match = document.cookie.match(new RegExp('(^| )auth_token=([^;]+)'));
    if (match) token = match[2];
  } else {
    // server-side
    try {
      const { cookies } = require('next/headers');
      const cookieStore = await cookies();
      const authCookie = cookieStore.get('auth_token');
      if (authCookie) token = authCookie.value;
    } catch (e) {
      // ignore or handle if needed
    }
  }

  if (token) {
    headers.set('Authorization', `Bearer ${token}`);
  }

  const response = await fetch(url, {
    cache: 'no-store',
    ...options,
    headers,
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || `API Error: ${response.status} ${response.statusText}`);
  }

  // Try parsing JSON, fallback to text if it's not JSON (like file downloads)
  const contentType = response.headers.get('content-type');
  if (contentType && contentType.includes('application/json')) {
    return response.json();
  }
  
  return response.text();
}
