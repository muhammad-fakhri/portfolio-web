if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return n[e]||(i=new Promise((async i=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]}))},i=(i,n)=>{Promise.all(i.map(e)).then((e=>n(1===e.length?e[0]:e)))},n={require:Promise.resolve(i)};self.define=(i,s,r)=>{n[i]||(n[i]=Promise.resolve().then((()=>{let n={};const a={uri:location.origin+i.slice(1)};return Promise.all(s.map((i=>{switch(i){case"exports":return n;case"module":return a;default:return e(i)}}))).then((e=>{const i=r(...e);return n.default||(n.default=i),n}))})))}}define("./sw.js",["./workbox-1ca495a9"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/0y36x_6gp75cIno8AVUJx/_buildManifest.js",revision:"0y36x_6gp75cIno8AVUJx"},{url:"/_next/static/0y36x_6gp75cIno8AVUJx/_ssgManifest.js",revision:"0y36x_6gp75cIno8AVUJx"},{url:"/_next/static/chunks/0e226fb0.1a6c312223a4612a8e5b.js",revision:"0y36x_6gp75cIno8AVUJx"},{url:"/_next/static/chunks/71247caf95475e3ea7f9a0f8a30beb258b23d005.74ea801a05e301e02e21.js",revision:"0y36x_6gp75cIno8AVUJx"},{url:"/_next/static/chunks/f6078781a05fe1bcb0902d23dbbb2662c8d200b3.e1f0db8bc2392b4f82e8.js",revision:"0y36x_6gp75cIno8AVUJx"},{url:"/_next/static/chunks/framework.ae55bf7e6c20d673e3c3.js",revision:"0y36x_6gp75cIno8AVUJx"},{url:"/_next/static/chunks/main-9973564d417c602a7c25.js",revision:"0y36x_6gp75cIno8AVUJx"},{url:"/_next/static/chunks/pages/_app-af1d12f6037a0be87c1c.js",revision:"0y36x_6gp75cIno8AVUJx"},{url:"/_next/static/chunks/pages/_error-5683fe6e4c0c24b20507.js",revision:"0y36x_6gp75cIno8AVUJx"},{url:"/_next/static/chunks/pages/index-ab5a4cdd9b7fc83ffc2a.js",revision:"0y36x_6gp75cIno8AVUJx"},{url:"/_next/static/chunks/polyfills-144e5fa6fafab6397d9c.js",revision:"0y36x_6gp75cIno8AVUJx"},{url:"/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js",revision:"0y36x_6gp75cIno8AVUJx"},{url:"/about.svg",revision:"6a3966fb7a834f454712c4596dd67d99"},{url:"/about.txt",revision:"16e8d178f8abe60047aeff8b7a829ec9"},{url:"/android-chrome-192x192.png",revision:"37476d8f708d1eb39036003a15ac8be5"},{url:"/android-chrome-512x512.png",revision:"cb0052f45d299b9d7761eb4c27de2d1c"},{url:"/apple-touch-icon.png",revision:"59877f23bdc805367489119d7e3f73e5"},{url:"/cimb.png",revision:"ecb9ab4d309bfef33b1c7a1a52ee5b3a"},{url:"/codepanda.png",revision:"f290c4e0c88dd278adb272946f8ab28c"},{url:"/experience.svg",revision:"e018df5592ccda0cb1bed79b4382f916"},{url:"/favicon-16x16.png",revision:"e789b894140555d9984e00656e0358ae"},{url:"/favicon-32x32.png",revision:"850b1e4fbbe1d40df5b7735c31a59655"},{url:"/favicon.ico",revision:"98ac873d5869427bc5f8f586ea90d7ad"},{url:"/himalkomipb.jfif",revision:"d4f460ef87eb795b007c56fa49f3e6aa"},{url:"/icon-192x192.png",revision:"b80848ccd039fbb886defdf7383abdf4"},{url:"/icon-256x256.png",revision:"acf640de9eded7d18baf5d6ee4aaa2be"},{url:"/icon-384x384.png",revision:"fadf6fd72e7414503f4b8dbfac0f0def"},{url:"/icon-512x512.png",revision:"b121dc3cfdb786b46b1442400f4f16b0"},{url:"/icon.jfif",revision:"7e9f72a263337f2b8a69d30b3318656c"},{url:"/ieeesbipb.jfif",revision:"cbc1de1640d013413857dee416f8b5ee"},{url:"/ipb.jfif",revision:"c9ba5d72b29c145483ad2cada4588c4a"},{url:"/ittoday.jfif",revision:"89bad462ce5b9d59e88d1d2f2f10255b"},{url:"/landing.svg",revision:"6edb1a99e74e31a7a3f3f0eeb6250d64"},{url:"/lingotalk.jfif",revision:"0015f38a72dfff2003129e02581eeefe"},{url:"/manifest.webmanifest",revision:"37405fd21db9b066cc72c8ff2278e060"},{url:"/profile.jpg",revision:"c033187ff324cced4132f251798902d1"},{url:"/projects.svg",revision:"1d6f5005e24ee7774f8a6280d75d661d"},{url:"/shopee.jfif",revision:"8b067963dd9bce7ff9596f706fff9a90"},{url:"/skill.svg",revision:"44f72ed9ce281d77f1459e47660e6c58"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
