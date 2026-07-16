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

  // Example: Attach auth token if available (commented out until auth is implemented)
  // const token = localStorage.getItem('token');
  // if (token) {
  //   headers.set('Authorization', `Bearer ${token}`);
  // }

  const response = await fetch(url, {
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
