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
                "config_profile": resolve(root, 'config_profile','index.html'),
                "edit_profile": resolve(root, 'edit_profile','index.html'),
                "profile": resolve(root, 'profile','index.html'),
                "cita-profile": resolve(root, 'cita_profile','index.html'),
                "productos2_profile": resolve(root, 'productos2_profile','index.html'),
                "productos3_profile": resolve(root, 'productos3_profile','index.html'),
            }
        },
        target: 'esnext'
    }
})