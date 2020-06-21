module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/recommended',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  ignorePatterns: ['**/assets/*'],
  overrides: [
    {
      files: ['**/*.config.js'],
      parserOptions: {
        ecmaVersion: 5,
      },
      rules: {
        'global-require': 'off',
        'import/no-extraneous-dependencies': 'off',
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/no-v-html': 'off',
  },
};
