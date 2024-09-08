import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    base: '/',
    plugins: [react()],
    resolve: {
        alias: {
            src: '/src',
            hooks: '/src/hooks',
            utils: '/src/utils'
        }
    },
    preview: {
        port: 8080,
        strictPort: true
    },
    server: {
        port: 8080,
        strictPort: true,
        host: true,
        origin: 'http://0.0.0.0:8080'
    }
});
