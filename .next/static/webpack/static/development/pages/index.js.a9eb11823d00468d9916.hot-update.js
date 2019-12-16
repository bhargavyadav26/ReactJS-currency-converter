webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Home.js":
/*!****************************!*\
  !*** ./components/Home.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");







var _jsxFileName = "D:\\my-projects\\civil\\components\\Home.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;







var Home =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Home, _React$Component);

  function Home(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Home);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Home).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "firstDD", function (event) {
      console.log("firstDD");
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "secondDD", function (event) {
      console.log("secondDD");
    });

    _this.state = {
      totalData: [],
      options: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Home, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      console.log("header");
      var totalData = this.state.totalData;
      var options = [];
      axios__WEBPACK_IMPORTED_MODULE_11___default.a.get('https://restcountries.eu/rest/v2/all').then(function (_ref) {
        var data = _ref.data;

        _this2.setState({
          totalData: data
        });

        data.forEach(function (country, i) {
          options.push({
            key: i,
            text: country.name + " " + "(" + country.currencies[0].code + ")",
            value: country.currencies[0].code
          });
        });

        _this2.setState({
          options: options
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      console.log("home");
      return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Segment"].Group, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Segment"], {
        clearing: true,
        inverted: true,
        color: "violet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Grid"].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Grid"].Column, {
        textAlign: "center",
        width: 7,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Dropdown"], {
        placeholder: "select",
        options: this.state.options,
        selection: true,
        clearable: true,
        search: true,
        onChange: this.firstDD,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Grid"].Column, {
        textAlign: "center",
        verticalAlign: "middle",
        width: 2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_12__["FaExchangeAlt"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Grid"].Column, {
        textAlign: "center",
        width: 7,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Dropdown"], {
        placeholder: "select",
        options: this.state.options,
        selection: true,
        clearable: true,
        search: true,
        onChange: this.secondDD,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      })))))));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

var options = [{
  key: 1,
  text: 'Feet',
  value: 1
}, {
  key: 2,
  text: 'Meter',
  value: 2
}, {
  key: 3,
  text: 'Inch',
  value: 3
}];
var mapDispatchToProps = {};
/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_8__["withRouter"])(Home));

/***/ })

})
//# sourceMappingURL=index.js.a9eb11823d00468d9916.hot-update.js.map