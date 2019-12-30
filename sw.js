self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("buildless-site").then(cache => {
      return cache.addAll([
        "/",
        "./static/web_modules/preact.js",
        "./static/web_modules/htm/preact.js",
        "./static/web_modules/preact-fetch.js",
        "./src/buildless-app.js"
      ]);
    })
  );
});
