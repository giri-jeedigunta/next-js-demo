webpackHotUpdate("static/development/pages/dynamic-import.js",{

/***/ "./pages/dynamic-import.jsx":
/*!**********************************!*\
  !*** ./pages/dynamic-import.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next-server/dist/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/venjeedi/CodeRepos/NextRepos/next-js-demo/pages/dynamic-import.jsx";


var HelloBundle = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()({
  modules: function modules() {
    var components = {
      Hello1: function Hello1() {
        return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../components/dynamic/hello1 */ "./components/dynamic/hello1.jsx"));
      },
      Hello2: function Hello2() {
        return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ../components/dynamic/hello2 */ "./components/dynamic/hello2.jsx"));
      }
    };
    return components;
  },
  render: function render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Hello1, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Hello2, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }));
  },
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../components/dynamic/hello1 */ "./components/dynamic/hello1.jsx"), /*require.resolve*/(/*! ../components/dynamic/hello2 */ "./components/dynamic/hello2.jsx")];
    },
    modules: ["../components/dynamic/hello1", "../components/dynamic/hello2"]
  }
});

function DynamicBundle() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HelloBundle, {
    title: "Dynamic Bundle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  });
}

/* harmony default export */ __webpack_exports__["default"] = (DynamicBundle);

/***/ })

})
//# sourceMappingURL=dynamic-import.js.5a59564f7a0ad601b94d.hot-update.js.map