import cypress from "eslint-plugin-cypress";
import chaiFriendly from "eslint-plugin-chai-friendly";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import prettier from "eslint-plugin-prettier/recommended";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [...compat.extends("plugin:cypress/recommended"), {
    plugins: {
        cypress,
        prettier,
        "chai-friendly": chaiFriendly,
    },

    extends: [
        'eslint:recommended',
        'plugin:cypress/recommended',
        'plugin:prettier/recommended',
    ],

    languageOptions: {
        globals: {
            ...cypress.environments.globals.globals,
            cy: true,
            Cypress: true,
        },
    },

    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
    },

    env: {
        browser: true,
        es2021: true,
        node: true,
    },

    rules: {
        'prettier/prettier': 'error',
        "prefer-template": "error",
        curly: ["error", "all"],
        "no-restricted-globals": "off",
        "no-restricted-syntax": ["error", "DebuggerStatement", "LabeledStatement", "WithStatement"],
        "import/prefer-default-export": "off",
        "no-continue": "off",
        "no-plusplus": "off",
        "no-await-in-loop": "off",
        "no-unused-expressions": "off",
        "no-trailing-spaces": "warn",
        "no-template-curly-in-string": "error",

        "no-unused-vars": ["warn", {
            vars: "all",
            varsIgnorePattern: "[$]",
            args: "none",
        }],

        "no-shadow": "off",
        "import/no-named-as-default": "off",

        "prefer-destructuring": ["warn", {
            VariableDeclarator: {
                object: true,
                array: false,
            },

            AssignmentExpression: {
                object: true,
                array: false,
            },
        }],

        "no-console": "warn",

        "getter-return": ["warn", {
            allowImplicit: true,
        }],

        "no-dupe-args": "error",
        "no-dupe-keys": "error",
        "no-duplicate-case": "error",
        "no-duplicate-imports": "error",
        "no-extra-boolean-cast": "error",
        "no-unreachable": "error",
        "valid-typeof": "error",
        "no-invalid-regexp": "error",
        "no-invalid-this": "error",
        "default-case": "warn",
        "switch-colon-spacing": "error",
        eqeqeq: "warn",
        "no-fallthrough": "error",
        "no-implicit-coercion": "error",
        "no-return-await": "error",
        "require-await": "error",
        "no-useless-return": "error",
        "no-negated-condition": "warn",
        "no-const-assign": "error",
        "no-unneeded-ternary": "warn",
        "no-useless-computed-key": "error",
    },
}];