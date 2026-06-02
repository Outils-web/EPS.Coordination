/* Service worker MINIMAL et PASSIF pour Coord'EPS (PWA installable).
   IMPORTANT : il n'intercepte AUCUNE requête réseau (pas de handler "fetch").
   Cela garantit que Firebase (synchronisation temps réel, websockets) et toutes
   les autres requêtes fonctionnent exactement comme sans service worker.
   Son seul rôle : rendre l'application installable et gérer le clic sur une
   notification système. */

self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    (async () => {
      try {
        const keys = await caches.keys();
        await Promise.all(keys.map((k) => caches.delete(k)));
      } catch (err) {}
      await self.clients.claim();
    })()
  );
});

/* PAS de gestionnaire "fetch" : le navigateur gère le réseau normalement. */

self.addEventListener("notificationclick", (e) => {
  e.notification.close();
  e.waitUntil(
    self.clients.matchAll({ type: "window", includeUncontrolled: true }).then((list) => {
      for (const client of list) {
        if ("focus" in client) return client.focus();
      }
      if (self.clients.openWindow) return self.clients.openWindow("./index.html");
    })
  );
});
