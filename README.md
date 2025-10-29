# RJ-Dairy

Next.js version of the R&J Dairy PHP application, built with modern web technologies.

## Tech Stack

- **Next.js** - React framework with pages router
- **React** - JavaScript library for building user interfaces
- **Tailwind CSS** - Utility-first CSS framework
- **Firebase** - Backend services (Firestore for contact form submissions)
- **React Icons** - Popular icon library
- **pnpm** - Fast, disk space efficient package manager

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- pnpm package manager

### Installation

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Set up environment variables:
   - Create a `.env.local` file in the root directory
   - Add your Firebase configuration:
     ```env
     NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
     NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
     NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
     NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
     NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
     NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
     NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_recaptcha_site_key
     ```

3. Run the development server:
   ```bash
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── components/          # Reusable React components
│   ├── home/           # Home page specific components
│   ├── ui/             # General UI components
│   └── forms/          # Form components
├── config/             # Configuration files
│   └── firebase-config.js
├── data/               # JSON data files
├── layout/             # Layout components
│   └── Layout.js
├── pages/              # Next.js pages (pages router)
├── public/             # Static assets
│   └── assets/         # Images, fonts, etc.
├── styles/             # Global CSS and Tailwind imports
├── next.config.js      # Next.js configuration
├── package.json        # Dependencies and scripts
├── postcss.config.cjs  # PostCSS configuration
└── tailwind.config.js  # Tailwind CSS configuration
```

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm dev:webpack` - Start development server with webpack (bypass Turbopack)
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## Features

- Responsive design with Tailwind CSS
- Navigation component with nested dropdown menus
- Firebase Firestore integration for contact form
- Google reCAPTCHA Enterprise v3 integration
- Weather widget with Open-Meteo API
- Typewriter animation for page banners
- Reusable component architecture
- Pages router structure

## Environment Variables

Make sure to set up the following environment variables in `.env.local`:

- `NEXT_PUBLIC_FIREBASE_API_KEY`
- `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
- `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
- `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
- `NEXT_PUBLIC_FIREBASE_APP_ID`
- `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`

## Firebase Setup

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Firestore Database
3. Create a collection named `contactSubmissions` in Firestore
4. Set up reCAPTCHA Enterprise v3 in Google Cloud Console
5. Add your configuration values to `.env.local`

## Contributing

This project follows standard Next.js conventions and React best practices.
