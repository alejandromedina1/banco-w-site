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
                "pagos": resolve(root, 'pagos','index.html'),
                "simuladores": resolve(root, 'simuladores','index.html'),
                "simuladorcdt": resolve(root, 'simuladorcdt','index.html'),
                "simulador-clave-2000": resolve(root, 'simulador-clave-2000','index.html'),
                "simulador-libranza": resolve(root, 'simulador-libranza','index.html'),
                "simulador-credito": resolve(root, 'simulador-credito','index.html'),
                "simulador-ahorro": resolve(root, 'simulador-ahorro','index.html'),
                "credito-inmediato": resolve(root, 'credito-inmediato','index.html'),
                "deposito": resolve(root, 'deposito','index.html'),
                "reclamar-giros": resolve(root, 'reclamar-giros','index.html'),
                "cuenta-ahorros": resolve(root, 'cuenta-ahorros','index.html'),
                "enviar-giros": resolve(root, 'enviar-giros','index.html'),
                "cdt": resolve(root, 'cdt','index.html'),
                "ahorradores_inversionistas": resolve(root, 'ahorradores_inversionistas','index.html'),
                "pqrs": resolve(root, 'pqrs','index.html'),
                "business-people": resolve(root, 'business-people','index.html'),
                "yo-construyo": resolve(root, 'yo-construyo','index.html'),
                "inmueble-productivo": resolve(root, 'inmueble-productivo','index.html'),
                "contratos-reglamentos": resolve(root, 'contratos-reglamentos','index.html'),
            }
        },
        target: 'esnext'
    }
})