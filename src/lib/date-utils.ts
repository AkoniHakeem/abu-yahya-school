import { formatInTimeZone, fromZonedTime } from 'date-fns-tz';

const normalizeTime = (timeStr: string) => {
  return timeStr.split(':').length === 3 ? timeStr : `${timeStr}:00`;
};

const legacyTzMap: Record<string, string> = {
  'UTC+1': 'Africa/Lagos',
  'UTC+3': 'Asia/Riyadh',
  'UTC-5': 'America/New_York',
  'UTC-8': 'America/Los_Angeles',
  'UTC': 'UTC',
};

export const getValidTimezone = (tz?: string): string => {
  if (!tz) return Intl.DateTimeFormat().resolvedOptions().timeZone;
  if (legacyTzMap[tz]) return legacyTzMap[tz];
  
  try {
    Intl.DateTimeFormat(undefined, { timeZone: tz });
    return tz;
  } catch (e) {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  }
};

export const toUTC = (dateString: string, timeString: string, timeZone?: string) => {
  if (!dateString || !timeString) return { date: dateString, time: timeString };
  
  const tz = getValidTimezone(timeZone);
  
  try {
    const timeStr = normalizeTime(timeString);
    const utcDate = fromZonedTime(`${dateString}T${timeStr}`, tz);
    
    if (isNaN(utcDate.getTime())) return { date: dateString, time: timeString };
    
    return {
      date: utcDate.toISOString().split('T')[0],
      time: utcDate.toISOString().split('T')[1].substring(0, 5)
    };
  } catch (error) {
    return { date: dateString, time: timeString };
  }
};

export const toLocal = (utcDateString: string, utcTimeString: string, timeZone?: string) => {
  if (!utcDateString || !utcTimeString) return { date: utcDateString, time: utcTimeString };
  
  const tz = getValidTimezone(timeZone);
  
  try {
    const timeStr = normalizeTime(utcTimeString);
    const utcDate = new Date(`${utcDateString}T${timeStr}Z`);
    
    if (isNaN(utcDate.getTime())) return { date: utcDateString, time: utcTimeString };
    
    return {
      date: formatInTimeZone(utcDate, tz, 'yyyy-MM-dd'),
      time: formatInTimeZone(utcDate, tz, 'HH:mm')
    };
  } catch (error) {
    return { date: utcDateString, time: utcTimeString };
  }
};

// Formats a UTC date and time into a human-readable local string (e.g. "Aug 10, 2026 at 10:00 AM")
export const formatToLocalString = (utcDateString: string, utcTimeString: string, timeZone?: string) => {
  if (!utcDateString || !utcTimeString) return `${utcDateString} at ${utcTimeString}`;
  
  const tz = getValidTimezone(timeZone);
  
  try {
    const timeStr = normalizeTime(utcTimeString);
    const utcDate = new Date(`${utcDateString}T${timeStr}Z`);
    
    if (isNaN(utcDate.getTime())) return `${utcDateString} at ${utcTimeString}`;
    
    return formatInTimeZone(utcDate, tz, "MMM d, yyyy 'at' h:mm a");
  } catch (error) {
    return `${utcDateString} at ${utcTimeString}`;
  }
};

export const formatTo12Hour = (timeStr: string) => {
  if (!timeStr) return timeStr;
  const [h, m] = timeStr.split(':');
  if (!h || !m) return timeStr;
  let hour = parseInt(h);
  const ampm = hour >= 12 ? 'PM' : 'AM';
  hour = hour % 12 || 12;
  return `${hour.toString().padStart(2, '0')}:${m} ${ampm}`;
};
