module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'react'],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react/recommended',
      'next',
      'eslint-config-prettier',
    ],
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      // Add any custom rules or overrides here
    },
  };