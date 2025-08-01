import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import perfectionist from 'eslint-plugin-perfectionist';
import reactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig } from 'eslint/config';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  allConfig: js.configs.all,
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

export default defineConfig([
  {
    extends: compat.extends(
      'next/core-web-vitals',
      'plugin:@typescript-eslint/recommended',
      'prettier',
    ),

    plugins: {
      perfectionist,
      'react-refresh': reactRefresh,
    },

    rules: {
      'css-reorder/rule-name': 2,
      'perfectionist/sort-imports': 'error',
      'perfectionist/sort-interfaces': ['error'],
      'react-refresh/only-export-components': ['off'],
      'perfectionist/sort-intersection-types': [
        'error',
        {
          ignoreCase: true,
          newlinesBetween: 'ignore',

          order: 'asc',

          partitionByComment: false,
          partitionByNewLine: false,
          specialCharacters: 'keep',
          type: 'alphabetical',
          fallbackSort: {
            type: 'unsorted',
          },
        },
      ],

      'perfectionist/sort-jsx-props': [
        'error',
        {
          groups: ['multiline', 'unknown', 'shorthand'],
          ignoreCase: true,

          newlinesBetween: 'ignore',

          order: 'asc',
          partitionByNewLine: false,
          specialCharacters: 'keep',
          type: 'alphabetical',
          fallbackSort: {
            type: 'unsorted',
          },
        },
      ],

      'perfectionist/sort-object-types': [
        'error',
        {
          groups: ['unknown', 'method', 'multiline-member'],
          ignoreCase: true,
          order: 'asc',
          sortBy: 'name',
          specialCharacters: 'keep',
          type: 'alphabetical',
        },
      ],

      'perfectionist/sort-objects': [
        'error',
        {
          groups: ['unknown', 'method', 'multiline-member'],
        },
      ],
    },
  },
]);
