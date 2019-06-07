webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/StoryList.jsx":
/*!**********************************!*\
  !*** ./components/StoryList.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/motoki/Sites/hacker-next/components/StoryList.jsx";


var StoryList = function StoryList(_ref) {
  var stories = _ref.stories;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "story-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    __self: this
  }, stories.map(function (story) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "story",
      key: story.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 4
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: "story-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: story.url,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, story.title)));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (StoryList);

/***/ })

})
//# sourceMappingURL=index.js.2636f6af9f73696f5883.hot-update.js.map