"use strict";
(() => {
var exports = {};
exports.id = "pages/api/changeToSeen";
exports.ids = ["pages/api/changeToSeen"];
exports.modules = {

/***/ "./pages/api/changeToSeen.js":
/*!***********************************!*\
  !*** ./pages/api/changeToSeen.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-request */ "graphql-request");
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async ({
  body
}, res) => {
  const url = process.env.ENDPOINT;
  const graphcms = new graphql_request__WEBPACK_IMPORTED_MODULE_0__.GraphQLClient(url, {
    headers: {
      "Authorization": `Bearer ${process.env.GRAPH_CMS_TOKEN}`
    }
  });
  await graphcms.request(`
        mutation($slug: String!) {
          updateVideo(where: 
            { slug: $slug}, 
            data: { seen: true}
          ) {
            id,
            title,
            seen
          }
        }
        `, {
    slug: body.slug
  });
  await graphcms.request(`mutation publishVideo($slug: String) {
        publishVideo(where: { slug: $slug}, to: PUBLISHED) {
            slug
            }
        }`, {
    slug: body.slug
  });
  res.status(201).json({
    slug: body.slug
  });
});

/***/ }),

/***/ "graphql-request":
/*!**********************************!*\
  !*** external "graphql-request" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("graphql-request");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/changeToSeen.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL2NoYW5nZVRvU2Vlbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxpRUFBZSxPQUFPO0FBQUVDLEVBQUFBO0FBQUYsQ0FBUCxFQUFnQkMsR0FBaEIsS0FBd0I7QUFDbkMsUUFBTUMsR0FBRyxHQUFHQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsUUFBeEI7QUFDQSxRQUFNQyxRQUFRLEdBQUcsSUFBSVAsMERBQUosQ0FBa0JHLEdBQWxCLEVBQXVCO0FBQ3BDSyxJQUFBQSxPQUFPLEVBQUU7QUFBRSx1QkFBbUIsVUFBU0osT0FBTyxDQUFDQyxHQUFSLENBQVlJLGVBQWdCO0FBQTFEO0FBRDJCLEdBQXZCLENBQWpCO0FBSUEsUUFBTUYsUUFBUSxDQUFDRyxPQUFULENBQ0Q7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBWlUsRUFhRjtBQUFFQyxJQUFBQSxJQUFJLEVBQUVWLElBQUksQ0FBQ1U7QUFBYixHQWJFLENBQU47QUFnQkEsUUFBTUosUUFBUSxDQUFDRyxPQUFULENBQ0Q7QUFDVDtBQUNBO0FBQ0E7QUFDQSxVQUxVLEVBTUY7QUFBRUMsSUFBQUEsSUFBSSxFQUFFVixJQUFJLENBQUNVO0FBQWIsR0FORSxDQUFOO0FBU0FULEVBQUFBLEdBQUcsQ0FBQ1UsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVGLElBQUFBLElBQUksRUFBRVYsSUFBSSxDQUFDVTtBQUFiLEdBQXJCO0FBQ0gsQ0FoQ0Q7Ozs7Ozs7Ozs7QUNGQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Rpc25leS1jbG9uZS8uL3BhZ2VzL2FwaS9jaGFuZ2VUb1NlZW4uanMiLCJ3ZWJwYWNrOi8vZGlzbmV5LWNsb25lL2V4dGVybmFsIFwiZ3JhcGhxbC1yZXF1ZXN0XCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3JhcGhRTENsaWVudCB9IGZyb20gJ2dyYXBocWwtcmVxdWVzdCdcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHsgYm9keX0sIHJlcykgPT4ge1xuICAgIGNvbnN0IHVybCA9IHByb2Nlc3MuZW52LkVORFBPSU5UXG4gICAgY29uc3QgZ3JhcGhjbXMgPSBuZXcgR3JhcGhRTENsaWVudCh1cmwsIHtcbiAgICAgICAgaGVhZGVyczogeyBcIkF1dGhvcml6YXRpb25cIiA6IGBCZWFyZXIgJHtwcm9jZXNzLmVudi5HUkFQSF9DTVNfVE9LRU59YH1cbiAgICB9KVxuXG4gICAgYXdhaXQgZ3JhcGhjbXMucmVxdWVzdChcbiAgICAgICAgYFxuICAgICAgICBtdXRhdGlvbigkc2x1ZzogU3RyaW5nISkge1xuICAgICAgICAgIHVwZGF0ZVZpZGVvKHdoZXJlOiBcbiAgICAgICAgICAgIHsgc2x1ZzogJHNsdWd9LCBcbiAgICAgICAgICAgIGRhdGE6IHsgc2VlbjogdHJ1ZX1cbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgdGl0bGUsXG4gICAgICAgICAgICBzZWVuXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGAsXG4gICAgICAgIHsgc2x1ZzogYm9keS5zbHVnIH1cbiAgICApXG5cbiAgICBhd2FpdCBncmFwaGNtcy5yZXF1ZXN0KFxuICAgICAgICBgbXV0YXRpb24gcHVibGlzaFZpZGVvKCRzbHVnOiBTdHJpbmcpIHtcbiAgICAgICAgcHVibGlzaFZpZGVvKHdoZXJlOiB7IHNsdWc6ICRzbHVnfSwgdG86IFBVQkxJU0hFRCkge1xuICAgICAgICAgICAgc2x1Z1xuICAgICAgICAgICAgfVxuICAgICAgICB9YCxcbiAgICAgICAgeyBzbHVnOiBib2R5LnNsdWcgfVxuICAgIClcblxuICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHsgc2x1ZzogYm9keS5zbHVnIH0pXG59XG5cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdyYXBocWwtcmVxdWVzdFwiKTsiXSwibmFtZXMiOlsiR3JhcGhRTENsaWVudCIsImJvZHkiLCJyZXMiLCJ1cmwiLCJwcm9jZXNzIiwiZW52IiwiRU5EUE9JTlQiLCJncmFwaGNtcyIsImhlYWRlcnMiLCJHUkFQSF9DTVNfVE9LRU4iLCJyZXF1ZXN0Iiwic2x1ZyIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9