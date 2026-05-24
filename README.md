# Hari Prasanth V — Senior/Lead Frontend Engineer Portfolio

A premium, engineering-focused portfolio web application built for **Hari Prasanth V** (Frontend Engineer specializing in React, Next.js, and TypeScript) with a minimalist aesthetic, specifically optimized to target the German tech market. 

This repository houses the entire frontend and backend server logic, leveraging modern technologies like React 19, TypeScript, Express, Tailwind CSS v4, and GSAP.

---

## 🚀 Live Links & Status
* **Portfolio URL:** [hari-prasanth-v-software-engineer.vercel.app](https://hari-prasanth-v-software-engineer.vercel.app)
* **German Market Compatibility:** EU Blue Card eligible · Open to relocation to Germany · Visa sponsorship required
* **Languages:** English (Professional B2+), German (Beginner A1, learning towards B2), Tamil (Native), Hindi (Conversational)
* **Notice Period:** 15 Days (Quick availability)

---

## 🛠 Tech Stack

| Category | Technologies | Description |
|---|---|---|
| **Core Frontend** | React 19, Vite, TypeScript | Modern, type-safe development with fast HMR |
| **Styling** | Tailwind CSS v4, Vanilla CSS | Next-gen Tailwind styling, custom theme system with native CSS variables |
| **Animations** | GSAP, Motion | Smooth custom cursor tracking, scroll animations, micro-interactions |
| **State & Data** | React Context API, custom hooks | Standard light-weight data flow and centralized translation states |
| **Localization** | Custom i18n JSON Catalogs | High-speed static translation loader supporting 4 languages |
| **Backend API** | Express | Dev server routing, custom static asset serving, and secure contact API endpoints |
| **Tooling** | Lucide React, Formik, Yup | Helper libraries for validated forms and icon packages |

---

## ✨ Features & Architecture Highlights

### 1. Multi-Language Localization (i18n)
* Full translation catalogs for 4 languages: **English (`en`)**, **German (`de`)**, **Tamil (`ta`)**, and **Hindi (`hi`)**.
* Easily toggleable from the navbar widget, modifying the app context without reloading.

### 2. Custom CSS Variable Theme Engine
* Implements a full Light/Dark mode with seamless system settings detection.
* Uses modern CSS custom properties (`--color-bg-primary`, etc.) inside `@theme` blocks in Tailwind CSS v4 to support instant transitions.

### 3. Modular Engineering Philosophy & Deep Dives
* Highlights detailed real-world engineering project case studies.
* Explains architectural reasoning, trade-offs considered (e.g. Redux vs. React Query + Context, DOM Virtualization vs. Infinite Scroll), and lessons learned.

### 4. Interactive UX Enhancements
* Custom GSAP-driven cursor follow-ring that expands during interactive hovers.
* CSS-based scroll behaviors and slide animations to guide the user's attention.

---

## 📁 Repository Directory Structure

```text
├── public/                     # Static assets (images, profile pictures, documents)
│   ├── images/
│   │   ├── profile/            # Profile photos (e.g., hari.jpg)
│   │   └── projects/           # Screenshots of portfolio works (crayoon.jpg, vigilance.jpg, shopq.jpg)
│   └── Hari_Prasanth_V_German.pdf # Latest resume download file
│
├── src/                        # Core Application Source Code
│   ├── components/
│   │   ├── nav/                # Navigation bar component & mobile menu
│   │   ├── sections/           # Modular portfolio page sections (Hero, About, Skills, etc.)
│   │   └── ui/                 # Reusable UI primitives (buttons, chips, theme toggle, accordion)
│   ├── context/                # React i18n context & dark/light theme context providers
│   ├── data/                   # Single source of truth data (portfolio.ts) for developer details
│   ├── hooks/                  # Custom hooks (e.g. usePortfolioData to merge data with locales)
│   ├── locales/                # JSON dictionaries for en, de, hi, ta translations
│   ├── types/                  # Shared TypeScript interface definitions
│   ├── App.tsx                 # Main layout wrapper and cursor registration
│   ├── index.css               # Main styling rules, custom scrollbars, and Tailwind v4 themes
│   └── main.tsx                # Entry point
│
├── .env.example                # Template for environment variables (Gemini AI keys, etc.)
├── server.ts                   # Express.js developer server setup with Vite middleware
├── tsconfig.json               # TypeScript compilation settings
├── vite.config.ts              # Vite bundle configuration using Tailwind CSS v4 integration
└── package.json                # Project dependencies and deployment scripts
```

---

## 💻 Local Development Setup

### Prerequisites
* **Node.js** (v18+ recommended)
* **npm** (v9+)

### Installation

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/hariprasanth-dev/Hari_Prasanth_portfolio.git
   cd Hari_Prasanth_portfolio
   ```

2. Install the required dependencies:
   ```bash
   npm install
   ```

3. Create your environment config file:
   ```bash
   cp .env.example .env.local
   ```
   Add your keys (e.g. `GEMINI_API_KEY`) if you integrate Gemini functions, or configure local parameters.

4. Spin up the development server:
   ```bash
   npm run dev
   ```
   This runs `server.ts` via `tsx` compiler. The application launches a custom Express server that integrates Vite middleware.
   
5. Open your browser and navigate to:
   * **URL:** [http://localhost:3006](http://localhost:3006)

---

## ⚙️ Customization Guide

### 1. Update Personal & Project Data
The application data is completely structured and decoupled from components. To customize details, edit:
👉 [src/data/portfolio.ts](file:///d:/Programming/portfolio/Hari_Prasanth_portfolio/src/data/portfolio.ts)

You can modify contact details, timeline, tech stack chips, and architectural deep-dive notes here.

### 2. Update Translations & Language Labels
To add or change translated text for any of the sections, edit the respective JSON file in:
👉 [src/locales/](file:///d:/Programming/portfolio/Hari_Prasanth_portfolio/src/locales/)
* [en.json](file:///d:/Programming/portfolio/Hari_Prasanth_portfolio/src/locales/en.json) (English)
* [de.json](file:///d:/Programming/portfolio/Hari_Prasanth_portfolio/src/locales/de.json) (German)
* [hi.json](file:///d:/Programming/portfolio/Hari_Prasanth_portfolio/src/locales/hi.json) (Hindi)
* [ta.json](file:///d:/Programming/portfolio/Hari_Prasanth_portfolio/src/locales/ta.json) (Tamil)

### 3. Swap Media Assets
To ensure the site links load your actual documents:
* **Resume PDF:** Place your CV at `public/Hari_Prasanth_V_German.pdf` (it is downloaded by the resume CTA button).
* **Project Images:** Place screenshots (16:9 ratio) under `public/images/projects/` matching the file names defined in `portfolio.ts` (`crayoon.jpg`, `vigilance.jpg`, `shopq.jpg`).
* **Profile Image:** Place your headshot photo at `public/images/profile/hari.jpg`.

### 4. Connect Contact Form Backend
The form sends a `POST` request to the Express endpoint `/api/contact` on the server:
* Currently, the endpoint prints submissions to the server console.
* To route submissions to your email, you can integrate a custom service (like **Resend** or **Nodemailer**) in `server.ts` or replace the endpoint inside [Contact.tsx](file:///d:/Programming/portfolio/Hari_Prasanth_portfolio/src/components/sections/Contact.tsx) with a service like [Formspree](https://formspree.io/).

---

## 🚀 Deployment

The site is production-ready for deployment on **Vercel** or any cloud platform:

1. Connect your repository to your Vercel Dashboard.
2. Configure settings:
   * **Framework Preset:** Vite
   * **Build Command:** `npm run build` (runs `vite build` to output production bundle)
   * **Output Directory:** `dist`
   * **Install Command:** `npm install`
3. If keeping the Express contact backend, you can migrate `server.ts` logic to Vercel Serverless Functions under an `/api/` directory structure, or use a client-side form provider directly.

---

## 📄 License
This project is licensed under the **Apache-2.0 License**. See the headers in individual files for license specifications.
