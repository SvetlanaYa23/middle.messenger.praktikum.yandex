import { resolve } from 'path'
import { defineConfig } from 'vite'
import handlebars from 'vite-plugin-handlebars';

export default defineConfig({
    root: './src',
    build: {
        outDir: resolve(__dirname, 'dist'),
        rollupOptions: {
            input: {
                index: '/index.html',
                authorization: '/pages/authorization/authorization.html',
                registration: '/pages/registration/registration.html',
                chat: '/pages/chat/chat.html',
                profile: '/pages/profile/profile.html',
                page404: '/pages/404-page/404-page.html',
                page500: '/pages/500-page/500-page.html',
            }
        }
    },
    plugins: [handlebars( {
        partialDirectory: resolve(__dirname, 'src/components'),
    })],
}) 
