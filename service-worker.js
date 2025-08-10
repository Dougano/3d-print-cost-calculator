const CACHE_NAME = '3d-print-calc-v2.0';
// Use relative paths that work on GitHub Pages
const urlsToCache = [
    './',
    './index.html',
    './manifest.json',
    './favicon.svg',
    './service-worker.js'
].filter(url => url); // Remove any undefined entries

self.addEventListener('install', (event) => {
    console.log('Service Worker installing');
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Opened cache');
                // Cache resources one by one to handle failures gracefully
                return Promise.all(
                    urlsToCache.map(url => {
                        return cache.add(url).catch(err => {
                            console.warn('Failed to cache:', url, err);
                            // Continue even if individual resources fail
                        });
                    })
                );
            })
            .catch(err => {
                console.error('Cache open failed:', err);
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
                            })
                            .catch(err => {
                                console.warn('Failed to cache response:', err);
                            });
                        
                        return response;
                    }).catch(err => {
                        console.error('Fetch failed:', err);
                        throw err;
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