<!--
  Same layout as https://github.com/terkelg/terkelg — HTML in Markdown + SVG images from a Cloudflare Worker.

  Profile repo: create https://github.com/zahiraIi/zahiraIi and put this readme.md there.

  Worker URL (you only know it after the first deploy):
  - In terkelg-profile-template, `wrangler.toml` sets name = "github-profile-readme".
  - Cloudflare assigns: https://github-profile-readme.<your-workers-subdomain>.workers.dev
  - The middle segment is your account’s workers.dev subdomain (Workers & Pages → overview), not your GitHub username.
  - Run `pnpm deploy` from that folder; Wrangler prints the exact URL. Use only the hostname (no path, no "https://") when replacing YOUR_PROFILE_README_WORKER_HOST below.

  1) `pnpm install` and `pnpm stats` (needs API_TOKEN_GITHUB) to build src/stats.json.
  2) Edit `src/render.ts` (BODY_COPY, etc.).
  3) `pnpm deploy` (Wrangler + Cloudflare login), then paste hostname into this file.

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
