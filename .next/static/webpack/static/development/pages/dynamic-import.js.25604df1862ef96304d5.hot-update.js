webpackHotUpdate("static/development/pages/dynamic-import.js",{

/***/ "./pages/dynamic-import.jsx":
/*!**********************************!*\
  !*** ./pages/dynamic-import.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next-server/dist/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/venjeedi/CodeRepos/NextRepos/next-js-demo/pages/dynamic-import.jsx";



var HelloBundle = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()({
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
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, props.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "lead",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, "Below components are dynamically imported... Refer the", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "https://nextjs.org/docs#with-multiple-modules-at-once",
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, "Dynamic import examples"), "on Next JS"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-2911086871",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2911086871",
      __self: this
    }, "div.jsx-2911086871{border:1px dashed #eee;padding:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92ZW5qZWVkaS9Db2RlUmVwb3MvTmV4dFJlcG9zL25leHQtanMtZGVtby9wYWdlcy9keW5hbWljLWltcG9ydC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEJzQixBQUdzQyx1QkFDVixhQUNmIiwiZmlsZSI6Ii9Vc2Vycy92ZW5qZWVkaS9Db2RlUmVwb3MvTmV4dFJlcG9zL25leHQtanMtZGVtby9wYWdlcy9keW5hbWljLWltcG9ydC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XG5cbmNvbnN0IEhlbGxvQnVuZGxlID0gZHluYW1pYyh7XG4gIG1vZHVsZXM6ICgpID0+IHtcbiAgICBjb25zdCBjb21wb25lbnRzID0ge1xuICAgICAgSGVsbG8xOiAoKSA9PlxuICAgICAgICBpbXBvcnQoXCIuLi9jb21wb25lbnRzL2R5bmFtaWMvaGVsbG8xXCIpLnRoZW4obW9kID0+IG1vZC5IZWxsbzEpLFxuICAgICAgSGVsbG8yOiAoKSA9PlxuICAgICAgICBpbXBvcnQoXCIuLi9jb21wb25lbnRzL2R5bmFtaWMvaGVsbG8yXCIpLnRoZW4obW9kID0+IG1vZC5IZWxsbzIpXG4gICAgfTtcblxuICAgIGNvbnNvbGUubG9nKFwiY29tcG9uZW50cyA6IFwiLCBjb21wb25lbnRzKTtcblxuICAgIHJldHVybiBjb21wb25lbnRzO1xuICB9LFxuICByZW5kZXI6IChwcm9wcywgeyBIZWxsbzEsIEhlbGxvMiB9KSA9PiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmljaW5nLWhlYWRlciBweC0zIHB5LTMgcHQtbWQtNSBwYi1tZC00IG14LWF1dG8gdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgPGgxPntwcm9wcy50aXRsZX08L2gxPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJsZWFkXCI+XG4gICAgICAgICAgQmVsb3cgY29tcG9uZW50cyBhcmUgZHluYW1pY2FsbHkgaW1wb3J0ZWQuLi4gUmVmZXIgdGhlXG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL25leHRqcy5vcmcvZG9jcyN3aXRoLW11bHRpcGxlLW1vZHVsZXMtYXQtb25jZVwiXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIER5bmFtaWMgaW1wb3J0IGV4YW1wbGVzXG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIG9uIE5leHQgSlNcbiAgICAgICAgPC9wPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IGRhc2hlZCAjZWVlO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICA8SGVsbG8xIC8+XG4gICAgICAgICAgPEhlbGxvMiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gIClcbn0pO1xuXG5mdW5jdGlvbiBEeW5hbWljQnVuZGxlKCkge1xuICByZXR1cm4gPEhlbGxvQnVuZGxlIHRpdGxlPVwiRHluYW1pYyBJbXBvcnRcIiAvPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRHluYW1pY0J1bmRsZTtcbiJdfQ== */\n/*@ sourceURL=/Users/venjeedi/CodeRepos/NextRepos/next-js-demo/pages/dynamic-import.jsx */"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Hello1, {
      className: "jsx-2911086871",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Hello2, {
      className: "jsx-2911086871",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }))));
  },
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../components/dynamic/hello1 */ "./components/dynamic/hello1.jsx"), /*require.resolve*/(/*! ../components/dynamic/hello2 */ "./components/dynamic/hello2.jsx")];
    },
    modules: ["../components/dynamic/hello1", "../components/dynamic/hello2"]
  }
});

function DynamicBundle() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HelloBundle, {
    title: "Dynamic Import",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  });
}

/* harmony default export */ __webpack_exports__["default"] = (DynamicBundle);

/***/ })

})
//# sourceMappingURL=dynamic-import.js.25604df1862ef96304d5.hot-update.js.map