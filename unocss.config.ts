import { defineConfig, presetIcons, presetWebFonts } from "unocss";
import presetUno from "@unocss/preset-uno";

export default defineConfig({
    theme: {
        fontFamily: {
            sans: ["Open Sans", "ui-sans-serif", "system-ui", "sans-serif"],
            headline: [
                "Overpass",
                "Open Sans",
                "ui-sans-serif",
                "system-ui",
                "sans-serif",
            ],
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
                    typo: "var(--color-ui-typo)",
                    border: "var(--color-ui-border)",
                },
            },
        },
    },
    presets: [
        presetUno(),
        presetIcons(),
        presetWebFonts({
            fonts: {
                sans: "Open Sans",
                headline: "Overpass",
                mono: "Overpass Mono",
            },
        }),
    ],
    rules: [["icon-lg", { "font-size": "4rem" }]],
});