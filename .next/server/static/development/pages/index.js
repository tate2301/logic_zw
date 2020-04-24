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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

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
/* harmony import */ var _views_navbars_navbar_logged_out__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/navbars/navbar_logged_out */ "./views/navbars/navbar_logged_out.jsx");
/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.global.scss */ "./pages/styles.global.scss");
/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_global_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _views_cards_get_started_hosting_small__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/cards/get_started_hosting_small */ "./views/cards/get_started_hosting_small.jsx");
/* harmony import */ var _views_cards_card_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/cards/card_services */ "./views/cards/card_services.jsx");
/* harmony import */ var _views_footers_pages_main_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../views/footers/pages_main_footer */ "./views/footers/pages_main_footer.jsx");
/* harmony import */ var _views_banners_hero_landing_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../views/banners/hero_landing_page */ "./views/banners/hero_landing_page.jsx");
/* harmony import */ var _views_sections_browse_categories__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../views/sections/browse_categories */ "./views/sections/browse_categories.jsx");
/* harmony import */ var _views_sections_browse_challenges_landing_row__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../views/sections/browse_challenges_landing_row */ "./views/sections/browse_challenges_landing_row.jsx");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_9__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











class Index extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      navbarShown: false,
      profileDropDownShown: false
    };
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_helmet__WEBPACK_IMPORTED_MODULE_9__["Helmet"], null, __jsx("title", null, "Logic Challenges: GET RESEARCH DONE")), __jsx("header", null, __jsx(_views_navbars_navbar_logged_out__WEBPACK_IMPORTED_MODULE_1__["default"], null), __jsx(_views_banners_hero_landing_page__WEBPACK_IMPORTED_MODULE_6__["default"], null)), __jsx("section", null, __jsx(_views_cards_card_services__WEBPACK_IMPORTED_MODULE_4__["default"], null)), __jsx("section", null, __jsx(_views_sections_browse_categories__WEBPACK_IMPORTED_MODULE_7__["default"], null)), __jsx("section", null, __jsx(_views_sections_browse_challenges_landing_row__WEBPACK_IMPORTED_MODULE_8__["default"], null)), __jsx("section", null, __jsx(_views_cards_get_started_hosting_small__WEBPACK_IMPORTED_MODULE_3__["default"], null)), __jsx("section", null, __jsx(_views_footers_pages_main_footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
      year: "2020",
      tagline: "The smart way to get answers to your questions",
      companyName: "Logic Private Limited"
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./pages/styles.global.scss":
/*!**********************************!*\
  !*** ./pages/styles.global.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./views/banners/hero_landing_page.jsx":
/*!*********************************************!*\
  !*** ./views/banners/hero_landing_page.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const HeroLandingPage = props => {
  return __jsx("section", {
    className: "hero"
  }, __jsx("div", {
    className: "hero-body"
  }, __jsx("div", {
    className: "container"
  }, __jsx("div", {
    className: "columns is-desktop"
  }, __jsx("div", {
    className: "column is-full-mobile is-half"
  }, __jsx("div", {
    className: "container mx-auto py-32"
  }, __jsx("h1", {
    className: "title"
  }, "You are your best Researcher"), __jsx("h2", {
    className: "subtitle"
  }, "The solutions to the world's most pressing problems lies not within coporations but amongst the regular researcher."))), __jsx("div", {
    className: "column is-half is-0-mobile"
  })))), __jsx("hr", null));
};

/* harmony default export */ __webpack_exports__["default"] = (HeroLandingPage);

/***/ }),

/***/ "./views/cards/card_category.jsx":
/*!***************************************!*\
  !*** ./views/cards/card_category.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const CardCategory = ({
  category
}) => {
  return __jsx("div", {
    className: "max-w-sm sm:w-full inline-block rounded overflow-hidden shadow-lg mr-6 mt-4"
  }, __jsx("a", {
    href: `/challenges?cat=${category.categoryClass}`
  }, __jsx("div", {
    className: "px-6 py-4"
  }, __jsx("div", {
    className: "font-bold text-xl mb-2"
  }, category.categoryName), __jsx("p", {
    className: "text-gray-700 text-base"
  }, category.categoryDescription)), __jsx("div", {
    class: "px-6 py-4"
  }, category.tags.map(tag => __jsx("span", {
    className: "inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
  }, tag)))));
};

/* harmony default export */ __webpack_exports__["default"] = (CardCategory);

/***/ }),

/***/ "./views/cards/card_services.jsx":
/*!***************************************!*\
  !*** ./views/cards/card_services.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const CardServices = props => {
  return __jsx("div", {
    className: "py-12 bg-white"
  }, __jsx("div", {
    className: "max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8"
  }, __jsx("div", {
    className: "lg:text-center"
  }, __jsx("p", {
    className: "text-base leading-6 text-green-600 font-semibold tracking-wide uppercase"
  }, "GET RESEARCH DONE"), __jsx("h3", {
    className: "mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
  }, "Corporations are looking for researchers like you"), __jsx("p", {
    className: "mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto"
  }, "We give you the chance to help brainstorm solutions to these researches and pay for doing it.")), __jsx("div", {
    className: "mt-10"
  }, __jsx("ul", {
    className: "md:grid md:grid-cols-2 md:col-gap-8 md:row-gap-10"
  }, __jsx("li", null, __jsx("div", {
    className: "flex"
  }, __jsx("div", {
    className: "flex-shrink-0"
  }, __jsx("div", {
    className: "flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white"
  }, __jsx("svg", {
    className: "h-6 w-6",
    stroke: "currentColor",
    fill: "none",
    viewBox: "0 0 24 24"
  }, __jsx("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
  })))), __jsx("div", {
    className: "ml-4"
  }, __jsx("h5", {
    className: "text-lg leading-6 font-medium text-gray-900"
  }, "Get paid to do what you love"), __jsx("p", {
    className: "mt-2 text-base leading-6 text-gray-500"
  }, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.")))), __jsx("li", {
    className: "mt-10 md:mt-0"
  }, __jsx("div", {
    className: "flex"
  }, __jsx("div", {
    className: "flex-shrink-0"
  }, __jsx("div", {
    className: "flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white"
  }, __jsx("svg", {
    className: "h-6 w-6",
    stroke: "currentColor",
    fill: "none",
    viewBox: "0 0 24 24"
  }, __jsx("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
  })))), __jsx("div", {
    className: "ml-4"
  }, __jsx("h5", {
    className: "text-lg leading-6 font-medium text-gray-900"
  }, "No hidden fees"), __jsx("p", {
    className: "mt-2 text-base leading-6 text-gray-500"
  }, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.")))), __jsx("li", {
    className: "mt-10 md:mt-0"
  }, __jsx("div", {
    className: "flex"
  }, __jsx("div", {
    className: "flex-shrink-0"
  }, __jsx("div", {
    className: "flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white"
  }, __jsx("svg", {
    className: "h-6 w-6",
    stroke: "currentColor",
    fill: "none",
    viewBox: "0 0 24 24"
  }, __jsx("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M13 10V3L4 14h7v7l9-11h-7z"
  })))), __jsx("div", {
    className: "ml-4"
  }, __jsx("h5", {
    className: "text-lg leading-6 font-medium text-gray-900"
  }, "Spark interest in recruiters"), __jsx("p", {
    className: "mt-2 text-base leading-6 text-gray-500"
  }, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.")))), __jsx("li", {
    className: "mt-10 md:mt-0"
  }, __jsx("div", {
    className: "flex"
  }, __jsx("div", {
    className: "flex-shrink-0"
  }, __jsx("div", {
    className: "flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white"
  }, __jsx("svg", {
    className: "h-6 w-6",
    stroke: "currentColor",
    fill: "none",
    viewBox: "0 0 24 24"
  }, __jsx("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
  })))), __jsx("div", {
    className: "ml-4"
  }, __jsx("h5", {
    className: "text-lg leading-6 font-medium text-gray-900"
  }, "Mobile notifications"), __jsx("p", {
    className: "mt-2 text-base leading-6 text-gray-500"
  }, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione."))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (CardServices);

/***/ }),

/***/ "./views/cards/get_started_hosting_small.jsx":
/*!***************************************************!*\
  !*** ./views/cards/get_started_hosting_small.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const CardGetStartedHosting = props => {
  return __jsx("div", {
    className: "bg-green-700"
  }, __jsx("div", {
    className: "max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between"
  }, __jsx("h2", {
    className: "text-3xl leading-9 font-extrabold tracking-tight text-gray-100 sm:text-4xl sm:leading-10"
  }, "Ready to dive in?", __jsx("br", null), __jsx("span", {
    className: "text-white"
  }, "Apply to host challenges.")), __jsx("div", {
    className: "mt-8 flex lg:flex-shrink-0 lg:mt-0"
  }, __jsx("div", {
    className: "inline-flex rounded-md shadow"
  }, __jsx("a", {
    href: "#",
    className: "inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
  }, "Get started")), __jsx("div", {
    className: "ml-3 inline-flex rounded-md shadow"
  }, __jsx("a", {
    href: "#",
    className: "inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-green-600 bg-white hover:text-green-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
  }, "Learn more")))));
};

/* harmony default export */ __webpack_exports__["default"] = (CardGetStartedHosting);

/***/ }),

/***/ "./views/footers/pages_main_footer.jsx":
/*!*********************************************!*\
  !*** ./views/footers/pages_main_footer.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const FooterPagesDefault = props => {
  return __jsx("div", {
    className: "bg-gray-100"
  }, __jsx("div", {
    className: "container mx-auto py-12 px-4"
  }, __jsx("div", {
    className: "columns py-4 is-desktop"
  }, __jsx("div", {
    className: "column is-full-mobile is-one-third-desktop is-one-third-tablet"
  }), __jsx("div", {
    className: "column is-full-mobile"
  }, __jsx("div", {
    className: "columns"
  }, __jsx("div", {
    className: "column"
  }, __jsx("h3", {
    className: "text-xl block text-gray-500"
  }, "GUIDES"), __jsx("a", {
    href: "#",
    className: "block"
  }, "About Us"), __jsx("a", {
    href: "#",
    className: "block"
  }, "Blog"), __jsx("a", {
    href: "#",
    className: "block"
  }, "Learn")), __jsx("div", {
    className: "column"
  }, __jsx("h3", {
    className: "text-xl block text-gray-500"
  }, "COMPANY"), __jsx("a", {
    href: "#",
    className: "block"
  }, "Terms and Conditions"), __jsx("a", {
    href: "#",
    className: "block"
  }, "User Agreement"))))), __jsx("div", {
    className: "columns"
  }, __jsx("div", {
    className: "column text-center"
  }, "\xA9 ", props.year + " " + props.companyName))));
};

/* harmony default export */ __webpack_exports__["default"] = (FooterPagesDefault);

/***/ }),

/***/ "./views/navbars/navbar_logged_out.jsx":
/*!*********************************************!*\
  !*** ./views/navbars/navbar_logged_out.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const NavbarLoggedOut = ({
  user
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("nav", {
    className: "navbar",
    role: "navigation",
    "aria-label": "main navigation"
  }, __jsx("div", {
    className: "navbar-brand"
  }, __jsx("a", {
    className: "navbar-item",
    href: "/"
  }, __jsx("span", {
    className: "title is-3 text-green-600"
  }, "logic")), __jsx("a", {
    className: "navbar-burger burger",
    "data-target": "Options"
  }, __jsx("span", {
    "aria-hidden": "true"
  }), __jsx("span", {
    "aria-hidden": "true"
  }), __jsx("span", {
    "aria-hidden": "true"
  }))), __jsx("div", {
    id: "Options",
    className: "navbar-menu"
  }, __jsx("div", {
    className: "navbar-start"
  }, __jsx("a", {
    className: "navbar-item"
  }, "Home"), __jsx("a", {
    className: "navbar-item"
  }, "Challenges"), __jsx("a", {
    className: "navbar-item"
  }, "Blog"), __jsx("div", {
    className: "navbar-item has-dropdown is-hoverable"
  }, __jsx("a", {
    className: "navbar-link"
  }, "Resources"), __jsx("div", {
    className: "navbar-dropdown"
  }, __jsx("a", {
    className: "navbar-item"
  }, "Learn"), __jsx("a", {
    className: "navbar-item"
  }, "Example Responses"), __jsx("hr", {
    className: "navbar-divider"
  }), __jsx("a", {
    className: "navbar-item"
  }, "Submit a challenge")))), __jsx("div", {
    className: "navbar-end"
  }, __jsx("div", {
    className: "navbar-item"
  }, __jsx("div", {
    className: "buttons"
  }, __jsx("a", {
    href: "http://localhost:3000/register",
    className: "btn hover:text-white mr-4 text-white rounded px-4 py-2 bg-green-700"
  }, __jsx("strong", null, "Get started now")), __jsx("a", {
    href: "http://localhost:3000/login",
    className: "btn text-gray-700 rounded px-4 py-2 bg-white"
  }, __jsx("strong", null, "Login"))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (NavbarLoggedOut);

/***/ }),

/***/ "./views/sections/browse_categories.jsx":
/*!**********************************************!*\
  !*** ./views/sections/browse_categories.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _cards_card_category__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cards/card_category */ "./views/cards/card_category.jsx");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class BrowseCategories extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      challengeCategories: [{
        categoryName: "Marketing and Communications",
        categoryDescription: "Help companies realies profits and adopt new customers",
        tags: ['Advanced', 'Professional', 'Legal']
      }, {
        categoryName: "Business Development",
        categoryDescription: "Help companies realies profits and adopt new customers",
        tags: ['Advanced', 'Professional', 'Legal']
      }]
    };
  }

  render() {
    return __jsx("div", {
      className: "container mx-auto px-4 py-12"
    }, __jsx("h2", {
      className: "text-2xl text-gray-700"
    }, "Explore by category"), __jsx("div", {
      className: "inline overflow-x-scroll"
    }, this.state.challengeCategories.map(category => __jsx(_cards_card_category__WEBPACK_IMPORTED_MODULE_1__["default"], {
      category: category
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (BrowseCategories);

/***/ }),

/***/ "./views/sections/browse_challenges_landing_row.jsx":
/*!**********************************************************!*\
  !*** ./views/sections/browse_challenges_landing_row.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class BrowseChallengesLandingRow extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("div", {
      className: "container mx-auto px-4 py-12"
    }, __jsx("h3", {
      className: "text-2xl text-gray-700"
    }, "Explore challenges"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (BrowseChallengesLandingRow);

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\workspace\logic\server\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map