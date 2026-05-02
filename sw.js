const CACHE_NAME = 'tarot-app-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json'
];

// Installér og gem filer i cache
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS);
    })
  );
});

// Hent fra cache, hvis offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});