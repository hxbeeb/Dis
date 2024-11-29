"use strict";
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/Card.js":
/*!****************************!*\
  !*** ./components/Card.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "C:\\Users\\HABEEB\\Desktop\\disney-clone-graphcms-main\\components\\Card.js";

const Card = ({
  thumbnail
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
    className: "card",
    src: thumbnail.url,
    alt: thumbnail.title
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 2,
    columnNumber: 12
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);

/***/ }),

/***/ "./components/NavBar.js":
/*!******************************!*\
  !*** ./components/NavBar.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/Link */ "next/Link");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/Image */ "next/Image");
/* harmony import */ var next_Image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_Image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_disney_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/disney.png */ "./public/disney.png");

var _jsxFileName = "C:\\Users\\HABEEB\\Desktop\\disney-clone-graphcms-main\\components\\NavBar.js";




const NavBar = ({
  account
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "navbar",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "logo-wrapper",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "/",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Image__WEBPACK_IMPORTED_MODULE_2___default()), {
          src: _public_disney_png__WEBPACK_IMPORTED_MODULE_3__.default,
          alt: "Disney Logo",
          width: 90,
          height: 50
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 32
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "account-info",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: ["Welcome ", account.username]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        className: "avatar",
        src: account.avatar.url
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavBar);

/***/ }),

/***/ "./components/Section.js":
/*!*******************************!*\
  !*** ./components/Section.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card */ "./components/Card.js");

var _jsxFileName = "C:\\Users\\HABEEB\\Desktop\\disney-clone-graphcms-main\\components\\Section.js";


const Section = ({
  genre,
  videos
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "section",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
      children: genre
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: videos.map(video => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: `/video/${video.slug}`,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Card__WEBPACK_IMPORTED_MODULE_1__.default, {
          thumbnail: video.thumbnail
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 25
        }, undefined)
      }, video.id, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 21
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Section);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-request */ "graphql-request");
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/Link */ "next/Link");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_Image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/Image */ "next/Image");
/* harmony import */ var next_Image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_Image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Section__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Section */ "./components/Section.js");
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/NavBar */ "./components/NavBar.js");
/* harmony import */ var _public_disney_button_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../public/disney-button.png */ "./public/disney-button.png");
/* harmony import */ var _public_marvel_button_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../public/marvel-button.png */ "./public/marvel-button.png");
/* harmony import */ var _public_natgeo_button_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../public/natgeo-button.png */ "./public/natgeo-button.png");
/* harmony import */ var _public_star_wars_button_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../public/star-wars-button.png */ "./public/star-wars-button.png");
/* harmony import */ var _public_pixar_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../public/pixar.png */ "./public/pixar.png");


var _jsxFileName = "C:\\Users\\HABEEB\\Desktop\\disney-clone-graphcms-main\\pages\\index.js";










const getStaticProps = async () => {
  const url = process.env.ENDPOINT;
  const graphQLClient = new graphql_request__WEBPACK_IMPORTED_MODULE_1__.GraphQLClient(url, {
    headers: {
      "Authorization": `Bearer ${process.env.GRAPH_CMS_TOKEN}`
    }
  });
  const videosQuery = graphql_request__WEBPACK_IMPORTED_MODULE_1__.gql`
    query {
      videos {
        createdAt,
        id,
        title,
        description,
        seen,
        slug,
        tags,
        thumbnail {
          url
        },
        mp4 {
          url
        }
      }
    }
  `;
  const accountQuery = graphql_request__WEBPACK_IMPORTED_MODULE_1__.gql`
    query {
    account(where: { id: "cm42vlqz700rk07pg4sunfhd7"}) {
      username
      avatar {
        url
      }
    }
  }
  `;
  const data = await graphQLClient.request(videosQuery);
  const videos = data.videos;
  const accountData = await graphQLClient.request(accountQuery);
  const account = accountData.account;
  return {
    props: {
      videos,
      account
    }
  };
};

const Home = ({
  videos,
  account
}) => {
  const randomVideo = videos => {
    return videos[Math.floor(Math.random() * videos.length)];
  };

  const filterVideos = (videos, genre) => {
    return videos.filter(video => video.tags.includes(genre));
  };

  const unSeenVideos = videos => {
    return videos.filter(video => video.seen == false || video.seen == null);
  };

  console.log('not seen:', videos.filter(video => video.seen == false || video.seen == null));
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBar__WEBPACK_IMPORTED_MODULE_5__.default, {
      account: account
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
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
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "video-feed",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: "#disney",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "franchise",
            id: "disney",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Image__WEBPACK_IMPORTED_MODULE_3___default()), {
              src: _public_disney_button_png__WEBPACK_IMPORTED_MODULE_6__.default
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: "#pixar",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "franchise",
            id: "pixar",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Image__WEBPACK_IMPORTED_MODULE_3___default()), {
              src: _public_pixar_png__WEBPACK_IMPORTED_MODULE_10__.default
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: "#star-wars",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "franchise",
            id: "star-wars",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Image__WEBPACK_IMPORTED_MODULE_3___default()), {
              src: _public_star_wars_button_png__WEBPACK_IMPORTED_MODULE_9__.default
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: "#nat-geo",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "franchise",
            id: "nat-geo",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Image__WEBPACK_IMPORTED_MODULE_3___default()), {
              src: _public_natgeo_button_png__WEBPACK_IMPORTED_MODULE_8__.default
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: "#marvel",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "franchise",
            id: "marvel",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Image__WEBPACK_IMPORTED_MODULE_3___default()), {
              src: _public_marvel_button_png__WEBPACK_IMPORTED_MODULE_7__.default
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Section__WEBPACK_IMPORTED_MODULE_4__.default, {
        genre: 'Recommended for you',
        videos: unSeenVideos(videos)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Section__WEBPACK_IMPORTED_MODULE_4__.default, {
        genre: 'Family',
        videos: filterVideos(videos, 'family')
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Section__WEBPACK_IMPORTED_MODULE_4__.default, {
        genre: 'Thriller',
        videos: filterVideos(videos, 'thriller')
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Section__WEBPACK_IMPORTED_MODULE_4__.default, {
        genre: 'Classic',
        videos: filterVideos(videos, 'classic')
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Section__WEBPACK_IMPORTED_MODULE_4__.default, {
        id: "pixar",
        genre: 'Pixar',
        videos: filterVideos(videos, 'pixar')
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Section__WEBPACK_IMPORTED_MODULE_4__.default, {
        id: "marvel",
        genre: 'Marvel',
        videos: filterVideos(videos, 'thriller')
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Section__WEBPACK_IMPORTED_MODULE_4__.default, {
        id: "nat-geo",
        genre: 'National Geographic',
        videos: filterVideos(videos, 'national-geographic')
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Section__WEBPACK_IMPORTED_MODULE_4__.default, {
        id: "disney",
        genre: 'Disney',
        videos: filterVideos(videos, 'disney')
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Section__WEBPACK_IMPORTED_MODULE_4__.default, {
        id: "star-wars",
        genre: 'Star Wars',
        videos: filterVideos(videos, 'star-wars')
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ "./public/disney-button.png":
/*!**********************************!*\
  !*** ./public/disney-button.png ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/disney-button.bc19a795e61a418413a024cd9767f0ed.png","height":720,"width":1280,"blurDataURL":"/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fdisney-button.bc19a795e61a418413a024cd9767f0ed.png&w=8&q=70"});

/***/ }),

/***/ "./public/disney.png":
/*!***************************!*\
  !*** ./public/disney.png ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/disney.70ae28de30bb96b5352336f0ed806064.png","height":522,"width":900,"blurDataURL":"/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fdisney.70ae28de30bb96b5352336f0ed806064.png&w=8&q=70"});

/***/ }),

/***/ "./public/marvel-button.png":
/*!**********************************!*\
  !*** ./public/marvel-button.png ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/marvel-button.f2159ecf9fdb61e750754ce5a3e460b7.png","height":720,"width":1280,"blurDataURL":"/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fmarvel-button.f2159ecf9fdb61e750754ce5a3e460b7.png&w=8&q=70"});

/***/ }),

/***/ "./public/natgeo-button.png":
/*!**********************************!*\
  !*** ./public/natgeo-button.png ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/natgeo-button.f92899572d42ba111727f9021d88e0ba.png","height":720,"width":1280,"blurDataURL":"/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fnatgeo-button.f92899572d42ba111727f9021d88e0ba.png&w=8&q=70"});

/***/ }),

/***/ "./public/pixar.png":
/*!**************************!*\
  !*** ./public/pixar.png ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/pixar.7e1aa55f59dca864204b6cf83757a4b4.png","height":720,"width":1280,"blurDataURL":"/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fpixar.7e1aa55f59dca864204b6cf83757a4b4.png&w=8&q=70"});

/***/ }),

/***/ "./public/star-wars-button.png":
/*!*************************************!*\
  !*** ./public/star-wars-button.png ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/star-wars-button.92957ee48a32d4683647e02c06230b6b.png","height":720,"width":1280,"blurDataURL":"/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fstar-wars-button.92957ee48a32d4683647e02c06230b6b.png&w=8&q=70"});

/***/ }),

/***/ "graphql-request":
/*!**********************************!*\
  !*** external "graphql-request" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("graphql-request");

/***/ }),

/***/ "next/Image":
/*!*****************************!*\
  !*** external "next/Image" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("next/Image");

/***/ }),

/***/ "next/Link":
/*!****************************!*\
  !*** external "next/Link" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/Link");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFTLFFBQVQ7QUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkF6Q0osZUEwQ0ksOERBQUMsd0RBQUQ7QUFBUyxVQUFFLEVBQUMsV0FBWjtBQUF3QixhQUFLLEVBQUUsV0FBL0I7QUFBNEMsY0FBTSxFQUFFK0IsWUFBWSxDQUFDL0IsTUFBRCxFQUFTLFdBQVQ7QUFBaEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkExQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKO0FBQUEsa0JBREo7QUFtREgsQ0FyRUQ7O0FBdUVBLGlFQUFleUIsSUFBZjs7Ozs7Ozs7Ozs7Ozs7QUN2SUEsaUVBQWUsQ0FBQyxrUEFBa1A7Ozs7Ozs7Ozs7Ozs7O0FDQWxRLGlFQUFlLENBQUMsbU9BQW1POzs7Ozs7Ozs7Ozs7OztBQ0FuUCxpRUFBZSxDQUFDLGtQQUFrUDs7Ozs7Ozs7Ozs7Ozs7QUNBbFEsaUVBQWUsQ0FBQyxrUEFBa1A7Ozs7Ozs7Ozs7Ozs7O0FDQWxRLGlFQUFlLENBQUMsa09BQWtPOzs7Ozs7Ozs7Ozs7OztBQ0FsUCxpRUFBZSxDQUFDLHdQQUF3UDs7Ozs7Ozs7OztBQ0F4UTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Rpc25leS1jbG9uZS8uL2NvbXBvbmVudHMvQ2FyZC5qcyIsIndlYnBhY2s6Ly9kaXNuZXktY2xvbmUvLi9jb21wb25lbnRzL05hdkJhci5qcyIsIndlYnBhY2s6Ly9kaXNuZXktY2xvbmUvLi9jb21wb25lbnRzL1NlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vZGlzbmV5LWNsb25lLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGlzbmV5LWNsb25lLy4vcHVibGljL2Rpc25leS1idXR0b24ucG5nIiwid2VicGFjazovL2Rpc25leS1jbG9uZS8uL3B1YmxpYy9kaXNuZXkucG5nIiwid2VicGFjazovL2Rpc25leS1jbG9uZS8uL3B1YmxpYy9tYXJ2ZWwtYnV0dG9uLnBuZyIsIndlYnBhY2s6Ly9kaXNuZXktY2xvbmUvLi9wdWJsaWMvbmF0Z2VvLWJ1dHRvbi5wbmciLCJ3ZWJwYWNrOi8vZGlzbmV5LWNsb25lLy4vcHVibGljL3BpeGFyLnBuZyIsIndlYnBhY2s6Ly9kaXNuZXktY2xvbmUvLi9wdWJsaWMvc3Rhci13YXJzLWJ1dHRvbi5wbmciLCJ3ZWJwYWNrOi8vZGlzbmV5LWNsb25lL2V4dGVybmFsIFwiZ3JhcGhxbC1yZXF1ZXN0XCIiLCJ3ZWJwYWNrOi8vZGlzbmV5LWNsb25lL2V4dGVybmFsIFwibmV4dC9JbWFnZVwiIiwid2VicGFjazovL2Rpc25leS1jbG9uZS9leHRlcm5hbCBcIm5leHQvTGlua1wiIiwid2VicGFjazovL2Rpc25leS1jbG9uZS9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IENhcmQgPSAoeyB0aHVtYm5haWwgfSkgPT4ge1xuICAgIHJldHVybiA8aW1nIGNsYXNzTmFtZT1cImNhcmRcIiBzcmM9e3RodW1ibmFpbC51cmx9IGFsdD17dGh1bWJuYWlsLnRpdGxlfS8+XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcmQiLCJpbXBvcnQgTGluayBmcm9tICduZXh0L0xpbmsnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9JbWFnZSdcbmltcG9ydCBsb2dvIGZyb20gJy4uL3B1YmxpYy9kaXNuZXkucG5nJ1xuXG5jb25zdCBOYXZCYXIgPSAoe2FjY291bnR9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nby13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj48SW1hZ2Ugc3JjPXtsb2dvfSBhbHQ9XCJEaXNuZXkgTG9nb1wiIHdpZHRoPXs5MH0gaGVpZ2h0PXs1MH0vPjwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY291bnQtaW5mb1wiPlxuICAgICAgICAgICAgICAgIDxwPldlbGNvbWUge2FjY291bnQudXNlcm5hbWV9PC9wPlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiYXZhdGFyXCIgc3JjPXthY2NvdW50LmF2YXRhci51cmx9Lz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdkJhciIsImltcG9ydCBDYXJkIGZyb20gJy4vQ2FyZCdcblxuY29uc3QgU2VjdGlvbiA9ICh7Z2VucmUsIHZpZGVvcyB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uXCI+XG4gICAgICAgICAgICA8aDM+e2dlbnJlfTwvaDM+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHt2aWRlb3MubWFwKHZpZGVvID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGEga2V5PXt2aWRlby5pZH0gaHJlZj17YC92aWRlby8ke3ZpZGVvLnNsdWd9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCB0aHVtYm5haWw9e3ZpZGVvLnRodW1ibmFpbH0vPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uIiwiaW1wb3J0IHtncWwsIEdyYXBoUUxDbGllbnR9IGZyb20gJ2dyYXBocWwtcmVxdWVzdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvTGluaydcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L0ltYWdlJ1xuaW1wb3J0IFNlY3Rpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VjdGlvblwiXG5pbXBvcnQgTmF2QmFyIGZyb20gXCIuLi9jb21wb25lbnRzL05hdkJhclwiXG5pbXBvcnQgZGlzbmV5TG9nbyBmcm9tICcuLi9wdWJsaWMvZGlzbmV5LWJ1dHRvbi5wbmcnXG5pbXBvcnQgbWFydmVsTG9nbyBmcm9tICcuLi9wdWJsaWMvbWFydmVsLWJ1dHRvbi5wbmcnXG5pbXBvcnQgbmF0Z2VvTG9nbyBmcm9tICcuLi9wdWJsaWMvbmF0Z2VvLWJ1dHRvbi5wbmcnXG5pbXBvcnQgc3RhcndhcnNMb2dvIGZyb20gJy4uL3B1YmxpYy9zdGFyLXdhcnMtYnV0dG9uLnBuZydcbmltcG9ydCBwaXhhckxvZ28gZnJvbSAnLi4vcHVibGljL3BpeGFyLnBuZydcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHVybCA9IHByb2Nlc3MuZW52LkVORFBPSU5UXG4gICAgY29uc3QgZ3JhcGhRTENsaWVudCA9IG5ldyBHcmFwaFFMQ2xpZW50KHVybCwge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogYEJlYXJlciAke3Byb2Nlc3MuZW52LkdSQVBIX0NNU19UT0tFTn1gXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgdmlkZW9zUXVlcnkgPSBncWxgXG4gICAgcXVlcnkge1xuICAgICAgdmlkZW9zIHtcbiAgICAgICAgY3JlYXRlZEF0LFxuICAgICAgICBpZCxcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICBzZWVuLFxuICAgICAgICBzbHVnLFxuICAgICAgICB0YWdzLFxuICAgICAgICB0aHVtYm5haWwge1xuICAgICAgICAgIHVybFxuICAgICAgICB9LFxuICAgICAgICBtcDQge1xuICAgICAgICAgIHVybFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICBgXG5cbiAgICBjb25zdCBhY2NvdW50UXVlcnkgPSBncWxgXG4gICAgcXVlcnkge1xuICAgIGFjY291bnQod2hlcmU6IHsgaWQ6IFwiY200MnZscXo3MDByazA3cGc0c3VuZmhkN1wifSkge1xuICAgICAgdXNlcm5hbWVcbiAgICAgIGF2YXRhciB7XG4gICAgICAgIHVybFxuICAgICAgfVxuICAgIH1cbiAgfVxuICBgXG5cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZ3JhcGhRTENsaWVudC5yZXF1ZXN0KHZpZGVvc1F1ZXJ5KVxuICAgIGNvbnN0IHZpZGVvcyA9IGRhdGEudmlkZW9zXG4gICAgY29uc3QgYWNjb3VudERhdGEgPSBhd2FpdCBncmFwaFFMQ2xpZW50LnJlcXVlc3QoYWNjb3VudFF1ZXJ5KVxuICAgIGNvbnN0IGFjY291bnQgPSBhY2NvdW50RGF0YS5hY2NvdW50XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgdmlkZW9zLFxuICAgICAgICAgICAgYWNjb3VudFxuICAgICAgICB9XG4gICAgfVxufVxuXG5cbmNvbnN0IEhvbWUgPSAoe3ZpZGVvcywgYWNjb3VudH0pID0+IHtcblxuXG4gICAgY29uc3QgcmFuZG9tVmlkZW8gPSAodmlkZW9zKSA9PiB7XG4gICAgICAgIHJldHVybiB2aWRlb3NbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdmlkZW9zLmxlbmd0aCldXG4gICAgfVxuXG4gICAgY29uc3QgZmlsdGVyVmlkZW9zID0gKHZpZGVvcywgZ2VucmUpID0+IHtcbiAgICAgICAgcmV0dXJuIHZpZGVvcy5maWx0ZXIoKHZpZGVvKSA9PiB2aWRlby50YWdzLmluY2x1ZGVzKGdlbnJlKSlcbiAgICB9XG5cbiAgICBjb25zdCB1blNlZW5WaWRlb3MgPSAodmlkZW9zKSA9PiB7XG4gICAgICAgIHJldHVybiB2aWRlb3MuZmlsdGVyKHZpZGVvID0+IHZpZGVvLnNlZW4gPT0gZmFsc2UgfHwgdmlkZW8uc2VlbiA9PSBudWxsKVxuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKCdub3Qgc2VlbjonLCB2aWRlb3MuZmlsdGVyKHZpZGVvID0+IHZpZGVvLnNlZW4gPT0gZmFsc2UgfHwgdmlkZW8uc2VlbiA9PSBudWxsKSlcblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxOYXZCYXIgYWNjb3VudD17YWNjb3VudH0vPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcHBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tdmlkZW9cIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3JhbmRvbVZpZGVvKHZpZGVvcykudGh1bWJuYWlsLnVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e3JhbmRvbVZpZGVvKHZpZGVvcykudGl0bGV9Lz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlkZW8tZmVlZFwiPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI2Rpc25leVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmcmFuY2hpc2VcIiBpZD1cImRpc25leVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2Rpc25leUxvZ299Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjcGl4YXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnJhbmNoaXNlXCIgaWQ9XCJwaXhhclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e3BpeGFyTG9nb30vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNzdGFyLXdhcnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnJhbmNoaXNlXCIgaWQ9XCJzdGFyLXdhcnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtzdGFyd2Fyc0xvZ299Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjbmF0LWdlb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmcmFuY2hpc2VcIiBpZD1cIm5hdC1nZW9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtuYXRnZW9Mb2dvfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI21hcnZlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmcmFuY2hpc2VcIiBpZD1cIm1hcnZlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e21hcnZlbExvZ299Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPFNlY3Rpb24gZ2VucmU9eydSZWNvbW1lbmRlZCBmb3IgeW91J30gdmlkZW9zPXt1blNlZW5WaWRlb3ModmlkZW9zKX0vPlxuICAgICAgICAgICAgICAgIDxTZWN0aW9uIGdlbnJlPXsnRmFtaWx5J30gdmlkZW9zPXtmaWx0ZXJWaWRlb3ModmlkZW9zLCAnZmFtaWx5Jyl9Lz5cbiAgICAgICAgICAgICAgICA8U2VjdGlvbiBnZW5yZT17J1RocmlsbGVyJ30gdmlkZW9zPXtmaWx0ZXJWaWRlb3ModmlkZW9zLCAndGhyaWxsZXInKX0vPlxuICAgICAgICAgICAgICAgIDxTZWN0aW9uIGdlbnJlPXsnQ2xhc3NpYyd9IHZpZGVvcz17ZmlsdGVyVmlkZW9zKHZpZGVvcywgJ2NsYXNzaWMnKX0vPlxuICAgICAgICAgICAgICAgIDxTZWN0aW9uIGlkPVwicGl4YXJcIiBnZW5yZT17J1BpeGFyJ30gdmlkZW9zPXtmaWx0ZXJWaWRlb3ModmlkZW9zLCAncGl4YXInKX0vPlxuICAgICAgICAgICAgICAgIDxTZWN0aW9uIGlkPVwibWFydmVsXCIgZ2VucmU9eydNYXJ2ZWwnfSB2aWRlb3M9e2ZpbHRlclZpZGVvcyh2aWRlb3MsICd0aHJpbGxlcicpfS8+XG4gICAgICAgICAgICAgICAgPFNlY3Rpb24gaWQ9XCJuYXQtZ2VvXCIgZ2VucmU9eydOYXRpb25hbCBHZW9ncmFwaGljJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICB2aWRlb3M9e2ZpbHRlclZpZGVvcyh2aWRlb3MsICduYXRpb25hbC1nZW9ncmFwaGljJyl9Lz5cbiAgICAgICAgICAgICAgICA8U2VjdGlvbiBpZD1cImRpc25leVwiIGdlbnJlPXsnRGlzbmV5J30gdmlkZW9zPXtmaWx0ZXJWaWRlb3ModmlkZW9zLCAnZGlzbmV5Jyl9Lz5cbiAgICAgICAgICAgICAgICA8U2VjdGlvbiBpZD1cInN0YXItd2Fyc1wiIGdlbnJlPXsnU3RhciBXYXJzJ30gdmlkZW9zPXtmaWx0ZXJWaWRlb3ModmlkZW9zLCAnc3Rhci13YXJzJyl9Lz5cblxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG5cblxuXG5cblxuXG5cblxuXG5cbiIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvZGlzbmV5LWJ1dHRvbi5iYzE5YTc5NWU2MWE0MTg0MTNhMDI0Y2Q5NzY3ZjBlZC5wbmdcIixcImhlaWdodFwiOjcyMCxcIndpZHRoXCI6MTI4MCxcImJsdXJEYXRhVVJMXCI6XCIvX25leHQvaW1hZ2U/dXJsPSUyRl9uZXh0JTJGc3RhdGljJTJGaW1hZ2UlMkZwdWJsaWMlMkZkaXNuZXktYnV0dG9uLmJjMTlhNzk1ZTYxYTQxODQxM2EwMjRjZDk3NjdmMGVkLnBuZyZ3PTgmcT03MFwifTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2Rpc25leS43MGFlMjhkZTMwYmI5NmI1MzUyMzM2ZjBlZDgwNjA2NC5wbmdcIixcImhlaWdodFwiOjUyMixcIndpZHRoXCI6OTAwLFwiYmx1ckRhdGFVUkxcIjpcIi9fbmV4dC9pbWFnZT91cmw9JTJGX25leHQlMkZzdGF0aWMlMkZpbWFnZSUyRnB1YmxpYyUyRmRpc25leS43MGFlMjhkZTMwYmI5NmI1MzUyMzM2ZjBlZDgwNjA2NC5wbmcmdz04JnE9NzBcIn07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9tYXJ2ZWwtYnV0dG9uLmYyMTU5ZWNmOWZkYjYxZTc1MDc1NGNlNWEzZTQ2MGI3LnBuZ1wiLFwiaGVpZ2h0XCI6NzIwLFwid2lkdGhcIjoxMjgwLFwiYmx1ckRhdGFVUkxcIjpcIi9fbmV4dC9pbWFnZT91cmw9JTJGX25leHQlMkZzdGF0aWMlMkZpbWFnZSUyRnB1YmxpYyUyRm1hcnZlbC1idXR0b24uZjIxNTllY2Y5ZmRiNjFlNzUwNzU0Y2U1YTNlNDYwYjcucG5nJnc9OCZxPTcwXCJ9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvbmF0Z2VvLWJ1dHRvbi5mOTI4OTk1NzJkNDJiYTExMTcyN2Y5MDIxZDg4ZTBiYS5wbmdcIixcImhlaWdodFwiOjcyMCxcIndpZHRoXCI6MTI4MCxcImJsdXJEYXRhVVJMXCI6XCIvX25leHQvaW1hZ2U/dXJsPSUyRl9uZXh0JTJGc3RhdGljJTJGaW1hZ2UlMkZwdWJsaWMlMkZuYXRnZW8tYnV0dG9uLmY5Mjg5OTU3MmQ0MmJhMTExNzI3ZjkwMjFkODhlMGJhLnBuZyZ3PTgmcT03MFwifTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL3BpeGFyLjdlMWFhNTVmNTlkY2E4NjQyMDRiNmNmODM3NTdhNGI0LnBuZ1wiLFwiaGVpZ2h0XCI6NzIwLFwid2lkdGhcIjoxMjgwLFwiYmx1ckRhdGFVUkxcIjpcIi9fbmV4dC9pbWFnZT91cmw9JTJGX25leHQlMkZzdGF0aWMlMkZpbWFnZSUyRnB1YmxpYyUyRnBpeGFyLjdlMWFhNTVmNTlkY2E4NjQyMDRiNmNmODM3NTdhNGI0LnBuZyZ3PTgmcT03MFwifTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL3N0YXItd2Fycy1idXR0b24uOTI5NTdlZTQ4YTMyZDQ2ODM2NDdlMDJjMDYyMzBiNmIucG5nXCIsXCJoZWlnaHRcIjo3MjAsXCJ3aWR0aFwiOjEyODAsXCJibHVyRGF0YVVSTFwiOlwiL19uZXh0L2ltYWdlP3VybD0lMkZfbmV4dCUyRnN0YXRpYyUyRmltYWdlJTJGcHVibGljJTJGc3Rhci13YXJzLWJ1dHRvbi45Mjk1N2VlNDhhMzJkNDY4MzY0N2UwMmMwNjIzMGI2Yi5wbmcmdz04JnE9NzBcIn07IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ3JhcGhxbC1yZXF1ZXN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvSW1hZ2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9MaW5rXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsiQ2FyZCIsInRodW1ibmFpbCIsInVybCIsInRpdGxlIiwiTGluayIsIkltYWdlIiwibG9nbyIsIk5hdkJhciIsImFjY291bnQiLCJ1c2VybmFtZSIsImF2YXRhciIsIlNlY3Rpb24iLCJnZW5yZSIsInZpZGVvcyIsIm1hcCIsInZpZGVvIiwic2x1ZyIsImlkIiwiZ3FsIiwiR3JhcGhRTENsaWVudCIsImRpc25leUxvZ28iLCJtYXJ2ZWxMb2dvIiwibmF0Z2VvTG9nbyIsInN0YXJ3YXJzTG9nbyIsInBpeGFyTG9nbyIsImdldFN0YXRpY1Byb3BzIiwicHJvY2VzcyIsImVudiIsIkVORFBPSU5UIiwiZ3JhcGhRTENsaWVudCIsImhlYWRlcnMiLCJHUkFQSF9DTVNfVE9LRU4iLCJ2aWRlb3NRdWVyeSIsImFjY291bnRRdWVyeSIsImRhdGEiLCJyZXF1ZXN0IiwiYWNjb3VudERhdGEiLCJwcm9wcyIsIkhvbWUiLCJyYW5kb21WaWRlbyIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsImZpbHRlclZpZGVvcyIsImZpbHRlciIsInRhZ3MiLCJpbmNsdWRlcyIsInVuU2VlblZpZGVvcyIsInNlZW4iLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==