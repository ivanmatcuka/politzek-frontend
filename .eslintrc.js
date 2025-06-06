module.exports = {
  parser: '@typescript-eslint/parser',

  env: {
    browser: true,
    amd: true,
    node: true,
    es2021: true,
  },

  settings: {
    'import/resolver': {
      node: { extensions: ['.ts', '.tsx'] },
    },
  },

  plugins: ['@typescript-eslint', 'prettier'],

  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/typescript',
    'plugin:import/warnings',
    'plugin:prettier/recommended',
    'plugin:security/recommended',
    'prettier',
    'plugin:storybook/recommended',
  ],

  rules: {
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-var-requires': 0,
    'prettier/prettier': 'error',
    'no-throw-literal': 'error',
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        pathGroupsExcludedImportTypes: [],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        groups: [
          'external',
          'builtin',
          'internal',
          'sibling',
          'parent',
          'index',
        ],
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      { ignoreRestSiblings: true, varsIgnorePattern: '^_' },
    ],
    'security/detect-object-injection': 0,
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
  },
};
