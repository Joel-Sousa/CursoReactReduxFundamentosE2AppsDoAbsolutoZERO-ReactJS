"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/backend/config.ts":
/*!*******************************!*\
  !*** ./src/backend/config.ts ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase */ \"./node_modules/firebase/dist/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n\n\nif (!firebase__WEBPACK_IMPORTED_MODULE_0__[\"default\"].apps.length) {\n    firebase__WEBPACK_IMPORTED_MODULE_0__[\"default\"].initializeApp({\n        apiKey: \"AIzaSyDqj8Aiuf9ktdojJpYSRdx1gk0D3glLCM8\",\n        authDomain: \"next-crud-f5fdb.firebaseapp.com\",\n        projectId: \"next-crud-f5fdb\"\n    });\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (firebase__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYmFja2VuZC9jb25maWcudHMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQWtDO0FBQ047QUFFNUIsSUFBRyxDQUFDQSw0REFBb0IsRUFBQztJQUNyQkEsOERBQXNCLENBQUM7UUFDbkJJLE1BQU0sRUFBRUMseUNBQXdDO1FBQ2hERyxVQUFVLEVBQUVILGlDQUE0QztRQUN4REssU0FBUyxFQUFFTCxpQkFBMkM7S0FDekQsQ0FBQztDQUNMO0FBRUQsK0RBQWVMLGdEQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2JhY2tlbmQvY29uZmlnLnRzPzJmOWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICBmaXJlYmFzZSAgZnJvbSAnZmlyZWJhc2UnO1xuaW1wb3J0ICdmaXJlYmFzZS9maXJlc3RvcmUnO1xuXG5pZighZmlyZWJhc2UuYXBwcy5sZW5ndGgpe1xuICAgIGZpcmViYXNlLmluaXRpYWxpemVBcHAoe1xuICAgICAgICBhcGlLZXk6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZJUkVCQVNFX0FQSV9LRVksXG4gICAgICAgIGF1dGhEb21haW46IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZJUkVCQVNFX0FVVEhfRE9NQUlOLFxuICAgICAgICBwcm9qZWN0SWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZJUkVCQVNFX1BST0pFQ1RfSUQsXG4gICAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgZmlyZWJhc2U7ICAgICJdLCJuYW1lcyI6WyJmaXJlYmFzZSIsImFwcHMiLCJsZW5ndGgiLCJpbml0aWFsaXplQXBwIiwiYXBpS2V5IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0ZJUkVCQVNFX0FQSV9LRVkiLCJhdXRoRG9tYWluIiwiTkVYVF9QVUJMSUNfRklSRUJBU0VfQVVUSF9ET01BSU4iLCJwcm9qZWN0SWQiLCJORVhUX1BVQkxJQ19GSVJFQkFTRV9QUk9KRUNUX0lEIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/backend/config.ts\n"));

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _backend_db_ColecaoCliente__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../backend/db/ColecaoCliente */ \"./src/backend/db/ColecaoCliente.ts\");\n/* harmony import */ var _components_Botao__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Botao */ \"./src/components/Botao.tsx\");\n/* harmony import */ var _components_Formulario__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Formulario */ \"./src/components/Formulario.tsx\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout */ \"./src/components/Layout.tsx\");\n/* harmony import */ var _components_Tabela__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Tabela */ \"./src/components/Tabela.tsx\");\n/* harmony import */ var _core_Cliente__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/Cliente */ \"./src/core/Cliente.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Home() {\n    var clienteSelecionado = function clienteSelecionado(cliente) {\n        setCliente(cliente);\n        setVisivel(\"form\");\n    };\n    var clienteExcluido = function clienteExcluido(cliente) {\n        console.log(\"Excluir...\", cliente.nome);\n    };\n    var salvarCliente = function salvarCliente(cliente) {\n        console.log(cliente);\n        setVisivel(\"tabela\");\n    };\n    var novoCliente = function novoCliente() {\n        setCliente(_core_Cliente__WEBPACK_IMPORTED_MODULE_7__[\"default\"].vazio);\n        setVisivel(\"form\");\n    };\n    _s();\n    var repo = new _backend_db_ColecaoCliente__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"tabela\"), visivel = ref[0], setVisivel = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_core_Cliente__WEBPACK_IMPORTED_MODULE_7__[\"default\"].vazio()), cliente = ref1[0], setCliente = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), clientes = ref2[0], setClientes = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        repo.obterTodos().then(setClientes);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center items-center h-screen\\n            bg-gradient-to-r from-blue-500 to-purple-600\\n           text-white\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            titulo: \"Cadastro Simples\",\n            children: visivel === \"tabela\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-end\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Botao__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            cor: \"green\",\n                            className: \"mb-4\",\n                            onClick: novoCliente,\n                            children: \"Novo Cliente\"\n                        }, void 0, false, {\n                            fileName: \"/home/joe/Projetos/ReactJS/next-crud/src/pages/index.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 33\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/joe/Projetos/ReactJS/next-crud/src/pages/index.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 29\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Tabela__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        clientes: clientes,\n                        clienteSelecionado: clienteSelecionado,\n                        clienteExcluido: clienteExcluido\n                    }, void 0, false, {\n                        fileName: \"/home/joe/Projetos/ReactJS/next-crud/src/pages/index.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 29\n                    }, this)\n                ]\n            }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Formulario__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                cliente: cliente,\n                clienteMudou: salvarCliente,\n                cancelado: function() {\n                    return setVisivel(\"tabela\");\n                }\n            }, void 0, false, {\n                fileName: \"/home/joe/Projetos/ReactJS/next-crud/src/pages/index.tsx\",\n                lineNumber: 62,\n                columnNumber: 25\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/joe/Projetos/ReactJS/next-crud/src/pages/index.tsx\",\n            lineNumber: 45,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/joe/Projetos/ReactJS/next-crud/src/pages/index.tsx\",\n        lineNumber: 41,\n        columnNumber: 9\n    }, this);\n};\n_s(Home, \"f+/36jVM0ePUcvOj1Bu62OlVEqU=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQTRDO0FBQ2M7QUFDbEI7QUFDVTtBQUNSO0FBQ0E7QUFDSjtBQUd2QixTQUFTUSxJQUFJLEdBQUc7UUFXbEJDLGtCQUFrQixHQUEzQixTQUFTQSxrQkFBa0IsQ0FBQ0MsT0FBZ0IsRUFBRTtRQUMxQ0MsVUFBVSxDQUFDRCxPQUFPLENBQUMsQ0FBQztRQUNwQkUsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQ3RCO1FBRVFDLGVBQWUsR0FBeEIsU0FBU0EsZUFBZSxDQUFDSCxPQUFnQixFQUFFO1FBQ3ZDSSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxZQUFZLEVBQUVMLE9BQU8sQ0FBQ00sSUFBSSxDQUFDLENBQUM7S0FDM0M7UUFHUUMsYUFBYSxHQUF0QixTQUFTQSxhQUFhLENBQUNQLE9BQWdCLEVBQUM7UUFDcENJLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTCxPQUFPLENBQUMsQ0FBQztRQUNyQkUsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQ3hCO1FBRVFNLFdBQVcsR0FBcEIsU0FBU0EsV0FBVyxHQUFFO1FBQ2xCUCxVQUFVLENBQUNKLDJEQUFhLENBQUM7UUFDekJLLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUN0Qjs7SUEzQkQsSUFBTVEsSUFBSSxHQUF1QixJQUFJbEIsa0VBQWMsRUFBRTtJQUNyRCxJQUE4QkQsR0FBcUMsR0FBckNBLCtDQUFRLENBQW9CLFFBQVEsQ0FBQyxFQUE1RG9CLE9BQU8sR0FBZ0JwQixHQUFxQyxHQUFyRCxFQUFFVyxVQUFVLEdBQUlYLEdBQXFDLEdBQXpDO0lBQzFCLElBQThCQSxJQUFrQyxHQUFsQ0EsK0NBQVEsQ0FBVU0sMkRBQWEsRUFBRSxDQUFDLEVBQXpERyxPQUFPLEdBQWdCVCxJQUFrQyxHQUFsRCxFQUFFVSxVQUFVLEdBQUlWLElBQWtDLEdBQXRDO0lBQzFCLElBQWdDQSxJQUF1QixHQUF2QkEsK0NBQVEsQ0FBWSxFQUFFLENBQUMsRUFBaERxQixRQUFRLEdBQWlCckIsSUFBdUIsR0FBeEMsRUFBRXNCLFdBQVcsR0FBSXRCLElBQXVCLEdBQTNCO0lBRTVCRCxnREFBUyxDQUFDLFdBQUs7UUFDWG9CLElBQUksQ0FBQ0ksVUFBVSxFQUFFLENBQUNDLElBQUksQ0FBQ0YsV0FBVyxDQUFDO0tBQ3RDLEVBQUMsRUFBRSxDQUFDO0lBcUJMLHFCQUNJLDhEQUFDRyxLQUFHO1FBQUNDLFNBQVMsRUFDVCw0SEFFUTtrQkFDVCw0RUFBQ3RCLDBEQUFNO1lBQUN1QixNQUFNLEVBQUMsa0JBQWtCO3NCQUM1QixPQUFRLEtBQUssUUFBUSxpQkFFZDs7a0NBQ0ksOERBQUNGLEtBQUc7d0JBQUNDLFNBQVMsRUFBQyxrQkFBa0I7a0NBQzdCLDRFQUFDeEIseURBQUs7NEJBQUMwQixHQUFHLEVBQUMsT0FBTzs0QkFBQ0YsU0FBUyxFQUFDLE1BQU07NEJBQ25DRyxPQUFPLEVBQUVaLFdBQVc7c0NBQUUsY0FDTjs7Ozs7Z0NBQVE7Ozs7OzRCQUN0QjtrQ0FDTiw4REFBQ1osMERBQU07d0JBQUNnQixRQUFRLEVBQUVBLFFBQVE7d0JBQ3RCYixrQkFBa0IsRUFBRUEsa0JBQWtCO3dCQUN0Q0ksZUFBZSxFQUFFQSxlQUFlOzs7Ozs0QkFDbEM7OzRCQUNILGlCQUlILDhEQUFDVCw4REFBVTtnQkFDWE0sT0FBTyxFQUFFQSxPQUFPO2dCQUNoQnFCLFlBQVksRUFBRWQsYUFBYTtnQkFDM0JlLFNBQVMsRUFBRTsyQkFBTXBCLFVBQVUsQ0FBQyxRQUFRLENBQUM7aUJBQUE7Ozs7O29CQUNuQzs7Ozs7Z0JBRUw7Ozs7O1lBQ1AsQ0FDVDtDQUNKO0dBN0R1QkosSUFBSTtBQUFKQSxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ29sZWNhb0NsaWVudGUgZnJvbSBcIi4uL2JhY2tlbmQvZGIvQ29sZWNhb0NsaWVudGVcIjtcbmltcG9ydCBCb3RhbyBmcm9tIFwiLi4vY29tcG9uZW50cy9Cb3Rhb1wiO1xuaW1wb3J0IEZvcm11bGFyaW8gZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9ybXVsYXJpb1wiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBUYWJlbGEgZnJvbSBcIi4uL2NvbXBvbmVudHMvVGFiZWxhXCI7XG5pbXBvcnQgQ2xpZW50ZSBmcm9tIFwiLi4vY29yZS9DbGllbnRlXCI7XG5pbXBvcnQgQ2xpZW50ZVJlcG9zaXRvcmlvIGZyb20gJy4uL2NvcmUvQ2xpZW50ZVJlcG9zaXRvcmlvJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICAgIFxuICAgIGNvbnN0IHJlcG86IENsaWVudGVSZXBvc2l0b3JpbyA9IG5ldyBDb2xlY2FvQ2xpZW50ZSgpO1xuICAgIGNvbnN0IFt2aXNpdmVsLCBzZXRWaXNpdmVsXSA9IHVzZVN0YXRlPCd0YWJlbGEnIHwgJ2Zvcm0nPigndGFiZWxhJyk7XG4gICAgY29uc3QgW2NsaWVudGUsIHNldENsaWVudGVdID0gdXNlU3RhdGU8Q2xpZW50ZT4oQ2xpZW50ZS52YXppbygpKTtcbiAgICBjb25zdCBbY2xpZW50ZXMsIHNldENsaWVudGVzXSA9IHVzZVN0YXRlPENsaWVudGVbXT4oW10pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+e1xuICAgICAgICByZXBvLm9idGVyVG9kb3MoKS50aGVuKHNldENsaWVudGVzKVxuICAgIH0sW10pXG4gICAgXG4gICAgZnVuY3Rpb24gY2xpZW50ZVNlbGVjaW9uYWRvKGNsaWVudGU6IENsaWVudGUpIHtcbiAgICAgICAgc2V0Q2xpZW50ZShjbGllbnRlKTtcbiAgICAgICAgc2V0VmlzaXZlbCgnZm9ybScpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsaWVudGVFeGNsdWlkbyhjbGllbnRlOiBDbGllbnRlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRXhjbHVpci4uLlwiLCBjbGllbnRlLm5vbWUpO1xuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gc2FsdmFyQ2xpZW50ZShjbGllbnRlOiBDbGllbnRlKXtcbiAgICAgICAgY29uc29sZS5sb2coY2xpZW50ZSk7XG4gICAgICAgIHNldFZpc2l2ZWwoJ3RhYmVsYScpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG5vdm9DbGllbnRlKCl7XG4gICAgICAgIHNldENsaWVudGUoQ2xpZW50ZS52YXppbylcbiAgICAgICAgc2V0VmlzaXZlbCgnZm9ybScpO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XG4gICAgICAgICAgICBgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgaC1zY3JlZW5cbiAgICAgICAgICAgIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1ibHVlLTUwMCB0by1wdXJwbGUtNjAwXG4gICAgICAgICAgIHRleHQtd2hpdGVgfT5cbiAgICAgICAgICAgIDxMYXlvdXQgdGl0dWxvPSdDYWRhc3RybyBTaW1wbGVzJyA+XG4gICAgICAgICAgICAgICAgeyh2aXNpdmVsID09PSAndGFiZWxhJykgP1xuICAgICAgICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktZW5kJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJvdGFvIGNvcj0nZ3JlZW4nIGNsYXNzTmFtZT0nbWItNCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17bm92b0NsaWVudGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTm92byBDbGllbnRlPC9Cb3Rhbz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiZWxhIGNsaWVudGVzPXtjbGllbnRlc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpZW50ZVNlbGVjaW9uYWRvPXtjbGllbnRlU2VsZWNpb25hZG99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWVudGVFeGNsdWlkbz17Y2xpZW50ZUV4Y2x1aWRvfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cblxuICAgICAgICAgICAgICAgICAgICApIDpcbiAgICAgICAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm11bGFyaW8gXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGllbnRlPXtjbGllbnRlfSBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWVudGVNdWRvdT17c2FsdmFyQ2xpZW50ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbGFkbz17KCkgPT4gc2V0VmlzaXZlbCgndGFiZWxhJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNvbGVjYW9DbGllbnRlIiwiQm90YW8iLCJGb3JtdWxhcmlvIiwiTGF5b3V0IiwiVGFiZWxhIiwiQ2xpZW50ZSIsIkhvbWUiLCJjbGllbnRlU2VsZWNpb25hZG8iLCJjbGllbnRlIiwic2V0Q2xpZW50ZSIsInNldFZpc2l2ZWwiLCJjbGllbnRlRXhjbHVpZG8iLCJjb25zb2xlIiwibG9nIiwibm9tZSIsInNhbHZhckNsaWVudGUiLCJub3ZvQ2xpZW50ZSIsInZhemlvIiwicmVwbyIsInZpc2l2ZWwiLCJjbGllbnRlcyIsInNldENsaWVudGVzIiwib2J0ZXJUb2RvcyIsInRoZW4iLCJkaXYiLCJjbGFzc05hbWUiLCJ0aXR1bG8iLCJjb3IiLCJvbkNsaWNrIiwiY2xpZW50ZU11ZG91IiwiY2FuY2VsYWRvIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});