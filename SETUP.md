# Portfolio Setup & Deployment Guide

This portfolio for **Hari Prasanth V** is built with a minimalist, engineering-focused aesthetic targeting the German tech market. It uses **React (Vite) + Express + TypeScript + Tailwind CSS**.

## Local Development

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Start Dev Server**:
    ```bash
    npm run dev
    ```
    The site will be available at `http://localhost:3000`. This starts an Express server that serves Vite as middleware and handles the contact form API.

## Customization

### 1. Replace Image Placeholders
The site uses styled placeholders for images. To add your real photos:
- **Profile Photo**: Save your headshot as `public/images/profile/hari.jpg`.
- **Project Screenshots**: Save 16:9 screenshots of your work in `public/images/projects/` as `crayoon.jpg`, `vigilance.jpg`, and `shopq.jpg`.
- **Resume PDF**: Place your latest CV at `public/cv/hari_prasanth_resume.pdf`.

### 2. Connect Contact Form
The contact form currently logs messages to the server console. To receive real emails:
- **Option A (Simple)**: Use a service like [Formspree](https://formspree.io/). Replace the `fetch` URL in `src/components/sections/Contact.tsx` with your Formspree endpoint.
- **Option B (Server)**: Update the `/api/contact` route in `server.ts` to use [Resend](https://resend.com/) or [Nodemailer] with your SMTP credentials.

### 3. Update Social Links
Edit `src/data/portfolio.ts` to update your LinkedIn, GitHub, and phone number.

### 4. Language Proficiency
As you progress in German, update the `proficiency` number and `level` label for German in `src/data/portfolio.ts`.

## Deployment to Vercel

1. **Push to GitHub**: Initialize a repo and push your code.
2. **Connect to Vercel**: 
   - New Project → Import your repository.
   - **Framework Preset**: Vite.
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
3. **Handle API Routes**: If you want to use the Express backend on Vercel, you should migrate the `server.ts` logic to [Vercel Serverless Functions](https://vercel.com/docs/functions/serverless-functions/runtimes/node-js) or simply use a client-side form service.

## Performance & SEO
- The site already uses `next/image` patterns (implemented via standard `img` tags with lazy loading in this environment).
- Core Web Vitals are optimized via code-splitting and minimalist assets.
- Responsive design is handled for all device sizes (Mobile, Tablet, Desktop).
