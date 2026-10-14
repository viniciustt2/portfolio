# Personal Portfolio Website — Project Brief

## Goal

Build a personal website that introduces Vinícius, presents his software projects, and gives recruiters and developers one place to learn about his work and contact him.

The site should be easy to update as new projects are completed. It will live in its own GitHub repository and deploy independently from the URL shortener.

## Audience

- Recruiters and hiring managers reviewing a candidate's work.
- Developers who want to understand how a project was built.
- Anyone looking for Vinícius's contact and professional links.

## First version

Keep the first release focused and fast to scan. It should include:

1. **Hero** — name, a concise role or professional focus, a short introduction, and clear links to projects and contact details.
2. **About** — a brief, factual summary of background, interests, and the kind of role or work being pursued.
3. **Projects** — a responsive set of project cards. Start with Shortly, the URL shortener, and add future projects as they are ready.
4. **Contact** — links to GitHub, LinkedIn, and email.
5. **Footer** — name, current year, and the same professional links.

## Project card content

Each project card should show:

- Project name and one-sentence summary.
- The problem it solves or what it demonstrates.
- Main technologies.
- Links to the live demo and source repository, when available.
- Optional status such as `Live`, `In progress`, or `Archived`.

### Initial project: Shortly

- **Summary:** A URL shortener with a Next.js frontend and a Cloudflare Workers + D1 hosted demo.
- **What it demonstrates:** Short-code generation, redirection, click tracking, rate limiting, and trade-offs between a full local architecture and a low-cost serverless deployment.
- **Demo:** https://url-shortener-nine-wine.vercel.app/
- **Source:** https://github.com/viniciustt2/url-shortener

## Design direction

- Clear, modern, and personal; keep the focus on the work rather than decorative effects.
- Strong typography, generous spacing, and a restrained color palette.
- Use subtle motion only where it improves feedback or navigation.
- Make project links and contact actions easy to spot.
- Design mobile-first and ensure the layout works well on narrow screens.
- Avoid filler text, invented credentials, unsupported skill claims, and placeholder project cards in the finished site.

## Suggested implementation

- Next.js with TypeScript.
- Store project details in a small local data file so adding a project does not require editing page layout code.
- Deploy the site independently on Vercel.
- No database, login, or backend is needed for the first version.
- Prefer accessible semantic HTML, descriptive link labels, and good color contrast.
- Add page metadata and a social preview image before launch.

## Content to provide before launch

- Preferred display name and role/title.
- A short introduction and About text.
- Current location, if it should be public.
- GitHub, LinkedIn, and contact email links.
- Preferred site language: English, Portuguese, or both.
- Profile photo or avatar, if desired.
- Any projects to feature after Shortly.

Do not publish personal contact details or location unless explicitly intended for the public site.

## Initial acceptance checklist

- The homepage explains who Vinícius is and what he works on within a few seconds.
- Shortly has working demo and GitHub links.
- The layout is usable on desktop and mobile.
- Contact and social links point to the intended destinations.
- The page has a descriptive title, metadata, and favicon.
- The site builds and deploys from its separate repository.
- Adding another project is straightforward and does not require duplicating card markup.

## Out of scope for the first version

- Blog or CMS.
- Contact form and message storage.
- Database or user accounts.
- Complex animations or a custom design system.
- An exhaustive resume embedded on the homepage.

