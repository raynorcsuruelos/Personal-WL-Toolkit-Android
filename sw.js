const CACHE = 'wl-toolkit-static-v1';
const STATIC = ['./','./index.html','./manifest.webmanifest','./icon.svg','./apple-touch-icon.png','./pwa-192x192.png','./pwa-512x512.png','./icons/icon-192.png','./icons/icon-512.png','./registerSW.js'];
self.addEventListener('install', event => { event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(STATIC)).then(() => self.skipWaiting())); });
self.addEventListener('activate', event => { event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', event => {
 const req = event.request;
 if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
 if (req.mode === 'navigate') {
   event.respondWith(fetch(req).then(response => response.ok ? response : (caches.match('./index.html').then(cached => cached || response))).catch(() => caches.match('./index.html')));
   return;
 }
 if (!STATIC.some(path => new URL(path,self.registration.scope).href === req.url)) return;
 event.respondWith(caches.match(req).then(cached => cached || fetch(req)));
});
