/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client_link_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client/link/context */ \"@apollo/client/link/context\");\n/* harmony import */ var _apollo_client_link_context__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_link_context__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hot-toast */ \"react-hot-toast\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recoil */ \"recoil\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _apollo_client_link_subscriptions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client/link/subscriptions */ \"@apollo/client/link/subscriptions\");\n/* harmony import */ var _apollo_client_link_subscriptions__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_link_subscriptions__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _apollo_client_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @apollo/client/utilities */ \"@apollo/client/utilities\");\n/* harmony import */ var _apollo_client_utilities__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_utilities__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var graphql_ws__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! graphql-ws */ \"graphql-ws\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_3__, graphql_ws__WEBPACK_IMPORTED_MODULE_8__]);\n([react_hot_toast__WEBPACK_IMPORTED_MODULE_3__, graphql_ws__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    const authLink = (0,_apollo_client_link_context__WEBPACK_IMPORTED_MODULE_2__.setContext)((_, { headers  })=>{\n        return {\n            headers: {\n                ...headers,\n                authorization: localStorage.getItem(\"token\") ?? \"\"\n            }\n        };\n    });\n    const wsLink =  false ? 0 : null;\n    const httpLink = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.createHttpLink)({\n        uri: \"https://chat-server-db0l.onrender.com/graphql\"\n    });\n    const splitLink =  false ? 0 : authLink.concat(httpLink);\n    const client = new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloClient({\n        link: splitLink,\n        cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.InMemoryCache()\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloProvider, {\n        client: client,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recoil__WEBPACK_IMPORTED_MODULE_4__.RecoilRoot, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/Users/nabin/Desktop/chat-app-udemy-course/client/pages/_app.js\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.Toaster, {}, void 0, false, {\n                    fileName: \"/Users/nabin/Desktop/chat-app-udemy-course/client/pages/_app.js\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/nabin/Desktop/chat-app-udemy-course/client/pages/_app.js\",\n            lineNumber: 56,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/nabin/Desktop/chat-app-udemy-course/client/pages/_app.js\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFvRztBQUMzQztBQUNoQjtBQUNOO0FBQytCO0FBQ3BDO0FBQytCO0FBQ25CO0FBRTFDLFNBQVNXLE1BQU0sRUFBRUMsVUFBUyxFQUFFQyxVQUFTLEVBQUUsRUFBRTtJQUV2QyxNQUFNQyxXQUFXVCx1RUFBVUEsQ0FBQyxDQUFDVSxHQUFHLEVBQUVDLFFBQU8sRUFBRSxHQUFLO1FBQzlDLE9BQU87WUFDTEEsU0FBUztnQkFDUCxHQUFHQSxPQUFPO2dCQUNWQyxlQUFlQyxhQUFhQyxPQUFPLENBQUMsWUFBWTtZQUNsRDtRQUNGO0lBQ0Y7SUFFQSxNQUFNQyxTQUNKLE1BQTZCLEdBQ3pCLENBR0EsR0FFQSxJQUFJO0lBRVYsTUFBTUUsV0FBV3BCLDhEQUFjQSxDQUFDO1FBQzlCcUIsS0FBSztJQUNQO0lBRUEsTUFBTUMsWUFDSixNQUErQyxHQUMzQ3BCLENBU2dCa0IsR0FFaEJSLFNBQVNlLE1BQU0sQ0FBQ1AsU0FBUztJQUUvQixNQUFNUSxTQUFTLElBQUk5Qix3REFBWUEsQ0FBQztRQUM5QitCLE1BQU1QO1FBQ05RLE9BQU8sSUFBSTdCLHlEQUFhQTtJQUMxQjtJQUVBLHFCQUNFLDhEQUFDRiwwREFBY0E7UUFBQzZCLFFBQVFBO2tCQUN0Qiw0RUFBQ3ZCLDhDQUFVQTs7OEJBQ1QsOERBQUNLO29CQUFXLEdBQUdDLFNBQVM7Ozs7Ozs4QkFDeEIsOERBQUNQLG9EQUFPQTs7Ozs7Ozs7Ozs7Ozs7OztBQUloQjtBQUVBLGlFQUFlSyxLQUFLQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29tbWVudC1hcHAvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBvbGxvQ2xpZW50LCBBcG9sbG9Qcm92aWRlciwgY3JlYXRlSHR0cExpbmssIEluTWVtb3J5Q2FjaGUsIHNwbGl0IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuaW1wb3J0IHsgc2V0Q29udGV4dCB9IGZyb20gJ0BhcG9sbG8vY2xpZW50L2xpbmsvY29udGV4dCc7XG5pbXBvcnQgeyBUb2FzdGVyIH0gZnJvbSAncmVhY3QtaG90LXRvYXN0J1xuaW1wb3J0IHsgUmVjb2lsUm9vdCB9IGZyb20gJ3JlY29pbCdcbmltcG9ydCB7IEdyYXBoUUxXc0xpbmsgfSBmcm9tICdAYXBvbGxvL2NsaWVudC9saW5rL3N1YnNjcmlwdGlvbnMnO1xuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXG5pbXBvcnQgeyBnZXRNYWluRGVmaW5pdGlvbiB9IGZyb20gJ0BhcG9sbG8vY2xpZW50L3V0aWxpdGllcyc7XG5pbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tICdncmFwaHFsLXdzJztcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG5cbiAgY29uc3QgYXV0aExpbmsgPSBzZXRDb250ZXh0KChfLCB7IGhlYWRlcnMgfSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIC4uLmhlYWRlcnMsXG4gICAgICAgIGF1dGhvcml6YXRpb246IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpID8/IFwiXCIsXG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBjb25zdCB3c0xpbmsgPVxuICAgIHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCJcbiAgICAgID8gbmV3IEdyYXBoUUxXc0xpbmsoXG4gICAgICAgIGNyZWF0ZUNsaWVudCh7XG4gICAgICAgICAgdXJsOiAnd3M6Ly9jaGF0LXNlcnZlci1kYjBsLm9ucmVuZGVyLmNvbS9ncmFwaHFsJyxcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICAgIDogbnVsbDtcblxuICBjb25zdCBodHRwTGluayA9IGNyZWF0ZUh0dHBMaW5rKHtcbiAgICB1cmk6ICdodHRwczovL2NoYXQtc2VydmVyLWRiMGwub25yZW5kZXIuY29tL2dyYXBocWwnLFxuICB9KTtcblxuICBjb25zdCBzcGxpdExpbmsgPVxuICAgIHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd3NMaW5rICE9IG51bGxcbiAgICAgID8gc3BsaXQoXG4gICAgICAgICh7IHF1ZXJ5IH0pID0+IHtcbiAgICAgICAgICBjb25zdCBkZWYgPSBnZXRNYWluRGVmaW5pdGlvbihxdWVyeSk7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIGRlZi5raW5kID09PSBcIk9wZXJhdGlvbkRlZmluaXRpb25cIiAmJlxuICAgICAgICAgICAgZGVmLm9wZXJhdGlvbiA9PT0gXCJzdWJzY3JpcHRpb25cIlxuICAgICAgICAgICk7XG4gICAgICAgIH0sXG4gICAgICAgIHdzTGluayxcbiAgICAgICAgYXV0aExpbmsuY29uY2F0KGh0dHBMaW5rKSxcbiAgICAgIClcbiAgICAgIDogYXV0aExpbmsuY29uY2F0KGh0dHBMaW5rKTtcblxuICBjb25zdCBjbGllbnQgPSBuZXcgQXBvbGxvQ2xpZW50KHtcbiAgICBsaW5rOiBzcGxpdExpbmssXG4gICAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKCksXG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17Y2xpZW50fT5cbiAgICAgIDxSZWNvaWxSb290PlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgIDxUb2FzdGVyIC8+XG4gICAgICA8L1JlY29pbFJvb3Q+XG4gICAgPC9BcG9sbG9Qcm92aWRlcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIl0sIm5hbWVzIjpbIkFwb2xsb0NsaWVudCIsIkFwb2xsb1Byb3ZpZGVyIiwiY3JlYXRlSHR0cExpbmsiLCJJbk1lbW9yeUNhY2hlIiwic3BsaXQiLCJzZXRDb250ZXh0IiwiVG9hc3RlciIsIlJlY29pbFJvb3QiLCJHcmFwaFFMV3NMaW5rIiwiZ2V0TWFpbkRlZmluaXRpb24iLCJjcmVhdGVDbGllbnQiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImF1dGhMaW5rIiwiXyIsImhlYWRlcnMiLCJhdXRob3JpemF0aW9uIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIndzTGluayIsInVybCIsImh0dHBMaW5rIiwidXJpIiwic3BsaXRMaW5rIiwicXVlcnkiLCJkZWYiLCJraW5kIiwib3BlcmF0aW9uIiwiY29uY2F0IiwiY2xpZW50IiwibGluayIsImNhY2hlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client");

/***/ }),

/***/ "@apollo/client/link/context":
/*!**********************************************!*\
  !*** external "@apollo/client/link/context" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client/link/context");

/***/ }),

/***/ "@apollo/client/link/subscriptions":
/*!****************************************************!*\
  !*** external "@apollo/client/link/subscriptions" ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client/link/subscriptions");

/***/ }),

/***/ "@apollo/client/utilities":
/*!*******************************************!*\
  !*** external "@apollo/client/utilities" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client/utilities");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "recoil":
/*!*************************!*\
  !*** external "recoil" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("recoil");

/***/ }),

/***/ "graphql-ws":
/*!*****************************!*\
  !*** external "graphql-ws" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = import("graphql-ws");;

/***/ }),

/***/ "react-hot-toast":
/*!**********************************!*\
  !*** external "react-hot-toast" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-hot-toast");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();