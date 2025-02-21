import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import ViteLegacy from '@vitejs/plugin-legacy'
import ViteTsPath from 'vite-tsconfig-paths'
import ViteDts from 'vite-plugin-dts'
import { VitePWA } from 'vite-plugin-pwa'
import ViteAutoImport from 'unplugin-auto-import/vite'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    //@ts-ignore
    vueDevTools(),
    ViteLegacy(),
    ViteTsPath(),
    ViteDts(),
    VitePWA(),
    ViteAutoImport({
      imports: [
        'vue',
        'vue-router',
        'pinia'
      ]
    }),
    tailwindcss()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
