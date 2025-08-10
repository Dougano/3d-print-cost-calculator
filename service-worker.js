const CACHE_NAME = '3d-print-calc-v1.3';
const urlsToCache = [
    './',
    './index.html',
    './manifest.json',
    './favicon.svg'
    // External resources like CDNs are cached dynamically
];

self.addEventListener('install', (event) => {
    console.log('Service Worker installing');
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    console.log('Service Worker activated');
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    return self.clients.claim();
});

self.addEventListener('fetch', (event) => {
    // Skip caching for cross-origin requests to avoid CORS issues
    const url = new URL(event.request.url);
    const isExternal = url.origin !== location.origin;
    
    if (event.request.method === 'GET') {
        event.respondWith(
            caches.match(event.request)
                .then((response) => {
                    // Cache hit - return response
                    if (response) {
                        return response;
                    }
                    
                    // Clone the request
                    const fetchRequest = event.request.clone();
                    
                    return fetch(fetchRequest).then((response) => {
                        // Don't cache external resources or non-successful responses
                        if (!response || 
                            response.status !== 200 || 
                            response.type !== 'basic' ||
                            isExternal) {
                            return response;
                        }
                        
                        // Clone the response for caching
                        const responseToCache = response.clone();
                        
                        caches.open(CACHE_NAME)
                            .then((cache) => {
                                // Only cache same-origin requests
                                if (!isExternal) {
                                    cache.put(event.request, responseToCache);
                                }
                            });
                        
                        return response;
                    });
                })
                .catch(() => {
                    // Offline fallback for navigation requests
                    if (event.request.mode === 'navigate') {
                        return new Response('<h1>Offline - App cached locally</h1>', {
                            headers: { 'Content-Type': 'text/html' }
                        });
                    }
                })
        );
    }
});