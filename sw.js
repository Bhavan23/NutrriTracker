const CACHE_NAME = "nutritrack-v1";
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600;700&display=swap",
  "https://unpkg.com/react@18/umd/react.production.min.js",
  "https://unpkg.com/react-dom@18/umd/react-dom.production.min.js",
  "https://unpkg.com/@babel/standalone/babel.min.js"
];

// Install — cache core assets
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(["./", "./index.html", "./manifest.json"]);
    })
  );
  self.skipWaiting();
});

// Activate — remove old caches
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch — cache-first for local, network-first for CDN
self.addEventListener("fetch", event => {
  const url = event.request.url;
  if (url.includes("unpkg.com") || url.includes("fonts.googleapis") || url.includes("fonts.gstatic")) {
    // Cache CDN resources
    event.respondWith(
      caches.open(CACHE_NAME).then(cache =>
        cache.match(event.request).then(cached => {
          if (cached) return cached;
          return fetch(event.request).then(response => {
            cache.put(event.request, response.clone());
            return response;
          }).catch(() => cached);
        })
      )
    );
  } else {
    // Cache-first for local assets
    event.respondWith(
      caches.match(event.request).then(cached => cached || fetch(event.request))
    );
  }
});

// Push notifications
self.addEventListener("push", event => {
  const data = event.data ? event.data.json() : { title: "NutriTrack", body: "Time to log your meal! 💪" };
  event.waitUntil(
    self.registration.showNotification(data.title || "NutriTrack", {
      body:  data.body  || "Don't forget to track your nutrition today!",
      icon:  "./icon-192.png",
      badge: "./icon-192.png",
      vibrate: [200, 100, 200],
      data: { url: self.location.origin }
    })
  );
});

// Notification click — open app
self.addEventListener("notificationclick", event => {
  event.notification.close();
  event.waitUntil(
    clients.matchAll({ type: "window", includeUncontrolled: true }).then(clientList => {
      for (const client of clientList) {
        if (client.url && "focus" in client) return client.focus();
      }
      if (clients.openWindow) return clients.openWindow("./");
    })
  );
});
