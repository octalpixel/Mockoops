if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const r=e=>a(e,c),o={module:{uri:c},exports:t,require:r};s[c]=Promise.all(i.map((e=>o[e]||r(e)))).then((e=>(n(...e),t)))}}define(["./workbox-df677636"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/289-3ef1d324ce684428.js",revision:"3ef1d324ce684428"},{url:"/_next/static/chunks/605-502b56a2172d1332.js",revision:"502b56a2172d1332"},{url:"/_next/static/chunks/65440b33-b32f6d311bd13a1e.js",revision:"b32f6d311bd13a1e"},{url:"/_next/static/chunks/745.aa33b5fac45da279.js",revision:"aa33b5fac45da279"},{url:"/_next/static/chunks/771-2f3a7a1a1e5b884e.js",revision:"2f3a7a1a1e5b884e"},{url:"/_next/static/chunks/781.abd1641b47a3b295.js",revision:"abd1641b47a3b295"},{url:"/_next/static/chunks/framework-59d3fa55eab63908.js",revision:"59d3fa55eab63908"},{url:"/_next/static/chunks/main-96e093dcc0026726.js",revision:"96e093dcc0026726"},{url:"/_next/static/chunks/pages/_app-44f8a77a8770fdc2.js",revision:"44f8a77a8770fdc2"},{url:"/_next/static/chunks/pages/_error-0c23b99be2880f50.js",revision:"0c23b99be2880f50"},{url:"/_next/static/chunks/pages/create-ceca70b425383d0d.js",revision:"ceca70b425383d0d"},{url:"/_next/static/chunks/pages/index-6046d9f20017e953.js",revision:"6046d9f20017e953"},{url:"/_next/static/chunks/pages/loading-9449f7cc775b7d40.js",revision:"9449f7cc775b7d40"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-fa9558d01f16275f.js",revision:"fa9558d01f16275f"},{url:"/_next/static/css/0c9beca3992ce972.css",revision:"0c9beca3992ce972"},{url:"/_next/static/css/3744e69a8555d7d3.css",revision:"3744e69a8555d7d3"},{url:"/_next/static/css/87fdab365db3e868.css",revision:"87fdab365db3e868"},{url:"/_next/static/css/a16566f12be8650b.css",revision:"a16566f12be8650b"},{url:"/_next/static/css/e158c9931f0c4883.css",revision:"e158c9931f0c4883"},{url:"/_next/static/vpV2RB4jCoKHNIDqMbuc0/_buildManifest.js",revision:"107402caec4f91fa2cff74e9bcadce9e"},{url:"/_next/static/vpV2RB4jCoKHNIDqMbuc0/_middlewareManifest.js",revision:"fb2823d66b3e778e04a3f681d0d2fb19"},{url:"/_next/static/vpV2RB4jCoKHNIDqMbuc0/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/assets/icons/Github.svg",revision:"05e6a0360413128d0d38de9c0baac913"},{url:"/assets/icons/Twitter.svg",revision:"24d29183667ba87749173cd6565029a9"},{url:"/assets/icons/check.svg",revision:"9f6f818aa9144d2f17db7ed9c2b70a28"},{url:"/assets/icons/gradients/1.svg",revision:"431c9bdde654666c2bef995f5aa4bc48"},{url:"/assets/icons/gradients/2.svg",revision:"23f95f468b9a3d067832e1112a80338b"},{url:"/assets/icons/gradients/3.svg",revision:"c100bb2d1480afe2442c07bf51e2e023"},{url:"/assets/icons/gradients/4.svg",revision:"93486881ed669ebe7bc8502ecb34269f"},{url:"/assets/icons/gradients/5.svg",revision:"c93ed5635fffb08f246fb829cf3dafdc"},{url:"/assets/icons/gradients/6.svg",revision:"0e46bfbf490a873027bb4582407a0581"},{url:"/assets/icons/gradients/7.svg",revision:"4b6ea6d60e44bf817f101b4af6b36a3c"},{url:"/assets/icons/logo-full-small.svg",revision:"c1e0894e3de1420bef82371af2a7db1b"},{url:"/assets/icons/logo-full.svg",revision:"86e282b88f5d4b6ae90a56285cb1a4b9"},{url:"/assets/images/avatars/1.jpg",revision:"163a26e0ed23801b776bad559eec98cf"},{url:"/assets/images/features/1.webp",revision:"7fa9fc86ffd4048255232fa408c4b5e5"},{url:"/assets/images/features/2.webp",revision:"a0e333cbb32a601473b9252bc16348ca"},{url:"/assets/images/features/3.webp",revision:"bd4ef82cbde5e15525a30cdd79dedf36"},{url:"/assets/images/footer.webp",revision:"ea5b4ecd0abd119fd68bb9b2a1603fd8"},{url:"/assets/thumbnails/angled-presentation.png",revision:"37c98ade717b7a7ddfd6eee164293f74"},{url:"/assets/thumbnails/hello-world.png",revision:"7a60aa19029a3f9b4fd52411a11d8197"},{url:"/assets/thumbnails/laptop.png",revision:"494638a1874ab252cca929883ada53f5"},{url:"/assets/thumbnails/quick-teaser.png",revision:"a734dac7454659d2169c8d3590844377"},{url:"/assets/thumbnails/rotate-title.png",revision:"9e1589d2fd6361064526c0c5a33a8e90"},{url:"/assets/thumbnails/stars.png",revision:"5cd81619932e0dd5d106fc0d24b98ed3"},{url:"/assets/thumbnails/text-reveal.png",revision:"e3f51ebc20861d671efe50eac2880705"},{url:"/favicon.ico",revision:"846acbfeea45118eb09953861ffae66e"},{url:"/icons/apple-touch.png",revision:"7158d4d5c345b41cb6438f1a0b6440b3"},{url:"/icons/icon-192x192.png",revision:"f0b4584c2bb30d79983d0b8de889f6f7"},{url:"/icons/icon-256x256.png",revision:"3f0215eba0a4f9a75fe2835f1759b330"},{url:"/icons/icon-384x384.png",revision:"e690cd9a1414c6273802c483d4272b45"},{url:"/icons/icon-512x512.png",revision:"0bd4f39eac5f5cf038a1103677cf27f3"},{url:"/icons/maskable.png",revision:"46eb3ab149fa2facf62c8117cd0c53b1"},{url:"/manifest.json",revision:"9645719d96a8cf6761126843813ce602"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
