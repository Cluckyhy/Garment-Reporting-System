module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard'
  ],
  globals: {
		BASE_URL: true,
    GL_CONS: true,
		GLOBAL_ENV: true,
    ActiveXObject: true,
    defineEmits: true,
    defineProps: true,
    defineExpose: true
	},
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
	  'no-tabs': 'off',
	  'template-curly-spacing': 'off',
    indent: 'off',
    "no-unused-vars":"warn",
    "no-mixed-spaces-and-tabs": 2,
    "eqeqeq": 0,
    'import/first': 'off'
  }
}
