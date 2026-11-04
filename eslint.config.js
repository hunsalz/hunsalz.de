import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginAstro from "eslint-plugin-astro";
import pluginPrettier from "eslint-plugin-prettier";

export default [
    {
        ignores: [".astro/**", "dist/**"],
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    ...pluginAstro.configs.recommended,
    {
        files: ["**/*.{js,ts,astro}"],
        plugins: {
            prettier: pluginPrettier,
        },
        rules: {
            "prettier/prettier": "error",
        },
    },
];
