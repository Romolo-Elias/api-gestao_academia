import globals from 'globals';
import pluginJs from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'commonjs',
      globals: {
        ...globals.node, // Configura o ambiente para Node.js
      },
    },
  },
  pluginJs.configs.recommended,
  eslintPluginPrettierRecommended, // Integra o Prettier e suas regras automaticamente
  {
    rules: {
      semi: ['error', 'always'], // Obriga o uso de ponto e vírgula
      'prettier/prettier': [
        'error',
        {
          semi: true,
          singleQuote: true,
          trailingComma: 'es5',
        },
      ],
    },
  },
];
