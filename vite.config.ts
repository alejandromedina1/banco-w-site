import { resolve } from "path";
import { defineConfig} from "vite";

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
                "cita_profile": resolve(root, 'cita_profile','index.html'),
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
                "llamadas": resolve(root, 'llamadas','index.html'),
                "business-people": resolve(root, 'business-people','index.html'),
                "giros-internacionales": resolve(root, 'giros-internacionales','index.html'),
                "micro-credito": resolve(root, 'micro-credito','index.html'),
                "dep-bancarios": resolve(root, 'dep-bancarios','index.html'),
                "billetera-w": resolve(root, 'billetera-w','index.html'),
                "corresponsales-giros": resolve(root, 'corresponsales-giros','index.html'),
                "comparator": resolve(root, 'comparator','index.html'),
                "comparator-credit": resolve(root, 'comparator','credit','index.html'),
                "comparator-saving": resolve(root, 'comparator','saving' ,'index.html'),
                "gotahorro": resolve(root, 'gotahorro','index.html'),
                "credito-vehiculo": resolve(root, 'credito-vehiculo','index.html'),
                "seguros": resolve(root, 'seguros','index.html'),
                "preguntas-frecuentes": resolve(root, 'preguntas-frecuentes','index.html'),
                "reportar-siniestros": resolve(root, 'reportar-siniestros','index.html'),
                "soy_patrimonio": resolve(root, 'soy_patrimonio','index.html'),
                "incendio_terremotos": resolve(root, 'incendio_terremotos','index.html'),
                "actualizar_informacion": resolve(root, 'actualizar_informacion','index.html'),
                "trabaja-con-nosotros": resolve(root, 'trabaja-con-nosotros','index.html'),
                "atencion_financiero": resolve(root, 'atencion_financiero','index.html'),
                "atencion-inversionista": resolve(root, 'atencion-inversionista', 'index.html'),
                "estados-financieros": resolve(root, 'estados-financieros', 'index.html'),
                "info-accionistas": resolve(root, 'info-accionistas', 'index.html'),
                "junta-directiva-alta-gerencia": resolve(root, 'junta-directiva-alta-gerencia', 'index.html'),
                "reglamentos": resolve(root, 'reglamentos','index.html'),
                "quienes-somos": resolve(root, 'quienes-somos', 'index.html'),
                "timeline": resolve(root, 'timeline', 'index.html'),
                "fundacion-wwb": resolve(root, 'fundacion-wwb', 'index.html'),
                "proteccion-y-sostenibilidad": resolve(root, 'proteccion-y-sostenibilidad', 'index.html'),
                "licitaciones": resolve(root, 'licitaciones', 'index.html'),
                "info-licitaciones": resolve(root, 'info-licitaciones', 'index.html')

            }
        },
        target: 'esnext'
    }
})