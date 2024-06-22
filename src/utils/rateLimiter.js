const rateLimit = new Map();

const WINDOW_MS = 5 * 60 * 1000; // 5 minutes
const MAX_REQUESTS = 3;

function getIP(request) {
    return request.ip 
        || request.headers.get('x-forwarded-for')?.split(',')[0]
        || request.headers.get('x-real-ip')
        || 'unknown';
}

export default async function rateLimiter(request) {
    const ip = getIP(request);
    const now = Date.now();
    const windowStart = now - WINDOW_MS;

    const requestTimestamps = rateLimit.get(ip) || [];
    const requestsInWindow = requestTimestamps.filter(timestamp => timestamp > windowStart);

    if (requestsInWindow.length >= MAX_REQUESTS) {
        return false; // Rate limit exceeded
    }

    requestsInWindow.push(now);
    rateLimit.set(ip, requestsInWindow);

    return true;
}