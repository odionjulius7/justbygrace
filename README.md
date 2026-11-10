# Just By Grace Wedding Web Application

A cinematic, modern wedding celebration web application built with **React 19**, **TypeScript**, **Vite**, **Tailwind CSS**, and **Framer Motion**.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vite.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/vite`
- **Animations**: [Framer Motion](https://motion.dev/) (cinematic transitions, parallax reveals, and interactive hover states)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Utility**: `clsx` & `tailwind-merge` for class name composition

---

## 📁 Clean Folder Structure

```
JustByGraceWedding/
├── src/
│   ├── assets/             # Media assets, photography, and icons
│   │   ├── images/
│   │   └── icons/
│   ├── components/         # Modular feature and section components
│   │   ├── ui/             # Reusable animated UI atoms (Button, Card, Badge)
│   │   │   ├── Badge.tsx
│   │   │   ├── Button.tsx
│   │   │   └── Card.tsx
│   │   ├── Countdown.tsx      # Live animated wedding countdown
│   │   ├── EventDetails.tsx   # Ceremony, cocktail, and dinner itineraries
│   │   ├── FAQSection.tsx     # Accordion FAQ answers for attendees
│   │   ├── GalleryPreview.tsx # Interactive lightbox & filterable gallery
│   │   ├── Hero.tsx           # Cinematic landing hero with subtle sparkle motion
│   │   ├── RSVPSection.tsx    # Interactive RSVP response form & celebration state
│   │   └── StoryTimeline.tsx  # Scroll-animated love story roadmap
│   ├── layouts/            # Page shell and layout wrappers
│   │   ├── Footer.tsx         # Monogram and wedding blessings footer
│   │   ├── MainLayout.tsx     # Ambient background glow and layout container
│   │   └── Navbar.tsx         # Sticky glassmorphism header with mobile menu
│   ├── types/              # TypeScript interfaces and schema types
│   │   └── index.ts
│   ├── utils/              # Utility helpers
│   │   └── cn.ts
│   ├── App.css
│   ├── App.tsx             # Master page assembly
│   ├── index.css           # Tailwind CSS imports & custom typography
│   └── main.tsx            # React 19 root bootstrap
├── index.html              # HTML shell with Google luxury serif fonts
├── package.json
├── tsconfig.json
└── vite.config.ts          # Vite configuration with Tailwind CSS plugin
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
The application will be running live at [http://localhost:5173/](http://localhost:5173/).

### 3. Production Build & Verification
```bash
npm run build
npm run preview
```
