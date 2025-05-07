
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import astro from "eslint-plugin-astro";
import astroParser from "astro-eslint-parser";
import { defineConfig } from "eslint/config";

export default defineConfig([

  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node }
    }
  },

  // TypeScript config
  ...tseslint.configs.recommended,

  // Astro config
  {
    files: ["**/*.astro"],
    plugins: { astro },
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: tseslint.parser,
        extraFileExtensions: [".astro"],
        project: "./tsconfig.json" // Optional, needed if you use type-aware rules
      }
    },
    extends: ["plugin:astro/recommended"],
    rules: {
      "astro/no-unused-css-selector": "warn",
      "astro/no-set-html-directive": "error"
    }
  }
]);
