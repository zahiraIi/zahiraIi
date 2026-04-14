<!--
  Same layout as https://github.com/terkelg/terkelg — HTML in Markdown + SVG images from a Cloudflare Worker.

  1) Fork or copy `terkelg-profile-template/` in this repo (cloned from terkelg/terkelg).
  2) In `scripts/stats.ts`, set `username` to your GitHub login; add `API_TOKEN_GITHUB` and run `pnpm install` then `pnpm stats` to build `src/stats.json`.
  3) In `src/render.ts`, edit `BODY_COPY` and any labels you want.
  4) Deploy the Worker (`pnpm deploy` with Wrangler) and note its URL (e.g. https://YOUR_WORKER.YOUR_ACCOUNT.workers.dev).
  5) Replace every `YOUR_PROFILE_README_WORKER_HOST` below with that host (hostname only, no https://).
  6) Put this file in a repo named YOUR_USERNAME/YOUR_USERNAME so it shows on your GitHub profile.

  Until you replace the placeholder, images will not load.
-->
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://YOUR_PROFILE_README_WORKER_HOST?section=top&theme=dark">
  <img src="https://YOUR_PROFILE_README_WORKER_HOST?section=top&theme=light" width="100%" height="20" align="left">
</picture>
<a href="https://YOUR_WEBSITE">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://YOUR_PROFILE_README_WORKER_HOST?section=link-website&theme=dark" label="Visit">
    <img src="https://YOUR_PROFILE_README_WORKER_HOST?section=link-website&theme=light&i=0" alt="visit my website" width="100" height="18px" align="left">
  </picture>
</a>
<img src="data:null;," width="100%" height="0" align="left" alt="">
<a href="https://twitter.com/YOUR_HANDLE">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://YOUR_PROFILE_README_WORKER_HOST?section=link-twitter&theme=dark">
    <img src="https://YOUR_PROFILE_README_WORKER_HOST?section=link-twitter&theme=light&i=1" alt="visit my Twitter/X profile" width="100" height="18" align="left">
  </picture>
</a>
<img src="data:null;," width="100%" height="0" align="left" alt="">
<a href="https://www.instagram.com/YOUR_HANDLE">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://YOUR_PROFILE_README_WORKER_HOST?section=link-instagram&theme=dark">
    <img src="https://YOUR_PROFILE_README_WORKER_HOST?section=link-instagram&theme=light&i=2" alt="visit my Instagram" width="100" height="18" align="left">
  </picture>
</a>
<img src="data:null;," width="100%" height="0" align="left" alt="">
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://YOUR_PROFILE_README_WORKER_HOST?section=fallback&theme=dark">
  <img src="https://YOUR_PROFILE_README_WORKER_HOST?section=fallback&theme=light" alt="" width="420" align="left">
</picture>
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://YOUR_PROFILE_README_WORKER_HOST?section=main&theme=dark">
  <img src="https://YOUR_PROFILE_README_WORKER_HOST?section=main&theme=light" alt="Short bio text for accessibility; match BODY_COPY in src/render.ts." width="100%" height="290" align="left">
</picture>
