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
        return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../components/dynamic/hello1 */ "./components/dynamic/hello1.jsx")).then(function (mod) {
          return mod.Hello1;
        });
      },
      Hello2: function Hello2() {
        return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ../components/dynamic/hello2 */ "./components/dynamic/hello2.jsx")).then(function (mod) {
          return mod.Hello2;
        });
      }
    };
    console.log("components : ", components);
    return components;
  },
  render: function render(props, _ref) {
    var Hello1 = _ref.Hello1,
        Hello2 = _ref.Hello2;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, props.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "lead",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, "Below components are dynamically imported...")));
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
    title: "Dynamic Import",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  });
}

/* harmony default export */ __webpack_exports__["default"] = (DynamicBundle);

/***/ })

})
//# sourceMappingURL=dynamic-import.js.27c71728bf9b78c0207a.hot-update.js.map