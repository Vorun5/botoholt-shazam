import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [svgr(), react()],
    resolve: {
        alias: {
            src: '/src',
            components: '/src/components',
            hooks: '/src/hooks',
            styles: '/src/styles',
            assets: '/src/assets',
            pages: '/src/pages',
            lib: '/src/lib',
        },
    },
})
