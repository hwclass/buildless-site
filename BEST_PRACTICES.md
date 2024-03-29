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

### Node.js helpers for apis on Zeit Now

https://zeit.co/docs/v2/serverless-functions/supported-languages#node.js-helpers

### Zeit Now customized API endpoints

https://thecloud.christmas/2019/8

### Use Github CDN for content

```sh
curl https://raw.githubusercontent.com/hwclass/buildless-site/master/README.md
```

### Read a readme file from github in a certain document range

```sh
curl https://raw.githubusercontent.com/hwclass/awesome-buildless/master/README.md | sed -n '/### Articles/,/### Tutorials/p'
```

### marked can be used to parse markdown from an endpoint to convert into HTML string

[marked](https://github.com/markedjs/marked)

### [HTMLCollection](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection) object collection is only iterable after applying _Array.from_

### Update npm to the latest version

```sh
npm install -g npm@latest
```

### Add rel="noopener" or rel="noreferrer" into a tags with target="\_blank" to prevent sec.

```html
<a href="..." target="_blank" rel="noopener" />
```

### [It is recommended](https://zeit.co/docs/v2/network/caching/#stale-while-revalidate) to use the following header with zeit now to keep the content in sync with the remote resource while/after serving from the edge cache:

```sh
Cache-Control: s-maxage=1, stale-while-revalidate
```

### Better waiting to get Inter font introduced to Google Fonts [PR](https://github.com/rsms/inter/commit/5a5be63d6e59d5c437b270a5522b370ba845bf39#diff-61e0bdf7e1b43c5c93d9488b22e04170).

### Spacer between spaced-evenly elements in css grid:

```
flex-grow: 0.1;
```

### Import assets in the Head via Fresh runtime

```tsx
// import asset function from Fresh runtime
import { asset, Head } from "$fresh/runtime.ts";

// refer to the CSS file within <Head>...</Head>
<link rel="stylesheet" href={asset("style.css")} />;
```
