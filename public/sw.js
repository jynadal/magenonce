/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-7bd5815b230650e63027.js"
  },
  {
    "url": "framework-10663867abff3d8d753a.js"
  },
  {
    "url": "app-b6d2ff46fa77ea86c7cd.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "07945ec3830547d005dcd4eba01c5be9"
  },
  {
    "url": "static/webfonts/s/opensans/v26/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0B4gaVI.woff2"
  },
  {
    "url": "static/webfonts/s/inconsolata/v21/QldgNThLqRwH-OJ1UHjlKENVzkWGVkL3GZQmAwLYxYWI2qfdm7Lpp4U8WR32lw.woff2"
  },
  {
    "url": "static/webfonts/s/inconsolata/v21/QldgNThLqRwH-OJ1UHjlKENVzkWGVkL3GZQmAwLYxYWI2qfdm7Lpp7c8WR32lw.woff2"
  },
  {
    "url": "static/webfonts/s/inconsolata/v21/QldgNThLqRwH-OJ1UHjlKENVzkWGVkL3GZQmAwLYxYWI2qfdm7Lpp1s7WR32lw.woff2"
  },
  {
    "url": "static/webfonts/s/inconsolata/v21/QldgNThLqRwH-OJ1UHjlKENVzkWGVkL3GZQmAwLYxYWI2qfdm7Lpp2I7WR32lw.woff2"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-adc1d736adc468503179.js"
  },
  {
    "url": "polyfill-59052488576a3c793da5.js"
  },
  {
    "url": "styles.bf206e530d3ce7048a2d.css"
  },
  {
    "url": "d0447323-a65f12e5d966e91fb6ae.js"
  },
  {
    "url": "1bfc9850-8030cd2347db103fcb8f.js"
  },
  {
    "url": "5e2a4920-f39e288532eb030f2dde.js"
  },
  {
    "url": "24dc58fefe3649e2750243f275ca62acecad7166-087f0751c84690fd7c57.js"
  },
  {
    "url": "component---src-pages-index-js-57512828ded7b7b66141.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "ae2ea2ecc2cfbc3361d776407a2d0771"
  },
  {
    "url": "page-data/sq/d/2468095761.json",
    "revision": "7b9fcdd3bac44a185a059c99cf606fb6"
  },
  {
    "url": "page-data/sq/d/3344155059.json",
    "revision": "a6706a8778bf9f8ed7c7199fc47819e2"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "2be1080050ee6c3a0ab40031123392ab"
  },
  {
    "url": "component---src-pages-travels-js-aafe21d952a80fd4585e.js"
  },
  {
    "url": "page-data/travels/page-data.json",
    "revision": "e24fac67acb2838c3923e1ba80d7b2fb"
  },
  {
    "url": "component---src-pages-tags-js-bf6784eca702998073f2.js"
  },
  {
    "url": "page-data/tags/page-data.json",
    "revision": "86f6253e13d7be542c4a1efe21b15644"
  },
  {
    "url": "component---src-pages-about-js-b277bbdc9c7bb484115f.js"
  },
  {
    "url": "page-data/about/page-data.json",
    "revision": "cba06f115caae51331f343442e353abb"
  },
  {
    "url": "component---src-pages-contact-js-6c998dff3c2b952c3ed4.js"
  },
  {
    "url": "page-data/contact/page-data.json",
    "revision": "d609e43c891711995c18827145e5b30a"
  },
  {
    "url": "component---src-templates-tag-template-js-3e28dc1fc54ea0af686f.js"
  },
  {
    "url": "page-data/tags/all-inclusive/page-data.json",
    "revision": "d771f8c2ba56841ebb03e0359d9b18ef"
  },
  {
    "url": "page-data/tags/autotours/page-data.json",
    "revision": "d682e55ee11bd19c18926619fef950f4"
  },
  {
    "url": "page-data/tags/ce-groupe/page-data.json",
    "revision": "3149769eee3a4507f70ce74a43093b8f"
  },
  {
    "url": "page-data/tags/combine/page-data.json",
    "revision": "17ab13ce66e9a2582ad8585dba7f60c5"
  },
  {
    "url": "page-data/tags/combines/page-data.json",
    "revision": "90f7ddc287062ec4d61430e8f7498ec6"
  },
  {
    "url": "page-data/tags/croisieres/page-data.json",
    "revision": "cf3eadca3839e46d89b4696eb6766b4b"
  },
  {
    "url": "page-data/tags/maroc/page-data.json",
    "revision": "a5916dd080eb8ae0b18f9340575d7210"
  },
  {
    "url": "page-data/tags/marrakech/page-data.json",
    "revision": "02621ef5189bbcf20f6ff21a745dfa0e"
  },
  {
    "url": "page-data/tags/piscine/page-data.json",
    "revision": "f26e39cd029b4c596cda75ebd05baa8d"
  },
  {
    "url": "page-data/tags/promotion/page-data.json",
    "revision": "5797bda915ee1f0e9202ca983c7ba956"
  },
  {
    "url": "page-data/tags/sejour/page-data.json",
    "revision": "c62195d147725b6b51a7a747411a0c70"
  },
  {
    "url": "page-data/tags/vols/page-data.json",
    "revision": "7f6533f3c9bc2dd7eace5ba14fa22078"
  },
  {
    "url": "page-data/tags/voyage/page-data.json",
    "revision": "76b1237f1455c12d737f4ce336448b81"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "c9b563e5feefd4250da914d402e69f82"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/.*\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|avif|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-b6d2ff46fa77ea86c7cd.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
