## Best Practices

### Set path in micro:

```sh
https://github.com/zeit/micro/blob/master/errors/path-not-existent.md
```

### Add rate limiting to the api

```js
const rateLimit = require("my-rate-limit");
module.exports = async (req, res) => {
  try {
    await rateLimit(req);
  } catch (err) {
    if (429 == err.statusCode) {
      // perhaps send 500 instead?
      send(res, 500);
    }
  }
};
```
