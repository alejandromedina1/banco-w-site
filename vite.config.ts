import { resolve } from "path";
import { defineConfig } from "vite";

const root = resolve(__dirname,'src')
const outDir = resolve(__dirname, 'dist')

export default defineConfig({
    root,
    build:{
        outDir,
        emptyOutDir:true,
        rollupOptions: {
            input:{
                main: resolve(root, 'index.html'),
                "profile": resolve(root, 'profile', 'index.html'),
                "login": resolve(root, 'login', 'index.html'),
                "registro": resolve(root, 'register', 'index.html'),
            }
        },
        target: 'esnext'
    }
})