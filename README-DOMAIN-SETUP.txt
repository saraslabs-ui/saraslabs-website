# SARASLabs Website

Domain: saraslabs.in  
Brand: SARASLabs — Code • Create • Innovate

## Upload to GitHub Pages

1. Open your GitHub repo: `saraslabs-website`
2. Upload all files from this folder:
   - index.html
   - style.css
   - script.js
   - assets/favicon.svg
   - downloads/.gitkeep
3. Go to Settings → Pages
4. Source: Deploy from branch
5. Branch: main / root
6. Custom domain: `saraslabs.in`
7. Save
8. Enable HTTPS after DNS becomes active

## BigRock DNS for GitHub Pages

Add these A records:

@ 185.199.108.153  
@ 185.199.109.153  
@ 185.199.110.153  
@ 185.199.111.153  

Add this CNAME:

www sjlshkl-commits.github.io

## Setup files

Put your software setup files inside the `downloads` folder.

Current download links in index.html:

downloads/SARAS_Medical_ERP_Setup.exe  
downloads/SARAS_Medical_ERP_Setup.zip

If your actual file name is different, rename the link in index.html.
