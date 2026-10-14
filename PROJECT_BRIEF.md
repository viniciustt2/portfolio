# Personal Portfolio Website — Project Brief

## Goal

Build a personal website that introduces Vinícius, presents his software projects, and gives recruiters and developers one place to learn about his work and contact him.

The site should be easy to update as new projects are completed. It lives in its own GitHub repository and deploys independently from the URL shortener.

## First version

- **Hero:** name, concise introduction, and links to projects and GitHub.
- **About:** a short, factual summary of background and professional interests.
- **Projects:** responsive cards with summaries, technologies, and demo/source links.
- **Contact:** add LinkedIn and email when the public profile details are ready.
- **Footer:** name, year, and professional links.

## Initial project: Shortly

- **Summary:** A URL shortener with a Next.js frontend and a Cloudflare Workers + D1 hosted demo.
- **What it demonstrates:** short-code generation, redirection, click tracking, rate limiting, and architecture trade-offs.
- **Demo:** https://url-shortener-nine-wine.vercel.app/
- **Source:** https://github.com/viniciustt2/url-shortener

## Design direction

- English content and a dark theme by default.
- Clear, modern, and personal; focus on the work instead of decorative effects.
- Strong typography, generous spacing, and a restrained accent color.
- Responsive from mobile to desktop, with accessible contrast and semantic HTML.
- Do not invent credentials, skills, biography details, or project claims.

## Implementation

- Next.js with TypeScript.
- Keep project data separate from page layout so new projects are easy to add.
- No database, login, or backend in the first version.
- Deploy independently on Vercel.

## Content to finish together

- Preferred title or professional focus.
- Short introduction and About text.
- LinkedIn and email links, if they should be public.
- Any profile image or avatar.

## Initial acceptance checklist

- The homepage communicates who Vinícius is and what the site contains quickly.
- Shortly has working demo and GitHub links.
- The page works on mobile and desktop.
- Metadata, title, and favicon are present.
- Adding another project does not require copying page layout markup.