// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
  // Your custom configs here
  {
    rules: {
      'no-undef': 'off',
      'space-before-function-paren': 0,
      '@typescript-eslint/no-unused-vars': 'off',
      'func-call-spacing': 'off',
      'vue/multi-word-component-names': 'off',
    },
  },
);
