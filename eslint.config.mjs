import globals from 'globals';
import pluginJs from '@eslint/js';

/** @type {import('eslint').Linter.Config[]} */
export default [
    {
    // Note: there should be no other properties in this object
        ignores: ["**/temp.js", "config/*","node_modules/", ]
    },
    { files: ['**/*.js'], languageOptions: { sourceType: 'commonjs' } },
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    {
        rules: {
            semi: 'error', 
            'indent': ['error', 4],
            'no-console': 'off',
            'no-unused-vars': 'warn', 
        },
    },
];
