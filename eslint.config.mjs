import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import sonarjs from "eslint-plugin-sonarjs";
import security from "eslint-plugin-security";

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  sonarjs.configs.recommended,
  security.configs.recommended,
  {
    // Visual effects only: Math.random places decorative dots (no security use),
    // and the indexed access is over our own arrays, not user input.
    files: ["lib/effects/**"],
    rules: {
      "sonarjs/pseudo-random": "off",
      "security/detect-object-injection": "off",
    },
  },
  globalIgnores([".next/**", "node_modules/**", "next-env.d.ts"]),
]);
