PERSONAL WL TOOLKIT PWA

Upload ALL files and the icons folder to the root of an HTTPS website (such as GitHub Pages or Netlify). Keep index.html, sw.js, registerSW.js, and manifest.webmanifest together.

Open the website in Chrome on Android, then use Install app / Add to Home screen. Open once while online before using offline.

Existing browser data is tied to the original website origin. If moving to a new domain, use the toolkit Save JSON and Restore features to migrate data. Back up first.

The app shell works offline after initial load. Browser folder access, synced kPod PDF locations, external links and online integrations may require online access or permission and may not work on all mobile browsers.

On updates, change the cache version in sw.js and redeploy.
