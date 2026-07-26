# SARASLabs GenZ Website V2

A complete redesign of saraslabs.in with:

- GenZ-inspired visual language
- Modern dark interface with neon lime, purple and pink accents
- Featured Saras Poll product card
- Live Saras Poll link: https://npspoll.vercel.app/
- SARAS ERP Legacy and NextGen product sections
- Animated hero product mockups
- Interactive screenshot showcase with 19 real ERP screens
- Roadmap, manifesto, download and contact sections
- Responsive desktop and mobile layout
- Preserved custom domain through CNAME
- Preserved ERP GitHub Release download link

## Deployment

Replace the existing repository files with the contents of this folder, keeping the same repository.

Then run:

```powershell
git add .
git commit -m "feat: launch SARASLabs GenZ website v2 with Saras Poll"
git push origin main
```

GitHub Pages will redeploy automatically. The `CNAME` file remains set to:

```text
saraslabs.in
```

## Important

The website imports Google Fonts. If fonts fail to load, the design automatically falls back to local system fonts.
