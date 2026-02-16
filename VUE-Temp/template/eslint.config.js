import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import eslintConfigPrettier from 'eslint-config-prettier'

export default [
    {
        name: 'app/file-to-lint',
        files: ['**/*,{js,mjs,jsx,vue}'],
    },
    {
        name: 'app/files-to-ignore',
        ignore: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**', '**/node_modules/**'],
    },
    js.configs.recommended,
    ...pluginVue.configs['flat/recommended'],
    eslintConfigPrettier
]