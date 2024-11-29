"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/Link */ "./node_modules/next/Link.js");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/Image */ "./node_modules/next/Image.js");
/* harmony import */ var next_Image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_Image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Section */ "./components/Section.js");
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/NavBar */ "./components/NavBar.js");
/* harmony import */ var _public_disney_button_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/disney-button.png */ "./public/disney-button.png");
/* harmony import */ var _public_marvel_button_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../public/marvel-button.png */ "./public/marvel-button.png");
/* harmony import */ var _public_natgeo_button_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../public/natgeo-button.png */ "./public/natgeo-button.png");
/* harmony import */ var _public_star_wars_button_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../public/star-wars-button.png */ "./public/star-wars-button.png");
/* harmony import */ var _public_pixar_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../public/pixar.png */ "./public/pixar.png");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\HABEEB\\Desktop\\disney-clone-graphcms-main\\pages\\index.js",
    _this = undefined;











var Home = function Home(_ref) {
  var videos = _ref.videos,
      account = _ref.account;

  var randomVideo = function randomVideo(videos) {
    return videos[Math.floor(Math.random() * videos.length)];
  };

  var filterVideos = function filterVideos(videos, genre) {
    return videos.filter(function (video) {
      return video.tags.includes(genre);
    });
  };

  var unSeenVideos = function unSeenVideos(videos) {
    return videos.filter(function (video) {
      return video.seen == false || video.seen == null;
    });
  };

  console.log('not seen:', videos.filter(function (video) {
    return video.seen == false || video.seen == null;
  }));
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBar__WEBPACK_IMPORTED_MODULE_4__.default, {
      account: account
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "app",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "main-video",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: randomVideo(videos).thumbnail.url,
          alt: randomVideo(videos).title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "video-feed",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Link__WEBPACK_IMPORTED_MODULE_1___default()), {
          href: "#disney",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "franchise",
            id: "disney",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Image__WEBPACK_IMPORTED_MODULE_2___default()), {
              src: _public_disney_button_png__WEBPACK_IMPORTED_MODULE_5__.default
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Link__WEBPACK_IMPORTED_MODULE_1___default()), {
          href: "#pixar",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "franchise",
            id: "pixar",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Image__WEBPACK_IMPORTED_MODULE_2___default()), {
              src: _public_pixar_png__WEBPACK_IMPORTED_MODULE_9__.default
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Link__WEBPACK_IMPORTED_MODULE_1___default()), {
          href: "#star-wars",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "franchise",
            id: "star-wars",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Image__WEBPACK_IMPORTED_MODULE_2___default()), {
              src: _public_star_wars_button_png__WEBPACK_IMPORTED_MODULE_8__.default
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Link__WEBPACK_IMPORTED_MODULE_1___default()), {
          href: "#nat-geo",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "franchise",
            id: "nat-geo",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Image__WEBPACK_IMPORTED_MODULE_2___default()), {
              src: _public_natgeo_button_png__WEBPACK_IMPORTED_MODULE_7__.default
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Link__WEBPACK_IMPORTED_MODULE_1___default()), {
          href: "#marvel",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "franchise",
            id: "marvel",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Image__WEBPACK_IMPORTED_MODULE_2___default()), {
              src: _public_marvel_button_png__WEBPACK_IMPORTED_MODULE_6__.default
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Section__WEBPACK_IMPORTED_MODULE_3__.default, {
        genre: 'Recommended for you',
        videos: unSeenVideos(videos)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Section__WEBPACK_IMPORTED_MODULE_3__.default, {
        genre: 'Family',
        videos: filterVideos(videos, 'family')
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Section__WEBPACK_IMPORTED_MODULE_3__.default, {
        genre: 'Thriller',
        videos: filterVideos(videos, 'thriller')
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Section__WEBPACK_IMPORTED_MODULE_3__.default, {
        genre: 'Classic',
        videos: filterVideos(videos, 'classic')
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Section__WEBPACK_IMPORTED_MODULE_3__.default, {
        id: "pixar",
        genre: 'Pixar',
        videos: filterVideos(videos, 'pixar')
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Section__WEBPACK_IMPORTED_MODULE_3__.default, {
        id: "marvel",
        genre: 'Marvel',
        videos: filterVideos(videos, 'thriller')
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Section__WEBPACK_IMPORTED_MODULE_3__.default, {
        id: "nat-geo",
        genre: 'National Geographic',
        videos: filterVideos(videos, 'national-geographic')
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Section__WEBPACK_IMPORTED_MODULE_3__.default, {
        id: "disney",
        genre: 'Disney',
        videos: filterVideos(videos, 'disney')
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Section__WEBPACK_IMPORTED_MODULE_3__.default, {
        id: "star-wars",
        genre: 'Star Wars',
        videos: filterVideos(videos, 'star-wars')
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }, _this)]
  }, void 0, true);
};

_c = Home;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjk3NjY4YTVhYjM3NGVhMzUyNDAuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBdURBLElBQU1TLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQXVCO0FBQUEsTUFBckJDLE1BQXFCLFFBQXJCQSxNQUFxQjtBQUFBLE1BQWJDLE9BQWEsUUFBYkEsT0FBYTs7QUFHaEMsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0YsTUFBRCxFQUFZO0FBQzVCLFdBQU9BLE1BQU0sQ0FBQ0csSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQkwsTUFBTSxDQUFDTSxNQUFsQyxDQUFELENBQWI7QUFDSCxHQUZEOztBQUlBLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNQLE1BQUQsRUFBU1EsS0FBVCxFQUFtQjtBQUNwQyxXQUFPUixNQUFNLENBQUNTLE1BQVAsQ0FBYyxVQUFDQyxLQUFEO0FBQUEsYUFBV0EsS0FBSyxDQUFDQyxJQUFOLENBQVdDLFFBQVgsQ0FBb0JKLEtBQXBCLENBQVg7QUFBQSxLQUFkLENBQVA7QUFDSCxHQUZEOztBQUlBLE1BQU1LLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNiLE1BQUQsRUFBWTtBQUM3QixXQUFPQSxNQUFNLENBQUNTLE1BQVAsQ0FBYyxVQUFBQyxLQUFLO0FBQUEsYUFBSUEsS0FBSyxDQUFDSSxJQUFOLElBQWMsS0FBZCxJQUF1QkosS0FBSyxDQUFDSSxJQUFOLElBQWMsSUFBekM7QUFBQSxLQUFuQixDQUFQO0FBQ0gsR0FGRDs7QUFJQUMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksV0FBWixFQUF5QmhCLE1BQU0sQ0FBQ1MsTUFBUCxDQUFjLFVBQUFDLEtBQUs7QUFBQSxXQUFJQSxLQUFLLENBQUNJLElBQU4sSUFBYyxLQUFkLElBQXVCSixLQUFLLENBQUNJLElBQU4sSUFBYyxJQUF6QztBQUFBLEdBQW5CLENBQXpCO0FBR0Esc0JBQ0k7QUFBQSw0QkFDSSw4REFBQyx1REFBRDtBQUFRLGFBQU8sRUFBRWI7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBRUk7QUFBSyxlQUFTLEVBQUMsS0FBZjtBQUFBLDhCQUNJO0FBQUssaUJBQVMsRUFBQyxZQUFmO0FBQUEsK0JBQ0k7QUFBSyxhQUFHLEVBQUVDLFdBQVcsQ0FBQ0YsTUFBRCxDQUFYLENBQW9CaUIsU0FBcEIsQ0FBOEJDLEdBQXhDO0FBQ0ssYUFBRyxFQUFFaEIsV0FBVyxDQUFDRixNQUFELENBQVgsQ0FBb0JtQjtBQUQ5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBTUk7QUFBSyxpQkFBUyxFQUFDLFlBQWY7QUFBQSxnQ0FDSSw4REFBQyxrREFBRDtBQUFNLGNBQUksRUFBQyxTQUFYO0FBQUEsaUNBQ0k7QUFBSyxxQkFBUyxFQUFDLFdBQWY7QUFBMkIsY0FBRSxFQUFDLFFBQTlCO0FBQUEsbUNBQ0ksOERBQUMsbURBQUQ7QUFBTyxpQkFBRyxFQUFFekIsOERBQVVBO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQU1JLDhEQUFDLGtEQUFEO0FBQU0sY0FBSSxFQUFDLFFBQVg7QUFBQSxpQ0FDSTtBQUFLLHFCQUFTLEVBQUMsV0FBZjtBQUEyQixjQUFFLEVBQUMsT0FBOUI7QUFBQSxtQ0FDSSw4REFBQyxtREFBRDtBQUFPLGlCQUFHLEVBQUVJLHNEQUFTQTtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTkosZUFXSSw4REFBQyxrREFBRDtBQUFNLGNBQUksRUFBQyxZQUFYO0FBQUEsaUNBQ0k7QUFBSyxxQkFBUyxFQUFDLFdBQWY7QUFBMkIsY0FBRSxFQUFDLFdBQTlCO0FBQUEsbUNBQ0ksOERBQUMsbURBQUQ7QUFBTyxpQkFBRyxFQUFFRCxpRUFBWUE7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVhKLGVBZ0JJLDhEQUFDLGtEQUFEO0FBQU0sY0FBSSxFQUFDLFVBQVg7QUFBQSxpQ0FDSTtBQUFLLHFCQUFTLEVBQUMsV0FBZjtBQUEyQixjQUFFLEVBQUMsU0FBOUI7QUFBQSxtQ0FDSSw4REFBQyxtREFBRDtBQUFPLGlCQUFHLEVBQUVELDhEQUFVQTtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBaEJKLGVBcUJJLDhEQUFDLGtEQUFEO0FBQU0sY0FBSSxFQUFDLFNBQVg7QUFBQSxpQ0FDSTtBQUFLLHFCQUFTLEVBQUMsV0FBZjtBQUEyQixjQUFFLEVBQUMsUUFBOUI7QUFBQSxtQ0FDSSw4REFBQyxtREFBRDtBQUFPLGlCQUFHLEVBQUVELDhEQUFVQTtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBckJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQU5KLGVBaUNJLDhEQUFDLHdEQUFEO0FBQVMsYUFBSyxFQUFFLHFCQUFoQjtBQUF1QyxjQUFNLEVBQUVrQixZQUFZLENBQUNiLE1BQUQ7QUFBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWpDSixlQWtDSSw4REFBQyx3REFBRDtBQUFTLGFBQUssRUFBRSxRQUFoQjtBQUEwQixjQUFNLEVBQUVPLFlBQVksQ0FBQ1AsTUFBRCxFQUFTLFFBQVQ7QUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWxDSixlQW1DSSw4REFBQyx3REFBRDtBQUFTLGFBQUssRUFBRSxVQUFoQjtBQUE0QixjQUFNLEVBQUVPLFlBQVksQ0FBQ1AsTUFBRCxFQUFTLFVBQVQ7QUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQW5DSixlQW9DSSw4REFBQyx3REFBRDtBQUFTLGFBQUssRUFBRSxTQUFoQjtBQUEyQixjQUFNLEVBQUVPLFlBQVksQ0FBQ1AsTUFBRCxFQUFTLFNBQVQ7QUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXBDSixlQXFDSSw4REFBQyx3REFBRDtBQUFTLFVBQUUsRUFBQyxPQUFaO0FBQW9CLGFBQUssRUFBRSxPQUEzQjtBQUFvQyxjQUFNLEVBQUVPLFlBQVksQ0FBQ1AsTUFBRCxFQUFTLE9BQVQ7QUFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXJDSixlQXNDSSw4REFBQyx3REFBRDtBQUFTLFVBQUUsRUFBQyxRQUFaO0FBQXFCLGFBQUssRUFBRSxRQUE1QjtBQUFzQyxjQUFNLEVBQUVPLFlBQVksQ0FBQ1AsTUFBRCxFQUFTLFVBQVQ7QUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXRDSixlQXVDSSw4REFBQyx3REFBRDtBQUFTLFVBQUUsRUFBQyxTQUFaO0FBQXNCLGFBQUssRUFBRSxxQkFBN0I7QUFDUyxjQUFNLEVBQUVPLFlBQVksQ0FBQ1AsTUFBRCxFQUFTLHFCQUFUO0FBRDdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF2Q0osZUF5Q0ksOERBQUMsd0RBQUQ7QUFBUyxVQUFFLEVBQUMsUUFBWjtBQUFxQixhQUFLLEVBQUUsUUFBNUI7QUFBc0MsY0FBTSxFQUFFTyxZQUFZLENBQUNQLE1BQUQsRUFBUyxRQUFUO0FBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF6Q0osZUEwQ0ksOERBQUMsd0RBQUQ7QUFBUyxVQUFFLEVBQUMsV0FBWjtBQUF3QixhQUFLLEVBQUUsV0FBL0I7QUFBNEMsY0FBTSxFQUFFTyxZQUFZLENBQUNQLE1BQUQsRUFBUyxXQUFUO0FBQWhFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUExQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRko7QUFBQSxrQkFESjtBQW1ESCxDQXJFRDs7S0FBTUQ7O0FBdUVOLCtEQUFlQSxJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Z3FsLCBHcmFwaFFMQ2xpZW50fSBmcm9tICdncmFwaHFsLXJlcXVlc3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L0xpbmsnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9JbWFnZSdcbmltcG9ydCBTZWN0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL1NlY3Rpb25cIlxuaW1wb3J0IE5hdkJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZCYXJcIlxuaW1wb3J0IGRpc25leUxvZ28gZnJvbSAnLi4vcHVibGljL2Rpc25leS1idXR0b24ucG5nJ1xuaW1wb3J0IG1hcnZlbExvZ28gZnJvbSAnLi4vcHVibGljL21hcnZlbC1idXR0b24ucG5nJ1xuaW1wb3J0IG5hdGdlb0xvZ28gZnJvbSAnLi4vcHVibGljL25hdGdlby1idXR0b24ucG5nJ1xuaW1wb3J0IHN0YXJ3YXJzTG9nbyBmcm9tICcuLi9wdWJsaWMvc3Rhci13YXJzLWJ1dHRvbi5wbmcnXG5pbXBvcnQgcGl4YXJMb2dvIGZyb20gJy4uL3B1YmxpYy9waXhhci5wbmcnXG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB1cmwgPSBwcm9jZXNzLmVudi5FTkRQT0lOVFxuICAgIGNvbnN0IGdyYXBoUUxDbGllbnQgPSBuZXcgR3JhcGhRTENsaWVudCh1cmwsIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IGBCZWFyZXIgJHtwcm9jZXNzLmVudi5HUkFQSF9DTVNfVE9LRU59YFxuICAgICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IHZpZGVvc1F1ZXJ5ID0gZ3FsYFxuICAgIHF1ZXJ5IHtcbiAgICAgIHZpZGVvcyB7XG4gICAgICAgIGNyZWF0ZWRBdCxcbiAgICAgICAgaWQsXG4gICAgICAgIHRpdGxlLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgc2VlbixcbiAgICAgICAgc2x1ZyxcbiAgICAgICAgdGFncyxcbiAgICAgICAgdGh1bWJuYWlsIHtcbiAgICAgICAgICB1cmxcbiAgICAgICAgfSxcbiAgICAgICAgbXA0IHtcbiAgICAgICAgICB1cmxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgYFxuXG4gICAgY29uc3QgYWNjb3VudFF1ZXJ5ID0gZ3FsYFxuICAgIHF1ZXJ5IHtcbiAgICBhY2NvdW50KHdoZXJlOiB7IGlkOiBcImNtNDJ2bHF6NzAwcmswN3BnNHN1bmZoZDdcIn0pIHtcbiAgICAgIHVzZXJuYW1lXG4gICAgICBhdmF0YXIge1xuICAgICAgICB1cmxcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgYFxuXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGdyYXBoUUxDbGllbnQucmVxdWVzdCh2aWRlb3NRdWVyeSlcbiAgICBjb25zdCB2aWRlb3MgPSBkYXRhLnZpZGVvc1xuICAgIGNvbnN0IGFjY291bnREYXRhID0gYXdhaXQgZ3JhcGhRTENsaWVudC5yZXF1ZXN0KGFjY291bnRRdWVyeSlcbiAgICBjb25zdCBhY2NvdW50ID0gYWNjb3VudERhdGEuYWNjb3VudFxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIHZpZGVvcyxcbiAgICAgICAgICAgIGFjY291bnRcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5jb25zdCBIb21lID0gKHt2aWRlb3MsIGFjY291bnR9KSA9PiB7XG5cblxuICAgIGNvbnN0IHJhbmRvbVZpZGVvID0gKHZpZGVvcykgPT4ge1xuICAgICAgICByZXR1cm4gdmlkZW9zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHZpZGVvcy5sZW5ndGgpXVxuICAgIH1cblxuICAgIGNvbnN0IGZpbHRlclZpZGVvcyA9ICh2aWRlb3MsIGdlbnJlKSA9PiB7XG4gICAgICAgIHJldHVybiB2aWRlb3MuZmlsdGVyKCh2aWRlbykgPT4gdmlkZW8udGFncy5pbmNsdWRlcyhnZW5yZSkpXG4gICAgfVxuXG4gICAgY29uc3QgdW5TZWVuVmlkZW9zID0gKHZpZGVvcykgPT4ge1xuICAgICAgICByZXR1cm4gdmlkZW9zLmZpbHRlcih2aWRlbyA9PiB2aWRlby5zZWVuID09IGZhbHNlIHx8IHZpZGVvLnNlZW4gPT0gbnVsbClcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZygnbm90IHNlZW46JywgdmlkZW9zLmZpbHRlcih2aWRlbyA9PiB2aWRlby5zZWVuID09IGZhbHNlIHx8IHZpZGVvLnNlZW4gPT0gbnVsbCkpXG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8TmF2QmFyIGFjY291bnQ9e2FjY291bnR9Lz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLXZpZGVvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyYW5kb21WaWRlbyh2aWRlb3MpLnRodW1ibmFpbC51cmx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtyYW5kb21WaWRlbyh2aWRlb3MpLnRpdGxlfS8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZGVvLWZlZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNkaXNuZXlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnJhbmNoaXNlXCIgaWQ9XCJkaXNuZXlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtkaXNuZXlMb2dvfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI3BpeGFyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZyYW5jaGlzZVwiIGlkPVwicGl4YXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtwaXhhckxvZ299Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjc3Rhci13YXJzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZyYW5jaGlzZVwiIGlkPVwic3Rhci13YXJzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17c3RhcndhcnNMb2dvfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI25hdC1nZW9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnJhbmNoaXNlXCIgaWQ9XCJuYXQtZ2VvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17bmF0Z2VvTG9nb30vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNtYXJ2ZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnJhbmNoaXNlXCIgaWQ9XCJtYXJ2ZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXttYXJ2ZWxMb2dvfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxTZWN0aW9uIGdlbnJlPXsnUmVjb21tZW5kZWQgZm9yIHlvdSd9IHZpZGVvcz17dW5TZWVuVmlkZW9zKHZpZGVvcyl9Lz5cbiAgICAgICAgICAgICAgICA8U2VjdGlvbiBnZW5yZT17J0ZhbWlseSd9IHZpZGVvcz17ZmlsdGVyVmlkZW9zKHZpZGVvcywgJ2ZhbWlseScpfS8+XG4gICAgICAgICAgICAgICAgPFNlY3Rpb24gZ2VucmU9eydUaHJpbGxlcid9IHZpZGVvcz17ZmlsdGVyVmlkZW9zKHZpZGVvcywgJ3RocmlsbGVyJyl9Lz5cbiAgICAgICAgICAgICAgICA8U2VjdGlvbiBnZW5yZT17J0NsYXNzaWMnfSB2aWRlb3M9e2ZpbHRlclZpZGVvcyh2aWRlb3MsICdjbGFzc2ljJyl9Lz5cbiAgICAgICAgICAgICAgICA8U2VjdGlvbiBpZD1cInBpeGFyXCIgZ2VucmU9eydQaXhhcid9IHZpZGVvcz17ZmlsdGVyVmlkZW9zKHZpZGVvcywgJ3BpeGFyJyl9Lz5cbiAgICAgICAgICAgICAgICA8U2VjdGlvbiBpZD1cIm1hcnZlbFwiIGdlbnJlPXsnTWFydmVsJ30gdmlkZW9zPXtmaWx0ZXJWaWRlb3ModmlkZW9zLCAndGhyaWxsZXInKX0vPlxuICAgICAgICAgICAgICAgIDxTZWN0aW9uIGlkPVwibmF0LWdlb1wiIGdlbnJlPXsnTmF0aW9uYWwgR2VvZ3JhcGhpYyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgdmlkZW9zPXtmaWx0ZXJWaWRlb3ModmlkZW9zLCAnbmF0aW9uYWwtZ2VvZ3JhcGhpYycpfS8+XG4gICAgICAgICAgICAgICAgPFNlY3Rpb24gaWQ9XCJkaXNuZXlcIiBnZW5yZT17J0Rpc25leSd9IHZpZGVvcz17ZmlsdGVyVmlkZW9zKHZpZGVvcywgJ2Rpc25leScpfS8+XG4gICAgICAgICAgICAgICAgPFNlY3Rpb24gaWQ9XCJzdGFyLXdhcnNcIiBnZW5yZT17J1N0YXIgV2Fycyd9IHZpZGVvcz17ZmlsdGVyVmlkZW9zKHZpZGVvcywgJ3N0YXItd2FycycpfS8+XG5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVxuXG5cblxuXG5cblxuXG5cblxuXG4iXSwibmFtZXMiOlsiTGluayIsIkltYWdlIiwiU2VjdGlvbiIsIk5hdkJhciIsImRpc25leUxvZ28iLCJtYXJ2ZWxMb2dvIiwibmF0Z2VvTG9nbyIsInN0YXJ3YXJzTG9nbyIsInBpeGFyTG9nbyIsIkhvbWUiLCJ2aWRlb3MiLCJhY2NvdW50IiwicmFuZG9tVmlkZW8iLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJmaWx0ZXJWaWRlb3MiLCJnZW5yZSIsImZpbHRlciIsInZpZGVvIiwidGFncyIsImluY2x1ZGVzIiwidW5TZWVuVmlkZW9zIiwic2VlbiIsImNvbnNvbGUiLCJsb2ciLCJ0aHVtYm5haWwiLCJ1cmwiLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=