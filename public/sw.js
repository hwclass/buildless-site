self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('buildless-site').then(cache => {
      return cache.addAll([
        '/',
        './favicon.ico',
        './hourglass.gif',
        '../web_modules/preact.js',
        '../web_modules/htm/preact.js',
        '../web_modules/preact-fetch.js',
        '../web_modules/csz.js',
      ]);
    }),
  );
});
