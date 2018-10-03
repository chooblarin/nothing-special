self.addEventListener('install', function (event) {
  console.log('[Service Worker] Installing Service Worker ...', event);
  event.waitUntil(
    caches.open('v1').then(function (cache) {
      cache.addAll([
        '/',
        '/index.html',
        '/style.css'
      ]);
    })
  );
});

self.addEventListener('activate', function (event) {
  console.log('[Service Worker] Activating Service Worker ....', event);
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response !== undefined) {
        return response;
      } else {
        return fetch(event.request).then(function (res) {
          return caches.open('v1').then(function (cache) {
            cache.put(event.request, res.clone());
            return res;
          });
        });
      }
    })
  );
});
