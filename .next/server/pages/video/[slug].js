"use strict";
(() => {
var exports = {};
exports.id = "pages/video/[slug]";
exports.ids = ["pages/video/[slug]"];
exports.modules = {

/***/ "./pages/video/[slug].js":
/*!*******************************!*\
  !*** ./pages/video/[slug].js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-request */ "graphql-request");
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\HABEEB\\Desktop\\disney-clone-graphcms-main\\pages\\video\\[slug].js";


const getServerSideProps = async pageContext => {
  const url = process.env.ENDPOINT;
  const graphQLClient = new graphql_request__WEBPACK_IMPORTED_MODULE_1__.GraphQLClient(url, {
    headers: {
      "Authorization": `Bearer ${process.env.GRAPH_CMS_TOKEN}`
    }
  });
  const pageSlug = pageContext.query.slug;
  const query = graphql_request__WEBPACK_IMPORTED_MODULE_1__.gql`
    query($pageSlug: String!) {
      video(where: {
        slug: $pageSlug
      }) {
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
  const variables = {
    pageSlug
  };
  const data = await graphQLClient.request(query, variables);
  const video = data.video;
  return {
    props: {
      video
    }
  };
};

const changeToSeen = async slug => {
  await fetch('/api/changeToSeen', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      slug
    })
  });
};

const Video = ({
  video
}) => {
  const {
    0: watching,
    1: setWatching
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [!watching && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
      className: "video-image",
      src: video.thumbnail.url,
      alt: video.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 27
    }, undefined), !watching && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "info",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: video.tags.join(', ')
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: video.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: "/",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: "go back"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 29
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "video-overlay",
        onClick: () => {
          changeToSeen(video.slug);
          watching ? setWatching(false) : setWatching(true);
        },
        children: "PLAY"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 27
    }, undefined), watching && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("video", {
      width: "100%",
      controls: true,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("source", {
        src: video.mp4.url,
        type: "video/mp4"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 21
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 17
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "info-footer",
      onClick: () => watching ? setWatching(false) : null
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Video);

/***/ }),

/***/ "graphql-request":
/*!**********************************!*\
  !*** external "graphql-request" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("graphql-request");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/video/[slug].js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBLGlCQUZsQixFQWNLRCxRQUFRLGlCQUNMO0FBQU8sV0FBSyxFQUFDLE1BQWI7QUFBb0IsY0FBUSxNQUE1QjtBQUFBLDZCQUNJO0FBQVEsV0FBRyxFQUFFVCxLQUFLLENBQUNnQixHQUFOLENBQVU3QixHQUF2QjtBQUE0QixZQUFJLEVBQUM7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBZlIsZUFtQkk7QUFBSyxlQUFTLEVBQUMsYUFBZjtBQUNLLGFBQU8sRUFBRSxNQUFNc0IsUUFBUSxHQUFHQyxXQUFXLENBQUMsS0FBRCxDQUFkLEdBQXdCO0FBRHBEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBbkJKO0FBQUEsa0JBREo7QUF5QkgsQ0E1QkQ7O0FBOEJBLGlFQUFlRixLQUFmOzs7Ozs7Ozs7O0FDeEZBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Rpc25leS1jbG9uZS8uL3BhZ2VzL3ZpZGVvL1tzbHVnXS5qcyIsIndlYnBhY2s6Ly9kaXNuZXktY2xvbmUvZXh0ZXJuYWwgXCJncmFwaHFsLXJlcXVlc3RcIiIsIndlYnBhY2s6Ly9kaXNuZXktY2xvbmUvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2Rpc25leS1jbG9uZS9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdxbCwgR3JhcGhRTENsaWVudCB9IGZyb20gJ2dyYXBocWwtcmVxdWVzdCdcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKHBhZ2VDb250ZXh0KSA9PiB7XG4gICAgY29uc3QgdXJsID0gcHJvY2Vzcy5lbnYuRU5EUE9JTlRcbiAgICBjb25zdCBncmFwaFFMQ2xpZW50ID0gbmV3IEdyYXBoUUxDbGllbnQodXJsLCB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiIDogYEJlYXJlciAke3Byb2Nlc3MuZW52LkdSQVBIX0NNU19UT0tFTn1gXG4gICAgICAgIH1cbiAgICB9KVxuICAgIGNvbnN0IHBhZ2VTbHVnID0gcGFnZUNvbnRleHQucXVlcnkuc2x1Z1xuXG4gICAgY29uc3QgcXVlcnkgPSBncWxgXG4gICAgcXVlcnkoJHBhZ2VTbHVnOiBTdHJpbmchKSB7XG4gICAgICB2aWRlbyh3aGVyZToge1xuICAgICAgICBzbHVnOiAkcGFnZVNsdWdcbiAgICAgIH0pIHtcbiAgICAgICAgY3JlYXRlZEF0LFxuICAgICAgICBpZCxcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICBzZWVuLFxuICAgICAgICBzbHVnLFxuICAgICAgICB0YWdzLFxuICAgICAgICB0aHVtYm5haWwge1xuICAgICAgICAgIHVybFxuICAgICAgICB9LFxuICAgICAgICBtcDQge1xuICAgICAgICAgIHVybFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGBcblxuICAgIGNvbnN0IHZhcmlhYmxlcyA9IHtcbiAgICAgICAgcGFnZVNsdWcsXG4gICAgfVxuXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGdyYXBoUUxDbGllbnQucmVxdWVzdChxdWVyeSwgdmFyaWFibGVzKVxuICAgIGNvbnN0IHZpZGVvID0gZGF0YS52aWRlb1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIHZpZGVvXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNvbnN0IGNoYW5nZVRvU2VlbiA9IGFzeW5jIChzbHVnKSA9PiB7XG4gICAgYXdhaXQgZmV0Y2goJy9hcGkvY2hhbmdlVG9TZWVuJywge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHNsdWcgfSlcbiAgICB9KVxufVxuXG5jb25zdCBWaWRlbyA9ICh7IHZpZGVvIH0pID0+IHtcbiAgICBjb25zdCBbd2F0Y2hpbmcsIHNldFdhdGNoaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIHshd2F0Y2hpbmcgJiYgPGltZyBjbGFzc05hbWU9XCJ2aWRlby1pbWFnZVwiIHNyYz17dmlkZW8udGh1bWJuYWlsLnVybH0gYWx0PXt2aWRlby50aXRsZX0vPn1cbiAgICAgICAgICAgIHshd2F0Y2hpbmcgJiYgPGRpdiBjbGFzc05hbWU9XCJpbmZvXCI+XG4gICAgICAgICAgICAgICAgPHA+e3ZpZGVvLnRhZ3Muam9pbignLCAnKX08L3A+XG4gICAgICAgICAgICAgICAgPHA+e3ZpZGVvLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiPjxwPmdvIGJhY2s8L3A+PC9hPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidmlkZW8tb3ZlcmxheVwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZVRvU2Vlbih2aWRlby5zbHVnKVxuICAgICAgICAgICAgICAgICAgICAgICAgd2F0Y2hpbmcgPyBzZXRXYXRjaGluZyhmYWxzZSk6IHNldFdhdGNoaW5nKHRydWUpXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlBMQVk8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2Pn1cbiAgICAgICAgICAgIHt3YXRjaGluZyAmJiAoXG4gICAgICAgICAgICAgICAgPHZpZGVvIHdpZHRoPVwiMTAwJVwiIGNvbnRyb2xzPlxuICAgICAgICAgICAgICAgICAgICA8c291cmNlIHNyYz17dmlkZW8ubXA0LnVybH0gdHlwZT1cInZpZGVvL21wNFwiLz5cbiAgICAgICAgICAgICAgICA8L3ZpZGVvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mby1mb290ZXJcIlxuICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB3YXRjaGluZyA/IHNldFdhdGNoaW5nKGZhbHNlKSA6IG51bGx9XG4gICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVmlkZW9cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdyYXBocWwtcmVxdWVzdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbImdxbCIsIkdyYXBoUUxDbGllbnQiLCJ1c2VTdGF0ZSIsImdldFNlcnZlclNpZGVQcm9wcyIsInBhZ2VDb250ZXh0IiwidXJsIiwicHJvY2VzcyIsImVudiIsIkVORFBPSU5UIiwiZ3JhcGhRTENsaWVudCIsImhlYWRlcnMiLCJHUkFQSF9DTVNfVE9LRU4iLCJwYWdlU2x1ZyIsInF1ZXJ5Iiwic2x1ZyIsInZhcmlhYmxlcyIsImRhdGEiLCJyZXF1ZXN0IiwidmlkZW8iLCJwcm9wcyIsImNoYW5nZVRvU2VlbiIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJWaWRlbyIsIndhdGNoaW5nIiwic2V0V2F0Y2hpbmciLCJ0aHVtYm5haWwiLCJ0aXRsZSIsInRhZ3MiLCJqb2luIiwiZGVzY3JpcHRpb24iLCJtcDQiXSwic291cmNlUm9vdCI6IiJ9