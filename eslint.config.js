import antfu from '@antfu/eslint-config'

export default antfu({

}, { ignores: ['HeoMusic-2.3/*'] }, { rules: {
  'no-console': 'off',
  'unicorn/consistent-function-scoping': 'off',
} })
