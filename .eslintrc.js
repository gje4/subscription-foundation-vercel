module.exports = {
  env: {
    browser: true,
    node: true,
    es2020: true,
    jest: true
  },
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ["@typescript-eslint", "react", "react-hooks", "prettier"],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "prettier",
    "plugin:prettier/recommended"
  ],
  rules: {
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        vars: "all",
        args: "after-used",
        ignoreRestSiblings: false
      }
    ],
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/no-namespace": 0,
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "import/extensions": [1, { extensions: [".js", ".jsx", ".ts", ".tsx"] }],
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: true
      }
    ],
    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".jsx", ".ts", ".tsx"] }
    ],
    "react/react-in-jsx-scope": 0,
    "react/jsx-first-prop-new-line": 0,
    "react/prop-types": 0,
    "react/jsx-props-no-spreading": [2, { custom: "ignore" }],
    "jsx-a11y/anchor-is-valid": 0,
    "prettier/prettier": ["error", {}, { usePrettierrc: true }],
    "react-hooks/rules-of-hooks": 2,
    "react-hooks/exhaustive-deps": 2,
    "no-bitwise": 0,
    "import/no-extraneous-dependencies": 0
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
      },
      typescript: {}
    },
    react: {
      version: "detect"
    }
  }
};
