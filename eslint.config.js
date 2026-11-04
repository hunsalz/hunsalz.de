import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginAstro from "eslint-plugin-astro";

export default [
    {
        ignores: [".astro/**", "dist/**"],
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    ...pluginAstro.configs.recommended,
];
