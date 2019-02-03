module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    semi: ['error', 'never'],
    'import/no-extraneous-dependencies': [
      'off',
      { devDependencies: ['**/*.config.js', '**/*.spec.[jt]s'] },
    ],
  },
  overrides: [
    {
      files: ['*.config.js'],
      rules: {
        'global-require': 'off',
        'import/no-extraneous-dependencies': 'off',
      },
    },
    {
      files: ['*.vue'],
      rules: {
        indent: 0,
        'vue/html-indent': ['error', 2, { baseIndent: 1 }],
        'vue/script-indent': ['error', 2, { baseIndent: 1, switchCase: 1 }],
      },
    },
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
}
