module.exports = [
"[project]/OneDrive/Escritorio/PERROS/spa-perros/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ClienteForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$PERROS$2f$spa$2d$perros$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Escritorio/PERROS/spa-perros/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$PERROS$2f$spa$2d$perros$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Escritorio/PERROS/spa-perros/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$PERROS$2f$spa$2d$perros$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Escritorio/PERROS/spa-perros/node_modules/@supabase/supabase-js/dist/index.mjs [app-ssr] (ecmascript) <locals>");
"use client";
;
;
;
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$PERROS$2f$spa$2d$perros$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])('https://enttjeibmwmridctxifn.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVudHRqZWlibXdtcmlkY3R4aWZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM3NjI4OTksImV4cCI6MjA4OTMzODg5OX0.uv33QIm1GGtnhI0oZ_NwNQyRlE4-m0fXbqddJY0iXhQ');
function ClienteForm() {
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$PERROS$2f$spa$2d$perros$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        cliente: '',
        perro: '',
        servicio: '',
        tamano: 'pequeño',
        dia: '',
        horario: '',
        whatsapp: ''
    });
    const [listaPrecios, setListaPrecios] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$PERROS$2f$spa$2d$perros$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [serviciosUnicos, setServiciosUnicos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$PERROS$2f$spa$2d$perros$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [precioActual, setPrecioActual] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$PERROS$2f$spa$2d$perros$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [horasBase, setHorasBase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$PERROS$2f$spa$2d$perros$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [horasFiltradas, setHorasFiltradas] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$PERROS$2f$spa$2d$perros$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [diasActivos, setDiasActivos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$PERROS$2f$spa$2d$perros$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [enviado, setEnviado] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$PERROS$2f$spa$2d$perros$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$PERROS$2f$spa$2d$perros$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const cargarDatos = async ()=>{
            const { data: p } = await supabase.from('configuracion_precios').select('*');
            if (p && p.length > 0) {
                setListaPrecios(p);
                const servicios = Array.from(new Set(p.map((item)=>item.servicio)));
                setServiciosUnicos(servicios);
                setForm((prev)=>({
                        ...prev,
                        servicio: servicios[0]
                    }));
            }
            const { data: h } = await supabase.from('horarios_disponibles').select('*').eq('activo', true).order('hora');
            if (h) setHorasBase(h);
            const { data: d } = await supabase.from('dias_disponibles').select('*').eq('activo', true);
            if (d) setDiasActivos(d);
        };
        cargarDatos();
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$PERROS$2f$spa$2d$perros$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!form.dia || !horasBase.length) {
            setHorasFiltradas([]);
            return;
        }
        const fecha = new Date(form.dia + 'T00:00:00');
        const n = fecha.toLocaleDateString('es-ES', {
            weekday: 'long'
        });
        const nombreDiaSeleccionado = n.charAt(0).toUpperCase() + n.slice(1);
        const configDia = diasActivos.find((da)=>da.dia_nombre === nombreDiaSeleccionado);
        const filtradas = horasBase.filter((h)=>{
            const horaNum = parseInt(h.hora.split(':')[0]);
            if (horaNum < 12 && configDia?.manana_activo === false) return false;
            if (horaNum >= 14 && configDia?.tarde_activo === false) return false;
            return true;
        });
        setHorasFiltradas(filtradas);
        setForm((prev)=>({
                ...prev,
                horario: ''
            }));
    }, [
        form.dia,
        horasBase,
        diasActivos
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$PERROS$2f$spa$2d$perros$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const encontrado = listaPrecios.find((p)=>p.servicio === form.servicio && p.tamano === form.tamano);
        if (encontrado) setPrecioActual(encontrado.precio);
    }, [
        form.servicio,
        form.tamano,
        listaPrecios
    ]);
    const enviarCita = async (e)=>{
        e.preventDefault();
        if (!form.horario) {
            alert("Por favor selecciona una hora");
            return;
        }
        const { error } = await supabase.from('citas').insert([
            {
                cliente_nombre: form.cliente,
                perro_nombre: form.perro,
                servicio: form.servicio,
                tamano: form.tamano,
                dia: form.dia,
                horario: form.horario,
                whatsapp: form.whatsapp.replace(/\D/g, ''),
                precio: precioActual,
                estado: 'pendiente'
            }
        ]);
        if (!error) {
            const telefonoNegocio = "18096485156";
            const texto = `¡Hola! Acabo de agendar una cita:
🐶 *Perro:* ${form.perro}
👤 *Dueño:* ${form.cliente}
✂️ *Servicio:* ${form.servicio} (${form.tamano})
📅 *Fecha:* ${form.dia}
⏰ *Hora:* ${form.horario}
💰 *Total Estimado:* $${precioActual}
¿Me podrían confirmar?`;
            const url = `https://api.whatsapp.com/send?phone=${telefonoNegocio}&text=${encodeURIComponent(texto)}`;
            window.open(url, '_blank');
            setEnviado(true);
        } else {
            alert("Error: " + error.message);
        }
    };
    if (enviado) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$PERROS$2f$spa$2d$perros$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-10 max-w-md mx-auto bg-white shadow-2xl rounded-3xl mt-20 border text-center animate-in fade-in zoom-in duration-500",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$PERROS$2f$spa$2d$perros$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-6xl mb-4",
                    children: "✨"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Escritorio/PERROS/spa-perros/app/page.tsx",
                    lineNumber: 106,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$PERROS$2f$spa$2d$perros$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl font-black text-black mb-2",
                    children: "¡Cita Registrada!"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Escritorio/PERROS/spa-perros/app/page.tsx",
                    lineNumber: 107,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$PERROS$2f$spa$2d$perros$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-600 mb-6 text-sm",
                    children: [
                        "Gracias ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$PERROS$2f$spa$2d$perros$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: form.cliente
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Escritorio/PERROS/spa-perros/app/page.tsx",
                            lineNumber: 109,
                            columnNumber: 21
                        }, this),
                        ". Hemos recibido los datos de ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$PERROS$2f$spa$2d$perros$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: form.perro
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Escritorio/PERROS/spa-perros/app/page.tsx",
                            lineNumber: 109,
                            columnNumber: 72
                        }, this),
                        ".",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$PERROS$2f$spa$2d$perros$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                            fileName: "[project]/OneDrive/Escritorio/PERROS/spa-perros/app/page.tsx",
                            lineNumber: 110,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$PERROS$2f$spa$2d$perros$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                            fileName: "[project]/OneDrive/Escritorio/PERROS/spa-perros/app/page.tsx",
                            lineNumber: 110,
                            columnNumber: 18
                        }, this),
                        "Te contactaremos por WhatsApp para confirmar. ¡Nos vemos pronto!"
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Escritorio/PERROS/spa-perros/app/page.tsx",
                    lineNumber: 108,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$PERROS$2f$spa$2d$perros$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 bg-green-50 rounded-2xl text-green-700 text-xs font-bold",
                    children: "Tu solicitud está en camino 🐾"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Escritorio/PERROS/spa-perros/app/page.tsx",
                    lineNumber: 113,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Escritorio/PERROS/spa-perros/app/page.tsx",
            lineNumber: 105,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$PERROS$2f$spa$2d$perros$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6 max-w-md mx-auto bg-white shadow-xl rounded-3xl mt-10 border",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$PERROS$2f$spa$2d$perros$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl font-black text-blue-600 mb-6 text-center tracking-tight",
                children: "RESERVA TU CITA 🐾"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Escritorio/PERROS/spa-perros/app/page.tsx",
                lineNumber: 122,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$PERROS$2f$spa$2d$perros$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: enviarCita,
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$PERROS$2f$spa$2d$perros$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        className: "w-full border-2 p-3 rounded-xl outline-none focus:border-blue-500 transition-all bg-white text-black opacity-100 placeholder:text-gray-400",
                        placeholder: "Tu Nombre",
                        onChange: (e)=>setForm({
                                ...form,
                                cliente: e.target.value
                            }),
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Escritorio/PERROS/spa-perros/app/page.tsx",
                        lineNumber: 126,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$PERROS$2f$spa$2d$perros$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        className: "w-full border-2 p-3 rounded-xl outline-none focus:border-blue-500 transition-all bg-white text-black opacity-100 placeholder:text-gray-400",
                        placeholder: "Nombre del Perrito",
                        onChange: (e)=>setForm({
                                ...form,
                                perro: e.target.value
                            }),
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Escritorio/PERROS/spa-perros/app/page.tsx",
                        lineNumber: 133,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$PERROS$2f$spa$2d$perros$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$PERROS$2f$spa$2d$perros$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                className: "border-2 p-3 rounded-xl bg-white text-black opacity-100 capitalize outline-none",
                                value: form.servicio,
                                onChange: (e)=>setForm({
                                        ...form,
                                        servicio: e.target.value
                                    }),
                                required: true,
                                children: serviciosUnicos.map((srv)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$PERROS$2f$spa$2d$perros$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: srv,
                                        className: "text-black",
                                        children: srv
                                    }, srv, false, {
                                        fileName: "[project]/OneDrive/Escritorio/PERROS/spa-perros/app/page.tsx",
                                        lineNumber: 147,
                                        columnNumber: 41
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Escritorio/PERROS/spa-perros/app/page.tsx",
                                lineNumber: 141,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$PERROS$2f$spa$2d$perros$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                className: "border-2 p-3 rounded-xl bg-white text-black opacity-100 outline-none",
                                onChange: (e)=>setForm({
                                        ...form,
                                        tamano: e.target.value
                                    }),
                                required: true,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$PERROS$2f$spa$2d$perros$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "pequeño",
                                        className: "text-black",
                                        children: "Pequeño"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Escritorio/PERROS/spa-perros/app/page.tsx",
                                        lineNumber: 155,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$PERROS$2f$spa$2d$perros$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "grande",
                                        className: "text-black",
                                        children: "Grande"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Escritorio/PERROS/spa-perros/app/page.tsx",
                                        lineNumber: 156,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Escritorio/PERROS/spa-perros/app/page.tsx",
                                lineNumber: 150,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Escritorio/PERROS/spa-perros/app/page.tsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$PERROS$2f$spa$2d$perros$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$PERROS$2f$spa$2d$perros$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                className: "border-2 p-3 rounded-xl bg-white text-black opacity-100 text-sm outline-none",
                                onChange: (e)=>setForm({
                                        ...form,
                                        dia: e.target.value
                                    }),
                                required: true,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$PERROS$2f$spa$2d$perros$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        className: "text-black",
                                        children: "Selecciona Día"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Escritorio/PERROS/spa-perros/app/page.tsx",
                                        lineNumber: 166,
                                        columnNumber: 13
                                    }, this),
                                    Array.from({
                                        length: 14
                                    }).map((_, i)=>{
                                        const f = new Date();
                                        f.setDate(f.getDate() + i);
                                        const n = f.toLocaleDateString('es-ES', {
                                            weekday: 'long'
                                        });
                                        const nombre = n.charAt(0).toUpperCase() + n.slice(1);
                                        if (diasActivos.some((da)=>da.dia_nombre === nombre)) {
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$PERROS$2f$spa$2d$perros$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: f.toISOString().split('T')[0],
                                                className: "text-black",
                                                children: [
                                                    nombre,
                                                    " ",
                                                    f.getDate()
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/OneDrive/Escritorio/PERROS/spa-perros/app/page.tsx",
                                                lineNumber: 172,
                                                columnNumber: 24
                                            }, this);
                                        }
                                    })
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Escritorio/PERROS/spa-perros/app/page.tsx",
                                lineNumber: 161,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$PERROS$2f$spa$2d$perros$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                className: "border-2 p-3 rounded-xl bg-white text-black opacity-100 text-sm outline-none disabled:bg-gray-50",
                                value: form.horario,
                                onChange: (e)=>setForm({
                                        ...form,
                                        horario: e.target.value
                                    }),
                                required: true,
                                disabled: !form.dia,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$PERROS$2f$spa$2d$perros$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        className: "text-black",
                                        children: form.dia ? 'Selecciona Hora' : 'Elige un día primero'
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Escritorio/PERROS/spa-perros/app/page.tsx",
                                        lineNumber: 184,
                                        columnNumber: 13
                                    }, this),
                                    horasFiltradas.map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$PERROS$2f$spa$2d$perros$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: h.hora,
                                            className: "text-black",
                                            children: h.hora
                                        }, h.id, false, {
                                            fileName: "[project]/OneDrive/Escritorio/PERROS/spa-perros/app/page.tsx",
                                            lineNumber: 185,
                                            columnNumber: 38
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Escritorio/PERROS/spa-perros/app/page.tsx",
                                lineNumber: 177,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Escritorio/PERROS/spa-perros/app/page.tsx",
                        lineNumber: 160,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$PERROS$2f$spa$2d$perros$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        className: "w-full border-2 p-3 rounded-xl outline-none bg-white text-black opacity-100 placeholder:text-gray-400",
                        placeholder: "Tu WhatsApp",
                        type: "tel",
                        onChange: (e)=>setForm({
                                ...form,
                                whatsapp: e.target.value
                            }),
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Escritorio/PERROS/spa-perros/app/page.tsx",
                        lineNumber: 189,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$PERROS$2f$spa$2d$perros$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-blue-600 p-5 rounded-2xl text-center text-white shadow-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$PERROS$2f$spa$2d$perros$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-bold opacity-80 uppercase tracking-widest text-white",
                                children: "Total Estimado"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Escritorio/PERROS/spa-perros/app/page.tsx",
                                lineNumber: 198,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$PERROS$2f$spa$2d$perros$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-4xl font-black text-white",
                                children: [
                                    "$",
                                    precioActual
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Escritorio/PERROS/spa-perros/app/page.tsx",
                                lineNumber: 199,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Escritorio/PERROS/spa-perros/app/page.tsx",
                        lineNumber: 197,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$PERROS$2f$spa$2d$perros$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        className: "w-full bg-blue-600 text-white p-4 rounded-2xl font-bold shadow-lg active:scale-95 transition-all",
                        children: "CONFIRMAR CITA AHORA"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Escritorio/PERROS/spa-perros/app/page.tsx",
                        lineNumber: 202,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$PERROS$2f$spa$2d$perros$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-amber-50 border border-amber-200 p-4 rounded-2xl flex gap-3 mt-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$PERROS$2f$spa$2d$perros$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-amber-500 text-lg",
                                children: "⚠️"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Escritorio/PERROS/spa-perros/app/page.tsx",
                                lineNumber: 208,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$PERROS$2f$spa$2d$perros$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px] text-amber-900 leading-tight font-bold",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$PERROS$2f$spa$2d$perros$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "Aviso importante:"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Escritorio/PERROS/spa-perros/app/page.tsx",
                                        lineNumber: 210,
                                        columnNumber: 13
                                    }, this),
                                    " Los precios son estimados. El monto final puede variar según el estado real del pelaje y el servicio que el perrito necesite al ser evaluado."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Escritorio/PERROS/spa-perros/app/page.tsx",
                                lineNumber: 209,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Escritorio/PERROS/spa-perros/app/page.tsx",
                        lineNumber: 207,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Escritorio/PERROS/spa-perros/app/page.tsx",
                lineNumber: 123,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Escritorio/PERROS/spa-perros/app/page.tsx",
        lineNumber: 121,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=OneDrive_Escritorio_PERROS_spa-perros_app_page_tsx_0gyir.s._.js.map