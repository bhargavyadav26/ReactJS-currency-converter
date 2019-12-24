module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ "./node_modules/semantic-ui-css/semantic.min.css");
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\my-projects\\currency-converter\\components\\Header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





class HeaderComp extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
  } // componentDidMount() {
  //     console.log("header");
  //     Axios.get('https://restcountries.eu/rest/v2/all').then(({ data }) => {
  //         this.setState({
  //             totalData: data
  //         });
  // })          
  // }


  render() {
    const {
      children
    } = this.props;
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Container"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], {
      inverted: true,
      attached: "top",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
      textAlign: "center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, "Currency Converter")), children);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (HeaderComp);

/***/ }),

/***/ "./components/Home.js":
/*!****************************!*\
  !*** ./components/Home.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "D:\\my-projects\\currency-converter\\components\\Home.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







class Home extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "firstDD", (event, {
      value
    }) => {
      const {
        firstCurr,
        secondCurr,
        date
      } = this.state;
      console.log("firstDD", event.target, {
        value
      });
      this.setState({
        firstCurr: value
      });

      if ({
        value
      } !== '' && secondCurr !== '') {
        axios__WEBPACK_IMPORTED_MODULE_5___default.a.get(`https://api.ratesapi.io/api/latest?symbols=${secondCurr}&base=${value}`).then(res => {
          console.log("res ", res);
          this.setState({
            exchangeData: res.data
          });
        }).catch(error => {
          console.log(error);
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "secondDD", (event, {
      value
    }) => {
      const {
        firstCurr,
        secondCurr,
        date
      } = this.state;
      console.log("secondDD", value);
      this.setState({
        secondCurr: value
      });

      if (firstCurr !== '' && {
        value
      } !== '') {
        axios__WEBPACK_IMPORTED_MODULE_5___default.a.get(`https://api.ratesapi.io/api/latest?symbols=${value}&base=${firstCurr}`).then(res => {
          console.log("res ", res);
          this.setState({
            exchangeData: res.data
          });
        }).catch(error => {
          console.log(error);
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "firstValue", event => {
      console.log("firstValue", event.target.value);
      this.setState({
        firstValue: event.target.value
      });
      const calc2 = event.target.value * this.state.exchangeData.rates[this.state.secondCurr];
      console.log("calc2 ", calc2);
      this.setState({
        secondValue: calc2
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "secondValue", event => {
      console.log("secondValue", event.target.value);
      this.setState({
        secondValue: event.target.value
      });
      const calc1 = event.target.value / this.state.exchangeData.rates[this.state.secondCurr];
      console.log("calc1 ", calc1);
      this.setState({
        firstValue: calc1
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onExchangeClick", () => {
      const {
        firstCurr,
        secondCurr,
        firstValue,
        secondValue
      } = this.state;
      this.setState({
        spinner: true
      });
      let firstCurrConst = firstCurr;
      let secondCurrConst = secondCurr;
      let firstValueConst = firstValue;
      let secondValueConst = secondValue;
      axios__WEBPACK_IMPORTED_MODULE_5___default.a.get(`https://api.ratesapi.io/api/latest?symbols=${firstCurr}&base=${secondCurr}`).then(res => {
        console.log("res ", res);
        this.setState({
          exchangeData: res.data,
          spinner: false
        });
      }).catch(error => {
        console.log(error);
      });
      this.setState({
        firstCurr: secondCurrConst,
        secondCurr: firstCurrConst,
        firstValue: secondValueConst,
        secondValue: firstValueConst
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "moreConversions", (x, y, multiplyValue) => {
      console.log("x,y ", x, y, multiplyValue);
      const num = [1, 5, 10, 25, 50, 100, 500, 1000, 5000, 10000];
      const loop = [];

      for (let i = 0; i < num.length; i++) {
        loop.push(__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"].Row, {
          textAlign: "center",
          key: i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 149
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"].Column, {
          width: 8,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 150
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Header"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 151
          },
          __self: this
        }, num[i], "  ", x)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"].Column, {
          width: 8,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 155
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Header"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 156
          },
          __self: this
        }, (num[i] * multiplyValue).toFixed(3)))));
      }

      return loop;
    });

    this.state = {
      totalData: [],
      options: [],
      firstCurr: '',
      secondCurr: '',
      firstValue: 0,
      secondValue: 0,
      date: '',
      exchangeData: [],
      spinner: false
    };
  }

  componentDidMount() {
    console.log("header");
    const {
      totalData
    } = this.state;
    const options = [];
    let date = new Date();
    date.setDate(date.getDate() - 1);
    console.log("date ", date);
    date = date.toISOString().split('T')[0];
    console.log("after-date ", date);
    this.setState({
      date
    });
    axios__WEBPACK_IMPORTED_MODULE_5___default.a.get('https://restcountries.eu/rest/v2/all').then(({
      data
    }) => {
      this.setState({
        totalData: data
      });
      data.forEach((country, i) => {
        options.push({
          key: i,
          text: country.name + " " + "(" + country.currencies[0].code + ")",
          value: country.currencies[0].code
        });
      });
      this.setState({
        options
      });
    });
  }

  render() {
    const {
      firstCurr,
      secondCurr,
      exchangeData
    } = this.state;
    console.log("home");
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Container"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Segment"].Group, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Segment"], {
      clearing: true,
      inverted: true,
      color: "violet",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"].Row, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"].Column, {
      textAlign: "center",
      width: 7,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Dropdown"], {
      placeholder: "select",
      options: this.state.options,
      selection: true,
      clearable: true,
      search: true,
      onChange: (e, {
        value
      }) => this.firstDD(e, {
        value
      }),
      value: this.state.firstCurr,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176
      },
      __self: this
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"].Column, {
      textAlign: "center",
      verticalAlign: "middle",
      width: 2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178
      },
      __self: this
    }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__["FaExchangeAlt"], {
      onClick: this.onExchangeClick,
      style: {
        cursor: "pointer"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179
      },
      __self: this
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"].Column, {
      textAlign: "center",
      width: 7,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Dropdown"], {
      placeholder: "select",
      options: this.state.options,
      selection: true,
      clearable: true,
      search: true,
      onChange: this.secondDD,
      value: this.state.secondCurr,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182
      },
      __self: this
    }))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Segment"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"].Row, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"].Column, {
      textAlign: "center",
      width: 7,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Input"], {
      onChange: this.firstValue,
      value: this.state.firstValue,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191
      },
      __self: this
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"].Column, {
      textAlign: "center",
      verticalAlign: "middle",
      width: 2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193
      },
      __self: this
    }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__["FaExchangeAlt"], {
      onClick: this.onExchangeClick,
      style: {
        cursor: "pointer"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194
      },
      __self: this
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"].Column, {
      textAlign: "center",
      width: 7,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Input"], {
      onChange: this.secondValue,
      value: this.state.secondValue,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197
      },
      __self: this
    })))))), this.state.spinner ? __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Segment"], {
      loading: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205
      },
      __self: this
    }) : __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Segment"].Group, {
      horizontal: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Segment"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208
      },
      __self: this
    }, firstCurr !== '' && secondCurr !== '' ? __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Header"], {
      attached: "top",
      as: "h3",
      textAlign: "center",
      block: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212
      },
      __self: this
    }, "Convert ", firstCurr, " to ", secondCurr) : __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Header"], {
      attached: "top",
      as: "h3",
      textAlign: "center",
      block: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217
      },
      __self: this
    }, "Select any 2 currencies"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Segment"], {
      attached: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 221
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
      divided: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"].Row, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"].Column, {
      width: 8,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Header"], {
      as: "h3",
      textAlign: "center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 226
      },
      __self: this
    }, firstCurr)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"].Column, {
      width: 8,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 230
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Header"], {
      as: "h3",
      textAlign: "center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 231
      },
      __self: this
    }, secondCurr))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Divider"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 236
      },
      __self: this
    }), exchangeData.rates ? this.moreConversions(firstCurr, secondCurr, exchangeData.rates[this.state.secondCurr]) : null))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Segment"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 248
      },
      __self: this
    }, firstCurr !== '' && secondCurr !== '' ? __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Header"], {
      attached: "top",
      as: "h3",
      textAlign: "center",
      block: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 252
      },
      __self: this
    }, "Convert ", firstCurr, " to ", secondCurr) : __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Header"], {
      attached: "top",
      as: "h3",
      textAlign: "center",
      block: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 257
      },
      __self: this
    }, "Select any 2 currencies"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Segment"], {
      attached: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 261
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
      divided: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 262
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"].Row, {
      textAlign: "center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 263
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"].Column, {
      width: 8,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 264
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Header"], {
      as: "h3",
      textAlign: "center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 265
      },
      __self: this
    }, secondCurr)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"].Column, {
      width: 8,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 269
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Header"], {
      as: "h3",
      textAlign: "center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 270
      },
      __self: this
    }, firstCurr))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Divider"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 275
      },
      __self: this
    }), exchangeData.rates ? this.moreConversions(firstCurr, secondCurr, 1 / exchangeData.rates[this.state.secondCurr]) : null)))));
  }

}

const mapDispatchToProps = {};
/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Home));

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/semantic-ui-css/semantic.min.css":
/*!*******************************************************!*\
  !*** ./node_modules/semantic-ui-css/semantic.min.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ "./node_modules/semantic-ui-css/semantic.min.css");
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Home */ "./components/Home.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
var _jsxFileName = "D:\\my-projects\\currency-converter\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




/* harmony default export */ __webpack_exports__["default"] = (() => __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx(_components_Home__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
})));

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\my-projects\currency-converter\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map