export default {
  theme: {
    fontFamily: {
      sans: ["Open Sans", "ui-sans-serif", "system-ui", "sans-serif"],
      headline: ["Overpass", "Open Sans", "ui-sans-serif", "system-ui", "sans-serif"],
      mono: ["Overpass Mono", "monospace"],
    },
    extend: {
      screens: {
        xxl: "1400px",
      },
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        ui: {
          primary: "var(--color-primary)",
          secondary: "var(--color-secondary)",
          background: "var(--color-ui-background)",
          sidebar: "var(--color-ui-sidebar)",
          typo: "var(--color-ui-typo)",
          border: "var(--color-ui-border)",
          headline: "var(--color-ui-headline)",
          overline: "var(--color-ui-overline)",
        },
      },
    },
    container: {
      center: true
    },
  },
  scan: {
    dirs: ["./"],
    exclude: ["node_modules", ".git", "dist", ".cache", ".temp"],
  },
  preflight: {
    alias: {
      // add gridsome aliases
      "g-link": "a",
      "g-image": "img",
    },
  },
};
