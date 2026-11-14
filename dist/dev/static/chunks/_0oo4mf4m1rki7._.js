(()=>{"use strict";(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/blackboard/app-shell.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BlackboardApp",
    ()=>BlackboardApp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.3_@babel+core@7.2_462e5fb2f617f24ead8cc2c7afd5b03a/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.3_@babel+core@7.2_462e5fb2f617f24ead8cc2c7afd5b03a/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$openrouter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/openrouter.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/storage.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$blackboard$2f$error$2d$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/blackboard/error-toast.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$blackboard$2f$learning$2d$view$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/blackboard/learning-view.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$blackboard$2f$settings$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/blackboard/settings-modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$blackboard$2f$subject$2d$picker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/blackboard/subject-picker.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$blackboard$2f$top$2d$bar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/blackboard/top-bar.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
function BlackboardApp() {
    _s();
    const settings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePersistent"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["settingsStore"]);
    const points = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePersistent"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pointsStore"]);
    const [config, setConfig] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [run, setRun] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        id: 0,
        recentKeys: [],
        skipMaterial: false
    });
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [offline, setOffline] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [settingsOpen, setSettingsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const aiEnabled = Boolean(settings.apiKey) && settings.status === 'valid' && !offline;
    const subject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSubject"])(config?.subjectId);
    const reportError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BlackboardApp.useCallback[reportError]": (err)=>{
            if (err instanceof __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$openrouter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OpenRouterError"]) {
                const titles = {
                    auth: 'Некоректний API-ключ',
                    network: 'Немає підключення до OpenRouter',
                    request: 'Помилка запиту до AI-наставника'
                };
                if (err.kind === 'auth') __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["settingsStore"].set({
                    "BlackboardApp.useCallback[reportError]": (s)=>({
                            ...s,
                            status: 'invalid'
                        })
                }["BlackboardApp.useCallback[reportError]"]);
                setError({
                    title: titles[err.kind],
                    message: err.message,
                    offlineAction: true
                });
                return;
            }
            setError({
                title: 'Щось пішло не так',
                message: 'Не вдалося отримати динамічне пояснення. Локальна база матеріалів доступна завжди.',
                offlineAction: true
            });
        }
    }["BlackboardApp.useCallback[reportError]"], []);
    const goOffline = ()=>{
        setOffline(true);
        setError(null);
        setSettingsOpen(false);
    };
    const startSession = (next)=>{
        const nextSubject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSubject"])(next.subjectId);
        const { choice } = next;
        const topicValid = choice.kind === 'mix' || nextSubject?.topics.some((t)=>t.id === choice.topicId);
        if (!nextSubject || !topicValid) {
            setError({
                title: 'Некоректний вибір теми',
                message: 'Обери предмет і тему (або «Навчальний мікс»), щоб розпочати заняття.',
                offlineAction: false
            });
            return;
        }
        setConfig(next);
        setRun((r)=>({
                id: r.id + 1,
                recentKeys: [],
                skipMaterial: false
            }));
    };
    const retry = (recentKeys)=>{
        setRun((r)=>({
                id: r.id + 1,
                recentKeys,
                skipMaterial: true
            }));
    };
    const exitToPicker = ()=>setConfig(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex min-h-dvh flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$blackboard$2f$top$2d$bar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TopBar"], {
                points: points,
                aiEnabled: aiEnabled,
                onOpenSettings: ()=>setSettingsOpen(true)
            }, void 0, false, {
                fileName: "[project]/components/blackboard/app-shell.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 pb-16 pt-6 sm:px-6 lg:pt-10",
                children: config && subject ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "animate-card-in",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$blackboard$2f$learning$2d$view$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LearningView"], {
                        subject: subject,
                        config: config,
                        recentKeys: run.recentKeys,
                        skipMaterial: run.skipMaterial,
                        aiEnabled: aiEnabled,
                        apiKey: settings.apiKey,
                        onAIError: reportError,
                        onRetry: retry,
                        onExit: exitToPicker,
                        hasProfile: false
                    }, void 0, false, {
                        fileName: "[project]/components/blackboard/app-shell.tsx",
                        lineNumber: 90,
                        columnNumber: 13
                    }, this)
                }, `learning-${run.id}`, false, {
                    fileName: "[project]/components/blackboard/app-shell.tsx",
                    lineNumber: 89,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "animate-card-in",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$blackboard$2f$subject$2d$picker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubjectPicker"], {
                        initialSubjectId: config?.subjectId,
                        onStart: startSession
                    }, void 0, false, {
                        fileName: "[project]/components/blackboard/app-shell.tsx",
                        lineNumber: 105,
                        columnNumber: 13
                    }, this)
                }, "empty", false, {
                    fileName: "[project]/components/blackboard/app-shell.tsx",
                    lineNumber: 104,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/blackboard/app-shell.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this),
            settingsOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$blackboard$2f$settings$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SettingsModal"], {
                settings: settings,
                aiEnabled: aiEnabled,
                offline: offline,
                onClose: ()=>setSettingsOpen(false),
                onConnected: ()=>setOffline(false),
                onGoOffline: ()=>setOffline(true),
                onError: reportError
            }, void 0, false, {
                fileName: "[project]/components/blackboard/app-shell.tsx",
                lineNumber: 111,
                columnNumber: 9
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$blackboard$2f$error$2d$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorToast"], {
                error: error,
                onDismiss: ()=>setError(null),
                onGoOffline: goOffline
            }, void 0, false, {
                fileName: "[project]/components/blackboard/app-shell.tsx",
                lineNumber: 123,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/blackboard/app-shell.tsx",
        lineNumber: 80,
        columnNumber: 5
    }, this);
}
_s(BlackboardApp, "SobcjRneZugEad2IRxOYq9Zgetc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePersistent"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePersistent"]
    ];
});
_c = BlackboardApp;
var _c;
__turbopack_context__.k.register(_c, "BlackboardApp");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/blackboard/error-toast.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ErrorToast",
    ()=>ErrorToast
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.3_@babel+core@7.2_462e5fb2f617f24ead8cc2c7afd5b03a/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleAlert$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/circle-alert.mjs [app-client] (ecmascript) <export default as CircleAlert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2d$off$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__WifiOff$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/wifi-off.mjs [app-client] (ecmascript) <export default as WifiOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
;
;
function ErrorToast({ error, onDismiss, onGoOffline }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pointer-events-none fixed inset-x-0 bottom-0 z-50 flex justify-center p-4 sm:justify-end sm:p-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            role: "alert",
            className: "pointer-events-auto w-full max-w-sm animate-in fade-in slide-in-from-bottom-4 rounded-xl border border-destructive/30 bg-graphite p-4 shadow-2xl shadow-ink duration-300",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-start gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-destructive/10 text-destructive",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleAlert$3e$__["CircleAlert"], {
                                className: "size-4",
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/components/blackboard/error-toast.tsx",
                                lineNumber: 24,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/blackboard/error-toast.tsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex min-w-0 flex-1 flex-col gap-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm font-semibold text-chalk",
                                    children: error.title
                                }, void 0, false, {
                                    fileName: "[project]/components/blackboard/error-toast.tsx",
                                    lineNumber: 27,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm leading-relaxed text-silver",
                                    children: error.message
                                }, void 0, false, {
                                    fileName: "[project]/components/blackboard/error-toast.tsx",
                                    lineNumber: 28,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/blackboard/error-toast.tsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onDismiss,
                            className: "-m-1 rounded-md p-1 text-silver hover:bg-slate hover:text-chalk",
                            "aria-label": "Закрити повідомлення",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "size-4",
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/components/blackboard/error-toast.tsx",
                                lineNumber: 36,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/blackboard/error-toast.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/blackboard/error-toast.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this),
                error.offlineAction ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: onGoOffline,
                    className: "mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-chalk px-4 py-2.5 text-sm font-medium text-ink hover:bg-chalk/90",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2d$off$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__WifiOff$3e$__["WifiOff"], {
                            className: "size-4",
                            "aria-hidden": "true"
                        }, void 0, false, {
                            fileName: "[project]/components/blackboard/error-toast.tsx",
                            lineNumber: 45,
                            columnNumber: 13
                        }, this),
                        "Перейти до автономного навчання"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/blackboard/error-toast.tsx",
                    lineNumber: 40,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: onDismiss,
                    className: "mt-4 w-full rounded-lg border border-slate px-4 py-2.5 text-sm font-medium text-chalk hover:bg-slate",
                    children: "Зрозуміло"
                }, void 0, false, {
                    fileName: "[project]/components/blackboard/error-toast.tsx",
                    lineNumber: 49,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/blackboard/error-toast.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/blackboard/error-toast.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_c = ErrorToast;
var _c;
__turbopack_context__.k.register(_c, "ErrorToast");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/blackboard/learning-view.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LearningView",
    ()=>LearningView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.3_@babel+core@7.2_462e5fb2f617f24ead8cc2c7afd5b03a/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.3_@babel+core@7.2_462e5fb2f617f24ead8cc2c7afd5b03a/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$achievements$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/achievements.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/engine.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/storage.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$blackboard$2f$quiz$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/blackboard/quiz-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$blackboard$2f$session$2d$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/blackboard/session-header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$blackboard$2f$session$2d$stats$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/blackboard/session-stats.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$blackboard$2f$study$2d$material$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/blackboard/study-material.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
function useElapsedSeconds(startedAt, stoppedAt) {
    _s();
    const [now, setNow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(startedAt);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useElapsedSeconds.useEffect": ()=>{
            if (stoppedAt !== null) return;
            const id = window.setInterval({
                "useElapsedSeconds.useEffect.id": ()=>setNow(Date.now())
            }["useElapsedSeconds.useEffect.id"], 1000);
            return ({
                "useElapsedSeconds.useEffect": ()=>window.clearInterval(id)
            })["useElapsedSeconds.useEffect"];
        }
    }["useElapsedSeconds.useEffect"], [
        stoppedAt
    ]);
    return Math.max(0, Math.floor(((stoppedAt ?? now) - startedAt) / 1000));
}
_s(useElapsedSeconds, "rc4vs9xUKYOGkqVz0TZy9e9CT70=");
function LearningView({ subject, config, recentKeys, skipMaterial, aiEnabled, apiKey, onAIError, onRetry, onExit, hasProfile, onProgressSaved }) {
    _s1();
    const [questions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "LearningView.useState": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildSession"])(subject, config.choice, config.level, recentKeys, config.questionCount)
    }["LearningView.useState"]);
    const [phase, setPhase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(skipMaterial ? 'quiz' : 'material');
    const [index, setIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [answers, setAnswers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "LearningView.useState": ()=>questions.map({
                "LearningView.useState": ()=>null
            }["LearningView.useState"])
    }["LearningView.useState"]);
    const [startedAt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "LearningView.useState": ()=>Date.now()
    }["LearningView.useState"]);
    const [finishedAt, setFinishedAt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [summary, setSummary] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const elapsed = useElapsedSeconds(startedAt, finishedAt);
    const sessionTopics = config.choice.kind === 'topic' ? subject.topics.filter((t)=>config.choice.kind === 'topic' && t.id === config.choice.topicId) : subject.topics.filter((t)=>questions.some((q)=>q.topicId === t.id));
    const title = config.choice.kind === 'mix' ? 'Навчальний мікс' : sessionTopics[0]?.title ?? '';
    const current = questions[index];
    const choose = (optionIndex)=>{
        if (answers[index] !== null) return;
        setAnswers((prev)=>prev.map((a, i)=>i === index ? optionIndex : a));
        if (optionIndex === current.answer) __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pointsStore"].set((p)=>p + __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["POINTS_PER_CORRECT"]);
    };
    const finish = ()=>{
        const end = Date.now();
        const correct = questions.filter((q, i)=>answers[i] === q.answer).length;
        const durationSec = Math.floor((end - startedAt) / 1000);
        const progress = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["progressStore"].get();
        const sessions = progress.sessions + 1;
        const subjects = progress.subjects.includes(subject.id) ? progress.subjects : [
            ...progress.subjects,
            subject.id
        ];
        const result = {
            correct,
            total: questions.length,
            level: config.level,
            isMix: config.choice.kind === 'mix',
            durationSec,
            totalPoints: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pointsStore"].get(),
            sessions,
            subjectId: subject.id,
            subjectsTried: subjects.length,
            hasProfile
        };
        const newlyUnlocked = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$achievements$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ACHIEVEMENTS"].filter((a)=>!progress.unlocked.includes(a.id) && a.check(result)).map((a)=>a.id);
        const unlocked = [
            ...progress.unlocked,
            ...newlyUnlocked
        ];
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["progressStore"].set({
            sessions,
            unlocked,
            subjects
        });
        onProgressSaved?.({
            sessions,
            unlocked,
            subjects
        });
        setFinishedAt(end);
        setSummary({
            ...result,
            pointsEarned: correct * __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["POINTS_PER_CORRECT"],
            unlocked,
            newlyUnlocked
        });
        setPhase('stats');
    };
    const next = ()=>{
        if (index < questions.length - 1) setIndex(index + 1);
        else finish();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$blackboard$2f$session$2d$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SessionHeader"], {
                subject: subject,
                title: title,
                level: config.level,
                total: questions.length,
                current: phase === 'quiz' ? index : phase === 'stats' ? questions.length : -1,
                answers: answers,
                questions: questions,
                elapsed: elapsed,
                onExit: onExit
            }, void 0, false, {
                fileName: "[project]/components/blackboard/learning-view.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "animate-card-in",
                children: [
                    phase === 'material' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$blackboard$2f$study$2d$material$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StudyMaterial"], {
                        topics: sessionTopics,
                        isMix: config.choice.kind === 'mix',
                        onContinue: ()=>setPhase('quiz')
                    }, void 0, false, {
                        fileName: "[project]/components/blackboard/learning-view.tsx",
                        lineNumber: 130,
                        columnNumber: 11
                    }, this),
                    phase === 'quiz' && current && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$blackboard$2f$quiz$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QuizCard"], {
                        question: current,
                        number: index + 1,
                        total: questions.length,
                        chosen: answers[index],
                        subject: subject,
                        topic: subject.topics.find((t)=>t.id === current.topicId),
                        level: config.level,
                        aiEnabled: aiEnabled,
                        apiKey: apiKey,
                        onChoose: choose,
                        onNext: next,
                        onAIError: onAIError
                    }, void 0, false, {
                        fileName: "[project]/components/blackboard/learning-view.tsx",
                        lineNumber: 134,
                        columnNumber: 11
                    }, this),
                    phase === 'stats' && summary && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$blackboard$2f$session$2d$stats$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SessionStats"], {
                        summary: summary,
                        questions: questions,
                        answers: answers,
                        isMix: config.choice.kind === 'mix',
                        onRetry: ()=>onRetry(questions.map((q)=>q.key)),
                        onExit: onExit
                    }, void 0, false, {
                        fileName: "[project]/components/blackboard/learning-view.tsx",
                        lineNumber: 151,
                        columnNumber: 11
                    }, this)
                ]
            }, phase === 'quiz' ? `quiz-${index}` : phase, true, {
                fileName: "[project]/components/blackboard/learning-view.tsx",
                lineNumber: 128,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/blackboard/learning-view.tsx",
        lineNumber: 115,
        columnNumber: 5
    }, this);
}
_s1(LearningView, "aR19ueo6YqY1toGwpiRLVaHJGzw=", false, function() {
    return [
        useElapsedSeconds
    ];
});
_c = LearningView;
var _c;
__turbopack_context__.k.register(_c, "LearningView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/blackboard/mentor-explanation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MentorExplanation",
    ()=>MentorExplanation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.3_@babel+core@7.2_462e5fb2f617f24ead8cc2c7afd5b03a/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/bot.mjs [app-client] (ecmascript) <export default as Bot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$5$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f$swr$2f$dist$2f$use$2d$swr$2d$emll9s78$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__u__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/swr@2.5.1_react@19.2.4/node_modules/swr/dist/use-swr-emll9s78.mjs [app-client] (ecmascript) <export u as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/engine.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$openrouter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/openrouter.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/storage.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/types.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function MentorExplanation({ question, chosen, subject, topic, level, aiEnabled, apiKey, onAIError }) {
    _s();
    const local = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["adaptExplanation"])(question, topic, level);
    const { model } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePersistent"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["settingsStore"]);
    const { data, error, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$5$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f$swr$2f$dist$2f$use$2d$swr$2d$emll9s78$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__u__as__default$3e$__["default"])(aiEnabled ? [
        'mentor',
        model,
        question.key,
        chosen,
        level,
        question.options.join('|')
    ] : null, {
        "MentorExplanation.useSWR": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$openrouter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["requestExplanation"])({
                apiKey,
                model,
                subjectName: subject.name,
                level,
                question,
                chosenIndex: chosen
            })
    }["MentorExplanation.useSWR"], {
        revalidateOnFocus: false,
        revalidateIfStale: false,
        revalidateOnReconnect: false,
        shouldRetryOnError: false,
        onError: onAIError
    });
    const fromAI = aiEnabled && Boolean(data) && !error;
    const text = fromAI ? data : local;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        "aria-label": "AI-наставник пояснює",
        "aria-busy": aiEnabled && isLoading,
        className: "rounded-xl border border-slate bg-ink/70 p-4 sm:p-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "flex flex-wrap items-center justify-between gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex size-8 items-center justify-center rounded-lg bg-slate text-chalk",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                                    className: "size-4",
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/components/blackboard/mentor-explanation.tsx",
                                    lineNumber: 58,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/blackboard/mentor-explanation.tsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-semibold text-chalk",
                                children: "AI-наставник пояснює"
                            }, void 0, false, {
                                fileName: "[project]/components/blackboard/mentor-explanation.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/blackboard/mentor-explanation.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex items-center gap-1.5 rounded-full border border-slate px-2.5 py-1 text-[11px] text-silver",
                        children: [
                            fromAI && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                className: "size-3",
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/components/blackboard/mentor-explanation.tsx",
                                lineNumber: 63,
                                columnNumber: 22
                            }, this),
                            fromAI ? 'Динамічне пояснення' : 'Локальна база',
                            " · ",
                            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LEVEL_LABELS"][level]
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/blackboard/mentor-explanation.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/blackboard/mentor-explanation.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            aiEnabled && isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 flex flex-col gap-2",
                "aria-hidden": "true",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-3 w-11/12 animate-pulse rounded bg-slate"
                    }, void 0, false, {
                        fileName: "[project]/components/blackboard/mentor-explanation.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-3 w-full animate-pulse rounded bg-slate [animation-delay:150ms]"
                    }, void 0, false, {
                        fileName: "[project]/components/blackboard/mentor-explanation.tsx",
                        lineNumber: 71,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-3 w-3/4 animate-pulse rounded bg-slate [animation-delay:300ms]"
                    }, void 0, false, {
                        fileName: "[project]/components/blackboard/mentor-explanation.tsx",
                        lineNumber: 72,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "mt-1 text-xs text-silver",
                        children: "Наставник формулює пояснення…"
                    }, void 0, false, {
                        fileName: "[project]/components/blackboard/mentor-explanation.tsx",
                        lineNumber: 73,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/blackboard/mentor-explanation.tsx",
                lineNumber: 69,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-4 animate-fade-in whitespace-pre-line text-pretty text-sm leading-relaxed text-chalk/90",
                children: text
            }, void 0, false, {
                fileName: "[project]/components/blackboard/mentor-explanation.tsx",
                lineNumber: 76,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/blackboard/mentor-explanation.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
_s(MentorExplanation, "f7/69m8xFzwO9+CkhvkvaNC+Pfc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePersistent"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$5$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f$swr$2f$dist$2f$use$2d$swr$2d$emll9s78$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__u__as__default$3e$__["default"]
    ];
});
_c = MentorExplanation;
var _c;
__turbopack_context__.k.register(_c, "MentorExplanation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/blackboard/quiz-card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QuizCard",
    ()=>QuizCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.3_@babel+core@7.2_462e5fb2f617f24ead8cc2c7afd5b03a/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/check.mjs [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flag$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flag$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/flag.mjs [app-client] (ecmascript) <export default as Flag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/engine.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$blackboard$2f$mentor$2d$explanation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/blackboard/mentor-explanation.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
;
const LETTERS = [
    'A',
    'B',
    'C',
    'D'
];
function QuizCard({ question, number, total, chosen, subject, topic, level, aiEnabled, apiKey, onChoose, onNext, onAIError }) {
    const answered = chosen !== null;
    const isCorrect = answered && chosen === question.answer;
    const isLast = number === total;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "flex flex-col gap-5 rounded-2xl border border-slate bg-graphite p-5 sm:p-7",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-2 text-xs text-silver",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "rounded-md bg-slate px-2 py-1 font-medium text-chalk",
                        children: [
                            "Завдання ",
                            number
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/blackboard/quiz-card.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: question.topicTitle
                    }, void 0, false, {
                        fileName: "[project]/components/blackboard/quiz-card.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/blackboard/quiz-card.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-pretty font-heading text-lg font-medium leading-snug text-chalk sm:text-xl",
                children: question.text
            }, void 0, false, {
                fileName: "[project]/components/blackboard/quiz-card.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                role: "group",
                "aria-label": "Варіанти відповіді",
                className: "grid gap-2.5 sm:grid-cols-2",
                children: question.options.map((option, i)=>{
                    const correctOption = i === question.answer;
                    const chosenOption = i === chosen;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        disabled: answered,
                        onClick: ()=>onChoose(i),
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('group flex items-center gap-3 rounded-xl border p-3.5 text-left text-sm leading-relaxed disabled:cursor-default', !answered && 'border-slate bg-ink hover:-translate-y-0.5 hover:border-silver/60 hover:bg-slate/40', answered && correctOption && 'border-success/60 bg-success/10 text-chalk', answered && chosenOption && !correctOption && 'animate-shake border-destructive/60 bg-destructive/10 text-chalk', answered && !correctOption && !chosenOption && 'border-slate bg-ink opacity-45'),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex size-8 shrink-0 items-center justify-center rounded-lg border font-heading text-xs font-semibold', !answered && 'border-slate bg-graphite text-silver group-hover:border-silver/60 group-hover:text-chalk', answered && correctOption && 'border-success bg-success text-ink', answered && chosenOption && !correctOption && 'border-destructive bg-destructive text-chalk', answered && !correctOption && !chosenOption && 'border-slate text-silver'),
                                children: answered && correctOption ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                    className: "size-4",
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/components/blackboard/quiz-card.tsx",
                                    lineNumber: 81,
                                    columnNumber: 19
                                }, this) : answered && chosenOption ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "size-4",
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/components/blackboard/quiz-card.tsx",
                                    lineNumber: 83,
                                    columnNumber: 19
                                }, this) : LETTERS[i]
                            }, void 0, false, {
                                fileName: "[project]/components/blackboard/quiz-card.tsx",
                                lineNumber: 71,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-chalk",
                                children: option
                            }, void 0, false, {
                                fileName: "[project]/components/blackboard/quiz-card.tsx",
                                lineNumber: 88,
                                columnNumber: 15
                            }, this)
                        ]
                    }, option, true, {
                        fileName: "[project]/components/blackboard/quiz-card.tsx",
                        lineNumber: 58,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/blackboard/quiz-card.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "sr-only",
                "aria-live": "assertive",
                children: answered ? isCorrect ? `Правильно! Плюс ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["POINTS_PER_CORRECT"]} балів.` : 'Неправильно.' : ''
            }, void 0, false, {
                fileName: "[project]/components/blackboard/quiz-card.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "reveal",
                "data-open": answered,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: answered && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-4 pt-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center gap-2 text-sm font-medium', isCorrect ? 'text-success' : 'text-destructive'),
                                children: isCorrect ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                            className: "size-4",
                                            "aria-hidden": "true"
                                        }, void 0, false, {
                                            fileName: "[project]/components/blackboard/quiz-card.tsx",
                                            lineNumber: 110,
                                            columnNumber: 21
                                        }, this),
                                        "Правильно! +",
                                        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["POINTS_PER_CORRECT"],
                                        " балів"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/blackboard/quiz-card.tsx",
                                    lineNumber: 109,
                                    columnNumber: 19
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            className: "size-4",
                                            "aria-hidden": "true"
                                        }, void 0, false, {
                                            fileName: "[project]/components/blackboard/quiz-card.tsx",
                                            lineNumber: 115,
                                            columnNumber: 21
                                        }, this),
                                        "Не зовсім. Розберімо разом"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/blackboard/quiz-card.tsx",
                                    lineNumber: 114,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/blackboard/quiz-card.tsx",
                                lineNumber: 102,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$blackboard$2f$mentor$2d$explanation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MentorExplanation"], {
                                question: question,
                                chosen: chosen,
                                subject: subject,
                                topic: topic,
                                level: level,
                                aiEnabled: aiEnabled,
                                apiKey: apiKey,
                                onAIError: onAIError
                            }, void 0, false, {
                                fileName: "[project]/components/blackboard/quiz-card.tsx",
                                lineNumber: 121,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-end",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: onNext,
                                    autoFocus: true,
                                    className: "group flex w-full items-center justify-center gap-2 rounded-lg bg-chalk px-6 py-3 text-sm font-semibold text-ink hover:bg-chalk/90 sm:w-auto",
                                    children: isLast ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            "Завершити заняття",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flag$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flag$3e$__["Flag"], {
                                                className: "size-4",
                                                "aria-hidden": "true"
                                            }, void 0, false, {
                                                fileName: "[project]/components/blackboard/quiz-card.tsx",
                                                lineNumber: 142,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/blackboard/quiz-card.tsx",
                                        lineNumber: 140,
                                        columnNumber: 21
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            "Наступне завдання",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                className: "size-4 group-hover:translate-x-0.5",
                                                "aria-hidden": "true"
                                            }, void 0, false, {
                                                fileName: "[project]/components/blackboard/quiz-card.tsx",
                                                lineNumber: 147,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/blackboard/quiz-card.tsx",
                                        lineNumber: 145,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/blackboard/quiz-card.tsx",
                                    lineNumber: 133,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/blackboard/quiz-card.tsx",
                                lineNumber: 132,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/blackboard/quiz-card.tsx",
                        lineNumber: 101,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/blackboard/quiz-card.tsx",
                    lineNumber: 99,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/blackboard/quiz-card.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/blackboard/quiz-card.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
_c = QuizCard;
var _c;
__turbopack_context__.k.register(_c, "QuizCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/blackboard/session-header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SessionHeader",
    ()=>SessionHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.3_@babel+core@7.2_462e5fb2f617f24ead8cc2c7afd5b03a/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/arrow-left.mjs [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$timer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Timer$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/timer.mjs [app-client] (ecmascript) <export default as Timer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/engine.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
function SessionHeader({ subject, title, level, total, current, answers, questions, elapsed, onExit }) {
    const Icon = subject.icon;
    const stepLabel = current < 0 ? 'Конспект' : current >= total ? 'Завершено' : `${current + 1}/${total}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-5 rounded-2xl border border-slate bg-graphite p-4 sm:p-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center justify-between gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex min-w-0 items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex size-10 shrink-0 items-center justify-center rounded-lg bg-chalk text-ink",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                    className: "size-5",
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/components/blackboard/session-header.tsx",
                                    lineNumber: 27,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/blackboard/session-header.tsx",
                                lineNumber: 26,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex min-w-0 flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-silver",
                                        children: [
                                            subject.name,
                                            " · ",
                                            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LEVEL_LABELS"][level]
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/blackboard/session-header.tsx",
                                        lineNumber: 30,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "truncate font-heading text-base font-semibold text-chalk sm:text-lg",
                                        children: title
                                    }, void 0, false, {
                                        fileName: "[project]/components/blackboard/session-header.tsx",
                                        lineNumber: 33,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/blackboard/session-header.tsx",
                                lineNumber: 29,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/blackboard/session-header.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex items-center gap-1.5 rounded-lg border border-slate bg-ink px-3 py-2 font-mono text-sm tabular-nums text-chalk",
                                "aria-label": `Тривалість заняття ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDuration"])(elapsed)}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$timer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Timer$3e$__["Timer"], {
                                        className: "size-4 text-silver",
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/components/blackboard/session-header.tsx",
                                        lineNumber: 42,
                                        columnNumber: 13
                                    }, this),
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDuration"])(elapsed)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/blackboard/session-header.tsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: onExit,
                                className: "flex items-center gap-1.5 rounded-lg border border-slate px-3 py-2 text-sm text-silver hover:bg-slate hover:text-chalk",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                        className: "size-4",
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/components/blackboard/session-header.tsx",
                                        lineNumber: 50,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "hidden sm:inline",
                                        children: "Інший предмет"
                                    }, void 0, false, {
                                        fileName: "[project]/components/blackboard/session-header.tsx",
                                        lineNumber: 51,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/blackboard/session-header.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/blackboard/session-header.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/blackboard/session-header.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                        className: "flex flex-1 gap-1.5",
                        "aria-label": "Прогрес заняття",
                        children: Array.from({
                            length: total
                        }).map((_, i)=>{
                            const answer = answers[i];
                            const answered = answer !== null;
                            const correct = answered && answer === questions[i]?.answer;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                "aria-current": i === current ? 'step' : undefined,
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('h-1.5 flex-1 rounded-full transition-colors duration-500', answered ? correct ? 'bg-success' : 'bg-destructive' : i === current ? 'bg-chalk' : 'bg-slate'),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "sr-only",
                                    children: [
                                        "Завдання ",
                                        i + 1,
                                        ": ",
                                        answered ? correct ? 'правильно' : 'помилка' : 'не виконано'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/blackboard/session-header.tsx",
                                    lineNumber: 71,
                                    columnNumber: 17
                                }, this)
                            }, i, false, {
                                fileName: "[project]/components/blackboard/session-header.tsx",
                                lineNumber: 63,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/components/blackboard/session-header.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "min-w-20 text-right font-heading text-sm font-semibold tabular-nums text-chalk",
                        children: stepLabel
                    }, void 0, false, {
                        fileName: "[project]/components/blackboard/session-header.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/blackboard/session-header.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/blackboard/session-header.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_c = SessionHeader;
var _c;
__turbopack_context__.k.register(_c, "SessionHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/blackboard/session-stats.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SessionStats",
    ()=>SessionStats
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.3_@babel+core@7.2_462e5fb2f617f24ead8cc2c7afd5b03a/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/check.mjs [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$grid$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutGrid$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/layout-grid.mjs [app-client] (ecmascript) <export default as LayoutGrid>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/lock.mjs [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/rotate-ccw.mjs [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$achievements$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/achievements.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/engine.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
const TONE_TEXT = {
    success: 'text-success',
    warning: 'text-warning',
    destructive: 'text-destructive'
};
function SessionStats({ summary, questions, answers, isMix, onRetry, onExit }) {
    const accuracy = summary.total ? Math.round(summary.correct / summary.total * 100) : 0;
    const zone = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["masteryZone"])(accuracy);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "rounded-2xl border border-slate bg-graphite p-5 sm:p-7",
                "aria-labelledby": "stats-heading",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs uppercase tracking-widest text-silver",
                        children: "Заняття завершено"
                    }, void 0, false, {
                        fileName: "[project]/components/blackboard/session-stats.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        id: "stats-heading",
                        className: "mt-1 font-heading text-xl font-semibold text-chalk sm:text-2xl",
                        children: "Твій результат"
                    }, void 0, false, {
                        fileName: "[project]/components/blackboard/session-stats.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 grid gap-6 md:grid-cols-[auto_1fr] md:items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-baseline gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-heading text-7xl font-semibold tabular-nums tracking-tight text-silver-gradient",
                                        children: accuracy
                                    }, void 0, false, {
                                        fileName: "[project]/components/blackboard/session-stats.tsx",
                                        lineNumber: 38,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-heading text-2xl text-silver",
                                        children: "%"
                                    }, void 0, false, {
                                        fileName: "[project]/components/blackboard/session-stats.tsx",
                                        lineNumber: 41,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/blackboard/session-stats.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                                className: "grid grid-cols-3 gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-xl border border-slate bg-ink/60 p-3 sm:p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                className: "text-xs text-silver",
                                                children: "Правильно"
                                            }, void 0, false, {
                                                fileName: "[project]/components/blackboard/session-stats.tsx",
                                                lineNumber: 46,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                className: "mt-1 font-heading text-lg font-semibold tabular-nums text-chalk",
                                                children: [
                                                    summary.correct,
                                                    "/",
                                                    summary.total
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/blackboard/session-stats.tsx",
                                                lineNumber: 47,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/blackboard/session-stats.tsx",
                                        lineNumber: 45,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-xl border border-slate bg-ink/60 p-3 sm:p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                className: "text-xs text-silver",
                                                children: "Бали"
                                            }, void 0, false, {
                                                fileName: "[project]/components/blackboard/session-stats.tsx",
                                                lineNumber: 52,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                className: "mt-1 font-heading text-lg font-semibold tabular-nums text-chalk",
                                                children: [
                                                    "+",
                                                    summary.pointsEarned
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/blackboard/session-stats.tsx",
                                                lineNumber: 53,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/blackboard/session-stats.tsx",
                                        lineNumber: 51,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-xl border border-slate bg-ink/60 p-3 sm:p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                className: "text-xs text-silver",
                                                children: "Час"
                                            }, void 0, false, {
                                                fileName: "[project]/components/blackboard/session-stats.tsx",
                                                lineNumber: 56,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                className: "mt-1 font-heading text-lg font-semibold tabular-nums text-chalk",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDuration"])(summary.durationSec)
                                            }, void 0, false, {
                                                fileName: "[project]/components/blackboard/session-stats.tsx",
                                                lineNumber: 57,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/blackboard/session-stats.tsx",
                                        lineNumber: 55,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/blackboard/session-stats.tsx",
                                lineNumber: 44,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/blackboard/session-stats.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-8 flex flex-col gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-silver",
                                        children: "Рівень засвоєння теми"
                                    }, void 0, false, {
                                        fileName: "[project]/components/blackboard/session-stats.tsx",
                                        lineNumber: 66,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('font-medium', TONE_TEXT[zone.tone]),
                                        children: zone.label
                                    }, void 0, false, {
                                        fileName: "[project]/components/blackboard/session-stats.tsx",
                                        lineNumber: 67,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/blackboard/session-stats.tsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative h-3",
                                role: "meter",
                                "aria-valuemin": 0,
                                "aria-valuemax": 100,
                                "aria-valuenow": accuracy,
                                "aria-label": "Рівень засвоєння",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex h-full overflow-hidden rounded-full",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-full w-[40%] bg-destructive/25"
                                            }, void 0, false, {
                                                fileName: "[project]/components/blackboard/session-stats.tsx",
                                                lineNumber: 78,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-full w-[35%] bg-warning/25"
                                            }, void 0, false, {
                                                fileName: "[project]/components/blackboard/session-stats.tsx",
                                                lineNumber: 79,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-full w-[25%] bg-success/25"
                                            }, void 0, false, {
                                                fileName: "[project]/components/blackboard/session-stats.tsx",
                                                lineNumber: 80,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/blackboard/session-stats.tsx",
                                        lineNumber: 77,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-y-0 left-0 overflow-hidden rounded-full",
                                        style: {
                                            width: `${accuracy}%`
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex h-full w-full origin-left animate-in gap-1 slide-in-from-left duration-1000",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('h-full w-full rounded-full', zone.tone === 'success' ? 'bg-success' : zone.tone === 'warning' ? 'bg-warning' : 'bg-destructive')
                                            }, void 0, false, {
                                                fileName: "[project]/components/blackboard/session-stats.tsx",
                                                lineNumber: 84,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/blackboard/session-stats.tsx",
                                            lineNumber: 83,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/blackboard/session-stats.tsx",
                                        lineNumber: 82,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/blackboard/session-stats.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex text-[11px] text-silver",
                                "aria-hidden": "true",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-[40%]",
                                        children: "0%"
                                    }, void 0, false, {
                                        fileName: "[project]/components/blackboard/session-stats.tsx",
                                        lineNumber: 94,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-[35%]",
                                        children: "40%"
                                    }, void 0, false, {
                                        fileName: "[project]/components/blackboard/session-stats.tsx",
                                        lineNumber: 95,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex w-[25%] justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "75%"
                                            }, void 0, false, {
                                                fileName: "[project]/components/blackboard/session-stats.tsx",
                                                lineNumber: 97,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "100%"
                                            }, void 0, false, {
                                                fileName: "[project]/components/blackboard/session-stats.tsx",
                                                lineNumber: 98,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/blackboard/session-stats.tsx",
                                        lineNumber: 96,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/blackboard/session-stats.tsx",
                                lineNumber: 93,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/blackboard/session-stats.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "mt-6 flex flex-col gap-2",
                        "aria-label": "Розбір відповідей",
                        children: questions.map((q, i)=>{
                            const ok = answers[i] === q.answer;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "flex items-start gap-3 rounded-lg bg-ink/50 px-3 py-2.5 text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full', ok ? 'bg-success text-ink' : 'bg-destructive text-chalk'),
                                        children: [
                                            ok ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                className: "size-3",
                                                "aria-hidden": "true"
                                            }, void 0, false, {
                                                fileName: "[project]/components/blackboard/session-stats.tsx",
                                                lineNumber: 114,
                                                columnNumber: 25
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                className: "size-3",
                                                "aria-hidden": "true"
                                            }, void 0, false, {
                                                fileName: "[project]/components/blackboard/session-stats.tsx",
                                                lineNumber: 114,
                                                columnNumber: 75
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "sr-only",
                                                children: ok ? 'Правильно' : 'Помилка'
                                            }, void 0, false, {
                                                fileName: "[project]/components/blackboard/session-stats.tsx",
                                                lineNumber: 115,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/blackboard/session-stats.tsx",
                                        lineNumber: 108,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "min-w-0 flex-1 leading-relaxed text-chalk",
                                        children: q.text
                                    }, void 0, false, {
                                        fileName: "[project]/components/blackboard/session-stats.tsx",
                                        lineNumber: 117,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, q.key, true, {
                                fileName: "[project]/components/blackboard/session-stats.tsx",
                                lineNumber: 107,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/components/blackboard/session-stats.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/blackboard/session-stats.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "rounded-2xl border border-slate bg-graphite p-5 sm:p-7",
                "aria-labelledby": "badges-heading",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-baseline justify-between gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                id: "badges-heading",
                                className: "font-heading text-lg font-semibold text-chalk",
                                children: "Досягнення"
                            }, void 0, false, {
                                fileName: "[project]/components/blackboard/session-stats.tsx",
                                lineNumber: 126,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-silver",
                                children: [
                                    summary.unlocked.length,
                                    "/",
                                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$achievements$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ACHIEVEMENTS"].length,
                                    " відкрито"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/blackboard/session-stats.tsx",
                                lineNumber: 129,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/blackboard/session-stats.tsx",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-4",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$achievements$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ACHIEVEMENTS"].map((a, i)=>{
                            const unlocked = summary.unlocked.includes(a.id);
                            const fresh = summary.newlyUnlocked.includes(a.id);
                            const Icon = unlocked ? a.icon : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"];
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('relative flex flex-col gap-3 rounded-xl border p-4', fresh ? 'animate-card-in border-chalk/70 bg-slate' : unlocked ? 'border-slate bg-ink/60' : 'border-dashed border-slate opacity-50'),
                                style: fresh ? {
                                    animationDelay: `${200 + i * 90}ms`
                                } : undefined,
                                children: [
                                    fresh && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute right-3 top-3 rounded-full bg-chalk px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-ink",
                                        children: "Нове"
                                    }, void 0, false, {
                                        fileName: "[project]/components/blackboard/session-stats.tsx",
                                        lineNumber: 148,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex size-9 items-center justify-center rounded-lg', unlocked ? 'bg-chalk text-ink' : 'bg-slate text-silver', fresh && 'animate-pop'),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                            className: "size-4.5",
                                            "aria-hidden": "true"
                                        }, void 0, false, {
                                            fileName: "[project]/components/blackboard/session-stats.tsx",
                                            lineNumber: 159,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/blackboard/session-stats.tsx",
                                        lineNumber: 152,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-0.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-medium text-chalk",
                                                children: a.title
                                            }, void 0, false, {
                                                fileName: "[project]/components/blackboard/session-stats.tsx",
                                                lineNumber: 162,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs leading-relaxed text-silver",
                                                children: a.description
                                            }, void 0, false, {
                                                fileName: "[project]/components/blackboard/session-stats.tsx",
                                                lineNumber: 163,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/blackboard/session-stats.tsx",
                                        lineNumber: 161,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, a.id, true, {
                                fileName: "[project]/components/blackboard/session-stats.tsx",
                                lineNumber: 139,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/components/blackboard/session-stats.tsx",
                        lineNumber: 133,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/blackboard/session-stats.tsx",
                lineNumber: 124,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-2 sm:flex-row sm:justify-end",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onExit,
                        className: "flex items-center justify-center gap-2 rounded-lg border border-slate px-6 py-3 text-sm font-medium text-chalk hover:bg-slate",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$grid$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutGrid$3e$__["LayoutGrid"], {
                                className: "size-4",
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/components/blackboard/session-stats.tsx",
                                lineNumber: 177,
                                columnNumber: 11
                            }, this),
                            "Обрати інший предмет"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/blackboard/session-stats.tsx",
                        lineNumber: 172,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onRetry,
                        className: "flex items-center justify-center gap-2 rounded-lg bg-chalk px-6 py-3 text-sm font-semibold text-ink hover:bg-chalk/90",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                className: "size-4",
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/components/blackboard/session-stats.tsx",
                                lineNumber: 185,
                                columnNumber: 11
                            }, this),
                            isMix ? 'Новий мікс' : 'Пройти знову'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/blackboard/session-stats.tsx",
                        lineNumber: 180,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/blackboard/session-stats.tsx",
                lineNumber: 171,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/blackboard/session-stats.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_c = SessionStats;
var _c;
__turbopack_context__.k.register(_c, "SessionStats");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/blackboard/settings-modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SettingsModal",
    ()=>SettingsModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.3_@babel+core@7.2_462e5fb2f617f24ead8cc2c7afd5b03a/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/check.mjs [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleAlert$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/circle-alert.mjs [app-client] (ecmascript) <export default as CircleAlert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/cpu.mjs [app-client] (ecmascript) <export default as Cpu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/eye.mjs [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/eye-off.mjs [app-client] (ecmascript) <export default as EyeOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$key$2d$round$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__KeyRound$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/key-round.mjs [app-client] (ecmascript) <export default as KeyRound>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LoaderCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/loader-circle.mjs [app-client] (ecmascript) <export default as LoaderCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/shield-check.mjs [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/zap.mjs [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.3_@babel+core@7.2_462e5fb2f617f24ead8cc2c7afd5b03a/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$openrouter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/openrouter.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/storage.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function SettingsModal({ settings, aiEnabled, offline, onClose, onConnected, onGoOffline, onError }) {
    _s();
    const titleId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    const inputId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    const [draft, setDraft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(settings.apiKey);
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [checking, setChecking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(settings.status);
    const [note, setNote] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [model, setModel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(settings.model);
    const [modelTests, setModelTests] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const trimmed = draft.trim();
    const runModelTest = async (modelId)=>{
        if (!trimmed) {
            setModelTests((prev)=>({
                    ...prev,
                    [modelId]: {
                        state: 'error',
                        message: 'Спершу введи API-ключ.'
                    }
                }));
            return;
        }
        setModelTests((prev)=>({
                ...prev,
                [modelId]: {
                    state: 'loading'
                }
            }));
        try {
            const { ms } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$openrouter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["testModel"])(trimmed, modelId);
            setModelTests((prev)=>({
                    ...prev,
                    [modelId]: {
                        state: 'ok',
                        message: `Працює · ${ms} мс`
                    }
                }));
        } catch (err) {
            if (err instanceof __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$openrouter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OpenRouterError"] && err.kind === 'auth') setStatus('invalid');
            setModelTests((prev)=>({
                    ...prev,
                    [modelId]: {
                        state: 'error',
                        message: err instanceof Error ? err.message : 'Не вдалося перевірити модель.'
                    }
                }));
        }
    };
    const verify = async ()=>{
        if (!trimmed) {
            setNote('Введи API-ключ, щоб перевірити підключення.');
            return 'unknown';
        }
        setChecking(true);
        setNote(null);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$openrouter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["verifyApiKey"])(trimmed);
            setStatus('valid');
            setNote('Ключ дійсний. AI-наставник готовий до роботи.');
            return 'valid';
        } catch (err) {
            const next = err instanceof __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$openrouter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OpenRouterError"] && err.kind === 'auth' ? 'invalid' : 'unknown';
            setStatus(next);
            setNote(err instanceof Error ? err.message : 'Не вдалося перевірити ключ.');
            onError(err);
            return next;
        } finally{
            setChecking(false);
        }
    };
    const save = async ()=>{
        if (!trimmed) {
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["settingsStore"].set({
                apiKey: '',
                status: 'unknown',
                model
            });
            onClose();
            return;
        }
        const finalStatus = trimmed === settings.apiKey && status !== 'unknown' ? status : await verify();
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["settingsStore"].set({
            apiKey: trimmed,
            status: finalStatus,
            model
        });
        if (finalStatus === 'valid') {
            onConnected();
            onClose();
        }
    };
    const connected = aiEnabled && trimmed === settings.apiKey;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-40 flex items-end justify-center bg-ink/80 p-4 backdrop-blur-sm animate-in fade-in duration-200 sm:items-center",
        onMouseDown: (e)=>{
            if (e.target === e.currentTarget) onClose();
        },
        onKeyDown: (e)=>{
            if (e.key === 'Escape') onClose();
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": titleId,
            className: "max-h-[90dvh] w-full max-w-md overflow-y-auto animate-in slide-in-from-bottom-4 zoom-in-95 rounded-2xl border border-slate bg-graphite p-6 shadow-2xl duration-300",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-start justify-between gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    id: titleId,
                                    className: "font-heading text-lg font-semibold text-chalk",
                                    children: "Налаштування AI"
                                }, void 0, false, {
                                    fileName: "[project]/components/blackboard/settings-modal.tsx",
                                    lineNumber: 109,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm leading-relaxed text-silver",
                                    children: "Підключи OpenRouter для динамічних пояснень. Без ключа все працює з локальної бази."
                                }, void 0, false, {
                                    fileName: "[project]/components/blackboard/settings-modal.tsx",
                                    lineNumber: 112,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/blackboard/settings-modal.tsx",
                            lineNumber: 108,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onClose,
                            className: "rounded-md p-1 text-silver hover:bg-slate hover:text-chalk",
                            "aria-label": "Закрити налаштування",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "size-5",
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/components/blackboard/settings-modal.tsx",
                                lineNumber: 122,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/blackboard/settings-modal.tsx",
                            lineNumber: 116,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/blackboard/settings-modal.tsx",
                    lineNumber: 107,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('mt-5 flex items-center gap-3 rounded-xl border px-4 py-3', connected ? 'border-success/30 bg-success/5' : 'border-slate bg-ink/40'),
                    "aria-live": "polite",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('size-2.5 shrink-0 rounded-full', connected ? 'animate-pulse-soft bg-success text-success' : 'bg-silver/50'),
                            "aria-hidden": "true"
                        }, void 0, false, {
                            fileName: "[project]/components/blackboard/settings-modal.tsx",
                            lineNumber: 133,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex min-w-0 flex-col",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-sm font-medium', connected ? 'text-success' : 'text-chalk'),
                                    children: connected ? 'AI-наставник підключено' : 'Автономний режим'
                                }, void 0, false, {
                                    fileName: "[project]/components/blackboard/settings-modal.tsx",
                                    lineNumber: 138,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "truncate text-xs text-silver",
                                    children: connected ? `Модель: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$openrouter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getModelName"])(settings.model)}` : offline && settings.status === 'valid' ? 'AI вимкнено вручну — пояснення з локальної бази' : 'Пояснення беруться з локальної бази'
                                }, void 0, false, {
                                    fileName: "[project]/components/blackboard/settings-modal.tsx",
                                    lineNumber: 141,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/blackboard/settings-modal.tsx",
                            lineNumber: 137,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/blackboard/settings-modal.tsx",
                    lineNumber: 126,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-5 flex flex-col gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            htmlFor: inputId,
                            className: "text-sm font-medium text-chalk",
                            children: "API-ключ OpenRouter"
                        }, void 0, false, {
                            fileName: "[project]/components/blackboard/settings-modal.tsx",
                            lineNumber: 152,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 rounded-lg border border-slate bg-ink px-3 focus-within:border-silver/70",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$key$2d$round$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__KeyRound$3e$__["KeyRound"], {
                                    className: "size-4 shrink-0 text-silver",
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/components/blackboard/settings-modal.tsx",
                                    lineNumber: 156,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    id: inputId,
                                    type: visible ? 'text' : 'password',
                                    value: draft,
                                    onChange: (e)=>{
                                        setDraft(e.target.value);
                                        setStatus('unknown');
                                        setNote(null);
                                    },
                                    placeholder: "sk-or-v1-...",
                                    autoComplete: "off",
                                    spellCheck: false,
                                    autoFocus: true,
                                    className: "h-11 min-w-0 flex-1 bg-transparent font-mono text-sm text-chalk placeholder:text-silver/50 focus:outline-none"
                                }, void 0, false, {
                                    fileName: "[project]/components/blackboard/settings-modal.tsx",
                                    lineNumber: 157,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setVisible((v)=>!v),
                                    className: "rounded p-1 text-silver hover:text-chalk",
                                    "aria-label": visible ? 'Приховати ключ' : 'Показати ключ',
                                    children: visible ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__["EyeOff"], {
                                        className: "size-4",
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/components/blackboard/settings-modal.tsx",
                                        lineNumber: 178,
                                        columnNumber: 26
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                        className: "size-4",
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/components/blackboard/settings-modal.tsx",
                                        lineNumber: 178,
                                        columnNumber: 77
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/blackboard/settings-modal.tsx",
                                    lineNumber: 172,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/blackboard/settings-modal.tsx",
                            lineNumber: 155,
                            columnNumber: 11
                        }, this),
                        note && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-xs leading-relaxed', status === 'valid' ? 'text-success' : status === 'invalid' ? 'text-destructive' : 'text-silver'),
                            children: note
                        }, void 0, false, {
                            fileName: "[project]/components/blackboard/settings-modal.tsx",
                            lineNumber: 182,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs leading-relaxed text-silver",
                            children: "Ключ зберігається лише у твоєму браузері (localStorage) і надсилається напряму до OpenRouter."
                        }, void 0, false, {
                            fileName: "[project]/components/blackboard/settings-modal.tsx",
                            lineNumber: 191,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/blackboard/settings-modal.tsx",
                    lineNumber: 151,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
                    className: "mt-5 flex flex-col gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("legend", {
                            className: "mb-2 flex items-center gap-2 text-sm font-medium text-chalk",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__["Cpu"], {
                                    className: "size-4 text-silver",
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/components/blackboard/settings-modal.tsx",
                                    lineNumber: 198,
                                    columnNumber: 13
                                }, this),
                                "Модель штучного інтелекту"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/blackboard/settings-modal.tsx",
                            lineNumber: 197,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-2",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$openrouter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AI_MODELS"].map((m)=>{
                                const selected = model === m.id;
                                const test = modelTests[m.id];
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex flex-col gap-1.5 rounded-lg border px-3 py-2.5 transition-colors', selected ? 'border-silver/70 bg-slate/60' : 'border-slate bg-ink/40 hover:border-silver/40'),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "flex min-w-0 flex-1 cursor-pointer items-center gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "radio",
                                                            name: "ai-model",
                                                            value: m.id,
                                                            checked: selected,
                                                            onChange: ()=>setModel(m.id),
                                                            className: "peer sr-only"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/blackboard/settings-modal.tsx",
                                                            lineNumber: 215,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex size-4 shrink-0 items-center justify-center rounded-full border peer-focus-visible:ring-2 peer-focus-visible:ring-silver', selected ? 'border-chalk bg-chalk' : 'border-silver/60'),
                                                            "aria-hidden": "true",
                                                            children: selected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "size-1.5 rounded-full bg-ink"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/blackboard/settings-modal.tsx",
                                                                lineNumber: 230,
                                                                columnNumber: 38
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/blackboard/settings-modal.tsx",
                                                            lineNumber: 223,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "flex min-w-0 flex-col",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "truncate text-sm text-chalk",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-silver",
                                                                            children: [
                                                                                m.provider,
                                                                                ":"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/blackboard/settings-modal.tsx",
                                                                            lineNumber: 234,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        " ",
                                                                        m.name
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/blackboard/settings-modal.tsx",
                                                                    lineNumber: 233,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "truncate font-mono text-[11px] text-silver/70",
                                                                    children: m.id
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/blackboard/settings-modal.tsx",
                                                                    lineNumber: 236,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/blackboard/settings-modal.tsx",
                                                            lineNumber: 232,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/blackboard/settings-modal.tsx",
                                                    lineNumber: 214,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>runModelTest(m.id),
                                                    disabled: test?.state === 'loading',
                                                    className: "flex shrink-0 items-center gap-1.5 rounded-md border border-slate px-2.5 py-1.5 text-xs font-medium text-chalk hover:bg-slate disabled:opacity-60",
                                                    "aria-label": `Перевірити модель ${m.name}`,
                                                    children: [
                                                        test?.state === 'loading' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LoaderCircle$3e$__["LoaderCircle"], {
                                                            className: "size-3.5 animate-spin",
                                                            "aria-hidden": "true"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/blackboard/settings-modal.tsx",
                                                            lineNumber: 247,
                                                            columnNumber: 25
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                            className: "size-3.5",
                                                            "aria-hidden": "true"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/blackboard/settings-modal.tsx",
                                                            lineNumber: 249,
                                                            columnNumber: 25
                                                        }, this),
                                                        "Тест"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/blackboard/settings-modal.tsx",
                                                    lineNumber: 239,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/blackboard/settings-modal.tsx",
                                            lineNumber: 213,
                                            columnNumber: 19
                                        }, this),
                                        test && test.state !== 'loading' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-start gap-1.5 pl-7 text-xs leading-relaxed', test.state === 'ok' ? 'text-success' : 'text-destructive'),
                                            "aria-live": "polite",
                                            children: [
                                                test.state === 'ok' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                    className: "mt-0.5 size-3.5 shrink-0",
                                                    "aria-hidden": "true"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/blackboard/settings-modal.tsx",
                                                    lineNumber: 263,
                                                    columnNumber: 25
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleAlert$3e$__["CircleAlert"], {
                                                    className: "mt-0.5 size-3.5 shrink-0",
                                                    "aria-hidden": "true"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/blackboard/settings-modal.tsx",
                                                    lineNumber: 265,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "break-words",
                                                    children: test.message
                                                }, void 0, false, {
                                                    fileName: "[project]/components/blackboard/settings-modal.tsx",
                                                    lineNumber: 267,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/blackboard/settings-modal.tsx",
                                            lineNumber: 255,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, m.id, true, {
                                    fileName: "[project]/components/blackboard/settings-modal.tsx",
                                    lineNumber: 206,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/components/blackboard/settings-modal.tsx",
                            lineNumber: 201,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/blackboard/settings-modal.tsx",
                    lineNumber: 196,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6 flex flex-col gap-2 sm:flex-row",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: verify,
                            disabled: checking,
                            className: "flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate px-4 py-2.5 text-sm font-medium text-chalk hover:bg-slate disabled:opacity-60",
                            children: [
                                checking ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LoaderCircle$3e$__["LoaderCircle"], {
                                    className: "size-4 animate-spin",
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/components/blackboard/settings-modal.tsx",
                                    lineNumber: 284,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                    className: "size-4",
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/components/blackboard/settings-modal.tsx",
                                    lineNumber: 286,
                                    columnNumber: 15
                                }, this),
                                "Перевірити ключ"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/blackboard/settings-modal.tsx",
                            lineNumber: 277,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: save,
                            disabled: checking,
                            className: "flex-1 rounded-lg bg-chalk px-4 py-2.5 text-sm font-medium text-ink hover:bg-chalk/90 disabled:opacity-60",
                            children: "Зберегти"
                        }, void 0, false, {
                            fileName: "[project]/components/blackboard/settings-modal.tsx",
                            lineNumber: 290,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/blackboard/settings-modal.tsx",
                    lineNumber: 276,
                    columnNumber: 9
                }, this),
                connected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: ()=>{
                        onGoOffline();
                        onClose();
                    },
                    className: "mt-3 w-full text-center text-xs text-silver underline-offset-4 hover:text-chalk hover:underline",
                    children: "Перейти до автономного навчання"
                }, void 0, false, {
                    fileName: "[project]/components/blackboard/settings-modal.tsx",
                    lineNumber: 301,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/blackboard/settings-modal.tsx",
            lineNumber: 101,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/blackboard/settings-modal.tsx",
        lineNumber: 92,
        columnNumber: 5
    }, this);
}
_s(SettingsModal, "0OmxmB0DBv/uYPiOsLPyRauFHPc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]
    ];
});
_c = SettingsModal;
var _c;
__turbopack_context__.k.register(_c, "SettingsModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/blackboard/study-material.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StudyMaterial",
    ()=>StudyMaterial
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.3_@babel+core@7.2_462e5fb2f617f24ead8cc2c7afd5b03a/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/lightbulb.mjs [app-client] (ecmascript) <export default as Lightbulb>");
;
;
function StudyMaterial({ topics, isMix, onContinue }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-5",
        children: [
            isMix && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm leading-relaxed text-silver",
                children: [
                    "У міксі зібрано завдання з ",
                    topics.length,
                    " тем. Швидко пробіжися конспектами — вони знадобляться."
                ]
            }, void 0, true, {
                fileName: "[project]/components/blackboard/study-material.tsx",
                lineNumber: 14,
                columnNumber: 9
            }, this),
            topics.map((topic, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                    className: "animate-card-in rounded-2xl border border-slate bg-graphite p-5 sm:p-7",
                    style: {
                        animationDelay: `${i * 80}ms`
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs uppercase tracking-widest text-silver",
                            children: "Конспект"
                        }, void 0, false, {
                            fileName: "[project]/components/blackboard/study-material.tsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "mt-1 text-balance font-heading text-xl font-semibold text-chalk sm:text-2xl",
                            children: topic.title
                        }, void 0, false, {
                            fileName: "[project]/components/blackboard/study-material.tsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-4 max-w-3xl text-pretty leading-relaxed text-chalk/90",
                            children: topic.summary
                        }, void 0, false, {
                            fileName: "[project]/components/blackboard/study-material.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 grid gap-6 md:grid-cols-[3fr_2fr]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    "aria-label": "Ключові поняття",
                                    className: "flex flex-col gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-sm font-medium text-silver",
                                            children: "Ключові поняття"
                                        }, void 0, false, {
                                            fileName: "[project]/components/blackboard/study-material.tsx",
                                            lineNumber: 31,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "flex flex-col gap-2",
                                            children: topic.concepts.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "flex gap-3 rounded-lg border border-slate bg-ink/60 px-4 py-3 text-sm leading-relaxed text-chalk",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "mt-2 size-1.5 shrink-0 rounded-full bg-silver",
                                                            "aria-hidden": "true"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/blackboard/study-material.tsx",
                                                            lineNumber: 35,
                                                            columnNumber: 21
                                                        }, this),
                                                        c
                                                    ]
                                                }, c, true, {
                                                    fileName: "[project]/components/blackboard/study-material.tsx",
                                                    lineNumber: 34,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/blackboard/study-material.tsx",
                                            lineNumber: 32,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/blackboard/study-material.tsx",
                                    lineNumber: 30,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    "aria-label": "Приклади",
                                    className: "flex flex-col gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-sm font-medium text-silver",
                                            children: "Приклади"
                                        }, void 0, false, {
                                            fileName: "[project]/components/blackboard/study-material.tsx",
                                            lineNumber: 43,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "flex flex-col gap-2",
                                            children: topic.examples.map((e)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "flex gap-3 rounded-lg bg-slate/60 px-4 py-3 text-sm leading-relaxed text-chalk",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"], {
                                                            className: "mt-0.5 size-4 shrink-0 text-silver",
                                                            "aria-hidden": "true"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/blackboard/study-material.tsx",
                                                            lineNumber: 47,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-mono text-[13px]",
                                                            children: e
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/blackboard/study-material.tsx",
                                                            lineNumber: 48,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, e, true, {
                                                    fileName: "[project]/components/blackboard/study-material.tsx",
                                                    lineNumber: 46,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/blackboard/study-material.tsx",
                                            lineNumber: 44,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/blackboard/study-material.tsx",
                                    lineNumber: 42,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/blackboard/study-material.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this)
                    ]
                }, topic.id, true, {
                    fileName: "[project]/components/blackboard/study-material.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-end",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: onContinue,
                    className: "group flex w-full items-center justify-center gap-2 rounded-lg bg-chalk px-6 py-3 text-sm font-semibold text-ink hover:bg-chalk/90 sm:w-auto",
                    children: [
                        "Перейти до завдань",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                            className: "size-4 group-hover:translate-x-0.5",
                            "aria-hidden": "true"
                        }, void 0, false, {
                            fileName: "[project]/components/blackboard/study-material.tsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/blackboard/study-material.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/blackboard/study-material.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/blackboard/study-material.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_c = StudyMaterial;
var _c;
__turbopack_context__.k.register(_c, "StudyMaterial");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/blackboard/subject-picker.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SubjectPicker",
    ()=>SubjectPicker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.3_@babel+core@7.2_462e5fb2f617f24ead8cc2c7afd5b03a/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/book-open.mjs [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/lightbulb.mjs [app-client] (ecmascript) <export default as Lightbulb>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shuffle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shuffle$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/shuffle.mjs [app-client] (ecmascript) <export default as Shuffle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.3_@babel+core@7.2_462e5fb2f617f24ead8cc2c7afd5b03a/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/engine.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const LEVELS = [
    'easy',
    'medium',
    'hard'
];
function SubjectPicker({ initialSubjectId, onStart }) {
    _s();
    const [subjectId, setSubjectId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialSubjectId ?? null);
    const [choice, setChoice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [level, setLevel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('medium');
    const [count, setCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(3);
    const panelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const subject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSubject"])(subjectId);
    const ready = Boolean(subject && choice);
    const selectSubject = (id)=>{
        if (id !== subjectId) setChoice(null);
        setSubjectId(id);
        requestAnimationFrame(()=>panelRef.current?.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest'
            }));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "flex flex-col items-center gap-6 pt-4 text-center sm:pt-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex size-28 items-center justify-center rounded-full bg-[conic-gradient(from_140deg,var(--slate),var(--silver),var(--slate),var(--graphite),var(--slate))] p-px sm:size-32",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex size-full items-center justify-center rounded-full bg-[radial-gradient(circle_at_30%_25%,var(--ink),var(--graphite)_70%)]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                    className: "size-11 text-chalk sm:size-12",
                                    strokeWidth: 1.5,
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/components/blackboard/subject-picker.tsx",
                                    lineNumber: 38,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/blackboard/subject-picker.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute -right-1 top-2 flex size-10 animate-pulse-soft items-center justify-center rounded-full border border-slate bg-graphite text-chalk",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"], {
                                    className: "size-5",
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/components/blackboard/subject-picker.tsx",
                                    lineNumber: 41,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/blackboard/subject-picker.tsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/blackboard/subject-picker.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex max-w-2xl flex-col gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-balance font-heading text-3xl font-semibold leading-tight tracking-tight sm:text-5xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-silver-gradient",
                                        children: "Знання без меж."
                                    }, void 0, false, {
                                        fileName: "[project]/components/blackboard/subject-picker.tsx",
                                        lineNumber: 47,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/components/blackboard/subject-picker.tsx",
                                        lineNumber: 48,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-chalk",
                                        children: "Навчайся у власному темпі"
                                    }, void 0, false, {
                                        fileName: "[project]/components/blackboard/subject-picker.tsx",
                                        lineNumber: 49,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/blackboard/subject-picker.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-pretty text-base leading-relaxed text-silver sm:text-lg",
                                children: "Обери предмет, розберися зі складними темами та перевір себе за допомогою AI"
                            }, void 0, false, {
                                fileName: "[project]/components/blackboard/subject-picker.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/blackboard/subject-picker.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/blackboard/subject-picker.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                "aria-labelledby": "subjects-heading",
                className: "flex flex-col gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-baseline justify-between gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                id: "subjects-heading",
                                className: "font-heading text-sm font-medium uppercase tracking-widest text-silver",
                                children: "Предмети"
                            }, void 0, false, {
                                fileName: "[project]/components/blackboard/subject-picker.tsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-silver",
                                children: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SUBJECTS"].length,
                                    " предметів"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/blackboard/subject-picker.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/blackboard/subject-picker.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SUBJECTS"].map((s, i)=>{
                            const Icon = s.icon;
                            const active = s.id === subjectId;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "animate-card-in",
                                style: {
                                    animationDelay: `${i * 35}ms`
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>selectSubject(s.id),
                                    "aria-pressed": active,
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('group flex h-full w-full flex-col items-start gap-4 rounded-xl border p-4 text-left hover:-translate-y-1', active ? 'border-silver/70 bg-slate shadow-[0_12px_40px_-16px_rgba(161,161,170,0.55)]' : 'border-slate bg-graphite hover:border-silver/40 hover:shadow-[0_12px_40px_-18px_rgba(161,161,170,0.45)]'),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex size-10 items-center justify-center rounded-lg border', active ? 'border-chalk bg-chalk text-ink' : 'border-slate bg-ink text-silver group-hover:text-chalk'),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                className: "size-5",
                                                "aria-hidden": "true"
                                            }, void 0, false, {
                                                fileName: "[project]/components/blackboard/subject-picker.tsx",
                                                lineNumber: 89,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/blackboard/subject-picker.tsx",
                                            lineNumber: 81,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-medium leading-snug text-chalk",
                                            children: s.name
                                        }, void 0, false, {
                                            fileName: "[project]/components/blackboard/subject-picker.tsx",
                                            lineNumber: 91,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/blackboard/subject-picker.tsx",
                                    lineNumber: 70,
                                    columnNumber: 17
                                }, this)
                            }, s.id, false, {
                                fileName: "[project]/components/blackboard/subject-picker.tsx",
                                lineNumber: 69,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/components/blackboard/subject-picker.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/blackboard/subject-picker.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            subject && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                ref: panelRef,
                "aria-labelledby": "setup-heading",
                className: "scroll-mt-24 animate-card-in rounded-2xl border border-slate bg-graphite p-5 sm:p-7",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs uppercase tracking-widest text-silver",
                                children: "Налаштування заняття"
                            }, void 0, false, {
                                fileName: "[project]/components/blackboard/subject-picker.tsx",
                                lineNumber: 107,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                id: "setup-heading",
                                className: "font-heading text-xl font-semibold text-chalk sm:text-2xl",
                                children: subject.name
                            }, void 0, false, {
                                fileName: "[project]/components/blackboard/subject-picker.tsx",
                                lineNumber: 108,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/blackboard/subject-picker.tsx",
                        lineNumber: 106,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 grid gap-8 lg:grid-cols-[1fr_auto]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
                                className: "flex flex-col gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("legend", {
                                        className: "mb-3 text-sm font-medium text-chalk",
                                        children: "Обери тему"
                                    }, void 0, false, {
                                        fileName: "[project]/components/blackboard/subject-picker.tsx",
                                        lineNumber: 115,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-2",
                                        children: [
                                            subject.topics.map((t)=>{
                                                const active = choice?.kind === 'topic' && choice.topicId === t.id;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    "aria-pressed": active,
                                                    onClick: ()=>setChoice({
                                                            kind: 'topic',
                                                            topicId: t.id
                                                        }),
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('rounded-lg border px-4 py-2.5 text-sm', active ? 'border-chalk bg-chalk font-medium text-ink' : 'border-slate bg-ink text-chalk hover:border-silver/50'),
                                                    children: t.title
                                                }, t.id, false, {
                                                    fileName: "[project]/components/blackboard/subject-picker.tsx",
                                                    lineNumber: 120,
                                                    columnNumber: 21
                                                }, this);
                                            }),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                "aria-pressed": choice?.kind === 'mix',
                                                onClick: ()=>setChoice({
                                                        kind: 'mix'
                                                    }),
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center gap-2 rounded-lg border border-dashed px-4 py-2.5 text-sm', choice?.kind === 'mix' ? 'border-chalk bg-chalk font-medium text-ink' : 'border-silver/40 bg-ink text-chalk hover:border-silver'),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shuffle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shuffle$3e$__["Shuffle"], {
                                                        className: "size-4",
                                                        "aria-hidden": "true"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/blackboard/subject-picker.tsx",
                                                        lineNumber: 147,
                                                        columnNumber: 19
                                                    }, this),
                                                    "Навчальний мікс"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/blackboard/subject-picker.tsx",
                                                lineNumber: 136,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/blackboard/subject-picker.tsx",
                                        lineNumber: 116,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs leading-relaxed text-silver",
                                        children: choice?.kind === 'mix' ? `Мікс автоматично добере ${count === 3 ? 'три завдання' : 'п’ять завдань'} з різних тем предмета.` : `Спершу — стислий конспект теми, далі — ${count === 3 ? 'три практичні завдання' : 'п’ять практичних завдань'}.`
                                    }, void 0, false, {
                                        fileName: "[project]/components/blackboard/subject-picker.tsx",
                                        lineNumber: 151,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/blackboard/subject-picker.tsx",
                                lineNumber: 114,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                id: "level-label",
                                                className: "text-sm font-medium text-chalk",
                                                children: "Рівень складності"
                                            }, void 0, false, {
                                                fileName: "[project]/components/blackboard/subject-picker.tsx",
                                                lineNumber: 160,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                role: "radiogroup",
                                                "aria-labelledby": "level-label",
                                                className: "grid grid-cols-3 gap-1 rounded-lg border border-slate bg-ink p-1",
                                                children: LEVELS.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        role: "radio",
                                                        "aria-checked": level === l,
                                                        onClick: ()=>setLevel(l),
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('rounded-md px-4 py-2 text-sm', level === l ? 'bg-slate font-medium text-chalk' : 'text-silver hover:text-chalk'),
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LEVEL_LABELS"][l]
                                                    }, l, false, {
                                                        fileName: "[project]/components/blackboard/subject-picker.tsx",
                                                        lineNumber: 169,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/blackboard/subject-picker.tsx",
                                                lineNumber: 163,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/blackboard/subject-picker.tsx",
                                        lineNumber: 159,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                id: "count-label",
                                                className: "text-sm font-medium text-chalk",
                                                children: "Кількість завдань"
                                            }, void 0, false, {
                                                fileName: "[project]/components/blackboard/subject-picker.tsx",
                                                lineNumber: 187,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                role: "radiogroup",
                                                "aria-labelledby": "count-label",
                                                className: "grid grid-cols-2 gap-1 rounded-lg border border-slate bg-ink p-1",
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SESSION_LENGTHS"].map((value)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        role: "radio",
                                                        "aria-checked": count === value,
                                                        onClick: ()=>setCount(value),
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('rounded-md px-4 py-2 text-sm tabular-nums', count === value ? 'bg-slate font-medium text-chalk' : 'text-silver hover:text-chalk'),
                                                        children: value === 3 ? '3 завдання' : `${value} завдань`
                                                    }, value, false, {
                                                        fileName: "[project]/components/blackboard/subject-picker.tsx",
                                                        lineNumber: 196,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/blackboard/subject-picker.tsx",
                                                lineNumber: 190,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/blackboard/subject-picker.tsx",
                                        lineNumber: 186,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/blackboard/subject-picker.tsx",
                                lineNumber: 158,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/blackboard/subject-picker.tsx",
                        lineNumber: 113,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-8 flex flex-col-reverse items-stretch gap-3 border-t border-slate pt-6 sm:flex-row sm:items-center sm:justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-silver",
                                children: ready ? 'Усе готово — можна починати.' : 'Обери тему або мікс, щоб активувати кнопку.'
                            }, void 0, false, {
                                fileName: "[project]/components/blackboard/subject-picker.tsx",
                                lineNumber: 216,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                disabled: !ready,
                                onClick: ()=>subject && choice && onStart({
                                        subjectId: subject.id,
                                        choice,
                                        level,
                                        questionCount: count
                                    }),
                                className: "group flex items-center justify-center gap-2 rounded-lg bg-chalk px-6 py-3 text-sm font-semibold text-ink hover:bg-chalk/90 disabled:cursor-not-allowed disabled:bg-slate disabled:text-silver",
                                children: [
                                    "Розпочати навчання",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                        className: "size-4 group-enabled:group-hover:translate-x-0.5",
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/components/blackboard/subject-picker.tsx",
                                        lineNumber: 226,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/blackboard/subject-picker.tsx",
                                lineNumber: 219,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/blackboard/subject-picker.tsx",
                        lineNumber: 215,
                        columnNumber: 11
                    }, this)
                ]
            }, subject.id, true, {
                fileName: "[project]/components/blackboard/subject-picker.tsx",
                lineNumber: 100,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/blackboard/subject-picker.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_s(SubjectPicker, "nvNiyJSKOAazIQvJKpZdp5woyeg=");
_c = SubjectPicker;
var _c;
__turbopack_context__.k.register(_c, "SubjectPicker");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/blackboard/theme-toggle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "THEME_STORAGE_KEY",
    ()=>THEME_STORAGE_KEY,
    "ThemeToggle",
    ()=>ThemeToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.3_@babel+core@7.2_462e5fb2f617f24ead8cc2c7afd5b03a/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/moon.mjs [app-client] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/sun.mjs [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.3_@babel+core@7.2_462e5fb2f617f24ead8cc2c7afd5b03a/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const THEME_STORAGE_KEY = 'blackboard:theme';
function readTheme() {
    return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
}
function applyTheme(theme) {
    document.documentElement.classList.toggle('dark', theme === 'dark');
}
function ThemeToggle() {
    _s();
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('light');
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeToggle.useEffect": ()=>{
            setTheme(readTheme());
            setMounted(true);
        }
    }["ThemeToggle.useEffect"], []);
    const toggle = ()=>{
        const next = theme === 'dark' ? 'light' : 'dark';
        setTheme(next);
        applyTheme(next);
        try {
            window.localStorage.setItem(THEME_STORAGE_KEY, next);
        } catch  {
        // Storage may be unavailable (private mode); the current tab keeps the chosen theme.
        }
    };
    const isDark = theme === 'dark';
    const label = isDark ? 'Увімкнути світлу тему' : 'Увімкнути темну тему';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: toggle,
        "aria-label": label,
        title: label,
        "aria-pressed": isDark,
        className: "flex size-9 items-center justify-center rounded-lg border border-slate bg-graphite text-silver hover:border-silver/60 hover:text-chalk",
        children: mounted && isDark ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
            className: "size-4.5 animate-fade-in",
            "aria-hidden": "true"
        }, void 0, false, {
            fileName: "[project]/components/blackboard/theme-toggle.tsx",
            lineNumber: 51,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
            className: "size-4.5 animate-fade-in",
            "aria-hidden": "true"
        }, void 0, false, {
            fileName: "[project]/components/blackboard/theme-toggle.tsx",
            lineNumber: 53,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/blackboard/theme-toggle.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_s(ThemeToggle, "YCKE2uRMIshh/+RpyjK2SrKjidc=");
_c = ThemeToggle;
var _c;
__turbopack_context__.k.register(_c, "ThemeToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/blackboard/top-bar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TopBar",
    ()=>TopBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.3_@babel+core@7.2_462e5fb2f617f24ead8cc2c7afd5b03a/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/settings.mjs [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/star.mjs [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$blackboard$2f$theme$2d$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/blackboard/theme-toggle.tsx [app-client] (ecmascript)");
;
;
;
;
function TopBar({ points, aiEnabled, onOpenSettings }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-30 border-b border-slate/70 bg-ink/80 backdrop-blur-md",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto flex h-16 w-full max-w-6xl items-center justify-end gap-3 px-4 sm:px-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 sm:gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('hidden items-center gap-2 rounded-full border px-3 py-1.5 text-xs md:flex', aiEnabled ? 'border-success/30 text-success' : 'border-slate text-silver'),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('size-1.5 rounded-full', aiEnabled ? 'animate-pulse-soft bg-success' : 'bg-silver/60'),
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/components/blackboard/top-bar.tsx",
                                lineNumber: 22,
                                columnNumber: 13
                            }, this),
                            aiEnabled ? 'AI-наставник підключено' : 'Автономний режим'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/blackboard/top-bar.tsx",
                        lineNumber: 16,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 rounded-full border border-slate bg-graphite py-1.5 pl-2.5 pr-3.5",
                        "aria-live": "polite",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                className: "size-4 fill-chalk text-chalk",
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/components/blackboard/top-bar.tsx",
                                lineNumber: 33,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-block animate-pop font-heading text-sm font-semibold tabular-nums",
                                children: points
                            }, points, false, {
                                fileName: "[project]/components/blackboard/top-bar.tsx",
                                lineNumber: 34,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-silver",
                                children: "балів"
                            }, void 0, false, {
                                fileName: "[project]/components/blackboard/top-bar.tsx",
                                lineNumber: 37,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/blackboard/top-bar.tsx",
                        lineNumber: 29,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$blackboard$2f$theme$2d$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeToggle"], {}, void 0, false, {
                        fileName: "[project]/components/blackboard/top-bar.tsx",
                        lineNumber: 40,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onOpenSettings,
                        className: "flex size-9 items-center justify-center rounded-lg border border-slate bg-graphite text-silver hover:border-silver/60 hover:text-chalk",
                        "aria-label": "Налаштування OpenRouter",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                            className: "size-4.5",
                            "aria-hidden": "true"
                        }, void 0, false, {
                            fileName: "[project]/components/blackboard/top-bar.tsx",
                            lineNumber: 48,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/blackboard/top-bar.tsx",
                        lineNumber: 42,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/blackboard/top-bar.tsx",
                lineNumber: 15,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/blackboard/top-bar.tsx",
            lineNumber: 14,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/blackboard/top-bar.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = TopBar;
var _c;
__turbopack_context__.k.register(_c, "TopBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/achievements.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ACHIEVEMENTS",
    ()=>ACHIEVEMENTS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/award.mjs [app-client] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/brain.mjs [app-client] (ecmascript) <export default as Brain>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/compass.mjs [app-client] (ecmascript) <export default as Compass>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crown$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Crown$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/crown.mjs [app-client] (ecmascript) <export default as Crown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/flame.mjs [app-client] (ecmascript) <export default as Flame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$footprints$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Footprints$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/footprints.mjs [app-client] (ecmascript) <export default as Footprints>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gem$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/gem.mjs [app-client] (ecmascript) <export default as Gem>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hourglass$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hourglass$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/hourglass.mjs [app-client] (ecmascript) <export default as Hourglass>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$library$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Library$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/library.mjs [app-client] (ecmascript) <export default as Library>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$medal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Medal$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/medal.mjs [app-client] (ecmascript) <export default as Medal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/music.mjs [app-client] (ecmascript) <export default as Music>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$cw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCw$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/rotate-cw.mjs [app-client] (ecmascript) <export default as RotateCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shuffle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shuffle$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/shuffle.mjs [app-client] (ecmascript) <export default as Shuffle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/target.mjs [app-client] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$round$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserRound$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/user-round.mjs [app-client] (ecmascript) <export default as UserRound>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/zap.mjs [app-client] (ecmascript) <export default as Zap>");
;
const ACHIEVEMENTS = [
    {
        id: 'first-step',
        title: 'Перший крок',
        description: 'Заверши своє перше заняття',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$footprints$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Footprints$3e$__["Footprints"],
        check: (r)=>r.sessions >= 1
    },
    {
        id: 'perfect',
        title: 'Ідеальний результат',
        description: 'Дай правильні відповіді на всі завдання',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"],
        check: (r)=>r.total > 0 && r.correct === r.total
    },
    {
        id: 'topic-master',
        title: 'Майстер теми',
        description: 'Отримай 100% на складному рівні',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crown$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Crown$3e$__["Crown"],
        check: (r)=>r.level === 'hard' && r.total > 0 && r.correct === r.total
    },
    {
        id: 'lightning',
        title: 'Блискавка',
        description: 'Пройди заняття менш ніж за хвилину з 2+ правильними',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
        check: (r)=>r.durationSec < 60 && r.correct >= 2
    },
    {
        id: 'erudite',
        title: 'Ерудит',
        description: 'Пройди «Навчальний мікс» з 2+ правильними',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shuffle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shuffle$3e$__["Shuffle"],
        check: (r)=>r.isMix && r.correct >= 2
    },
    {
        id: 'hundred',
        title: 'Сотня балів',
        description: 'Набери 100 балів загалом',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__["Flame"],
        check: (r)=>r.totalPoints >= 100
    },
    {
        id: 'persistent',
        title: 'Наполегливість',
        description: 'Заверши 10 занять',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__["Brain"],
        check: (r)=>r.sessions >= 10
    },
    {
        id: 'steady',
        title: 'Золота середина',
        description: 'Отримай 100% на середньому рівні',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"],
        check: (r)=>r.level === 'medium' && r.total > 0 && r.correct === r.total
    },
    {
        id: 'half-thousand',
        title: 'Пів тисячі',
        description: 'Набери 500 балів загалом',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gem$3e$__["Gem"],
        check: (r)=>r.totalPoints >= 500
    },
    {
        id: 'marathon',
        title: 'Марафонець',
        description: 'Заверши 25 занять',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$medal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Medal$3e$__["Medal"],
        check: (r)=>r.sessions >= 25
    },
    {
        id: 'thinker',
        title: 'Вдумливий учень',
        description: 'Приділи заняттю понад 5 хвилин',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hourglass$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hourglass$3e$__["Hourglass"],
        check: (r)=>r.durationSec >= 300
    },
    {
        id: 'meloman',
        title: 'Меломан',
        description: 'Пройди заняття з музики з 2+ правильними',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__["Music"],
        check: (r)=>r.subjectId === 'music' && r.correct >= 2
    },
    {
        id: 'explorer',
        title: 'Дослідник',
        description: 'Займайся з 5 різних предметів',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__["Compass"],
        check: (r)=>r.subjectsTried >= 5
    },
    {
        id: 'polymath',
        title: 'Енциклопедист',
        description: 'Займайся з усіх 15 предметів',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$library$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Library$3e$__["Library"],
        check: (r)=>r.subjectsTried >= 15
    },
    {
        id: 'comeback',
        title: 'Друга спроба',
        description: 'Пройди складний рівень після помилки — хоч одна правильна',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$cw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCw$3e$__["RotateCw"],
        check: (r)=>r.level === 'hard' && r.correct >= 1 && r.correct < r.total
    },
    {
        id: 'identity',
        title: 'Своє обличчя',
        description: 'Створи акаунт і налаштуй профіль',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$round$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserRound$3e$__["UserRound"],
        check: (r)=>r.hasProfile
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/data/exact-sciences.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "astronomy",
    ()=>astronomy,
    "chemistry",
    ()=>chemistry,
    "math",
    ()=>math,
    "physics",
    ()=>physics
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data/helpers.ts [app-client] (ecmascript)");
;
const math = {
    id: 'math',
    name: 'Математика',
    topics: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["topic"])('quadratic', 'Квадратні рівняння', 'Квадратне рівняння має вигляд ax² + bx + c = 0, де a ≠ 0. Кількість коренів визначає дискримінант, а теорема Вієта дозволяє швидко знаходити корені зведених рівнянь.', [
            'Дискримінант: D = b² − 4ac',
            'D > 0 — два корені, D = 0 — один, D < 0 — дійсних коренів немає',
            'Корені: x = (−b ± √D) / 2a',
            'Теорема Вієта: x₁ + x₂ = −b/a, x₁ · x₂ = c/a'
        ], [
            'x² − 7x + 12 = 0 → D = 49 − 48 = 1 → x₁ = 3, x₂ = 4',
            'x² + 2x + 1 = 0 → D = 0 → x = −1'
        ], [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Чому дорівнює дискримінант рівняння x² − 5x + 6 = 0?', [
                '1',
                '25',
                '−1',
                '49'
            ], 0, 'D = b² − 4ac = (−5)² − 4·1·6 = 25 − 24 = 1.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Знайди корені рівняння x² − 5x + 6 = 0.', [
                '2 і 3',
                '−2 і −3',
                '1 і 6',
                '−1 і 6'
            ], 0, 'За теоремою Вієта сума коренів дорівнює 5, а добуток — 6. Цим умовам відповідають числа 2 і 3.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Скільки дійсних коренів має рівняння x² + 4x + 5 = 0?', [
                'Два',
                'Один',
                'Жодного',
                'Безліч'
            ], 2, 'D = 16 − 20 = −4 < 0, тому дійсних коренів немає.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'При якому значенні c рівняння x² − 6x + c = 0 має рівно один корінь?', [
                '6',
                '9',
                '36',
                '−9'
            ], 1, 'Один корінь означає D = 0: 36 − 4c = 0, звідки c = 9. Тоді рівняння має вигляд (x − 3)² = 0.')
        ]),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["topic"])('percent', 'Відсотки', 'Відсоток — це одна сота частина числа. Відсотки використовують для обчислення знижок, податків, зростання цін та банківських вкладів.', [
            '1% = 0,01 від числа',
            'p% від числа a = a · p / 100',
            'Яким відсотком є a від b: (a / b) · 100%',
            'Складні відсотки: S = P · (1 + r)ⁿ'
        ], [
            '15% від 200 = 200 · 0,15 = 30',
            'Товар за 500 грн зі знижкою 20% коштує 400 грн'
        ], [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Скільки становить 20% від 150?', [
                '30',
                '20',
                '15',
                '50'
            ], 0, '150 · 0,2 = 30.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Ціна 200 грн зросла на 10%, а потім знизилася на 10%. Яка нова ціна?', [
                '200 грн',
                '198 грн',
                '180 грн',
                '202 грн'
            ], 1, 'Після зростання: 200 · 1,1 = 220. Після зниження: 220 · 0,9 = 198. Відсотки рахуються від різних баз, тому ціна не повертається до 200.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Яким відсотком є число 45 від 180?', [
                '20%',
                '25%',
                '40%',
                '45%'
            ], 1, '45 / 180 = 0,25, тобто 25%.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Вклад 1000 грн під 10% річних зі щорічною капіталізацією. Скільки буде через 2 роки?', [
                '1200 грн',
                '1210 грн',
                '1100 грн',
                '1221 грн'
            ], 1, 'За формулою складних відсотків: 1000 · 1,1² = 1000 · 1,21 = 1210 грн. Відсотки другого року нараховуються вже на 1100 грн.')
        ]),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["topic"])('pythagoras', 'Теорема Піфагора', 'У прямокутному трикутнику квадрат гіпотенузи дорівнює сумі квадратів катетів. Теорема допомагає знаходити невідомі сторони та перевіряти, чи є трикутник прямокутним.', [
            'c² = a² + b², де c — гіпотенуза',
            'Гіпотенуза лежить проти прямого кута і є найдовшою стороною',
            'Обернена теорема: якщо c² = a² + b², трикутник прямокутний',
            'Піфагорові трійки: 3-4-5, 5-12-13, 8-15-17'
        ], [
            'Катети 6 і 8 → гіпотенуза √(36 + 64) = 10',
            'Діагональ прямокутника 3×4 дорівнює 5'
        ], [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Катети прямокутного трикутника 3 і 4. Чому дорівнює гіпотенуза?', [
                '5',
                '7',
                '6',
                '25'
            ], 0, 'c = √(3² + 4²) = √(9 + 16) = √25 = 5.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Гіпотенуза дорівнює 13, один катет — 5. Знайди другий катет.', [
                '8',
                '12',
                '18',
                '10'
            ], 1, 'b = √(13² − 5²) = √(169 − 25) = √144 = 12.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Чому дорівнює діагональ квадрата зі стороною 1?', [
                '1',
                '2',
                '√2',
                '√3'
            ], 2, 'Діагональ ділить квадрат на два прямокутні трикутники: d = √(1² + 1²) = √2.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Чи є трикутник зі сторонами 7, 24 і 25 прямокутним?', [
                'Так, бо 7² + 24² = 25²',
                'Ні, сторони замалі',
                'Лише якщо він рівнобедрений',
                'Неможливо визначити'
            ], 0, '49 + 576 = 625 = 25². За оберненою теоремою Піфагора трикутник прямокутний.')
        ])
    ]
};
const physics = {
    id: 'physics',
    name: 'Фізика',
    topics: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["topic"])('newton', 'Закони Ньютона', 'Три закони Ньютона описують, як сили впливають на рух тіл. Вони є основою класичної механіки.', [
            'І закон: тіло зберігає стан спокою або рівномірного руху, якщо на нього не діють сили',
            'ІІ закон: F = m · a',
            'ІІІ закон: сили дії та протидії рівні за модулем і протилежні за напрямом',
            'Вага тіла в ліфті: P = m(g ± a)'
        ], [
            'Сила 20 Н надає тілу масою 4 кг прискорення 5 м/с²',
            'Відштовхуючись від стіни, ти отримуєш таку саму за модулем силу'
        ], [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Яка формула виражає другий закон Ньютона?', [
                'F = m · a',
                'F = m · g / a',
                'E = m · c²',
                'p = m · v'
            ], 0, 'Другий закон Ньютона: рівнодійна сил дорівнює добутку маси на прискорення.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'На тіло масою 2 кг діє сила 10 Н. Яке прискорення тіла?', [
                '20 м/с²',
                '5 м/с²',
                '0,2 м/с²',
                '12 м/с²'
            ], 1, 'a = F / m = 10 / 2 = 5 м/с².'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Що стверджує третій закон Ньютона?', [
                'Сили дії та протидії рівні за модулем і протилежні за напрямом',
                'Сила пропорційна швидкості',
                'Тіло завжди зупиняється без сили',
                'Маса залежить від прискорення'
            ], 0, 'Тіла діють одне на одне силами, рівними за модулем і протилежними за напрямом.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Ліфт рухається вгору з прискоренням 2 м/с². Яка вага людини масою 50 кг? (g = 10 м/с²)', [
                '500 Н',
                '600 Н',
                '400 Н',
                '100 Н'
            ], 1, 'При прискоренні вгору вага зростає: P = m(g + a) = 50 · 12 = 600 Н.')
        ]),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["topic"])('ohm', 'Закон Ома', 'Сила струму в ділянці кола прямо пропорційна напрузі та обернено пропорційна опору. Закон Ома — основа розрахунку електричних кіл.', [
            'I = U / R',
            'Послідовне з’єднання: R = R₁ + R₂',
            'Паралельне з’єднання: 1/R = 1/R₁ + 1/R₂',
            'Одиниці: ампер (А), вольт (В), ом (Ом)'
        ], [
            'U = 9 В, R = 3 Ом → I = 3 А',
            'Два резистори по 4 Ом послідовно дають 8 Ом'
        ], [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Яка формула закону Ома для ділянки кола?', [
                'I = U / R',
                'I = U · R',
                'R = I · U',
                'U = I / R'
            ], 0, 'Сила струму дорівнює напрузі, поділеній на опір.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Напруга 12 В, опір 4 Ом. Яка сила струму?', [
                '48 А',
                '3 А',
                '0,33 А',
                '16 А'
            ], 1, 'I = 12 / 4 = 3 А.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Резистори 2 Ом і 3 Ом з’єднано послідовно. Який загальний опір?', [
                '1,2 Ом',
                '6 Ом',
                '5 Ом',
                '1 Ом'
            ], 2, 'При послідовному з’єднанні опори додаються: 2 + 3 = 5 Ом.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Два резистори по 6 Ом з’єднано паралельно. Який загальний опір?', [
                '12 Ом',
                '6 Ом',
                '3 Ом',
                '36 Ом'
            ], 2, '1/R = 1/6 + 1/6 = 1/3, отже R = 3 Ом. Паралельне з’єднання завжди зменшує загальний опір.')
        ]),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["topic"])('energy', 'Механічна енергія', 'Механічна енергія складається з кінетичної (енергії руху) та потенціальної (енергії положення). У замкненій системі без тертя їхня сума зберігається.', [
            'Кінетична енергія: Eк = m · v² / 2',
            'Потенціальна енергія: Eп = m · g · h',
            'Закон збереження: Eк + Eп = const',
            'Одиниця енергії — джоуль (Дж)'
        ], [
            'М’яч масою 0,5 кг зі швидкістю 4 м/с має Eк = 4 Дж',
            'Під час падіння потенціальна енергія переходить у кінетичну'
        ], [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Яка формула кінетичної енергії?', [
                'm · v² / 2',
                'm · g · h',
                'm · v',
                'F · s'
            ], 0, 'Кінетична енергія залежить від маси і квадрата швидкості: Eк = mv²/2.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Тіло масою 2 кг піднято на висоту 5 м. Яка його потенціальна енергія? (g = 10 м/с²)', [
                '10 Дж',
                '100 Дж',
                '50 Дж',
                '20 Дж'
            ], 1, 'Eп = mgh = 2 · 10 · 5 = 100 Дж.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Що стверджує закон збереження механічної енергії?', [
                'Сума кінетичної та потенціальної енергії в замкненій системі без тертя стала',
                'Енергія завжди зменшується',
                'Кінетична енергія завжди дорівнює потенціальній',
                'Енергія залежить лише від маси'
            ], 0, 'Енергія лише перетворюється з одного виду в інший, а їхня сума залишається незмінною.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Тіло вільно падає з висоти 20 м. Яка його швидкість біля землі? (g = 10 м/с²)', [
                '10 м/с',
                '20 м/с',
                '200 м/с',
                '40 м/с'
            ], 1, 'З mgh = mv²/2 маємо v = √(2gh) = √400 = 20 м/с.')
        ])
    ]
};
const chemistry = {
    id: 'chemistry',
    name: 'Хімія',
    topics: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["topic"])('periodic', 'Періодична система', 'Періодична система Менделєєва впорядковує хімічні елементи за зростанням заряду ядра. Положення елемента визначає його властивості.', [
            'Порядковий номер = кількість протонів = кількість електронів в атомі',
            'Номер періоду = кількість енергетичних рівнів',
            'Номер групи (А) = кількість електронів на зовнішньому рівні',
            'І група — лужні метали, VII — галогени, VIII — інертні гази'
        ], [
            'Оксиген (O): №8, 2 період, VI група — 6 зовнішніх електронів',
            'Натрій (Na): №11, лужний метал'
        ], [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Який хімічний символ натрію?', [
                'Na',
                'N',
                'So',
                'Nt'
            ], 0, 'Символ Na походить від латинської назви Natrium.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Що визначає порядковий номер елемента?', [
                'Кількість протонів у ядрі',
                'Кількість нейтронів',
                'Масу атома',
                'Кількість молекул'
            ], 0, 'Порядковий номер дорівнює заряду ядра, тобто кількості протонів.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'У якій групі розташовані лужні метали?', [
                'I група',
                'II група',
                'VII група',
                'VIII група'
            ], 0, 'Літій, натрій, калій та інші лужні метали мають один зовнішній електрон і розташовані в І групі.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Скільки електронів на зовнішньому рівні атома Хлору (№17)?', [
                '1',
                '5',
                '7',
                '17'
            ], 2, 'Розподіл електронів у Хлору: 2, 8, 7. Він розташований у VII групі, тому має 7 зовнішніх електронів.')
        ]),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["topic"])('reactions', 'Типи хімічних реакцій', 'Хімічні реакції класифікують за кількістю та складом реагентів і продуктів. Рівняння реакцій мають відповідати закону збереження маси.', [
            'Сполучення: A + B → AB',
            'Розкладу: AB → A + B',
            'Заміщення: A + BC → AC + B',
            'Обміну: AB + CD → AD + CB'
        ], [
            '2H₂ + O₂ → 2H₂O — реакція сполучення',
            'NaOH + HCl → NaCl + H₂O — реакція нейтралізації (обміну)'
        ], [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Яка схема відповідає реакції сполучення?', [
                'A + B → AB',
                'AB → A + B',
                'A + BC → AC + B',
                'AB + CD → AD + CB'
            ], 0, 'Під час сполучення з двох або більше речовин утворюється одна складніша.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Який коефіцієнт стоїть перед H₂O у рівнянні 2H₂ + O₂ → ?H₂O?', [
                '1',
                '2',
                '3',
                '4'
            ], 1, 'Зліва 4 атоми Гідрогену та 2 атоми Оксигену, тому праворуч потрібно 2H₂O.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Що утворюється під час реакції нейтралізації?', [
                'Сіль і вода',
                'Кислота і газ',
                'Лише вода',
                'Метал і кисень'
            ], 0, 'Кислота реагує з лугом, утворюючи сіль і воду.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'До якого типу належить реакція Zn + 2HCl → ZnCl₂ + H₂?', [
                'Сполучення',
                'Розкладу',
                'Заміщення',
                'Обміну'
            ], 2, 'Цинк заміщує Гідроген у кислоті. Проста речовина реагує зі складною, утворюючи нову просту та нову складну речовини.')
        ]),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["topic"])('acids', 'Кислоти, основи, солі', 'Кислоти, основи та солі — основні класи неорганічних сполук. Кислотність середовища вимірюють водневим показником pH.', [
            'pH < 7 — кисле середовище, pH = 7 — нейтральне, pH > 7 — лужне',
            'Кислоти містять Гідроген і кислотний залишок (HCl, H₂SO₄)',
            'Основи містять гідроксильну групу OH (NaOH)',
            'Молярна маса — сума атомних мас елементів у формулі'
        ], [
            'Лакмус у кислоті червоніє, у лузі — синіє',
            'M(H₂O) = 2·1 + 16 = 18 г/моль'
        ], [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Яке значення pH має нейтральний розчин?', [
                '0',
                '7',
                '14',
                '1'
            ], 1, 'Чиста вода має нейтральне середовище з pH = 7.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Якого кольору набуває лакмус у кислому середовищі?', [
                'Синього',
                'Червоного',
                'Жовтого',
                'Не змінюється'
            ], 1, 'У кислотах лакмус червоніє, а в лугах синіє.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Яка формула сульфатної кислоти?', [
                'HCl',
                'HNO₃',
                'H₂SO₄',
                'H₂CO₃'
            ], 2, 'Сульфатна кислота містить 2 атоми Гідрогену та кислотний залишок SO₄.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Яка молярна маса NaCl? (Ar(Na) = 23, Ar(Cl) = 35,5)', [
                '58,5 г/моль',
                '35,5 г/моль',
                '23 г/моль',
                '47 г/моль'
            ], 0, 'M(NaCl) = 23 + 35,5 = 58,5 г/моль.')
        ])
    ]
};
const astronomy = {
    id: 'astronomy',
    name: 'Астрономія',
    topics: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["topic"])('solar-system', 'Сонячна система', 'Сонячна система складається із Сонця, восьми планет, їхніх супутників, карликових планет, астероїдів і комет. Планети поділяють на земної групи та планети-гіганти.', [
            '8 планет: Меркурій, Венера, Земля, Марс, Юпітер, Сатурн, Уран, Нептун',
            'Планети земної групи — тверді та кам’янисті',
            'Планети-гіганти — газові та крижані, мають кільця',
            'Плутон з 2006 року — карликова планета'
        ], [
            'Юпітер — найбільша планета, його маса більша за масу всіх інших планет разом',
            'Венера — найгарячіша планета через парниковий ефект'
        ], [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Яка планета Сонячної системи найбільша?', [
                'Сатурн',
                'Юпітер',
                'Земля',
                'Нептун'
            ], 1, 'Юпітер — найбільший газовий гігант, його діаметр приблизно в 11 разів більший за земний.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Яка планета розташована найближче до Сонця?', [
                'Венера',
                'Марс',
                'Меркурій',
                'Земля'
            ], 2, 'Меркурій — перша від Сонця і найменша планета Сонячної системи.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Скільки планет у Сонячній системі?', [
                '7',
                '8',
                '9',
                '10'
            ], 1, 'Після того як Плутон став карликовою планетою у 2006 році, офіційно налічують 8 планет.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Чому Венера гарячіша за Меркурій, хоча розташована далі від Сонця?', [
                'Через сильний парниковий ефект щільної атмосфери з CO₂',
                'Через вулкани на поверхні',
                'Через швидке обертання',
                'Через близькість до Землі'
            ], 0, 'Щільна атмосфера Венери з вуглекислого газу утримує тепло, тому поверхня нагрівається приблизно до 460 °C.')
        ]),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["topic"])('stars', 'Зорі', 'Зорі — це гарячі газові кулі, які випромінюють енергію завдяки термоядерному синтезу в ядрі. Колір зорі вказує на температуру її поверхні.', [
            'Джерело енергії — синтез гелію з водню',
            'Блакитні зорі найгарячіші, червоні — найхолодніші',
            'Сонце — жовтий карлик',
            'Масивні зорі закінчують життя вибухом наднової'
        ], [
            'Температура поверхні Сонця ≈ 5 500 °C',
            'Бетельгейзе — червоний надгігант'
        ], [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Яка зоря розташована найближче до Землі?', [
                'Полярна',
                'Сіріус',
                'Сонце',
                'Проксима Центавра'
            ], 2, 'Сонце — зоря, найближча до Землі. Проксима Центавра — найближча після Сонця.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Якого кольору найгарячіші зорі?', [
                'Червоного',
                'Жовтого',
                'Блакитного',
                'Помаранчевого'
            ], 2, 'Чим вища температура, тим коротша довжина хвилі випромінювання. Тому найгарячіші зорі мають блакитний колір.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Що є джерелом енергії зір?', [
                'Горіння вугілля',
                'Термоядерний синтез',
                'Хімічні реакції',
                'Тертя газу'
            ], 1, 'У ядрі зорі ядра водню зливаються в гелій із вивільненням величезної енергії.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Що може залишитися після вибуху наднової масивної зорі?', [
                'Нейтронна зоря або чорна діра',
                'Нова планета',
                'Комета',
                'Червоний карлик'
            ], 0, 'Ядро масивної зорі колапсує. Залежно від маси утворюється нейтронна зоря або чорна діра.')
        ]),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["topic"])('earth-motion', 'Рухи Землі', 'Земля обертається навколо своєї осі та рухається орбітою навколо Сонця. Ці рухи зумовлюють зміну дня і ночі та пір року.', [
            'Обертання навколо осі — 1 доба',
            'Оберт навколо Сонця — ≈ 365,25 доби',
            'Нахил земної осі ≈ 23,5° спричиняє зміну пір року',
            'Світловий рік — відстань, яку світло долає за рік'
        ], [
            'Через 0,25 доби щорічно кожні 4 роки додаємо 29 лютого',
            'Світло від Сонця до Землі йде ≈ 8 хв 20 с'
        ], [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Чому відбувається зміна дня і ночі?', [
                'Через обертання Землі навколо осі',
                'Через рух Місяця',
                'Через рух Сонця навколо Землі',
                'Через нахил осі'
            ], 0, 'Земля обертається навколо осі, і кожна точка поверхні по черзі опиняється на освітленому та неосвітленому боці.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Що є головною причиною зміни пір року?', [
                'Зміна відстані до Сонця',
                'Нахил земної осі до площини орбіти',
                'Обертання Місяця',
                'Сонячні плями'
            ], 1, 'Через нахил осі кут падіння сонячних променів і тривалість дня змінюються протягом року.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'За скільки діб Земля робить оберт навколо Сонця?', [
                '30',
                '360',
                '≈ 365,25',
                '400'
            ], 2, 'Тропічний рік становить приблизно 365,25 доби, звідси й високосні роки.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Скільки часу світло від Сонця йде до Землі?', [
                '≈ 8 секунд',
                '≈ 8 хвилин 20 секунд',
                '≈ 1 година',
                '≈ 1 доба'
            ], 1, 'Відстань ≈ 150 млн км поділена на швидкість світла ≈ 300 000 км/с дає ≈ 500 с, тобто 8 хв 20 с.')
        ])
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/data/extra-exact.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "exactExtras",
    ()=>exactExtras,
    "exactNewTopics",
    ()=>exactNewTopics
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data/helpers.ts [app-client] (ecmascript)");
;
const exactExtras = {
    'math:quadratic': [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Яке з рівнянь є квадратним?', [
            '2x + 3 = 0',
            'x² − 4 = 0',
            'x³ = 8',
            '1/x = 2'
        ], 1, 'Квадратне рівняння містить змінну в другому степені як найвищому: x² − 4 = 0.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Чому дорівнює коефіцієнт b у рівнянні 3x² − 7x + 2 = 0?', [
            '3',
            '2',
            '−7',
            '7'
        ], 2, 'У записі ax² + bx + c коефіцієнт b стоїть біля x — це −7.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Сума коренів рівняння x² − 9x + 14 = 0 дорівнює:', [
            '14',
            '−9',
            '9',
            '−14'
        ], 2, 'За теоремою Вієта x₁ + x₂ = −b/a = 9.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Корені рівняння 2x² − 3x − 2 = 0:', [
            '2 і −0,5',
            '−2 і 0,5',
            '1 і −1',
            '3 і −2'
        ], 0, 'D = 9 + 16 = 25, x = (3 ± 5)/4 → x₁ = 2, x₂ = −0,5.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'При яких k рівняння x² + kx + 9 = 0 не має дійсних коренів?', [
            'k > 6',
            '−6 < k < 6',
            'k < −6',
            'k = 6'
        ], 1, 'Потрібно D < 0: k² − 36 < 0, тобто −6 < k < 6.')
    ],
    'math:percent': [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Скільки відсотків становить половина числа?', [
            '25%',
            '50%',
            '75%',
            '100%'
        ], 1, 'Половина — це 1/2 = 0,5 = 50%.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Скільки становить 10% від 80?', [
            '8',
            '10',
            '0,8',
            '18'
        ], 0, '10% — це десята частина: 80 / 10 = 8.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Футболка коштувала 400 грн, тепер 300 грн. На скільки відсотків знизилась ціна?', [
            '25%',
            '33%',
            '75%',
            '100%'
        ], 0, 'Знижка 100 грн від 400 грн: 100/400 = 0,25 = 25%.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Число збільшили на 25%. На скільки відсотків треба зменшити результат, щоб повернутися до початкового?', [
            '25%',
            '20%',
            '30%',
            '15%'
        ], 1, 'Нове число 1,25a. Щоб отримати a, ділимо на 1,25 = множимо на 0,8, тобто зменшуємо на 20%.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Розчин 200 г містить 10% солі. Скільки грамів води треба додати, щоб концентрація стала 8%?', [
            '25 г',
            '40 г',
            '50 г',
            '20 г'
        ], 2, 'Солі 20 г. 20 / 0,08 = 250 г розчину, отже треба додати 50 г води.')
    ],
    'math:pythagoras': [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Як називається найдовша сторона прямокутного трикутника?', [
            'Катет',
            'Гіпотенуза',
            'Медіана',
            'Бісектриса'
        ], 1, 'Гіпотенуза лежить проти прямого кута і завжди найдовша.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Яка з трійок є піфагоровою?', [
            '2, 3, 4',
            '3, 4, 5',
            '4, 5, 6',
            '1, 2, 3'
        ], 1, '3² + 4² = 9 + 16 = 25 = 5².'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Гіпотенуза 13, один катет 5. Знайди інший катет.', [
            '8',
            '12',
            '18',
            '10'
        ], 1, 'b = √(169 − 25) = √144 = 12.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Діагональ квадрата дорівнює 6√2. Чому дорівнює сторона квадрата?', [
            '6',
            '3',
            '12',
            '6√2'
        ], 0, 'd = a√2, тому a = 6√2 / √2 = 6.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Сторони трикутника 7, 24 і 25. Яка його площа?', [
            '84',
            '168',
            '175',
            '87,5'
        ], 0, '7² + 24² = 625 = 25², трикутник прямокутний. S = 7·24/2 = 84.')
    ],
    'physics:newton': [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Яка одиниця вимірювання сили в СІ?', [
            'Джоуль',
            'Ньютон',
            'Ват',
            'Паскаль'
        ], 1, 'Силу вимірюють у ньютонах (Н): 1 Н = 1 кг·м/с².'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Явище збереження швидкості тіла за відсутності дії інших тіл називається:', [
            'Інерція',
            'Тяжіння',
            'Тертя',
            'Пружність'
        ], 0, 'Це інерція — суть першого закону Ньютона.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'На тіло масою 4 кг діє сила 20 Н. З яким прискоренням воно рухається?', [
            '80 м/с²',
            '5 м/с²',
            '0,2 м/с²',
            '24 м/с²'
        ], 1, 'a = F/m = 20/4 = 5 м/с².'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Ліфт масою 500 кг піднімається з прискоренням 2 м/с² вгору. Сила натягу троса (g = 10 м/с²):', [
            '5000 Н',
            '6000 Н',
            '4000 Н',
            '1000 Н'
        ], 1, 'T − mg = ma → T = m(g + a) = 500 · 12 = 6000 Н.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Два тіла 2 кг і 3 кг зʼєднані ниткою, систему тягнуть із силою 10 Н без тертя. Сила натягу нитки між ними (тягнуть за тіло 3 кг):', [
            '4 Н',
            '6 Н',
            '10 Н',
            '2 Н'
        ], 0, 'a = 10/5 = 2 м/с². Нитка розганяє тіло 2 кг: T = 2 · 2 = 4 Н.')
    ],
    'physics:ohm': [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'У яких одиницях вимірюють опір?', [
            'Вольт',
            'Ампер',
            'Ом',
            'Ват'
        ], 2, 'Електричний опір вимірюють в омах (Ом).'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Яким приладом вимірюють силу струму?', [
            'Вольтметр',
            'Амперметр',
            'Омметр',
            'Динамометр'
        ], 1, 'Силу струму вимірює амперметр, його вмикають послідовно.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Два резистори по 6 Ом зʼєднані паралельно. Загальний опір:', [
            '12 Ом',
            '3 Ом',
            '6 Ом',
            '36 Ом'
        ], 1, 'Для двох однакових паралельних: R = 6/2 = 3 Ом.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Лампа потужністю 60 Вт працює від мережі 220 В. Приблизна сила струму:', [
            '0,27 А',
            '3,7 А',
            '13 200 А',
            '2,7 А'
        ], 0, 'I = P/U = 60/220 ≈ 0,27 А.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Резистори 2 Ом і 3 Ом зʼєднані послідовно й підключені до 10 В. Напруга на резисторі 3 Ом:', [
            '4 В',
            '6 В',
            '5 В',
            '10 В'
        ], 1, 'I = 10/5 = 2 А, U₂ = 2 · 3 = 6 В.')
    ],
    'physics:energy': [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Енергія рухомого тіла називається:', [
            'Потенціальна',
            'Кінетична',
            'Внутрішня',
            'Ядерна'
        ], 1, 'Кінетична енергія — енергія руху: Eк = mv²/2.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Одиниця вимірювання енергії в СІ:', [
            'Ньютон',
            'Джоуль',
            'Ват',
            'Кілограм'
        ], 1, 'Енергію та роботу вимірюють у джоулях.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Яку потенціальну енергію має тіло 2 кг на висоті 5 м (g = 10 м/с²)?', [
            '10 Дж',
            '100 Дж',
            '50 Дж',
            '25 Дж'
        ], 1, 'Eп = mgh = 2 · 10 · 5 = 100 Дж.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Тіло вільно падає з висоти 20 м. Його швидкість біля землі (g = 10 м/с², без опору):', [
            '10 м/с',
            '20 м/с',
            '40 м/с',
            '200 м/с'
        ], 1, 'mgh = mv²/2 → v = √(2gh) = √400 = 20 м/с.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Швидкість автомобіля зросла вдвічі. Як змінилася його кінетична енергія?', [
            'Зросла вдвічі',
            'Зросла вчетверо',
            'Не змінилася',
            'Зросла у 8 разів'
        ], 1, 'Eк ∝ v², тому при подвоєнні швидкості енергія зростає в 2² = 4 рази.')
    ],
    'chemistry:periodic': [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Хто створив періодичну систему хімічних елементів?', [
            'Ломоносов',
            'Менделєєв',
            'Бутлеров',
            'Лавуазьє'
        ], 1, 'Періодичний закон відкрив Дмитро Менделєєв у 1869 році.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Яким символом позначають кисень?', [
            'K',
            'O',
            'Ki',
            'C'
        ], 1, 'Кисень — Oxygenium, символ O.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Скільки електронів має атом Натрію (№ 11)?', [
            '1',
            '11',
            '23',
            '12'
        ], 1, 'Кількість електронів у нейтральному атомі дорівнює порядковому номеру — 11.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Скільки нейтронів у ядрі атома ²⁷Al (№ 13)?', [
            '13',
            '14',
            '27',
            '40'
        ], 1, 'N = A − Z = 27 − 13 = 14.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Як змінюються металічні властивості в групі зверху вниз?', [
            'Слабшають',
            'Посилюються',
            'Не змінюються',
            'Зникають'
        ], 1, 'Радіус атома зростає, зовнішні електрони віддаються легше, тому металічні властивості посилюються.')
    ],
    'chemistry:reactions': [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Ознакою хімічної реакції є:', [
            'Зміна форми',
            'Виділення газу',
            'Подрібнення',
            'Плавлення льоду'
        ], 1, 'Виділення газу свідчить про утворення нової речовини.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Речовини, що вступають у реакцію, називаються:', [
            'Продукти',
            'Реагенти',
            'Каталізатори',
            'Індикатори'
        ], 1, 'Вихідні речовини реакції — реагенти, нові — продукти.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Fe + CuSO₄ → FeSO₄ + Cu — це реакція:', [
            'Сполучення',
            'Розкладу',
            'Заміщення',
            'Обміну'
        ], 2, 'Проста речовина Fe заміщує Cu у складній речовині.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Який коефіцієнт перед O₂ у рівнянні CH₄ + O₂ → CO₂ + H₂O після врівноваження?', [
            '1',
            '2',
            '3',
            '4'
        ], 1, 'CH₄ + 2O₂ → CO₂ + 2H₂O: праворуч 4 атоми O, отже 2O₂.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Реакція, що відбувається з поглинанням теплоти, називається:', [
            'Екзотермічна',
            'Ендотермічна',
            'Каталітична',
            'Оборотна'
        ], 1, 'Ендотермічні реакції поглинають теплоту (наприклад, розклад CaCO₃).')
    ],
    'chemistry:acids': [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Який колір має лакмус у кислому середовищі?', [
            'Синій',
            'Червоний',
            'Жовтий',
            'Безбарвний'
        ], 1, 'У кислому середовищі лакмус червоніє.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Яка формула хлоридної кислоти?', [
            'HCl',
            'NaCl',
            'H₂SO₄',
            'NaOH'
        ], 0, 'Хлоридна (соляна) кислота — HCl.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Продукти реакції HCl + NaOH:', [
            'NaCl + H₂O',
            'NaH + ClOH',
            'Na + HCl',
            'NaClO + H₂'
        ], 0, 'Реакція нейтралізації: кислота + луг → сіль + вода.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Який pH має нейтральний розчин при 25 °C?', [
            '0',
            '7',
            '14',
            '1'
        ], 1, 'Нейтральне середовище: pH = 7; менше — кисле, більше — лужне.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Скільки грамів NaOH (M = 40 г/моль) потрібно для нейтралізації 1 моль H₂SO₄?', [
            '40 г',
            '80 г',
            '20 г',
            '98 г'
        ], 1, 'H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O, потрібно 2 моль = 80 г.')
    ],
    'astronomy:solar-system': [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Яка планета найближча до Сонця?', [
            'Венера',
            'Меркурій',
            'Марс',
            'Земля'
        ], 1, 'Меркурій — перша планета від Сонця.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Скільки планет у Сонячній системі?', [
            '7',
            '8',
            '9',
            '10'
        ], 1, 'Після 2006 року Плутон став карликовою планетою, тож планет 8.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Яка планета найбільша?', [
            'Сатурн',
            'Юпітер',
            'Нептун',
            'Уран'
        ], 1, 'Юпітер — газовий гігант, масивніший за всі інші планети разом.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Чому Венера гарячіша за Меркурій, хоча далі від Сонця?', [
            'Вона більша',
            'Сильний парниковий ефект',
            'Вона обертається швидше',
            'Має вулкани на поверхні'
        ], 1, 'Щільна атмосфера з CO₂ утримує тепло — потужний парниковий ефект.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Що розділяє планети земної групи та планети-гіганти?', [
            'Пояс Койпера',
            'Головний пояс астероїдів',
            'Хмара Оорта',
            'Орбіта Місяця'
        ], 1, 'Головний пояс астероїдів лежить між орбітами Марса та Юпітера.')
    ],
    'astronomy:stars': [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Найближча до Землі зоря:', [
            'Сіріус',
            'Сонце',
            'Полярна',
            'Вега'
        ], 1, 'Сонце — найближча до нас зоря.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Групи зір, обʼєднані в уявні фігури на небі, називаються:', [
            'Галактики',
            'Сузірʼя',
            'Туманності',
            'Комети'
        ], 1, 'Небо поділене на 88 сузірʼїв.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Зорі якого кольору найгарячіші?', [
            'Червоні',
            'Жовті',
            'Блакитні',
            'Помаранчеві'
        ], 2, 'Чим вища температура, тим «синіший» колір випромінювання.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Чим завершується життя дуже масивної зорі?', [
            'Білий карлик',
            'Наднова і нейтронна зоря або чорна діра',
            'Червоний карлик',
            'Перетворення на планету'
        ], 1, 'Масивні зорі вибухають як наднові, залишаючи нейтронну зорю або чорну діру.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Світловий рік — це одиниця:', [
            'Часу',
            'Відстані',
            'Швидкості',
            'Яскравості'
        ], 1, 'Це відстань, яку світло проходить за рік: ≈ 9,46 · 10¹² км.')
    ],
    'astronomy:earth-motion': [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'За який час Земля робить повний оберт навколо осі?', [
            '1 рік',
            '≈ 24 год',
            '1 місяць',
            '12 год'
        ], 1, 'Добове обертання триває приблизно 24 години.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Обертання Землі навколо Сонця спричиняє:', [
            'Зміну дня і ночі',
            'Зміну пір року (разом із нахилом осі)',
            'Припливи',
            'Затемнення'
        ], 1, 'Рух орбітою разом із нахилом осі зумовлює зміну пір року.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Коли в Північній півкулі найкоротший день?', [
            '21 березня',
            '22 червня',
            '23 вересня',
            '22 грудня'
        ], 3, 'Зимове сонцестояння — близько 22 грудня.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Кут нахилу осі Землі до площини орбіти приблизно:', [
            '23,5°',
            '66,5°',
            '90°',
            '45°'
        ], 1, 'Вісь нахилена на 66,5° до площини орбіти (або на 23,5° до перпендикуляра).'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Чому кожні 4 роки додають 29 лютого?', [
            'Через сповільнення Землі',
            'Рік триває ≈ 365,25 доби',
            'Через Місяць',
            'Через рух Сонця'
        ], 1, 'Чверть доби щороку накопичується в одну добу за 4 роки.')
    ]
};
const exactNewTopics = {
    math: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["topic"])('linear-functions', 'Лінійна функція', 'Лінійна функція має вигляд y = kx + b. Її графік — пряма. Коефіцієнт k визначає нахил, а b — точку перетину з віссю Oy.', [
            'y = kx + b — загальний вигляд',
            'k > 0 — функція зростає, k < 0 — спадає',
            'b — ордината точки перетину з Oy',
            'Паралельні прямі мають однакове k'
        ], [
            'y = 2x + 1: при x = 3 маємо y = 7',
            'y = −x + 4 перетинає Ox у точці (4; 0)'
        ], [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Графіком лінійної функції є:', [
                'Парабола',
                'Пряма',
                'Гіпербола',
                'Коло'
            ], 1, 'Графік y = kx + b завжди пряма.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Знайди y для y = 3x − 2 при x = 2.', [
                '4',
                '6',
                '8',
                '1'
            ], 0, 'y = 3·2 − 2 = 4.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'У функції y = 5x + 7 коефіцієнт k дорівнює:', [
                '7',
                '5',
                '12',
                '35'
            ], 1, 'k — коефіцієнт біля x, тобто 5.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'У якій точці графік y = 2x − 6 перетинає вісь Ox?', [
                '(0; −6)',
                '(3; 0)',
                '(−3; 0)',
                '(6; 0)'
            ], 1, 'y = 0 → 2x = 6 → x = 3.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Яка функція спадає?', [
                'y = 2x',
                'y = x + 5',
                'y = −3x + 1',
                'y = 0,5x'
            ], 2, 'Функція спадає, коли k < 0: тут k = −3.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Яка пряма паралельна y = 4x − 1?', [
                'y = −4x',
                'y = 4x + 3',
                'y = x/4',
                'y = −x − 1'
            ], 1, 'Паралельні прямі мають однакові кутові коефіцієнти: k = 4.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Пряма проходить через (1; 3) і (3; 7). Її рівняння:', [
                'y = 2x + 1',
                'y = 3x',
                'y = 4x − 1',
                'y = x + 2'
            ], 0, 'k = (7 − 3)/(3 − 1) = 2; 3 = 2·1 + b → b = 1.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Точка перетину прямих y = x + 1 та y = −x + 5:', [
                '(2; 3)',
                '(3; 2)',
                '(1; 2)',
                '(4; 1)'
            ], 0, 'x + 1 = −x + 5 → x = 2, y = 3.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Площа трикутника, утвореного прямою y = −2x + 4 та осями координат:', [
                '4',
                '8',
                '2',
                '16'
            ], 0, 'Перетини: (2; 0) та (0; 4). S = 2·4/2 = 4.')
        ])
    ],
    physics: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["topic"])('optics', 'Світлові явища', 'Світло поширюється прямолінійно в однорідному середовищі. На межі середовищ воно відбивається і заломлюється. Лінзи збирають або розсіюють промені.', [
            'Кут падіння дорівнює куту відбивання',
            'Швидкість світла у вакуумі c ≈ 3·10⁸ м/с',
            'Оптична сила лінзи D = 1/F (дптр)',
            'Збиральна лінза — опукла, розсіювальна — увігнута'
        ], [
            'Лінза з F = 0,5 м має D = 2 дптр',
            'Ложка у склянці води здається «зламаною» через заломлення'
        ], [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Як поширюється світло в однорідному середовищі?', [
                'По колу',
                'Прямолінійно',
                'Хвилясто',
                'Хаотично'
            ], 1, 'В однорідному середовищі світло поширюється прямолінійно — тому утворюються тіні.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Кут падіння 30°. Чому дорівнює кут відбивання?', [
                '60°',
                '30°',
                '90°',
                '15°'
            ], 1, 'За законом відбивання кути рівні.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Яка лінза є збиральною?', [
                'Увігнута',
                'Опукла',
                'Плоска',
                'Будь-яка'
            ], 1, 'Опукла лінза збирає паралельні промені у фокусі.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Оптична сила лінзи з фокусною відстанню 0,25 м:', [
                '0,25 дптр',
                '4 дптр',
                '25 дптр',
                '2 дптр'
            ], 1, 'D = 1/F = 1/0,25 = 4 дптр.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Чому ложка у склянці води здається зламаною?', [
                'Відбивання',
                'Заломлення',
                'Поглинання',
                'Дифракція'
            ], 1, 'Світло змінює напрям на межі вода — повітря.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Яку лінзу використовують окуляри для короткозорих?', [
                'Збиральну',
                'Розсіювальну',
                'Циліндричну',
                'Не використовують'
            ], 1, 'При короткозорості зображення фокусується перед сітківкою; розсіювальна лінза це виправляє.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Світло від Сонця йде до Землі ≈ 500 с. Відстань до Сонця приблизно:', [
                '1,5·10⁸ км',
                '1,5·10⁶ км',
                '3·10⁸ км',
                '1,5·10¹¹ км'
            ], 0, 's = ct = 3·10⁵ км/с · 500 с = 1,5·10⁸ км.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Предмет на подвійній фокусній відстані від збиральної лінзи. Зображення:', [
                'Збільшене',
                'Того ж розміру, перевернуте',
                'Уявне',
                'Зменшене пряме'
            ], 1, 'При d = 2F зображення дійсне, перевернуте, рівне за розміром, на відстані 2F.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Кут між падаючим і відбитим променями 80°. Кут падіння:', [
                '80°',
                '40°',
                '50°',
                '10°'
            ], 1, 'Кут між променями дорівнює сумі кутів падіння і відбивання: 80/2 = 40°.')
        ])
    ],
    chemistry: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["topic"])('organic', 'Основи органічної хімії', 'Органічна хімія вивчає сполуки Карбону. Атом Карбону чотиривалентний і утворює ланцюги. Найпростіші органічні речовини — вуглеводні.', [
            'Карбон у органічних сполуках чотиривалентний',
            'Алкани: CₙH₂ₙ₊₂ (метан, етан)',
            'Ізомери — однаковий склад, різна будова',
            'Функціональні групи: −OH (спирти), −COOH (кислоти)'
        ], [
            'CH₄ — метан, головний компонент природного газу',
            'C₂H₅OH — етанол'
        ], [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Який елемент є основою органічних сполук?', [
                'Оксиген',
                'Карбон',
                'Нітроген',
                'Сульфур'
            ], 1, 'Органічні речовини — сполуки Карбону.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Формула метану:', [
                'CH₄',
                'C₂H₆',
                'CO₂',
                'H₂O'
            ], 0, 'Метан — найпростіший алкан, CH₄.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Валентність Карбону в органічних сполуках:', [
                'II',
                'III',
                'IV',
                'I'
            ], 2, 'За теорією Бутлерова Карбон чотиривалентний.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Яка функціональна група характерна для спиртів?', [
                '−COOH',
                '−OH',
                '−NH₂',
                '−CHO'
            ], 1, 'Гідроксильна група −OH визначає властивості спиртів.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Формула пропану (n = 3) за CₙH₂ₙ₊₂:', [
                'C₃H₆',
                'C₃H₈',
                'C₃H₄',
                'C₃H₁₀'
            ], 1, '2·3 + 2 = 8, тому C₃H₈.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Оцтова кислота містить групу:', [
                '−OH',
                '−COOH',
                '−NO₂',
                '−Cl'
            ], 1, 'Карбонові кислоти містять карбоксильну групу −COOH.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Ізомери — це речовини з:', [
                'Різним складом',
                'Однаковим складом, але різною будовою',
                'Однаковою будовою',
                'Різною масою'
            ], 1, 'Наприклад, бутан та ізобутан мають формулу C₄H₁₀.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Скільки моль CO₂ утвориться при повному згорянні 1 моль C₂H₆?', [
                '1',
                '2',
                '3',
                '4'
            ], 1, 'Кожен атом C дає молекулу CO₂: 2 атоми — 2 моль.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Яка речовина знебарвлює бромну воду?', [
                'Етан',
                'Етилен',
                'Метан',
                'Пропан'
            ], 1, 'Етилен має подвійний звʼязок і вступає в реакцію приєднання.')
        ])
    ],
    astronomy: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["topic"])('moon', 'Місяць і затемнення', 'Місяць — природний супутник Землі. Він світить відбитим світлом Сонця, тому ми бачимо фази. Затемнення виникають, коли Сонце, Земля й Місяць розташовуються на одній лінії.', [
            'Фази: новий місяць, перша чверть, повня, остання чверть',
            'Місячний місяць ≈ 29,5 доби',
            'Сонячне затемнення — Місяць між Сонцем і Землею',
            'Місячне затемнення — Земля між Сонцем і Місяцем'
        ], [
            'Під час повні Місяць освітлений повністю',
            'Припливи виникають через тяжіння Місяця'
        ], [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Місяць світить:', [
                'Власним світлом',
                'Відбитим світлом Сонця',
                'Світлом Землі',
                'Через вулкани'
            ], 1, 'Місяць не випромінює світла сам, а відбиває сонячне.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Як називається фаза, коли Місяць видно повністю?', [
                'Новий місяць',
                'Повня',
                'Перша чверть',
                'Серп'
            ], 1, 'Повня — увесь видимий диск освітлений.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Місяць є супутником:', [
                'Марса',
                'Землі',
                'Сонця',
                'Юпітера'
            ], 1, 'Місяць — єдиний природний супутник Землі.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Під час сонячного затемнення між Сонцем і Землею знаходиться:', [
                'Марс',
                'Місяць',
                'Венера',
                'Нічого'
            ], 1, 'Місяць закриває Сонце від спостерігача на Землі.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Тривалість зміни всіх фаз Місяця приблизно:', [
                '7 діб',
                '29,5 доби',
                '365 діб',
                '1 доба'
            ], 1, 'Синодичний місяць триває ≈ 29,5 доби.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Що спричиняє морські припливи?', [
                'Вітер',
                'Тяжіння Місяця',
                'Обертання Сонця',
                'Землетруси'
            ], 1, 'Гравітація Місяця «витягує» водну оболонку Землі.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Чому ми завжди бачимо один бік Місяця?', [
                'Він не обертається',
                'Період обертання навколо осі дорівнює періоду обертання навколо Землі',
                'Його закриває атмосфера',
                'Через тінь Землі'
            ], 1, 'Синхронне обертання — наслідок припливної взаємодії.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Місячне затемнення можливе лише в фазі:', [
                'Новий місяць',
                'Повня',
                'Перша чверть',
                'Остання чверть'
            ], 1, 'Земля має бути між Сонцем і Місяцем — це повня.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Чому затемнення не відбуваються щомісяця?', [
                'Місяць занадто малий',
                'Орбіта Місяця нахилена до площини орбіти Землі',
                'Земля обертається',
                'Сонце рухається'
            ], 1, 'Нахил ≈ 5° — тіні зазвичай проходять вище або нижче.')
        ])
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/data/extra-languages.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "languageExtras",
    ()=>languageExtras,
    "languageNewTopics",
    ()=>languageNewTopics
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data/helpers.ts [app-client] (ecmascript)");
;
const languageExtras = {
    'ukr-language:phonetics': [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Скільки літер в українському алфавіті?', [
            '31',
            '33',
            '32',
            '30'
        ], 1, 'Український алфавіт має 33 літери.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Яка літера позначає голосний звук?', [
            'б',
            'о',
            'к',
            'м'
        ], 1, 'О — голосний звук.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'У якому слові апостроф пишеться правильно?', [
            'мʼясо',
            'пірʼя',
            'сімʼя',
            'Усі варіанти'
        ], 3, 'Апостроф ставиться після б, п, в, м, ф, р перед я, ю, є, ї.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Скільки звуків у слові «їжак»?', [
            '4',
            '5',
            '3',
            '6'
        ], 1, 'Ї на початку слова позначає два звуки [йі]: [й, і, ж, а, к] — 5.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'У якому слові відбувається уподібнення приголосних за дзвінкістю?', [
            'боротьба',
            'стіл',
            'хата',
            'вода'
        ], 0, 'У «боротьба» [т] перед [б] вимовляється дзвінко — [бород’ба].')
    ],
    'ukr-language:parts-of-speech': [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Частина мови, що позначає предмет:', [
            'Дієслово',
            'Іменник',
            'Прикметник',
            'Прислівник'
        ], 1, 'Іменник відповідає на питання хто? що?'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Слово «бігти» — це:', [
            'Іменник',
            'Дієслово',
            'Прикметник',
            'Займенник'
        ], 1, 'Дієслово позначає дію.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'До якої частини мови належить слово «швидко»?', [
            'Прикметник',
            'Прислівник',
            'Дієслово',
            'Частка'
        ], 1, 'Прислівник позначає ознаку дії: як? — швидко.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Яке слово є дієприкметником?', [
            'читаючи',
            'прочитаний',
            'читання',
            'читати'
        ], 1, '«Прочитаний» — ознака предмета за дією.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'У реченні «Я сам прийду» слово «сам» — це:', [
            'Прикметник',
            'Займенник',
            'Прислівник',
            'Частка'
        ], 1, '«Сам» — означальний займенник.')
    ],
    'ukr-language:syntax': [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Головні члени речення:', [
            'Додаток і обставина',
            'Підмет і присудок',
            'Означення і додаток',
            'Звертання'
        ], 1, 'Підмет і присудок — граматична основа.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Який розділовий знак ставиться в кінці розповідного речення?', [
            '?',
            '!',
            '.',
            ','
        ], 2, 'Розповідне речення закінчується крапкою.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Яке речення складне?', [
            'Сонце світить яскраво.',
            'Ішов дощ, і дмухав вітер.',
            'Діти гралися.',
            'Весна!'
        ], 1, 'Дві граматичні основи: «ішов дощ», «дмухав вітер».'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Де потрібна кома: «Я знаю (?) що ти прийдеш»?', [
            'Не потрібна',
            'Після «знаю»',
            'Після «ти»',
            'Після «Я»'
        ], 1, 'Підрядна частина «що ти прийдеш» відокремлюється комою.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Яке речення з відокремленою обставиною?', [
            'Усміхаючись, він увійшов.',
            'Він увійшов.',
            'Дім стояв на горі.',
            'Учні пишуть.'
        ], 0, 'Дієприслівниковий зворот «усміхаючись» відокремлюється.')
    ],
    'ukr-literature:shevchenko': [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Як називається головна збірка Тараса Шевченка?', [
            '«Зівʼяле листя»',
            '«Кобзар»',
            '«Лісова пісня»',
            '«Мойсей»'
        ], 1, '«Кобзар» уперше вийшов 1840 р.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Ким за фахом, крім поета, був Шевченко?', [
            'Лікарем',
            'Художником',
            'Інженером',
            'Музикантом'
        ], 1, 'Шевченко — академік гравюри.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Головна героїня поеми «Катерина» постраждала від:', [
            'Батька',
            'Москаля-офіцера',
            'Брата',
            'Пана'
        ], 1, 'Москаль-спокусник покинув Катерину.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'У якому творі Шевченко звертається «І мертвим, і живим, і ненарожденним...»?', [
            '«Сон»',
            '«І мертвим, і живим...» (Посланіє)',
            '«Заповіт»',
            '«Кавказ»'
        ], 1, 'Це послання 1845 р. до земляків.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Поема «Кавказ» присвячена:', [
            'Тарасу Бульбі',
            'Якову де Бальмену',
            'Івану Сошенку',
            'Карлу Брюллову'
        ], 1, 'Другу, загиблому на Кавказі.')
    ],
    'ukr-literature:lesya': [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Справжнє імʼя Лесі Українки:', [
            'Ольга Кобилянська',
            'Лариса Косач',
            'Марія Вілінська',
            'Ольга Косач'
        ], 1, 'Лариса Петрівна Косач-Квітка.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Головна героїня «Лісової пісні»:', [
            'Мавка',
            'Русалка',
            'Килина',
            'Наталка'
        ], 0, 'Мавка — лісова істота, що покохала Лукаша.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Вірш «Contra spem spero!» означає:', [
            'Без надії сподіваюсь',
            'Вперед до мети',
            'Ніколи не здавайся',
            'Мир усім'
        ], 0, 'Латиною — «Без надії сподіваюсь».'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Жанр «Лісової пісні»:', [
            'Поема',
            'Драма-феєрія',
            'Новела',
            'Роман'
        ], 1, 'Авторка визначила її як драму-феєрію.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Що символізує перетворення Мавки на вербу?', [
            'Покарання',
            'Безсмертя духу та краси',
            'Смерть кохання',
            'Прокляття'
        ], 1, 'Мавка лишається жити в природі й пісні.')
    ],
    'ukr-literature:franko': [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Як називають Івана Франка?', [
            'Каменяр',
            'Кобзар',
            'Мавка',
            'Будитель'
        ], 0, 'Від вірша «Каменярі».'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Франко народився в селі:', [
            'Моринці',
            'Нагуєвичі',
            'Колодяжне',
            'Трахтемирів'
        ], 1, 'Нагуєвичі на Дрогобиччині.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Збірка інтимної лірики Франка:', [
            '«Зівʼяле листя»',
            '«Кобзар»',
            '«Сон»',
            '«Енеїда»'
        ], 0, '«Зівʼяле листя» — «ліричної драми».'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Головна ідея поеми «Мойсей»:', [
            'Кохання',
            'Роль провідника нації та віра в майбутнє народу',
            'Сатира',
            'Природа'
        ], 1, 'Алегорія долі українського народу.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Повість «Захар Беркут» розповідає про боротьбу з:', [
            'Турками',
            'Монголами',
            'Поляками',
            'Шведами'
        ], 1, 'Тухольська громада проти монголів, XIII ст.')
    ],
    'english:present': [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Choose: She ___ to school every day.', [
            'go',
            'goes',
            'going',
            'gone'
        ], 1, 'Третя особа однини в Present Simple: goes.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Choose: I ___ a student.', [
            'is',
            'am',
            'are',
            'be'
        ], 1, 'З I вживаємо am.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Choose: Look! The children ___ in the garden.', [
            'play',
            'plays',
            'are playing',
            'played'
        ], 2, '«Look!» — дія зараз: Present Continuous.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Choose: I ___ this song. It is great!', [
            'am loving',
            'love',
            'loves',
            'am love'
        ], 1, '«Love» — stative verb, у Continuous зазвичай не вживається.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Choose: Water ___ at 100 °C.', [
            'is boiling',
            'boils',
            'boil',
            'boiled'
        ], 1, 'Загальновідомий факт — Present Simple.')
    ],
    'english:past': [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Past form of "go":', [
            'goed',
            'went',
            'gone',
            'goes'
        ], 1, 'Неправильне дієслово: go — went — gone.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Choose: Yesterday I ___ football.', [
            'play',
            'played',
            'playing',
            'plays'
        ], 1, 'Yesterday — Past Simple.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Choose: I ___ TV when you called.', [
            'watched',
            'was watching',
            'watch',
            'have watched'
        ], 1, 'Тривала дія, перервана іншою, — Past Continuous.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Choose: When we arrived, the film ___.', [
            'already started',
            'had already started',
            'has started',
            'starts'
        ], 1, 'Дія до іншої дії в минулому — Past Perfect.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Choose: I ___ in Kyiv since 2015.', [
            'lived',
            'have lived',
            'live',
            'was living'
        ], 1, '«Since» + дія до тепер — Present Perfect.')
    ],
    'english:articles': [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Choose: I have ___ apple.', [
            'a',
            'an',
            'the',
            '—'
        ], 1, 'Перед голосним звуком — an.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Choose: ___ sun is very bright.', [
            'A',
            'An',
            'The',
            '—'
        ], 2, 'Унікальний обʼєкт — the.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Choose: She is ___ university student.', [
            'a',
            'an',
            'the',
            '—'
        ], 0, '«University» починається зі звуку [j] — a.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Choose: ___ Dnipro flows into ___ Black Sea.', [
            '— / the',
            'The / the',
            'A / the',
            'The / —'
        ], 1, 'Назви річок і морів — з the.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Synonym of "huge":', [
            'tiny',
            'enormous',
            'narrow',
            'weak'
        ], 1, 'Huge = enormous — величезний.')
    ],
    'foreign-literature:shakespeare': [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Де жили Ромео і Джульєтта?', [
            'Лондон',
            'Верона',
            'Париж',
            'Венеція'
        ], 1, 'Дія трагедії — у Вероні.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Шекспір — письменник із:', [
            'Франції',
            'Англії',
            'Італії',
            'Німеччини'
        ], 1, 'Вільям Шекспір — англійський драматург.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Слова «Бути чи не бути...» належать:', [
            'Отелло',
            'Гамлету',
            'Макбету',
            'Лірові'
        ], 1, 'Монолог Гамлета, принца Данського.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Як називався театр, повʼязаний із Шекспіром?', [
            'Ла Скала',
            '«Глобус»',
            'Комеді Франсез',
            'Ковент-Гарден'
        ], 1, 'Театр «Глобус» у Лондоні.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Скільки сонетів написав Шекспір?', [
            '54',
            '154',
            '254',
            '14'
        ], 1, 'Цикл із 154 сонетів.')
    ],
    'foreign-literature:little-prince': [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Автор «Маленького принца»:', [
            'Жуль Верн',
            'Антуан де Сент-Екзюпері',
            'Віктор Гюго',
            'Ганс Крістіан Андерсен'
        ], 1, 'Твір 1943 р.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Яку квітку любив Маленький принц?', [
            'Тюльпан',
            'Троянду',
            'Ромашку',
            'Лілію'
        ], 1, 'Троянда на його планеті.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Ким був оповідач за фахом?', [
            'Лікарем',
            'Льотчиком',
            'Моряком',
            'Вчителем'
        ], 1, 'Як і автор, — пілотом.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Чого навчив Маленького принца Лис?', [
            'Літати',
            '«Ми відповідальні за тих, кого приручили»',
            'Рахувати зорі',
            'Садити баобаби'
        ], 1, 'Головний урок про дружбу й відповідальність.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Що символізують баобаби?', [
            'Дружбу',
            'Шкідливі звички та зло, яке треба знищувати вчасно',
            'Любов',
            'Мудрість'
        ], 1, 'Якщо не прополювати вчасно, вони розірвуть планету.')
    ],
    'foreign-literature:homer': [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Автор «Іліади» та «Одіссеї»:', [
            'Сократ',
            'Гомер',
            'Есхіл',
            'Вергілій'
        ], 1, 'Давньогрецький поет Гомер.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Куди повертався Одіссей?', [
            'Троя',
            'Ітака',
            'Спарта',
            'Афіни'
        ], 1, 'Додому, на острів Ітака.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Про яку війну розповідає «Іліада»?', [
            'Пелопоннеську',
            'Троянську',
            'Греко-перську',
            'Пунічну'
        ], 1, 'Епізод Троянської війни.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Як Одіссей урятувався від циклопа Поліфема?', [
            'Убив його мечем',
            'Осліпив і назвався «Ніхто»',
            'Утік уночі',
            'Підкупив'
        ], 1, 'Поліфем кричав, що його скривдив «Ніхто».'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Вразливе місце Ахілла:', [
            'Голова',
            'Пʼята',
            'Серце',
            'Рука'
        ], 1, 'Мати тримала його за пʼяту, занурюючи у Стікс.')
    ]
};
const languageNewTopics = {
    'ukr-language': [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["topic"])('lexicology', 'Лексикологія', 'Лексикологія вивчає словниковий склад мови: значення слів, синоніми, антоніми, омоніми, фразеологізми та запозичення.', [
            'Синоніми — близькі за значенням слова',
            'Антоніми — протилежні за значенням',
            'Омоніми — однакові за звучанням, різні за значенням',
            'Фразеологізм — стійкий вислів'
        ], [
            'Сміливий — відважний (синоніми)',
            '«Бити байдики» — ледарювати'
        ], [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Слова «веселий — сумний» є:', [
                'Синонімами',
                'Антонімами',
                'Омонімами',
                'Паронімами'
            ], 1, 'Протилежні значення — антоніми.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Синонім до слова «гарний»:', [
                'Поганий',
                'Вродливий',
                'Високий',
                'Старий'
            ], 1, 'Близьке значення — вродливий.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Що означає «бити байдики»?', [
                'Працювати',
                'Ледарювати',
                'Битися',
                'Танцювати'
            ], 1, 'Фразеологізм означає байдикувати.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, '«Коса» (зачіска) і «коса» (знаряддя) — це:', [
                'Синоніми',
                'Омоніми',
                'Антоніми',
                'Пароніми'
            ], 1, 'Однакове звучання, різні значення.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Яке слово запозичене?', [
                'Хата',
                'Комп’ютер',
                'Вода',
                'Мати'
            ], 1, 'З англійської мови.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Значення фразеологізму «пекти раків»:', [
                'Готувати',
                'Червоніти від сорому',
                'Ловити рибу',
                'Сердитися'
            ], 1, 'Червоніти — як варений рак.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Слова «ефектний — ефективний» є:', [
                'Синонімами',
                'Паронімами',
                'Антонімами',
                'Омонімами'
            ], 1, 'Схожі за звучанням, різні за значенням.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Застаріле слово, що називає зниклий предмет:', [
                'Неологізм',
                'Історизм',
                'Архаїзм',
                'Діалектизм'
            ], 1, 'Історизми: кольчуга, гетьман.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'У якому рядку всі слова — неологізми свого часу?', [
                'Хата, ліс',
                'Смартфон, блогер',
                'Віче, булава',
                'Мати, тато'
            ], 1, 'Нові слова, повʼязані з технологіями.')
        ])
    ],
    'ukr-literature': [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["topic"])('kotliarevskyi', 'Іван Котляревський', 'Іван Котляревський — зачинатель нової української літератури. Його бурлескно-травестійна поема «Енеїда» (1798) вперше написана живою народною мовою.', [
            '«Енеїда» — перший твір нової української літератури',
            'Бурлеск — комічне зображення серйозного',
            'Травестія — переробка відомого сюжету на комічний лад',
            '«Наталка Полтавка» — перша п’єса нової української драматургії'
        ], [
            'Еней у поемі — «парубок моторний»',
            'Наталка вірна коханому Петрові'
        ], [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Хто автор «Енеїди»?', [
                'Тарас Шевченко',
                'Іван Котляревський',
                'Іван Франко',
                'Григорій Сковорода'
            ], 1, 'Поема вийшла 1798 року.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Як описано Енея на початку поеми?', [
                'Старий мудрець',
                'Парубок моторний',
                'Злий воїн',
                'Сумний поет'
            ], 1, '«Еней був парубок моторний...»'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Головна героїня п’єси «Наталка Полтавка»:', [
                'Наталка',
                'Катерина',
                'Мавка',
                'Маруся'
            ], 0, 'Чесна дівчина з Полтави.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Твір Вергілія, який перелицював Котляревський:', [
                '«Іліада»',
                '«Енеїда»',
                '«Одіссея»',
                '«Метаморфози»'
            ], 1, 'Котляревський травестував «Енеїду» Вергілія.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Бурлеск — це:', [
                'Трагічний стиль',
                'Комічне зображення серйозного',
                'Віршований розмір',
                'Пісня'
            ], 1, 'Поєднання високого сюжету і простої мови.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Кого кохала Наталка?', [
                'Возного',
                'Петра',
                'Миколу',
                'Виборного'
            ], 1, 'Вона чекала Петра, який пішов на заробітки.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Чому «Енеїду» вважають початком нової української літератури?', [
                'Перший твір живою народною мовою',
                'Перший роман',
                'Перекладена з латини',
                'Написана прозою'
            ], 0, 'Вперше літературний твір створено розмовною українською.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Що зображує Котляревський у пеклі «Енеїди»?', [
                'Античних богів',
                'Сатиру на суспільні вади (панів, суддів)',
                'Козацькі битви',
                'Природу'
            ], 1, 'Покарання за гріхи — сатира на сучасників.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Який персонаж «Наталки Полтавки» уособлює чиновництво?', [
                'Микола',
                'Возний Тетерваковський',
                'Петро',
                'Терпилиха'
            ], 1, 'Возний говорить канцеляризмами — сатира на бюрократію.')
        ])
    ],
    english: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["topic"])('future', 'Future Tenses', 'В англійській майбутнє часто виражають через will (рішення, прогнози) і be going to (плани та очевидні наслідки). Present Continuous вживають для домовленостей.', [
            'will + V — спонтанне рішення, прогноз',
            'be going to + V — план або очевидний наслідок',
            'Present Continuous — домовленість на майбутнє',
            'Після if/when у часових реченнях — Present Simple'
        ], [
            'I will help you. — Я допоможу тобі.',
            'Look at the clouds! It is going to rain.'
        ], [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Choose: I think it ___ sunny tomorrow.', [
                'is',
                'will be',
                'was',
                'be'
            ], 1, 'Прогноз — will.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Choose: I ___ call you later.', [
                'will',
                'am',
                'did',
                'was'
            ], 0, 'Обіцянка — will.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Negative form of "will":', [
                'willn’t',
                'won’t',
                'don’t will',
                'not will'
            ], 1, 'Will not = won’t.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Choose: Look at those clouds! It ___ rain.', [
                'will',
                'is going to',
                'rains',
                'rained'
            ], 1, 'Очевидний наслідок — be going to.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Choose: We ___ visit Lviv next summer — we have bought tickets.', [
                'will',
                'are going to',
                'visit',
                'visited'
            ], 1, 'Заздалегідь запланована дія.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Choose: "The phone is ringing." — "I ___ answer it."', [
                'am going to',
                'will',
                'answer',
                'answered'
            ], 1, 'Спонтанне рішення — will.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Choose: When she ___, we will start dinner.', [
                'will come',
                'comes',
                'came',
                'is coming'
            ], 1, 'Після when у часових реченнях — Present Simple.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Choose: I ___ my dentist at 5 pm tomorrow (it’s arranged).', [
                'will see',
                'am seeing',
                'see',
                'saw'
            ], 1, 'Домовленість — Present Continuous.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Choose: By 2030, they ___ the bridge.', [
                'will build',
                'will have built',
                'build',
                'are building'
            ], 1, 'Дія, завершена до моменту в майбутньому — Future Perfect.')
        ])
    ],
    'foreign-literature': [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["topic"])('andersen', 'Казки Андерсена', 'Ганс Крістіан Андерсен — данський казкар. Його літературні казки поєднують фантастику, філософію та віру в добро: «Снігова королева», «Гидке каченя», «Русалонька».', [
            'Літературна казка має автора',
            'Головна тема — перемога добра і любові',
            'Автобіографічні мотиви («Гидке каченя»)',
            'Символи: дзеркало троля, лід, троянди'
        ], [
            'Герда рятує Кая силою любові',
            'Гидке каченя стає лебедем'
        ], [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Андерсен — письменник із:', [
                'Швеції',
                'Данії',
                'Норвегії',
                'Німеччини'
            ], 1, 'Данський казкар.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Хто врятував Кая у «Сніговій королеві»?', [
                'Розбійниця',
                'Герда',
                'Ворон',
                'Бабуся'
            ], 1, 'Герда розтопила крижане серце сльозами.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Ким стало гидке каченя?', [
                'Півнем',
                'Лебедем',
                'Орлом',
                'Качкою'
            ], 1, 'Прекрасним лебедем.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Що потрапило в око Каю?', [
                'Сніжинка',
                'Скалка дзеркала троля',
                'Пісок',
                'Крапля'
            ], 1, 'Скалка спотворювала світ.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Літературна казка відрізняється від народної тим, що має:', [
                'Чарівні предмети',
                'Конкретного автора',
                'Щасливий кінець',
                'Тварин'
            ], 1, 'Народна казка анонімна.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Яку ціну заплатила Русалонька за ноги?', [
                'Волосся',
                'Голос',
                'Хвіст',
                'Корону'
            ], 1, 'Морська відьма забрала її голос.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Чому казку «Гидке каченя» вважають автобіографічною?', [
                'Андерсен любив птахів',
                'Автор пройшов шлях від відторгнення до визнання',
                'Він жив на фермі',
                'Він був мисливцем'
            ], 1, 'Бідне дитинство і пізня слава автора.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Що символізує крижане серце Кая?', [
                'Холодний розум без любові',
                'Зиму',
                'Хворобу',
                'Силу'
            ], 0, 'Протиставлення холодного розуму і живого серця.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Яке слово Кай мав скласти з крижинок?', [
                'Любов',
                'Вічність',
                'Свобода',
                'Дім'
            ], 1, 'Складання «Вічності» — символ марних раціональних пошуків.')
        ])
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/data/extra-natural.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "naturalExtras",
    ()=>naturalExtras,
    "naturalNewTopics",
    ()=>naturalNewTopics
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data/helpers.ts [app-client] (ecmascript)");
;
const naturalExtras = {
    'biology:cell': [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Основна структурна одиниця живого організму:', [
            'Тканина',
            'Клітина',
            'Орган',
            'Молекула'
        ], 1, 'Усі живі організми складаються з клітин.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Яка органела є «енергетичною станцією» клітини?', [
            'Рибосома',
            'Мітохондрія',
            'Вакуоля',
            'Ядро'
        ], 1, 'Мітохондрії синтезують АТФ — основне джерело енергії.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Яка структура є в рослинній клітині, але відсутня у тваринній?', [
            'Ядро',
            'Мембрана',
            'Клітинна стінка з целюлози',
            'Мітохондрія'
        ], 2, 'Целюлозна клітинна стінка — ознака рослинних клітин.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'На рибосомах відбувається:', [
            'Фотосинтез',
            'Синтез білка',
            'Синтез АТФ',
            'Поділ клітини'
        ], 1, 'Рибосоми зчитують мРНК і збирають поліпептидний ланцюг.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Чим прокаріоти відрізняються від еукаріотів?', [
            'Немає оформленого ядра',
            'Немає ДНК',
            'Немає мембрани',
            'Немає рибосом'
        ], 0, 'У прокаріотів ДНК лежить у цитоплазмі, без ядерної оболонки.')
    ],
    'biology:genetics': [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Наука про спадковість і мінливість:', [
            'Екологія',
            'Генетика',
            'Ботаніка',
            'Анатомія'
        ], 1, 'Генетика вивчає закономірності спадковості та мінливості.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Ділянка ДНК, що кодує ознаку, називається:', [
            'Хромосома',
            'Ген',
            'Білок',
            'Клітина'
        ], 1, 'Ген — одиниця спадкової інформації.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Скільки хромосом у соматичній клітині людини?', [
            '23',
            '46',
            '44',
            '92'
        ], 1, 'Диплоїдний набір людини — 46 хромосом (23 пари).'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Схрещування Aa × aa. Яка частка нащадків з рецесивною ознакою?', [
            '25%',
            '50%',
            '75%',
            '0%'
        ], 1, 'Нащадки: Aa та aa у співвідношенні 1:1, тобто 50% aa.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Дальтонізм зчеплений з X-хромосомою. Чому він частіше трапляється у чоловіків?', [
            'У них дві X',
            'У них одна X, рецесивний ген проявляється',
            'Через Y-хромосому',
            'Через гормони'
        ], 1, 'Чоловіки XY не мають другої X, яка могла б «перекрити» рецесивний алель.')
    ],
    'biology:ecology': [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Організми, що самі створюють органічні речовини:', [
            'Консументи',
            'Продуценти',
            'Редуценти',
            'Паразити'
        ], 1, 'Продуценти (рослини) утворюють органіку під час фотосинтезу.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Який чинник є абіотичним?', [
            'Хижаки',
            'Температура',
            'Бактерії',
            'Рослини'
        ], 1, 'Абіотичні чинники — чинники неживої природи.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Правильний ланцюг живлення:', [
            'Вовк → заєць → трава',
            'Трава → заєць → вовк',
            'Заєць → трава → вовк',
            'Трава → вовк → заєць'
        ], 1, 'Енергія переходить від продуцента до консументів.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'За правилом 10% скільки енергії отримає вовк, якщо трава накопичила 10 000 кДж (трава → заєць → вовк)?', [
            '1000 кДж',
            '100 кДж',
            '10 кДж',
            '10 000 кДж'
        ], 1, 'Заєць ≈ 1000, вовк ≈ 100 кДж.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Хто повертає мінеральні речовини в ґрунт?', [
            'Продуценти',
            'Редуценти',
            'Хижаки',
            'Травоїдні'
        ], 1, 'Гриби та бактерії-редуценти розкладають органіку.')
    ],
    'geography:continents': [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Найбільший материк:', [
            'Африка',
            'Євразія',
            'Америка',
            'Австралія'
        ], 1, 'Євразія займає близько 54 млн км².'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Найбільший океан:', [
            'Атлантичний',
            'Тихий',
            'Індійський',
            'Північний Льодовитий'
        ], 1, 'Тихий океан — найбільший і найглибший.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Який материк повністю лежить у Південній півкулі й найсухіший?', [
            'Африка',
            'Австралія',
            'Антарктида',
            'Південна Америка'
        ], 1, 'Австралія — найпосушливіший населений материк.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Яка найглибша западина Світового океану?', [
            'Пуерто-Рико',
            'Маріанська',
            'Яванська',
            'Тонга'
        ], 1, 'Маріанська западина — близько 11 км.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Який материк перетинають і екватор, і обидва тропіки?', [
            'Південна Америка',
            'Африка',
            'Австралія',
            'Євразія'
        ], 1, 'Африка перетинається екватором і обома тропіками.')
    ],
    'geography:ukraine': [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Найвища гора України:', [
            'Петрос',
            'Говерла',
            'Роман-Кош',
            'Піп Іван'
        ], 1, 'Говерла — 2061 м.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Найдовша річка України:', [
            'Дністер',
            'Дніпро',
            'Десна',
            'Південний Буг'
        ], 1, 'Дніпро — головна річка країни.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Кримські гори розташовані на:', [
            'Заході',
            'Півдні',
            'Півночі',
            'Сході'
        ], 1, 'Кримські гори — на півдні Кримського півострова.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Яка природна зона займає найбільшу площу України?', [
            'Мішані ліси',
            'Степ',
            'Лісостеп',
            'Напівпустеля'
        ], 1, 'Степ охоплює близько 40% території.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Яке море омиває Україну, крім Чорного?', [
            'Каспійське',
            'Азовське',
            'Балтійське',
            'Середземне'
        ], 1, 'Азовське море — найміліше у світі.')
    ],
    'geography:climate': [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Лінія, що ділить Землю на Північну і Південну півкулі:', [
            'Меридіан',
            'Екватор',
            'Тропік',
            'Полярне коло'
        ], 1, 'Екватор — 0° широти.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Широту вимірюють від:', [
            'Гринвіча',
            'Екватора',
            'Полюса',
            'Тропіка'
        ], 1, 'Широта — кут від екватора до 90° пн. або пд.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Як змінюється температура з висотою в тропосфері?', [
            'Зростає',
            'Знижується ≈ на 6 °C на 1 км',
            'Не змінюється',
            'Знижується на 1 °C на 1 км'
        ], 1, 'Повітря нагрівається від поверхні, тому вгорі холодніше.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Біля підніжжя гори +24 °C. Яка температура на висоті 3 км?', [
            '+6 °C',
            '+18 °C',
            '+21 °C',
            '0 °C'
        ], 0, '24 − 3·6 = +6 °C.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Чому на одній широті в приморських районах зима тепліша?', [
            'Більше сонця',
            'Вода повільніше остигає',
            'Менше вітру',
            'Вища висота'
        ], 1, 'Океан накопичує тепло і віддає його взимку — морський клімат мʼякший.')
    ],
    'informatics:number-systems': [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Скільки цифр у двійковій системі?', [
            '1',
            '2',
            '8',
            '10'
        ], 1, 'У двійковій системі лише 0 і 1.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Число 1 у двійковій системі записується як:', [
            '0',
            '1',
            '10',
            '11'
        ], 1, 'Одиниця в будь-якій системі — 1.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Переведи 1010₂ у десяткову систему.', [
            '8',
            '10',
            '12',
            '5'
        ], 1, '8 + 0 + 2 + 0 = 10.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Чому дорівнює FF₁₆ у десятковій системі?', [
            '255',
            '256',
            '240',
            '015'
        ], 0, '15·16 + 15 = 255.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Скільки різних значень можна закодувати 1 байтом?', [
            '8',
            '128',
            '256',
            '1024'
        ], 2, '1 байт = 8 біт, 2⁸ = 256.')
    ],
    'informatics:algorithms': [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Алгоритм — це:', [
            'Програма для малювання',
            'Скінченна послідовність команд для розвʼязання задачі',
            'Мова програмування',
            'Комп’ютер'
        ], 1, 'Алгоритм — точна послідовність кроків.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Яка структура повторює дії кілька разів?', [
            'Розгалуження',
            'Цикл',
            'Слідування',
            'Змінна'
        ], 1, 'Цикл повторює набір команд.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Що виведе: x = 2; якщо x > 1, то x = x · 3; вивести x?', [
            '2',
            '6',
            '3',
            '1'
        ], 1, 'Умова істинна, x = 6.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Скільки разів виконається тіло циклу for i від 1 до 10 з кроком 3?', [
            '3',
            '4',
            '10',
            '5'
        ], 1, 'i = 1, 4, 7, 10 — чотири рази.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Бінарний пошук у відсортованому масиві з 1024 елементів потребує максимум:', [
            '1024 кроки',
            '512 кроків',
            '10 кроків',
            '32 кроки'
        ], 2, 'Кожен крок ділить масив навпіл: log₂ 1024 = 10.')
    ],
    'informatics:logic': [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Результат операції «І» (AND) для 1 і 0:', [
            '1',
            '0',
            '2',
            '10'
        ], 1, 'AND дає 1 лише коли обидва операнди 1.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Операція «НЕ» (NOT) від 1 дає:', [
            '1',
            '0',
            '−1',
            '2'
        ], 1, 'Заперечення змінює значення на протилежне.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Значення виразу (1 OR 0) AND 1:', [
            '0',
            '1',
            '2',
            'Невизначено'
        ], 1, '1 OR 0 = 1, 1 AND 1 = 1.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'За законом де Моргана NOT(A AND B) дорівнює:', [
            'NOT A AND NOT B',
            'NOT A OR NOT B',
            'A OR B',
            'A AND B'
        ], 1, 'Заперечення кон’юнкції — диз’юнкція заперечень.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Скільки рядків у таблиці істинності для 3 змінних?', [
            '3',
            '6',
            '8',
            '9'
        ], 2, '2³ = 8 комбінацій.')
    ]
};
const naturalNewTopics = {
    biology: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["topic"])('human-body', 'Організм людини', 'Організм людини складається із систем органів, що працюють узгоджено: кровоносна, дихальна, травна, нервова та інші. Нервова й ендокринна системи регулюють їхню роботу.', [
            'Серце має 4 камери: 2 передсердя і 2 шлуночки',
            'Еритроцити переносять кисень',
            'Нейрон — клітина нервової системи',
            'Гормони — регулятори, які виробляють залози'
        ], [
            'Інсулін знижує рівень глюкози в крові',
            'Газообмін відбувається в альвеолах легень'
        ], [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Який орган перекачує кров?', [
                'Легені',
                'Серце',
                'Печінка',
                'Нирки'
            ], 1, 'Серце — мʼязовий насос кровоносної системи.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Де відбувається газообмін?', [
                'У шлунку',
                'У легенях',
                'У печінці',
                'У нирках'
            ], 1, 'У легеневих альвеолах кров отримує кисень і віддає CO₂.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Клітини, які переносять кисень:', [
                'Лейкоцити',
                'Еритроцити',
                'Тромбоцити',
                'Нейрони'
            ], 1, 'Еритроцити містять гемоглобін.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Скільки камер має серце людини?', [
                '2',
                '3',
                '4',
                '5'
            ], 2, 'Два передсердя і два шлуночки.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Який гормон знижує рівень глюкози в крові?', [
                'Адреналін',
                'Інсулін',
                'Тироксин',
                'Глюкагон'
            ], 1, 'Інсулін виробляє підшлункова залоза.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Основна функція нирок:', [
                'Травлення',
                'Очищення крові та утворення сечі',
                'Дихання',
                'Вироблення жовчі'
            ], 1, 'Нирки фільтрують кров від продуктів обміну.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Яким судином кров від серця йде до легень?', [
                'Аорта',
                'Легенева артерія',
                'Легенева вена',
                'Порожниста вена'
            ], 1, 'Легенева артерія несе венозну кров з правого шлуночка до легень.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Безумовні рефлекси відрізняються від умовних тим, що вони:', [
                'Набуваються протягом життя',
                'Вроджені й спадкуються',
                'Швидко зникають',
                'Індивідуальні'
            ], 1, 'Безумовні рефлекси (ковтання, кліпання) вроджені.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Яка структура регулює роботу більшості ендокринних залоз?', [
                'Мозочок',
                'Гіпофіз',
                'Селезінка',
                'Тимус'
            ], 1, 'Гіпофіз разом із гіпоталамусом керує ендокринною системою.')
        ])
    ],
    geography: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["topic"])('population', 'Населення світу', 'Населення Землі перевищує 8 млрд людей і розподілене нерівномірно. Географія населення вивчає чисельність, густоту, міграції та урбанізацію.', [
            'Густота населення = кількість людей / площа',
            'Урбанізація — зростання частки міського населення',
            'Міграції бувають внутрішні та зовнішні',
            'Природний приріст = народжуваність − смертність'
        ], [
            'Найбільші за населенням країни — Індія та Китай',
            'Близько 57% людей живуть у містах'
        ], [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Скільки людей приблизно живе на Землі?', [
                '1 млрд',
                '4 млрд',
                'Понад 8 млрд',
                '20 млрд'
            ], 2, 'У 2022 році населення перевищило 8 млрд.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Переселення людей називається:', [
                'Урбанізація',
                'Міграція',
                'Демографія',
                'Колонізація'
            ], 1, 'Міграція — переміщення людей між територіями.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Яка країна найбільша за кількістю населення?', [
                'США',
                'Індія',
                'Росія',
                'Бразилія'
            ], 1, 'Індія з 2023 року випередила Китай.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Урбанізація — це:', [
                'Зростання ролі міст і частки міського населення',
                'Вирубка лісів',
                'Розвиток сільського господарства',
                'Скорочення населення'
            ], 0, 'Урбанізація відображає зростання міст.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Країна площею 100 000 км² має 5 млн жителів. Густота населення:', [
                '5 осіб/км²',
                '50 осіб/км²',
                '500 осіб/км²',
                '0,5 осіб/км²'
            ], 1, '5 000 000 / 100 000 = 50.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Природний приріст визначається як:', [
                'Імміграція − еміграція',
                'Народжуваність − смертність',
                'Населення / площа',
                'Міське / сільське'
            ], 1, 'Різниця народжуваності й смертності.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Народжуваність 9‰, смертність 14‰. Природний приріст:', [
                '+5‰',
                '−5‰',
                '23‰',
                '0‰'
            ], 1, '9 − 14 = −5‰ — природне скорочення.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Агломерація — це:', [
                'Одне велике село',
                'Скупчення міст навколо ядра з тісними звʼязками',
                'Промисловий район',
                'Країна'
            ], 1, 'Наприклад, Київська агломерація.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Для якої групи країн характерний «старіючий» тип населення?', [
                'Країни Африки',
                'Розвинені країни Європи',
                'Країни Південної Азії',
                'Країни Океанії'
            ], 1, 'Низька народжуваність і висока тривалість життя.')
        ])
    ],
    informatics: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["topic"])('networks', 'Мережі та інтернет', 'Компʼютерна мережа поєднує пристрої для обміну даними. Інтернет — глобальна мережа мереж, що працює за протоколами TCP/IP. Безпека в мережі потребує надійних паролів і обережності.', [
            'IP-адреса — унікальна адреса пристрою',
            'DNS перетворює домени в IP-адреси',
            'HTTPS — захищений протокол передавання сторінок',
            'Фішинг — шахрайські спроби викрасти дані'
        ], [
            'example.com → 93.184.216.34 через DNS',
            'Пароль «Ab7#kL9q» надійніший за «12345»'
        ], [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Глобальна мережа, що обʼєднує мільйони компʼютерів:', [
                'Локальна мережа',
                'Інтернет',
                'Bluetooth',
                'Інтранет'
            ], 1, 'Інтернет — глобальна мережа мереж.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Програма для перегляду вебсторінок:', [
                'Антивірус',
                'Браузер',
                'Редактор',
                'Архіватор'
            ], 1, 'Браузер (Chrome, Firefox) відкриває вебсторінки.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Який пароль найнадійніший?', [
                '12345',
                'qwerty',
                'Ab7#kL9q',
                'password'
            ], 2, 'Довгий, із великими/малими літерами, цифрами й символами.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Що робить DNS?', [
                'Шифрує дані',
                'Перетворює доменні імена на IP-адреси',
                'Видаляє віруси',
                'Зберігає файли'
            ], 1, 'DNS — «телефонна книга» інтернету.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Літера S у HTTPS означає:', [
                'Simple',
                'Secure',
                'Speed',
                'Server'
            ], 1, 'Secure — дані передаються зашифрованими.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Фішинг — це:', [
                'Вид антивірусу',
                'Шахрайство з метою викрасти дані',
                'Тип кабелю',
                'Мова програмування'
            ], 1, 'Фішингові листи імітують справжні сервіси.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Скільки біт в адресі IPv4?', [
                '16',
                '32',
                '64',
                '128'
            ], 1, 'IPv4 — 4 байти = 32 біти.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Файл 80 Мбіт передається зі швидкістю 10 Мбіт/с. Скільки часу?', [
                '8 с',
                '80 с',
                '0,8 с',
                '800 с'
            ], 0, 't = 80 / 10 = 8 с.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Який протокол гарантує доставку пакетів у правильному порядку?', [
                'UDP',
                'TCP',
                'IP',
                'DNS'
            ], 1, 'TCP встановлює зʼєднання та контролює доставку.')
        ])
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/data/extra-questions.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "baseTopicExtras",
    ()=>baseTopicExtras
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data/helpers.ts [app-client] (ecmascript)");
;
const baseTopicExtras = {
    'math:quadratic': [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Яке з рівнянь є квадратним?', [
            'x² − 4 = 0',
            '2x − 4 = 0',
            'x³ + 1 = 0',
            '1/x = 2'
        ], 0, 'Квадратне рівняння має вигляд ax² + bx + c = 0, де a ≠ 0. Лише x² − 4 = 0 відповідає цій умові.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Чому дорівнює сума коренів рівняння x² − 8x + 15 = 0?', [
            '8',
            '15',
            '−8',
            '7'
        ], 0, 'За теоремою Вієта x₁ + x₂ = −b/a = 8. Корені цього рівняння — 3 і 5.')
    ],
    'math:percent': [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Скільки становить 10% від 250?', [
            '25',
            '10',
            '2,5',
            '50'
        ], 0, '250 · 0,1 = 25.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Товар коштував 400 грн. Ціну знизили на 25%, а потім підвищили на 25%. Яка нова ціна?', [
            '375 грн',
            '400 грн',
            '300 грн',
            '425 грн'
        ], 0, 'Після знижки: 400 · 0,75 = 300 грн. Після підвищення: 300 · 1,25 = 375 грн. Відсотки рахуються від різних баз, тому ціна не повертається до 400.')
    ],
    'math:pythagoras': [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Яка сторона прямокутного трикутника завжди найдовша?', [
            'Гіпотенуза',
            'Більший катет',
            'Менший катет',
            'Усі сторони рівні'
        ], 0, 'Гіпотенуза лежить проти прямого кута, а прямий кут — найбільший у трикутнику.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Діагональ прямокутника 10 см, одна сторона 6 см. Яка друга сторона?', [
            '8 см',
            '4 см',
            '6 см',
            '16 см'
        ], 0, 'Сторони прямокутника утворюють прямокутний трикутник з гіпотенузою-діагоналлю: b = √(10² − 6²) = √64 = 8 см.')
    ],
    'physics:newton': [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Який закон Ньютона називають законом інерції?', [
            'Перший',
            'Другий',
            'Третій',
            'Жоден із них'
        ], 0, 'Перший закон описує рух тіла без дії сил — явище інерції.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Тіло масою 5 кг рухається з прискоренням 3 м/с². Яка рівнодійна сила діє на тіло?', [
            '15 Н',
            '8 Н',
            '1,7 Н',
            '30 Н'
        ], 0, 'За другим законом Ньютона F = m · a = 5 · 3 = 15 Н.')
    ],
    'physics:ohm': [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'У яких одиницях вимірюють електричний опір?', [
            'Ом',
            'Вольт',
            'Ампер',
            'Ват'
        ], 0, 'Опір вимірюють в омах (Ом), напругу — у вольтах, силу струму — в амперах.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Напруга на резисторі 6 В, опір — 3 Ом. Яка потужність струму?', [
            '12 Вт',
            '18 Вт',
            '2 Вт',
            '36 Вт'
        ], 0, 'Спочатку I = U / R = 6 / 3 = 2 А, далі P = U · I = 6 · 2 = 12 Вт.')
    ],
    'physics:energy': [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'У яких одиницях вимірюють енергію?', [
            'Джоуль',
            'Ньютон',
            'Ват',
            'Паскаль'
        ], 0, 'Одиниця енергії та роботи — джоуль (Дж).'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Яка кінетична енергія тіла масою 1 кг, що рухається зі швидкістю 10 м/с?', [
            '50 Дж',
            '100 Дж',
            '10 Дж',
            '5 Дж'
        ], 0, 'Eк = m · v² / 2 = 1 · 100 / 2 = 50 Дж.')
    ],
    'chemistry:periodic': [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Який елемент позначають символом O?', [
            'Оксиген',
            'Осмій',
            'Золото',
            'Олово'
        ], 0, 'Символ O належить Оксигену (від латинського Oxygenium).'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Скільки енергетичних рівнів має атом елемента третього періоду?', [
            '3',
            '1',
            '2',
            '4'
        ], 0, 'Номер періоду дорівнює кількості енергетичних рівнів, на яких розподілені електрони.')
    ],
    'chemistry:reactions': [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Яка схема відповідає реакції розкладу?', [
            'AB → A + B',
            'A + B → AB',
            'A + BC → AC + B',
            'AB + CD → AD + CB'
        ], 0, 'Під час розкладу з однієї складної речовини утворюються дві або більше простіших.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Скільки атомів Оксигену містить запис 2H₂SO₄?', [
            '8',
            '4',
            '2',
            '6'
        ], 0, 'У одній молекулі H₂SO₄ чотири атоми Оксигену, а коефіцієнт 2 дає 2 · 4 = 8 атомів.')
    ],
    'chemistry:acids': [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Яке значення pH має лужне середовище?', [
            'Більше 7',
            'Дорівнює 7',
            'Менше 7',
            'Дорівнює 0'
        ], 0, 'pH = 7 — нейтральне середовище, pH > 7 — лужне, pH < 7 — кисле.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Яка маса 0,5 моль води? (M(H₂O) = 18 г/моль)', [
            '9 г',
            '18 г',
            '36 г',
            '4,5 г'
        ], 0, 'm = n · M = 0,5 · 18 = 9 г.')
    ],
    'astronomy:solar-system': [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Яка планета відома своїми яскравими кільцями?', [
            'Сатурн',
            'Марс',
            'Венера',
            'Меркурій'
        ], 0, 'Сатурн має найпомітнішу систему кілець, що складається з льоду та пилу.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Яка планета Сонячної системи найменша?', [
            'Меркурій',
            'Марс',
            'Венера',
            'Земля'
        ], 0, 'Меркурій — найменша з восьми планет: його діаметр близько 4 880 км.')
    ],
    'astronomy:stars': [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Якого кольору наше Сонце?', [
            'Жовтого',
            'Блакитного',
            'Червоного',
            'Зеленого'
        ], 0, 'Сонце — жовтий карлик із температурою поверхні близько 5 500 °C.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Які зорі живуть найкоротше?', [
            'Наймасивніші',
            'Найменш масивні',
            'Червоні карлики',
            'Усі зорі живуть однаково'
        ], 0, 'Чим більша маса зорі, тим швидше вона витрачає паливо і тим коротший її життєвий шлях.')
    ],
    'astronomy:earth-motion': [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Скільки приблизно діб триває рік на Землі?', [
            '365',
            '100',
            '30',
            '24'
        ], 0, 'Повний оберт навколо Сонця Земля робить приблизно за 365 діб.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Який нахил земної осі до площини орбіти?', [
            '≈ 23,5°',
            '0°',
            '45°',
            '90°'
        ], 0, 'Саме нахил близько 23,5° зумовлює зміну пір року.')
    ],
    'ukr-language:phonetics': [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Скільки букв в українському алфавіті?', [
            '33',
            '32',
            '26',
            '31'
        ], 0, 'Український алфавіт налічує 33 букви.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'У якому слові кількість букв і звуків однакова?', [
            'мама',
            'юшка',
            'яма',
            'їжак'
        ], 0, 'У слові «мама» 4 букви і 4 звуки. Букви я, ю, ї на початку слова позначають два звуки, тому в інших словах звуків більше.')
    ],
    'ukr-language:parts-of-speech': [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'На які питання відповідає прикметник?', [
            'Який? Чий?',
            'Хто? Що?',
            'Що робити?',
            'Як? Де?'
        ], 0, 'Прикметник означає ознаку предмета і відповідає на питання «який?», «чий?».'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'У якому відмінку вжито слово «Олено»?', [
            'Кличний',
            'Називний',
            'Давальний',
            'Орудний'
        ], 0, 'Форма «Олено» — звертання, отже, це кличний відмінок.')
    ],
    'ukr-language:syntax': [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Який член речення вказує, хто виконує дію?', [
            'Підмет',
            'Присудок',
            'Додаток',
            'Обставина'
        ], 0, 'Підмет — головний член речення, що означає предмет думки і відповідає на питання «хто? що?».'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Яке речення є складнопідрядним?', [
            'Я знаю, що він прийде',
            'Світить сонце, і співають птахи',
            'Настала ніч',
            'Прийшла весна — зацвіли сади'
        ], 0, 'Підрядна частина «що він прийде» залежить від головної, тому речення складнопідрядне.')
    ],
    'ukr-literature:shevchenko': [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Ким був Тарас Шевченко?', [
            'Поетом і художником',
            'Композитором',
            'Актором',
            'Науковцем'
        ], 0, 'Шевченко поєднував літературний талант із живописом, закінчивши Петербурзьку академію мистецтв.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'З якого твору Шевченка рядки «Борітеся — поборете»?', [
            '«Кавказ»',
            '«Заповіт»',
            '«Катерина»',
            '«Гайдамаки»'
        ], 0, 'Ці слова з поеми «Кавказ», написаної 1845 року.')
    ],
    'ukr-literature:lesya': [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Який псевдонім мала Лариса Косач?', [
            'Леся Українка',
            'Олена Пчілка',
            'Марко Вовчок',
            'Ольга Кобилянська'
        ], 0, 'Леся Українка — літературний псевдонім Лариси Косач.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Хто з героїв «Лісової пісні» зраджує Мавку, обираючи буденне життя?', [
            'Лукаш',
            'Лісовик',
            'Дядько Лев',
            'Перелесник'
        ], 0, 'Лукаш одружується з Килиною, зраджуючи духовний світ і кохання Мавки.')
    ],
    'ukr-literature:franko': [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Хто автор повісті «Захар Беркут»?', [
            'Іван Франко',
            'Тарас Шевченко',
            'Леся Українка',
            'Михайло Коцюбинський'
        ], 0, 'Повість «Захар Беркут» написав Іван Франко 1883 року.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'До якого жанру належить «Мойсей» Івана Франка?', [
            'Філософська поема',
            'Історичний роман',
            'Драма',
            'Байка'
        ], 0, '«Мойсей» — філософська поема про провідника народу та віру в його майбутнє.')
    ],
    'english:present': [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'She ___ a student.', [
            'is',
            'are',
            'am',
            'be'
        ], 0, 'Для she в Present Simple дієслово to be має форму is.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'They ___ TV at the moment.', [
            'are watching',
            'watch',
            'watches',
            'watched'
        ], 0, '«At the moment» вказує на дію зараз, тому Present Continuous: are watching.')
    ],
    'english:past': [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Yesterday I ___ to the cinema.', [
            'went',
            'go',
            'gone',
            'going'
        ], 0, '«Yesterday» — завершена дія в минулому, Past Simple: went.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'She ___ her homework before her mother came home.', [
            'had done',
            'did',
            'was doing',
            'does'
        ], 0, 'Домашнє завдання було виконане раніше за іншу минулу дію, тому Past Perfect: had done.')
    ],
    'english:articles': [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, '___ book on the table is mine.', [
            'The',
            'A',
            'An',
            '—'
        ], 0, 'Ідеться про конкретну книгу, відому співрозмовникам, тому вживаємо the.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'He is ___ honest man.', [
            'an',
            'a',
            'the',
            '—'
        ], 0, 'У слові honest буква h не читається, слово починається з голосного звуку, тому an.')
    ],
    'foreign-literature:shakespeare': [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'У якому місті відбувається дія «Ромео і Джульєтти»?', [
            'У Вероні',
            'У Лондоні',
            'У Парижі',
            'У Римі'
        ], 0, 'Події трагедії розгортаються в італійському місті Верона.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Хто з персонажів «Гамлета» є братом короля і його вбивцею?', [
            'Клавдій',
            'Полоній',
            'Гораціо',
            'Лаерт'
        ], 0, 'Клавдій убив короля Гамлета, свого брата, щоб заволодіти троном.')
    ],
    'foreign-literature:little-prince': [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'На якій планеті жив Маленький принц?', [
            'Астероїд B-612',
            'Марс',
            'Місяць',
            'Венера'
        ], 0, 'Маленький принц жив на крихітному астероїді B-612 разом зі своєю трояндою.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Скільки планет відвідав Маленький принц перед тим, як потрапити на Землю?', [
            '6',
            '3',
            '4',
            '5'
        ], 0, 'Він побував на шести астероїдах: у короля, честолюбця, п’яниці, бізнесмена, ліхтарника і географа.')
    ],
    'foreign-literature:homer': [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Як звали головного героя «Одіссеї»?', [
            'Одіссей',
            'Ахілл',
            'Гектор',
            'Патрокл'
        ], 0, 'Одіссей — цар Ітаки, який після Троянської війни десять років повертався додому.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Як звали дружину Одіссея?', [
            'Пенелопа',
            'Єлена',
            'Андромаха',
            'Клітемнестра'
        ], 0, 'Пенелопа чекала на Одіссея двадцять років, відмовляючи численним женихам.')
    ],
    'biology:cell': [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Яка органела керує життєдіяльністю клітини?', [
            'Ядро',
            'Мембрана',
            'Вакуоля',
            'Лізосома'
        ], 0, 'Ядро зберігає ДНК і регулює всі процеси в клітині.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'У яких органелах відбувається синтез білка?', [
            'Рибосоми',
            'Лізосоми',
            'Мітохондрії',
            'Хлоропласти'
        ], 0, 'Рибосоми «читають» інформацію з мРНК і збирають із амінокислот молекулу білка.')
    ],
    'biology:genetics': [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Яка наука вивчає спадковість і мінливість?', [
            'Генетика',
            'Екологія',
            'Ботаніка',
            'Анатомія'
        ], 0, 'Генетика досліджує, як ознаки передаються від батьків до нащадків.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Батьки гетерозиготні (Aa × Aa), де A — карі очі. Яка ймовірність блакитних очей у дитини?', [
            '25%',
            '50%',
            '75%',
            '0%'
        ], 0, 'Блакитні очі можливі лише за генотипу aa, який становить 1 із 4 варіантів ґратки Пеннета, тобто 25%.')
    ],
    'biology:ecology': [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Які організми розкладають рештки живих істот?', [
            'Редуценти',
            'Продуценти',
            'Консументи',
            'Хижаки'
        ], 0, 'Редуценти (гриби й бактерії) перетворюють органічні рештки на неорганічні речовини.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Який ланцюг живлення побудовано правильно?', [
            'Трава → заєць → лисиця',
            'Лисиця → заєць → трава',
            'Заєць → трава → лисиця',
            'Трава → лисиця → заєць'
        ], 0, 'Енергія передається від продуцента (трави) до травоїдного (зайця), а далі до хижака (лисиці).')
    ],
    'geography:continents': [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Скільки океанів на Землі?', [
            '5',
            '4',
            '6',
            '7'
        ], 0, 'Виділяють п’ять океанів: Тихий, Атлантичний, Індійський, Північний Льодовитий і Південний.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Який океан є найглибшим?', [
            'Тихий',
            'Атлантичний',
            'Індійський',
            'Північний Льодовитий'
        ], 0, 'У Тихому океані розташована Маріанська западина — найглибше місце на Землі.')
    ],
    'geography:ukraine': [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Які гори розташовані на заході України?', [
            'Карпати',
            'Кримські гори',
            'Уральські гори',
            'Кавказькі гори'
        ], 0, 'Українські Карпати — молоді складчасті гори на заході країни.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Яка приблизна площа України?', [
            '≈ 604 тис. км²',
            '≈ 500 тис. км²',
            '≈ 700 тис. км²',
            '≈ 450 тис. км²'
        ], 0, 'Площа України становить 603 628 км², тобто близько 604 тис. км².')
    ],
    'geography:climate': [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Який прилад вимірює температуру повітря?', [
            'Термометр',
            'Барометр',
            'Гігрометр',
            'Анемометр'
        ], 0, 'Температуру вимірюють термометром, тиск — барометром, вологість — гігрометром.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Яка широта Північного полюса?', [
            '90° пн. ш.',
            '0°',
            '45° пн. ш.',
            '180°'
        ], 0, 'Полюси розташовані на широті 90°, тоді як екватор має широту 0°.')
    ],
    'informatics:number-systems': [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Скільки цифр використовує десяткова система числення?', [
            '10',
            '2',
            '8',
            '16'
        ], 0, 'Десяткова система має основу 10 і цифри від 0 до 9.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Яке десяткове число відповідає двійковому 1111₂?', [
            '15',
            '16',
            '7',
            '31'
        ], 0, '1·8 + 1·4 + 1·2 + 1·1 = 15.')
    ],
    'informatics:algorithms': [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Яка алгоритмічна структура повторює команди кілька разів?', [
            'Цикл',
            'Розгалуження',
            'Слідування',
            'Рекурсія'
        ], 0, 'Цикл повторює тіло алгоритму, доки виконується умова або задану кількість разів.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Що буде надруковано? s = 0; for i in range(1, 4): s += i; print(s)', [
            '6',
            '3',
            '10',
            '1'
        ], 0, 'range(1, 4) дає значення 1, 2, 3, тому s = 1 + 2 + 3 = 6.')
    ],
    'informatics:logic': [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Чому дорівнює NOT 0?', [
            '1',
            '0',
            '2',
            '−1'
        ], 0, 'NOT змінює значення на протилежне: хиба (0) стає істиною (1).'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Обчисли (1 OR 0) AND NOT 0.', [
            '1',
            '0',
            '2',
            'Не визначено'
        ], 0, '1 OR 0 = 1, NOT 0 = 1, а 1 AND 1 = 1.')
    ],
    'ukr-history:kyivan-rus': [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Яке місто було столицею Київської Русі?', [
            'Київ',
            'Новгород',
            'Чернігів',
            'Галич'
        ], 0, 'Київ був політичним і культурним центром держави, звідси й назва — Київська Русь.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Хто був батьком Ярослава Мудрого?', [
            'Володимир Великий',
            'Святослав',
            'Олег',
            'Ігор'
        ], 0, 'Ярослав — син Володимира Великого, який хрестив Русь.')
    ],
    'ukr-history:cossacks': [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Як називали козаків, що жили за дніпровськими порогами?', [
            'Запорожці',
            'Гайдамаки',
            'Опришки',
            'Стрільці'
        ], 0, 'Запорозькі козаки жили на землях за порогами Дніпра, де була розташована Січ.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'У якому році відбулася битва під Жовтими Водами?', [
            '1648',
            '1654',
            '1709',
            '1775'
        ], 0, 'Це перша велика перемога Богдана Хмельницького на початку Національно-визвольної війни 1648 року.')
    ],
    'ukr-history:independence': [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Коли Україна святкує День Незалежності?', [
            '24 серпня',
            '1 грудня',
            '28 червня',
            '22 січня'
        ], 0, '24 серпня 1991 року ухвалено Акт проголошення незалежності України.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Що сталося 22 січня 1919 року?', [
            'Акт Злуки УНР і ЗУНР',
            'Ухвалення IV Універсалу',
            'Проголошення незалежності 1991 року',
            'Ухвалення Конституції'
        ], 0, 'Акт Злуки проголосив об’єднання Української Народної Республіки і Західноукраїнської Народної Республіки.')
    ],
    'world-history:ancient': [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Яка мова була офіційною в Римській імперії?', [
            'Латина',
            'Грецька',
            'Італійська',
            'Французька'
        ], 0, 'Латина була державною мовою Риму і основою багатьох сучасних мов.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Хто був останнім імператором Західної Римської імперії?', [
            'Ромул Августул',
            'Октавіан Август',
            'Юлій Цезар',
            'Одоакр'
        ], 0, 'Ромула Августула скинув Одоакр у 476 році, що вважається кінцем Західної Римської імперії.')
    ],
    'world-history:modern': [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Що стало символом початку Французької революції 1789 року?', [
            'Взяття Бастилії',
            'Бостонське чаювання',
            'Битва під Ватерлоо',
            'Коронація Наполеона'
        ], 0, '14 липня 1789 року повстанці захопили в’язницю-фортецю Бастилію.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'У якому році відбулася битва під Ватерлоо?', [
            '1815',
            '1789',
            '1776',
            '1848'
        ], 0, 'У 1815 році Наполеон зазнав остаточної поразки під Ватерлоо.')
    ],
    'world-history:world-wars': [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Яка країна зазнала нападу 1 вересня 1939 року?', [
            'Польща',
            'Франція',
            'СРСР',
            'Велика Британія'
        ], 0, 'Напад Німеччини на Польщу 1 вересня 1939 року став початком Другої світової війни.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'У якому році відбулася Ялтинська конференція?', [
            '1945',
            '1943',
            '1944',
            '1946'
        ], 0, 'Ялтинська конференція лідерів антигітлерівської коаліції пройшла в лютому 1945 року.')
    ],
    'civics:human-rights': [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Який документ на міжнародному рівні проголошує права людини?', [
            'Загальна декларація прав людини',
            'Конституція США',
            'Велика хартія вольностей',
            'Кримінальний кодекс'
        ], 0, 'Загальну декларацію прав людини ухвалила Генеральна Асамблея ООН 1948 року.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Що означає принцип верховенства права?', [
            'Усі, включно з державою, підпорядковані праву',
            'Закони ухвалює лише президент',
            'Судді не зобов’язані дотримуватися законів',
            'Право має лише держава'
        ], 0, 'Верховенство права означає, що органи влади та посадовці діють виключно в межах закону.')
    ],
    'civics:state': [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Хто очолює Кабінет Міністрів України?', [
            'Прем’єр-міністр',
            'Президент',
            'Голова Верховної Ради',
            'Генеральний прокурор'
        ], 0, 'Уряд очолює Прем’єр-міністр, якого призначає Верховна Рада за поданням Президента.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Який орган здійснює конституційний контроль в Україні?', [
            'Конституційний Суд',
            'Верховний Суд',
            'Верховна Рада',
            'Кабінет Міністрів'
        ], 0, 'Конституційний Суд перевіряє закони та інші акти на відповідність Конституції.')
    ],
    'civics:elections': [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Що таке вибори?', [
            'Обрання представників влади голосуванням',
            'Засідання уряду',
            'Призначення суддів',
            'Підписання закону'
        ], 0, 'На виборах громадяни обирають своїх представників до органів влади.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Який принцип означає, що кожен виборець має один голос?', [
            'Рівне виборче право',
            'Пряме виборче право',
            'Таємне голосування',
            'Загальне виборче право'
        ], 0, 'Рівність виборчого права гарантує однакову кількість голосів для кожного виборця.')
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/data/extra-social.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "socialExtras",
    ()=>socialExtras,
    "socialNewTopics",
    ()=>socialNewTopics
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data/helpers.ts [app-client] (ecmascript)");
;
const socialExtras = {
    'ukr-history:kyivan-rus': [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Столиця Київської Русі:', [
            'Чернігів',
            'Київ',
            'Новгород',
            'Галич'
        ], 1, 'Київ був політичним і культурним центром держави.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Князь, який хрестив Русь:', [
            'Ярослав Мудрий',
            'Володимир Великий',
            'Олег',
            'Святослав'
        ], 1, 'Володимир Великий запровадив християнство у 988 році.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Перший писаний звід законів Русі:', [
            'Конституція Орлика',
            '«Руська правда»',
            '«Повість минулих літ»',
            'Литовський статут'
        ], 1, '«Руська правда» укладена за Ярослава Мудрого.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Який князь здійснив походи на Хозарський каганат і Візантію в X ст.?', [
            'Ігор',
            'Святослав Хоробрий',
            'Мстислав',
            'Аскольд'
        ], 1, 'Святослав розгромив Хазарію (965) і воював із Візантією.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Головна причина політичної роздробленості Русі:', [
            'Нашестя монголів',
            'Зміцнення удільних князівств і боротьба за престол',
            'Хрещення',
            'Торгівля з Візантією'
        ], 1, 'Земля дробилася між нащадками, місцева знать посилювалась.')
    ],
    'ukr-history:cossacks': [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Центр запорозького козацтва:', [
            'Київ',
            'Запорозька Січ',
            'Львів',
            'Полтава'
        ], 1, 'Січ — військово-політичний центр козаків.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Хто очолював Національно-визвольну війну 1648 року?', [
            'Іван Мазепа',
            'Богдан Хмельницький',
            'Петро Сагайдачний',
            'Іван Сірко'
        ], 1, 'Війну очолив гетьман Богдан Хмельницький.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Яка битва 1648 року стала першою перемогою Хмельницького?', [
            'Під Жовтими Водами',
            'Берестецька',
            'Конотопська',
            'Полтавська'
        ], 0, 'Битва під Жовтими Водами — травень 1648 р.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Хто з гетьманів уклав Конституцію 1710 року?', [
            'Іван Мазепа',
            'Пилип Орлик',
            'Іван Виговський',
            'Данило Апостол'
        ], 1, '«Пакти і Конституції» Пилипа Орлика — визначна памʼятка правової думки.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Наслідком Полтавської битви 1709 р. стало:', [
            'Зміцнення автономії Гетьманщини',
            'Посилення наступу Москви на автономію',
            'Незалежність України',
            'Союз зі Швецією'
        ], 1, 'Після поразки Мазепи Петро I обмежував права Гетьманщини.')
    ],
    'ukr-history:independence': [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'День незалежності України:', [
            '1 грудня',
            '24 серпня',
            '28 червня',
            '22 січня'
        ], 1, 'Акт проголошення незалежності ухвалено 24 серпня 1991 року.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Перший Президент України:', [
            'Леонід Кучма',
            'Леонід Кравчук',
            'Віктор Ющенко',
            'Михайло Грушевський'
        ], 1, 'Леонід Кравчук обраний 1 грудня 1991 року.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Коли ухвалено Конституцію України?', [
            '24.08.1991',
            '28.06.1996',
            '01.12.1991',
            '16.07.1990'
        ], 1, 'Конституцію ухвалено 28 червня 1996 року.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Який документ 16 липня 1990 р. проголосив суверенітет УРСР?', [
            'Акт незалежності',
            'Декларація про державний суверенітет',
            'Конституція',
            'Універсал'
        ], 1, 'Декларація стала передумовою незалежності.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Яка частка учасників референдуму 1 грудня 1991 р. підтримала Акт незалежності?', [
            '≈ 60%',
            '≈ 75%',
            '≈ 90%',
            '≈ 50%'
        ], 2, 'Близько 90,3% учасників проголосували «за».')
    ],
    'world-history:ancient': [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Де збудовано піраміди Гізи?', [
            'Греція',
            'Єгипет',
            'Рим',
            'Персія'
        ], 1, 'Піраміди фараонів — у Стародавньому Єгипті.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Місце народження Олімпійських ігор:', [
            'Рим',
            'Греція',
            'Єгипет',
            'Китай'
        ], 1, 'Ігри проводили в Олімпії з 776 р. до н. е.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Форма правління в Афінах за Перікла:', [
            'Монархія',
            'Демократія',
            'Тиранія',
            'Імперія'
        ], 1, 'Афіни — класичний приклад античної демократії.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Хто перетворив Римську республіку на імперію?', [
            'Юлій Цезар',
            'Октавіан Август',
            'Нерон',
            'Спартак'
        ], 1, 'Октавіан отримав титул Август у 27 р. до н. е.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Рік падіння Західної Римської імперії:', [
            '395',
            '476',
            '1453',
            '313'
        ], 1, 'У 476 р. Одоакр скинув останнього імператора.')
    ],
    'world-history:modern': [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Хто відкрив Америку у 1492 році?', [
            'Магеллан',
            'Колумб',
            'Васко да Гама',
            'Кук'
        ], 1, 'Христофор Колумб досяг Багамських островів.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Як називалася епоха відродження античної культури?', [
            'Середньовіччя',
            'Ренесанс',
            'Просвітництво',
            'Модерн'
        ], 1, 'Ренесанс — XIV–XVI ст.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Велика французька революція почалася у:', [
            '1689',
            '1789',
            '1848',
            '1917'
        ], 1, 'Штурм Бастилії — 14 липня 1789 р.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Яка країна першою пройшла промисловий переворот?', [
            'Франція',
            'Англія',
            'США',
            'Німеччина'
        ], 1, 'Промислова революція почалася в Англії в XVIII ст.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Документ 1776 року, що проголосив незалежність США:', [
            'Біль про права',
            'Декларація незалежності',
            'Конституція США',
            'Велика хартія вольностей'
        ], 1, 'Декларацію ухвалено 4 липня 1776 р.')
    ],
    'world-history:world-wars': [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'У якому році закінчилася Друга світова війна?', [
            '1918',
            '1945',
            '1939',
            '1950'
        ], 1, 'Війна завершилася капітуляцією Японії у вересні 1945 р.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Яка міжнародна організація створена 1945 року?', [
            'Ліга Націй',
            'ООН',
            'НАТО',
            'ЄС'
        ], 1, 'Організацію Обʼєднаних Націй засновано 1945 року.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Привід Першої світової війни:', [
            'Напад на Польщу',
            'Вбивство ерцгерцога Франца Фердинанда',
            'Перл-Гарбор',
            'Революція в Росії'
        ], 1, 'Сараєвське вбивство 28 червня 1914 р.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Угода, що завершила Першу світову війну з Німеччиною:', [
            'Версальський договір',
            'Мюнхенська угода',
            'Ялтинська конференція',
            'Брестський мир'
        ], 0, 'Версальський мирний договір 1919 р.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Пакт Молотова–Ріббентропа 1939 року містив:', [
            'Союз із Францією',
            'Таємний протокол про поділ сфер впливу',
            'Мир з Японією',
            'Створення ООН'
        ], 1, 'СРСР і Німеччина поділили Східну Європу.')
    ],
    'civics:human-rights': [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Право на життя належить до:', [
            'Політичних прав',
            'Особистих (громадянських) прав',
            'Економічних прав',
            'Культурних прав'
        ], 1, 'Це базове особисте право людини.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Документ ООН 1948 року про права людини:', [
            'Конвенція про права дитини',
            'Загальна декларація прав людини',
            'Хартія ЄС',
            'Конституція'
        ], 1, 'Загальну декларацію ухвалено 10 грудня 1948 р.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Право обирати і бути обраним належить до:', [
            'Особистих прав',
            'Політичних прав',
            'Соціальних прав',
            'Культурних прав'
        ], 1, 'Виборчі права — політичні.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Хто в Україні здійснює парламентський контроль за дотриманням прав людини?', [
            'Генпрокурор',
            'Уповноважений ВРУ з прав людини (омбудсман)',
            'Президент',
            'Міністр юстиції'
        ], 1, 'Омбудсман контролює дотримання прав і свобод.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Чи може право на свободу слова бути обмеженим?', [
            'Ніколи',
            'Так, у визначених законом випадках',
            'Лише за бажанням уряду',
            'Лише для дітей'
        ], 1, 'Обмеження допустимі законом, напр. для захисту репутації інших чи нацбезпеки.')
    ],
    'civics:state': [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Хто є главою держави в Україні?', [
            'Премʼєр-міністр',
            'Президент',
            'Голова ВРУ',
            'Голова Конституційного суду'
        ], 1, 'Президент — глава держави.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Єдиний орган законодавчої влади України:', [
            'Кабінет Міністрів',
            'Верховна Рада',
            'Президент',
            'Верховний Суд'
        ], 1, 'Закони ухвалює Верховна Рада.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Скільки народних депутатів у Верховній Раді?', [
            '300',
            '450',
            '500',
            '225'
        ], 1, 'Конституційний склад — 450 депутатів.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Хто ухвалює рішення про відповідність законів Конституції?', [
            'Верховний Суд',
            'Конституційний Суд',
            'Президент',
            'ВРУ'
        ], 1, 'Це виключна компетенція Конституційного Суду.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Яка форма державного устрою України?', [
            'Федерація',
            'Унітарна держава',
            'Конфедерація',
            'Імперія'
        ], 1, 'Стаття 2 Конституції: Україна — унітарна держава.')
    ],
    'civics:elections': [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'З якого віку громадяни України мають право голосу?', [
            '16',
            '18',
            '21',
            '25'
        ], 1, 'Право голосу мають громадяни з 18 років.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Голосування на виборах є:', [
            'Відкритим',
            'Таємним',
            'Обовʼязковим',
            'Платним'
        ], 1, 'Таємність гарантує вільне волевиявлення.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'На який строк обирається Президент України?', [
            '4 роки',
            '5 років',
            '6 років',
            '7 років'
        ], 1, 'Строк повноважень — 5 років.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Яка система виборів до ВРУ запроваджена Виборчим кодексом 2019 р.?', [
            'Мажоритарна',
            'Пропорційна з відкритими списками',
            'Змішана',
            'Непряма'
        ], 1, 'Кодекс передбачив пропорційну систему з відкритими регіональними списками.'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Референдум — це:', [
            'Вибори депутатів',
            'Пряме голосування громадян з важливого питання',
            'Опитування експертів',
            'Засідання парламенту'
        ], 1, 'Форма прямої демократії.')
    ]
};
const socialNewTopics = {
    'ukr-history': [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["topic"])('ukr-revolution', 'Українська революція 1917–1921', 'Після падіння Російської імперії українці створили власні державні утворення: УНР, Українську Державу гетьмана Скоропадського, ЗУНР. 22 січня 1919 року відбувся Акт Злуки.', [
            'Центральна Рада — голова Михайло Грушевський',
            'IV Універсал (22.01.1918) — незалежність УНР',
            'Гетьманат Павла Скоропадського (1918)',
            'Акт Злуки УНР і ЗУНР — 22.01.1919'
        ], [
            'Бій під Крутами — січень 1918 р.',
            'День Соборності відзначають 22 січня'
        ], [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Хто очолював Українську Центральну Раду?', [
                'Симон Петлюра',
                'Михайло Грушевський',
                'Павло Скоропадський',
                'Євген Петрушевич'
            ], 1, 'Грушевський — голова Центральної Ради.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Який день відзначають як День Соборності?', [
                '24 серпня',
                '22 січня',
                '28 червня',
                '1 грудня'
            ], 1, 'Акт Злуки 22 січня 1919 р.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Як називалася держава гетьмана Скоропадського?', [
                'УНР',
                'Українська Держава',
                'ЗУНР',
                'УРСР'
            ], 1, 'Українська Держава (Гетьманат), 1918 рік.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Який Універсал проголосив незалежність УНР?', [
                'I',
                'II',
                'III',
                'IV'
            ], 3, 'IV Універсал, 22 січня 1918 р.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Бій під Крутами відбувся у:', [
                '1917',
                '1918',
                '1919',
                '1921'
            ], 1, 'Січень 1918 р. — героїчний бій студентів і юнкерів.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'ЗУНР утворилася на землях:', [
                'Наддніпрянщини',
                'Східної Галичини, Буковини, Закарпаття',
                'Криму',
                'Слобожанщини'
            ], 1, 'Західноукраїнська Народна Республіка — листопад 1918 р.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Головний ворог УНР у 1918–1920 рр., що вів агресивну війну:', [
                'Австро-Угорщина',
                'Радянська Росія',
                'Франція',
                'Румунія'
            ], 1, 'Більшовицька Росія вела кілька війн проти УНР.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Хто очолював Директорію УНР з 1919 року?', [
                'Володимир Винниченко',
                'Симон Петлюра',
                'Іван Мазепа',
                'Михайло Грушевський'
            ], 1, 'Симон Петлюра — голова Директорії й головний отаман.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Чому Акт Злуки не був реалізований повністю?', [
                'Не підписали документ',
                'Військова ситуація та агресія сусідів',
                'Відмова народу',
                'Його скасував парламент'
            ], 1, 'Війна з більшовиками й Польщею не дала обʼєднати держави на практиці.')
        ])
    ],
    'world-history': [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["topic"])('middle-ages', 'Середньовіччя', 'Середні віки тривали від падіння Західної Римської імперії (476) до кінця XV ст. Суспільство було феодальним, важливу роль відігравала Церква, з’явилися університети й міста.', [
            'Феодалізм: сеньйор — васал',
            'Хрестові походи (1096–1291)',
            'Велика хартія вольностей (1215)',
            'Чорна смерть — чума 1347–1351'
        ], [
            'Карл Великий коронований імператором у 800 р.',
            'Перший університет у Болоньї (1088)'
        ], [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Земельне володіння, отримане за службу:', [
                'Феод',
                'Республіка',
                'Колонія',
                'Полис'
            ], 0, 'Феод надавали васалу за військову службу.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Хто такі лицарі?', [
                'Селяни',
                'Важкоозброєні кінні воїни',
                'Ремісники',
                'Монахи'
            ], 1, 'Лицарі — воїнський стан Середньовіччя.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Як називалися походи європейців на Близький Схід?', [
                'Хрестові',
                'Великі',
                'Наполеонівські',
                'Морські'
            ], 0, 'Хрестові походи — з кінця XI ст.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Хто коронувався імператором у 800 році?', [
                'Карл Великий',
                'Юстиніан',
                'Оттон I',
                'Хлодвіг'
            ], 0, 'Папа коронував Карла Великого в Римі.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Велика хартія вольностей 1215 р. обмежила владу:', [
                'Папи',
                'Англійського короля',
                'Французького короля',
                'Імператора'
            ], 1, 'Король Іоанн Безземельний підписав Хартію.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Епідемія XIV ст., що забрала третину населення Європи:', [
                'Холера',
                'Чорна смерть (чума)',
                'Віспа',
                'Грип'
            ], 1, 'Пандемія чуми 1347–1351 рр.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Принцип «васал мого васала — не мій васал» був характерний для:', [
                'Англії',
                'Франції',
                'Русі',
                'Візантії'
            ], 1, 'Феодальна драбина у Франції обмежувала владу короля.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Столітня війна велася між:', [
                'Англією і Францією',
                'Іспанією і Португалією',
                'Німеччиною і Італією',
                'Візантією і турками'
            ], 0, '1337–1453 рр.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Захоплення Константинополя турками в 1453 р. призвело до:', [
                'Відродження Риму',
                'Падіння Візантійської імперії',
                'Хрещення Русі',
                'Першого хрестового походу'
            ], 1, 'Візантія припинила існування.')
        ])
    ],
    civics: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["topic"])('finance', 'Фінансова грамотність', 'Фінансова грамотність — уміння планувати бюджет, заощаджувати, розумно користуватися кредитами та захищатися від шахраїв.', [
            'Бюджет = доходи − витрати',
            'Правило 50/30/20: потреби, бажання, заощадження',
            'Кредит повертають з відсотками',
            'Нікому не повідомляй CVV і коди з SMS'
        ], [
            'Дохід 10 000 грн → 2000 грн на заощадження',
            'Інфляція знецінює гроші «під подушкою»'
        ], [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Що таке бюджет?', [
                'Тільки витрати',
                'План доходів і витрат',
                'Кредит',
                'Податок'
            ], 1, 'Бюджет — план надходжень і витрат.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Що з переліченого не можна повідомляти нікому?', [
                'Імʼя',
                'CVV-код картки',
                'Назву банку',
                'Місто'
            ], 1, 'CVV-код — секретний; банк ніколи його не питає.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Гроші, відкладені на майбутнє, — це:', [
                'Борг',
                'Заощадження',
                'Витрати',
                'Податок'
            ], 1, 'Заощадження формують фінансову подушку.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'За правилом 50/30/20 скільки відкладати з доходу 20 000 грн?', [
                '2000 грн',
                '4000 грн',
                '6000 грн',
                '10 000 грн'
            ], 1, '20% від 20 000 = 4000 грн.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Інфляція — це:', [
                'Зростання загального рівня цін',
                'Падіння цін',
                'Зростання зарплат',
                'Податок'
            ], 0, 'Через інфляцію за ті самі гроші можна купити менше.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Депозит — це:', [
                'Позика у банку',
                'Гроші, розміщені в банку під відсоток',
                'Штраф',
                'Податок'
            ], 1, 'Банк платить відсотки за користування вашими коштами.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Кредит 10 000 грн під 20% річних на 1 рік (простий відсоток). Скільки повернути?', [
                '10 200 грн',
                '12 000 грн',
                '20 000 грн',
                '11 000 грн'
            ], 1, '10 000 + 20% = 12 000 грн.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Чому важлива «фінансова подушка»?', [
                'Для витрат на розваги',
                'Покриває непередбачені витрати',
                'Для сплати податків',
                'Для інвестицій у крипту'
            ], 1, 'Резерв на 3–6 місяців витрат захищає від форс-мажорів.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Номінальна ставка депозиту 10%, інфляція 12%. Реальна дохідність приблизно:', [
                '+22%',
                '+2%',
                '−2%',
                '0%'
            ], 2, '10 − 12 = −2%: купівельна спроможність зменшилась.')
        ])
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/data/helpers.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "q",
    ()=>q,
    "topic",
    ()=>topic
]);
function q(level, text, options, answer, explanation) {
    return {
        level,
        text,
        options,
        answer,
        explanation
    };
}
function topic(id, title, summary, concepts, examples, questions) {
    return {
        id,
        title,
        summary,
        concepts,
        examples,
        questions
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/data/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SUBJECTS",
    ()=>SUBJECTS,
    "getSubject",
    ()=>getSubject
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$atom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Atom$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/atom.mjs [app-client] (ecmascript) <export default as Atom>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/calculator.mjs [app-client] (ecmascript) <export default as Calculator>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/cpu.mjs [app-client] (ecmascript) <export default as Cpu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flask$2d$conical$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FlaskConical$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/flask-conical.mjs [app-client] (ecmascript) <export default as FlaskConical>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/globe.mjs [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$landmark$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Landmark$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/landmark.mjs [app-client] (ecmascript) <export default as Landmark>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$languages$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Languages$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/languages.mjs [app-client] (ecmascript) <export default as Languages>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$leaf$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Leaf$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/leaf.mjs [app-client] (ecmascript) <export default as Leaf>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$library$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Library$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/library.mjs [app-client] (ecmascript) <export default as Library>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/music.mjs [app-client] (ecmascript) <export default as Music>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PenLine$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/pen-line.mjs [app-client] (ecmascript) <export default as PenLine>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/scale.mjs [app-client] (ecmascript) <export default as Scale>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scroll$2d$text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ScrollText$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/scroll-text.mjs [app-client] (ecmascript) <export default as ScrollText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$telescope$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Telescope$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/telescope.mjs [app-client] (ecmascript) <export default as Telescope>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/book-open.mjs [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$exact$2d$sciences$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data/exact-sciences.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$natural$2d$sciences$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data/natural-sciences.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$social$2d$sciences$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data/social-sciences.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$languages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data/languages.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$music$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data/music.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$extra$2d$exact$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data/extra-exact.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$extra$2d$natural$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data/extra-natural.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$extra$2d$social$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data/extra-social.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$extra$2d$languages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data/extra-languages.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$extra$2d$questions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data/extra-questions.ts [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
const EXTRA_QUESTIONS = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$extra$2d$exact$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["exactExtras"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$extra$2d$natural$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["naturalExtras"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$extra$2d$social$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["socialExtras"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$extra$2d$languages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["languageExtras"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$extra$2d$questions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseTopicExtras"]
};
const NEW_TOPICS = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$extra$2d$exact$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["exactNewTopics"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$extra$2d$natural$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["naturalNewTopics"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$extra$2d$social$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["socialNewTopics"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$extra$2d$languages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["languageNewTopics"]
};
function build(data, icon) {
    const topics = [
        ...data.topics,
        ...NEW_TOPICS[data.id] ?? []
    ].map((t)=>({
            ...t,
            questions: [
                ...t.questions,
                ...EXTRA_QUESTIONS[`${data.id}:${t.id}`] ?? []
            ]
        }));
    return {
        ...data,
        topics,
        icon
    };
}
const SUBJECTS = [
    build(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$exact$2d$sciences$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["math"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__["Calculator"]),
    build(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$social$2d$sciences$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ukrHistory"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$landmark$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Landmark$3e$__["Landmark"]),
    build(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$languages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ukrLanguage"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PenLine$3e$__["PenLine"]),
    build(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$languages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ukrLiterature"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"]),
    build(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$languages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["english"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$languages$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Languages$3e$__["Languages"]),
    build(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$exact$2d$sciences$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["physics"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$atom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Atom$3e$__["Atom"]),
    build(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$exact$2d$sciences$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chemistry"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flask$2d$conical$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FlaskConical$3e$__["FlaskConical"]),
    build(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$natural$2d$sciences$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["biology"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$leaf$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Leaf$3e$__["Leaf"]),
    build(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$natural$2d$sciences$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["geography"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"]),
    build(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$natural$2d$sciences$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["informatics"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__["Cpu"]),
    build(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$social$2d$sciences$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["worldHistory"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scroll$2d$text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ScrollText$3e$__["ScrollText"]),
    build(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$social$2d$sciences$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["civics"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale$3e$__["Scale"]),
    build(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$languages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["foreignLiterature"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$library$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Library$3e$__["Library"]),
    build(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$exact$2d$sciences$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["astronomy"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$telescope$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Telescope$3e$__["Telescope"]),
    build(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$music$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["music"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__["Music"])
];
function getSubject(id) {
    return SUBJECTS.find((s)=>s.id === id);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/data/languages.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "english",
    ()=>english,
    "foreignLiterature",
    ()=>foreignLiterature,
    "ukrLanguage",
    ()=>ukrLanguage,
    "ukrLiterature",
    ()=>ukrLiterature
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data/helpers.ts [app-client] (ecmascript)");
;
const ukrLanguage = {
    id: 'ukr-language',
    name: 'Українська мова',
    topics: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["topic"])('phonetics', 'Фонетика та орфографія', 'Фонетика вивчає звуки мови, а орфографія — правила їх запису. Важливо розрізняти звуки й букви та знати правила вживання апострофа і подвоєння.', [
            'Букви я, ю, є, ї на початку складу позначають два звуки',
            'Апостроф пишемо після б, п, в, м, ф, р перед я, ю, є, ї',
            'Подвоєння виникає при збігу однакових приголосних або подовженні',
            'Правило «дев’ятки»: д, т, з, с, ц, ч, ш, ж, р + и в іншомовних словах'
        ], [
            'м’ята, п’ять, сім’я — апостроф',
            'знання, життя, міццю — подовження приголосних'
        ], [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'У якому слові правильно вжито апостроф?', [
                'м’ята',
                'св’ято',
                'сер’йозний',
                'цв’ях'
            ], 0, 'Апостроф ставимо після губного «м» перед «я». У словах «свято», «серйозний», «цвях» апострофа немає.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Скільки звуків у слові «яблуко»?', [
                '6',
                '7',
                '5',
                '8'
            ], 1, 'Буква «я» на початку слова позначає два звуки [йа], тому звуків 7, а букв 6.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Що регулює правило «дев’ятки»?', [
                'Написання и після д, т, з, с, ц, ч, ш, ж, р в іншомовних словах',
                'Вживання апострофа',
                'Подвоєння букв',
                'Наголос у словах'
            ], 0, 'У загальних іншомовних словах після цих приголосних перед приголосним пишемо «и»: система, директор.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'У якому слові відбувається подовження приголосного?', [
                'знання',
                'туман',
                'весна',
                'ранок'
            ], 0, 'У «знання» м’який приголосний [н] подовжується між голосними, що на письмі позначаємо подвоєнням «нн».')
        ]),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["topic"])('parts-of-speech', 'Частини мови', 'В українській мові є самостійні та службові частини мови. Іменник змінюється за сімома відмінками, серед яких особливий — кличний.', [
            'Іменник: хто? що?',
            'Прикметник: який? чий?',
            'Прислівник: як? де? коли?',
            '7 відмінків, сьомий — кличний'
        ], [
            '«Швидко» — прислівник, «швидкий» — прикметник',
            'Кличний відмінок: Олено, Андрію, друже'
        ], [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'На які питання відповідає іменник?', [
                'Хто? Що?',
                'Який? Чий?',
                'Що робити?',
                'Як? Де?'
            ], 0, 'Іменник означає предмет і відповідає на питання «хто?» або «що?».'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'До якої частини мови належить слово «швидко»?', [
                'Прикметник',
                'Прислівник',
                'Дієслово',
                'Іменник'
            ], 1, '«Швидко» відповідає на питання «як?» і не змінюється — це прислівник.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Скільки відмінків в українській мові?', [
                '5',
                '6',
                '7',
                '8'
            ], 2, 'Сім відмінків: називний, родовий, давальний, знахідний, орудний, місцевий і кличний.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Яка форма кличного відмінка від імені «Олег»?', [
                'Олеже',
                'Олегу',
                'Олега',
                'Олегом'
            ], 1, 'Імена на -г у кличному відмінку мають закінчення -у: Олегу. Форма на -же властива загальним назвам (друже, козаче).')
        ]),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["topic"])('syntax', 'Синтаксис і пунктуація', 'Синтаксис вивчає будову речень і словосполучень. Правильна пунктуація допомагає точно передати думку.', [
            'Головні члени речення — підмет і присудок',
            'Звертання виділяємо комами',
            'Складносурядне речення: частини рівноправні, з’єднані сполучниками і, а, але',
            'Розповідне речення закінчується крапкою'
        ], [
            'Друзі, ходімо гуляти! — звертання',
            'Світить сонце, і співають птахи — складносурядне речення'
        ], [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Який розділовий знак ставимо в кінці розповідного речення?', [
                'Крапку',
                'Знак питання',
                'Кому',
                'Двокрапку'
            ], 0, 'Розповідне речення повідомляє інформацію і закінчується крапкою.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Як на письмі виділяють звертання?', [
                'Комами',
                'Лапками',
                'Дужками',
                'Не виділяють'
            ], 0, 'Звертання відокремлюємо комами з обох боків: «Скажи, мамо, що буде завтра».'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Які члени речення є головними?', [
                'Підмет і присудок',
                'Додаток і обставина',
                'Означення і додаток',
                'Лише присудок'
            ], 0, 'Підмет і присудок утворюють граматичну основу речення.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Яким є речення «Сонце сходить, і птахи співають»?', [
                'Простим',
                'Складносурядним',
                'Складнопідрядним',
                'Безсполучниковим'
            ], 1, 'Дві рівноправні частини поєднані сурядним сполучником «і», тому речення складносурядне.')
        ])
    ]
};
const ukrLiterature = {
    id: 'ukr-literature',
    name: 'Українська література',
    topics: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["topic"])('shevchenko', 'Тарас Шевченко', 'Тарас Шевченко — поет, художник і мислитель, основоположник нової української літератури. У творчості він порушував теми свободи, долі України та гідності людини.', [
            '1838 рік — викуп із кріпацтва',
            '1840 рік — перше видання «Кобзаря»',
            '«Катерина» — поема про трагічну долю покритки',
            '«Заповіт» написано 1845 року в Переяславі'
        ], [
            '«Борітеся — поборете!» — рядок із поеми «Кавказ»',
            'Викуп організували Брюллов і Жуковський, розігравши портрет у лотерею'
        ], [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'У якому році вийшов перший «Кобзар»?', [
                '1838',
                '1840',
                '1847',
                '1861'
            ], 1, 'Перше видання «Кобзаря» з 8 творів вийшло в Петербурзі 1840 року.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Яка поема розповідає про трагічне кохання дівчини і москаля?', [
                '«Гайдамаки»',
                '«Катерина»',
                '«Кавказ»',
                '«Сон»'
            ], 1, 'Поема «Катерина» розповідає про ошукану дівчину, покинуту офіцером-москалем.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Де і коли Шевченко написав «Заповіт»?', [
                'У Києві 1840 року',
                'У Переяславі 1845 року',
                'У Петербурзі 1838 року',
                'На засланні 1850 року'
            ], 1, '«Заповіт» написано 25 грудня 1845 року в Переяславі під час тяжкої хвороби поета.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'У якому році Шевченка викупили з кріпацтва?', [
                '1814',
                '1838',
                '1847',
                '1857'
            ], 1, 'Його викупили 1838 року завдяки лотереї, на якій розіграли портрет Жуковського роботи Брюллова.')
        ]),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["topic"])('lesya', 'Леся Українка', 'Леся Українка (Лариса Косач) — поетеса і драматургиня, яка, попри тяжку хворобу, створила глибокі твори про силу духу та свободу.', [
            'Справжнє ім’я — Лариса Петрівна Косач',
            '«Contra spem spero» — «Без надії сподіваюсь»',
            '«Лісова пісня» (1911) — драма-феєрія',
            'Головні герої: Мавка і Лукаш'
        ], [
            'У «Лісовій пісні» протиставлено духовне і буденне',
            'Поезію «Contra spem spero» написано у 19 років'
        ], [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Яке справжнє ім’я Лесі Українки?', [
                'Ольга Кобилянська',
                'Лариса Косач',
                'Марія Вілінська',
                'Олена Пчілка'
            ], 1, 'Леся Українка — псевдонім Лариси Косач. Олена Пчілка — псевдонім її матері.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Хто є головною героїнею «Лісової пісні»?', [
                'Мавка',
                'Килина',
                'Русалка Польова',
                'Лісовик'
            ], 0, 'Мавка — лісова істота, яка втілює красу природи і силу справжнього кохання.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Як перекладається назва вірша «Contra spem spero»?', [
                '«Без надії сподіваюсь»',
                '«Слово, чому ти не твердая криця»',
                '«Надія вмирає останньою»',
                '«Я йду до мети»'
            ], 0, 'Латинська назва означає «Проти надії сподіваюсь» — гасло незламності духу.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'У якому році написано «Лісову пісню»?', [
                '1898',
                '1905',
                '1911',
                '1913'
            ], 2, 'Драму-феєрію написано 1911 року в Кутаїсі, всього за 12 днів.')
        ]),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["topic"])('franko', 'Іван Франко', 'Іван Франко — письменник, поет, перекладач і вчений. Його творчість охоплює філософську, громадянську та інтимну лірику, прозу і драматургію.', [
            '«Мойсей» — філософська поема про провідника народу',
            '«Захар Беркут» — повість про боротьбу громади проти монголів',
            '«Зів’яле листя» — збірка інтимної лірики',
            '1916 рік — висунення на Нобелівську премію'
        ], [
            'Події «Захара Беркута» відбуваються 1241 року в Тухлі',
            '«Зів’яле листя» — «ліричний сюжет» нещасливого кохання'
        ], [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Хто автор поеми «Мойсей»?', [
                'Тарас Шевченко',
                'Іван Франко',
                'Леся Українка',
                'Пантелеймон Куліш'
            ], 1, 'Поему «Мойсей» Іван Франко написав 1905 року.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Про що розповідає повість «Захар Беркут»?', [
                'Про боротьбу громади проти монгольської навали',
                'Про козацьке повстання',
                'Про життя робітників Борислава',
                'Про кохання Мавки'
            ], 0, 'Тухольська громада на чолі із Захаром Беркутом обороняє рідний край від монголів.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'До якого жанру належить збірка «Зів’яле листя»?', [
                'Інтимна лірика',
                'Історична проза',
                'Драма',
                'Байки'
            ], 0, 'Це збірка інтимної лірики, у якій поет описує біль нерозділеного кохання.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'У якому році Івана Франка висунули на Нобелівську премію?', [
                '1906',
                '1912',
                '1916',
                '1920'
            ], 2, 'Кандидатуру висунули 1916 року, але розглянути її не встигли через смерть письменника.')
        ])
    ]
};
const english = {
    id: 'english',
    name: 'Англійська мова',
    topics: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["topic"])('present', 'Present Simple і Present Continuous', 'Present Simple описує регулярні дії та факти, а Present Continuous — дії, що відбуваються зараз. Дієслова стану (know, like, think) зазвичай не вживаються в Continuous.', [
            'Present Simple: I work, she works',
            'Present Continuous: am/is/are + V-ing',
            'Маркери: every day, usually / now, look!',
            'Дієслова стану: know, like, think, want'
        ], [
            'She reads every evening.',
            'Look! The children are playing.'
        ], [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'She ___ to school every day.', [
                'go',
                'goes',
                'is going',
                'going'
            ], 1, 'Регулярна дія (every day) — Present Simple. Для he/she/it додаємо закінчення -es: goes.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Look! It ___.', [
                'rains',
                'is raining',
                'rain',
                'raining'
            ], 1, '«Look!» вказує на дію в цей момент, тому вживаємо Present Continuous: is raining.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'He ___ like coffee.', [
                "don't",
                "doesn't",
                "isn't",
                "not"
            ], 1, 'Заперечення в Present Simple для he/she/it утворюємо за допомогою doesn’t.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'I ___ you are right.', [
                'am thinking',
                'think',
                'thinking',
                'am think'
            ], 1, '«Think» у значенні «вважати» — дієслово стану, тому вживаємо Present Simple: I think.')
        ]),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["topic"])('past', 'Минулі часи', 'Past Simple описує завершені дії в минулому, Past Continuous — тривалу дію в певний момент минулого, а Past Perfect — дію, що відбулася раніше за іншу минулу дію.', [
            'Past Simple: worked / went (неправильні дієслова)',
            'Past Continuous: was/were + V-ing',
            'Past Perfect: had + V3',
            'Неправильні дієслова: go-went-gone, write-wrote-written'
        ], [
            'I was reading when he called.',
            'When we arrived, the train had left.'
        ], [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Яка форма минулого часу дієслова «go»?', [
                'goed',
                'went',
                'gone',
                'going'
            ], 1, '«Go» — неправильне дієслово: go — went — gone.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'When I came, she ___ dinner.', [
                'cooked',
                'was cooking',
                'cooks',
                'has cooked'
            ], 1, 'Тривала дія, яку перервала інша дія, — Past Continuous: was cooking.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Яка форма Past Participle (V3) дієслова «write»?', [
                'wrote',
                'writed',
                'written',
                'writing'
            ], 2, 'Форми дієслова: write — wrote — written.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'By the time we arrived, the film ___.', [
                'started',
                'has started',
                'had started',
                'was starting'
            ], 2, 'Фільм почався раніше, ніж ми прийшли, тому вживаємо Past Perfect: had started.')
        ]),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["topic"])('articles', 'Артиклі та лексика', 'Неозначений артикль a/an вживаємо з одниною, коли предмет згадується вперше. Означений артикль the — з унікальними або вже відомими предметами.', [
            'a — перед приголосним звуком, an — перед голосним',
            'the — з унікальними об’єктами: the Sun, the Moon',
            'the — з музичними інструментами: play the piano',
            'Антоніми: expensive — cheap, old — new'
        ], [
            'an hour (h не читається)',
            'a university (звук [ju])'
        ], [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Обери артикль: ___ apple.', [
                'a',
                'an',
                'the',
                '—'
            ], 1, 'Перед словом, що починається з голосного звуку, вживаємо «an».'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, '___ Sun rises in the east.', [
                'A',
                'An',
                'The',
                '—'
            ], 2, 'Сонце — унікальний об’єкт, тому вживаємо означений артикль «the».'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Який антонім до слова «expensive»?', [
                'cheap',
                'rich',
                'costly',
                'big'
            ], 0, '«Expensive» означає «дорогий», а протилежне за значенням — «cheap» (дешевий).'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'She plays ___ piano.', [
                'a',
                'an',
                'the',
                '—'
            ], 2, 'З назвами музичних інструментів після «play» вживаємо «the». А зі спортивними іграми артикль не потрібен: play football.')
        ])
    ]
};
const foreignLiterature = {
    id: 'foreign-literature',
    name: 'Зарубіжна література',
    topics: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["topic"])('shakespeare', 'Вільям Шекспір', 'Вільям Шекспір — англійський драматург епохи Відродження. Його трагедії досліджують кохання, владу та сенс людського існування.', [
            '«Ромео і Джульєтта» — трагедія про кохання',
            'Ворогуючі родини Монтеккі та Капулетті',
            '«Гамлет»: «Бути чи не бути — ось питання»',
            'Театр «Глобус» у Лондоні'
        ], [
            'Дія «Ромео і Джульєтти» відбувається у Вероні',
            'Гамлет — данський принц'
        ], [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Хто автор трагедії «Ромео і Джульєтта»?', [
                'Вільям Шекспір',
                'Мігель де Сервантес',
                'Йоганн Ґете',
                'Данте Аліг’єрі'
            ], 0, 'Трагедію Шекспір написав приблизно 1595 року.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Хто з героїв промовляє «Бути чи не бути — ось питання»?', [
                'Ромео',
                'Гамлет',
                'Макбет',
                'Отелло'
            ], 1, 'Це початок знаменитого монологу Гамлета з однойменної трагедії.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'До яких родин належали Ромео і Джульєтта?', [
                'Монтеккі і Капулетті',
                'Медічі і Борджіа',
                'Йорки і Ланкастери',
                'Тюдори і Стюарти'
            ], 0, 'Ромео — з родини Монтеккі, Джульєтта — з Капулетті.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Як називався театр, у якому ставили п’єси Шекспіра?', [
                '«Глобус»',
                '«Ла Скала»',
                '«Олд Вік»',
                '«Ковент-Гарден»'
            ], 0, 'Театр «Глобус» відкрили 1599 року, а Шекспір був одним із його пайовиків.')
        ]),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["topic"])('little-prince', '«Маленький принц»', 'Філософська казка Антуана де Сент-Екзюпері розповідає про хлопчика з астероїда, який шукає справжні цінності: дружбу, любов і відповідальність.', [
            'Автор — французький льотчик і письменник Антуан де Сент-Екзюпері',
            '«Найголовнішого очима не побачиш» — слова Лиса',
            'Троянда символізує кохання і відповідальність',
            'Жанр — філософська повість-казка'
        ], [
            '«Ти завжди відповідаєш за тих, кого приручив»',
            'Планети з дорослими висміюють людські вади'
        ], [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Хто автор твору «Маленький принц»?', [
                'Антуан де Сент-Екзюпері',
                'Жуль Верн',
                'Віктор Гюго',
                'Ганс Крістіан Андерсен'
            ], 0, 'Казку написав французький льотчик Антуан де Сент-Екзюпері 1943 року.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Хто сказав Маленькому принцові: «Найголовнішого очима не побачиш»?', [
                'Троянда',
                'Лис',
                'Льотчик',
                'Змія'
            ], 1, 'Цю таємницю Маленькому принцові відкрив Лис, якого він приручив.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Яка квітка росла на планеті Маленького принца?', [
                'Тюльпан',
                'Троянда',
                'Ромашка',
                'Лілія'
            ], 1, 'Примхлива троянда стала для принца єдиною у світі, бо він про неї піклувався.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'До якого жанру належить «Маленький принц»?', [
                'Філософська повість-казка',
                'Пригодницький роман',
                'Трагедія',
                'Детектив'
            ], 0, 'Твір поєднує казкові елементи з глибокими філософськими роздумами та алегорією.')
        ]),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["topic"])('homer', 'Гомер та античний епос', 'Гомер — давньогрецький поет, якому приписують поеми «Іліада» та «Одіссея». Вони стали основою європейської літератури.', [
            '«Іліада» — про Троянську війну',
            '«Одіссея» — про повернення Одіссея на Ітаку',
            'Ахілл — головний герой «Іліади»',
            'Ахіллесова п’ята — вразливе місце'
        ], [
            'Троянський кінь — військова хитрість Одіссея',
            'Одіссей мандрував додому 10 років'
        ], [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Кому приписують поеми «Іліада» та «Одіссея»?', [
                'Гомеру',
                'Вергілію',
                'Софоклу',
                'Овідію'
            ], 0, 'За традицією автором обох епічних поем вважають Гомера.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'На який острів повертався Одіссей?', [
                'Крит',
                'Ітаку',
                'Родос',
                'Сицилію'
            ], 1, 'Одіссей повертався на Ітаку, де на нього чекали дружина Пенелопа і син Телемах.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Про що розповідає «Іліада»?', [
                'Про Троянську війну',
                'Про подвиги Геракла',
                'Про заснування Риму',
                'Про аргонавтів'
            ], 0, '«Іліада» описує події останнього року облоги Трої.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Що означає вираз «ахіллесова п’ята»?', [
                'Вразливе місце',
                'Велику силу',
                'Швидкий біг',
                'Хитрість'
            ], 0, 'За міфом, Ахілл був невразливим, окрім п’яти, за яку мати тримала його, занурюючи в річку Стікс.')
        ])
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/data/music.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "music",
    ()=>music
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data/helpers.ts [app-client] (ecmascript)");
;
const music = {
    id: 'music',
    name: 'Музика',
    topics: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["topic"])('notation', 'Нотна грамота', 'Нотна грамота — система запису музики. Висоту звуку показує розташування ноти на нотному стані, а тривалість — її форма. Ключ визначає, які звуки записано на лініях.', [
            'Сім нот: до, ре, мі, фа, соль, ля, сі',
            'Нотний стан — пʼять ліній',
            'Скрипковий ключ фіксує ноту соль першої октави',
            'Тривалості: ціла = 2 половинні = 4 чвертні'
        ], [
            'Розмір 3/4 — три чвертні в такті (вальс)',
            'Діез (♯) підвищує звук на півтону, бемоль (♭) знижує'
        ], [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Скільки ліній має нотний стан?', [
                '4',
                '5',
                '6',
                '7'
            ], 1, 'Нотний стан (нотоносець) складається з пʼяти ліній.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Скільки основних нот у музиці?', [
                '5',
                '7',
                '8',
                '12'
            ], 1, 'До, ре, мі, фа, соль, ля, сі — сім нот.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Яка нота йде після «мі»?', [
                'Ре',
                'Фа',
                'Соль',
                'До'
            ], 1, 'Послідовність: до, ре, мі, фа...'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Скільки чвертних нот дорівнює одній цілій?', [
                '2',
                '4',
                '8',
                '3'
            ], 1, 'Ціла = 2 половинні = 4 чвертні.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Що робить знак діез (♯)?', [
                'Знижує на півтону',
                'Підвищує на півтону',
                'Подовжує звук',
                'Скасовує знаки'
            ], 1, 'Діез підвищує звук на півтону.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Який ключ найчастіше використовують для мелодії?', [
                'Басовий',
                'Скрипковий',
                'Альтовий',
                'Теноровий'
            ], 1, 'Скрипковий ключ — для високих звуків і мелодій.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Музичний розмір 3/4 означає:', [
                '3 цілі в такті',
                '3 чвертні в такті',
                '4 третини',
                '3 такти по 4 ноти'
            ], 1, 'Верхнє число — кількість долей, нижнє — їхня тривалість (чверть).'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Крапка біля ноти:', [
                'Скорочує її вдвічі',
                'Подовжує на половину її тривалості',
                'Робить її тихішою',
                'Означає паузу'
            ], 1, 'Половинна з крапкою = 3 чверті.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Знак бекар (♮):', [
                'Підвищує звук',
                'Скасовує дію діеза чи бемоля',
                'Подвоює тривалість',
                'Позначає повтор'
            ], 1, 'Бекар повертає звук до основного.')
        ]),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["topic"])('genres', 'Музичні жанри та форми', 'Музичні жанри поділяють на вокальні, інструментальні та сценічні. Форма — це будова твору: куплетна, рондо, варіації, сонатна.', [
            'Опера — музично-драматичний твір зі співом',
            'Балет — вистава, де зміст передають танцем',
            'Симфонія — великий твір для оркестру з кількох частин',
            'Рондо — повернення головної теми: А-В-А-С-А'
        ], [
            '«Запорожець за Дунаєм» Гулака-Артемовського — українська опера',
            '«Лебедине озеро» — балет'
        ], [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Як називається музичний твір зі співом і драматичною дією?', [
                'Балет',
                'Опера',
                'Симфонія',
                'Етюд'
            ], 1, 'Опера поєднує спів, оркестр і театральну дію.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'У балеті зміст передають:', [
                'Словами',
                'Танцем і музикою',
                'Лише піснею',
                'Малюнками'
            ], 1, 'Балет — мистецтво танцю під музику.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Пісня, якою присипляють дітей:', [
                'Марш',
                'Колискова',
                'Гімн',
                'Щедрівка'
            ], 1, 'Колискова — спокійна ніжна пісня.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Твір для великого оркестру з кількох частин:', [
                'Романс',
                'Симфонія',
                'Прелюдія',
                'Ноктюрн'
            ], 1, 'Симфонія зазвичай має чотири частини.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Автор української опери «Запорожець за Дунаєм»:', [
                'Микола Лисенко',
                'Семен Гулак-Артемовський',
                'Мирослав Скорик',
                'Кирило Стеценко'
            ], 1, 'Опера 1863 року.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Форма А-В-А-С-А називається:', [
                'Варіації',
                'Рондо',
                'Куплетна',
                'Соната'
            ], 1, 'У рондо головна тема (рефрен) постійно повертається.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Як називається вступ до опери чи балету?', [
                'Фінал',
                'Увертюра',
                'Арія',
                'Кода'
            ], 1, 'Увертюра налаштовує слухача на настрій твору.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Сонатна форма складається з:', [
                'Куплету і приспіву',
                'Експозиції, розробки, репризи',
                'Теми й варіацій',
                'Арії та речитативу'
            ], 1, 'Класична тричастинна будова сонатного алегро.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Сольний номер у опері, що розкриває почуття героя:', [
                'Хор',
                'Арія',
                'Увертюра',
                'Антракт'
            ], 1, 'Арія — вокальний «монолог» персонажа.')
        ]),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["topic"])('composers', 'Композитори та інструменти', 'Композитори різних епох створили класичну спадщину: Бах, Моцарт, Бетховен, Лисенко. Інструменти симфонічного оркестру поділяють на групи: струнні, дерев’яні та мідні духові, ударні.', [
            'Бах — епоха бароко',
            'Моцарт і Бетховен — віденський класицизм',
            'Микола Лисенко — основоположник української класичної музики',
            'Групи оркестру: струнні, деревʼяні духові, мідні духові, ударні'
        ], [
            'Бетховен писав музику, втративши слух',
            '«Щедрик» Леонтовича відомий у світі як «Carol of the Bells»'
        ], [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Який інструмент належить до струнних?', [
                'Флейта',
                'Скрипка',
                'Барабан',
                'Труба'
            ], 1, 'Скрипка — струнний смичковий інструмент.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Хто автор обробки «Щедрика»?', [
                'Микола Лисенко',
                'Микола Леонтович',
                'Левко Ревуцький',
                'Борис Лятошинський'
            ], 1, 'Світова назва — «Carol of the Bells».'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Український народний струнний щипковий інструмент:', [
                'Бандура',
                'Скрипка',
                'Орган',
                'Тромбон'
            ], 0, 'Бандура — символ кобзарського мистецтва.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Композитор, що писав музику, втративши слух:', [
                'Моцарт',
                'Бетховен',
                'Бах',
                'Шопен'
            ], 1, 'Девʼяту симфонію Бетховен створив глухим.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'До якої групи належить кларнет?', [
                'Струнні',
                'Деревʼяні духові',
                'Мідні духові',
                'Ударні'
            ], 1, 'Кларнет — деревʼяний духовий.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Автор опери «Наталка Полтавка»:', [
                'Микола Лисенко',
                'Микола Леонтович',
                'Мирослав Скорик',
                'Артемій Ведель'
            ], 0, 'Лисенко написав музику до пʼєси Котляревського.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Йоганн Себастьян Бах — представник епохи:', [
                'Романтизму',
                'Бароко',
                'Класицизму',
                'Імпресіонізму'
            ], 1, 'Бах (1685–1750) — вершина бароко.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Який інструмент має найнижчий звук у струнній групі?', [
                'Альт',
                'Контрабас',
                'Віолончель',
                'Скрипка'
            ], 1, 'Контрабас — найбільший і найнижчий.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Що обʼєднує Гайдна, Моцарта й Бетховена?', [
                'Українське походження',
                'Віденська класична школа',
                'Епоха бароко',
                'Джазовий стиль'
            ], 1, 'Усі троє — представники віденського класицизму.')
        ])
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/data/natural-sciences.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "biology",
    ()=>biology,
    "geography",
    ()=>geography,
    "informatics",
    ()=>informatics
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data/helpers.ts [app-client] (ecmascript)");
;
const biology = {
    id: 'biology',
    name: 'Біологія',
    topics: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["topic"])('cell', 'Будова клітини', 'Клітина — найменша структурна і функціональна одиниця живого. Еукаріотичні клітини мають ядро та мембранні органели, а прокаріотичні — ні.', [
            'Ядро зберігає ДНК і керує процесами клітини',
            'Мітохондрії виробляють енергію (АТФ)',
            'Хлоропласти здійснюють фотосинтез у рослин',
            'Прокаріоти (бактерії) не мають оформленого ядра'
        ], [
            'Клітина листка містить хлоропласти, а клітина шкіри людини — ні',
            'Бактерія кишкова паличка — прокаріот'
        ], [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Яку органелу називають «енергетичною станцією» клітини?', [
                'Рибосому',
                'Мітохондрію',
                'Ядро',
                'Вакуолю'
            ], 1, 'У мітохондріях відбувається клітинне дихання і синтезується АТФ — основне джерело енергії.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'У якій органелі відбувається фотосинтез?', [
                'Мітохондрії',
                'Хлоропласті',
                'Лізосомі',
                'Апараті Гольджі'
            ], 1, 'Хлоропласти містять хлорофіл, який поглинає світло для синтезу органічних речовин.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Де зберігається більша частина ДНК в еукаріотичній клітині?', [
                'У цитоплазмі',
                'У ядрі',
                'У мембрані',
                'У вакуолі'
            ], 1, 'Ядро містить хромосоми з ДНК — генетичну інформацію клітини.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Чим прокаріотична клітина принципово відрізняється від еукаріотичної?', [
                'Не має оформленого ядра',
                'Не має ДНК',
                'Не має мембрани',
                'Не має рибосом'
            ], 0, 'У прокаріотів ДНК розташована безпосередньо в цитоплазмі (нуклеоїд), а мембранних органел немає. Рибосоми в них є.')
        ]),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["topic"])('genetics', 'Основи генетики', 'Генетика вивчає спадковість і мінливість. Ознаки передаються через гени, а закони Менделя описують їхнє успадкування.', [
            'ДНК — носій спадкової інформації',
            'Домінантна ознака (A) проявляється навіть у гетерозиготі Aa',
            'Рецесивна ознака (a) проявляється лише у гомозиготі aa',
            'Схрещування Aa × Aa дає розщеплення 3 : 1 за фенотипом'
        ], [
            'Карі очі домінують над блакитними',
            'У людини 23 пари хромосом'
        ], [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Яка молекула є носієм спадкової інформації?', [
                'Білок',
                'ДНК',
                'Глюкоза',
                'Жир'
            ], 1, 'ДНК містить гени — інструкції для синтезу білків і формування ознак.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Скільки хромосом у соматичній клітині людини?', [
                '23',
                '46',
                '44',
                '48'
            ], 1, 'Соматичні клітини людини мають 46 хромосом, тобто 23 пари.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Яку ознаку називають домінантною?', [
                'Ту, що проявляється у гетерозиготі',
                'Ту, що ніколи не проявляється',
                'Лише набуту ознаку',
                'Ознаку статевих клітин'
            ], 0, 'Домінантний алель пригнічує рецесивний, тому ознака проявляється вже за наявності однієї копії гена.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Яка частка нащадків матиме генотип aa при схрещуванні Aa × Aa?', [
                '0%',
                '25%',
                '50%',
                '75%'
            ], 1, 'За ґратками Пеннета: AA, Aa, Aa, aa. Рецесивна гомозигота становить 1 з 4 варіантів, тобто 25%.')
        ]),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["topic"])('ecology', 'Екосистеми', 'Екосистема об’єднує живі організми та середовище, у якому вони живуть. Енергія передається ланцюгами живлення від продуцентів до консументів.', [
            'Продуценти (рослини) створюють органічні речовини',
            'Консументи споживають готову органіку',
            'Редуценти розкладають рештки організмів',
            'Правило 10%: на наступний рівень переходить ≈ 10% енергії'
        ], [
            'Трава → заєць → лисиця — ланцюг живлення',
            'Гриби та бактерії — редуценти'
        ], [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Які організми є продуцентами?', [
                'Хижаки',
                'Зелені рослини',
                'Гриби',
                'Травоїдні'
            ], 1, 'Зелені рослини створюють органічні речовини з неорганічних під час фотосинтезу.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Яку частку енергії передає кожен трофічний рівень наступному?', [
                '≈ 10%',
                '≈ 50%',
                '≈ 90%',
                '100%'
            ], 0, 'Більша частина енергії витрачається на життєдіяльність і розсіюється у вигляді тепла.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Що таке біоценоз?', [
                'Сукупність живих організмів певної території',
                'Лише рослини лісу',
                'Неживі компоненти природи',
                'Один вид тварин'
            ], 0, 'Біоценоз — угруповання рослин, тварин, грибів і мікроорганізмів, які живуть разом.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Продуценти накопичили 10 000 кДж енергії. Скільки отримають консументи ІІ порядку?', [
                '1 000 кДж',
                '100 кДж',
                '10 кДж',
                '5 000 кДж'
            ], 1, 'Консументи І порядку отримують 10% — 1 000 кДж, а консументи ІІ порядку — 10% від цього, тобто 100 кДж.')
        ])
    ]
};
const geography = {
    id: 'geography',
    name: 'Географія',
    topics: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["topic"])('continents', 'Материки та океани', 'На Землі шість материків і п’ять океанів. Вони різняться розмірами, рельєфом і кліматом.', [
            'Материки: Євразія, Африка, Північна Америка, Південна Америка, Антарктида, Австралія',
            'Найбільший материк — Євразія, найменший — Австралія',
            'Тихий океан — найбільший і найглибший',
            'Еверест (8 848 м) — найвища точка Землі'
        ], [
            'Африку перетинає екватор та обидва тропіки',
            'Маріанська западина — найглибше місце океану'
        ], [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Який материк найбільший за площею?', [
                'Африка',
                'Євразія',
                'Північна Америка',
                'Антарктида'
            ], 1, 'Євразія займає близько 54 млн км² — понад третину суходолу.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Який океан найбільший?', [
                'Атлантичний',
                'Індійський',
                'Тихий',
                'Північний Льодовитий'
            ], 2, 'Тихий океан займає майже половину площі Світового океану.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Яка вершина найвища у світі?', [
                'Ельбрус',
                'Кіліманджаро',
                'Еверест (Джомолунгма)',
                'Монблан'
            ], 2, 'Еверест у Гімалаях має висоту близько 8 848 м.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Який материк перетинають і екватор, і обидва тропіки?', [
                'Південна Америка',
                'Австралія',
                'Африка',
                'Євразія'
            ], 2, 'Африка розташована майже симетрично відносно екватора, тому її перетинають екватор, Північний і Південний тропіки.')
        ]),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["topic"])('ukraine', 'Фізична географія України', 'Україна розташована у Східній Європі. Більшу частину території займають рівнини, а гори є лише на заході (Карпати) та півдні (Кримські гори).', [
            'Найвища вершина — Говерла (2 061 м)',
            'Найдовша річка в межах країни — Дніпро',
            'Природні зони: мішані ліси, лісостеп, степ',
            'Степ займає найбільшу площу'
        ], [
            'Дніпро впадає в Чорне море',
            'Карпати — молоді складчасті гори'
        ], [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Яке місто є столицею України?', [
                'Львів',
                'Київ',
                'Харків',
                'Одеса'
            ], 1, 'Київ — столиця і найбільше місто України, розташоване на Дніпрі.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Яка вершина найвища в Україні?', [
                'Петрос',
                'Говерла',
                'Роман-Кош',
                'Піп Іван'
            ], 1, 'Говерла в Українських Карпатах має висоту 2 061 м.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Яка річка найдовша в межах України?', [
                'Дністер',
                'Південний Буг',
                'Дніпро',
                'Десна'
            ], 2, 'Дніпро протікає територією України на відстань близько 981 км.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Яка природна зона займає найбільшу площу України?', [
                'Мішані ліси',
                'Лісостеп',
                'Степ',
                'Гірські ліси'
            ], 2, 'Степ охоплює південь і схід країни — близько 40% території.')
        ]),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["topic"])('climate', 'Координати та клімат', 'Географічні координати визначають положення точки на Землі. Клімат залежить від широти, висоти над рівнем моря та віддаленості від океанів.', [
            'Широта відраховується від екватора (0°–90°)',
            'Довгота відраховується від Гринвіцького меридіана (0°–180°)',
            'Температура знижується на ≈ 6 °C на кожен кілометр висоти',
            'Екватор поділяє Землю на Північну і Південну півкулі'
        ], [
            'Київ: ≈ 50° пн. ш., 30° сх. д.',
            'На висоті 2 км температура на 12 °C нижча, ніж біля підніжжя'
        ], [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Яка лінія поділяє Землю на Північну і Південну півкулі?', [
                'Нульовий меридіан',
                'Екватор',
                'Тропік',
                'Полярне коло'
            ], 1, 'Екватор — паралель 0°, рівновіддалена від обох полюсів.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'На скільки градусів знижується температура з підняттям на 1 км?', [
                '≈ 1 °C',
                '≈ 6 °C',
                '≈ 15 °C',
                'Не змінюється'
            ], 1, 'У тропосфері температура знижується в середньому на 6 °C на кожен кілометр висоти.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Від чого відраховують географічну довготу?', [
                'Від екватора',
                'Від Гринвіцького меридіана',
                'Від Північного полюса',
                'Від тропіка'
            ], 1, 'Нульовий (Гринвіцький) меридіан проходить через Гринвіцьку обсерваторію в Лондоні.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Біля підніжжя гори +18 °C. Яка температура на висоті 3 000 м?', [
                '+12 °C',
                '0 °C',
                '−6 °C',
                '+15 °C'
            ], 1, 'Підйом на 3 км знижує температуру на 3 · 6 = 18 °C, отже 18 − 18 = 0 °C.')
        ])
    ]
};
const informatics = {
    id: 'informatics',
    name: 'Інформатика',
    topics: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["topic"])('number-systems', 'Системи числення', 'Комп’ютери зберігають дані у двійковій системі. Шістнадцяткову систему використовують для компактного запису двійкових чисел.', [
            'Двійкова система: цифри 0 і 1',
            'Переведення в десяткову: сума цифр, помножених на степені основи',
            '1 байт = 8 біт',
            'Шістнадцяткова система: 0–9 та A–F'
        ], [
            '1011₂ = 8 + 0 + 2 + 1 = 11₁₀',
            '15₁₀ = F₁₆ = 1111₂'
        ], [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Які цифри використовує двійкова система?', [
                '0 і 1',
                '0–7',
                '0–9',
                '1 і 2'
            ], 0, 'Основа двійкової системи — 2, тому використовуються лише цифри 0 і 1.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Яке десяткове число записане як 1010₂?', [
                '8',
                '10',
                '12',
                '5'
            ], 1, '1·8 + 0·4 + 1·2 + 0·1 = 10.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Скільки біт містить 1 байт?', [
                '4',
                '8',
                '16',
                '1024'
            ], 1, 'Байт складається з 8 біт і може зберігати 256 різних значень.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Як записати десяткове число 255 у шістнадцятковій системі?', [
                'FF',
                'F0',
                '100',
                'EE'
            ], 0, '255 = 15 · 16 + 15, а цифра 15 у шістнадцятковій системі — F. Отже, FF.')
        ]),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["topic"])('algorithms', 'Алгоритми', 'Алгоритм — це скінченна послідовність чітких команд для розв’язання задачі. Основні структури алгоритмів: слідування, розгалуження та цикл.', [
            'Слідування — команди виконуються одна за одною',
            'Розгалуження — «якщо… то… інакше»',
            'Цикл — повторення команд',
            'Бінарний пошук працює за O(log n)'
        ], [
            'for i in range(3) виконає тіло циклу 3 рази',
            'Пошук слова в словнику — приклад бінарного пошуку'
        ], [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Що таке алгоритм?', [
                'Скінченна послідовність команд для розв’язання задачі',
                'Мова програмування',
                'Комп’ютерна програма',
                'Пристрій введення'
            ], 0, 'Алгоритм описує, які дії і в якому порядку потрібно виконати, щоб отримати результат.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Як називається алгоритмічна структура «якщо… то… інакше»?', [
                'Цикл',
                'Розгалуження',
                'Слідування',
                'Рекурсія'
            ], 1, 'Розгалуження обирає одну з гілок залежно від умови.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Скільки разів виконається тіло циклу for i in range(5)?', [
                '4',
                '5',
                '6',
                '0'
            ], 1, 'range(5) генерує значення 0, 1, 2, 3, 4 — усього 5 ітерацій.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Яка часова складність бінарного пошуку у відсортованому масиві?', [
                'O(n)',
                'O(n²)',
                'O(log n)',
                'O(1)'
            ], 2, 'На кожному кроці область пошуку зменшується вдвічі, тому кількість кроків пропорційна log₂ n.')
        ]),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["topic"])('logic', 'Логічні операції', 'Логічні операції працюють зі значеннями «істина» (1) та «хиба» (0). Вони є основою умов у програмах і роботи процесора.', [
            'AND (І) — 1, лише якщо обидва операнди 1',
            'OR (АБО) — 1, якщо хоча б один операнд 1',
            'NOT (НЕ) — змінює значення на протилежне',
            'Порядок дій: NOT, потім AND, потім OR'
        ], [
            '1 AND 1 = 1, 1 AND 0 = 0',
            'NOT 0 = 1'
        ], [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Чому дорівнює 1 AND 0?', [
                '0',
                '1',
                '2',
                '10'
            ], 0, 'AND повертає 1 лише тоді, коли обидва значення істинні.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Чому дорівнює 1 OR 0?', [
                '0',
                '1',
                '2',
                '10'
            ], 1, 'OR повертає 1, якщо хоча б одне значення істинне.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Чому дорівнює NOT 1?', [
                '1',
                '0',
                '−1',
                '2'
            ], 1, 'NOT змінює значення на протилежне: істина стає хибою.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Обчисли (A AND B) OR NOT A, якщо A = 1, B = 0.', [
                '0',
                '1',
                'Не визначено',
                '2'
            ], 0, 'A AND B = 1 AND 0 = 0; NOT A = 0; 0 OR 0 = 0.')
        ])
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/data/social-sciences.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "civics",
    ()=>civics,
    "ukrHistory",
    ()=>ukrHistory,
    "worldHistory",
    ()=>worldHistory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data/helpers.ts [app-client] (ecmascript)");
;
const ukrHistory = {
    id: 'ukr-history',
    name: 'Історія України',
    topics: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["topic"])('kyivan-rus', 'Київська Русь', 'Київська Русь — середньовічна держава зі столицею в Києві, що існувала з IX до середини XIII століття. Розквіту вона досягла за князів Володимира Великого та Ярослава Мудрого.', [
            '988 рік — хрещення Русі князем Володимиром',
            'Ярослав Мудрий — «Руська правда», Софійський собор',
            '1240 рік — захоплення Києва військами Батия',
            'Держава мала династію Рюриковичів'
        ], [
            'Софія Київська збудована за Ярослава Мудрого',
            'Хрещення зміцнило зв’язки з Візантією'
        ], [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'У якому році відбулося хрещення Русі?', [
                '988',
                '1054',
                '882',
                '1240'
            ], 0, 'Князь Володимир Великий запровадив християнство як державну релігію в 988 році.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'За якого князя почали укладати «Руську правду»?', [
                'Святослава',
                'Ярослава Мудрого',
                'Ольги',
                'Данила Галицького'
            ], 1, 'Найдавніша частина «Руської правди» — «Правда Ярослава» — перший писаний збірник законів Русі.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Який князь хрестив Русь?', [
                'Ігор',
                'Володимир Великий',
                'Олег',
                'Мстислав'
            ], 1, 'Володимир Святославич охрестився сам і запровадив християнство в державі.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'У якому році Київ захопили війська хана Батия?', [
                '1223',
                '1240',
                '1199',
                '1362'
            ], 1, 'Облога і падіння Києва 1240 року завершили період могутності Київської держави.')
        ]),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["topic"])('cossacks', 'Козацька доба', 'Українське козацтво сформувалося у XV–XVI століттях. Запорозька Січ стала його військово-політичним центром, а Національно-визвольна війна 1648 року привела до створення Гетьманщини.', [
            'Запорозька Січ — центр козацтва',
            '1648 рік — початок Національно-визвольної війни під проводом Богдана Хмельницького',
            '1710 рік — Конституція Пилипа Орлика',
            '1775 рік — ліквідація Січі Катериною ІІ'
        ], [
            'Битва під Жовтими Водами 1648 року — перша перемога Хмельницького',
            'Конституцію Орлика вважають однією з перших конституцій Європи'
        ], [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Що було центром запорозького козацтва?', [
                'Чигирин',
                'Запорозька Січ',
                'Батурин',
                'Київ'
            ], 1, 'Запорозька Січ — укріплений центр козаків за дніпровськими порогами.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Хто очолив Національно-визвольну війну 1648 року?', [
                'Іван Мазепа',
                'Богдан Хмельницький',
                'Петро Сагайдачний',
                'Іван Сірко'
            ], 1, 'Богдан Хмельницький став гетьманом і створив Українську козацьку державу.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Хто є автором Конституції 1710 року?', [
                'Пилип Орлик',
                'Іван Виговський',
                'Петро Дорошенко',
                'Кирило Розумовський'
            ], 0, 'Пилип Орлик уклав «Пакти і Конституції прав і вольностей Війська Запорозького».'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'У якому році Катерина ІІ ліквідувала Запорозьку Січ?', [
                '1709',
                '1764',
                '1775',
                '1783'
            ], 2, 'У 1775 році російські війська зруйнували Нову Січ за наказом Катерини ІІ.')
        ]),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["topic"])('independence', 'Відновлення незалежності', 'Україна неодноразово виборювала державність у ХХ столітті. У 1991 році незалежність було проголошено та підтверджено всенародним референдумом.', [
            '22 січня 1918 — IV Універсал проголосив незалежність УНР',
            '24 серпня 1991 — Акт проголошення незалежності України',
            '1 грудня 1991 — всеукраїнський референдум',
            '28 червня 1996 — ухвалено Конституцію України'
        ], [
            'На референдумі понад 90% учасників підтримали незалежність',
            '28 червня — День Конституції'
        ], [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Коли Верховна Рада ухвалила Акт проголошення незалежності України?', [
                '24 серпня 1991',
                '1 грудня 1991',
                '16 липня 1990',
                '28 червня 1996'
            ], 0, 'Акт проголошення незалежності ухвалено 24 серпня 1991 року — це День Незалежності.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Коли відбувся всеукраїнський референдум щодо незалежності?', [
                '24 серпня 1991',
                '1 грудня 1991',
                '8 грудня 1991',
                '22 січня 1992'
            ], 1, 'Референдум 1 грудня 1991 року підтвердив Акт проголошення незалежності.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Коли ухвалено чинну Конституцію України?', [
                '1991',
                '1994',
                '1996',
                '2004'
            ], 2, 'Конституцію ухвалено 28 червня 1996 року.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Який документ 22 січня 1918 року проголосив УНР самостійною державою?', [
                'І Універсал',
                'ІІІ Універсал',
                'IV Універсал',
                'Акт Злуки'
            ], 2, 'IV Універсал Центральної Ради проголосив УНР незалежною. Акт Злуки підписали рівно через рік — 22 січня 1919 року.')
        ])
    ]
};
const worldHistory = {
    id: 'world-history',
    name: 'Всесвітня історія',
    topics: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["topic"])('ancient', 'Стародавній світ', 'Перші цивілізації виникли в долинах великих річок. Стародавні Греція і Рим заклали основи європейської культури, права та демократії.', [
            'Єгипет — піраміди та фараони',
            'Афіни — батьківщина демократії',
            'Октавіан Август — перший римський імператор',
            '476 рік — падіння Західної Римської імперії'
        ], [
            'Піраміда Хеопса — одне із семи чудес світу',
            'Римське право вплинуло на сучасні правові системи'
        ], [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'У якій країні будували піраміди для фараонів?', [
                'Греції',
                'Єгипті',
                'Римі',
                'Індії'
            ], 1, 'Піраміди в Гізі — гробниці давньоєгипетських фараонів.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Яке місто вважають батьківщиною демократії?', [
                'Спарту',
                'Рим',
                'Афіни',
                'Карфаген'
            ], 2, 'В Афінах громадяни самі ухвалювали рішення на народних зборах.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Хто став першим римським імператором?', [
                'Юлій Цезар',
                'Октавіан Август',
                'Нерон',
                'Траян'
            ], 1, 'Октавіан отримав титул Августа у 27 році до н. е. Юлій Цезар імператором не був.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'У якому році впала Західна Римська імперія?', [
                '395',
                '476',
                '1453',
                '800'
            ], 1, 'У 476 році Одоакр скинув останнього імператора Ромула Августула. 1453 рік — падіння Візантії.')
        ]),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["topic"])('modern', 'Нова доба', 'Нова доба — період Великих географічних відкриттів, революцій і промислового перевороту. Він змінив політичну карту світу та економіку.', [
            '1492 рік — Колумб досяг Америки',
            '1776 рік — Декларація незалежності США',
            '1789 рік — початок Французької революції',
            'Промисловий переворот розпочався в Англії'
        ], [
            'Парова машина Уатта стала символом промислового перевороту',
            'Взяття Бастилії — 14 липня 1789 року'
        ], [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Хто відкрив Америку для європейців у 1492 році?', [
                'Васко да Гама',
                'Христофор Колумб',
                'Магеллан',
                'Кук'
            ], 1, 'Експедиція Колумба на іспанських кораблях досягла островів Карибського моря.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'У якому році почалася Велика французька революція?', [
                '1776',
                '1789',
                '1815',
                '1848'
            ], 1, 'Революція розпочалася 1789 року, символом став штурм Бастилії.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'У якій країні розпочався промисловий переворот?', [
                'Франції',
                'Англії',
                'Німеччині',
                'США'
            ], 1, 'Англія мала капітал, вугілля і ринки збуту, тому перша перейшла до машинного виробництва.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'У якому році ухвалено Декларацію незалежності США?', [
                '1607',
                '1776',
                '1787',
                '1812'
            ], 1, 'Декларацію ухвалено 4 липня 1776 року. 1787 рік — ухвалення Конституції США.')
        ]),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["topic"])('world-wars', 'Світові війни', 'У ХХ столітті людство пережило дві світові війни, які забрали десятки мільйонів життів. Після Другої світової було створено ООН для підтримання миру.', [
            'Перша світова війна: 1914–1918',
            'Привід — убивство Франца Фердинанда в Сараєві',
            'Друга світова війна: 1939–1945',
            '1945 рік — створення ООН'
        ], [
            'Друга світова почалася з нападу Німеччини на Польщу',
            'Україна — одна із країн-засновниць ООН'
        ], [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'У якому році почалася Друга світова війна?', [
                '1914',
                '1939',
                '1941',
                '1945'
            ], 1, 'Війна почалася 1 вересня 1939 року з нападу Німеччини на Польщу.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Що стало приводом до Першої світової війни?', [
                'Убивство Франца Фердинанда',
                'Напад на Польщу',
                'Революція в Росії',
                'Атака на Перл-Гарбор'
            ], 0, 'Убивство спадкоємця австро-угорського престолу в Сараєві 1914 року запустило ланцюг оголошень війни.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Які роки тривала Перша світова війна?', [
                '1912–1916',
                '1914–1918',
                '1917–1921',
                '1939–1945'
            ], 1, 'Перша світова тривала з 1914 до 1918 року і завершилася Комп’єнським перемир’ям.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Яку міжнародну організацію створили 1945 року для підтримання миру?', [
                'Лігу Націй',
                'ООН',
                'НАТО',
                'ЄС'
            ], 1, 'ООН заснували 1945 року. Ліга Націй, створена після Першої світової, не змогла запобігти новій війні.')
        ])
    ]
};
const civics = {
    id: 'civics',
    name: 'Громадянська освіта',
    topics: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["topic"])('human-rights', 'Права людини', 'Права людини — це невід’ємні можливості, які належать кожному від народження. Держава зобов’язана їх визнавати та захищати.', [
            '1948 рік — Загальна декларація прав людини ООН',
            'Громадянські, політичні, соціальні, економічні та культурні права',
            'Уповноважений ВРУ з прав людини (омбудсман)',
            'Права можуть обмежуватися лише законом'
        ], [
            'Право на життя — громадянське (особисте) право',
            'Право на освіту — соціальне право'
        ], [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'У якому році ухвалено Загальну декларацію прав людини?', [
                '1918',
                '1948',
                '1991',
                '2000'
            ], 1, 'Генеральна Асамблея ООН ухвалила Декларацію 10 грудня 1948 року.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'До якої групи належить право на життя?', [
                'Громадянських (особистих)',
                'Економічних',
                'Культурних',
                'Політичних'
            ], 0, 'Право на життя — фундаментальне громадянське право кожної людини.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Хто здійснює парламентський контроль за дотриманням прав людини в Україні?', [
                'Генеральний прокурор',
                'Уповноважений Верховної Ради з прав людини',
                'Президент',
                'Міністр юстиції'
            ], 1, 'Омбудсман розглядає скарги громадян на порушення їхніх прав.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'Чи можуть права людини обмежуватися?', [
                'Так, лише законом і у випадках, передбачених Конституцією',
                'Ні, ніколи',
                'Так, за рішенням будь-якого посадовця',
                'Лише за бажанням громадян'
            ], 0, 'Обмеження можливі лише законом і в чітко визначених випадках, зокрема під час воєнного стану. Деякі права, як-от право на життя та гідність, обмежувати не можна.')
        ]),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["topic"])('state', 'Державний устрій України', 'Україна — демократична, правова, унітарна держава. Державна влада поділяється на законодавчу, виконавчу та судову.', [
            'Верховна Рада — єдиний орган законодавчої влади (450 депутатів)',
            'Президент — глава держави',
            'Кабінет Міністрів — вищий орган виконавчої влади',
            'Конституційний Суд стежить за відповідністю законів Конституції'
        ], [
            'Закони ухвалює Верховна Рада, а підписує Президент',
            'Уряд очолює Прем’єр-міністр'
        ], [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'Який орган є єдиним органом законодавчої влади в Україні?', [
                'Кабінет Міністрів',
                'Верховна Рада',
                'Президент',
                'Верховний Суд'
            ], 1, 'Конституція визначає Верховну Раду єдиним законодавчим органом.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Хто є главою держави в Україні?', [
                'Прем’єр-міністр',
                'Голова Верховної Ради',
                'Президент',
                'Голова Конституційного Суду'
            ], 2, 'Президент є гарантом державного суверенітету та Конституції.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Скільки народних депутатів у Верховній Раді?', [
                '300',
                '400',
                '450',
                '500'
            ], 2, 'Конституційний склад Верховної Ради — 450 народних депутатів.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'На які гілки поділяється державна влада згідно з Конституцією?', [
                'Законодавчу, виконавчу, судову',
                'Центральну і місцеву',
                'Президентську і парламентську',
                'Військову і цивільну'
            ], 0, 'Поділ влади на три гілки запобігає зосередженню всієї влади в одних руках.')
        ]),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["topic"])('elections', 'Демократія та вибори', 'Демократія — форма правління, за якої джерелом влади є народ. Громадяни реалізують владу через вибори та референдуми.', [
            'Виборче право — з 18 років',
            'Принципи виборів: загальні, рівні, прямі, таємні',
            'Референдум — всенародне голосування з важливих питань',
            'Президента обирають на 5 років'
        ], [
            'Референдум 1991 року підтвердив незалежність України',
            'Таємне голосування відбувається в закритій кабіні'
        ], [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(1, 'З якого віку громадяни України мають право голосувати?', [
                '16',
                '18',
                '21',
                '25'
            ], 1, 'Активне виборче право мають громадяни, яким на день виборів виповнилося 18 років.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Що таке референдум?', [
                'Всенародне голосування з важливих питань',
                'Засідання парламенту',
                'Указ Президента',
                'Мітинг'
            ], 0, 'Під час референдуму громадяни безпосередньо ухвалюють рішення.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(2, 'Що означає таємність голосування?', [
                'Ніхто не може контролювати волевиявлення виборця',
                'Вибори проводяться вночі',
                'Результати не оприлюднюються',
                'Кандидати невідомі'
            ], 0, 'Таємність захищає виборця від тиску та гарантує вільний вибір.'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(3, 'На який строк обирається Президент України?', [
                '4 роки',
                '5 років',
                '6 років',
                '7 років'
            ], 1, 'Конституція встановлює строк повноважень Президента — 5 років.')
        ])
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/engine.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POINTS_PER_CORRECT",
    ()=>POINTS_PER_CORRECT,
    "QUESTIONS_PER_SESSION",
    ()=>QUESTIONS_PER_SESSION,
    "SESSION_LENGTHS",
    ()=>SESSION_LENGTHS,
    "adaptExplanation",
    ()=>adaptExplanation,
    "buildSession",
    ()=>buildSession,
    "formatDuration",
    ()=>formatDuration,
    "masteryZone",
    ()=>masteryZone
]);
const QUESTIONS_PER_SESSION = 3;
const SESSION_LENGTHS = [
    3,
    5
];
const POINTS_PER_CORRECT = 10;
const TARGET_DIFFICULTY = {
    easy: 1,
    medium: 2,
    hard: 3
};
function shuffle(items) {
    const copy = [
        ...items
    ];
    for(let i = copy.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [
            copy[j],
            copy[i]
        ];
    }
    return copy;
}
function shuffleOptions(question) {
    const order = shuffle([
        0,
        1,
        2,
        3
    ]);
    const options = order.map((i)=>question.options[i]);
    const answer = order.indexOf(question.answer);
    return {
        ...question,
        options,
        answer
    };
}
function toSessionQuestions(topic, subjectId) {
    return topic.questions.map((question, index)=>({
            ...question,
            key: `${subjectId}:${topic.id}:${index}`,
            topicId: topic.id,
            topicTitle: topic.title
        }));
}
function rankForLevel(pool, level, recentKeys) {
    const target = TARGET_DIFFICULTY[level];
    return pool.map((question)=>({
            question,
            score: Math.abs(question.level - target) * 10 + (recentKeys.has(question.key) ? 2.5 : 0) + Math.random() * 0.9
        })).sort((a, b)=>a.score - b.score).map((entry)=>entry.question);
}
function buildSession(subject, choice, level, recentKeys = [], count = QUESTIONS_PER_SESSION) {
    const recent = new Set(recentKeys);
    const target = TARGET_DIFFICULTY[level];
    if (choice.kind === 'topic') {
        const topic = subject.topics.find((t)=>t.id === choice.topicId);
        if (!topic) return [];
        const picked = rankForLevel(toSessionQuestions(topic, subject.id), level, recent).slice(0, count);
        // Якщо в темі не вистачає завдань — додаємо решту з інших тем предмета.
        if (picked.length < count) {
            const used = new Set(picked.map((question)=>question.key));
            const rest = subject.topics.filter((t)=>t.id !== topic.id).flatMap((t)=>toSessionQuestions(t, subject.id));
            const extra = rankForLevel(rest, level, recent).filter((question)=>!used.has(question.key));
            picked.push(...extra.slice(0, count - picked.length));
        }
        const ordered = target === 3 ? picked.sort((a, b)=>a.level - b.level) : picked;
        return ordered.map((question)=>({
                ...question,
                ...shuffleOptions(question)
            }));
    }
    // Мікс: спершу по одному завданню з різних тем, далі — решта, щоб набрати потрібну кількість.
    const pool = rankForLevel(subject.topics.flatMap((topic)=>toSessionQuestions(topic, subject.id)), level, recent);
    const picked = [];
    const seenTopics = new Set();
    for (const question of pool){
        if (picked.length >= count) break;
        if (seenTopics.has(question.topicId)) continue;
        seenTopics.add(question.topicId);
        picked.push(question);
    }
    for (const question of pool){
        if (picked.length >= count) break;
        if (!picked.includes(question)) picked.push(question);
    }
    return picked.map((question)=>({
            ...question,
            ...shuffleOptions(question)
        }));
}
function adaptExplanation(question, topic, level) {
    const correct = question.options[question.answer];
    const base = `Правильна відповідь — «${correct}». ${question.explanation}`;
    if (level === 'easy') {
        const hint = topic?.concepts[0];
        return hint ? `${base}\n\nЗапам’ятай головне: ${hint}.` : base;
    }
    if (level === 'hard' && topic) {
        const extra = topic.concepts.slice(1, 3).join('; ');
        return `${base}\n\nПоглиблено: ${extra}. Спробуй пояснити, чому інші варіанти не підходять — це найкраща перевірка розуміння.`;
    }
    return base;
}
function masteryZone(accuracy) {
    if (accuracy >= 75) return {
        label: 'Тему засвоєно',
        tone: 'success'
    };
    if (accuracy >= 40) return {
        label: 'Потрібно повторити',
        tone: 'warning'
    };
    return {
        label: 'Варто вивчити ще раз',
        tone: 'destructive'
    };
}
function formatDuration(totalSeconds) {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/openrouter.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AI_MODELS",
    ()=>AI_MODELS,
    "OPENROUTER_MODEL",
    ()=>OPENROUTER_MODEL,
    "OpenRouterError",
    ()=>OpenRouterError,
    "getModelName",
    ()=>getModelName,
    "requestExplanation",
    ()=>requestExplanation,
    "testModel",
    ()=>testModel,
    "verifyApiKey",
    ()=>verifyApiKey
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/types.ts [app-client] (ecmascript)");
;
const AI_MODELS = [
    {
        id: 'nvidia/nemotron-3.5-super-vl:free',
        name: 'Nemotron 3.5 Super VL',
        provider: 'NVIDIA'
    },
    {
        id: 'dots-studio/dots-3-note-preview:free',
        name: 'Dots3-Note Preview',
        provider: 'Dots Studio'
    },
    {
        id: 'nvidia/nemotron-3.5-lightning:free',
        name: 'Nemotron 3.5 Lightning',
        provider: 'NVIDIA'
    },
    {
        id: 'nvidia/nemotron-3.5-content-safety:free',
        name: 'Nemotron 3.5 Content Safety',
        provider: 'NVIDIA'
    },
    {
        id: 'google/gemini-2.0-flash-exp',
        name: 'Gemini 2.0 Flash Exp',
        provider: 'Google'
    }
];
const OPENROUTER_MODEL = AI_MODELS[0].id;
function getModelName(id) {
    const model = AI_MODELS.find((m)=>m.id === id);
    return model ? `${model.provider}: ${model.name}` : id;
}
const API_BASE = 'https://openrouter.ai/api/v1';
class OpenRouterError extends Error {
    kind;
    constructor(kind, message){
        super(message);
        this.kind = kind;
    }
}
async function safeFetch(input, init) {
    try {
        return await fetch(input, init);
    } catch  {
        throw new OpenRouterError('network', 'Не вдалося з’єднатися з OpenRouter. Перевір інтернет-підключення.');
    }
}
function errorFromStatus(status) {
    if (status === 401 || status === 403) {
        return new OpenRouterError('auth', 'API-ключ OpenRouter некоректний або відкликаний.');
    }
    if (status === 402) {
        return new OpenRouterError('request', 'На рахунку OpenRouter недостатньо кредитів для запиту.');
    }
    if (status === 429) {
        return new OpenRouterError('request', 'Забагато запитів до OpenRouter. Спробуй трохи пізніше.');
    }
    return new OpenRouterError('request', `OpenRouter повернув помилку (код ${status}).`);
}
async function verifyApiKey(apiKey) {
    const response = await safeFetch(`${API_BASE}/auth/key`, {
        headers: {
            Authorization: `Bearer ${apiKey}`
        }
    });
    if (!response.ok) throw errorFromStatus(response.status);
    return true;
}
function chatHeaders(apiKey) {
    return {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': ("TURBOPACK compile-time truthy", 1) ? window.location.origin : "TURBOPACK unreachable",
        'X-Title': 'Blackboard AI'
    };
}
async function readErrorMessage(response) {
    try {
        const data = await response.json();
        const message = data?.error?.message;
        return typeof message === 'string' ? message : null;
    } catch  {
        return null;
    }
}
async function testModel(apiKey, model) {
    const started = performance.now();
    const response = await safeFetch(`${API_BASE}/chat/completions`, {
        method: 'POST',
        headers: chatHeaders(apiKey),
        body: JSON.stringify({
            model,
            max_tokens: 20,
            messages: [
                {
                    role: 'user',
                    content: 'Відповідай одним словом: Привіт'
                }
            ]
        })
    });
    if (!response.ok) {
        if (response.status === 404 || response.status === 400) {
            const detail = await readErrorMessage(response);
            throw new OpenRouterError('request', `Модель недоступна${detail ? `: ${detail}` : '.'}`);
        }
        throw errorFromStatus(response.status);
    }
    const data = await response.json();
    if (data?.error) {
        throw new OpenRouterError('request', `Модель повернула помилку: ${data.error.message ?? 'невідома помилка'}`);
    }
    const content = data?.choices?.[0]?.message?.content;
    if (typeof content !== 'string' || !content.trim()) {
        throw new OpenRouterError('request', 'Модель відповіла порожнім повідомленням.');
    }
    return {
        reply: content.trim(),
        ms: Math.round(performance.now() - started)
    };
}
async function requestExplanation({ apiKey, model, subjectName, level, question, chosenIndex }) {
    const letters = [
        'A',
        'B',
        'C',
        'D'
    ];
    const optionsText = question.options.map((o, i)=>`${letters[i]}) ${o}`).join('\n');
    const isCorrect = chosenIndex === question.answer;
    const response = await safeFetch(`${API_BASE}/chat/completions`, {
        method: 'POST',
        headers: chatHeaders(apiKey),
        body: JSON.stringify({
            model,
            temperature: 0.4,
            max_tokens: 450,
            messages: [
                {
                    role: 'system',
                    content: 'Ти — доброзичливий AI-наставник для школярів. Відповідай українською мовою, коротко (3–5 речень), без markdown-заголовків. Пояснюй, чому правильна відповідь правильна, і за потреби — чому обраний учнем варіант хибний.'
                },
                {
                    role: 'user',
                    content: `Предмет: ${subjectName}\nТема: ${question.topicTitle}\nРівень складності: ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LEVEL_LABELS"][level]}\n\nЗавдання: ${question.text}\n${optionsText}\n\nПравильна відповідь: ${letters[question.answer]}\nУчень обрав: ${letters[chosenIndex]} (${isCorrect ? 'правильно' : 'помилково'})\n\nПоясни розв’язок відповідно до рівня складності: для легкого — дуже просто, з побутовим прикладом; для складного — глибше, із зв’язком із теорією.`
                }
            ]
        })
    });
    if (!response.ok) throw errorFromStatus(response.status);
    const data = await response.json();
    const content = data?.choices?.[0]?.message?.content;
    if (typeof content !== 'string' || !content.trim()) {
        throw new OpenRouterError('request', 'AI-наставник повернув порожню відповідь.');
    }
    return content.trim();
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/storage.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "pointsStore",
    ()=>pointsStore,
    "progressStore",
    ()=>progressStore,
    "settingsStore",
    ()=>settingsStore,
    "usePersistent",
    ()=>usePersistent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.3_@babel+core@7.2_462e5fb2f617f24ead8cc2c7afd5b03a/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
function createPersistentStore(key, initial) {
    let value = initial;
    let loaded = false;
    const listeners = new Set();
    const load = ()=>{
        if (loaded || ("TURBOPACK compile-time value", "object") === 'undefined') return;
        loaded = true;
        try {
            const raw = window.localStorage.getItem(key);
            if (raw !== null) {
                const parsed = JSON.parse(raw);
                value = typeof initial === 'object' && initial !== null ? {
                    ...initial,
                    ...parsed
                } : parsed;
            }
        } catch  {
            value = initial;
        }
    };
    return {
        get: ()=>{
            load();
            return value;
        },
        getServer: ()=>initial,
        set: (next)=>{
            load();
            value = typeof next === 'function' ? next(value) : next;
            try {
                window.localStorage.setItem(key, JSON.stringify(value));
            } catch  {
            // Storage may be unavailable (private mode); keep the in-memory value.
            }
            listeners.forEach((listener)=>listener());
        },
        subscribe: (listener)=>{
            listeners.add(listener);
            return ()=>listeners.delete(listener);
        }
    };
}
function usePersistent(store) {
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(store.subscribe, store.get, store.getServer);
}
_s(usePersistent, "FpwL93IKMLJZuQQXefVtWynbBPQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$2_462e5fb2f617f24ead8cc2c7afd5b03a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"]
    ];
});
const pointsStore = createPersistentStore('blackboard:points', 0);
const settingsStore = createPersistentStore('blackboard:settings', {
    apiKey: '',
    status: 'unknown',
    model: 'nvidia/nemotron-3.5-super-vl:free'
});
const progressStore = createPersistentStore('blackboard:progress', {
    unlocked: [],
    sessions: 0,
    subjects: []
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/types.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LEVEL_LABELS",
    ()=>LEVEL_LABELS
]);
const LEVEL_LABELS = {
    easy: 'Легкий',
    medium: 'Середній',
    hard: 'Складний'
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$4$2e$0$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tailwind-merge@3.4.0/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$4$2e$0$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);})()

//# sourceMappingURL=_0oo4mf4m1rki7._.js.map