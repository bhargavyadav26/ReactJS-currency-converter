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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "firstDD", function (event, _ref) {
      var value = _ref.value;
      var _this$state = _this.state,
          firstCurr = _this$state.firstCurr,
          secondCurr = _this$state.secondCurr,
          date = _this$state.date;
      console.log("firstDD", event.target, {
        value: value
      });

      _this.setState({
        firstCurr: value
      });

      if ({
        value: value
      } !== '' && secondCurr !== '') {
        axios__WEBPACK_IMPORTED_MODULE_11___default.a.get("https://api.exchangeratesapi.io/latest?symbols=".concat(secondCurr, "&base=").concat(value)).then(function (res) {
          console.log("res ", res);

          _this.setState({
            exchangeData: res.data
          });
        })["catch"](function (error) {
          console.log(error);
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "secondDD", function (event, _ref2) {
      var value = _ref2.value;
      var _this$state2 = _this.state,
          firstCurr = _this$state2.firstCurr,
          secondCurr = _this$state2.secondCurr,
          date = _this$state2.date;
      console.log("secondDD", value);

      _this.setState({
        secondCurr: value
      });

      if (firstCurr !== '' && {
        value: value
      } !== '') {
        axios__WEBPACK_IMPORTED_MODULE_11___default.a.get("https://api.ratesapi.io/api/latest?symbols=".concat(value, "&base=").concat(firstCurr)).then(function (res) {
          console.log("res ", res);

          _this.setState({
            exchangeData: res.data
          });
        })["catch"](function (error) {
          console.log(error);
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "firstValue", function (event) {
      console.log("firstValue", event.target.value);

      _this.setState({
        firstValue: event.target.value
      });

      var calc2 = event.target.value * _this.state.exchangeData.rates[_this.state.secondCurr];
      console.log("calc2 ", calc2);

      _this.setState({
        secondValue: calc2
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "secondValue", function (event) {
      console.log("secondValue", event.target.value);

      _this.setState({
        secondValue: event.target.value
      });

      var calc1 = event.target.value / _this.state.exchangeData.rates[_this.state.secondCurr];
      console.log("calc1 ", calc1);

      _this.setState({
        firstValue: calc1
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onExchangeClick", function () {
      var _this$state3 = _this.state,
          firstCurr = _this$state3.firstCurr,
          secondCurr = _this$state3.secondCurr,
          firstValue = _this$state3.firstValue,
          secondValue = _this$state3.secondValue;
      var firstCurrConst = firstCurr;
      var secondCurrConst = secondCurr;
      var firstValueConst = firstValue;
      var secondValueConst = secondValue;

      _this.setState({
        firstCurr: secondCurrConst,
        secondCurr: firstCurrConst,
        firstValue: secondValueConst,
        secondValue: firstValueConst
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "moreConversions", function (x, y, multiplyValue) {
      console.log("x,y ", x, y, multiplyValue);
    });

    _this.state = {
      totalData: [],
      options: [],
      firstCurr: '',
      secondCurr: '',
      firstValue: 0,
      secondValue: 0,
      date: '',
      exchangeData: []
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
      var date = new Date();
      date.setDate(date.getDate() - 1);
      console.log("date ", date);
      date = date.toISOString().split('T')[0];
      console.log("after-date ", date);
      this.setState({
        date: date
      });
      axios__WEBPACK_IMPORTED_MODULE_11___default.a.get('https://restcountries.eu/rest/v2/all').then(function (_ref3) {
        var data = _ref3.data;

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
      var _this3 = this;

      var _this$state4 = this.state,
          firstCurr = _this$state4.firstCurr,
          secondCurr = _this$state4.secondCurr,
          exchangeData = _this$state4.exchangeData;
      console.log("home");
      return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Segment"].Group, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Segment"], {
        clearing: true,
        inverted: true,
        color: "violet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Grid"].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Grid"].Column, {
        textAlign: "center",
        width: 7,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Dropdown"], {
        placeholder: "select",
        options: this.state.options,
        selection: true,
        clearable: true,
        search: true,
        onChange: function onChange(e, _ref4) {
          var value = _ref4.value;
          return _this3.firstDD(e, {
            value: value
          });
        },
        value: this.state.firstCurr,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Grid"].Column, {
        textAlign: "center",
        verticalAlign: "middle",
        width: 2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        color: "violet",
        icon: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_12__["FaExchangeAlt"], {
        onClick: this.onExchangeClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Grid"].Column, {
        textAlign: "center",
        width: 7,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Dropdown"], {
        placeholder: "select",
        options: this.state.options,
        selection: true,
        clearable: true,
        search: true,
        onChange: this.secondDD,
        value: this.state.secondCurr,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Segment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Grid"].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Grid"].Column, {
        textAlign: "center",
        width: 7,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Input"], {
        onChange: this.firstValue,
        value: this.state.firstValue,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Grid"].Column, {
        textAlign: "center",
        verticalAlign: "middle",
        width: 2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        positive: true,
        icon: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_12__["FaExchangeAlt"], {
        onClick: this.onExchangeClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Grid"].Column, {
        textAlign: "center",
        width: 7,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Input"], {
        onChange: this.secondValue,
        value: this.state.secondValue,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        __self: this
      })))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Segment"].Group, {
        horizontal: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Segment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Header"], {
        attached: "top",
        as: "h3",
        textAlign: "center",
        block: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        },
        __self: this
      }, "Convert ", firstCurr, " to ", secondCurr), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Segment"], {
        attached: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
        divided: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Grid"].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Grid"].Column, {
        width: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Header"], {
        as: "h3",
        textAlign: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        __self: this
      }, firstCurr)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Grid"].Column, {
        width: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Header"], {
        as: "h3",
        textAlign: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        __self: this
      }, secondCurr))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Divider"], {
        fluid: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }), this.moreConversions(firstCurr, secondCurr, exchangeData.rates[this.state.secondCurr])))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Segment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Header"], {
        attached: "top",
        textAlign: "center",
        as: "h3",
        block: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        },
        __self: this
      }, "Convert ", secondCurr, " to ", firstCurr), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Segment"], {
        attached: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
        divided: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Grid"].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Grid"].Column, {
        width: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Header"], {
        as: "h3",
        textAlign: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        },
        __self: this
      }, secondCurr)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Grid"].Column, {
        width: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Header"], {
        as: "h3",
        textAlign: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        __self: this
      }, firstCurr))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Divider"], {
        fluid: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        },
        __self: this
      }), this.moreConversions(firstCurr, secondCurr, 1 / exchangeData.rates[this.state.secondCurr]))))));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

var mapDispatchToProps = {};
/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_8__["withRouter"])(Home));

/***/ })

})
//# sourceMappingURL=index.js.fb08db00173d3f9f0e9a.hot-update.js.map