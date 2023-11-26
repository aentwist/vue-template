/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "@vue/eslint-config-typescript",
    "@vue/eslint-config-prettier",
  ],
  plugins: ["import"],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "import/consistent-type-specifier-style": ["error", "prefer-top-level"],
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "import/order": [
      "error",
      {
        "newlines-between": "never",
        alphabetize: {
          order: "asc",
          orderImportKind: "asc",
        },
      },
    ],
  },
};
