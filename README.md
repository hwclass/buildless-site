# Welcome to ![buildless.site](https://i.ibb.co/8XXyjN5/Group-1.png) 👋

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000) ![](https://img.shields.io/badge/node-12.x-blue.svg) [ ![License: ISC](https://img.shields.io/badge/License-ISC-yellow.svg) ](#) [![Twitter: hwclass](https://img.shields.io/twitter/follow/hwclass.svg?style=social)](https://twitter.com/hwclass)

A collection of sites, apps, packages, articles and other stuff about ES modules.

### 🏠 [Homepage](https://buildless.site)

## Prerequisites

- Node.js 12.x
- npm 6.x.x

## Install

```sh
npm install
```

## Run

```sh
# run the api
npm run api
# run the app
npm start
```

Note: Since everytime when somethinng changes in the code, `npm run build` is triggered via vercel & this also causes another (p)react re-render via `@prefresh/snowpack` which triggers an endless refresh loop. This should be fixed in the other updates.

## Component Dependency Graph

![](./dependencygraph.svg)

## API

### Fetch sections

`/api/sections` [GET] : returns the following payload from [awesome-buildless](https://github.com/hwclass/awesome-buildless) repo:

```json
{
  "sections": [
    {
      "title": "Articles",
      "list": [
        {
          "content": "Going Buildless",
          "href": "https://dev.to/open-wc/on-the-bleeding-edge-3cb8"
        }
      ]
    },
    {
      "title": "Tutorials",
      "list": [
        {
          "content": "Developing without a Build (1)",
          "href": "https://dev.to/open-wc/developing-without-a-build-1-introduction-26ao"
        }
      ]
    },
    {
      "title": "Tools &amp; Platforms",
      "list": [{ "content": "Pika", "href": "pika.dev" }]
    },
    {
      "title": "Packages &amp; Libraries",
      "list": [
        {
          "content": "es-dev-server",
          "href": "https://www.npmjs.com/package/es-dev-server"
        }
      ]
    }
  ]
}
```

## Tech Stack

- [snowpack](https://www.snowpack.dev/)
- [preact](https://preactjs.com/)
- [preact-fetch](https://www.pika.dev/npm/preact-fetch)
- [htm](https://github.com/developit/htm)
- [marked](https://www.npmjs.com/package/marked)
- [svg backgrounds](https://www.svgbackgrounds.com)

## Authors

👤 **hwclass**

- [Web](https://hwclass.dev)
- [Twitter](https://twitter.com/hwclass)
- [Github](https://github.com/hwclass)
- [LinkedIn](https://linkedin.com/in/hwclass)

👤 **Kjaer**

- [Web](https://medium.com/@kjaer)
- [Twitter](https://twitter.com/halilkayer)
- [Github](https://github.com/Kjaer)
- [LinkedIn](https://linkedin.com/in/halilkayer)

## Licence

ISC
