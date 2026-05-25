const CACHE_NAME = "trading-jurnal-v2";
const ASSETS = ["/", "/index.html", "/manifest.webmanifest", "/icon.svg"];
self.addEventListener("install", (event) => { event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))); self.skipWaiting(); });
self.addEventListener("activate", (event) => { event.waitUntil(self.clients.claim()); });
self.addEventListener("fetch", (event) => { event.respondWith(fetch(event.request).catch(() => caches.match(event.request))); });
