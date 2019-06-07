webpackHotUpdate("static/development/pages/story.js",{

/***/ "./components/Comment.jsx":
/*!********************************!*\
  !*** ./components/Comment.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/motoki/Sites/hacker-next/components/Comment.jsx";



var Comment = function Comment(_ref) {
  var comment = _ref.comment;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-86135204" + " " + "comment",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-86135204" + " " + "commnet-user",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, comment.user), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: comment.content
    },
    className: "jsx-86135204" + " " + "commnet-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }), comment.comments && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-86135204" + " " + "nested-comments",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, comment.comments.map(function (nestedComment) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Comment, {
      key: nestedComment.id,
      comment: nestedComment,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    });
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "86135204",
    __self: this
  }, ".comment.jsx-86135204{margin-bottom:1.5em;}.comment-user.jsx-86135204{font-size:0.9rem;font-weight:bold;marign-bottom:0.5em;}.comment-content.jsx-86135204{font-size:0.9rem;}.comment-content.jsx-86135204 p.jsx-86135204{margin:0;margin-bottom:0.5em;word-wrap:break-word;}.comment-content.jsx-86135204 a.jsx-86135204{color:#f60;-webkit-text-decoration:underline;text-decoration:underline;}.comment-content.jsx-86135204 pre.jsx-86135204{max-width:100%;overflow:scroll;}.nested-comments.jsx-86135204{margin-top:1em;border-left:1px solid rgba(0,0,0,0.1);padding-left:1em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3Rva2kvU2l0ZXMvaGFja2VyLW5leHQvY29tcG9uZW50cy9Db21tZW50LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhZ0IsQUFHNkIsQUFHSCxBQUtBLEFBR1IsQUFLRSxBQUlJLEFBSUEsU0FaSyxFQUtNLElBSVYsQUFJeUIsRUFyQnhCLEFBS25CLEdBUkEsU0FZdUIsRUFTdkIsR0FqQnNCLGdCQVN0QixHQVltQixDQXBCbkIsZ0JBcUJBLENBVEEiLCJmaWxlIjoiL1VzZXJzL21vdG9raS9TaXRlcy9oYWNrZXItbmV4dC9jb21wb25lbnRzL0NvbW1lbnQuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQ29tbWVudCA9ICh7IGNvbW1lbnQgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1lbnRcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1uZXQtdXNlclwiPntjb21tZW50LnVzZXJ9PC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb21tbmV0LWNvbnRlbnRcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGNvbW1lbnQuY29udGVudCB9fSAvPlxuXG4gICAge2NvbW1lbnQuY29tbWVudHMgJiYgKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXN0ZWQtY29tbWVudHNcIj5cbiAgICAgICAge2NvbW1lbnQuY29tbWVudHMubWFwKG5lc3RlZENvbW1lbnQgPT4gKFxuICAgICAgICAgIDxDb21tZW50IGtleT17bmVzdGVkQ29tbWVudC5pZH0gY29tbWVudD17bmVzdGVkQ29tbWVudH0gLz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICApfVxuXG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmNvbW1lbnQge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjVlbTtcbiAgICAgIH1cbiAgICAgIC5jb21tZW50LXVzZXIge1xuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIG1hcmlnbi1ib3R0b206IDAuNWVtO1xuICAgICAgfVxuICAgICAgLmNvbW1lbnQtY29udGVudCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgfVxuICAgICAgLmNvbW1lbnQtY29udGVudCBwIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbiAgICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgICAgfVxuICAgICAgLmNvbW1lbnQtY29udGVudCBhIHtcbiAgICAgICAgY29sb3I6ICNmNjA7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgfVxuICAgICAgLmNvbW1lbnQtY29udGVudCBwcmUge1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgICB9XG4gICAgICAubmVzdGVkLWNvbW1lbnRzIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMWVtO1xuICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxZW07XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IENvbW1lbnQ7XG4iXX0= */\n/*@ sourceURL=/Users/motoki/Sites/hacker-next/components/Comment.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Comment);

/***/ })

})
//# sourceMappingURL=story.js.ed6e0a25c66da8d58ece.hot-update.js.map