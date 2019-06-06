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
      x: function x() {
        return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../components/dynamic/hello1 */ "./components/dynamic/hello1.jsx"));
      },
      y: function y() {
        return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ../components/dynamic/hello2 */ "./components/dynamic/hello2.jsx"));
      }
    };
    return components;
  },
  render: function render(props, _ref) {
    var x = _ref.x,
        y = _ref.y;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, props.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("x", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("y", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
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

function DynamicImport() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HelloBundle, {
    title: "Dynamic Bundle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  });
}

/* harmony default export */ __webpack_exports__["default"] = (DynamicImport);

/***/ })

})
//# sourceMappingURL=dynamic-import.js.af3cce87cb6c301cf49e.hot-update.js.map