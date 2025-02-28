import { defineConfig } from 'vite'

import TailWindCss from '@tailwindcss/vite'
import ViteAutoImport from 'unplugin-auto-import/vite'
import ViteComponent from 'unplugin-vue-components/vite'
import ViteDts from 'vite-plugin-dts'
import ViteIcons from 'unplugin-icons/vite'
import ViteLegacy from '@vitejs/plugin-legacy'
import { VitePWA } from 'vite-plugin-pwa'
import ViteTsPath from 'vite-tsconfig-paths'
import ViteVueRouter from 'unplugin-vue-router/vite'
import Vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    TailWindCss(),
    ViteAutoImport({
      dirs: ['src/components'],
      imports: [
        'vue',
        'vue-router',
        'pinia'
      ]
    }),
    ViteComponent({ 
      dirs: ['src/components']
    }),
    ViteDts(),
    ViteIcons({
      autoInstall: true
    }),
    ViteLegacy(),
/*     VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },
      includeAssets: ['favicon.ico', 'apple-touch-icon.png'],
      manifest: {
        theme_color: '#ffffff',
        short_name: 'NextServerWeb',
        name: 'NextServerWeb',
        description: 'NextServerWeb',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    }), */
    ViteTsPath(),
    ViteVueRouter({
      routesFolder: 'src/routes',
      extensions: ['.vue'],
    }),
    Vue(),
    VueDevTools()
  ]
})
