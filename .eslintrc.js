module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'jest'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'react-app',
    'react-app/jest',
    'prettier',
  ],
  rules: {
    'react/prop-types': 0,
    'react/display-name': 0,
  },
};
