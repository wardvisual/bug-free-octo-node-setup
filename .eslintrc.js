module.exports = {
    env: {
        es2021: true,
        node: true,
        jest: true,
    },
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'plugin:import/typescript',
        'plugin:import/warnings',
        'plugin:import/errors',
        'eslint:recommended',
        'airbnb',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint', 'prettier', 'import'],
    rules: {
        'prettier/prettier': 'error',
        'import/extensions': 'off',
        'no-console': 'off',
        'import/order': [
            'error',
            {
                'newlines-between': 'never',
                groupps: [
                    ['builtin', 'external'],
                    ['internal', 'parent', 'sibling', 'index'],
                ],
            },
        ],
    },
    settings: {
        'import/parses': {
            '@typescript-eslint/parser': ['.ts'],
        },
        'import/resolver': {
            typescript: {
                alwaysTryTypes: true,
                project: './tsconfig.json',
            },
        },
    },
};