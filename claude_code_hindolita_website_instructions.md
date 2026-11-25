# Claude Code Project Brief — Hindolita Chakraborty Website

You are working inside my existing Visual Studio Code project folder. I have already placed the current website HTML and Hindolita's photographs in this folder.

Your job is to take the existing website from its current state to a polished, production-ready, publicly deployable personal artist website.

## 1. First inspect; do not blindly rebuild
- Inspect the entire project folder and identify the current HTML file, image files, and any existing assets.
- Read the current HTML before changing anything.
- Preserve the approved visual direction: quiet minimalist / Apple-like, warm ivory and champagne tones, elegant serif typography, charcoal text, generous whitespace, restrained animation, responsive desktop and mobile layouts.
- Preserve the actual photographs of Hindolita. Do not generate, replace, retouch, or distort her face.
- The “In pictures” / gallery section has intentionally been removed. Do not reintroduce it.
- Keep the website focused on Hindolita Chakraborty as a musician and her artistic journey.
- Do not invent biographical facts, musical qualifications, awards, teachers, performance history, contact details, recordings, or social-media links. Where facts are not supplied, use clearly marked TODO placeholders or omit the content.
- Before substantial changes, make a backup or use Git so that the current approved version can be restored.

## 2. Technical approach
This is currently a simple static HTML website. Prefer the simplest reliable solution:
- Use semantic HTML, CSS, and vanilla JavaScript unless there is a clear reason to introduce a framework.
- Do not migrate to React, Next.js, a CMS, or a paid website builder just for the sake of it.
- Avoid unnecessary dependencies, build steps, server-side code, databases, authentication, analytics, and paid services.
- The site must work as a static website and be deployable on a free static-hosting tier.
- Keep the code readable, organized, and easy for me to maintain in VS Code.

If you decide to split the single HTML file into multiple files, use a clean structure such as:
  /index.html
  /assets/css/style.css
  /assets/js/main.js
  /assets/images/...
Add a README.md with clear local preview and deployment instructions.

Important: the current HTML may already have photographs embedded as base64 data URLs. Inspect this first. If images are embedded, decide whether to keep them embedded or move them into assets/images/ as optimized files. Prefer separate optimized image files for easier maintenance and smaller HTML, but ensure all image paths work after deployment. Do not delete the original photos.

## 3. Quality and accessibility
Check and improve:
- Responsive layout at phone, tablet, laptop, and wide desktop sizes.
- Correct image cropping and focal points, especially the main hero portrait.
- Fast loading and sensible image sizes; use modern WebP where appropriate while retaining original images.
- Descriptive alt text that describes the photo without making unsupported claims.
- Keyboard-accessible navigation, visible focus states, accessible menu button labels and expanded state.
- Reduced-motion support.
- Correct page title, meta description, theme color, favicon placeholder if needed, and social sharing metadata.
- No horizontal overflow, broken links, missing images, JavaScript errors, or console warnings.
- No fake audio player or non-working controls. If recordings have not yet been supplied, label the section as awaiting recordings or omit playback controls.
- Contact links must use real details only after I provide them. Do not invent an email address or phone number.

## 4. Content integrity
Use only information present in the project or explicitly provided by me. The site can currently use restrained general wording, but do not present assumptions as facts. Add TODO comments for information I need to supply, such as:
- Short verified biography
- Music genres / styles
- Musical training and influences
- Selected performances and dates
- YouTube / audio recording URLs
- Contact email and social links

## 5. Local development
Make sure I can preview the website locally from VS Code.
- Provide the simplest method, preferably VS Code Live Server if already installed, or a simple local static server.
- Ensure the homepage is named index.html.
- Test all local asset paths.
- Explain exactly how to run it and which local URL to open.

## 6. Free deployment
Prepare the project for static hosting. Compare these two free options and recommend one for this project:
A. GitHub Pages — suitable for a static HTML/CSS/JS site and provides a free github.io address.
B. Vercel Hobby — also supports static sites and provides a free vercel.app address, subject to its current plan terms.

Do not purchase anything, create accounts, connect services, or change DNS without my explicit approval. Do not claim a deployment is live unless it has actually been deployed and verified.

For GitHub Pages:
- Check whether the project is ready to publish from the repository root.
- Add a .nojekyll file if it is useful/necessary for the chosen structure.
- Write step-by-step instructions to create a GitHub repository, commit and push the project, enable GitHub Pages, choose the correct branch and root folder, and verify the published URL.
- Explain that the free address will look like https://USERNAME.github.io/REPOSITORY/ (or the user site format if configured accordingly).

For Vercel:
- Explain how to import the GitHub repository into Vercel.
- For a plain static HTML site, configure no framework preset and no build command unless needed; set the correct output/root directory.
- Explain how to verify the generated vercel.app URL.

Recommend the simplest option and explain why. Prefer GitHub Pages if no special deployment features are required.

## 7. Custom domain
I may eventually want a domain such as hindolitachakraborty.com, but I do not want to spend money now.
- Explain clearly that hosting can be free, but a custom domain normally has an annual registration fee.
- For now, use the free GitHub Pages or Vercel subdomain.
- If I later buy a domain, explain how to add it in the hosting dashboard and configure DNS records with the registrar.
- Do not guess DNS values. Use the exact records shown by the hosting provider at the time of setup.
- Explain that DNS propagation can take time and HTTPS/SSL should be enabled and verified.
- Do not claim a custom domain is free unless a legitimate current offer is verified.

## 8. Git and safety
- Check for secrets, API keys, personal data, and private files before publishing.
- Add a suitable .gitignore if needed.
- Do not commit editor settings, temporary files, large unrelated files, or private documents.
- Never expose private contact information unless it is intentionally included by me.
- Do not force-push, delete repositories, overwrite remote history, or run destructive commands without asking.
- Before the first public deployment, show me the exact files that will be published and ask me to confirm.

## 9. What I expect you to deliver
1. A cleaned-up, production-ready website that preserves the approved design.
2. A clear project folder structure.
3. A README.md with local run, GitHub setup, deployment, and optional custom-domain instructions.
4. A checklist of anything still needing my real content (bio, recordings, contact links, etc.).
5. A short recommendation: GitHub Pages or Vercel, with the reason.
6. Exact terminal commands I need to run, explained one by one.
7. A final pre-publication checklist.

## 10. Work in stages
Do not rush straight to deployment.
Stage 1: Inspect the project and report the existing files and current implementation.
Stage 2: Make the smallest necessary improvements and test locally.
Stage 3: Prepare GitHub/deployment instructions and review what will become public.
Stage 4: Wait for my approval before pushing to a public repository or deploying.

Start with Stage 1 now. Tell me what you found in the folder before making significant changes.
