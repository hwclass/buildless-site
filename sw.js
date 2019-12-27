self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('buildless-site').then((cache) => {
      return cache.addAll([
        '/',
        './web_modules/lit-element.js',
        './web_modules/@vaadin/router.js',
        './web_modules/spectre.css',
        './src/buildless-app.js'
      ]);
    })
  );
});