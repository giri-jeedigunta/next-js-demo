webpackHotUpdate("static/development/pages/axios-fetch.js",{

/***/ "./pages/axios-fetch.jsx":
/*!*******************************!*\
  !*** ./pages/axios-fetch.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_backToHome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/backToHome */ "./components/backToHome.jsx");







var _jsxFileName = "/Users/venjeedi/CodeRepos/NextRepos/next-js-demo/pages/axios-fetch.jsx";





var UsersListWithAxios =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(UsersListWithAxios, _Component);

  function UsersListWithAxios() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, UsersListWithAxios);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(UsersListWithAxios).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(UsersListWithAxios, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_backToHome__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        className: "display-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, "Axios Fetch"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "lead",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, "The below data is fetched from", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "https://reqres.in/",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, "https://reqres.in/"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }), "using Axios Get and", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "https://nextjs.org/docs#fetching-data-and-component-lifecycle",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, "getInitialProps"), ".")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("table", {
        className: "table",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("thead", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("th", {
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "#"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("th", {
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "Full name"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("th", {
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, "Email"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("tbody", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, this.props.userList.map(function (e) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("tr", {
          key: e.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("th", {
          scope: "row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: this
        }, e.id), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("td", {
          className: "jsx-3996308174",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
          src: e.avatar,
          className: "jsx-3996308174",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
          id: "3996308174",
          __self: this
        }, "img.jsx-3996308174{width:45px;height:45px;display:inline-block;margin-right:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92ZW5qZWVkaS9Db2RlUmVwb3MvTmV4dFJlcG9zL25leHQtanMtZGVtby9wYWdlcy9heGlvcy1mZXRjaC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0Q4QixBQUdrQyxXQUNDLFlBQ1MscUJBQ0gsa0JBQ3BCIiwiZmlsZSI6Ii9Vc2Vycy92ZW5qZWVkaS9Db2RlUmVwb3MvTmV4dFJlcG9zL25leHQtanMtZGVtby9wYWdlcy9heGlvcy1mZXRjaC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgQmFja1RvSG9tZSBmcm9tIFwiLi4vY29tcG9uZW50cy9iYWNrVG9Ib21lXCI7XG5cbmNsYXNzIFVzZXJzTGlzdFdpdGhBeGlvcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKSB7XG4gICAgY29uc3QgeyBkYXRhOiB1c2VyRGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KFxuICAgICAgXCJodHRwczovL3JlcXJlcy5pbi9hcGkvdXNlcnM/cGVyX3BhZ2U9MTJcIlxuICAgICk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgdXNlckxpc3Q6IHVzZXJEYXRhLmRhdGFcbiAgICB9O1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaWNpbmctaGVhZGVyIHB4LTMgcHktMyBwdC1tZC01IHBiLW1kLTQgbXgtYXV0byB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgIDxCYWNrVG9Ib21lIC8+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImRpc3BsYXktNFwiPkF4aW9zIEZldGNoPC9oMT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsZWFkXCI+XG4gICAgICAgICAgICBUaGUgYmVsb3cgZGF0YSBpcyBmZXRjaGVkIGZyb21cbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3JlcXJlcy5pbi9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgaHR0cHM6Ly9yZXFyZXMuaW4vXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIHVzaW5nIEF4aW9zIEdldCBhbmRcbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL25leHRqcy5vcmcvZG9jcyNmZXRjaGluZy1kYXRhLWFuZC1jb21wb25lbnQtbGlmZWN5Y2xlXCJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgZ2V0SW5pdGlhbFByb3BzXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAuXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlXCI+XG4gICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj4jPC90aD5cbiAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+RnVsbCBuYW1lPC90aD5cbiAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+RW1haWw8L3RoPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLnVzZXJMaXN0Lm1hcChlID0+IChcbiAgICAgICAgICAgICAgPHRyIGtleT17ZS5pZH0+XG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwicm93XCI+e2UuaWR9PC90aD5cbiAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZS5hdmF0YXJ9IC8+XG4gICAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQ1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgICAgICAgIHtlLmZpcnN0X25hbWUgKyBcIiBcIiArIGUubGFzdF9uYW1lfVxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPntlLmVtYWlsfTwvdGQ+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJzTGlzdFdpdGhBeGlvcztcbiJdfQ== */\n/*@ sourceURL=/Users/venjeedi/CodeRepos/NextRepos/next-js-demo/pages/axios-fetch.jsx */"), e.first_name + " " + e.last_name), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          },
          __self: this
        }, e.email));
      }))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _ref, userData;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_9___default.a.get("https://reqres.in/api/users?per_page=12");

              case 2:
                _ref = _context.sent;
                userData = _ref.data;
                return _context.abrupt("return", {
                  userList: userData.data
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return UsersListWithAxios;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (UsersListWithAxios);

/***/ })

})
//# sourceMappingURL=axios-fetch.js.f0cfffb1547c6f204db9.hot-update.js.map