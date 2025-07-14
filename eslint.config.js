import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginAstro from "eslint-plugin-astro";
import pluginPrettier from "eslint-plugin-prettier";
import astroEslintParser from "astro-eslint-parser";

export default [
    {
        ignores: [".astro/**/*.d.ts"],
        languageOptions: {
            globals: globals.browser,
        },
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
    {
        rules: {
            "@typescript-eslint/triple-slash-reference": "off",
            "@typescript-eslint/no-explicit-any": "off",
            "@typescript-eslint/no-empty-object-type": "off",
        },
    },
    {
        files: ["**/*.astro"],
        languageOptions: {
            parser: astroEslintParser,
            parserOptions: {
                ecmaVersion: "latest",
                sourceType: "module",
                extraFileExtensions: [".astro"],
            },
        },
    },
    {
        files: ["**/*.cjs"],
        languageOptions: {
            sourceType: "commonjs",
            globals: {
                module: "readonly",
                require: "readonly",
            },
        },
    },
];
