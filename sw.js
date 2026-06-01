/* Service worker minimal pour Coord'EPS (PWA installable).
   - Permet l'installation comme application.
   - Gère le clic sur une notification (ramène l'app au premier plan).
   - NE MET PAS la page en cache de façon agressive : on veut toujours la
     dernière version (sinon on resservirait d'anciennes versions). */

const VERSION = "coordeps-sw-v1";

self.addEventListener("install", (e) => {
  self.skipWaiting(); // active tout de suite la nouvelle version
});

self.addEventListener("activate", (e) => {
  e.waitUntil(self.clients.claim());
});

// Réseau d'abord : on récupère toujours la dernière version en ligne.
self.addEventListener("fetch", (e) => {
  // On laisse le navigateur gérer normalement (pas d'interception de cache).
  return;
});

// Clic sur une notification système → focus / ouverture de l'application.
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
