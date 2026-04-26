const CACHE_NAME = 'vice-mm-v1';
const urlsToCache = [
  'index.html',
  'manifest.json',
  'https://i.ibb.co/wFQCr9L7/IMG-20260410-193548-794.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
