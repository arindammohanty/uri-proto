import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "var(--color-brand-blue)",
        },
        background: "var(--color-background)",
        "text-dark": "var(--color-text-dark)",
        "text-medium": "var(--color-text-medium)",
        "text-subtle": "var(--color-text-subtle)",
        "text-muted": "var(--color-text-muted)",
        "text-faint": "var(--color-text-faint)",
        border: "var(--color-border)",
        "hero-placeholder": "var(--color-hero-placeholder)",
        "badge-bg": "var(--color-badge-bg)",
        star: "var(--color-star)",
      },
      borderRadius: {
        btn: "var(--radius-btn)",
        card: "var(--radius-card)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "hero-headline": "var(--font-size-hero-headline)",
        logo: "var(--font-size-logo)",
      },
      screens: {
        xs: "320px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
      },
      boxShadow: {
        nav: "var(--shadow-nav)",
        card: "var(--shadow-card)",
        "card-hover": "var(--shadow-card-hover)",
      },
      maxWidth: {
        container: "var(--max-width-container)",
      },
    },
  },
  plugins: [],
};

export default config;
