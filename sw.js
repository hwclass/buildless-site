self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("buildless-site").then(cache => {
      return cache.addAll(["/", "./src/buildless-app.js"]);
    })
  );
});
