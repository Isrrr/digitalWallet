module.exports = {
  root: true,
  extends: ['@react-native-community', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    parser: 'babel-eslint'
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-explicit-any': ['off'],
    'react/no-unstable-nested-components': ['off'],
    'no-console': 'off',
    'no-debugger': 'off',
    'arrow-parens': 0,
    'import/order': 0,
    'comma-dangle': ['error', 'never'],
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
    'no-extra-boolean-cast': 0,
    'space-before-function-paren': 0,
    'react/jsx-indent': [1, 2],
    'react/jsx-indent-props': [1, 2],
    'react/jsx-closing-bracket-location': [
      1,
      { selfClosing: 'tag-aligned', nonEmpty: 'tag-aligned' }
    ],
    'no-useless-catch': 0,
    'no-empty': ['error', { allowEmptyCatch: true }],
    'spaced-comment': [
      'error',
      'always',
      {
        exceptions: ['*'],
        block: {
          exceptions: ['*'],
          balanced: true
        }
      }
    ]
  }
}
