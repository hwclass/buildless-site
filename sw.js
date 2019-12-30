self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("buildless-site").then(cache => {
      return cache.addAll([
        "/",
        "./static/favicon.ico",
        "./static/hourglass.gif",
        "./web_modules/preact.js",
        "./web_modules/htm/preact.js",
        "./web_modules/preact-fetch.js",
        "./src/buildless-app.js"
      ]);
    })
  );
});
