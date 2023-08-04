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
                "login": resolve(root, 'login', 'index.html'),
                "sign-up": resolve(root, 'sign-up', 'index.html'),
                "config-profile": resolve(root, 'config-profile','index.html'),
                "edit-profile": resolve(root, 'edit-profile','index.html'),
                "profile": resolve(root, 'profile','index.html'),
                "cita-profile": resolve(root, 'cita_profile','index.html'),
            }
        },
        target: 'esnext'
    }
})