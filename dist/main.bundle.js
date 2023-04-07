"use strict";
(self["webpackChunkwebpack_boilerplate"] = self["webpackChunkwebpack_boilerplate"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html {\r\n  box-sizing: border-box;\r\n  font-family: 'Lobster Two', cursive;\r\n  font-size: 16px;\r\n  -webkit-text-size-adjust: 100%;\r\n}\r\n\r\nbody {\r\n  background: rgb(63, 94, 251);\r\n  background: radial-gradient(circle, rgba(63, 94, 251, 1) 0%, rgba(70, 159, 252, 1) 77%);\r\n}\r\n\r\n.activities {\r\n  background: rgb(63, 94, 251);\r\n  background: radial-gradient(circle, rgba(63, 94, 251, 1) 0%, rgba(70, 159, 252, 1) 77%);\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: inherit;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.main-activities {\r\n  margin: 0 30%;\r\n  position: absolute;\r\n  background-color: aquamarine;\r\n  width: 35%;\r\n  top: 50%;\r\n  -ms-transform: translateY(-50%);\r\n  transform: translateY(-50%);\r\n}\r\n\r\n.title {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.activities-list {\r\n  list-style: none;\r\n  margin-left: 1rem;\r\n}\r\n\r\n.update {\r\n  margin: auto 0.5rem;\r\n  font-size: 1.5rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.input-div {\r\n  margin: 1rem 0;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.todo-title {\r\n  margin-left: 1rem;\r\n}\r\n\r\n.activities-input {\r\n  margin-left: 1rem;\r\n  height: 2rem;\r\n  width: 30rem;\r\n  font-family: 'Lobster Two', cursive;\r\n  font-size: 1.5rem;\r\n  color: #807575;\r\n}\r\n\r\ninput::placeholder {\r\n  font-family: 'Lobster Two', cursive;\r\n  font-size: 1.5rem;\r\n  font-style: italic;\r\n  line-height: 1.5rem;\r\n}\r\n\r\nli {\r\n  margin-bottom: 0.5rem;\r\n}\r\n\r\n.li-activity {\r\n  font-family: 'Lobster Two', cursive;\r\n  font-size: 1rem;\r\n  line-height: 1.5rem;\r\n  height: 2rem;\r\n  width: 29rem;\r\n}\r\n\r\n.footer {\r\n  height: 3rem;\r\n  background-color: #f6f6f6;\r\n  text-align: center;\r\n}\r\n\r\n.button {\r\n  text-align: center;\r\n  margin: auto;\r\n  padding-top: 0.5rem;\r\n  text-decoration: underline;\r\n  width: 100%;\r\n  background-color: #f6f6f6;\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.box.checked {\r\n  background: aquamarine;\r\n  color: #000;\r\n  font-weight: 700;\r\n  border: none;\r\n  font-size: 1rem;\r\n}\r\n\r\n.todoactivities {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.delete-button {\r\n  cursor: pointer;\r\n  margin-right: 0.5rem;\r\n}\r\n\r\n.box {\r\n  background-color: #fff;\r\n  color: #fff;\r\n  width: 1.5rem;\r\n  height: 1.5rem;\r\n  border: solid 1px #807575;\r\n}\r\n\r\n.tasks-list {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 0.25rem;\r\n}\r\n\r\n.li-activity.checked {\r\n  background: aquamarine;\r\n  border: none;\r\n  text-decoration: line-through;\r\n  text-decoration-style: double;\r\n}\r\n\r\n.delete-button.show-trash .trash {\r\n  display: block;\r\n}\r\n\r\n.ellipse {\r\n  display: none;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,mCAAmC;EACnC,eAAe;EACf,8BAA8B;AAChC;;AAEA;EACE,4BAA4B;EAC5B,uFAAuF;AACzF;;AAEA;EACE,4BAA4B;EAC5B,uFAAuF;AACzF;;AAEA;;;EAGE,mBAAmB;EACnB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,4BAA4B;EAC5B,UAAU;EACV,QAAQ;EACR,+BAA+B;EAC/B,2BAA2B;AAC7B;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,mBAAmB;EACnB,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;EACjB,YAAY;EACZ,YAAY;EACZ,mCAAmC;EACnC,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,mCAAmC;EACnC,iBAAiB;EACjB,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,mCAAmC;EACnC,eAAe;EACf,mBAAmB;EACnB,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,mBAAmB;EACnB,0BAA0B;EAC1B,WAAW;EACX,yBAAyB;EACzB,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,sBAAsB;EACtB,WAAW;EACX,gBAAgB;EAChB,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,oBAAoB;AACtB;;AAEA;EACE,sBAAsB;EACtB,WAAW;EACX,aAAa;EACb,cAAc;EACd,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,sBAAsB;EACtB,YAAY;EACZ,6BAA6B;EAC7B,6BAA6B;AAC/B;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;AACf","sourcesContent":["html {\r\n  box-sizing: border-box;\r\n  font-family: 'Lobster Two', cursive;\r\n  font-size: 16px;\r\n  -webkit-text-size-adjust: 100%;\r\n}\r\n\r\nbody {\r\n  background: rgb(63, 94, 251);\r\n  background: radial-gradient(circle, rgba(63, 94, 251, 1) 0%, rgba(70, 159, 252, 1) 77%);\r\n}\r\n\r\n.activities {\r\n  background: rgb(63, 94, 251);\r\n  background: radial-gradient(circle, rgba(63, 94, 251, 1) 0%, rgba(70, 159, 252, 1) 77%);\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: inherit;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.main-activities {\r\n  margin: 0 30%;\r\n  position: absolute;\r\n  background-color: aquamarine;\r\n  width: 35%;\r\n  top: 50%;\r\n  -ms-transform: translateY(-50%);\r\n  transform: translateY(-50%);\r\n}\r\n\r\n.title {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.activities-list {\r\n  list-style: none;\r\n  margin-left: 1rem;\r\n}\r\n\r\n.update {\r\n  margin: auto 0.5rem;\r\n  font-size: 1.5rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.input-div {\r\n  margin: 1rem 0;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.todo-title {\r\n  margin-left: 1rem;\r\n}\r\n\r\n.activities-input {\r\n  margin-left: 1rem;\r\n  height: 2rem;\r\n  width: 30rem;\r\n  font-family: 'Lobster Two', cursive;\r\n  font-size: 1.5rem;\r\n  color: #807575;\r\n}\r\n\r\ninput::placeholder {\r\n  font-family: 'Lobster Two', cursive;\r\n  font-size: 1.5rem;\r\n  font-style: italic;\r\n  line-height: 1.5rem;\r\n}\r\n\r\nli {\r\n  margin-bottom: 0.5rem;\r\n}\r\n\r\n.li-activity {\r\n  font-family: 'Lobster Two', cursive;\r\n  font-size: 1rem;\r\n  line-height: 1.5rem;\r\n  height: 2rem;\r\n  width: 29rem;\r\n}\r\n\r\n.footer {\r\n  height: 3rem;\r\n  background-color: #f6f6f6;\r\n  text-align: center;\r\n}\r\n\r\n.button {\r\n  text-align: center;\r\n  margin: auto;\r\n  padding-top: 0.5rem;\r\n  text-decoration: underline;\r\n  width: 100%;\r\n  background-color: #f6f6f6;\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.box.checked {\r\n  background: aquamarine;\r\n  color: #000;\r\n  font-weight: 700;\r\n  border: none;\r\n  font-size: 1rem;\r\n}\r\n\r\n.todoactivities {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.delete-button {\r\n  cursor: pointer;\r\n  margin-right: 0.5rem;\r\n}\r\n\r\n.box {\r\n  background-color: #fff;\r\n  color: #fff;\r\n  width: 1.5rem;\r\n  height: 1.5rem;\r\n  border: solid 1px #807575;\r\n}\r\n\r\n.tasks-list {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 0.25rem;\r\n}\r\n\r\n.li-activity.checked {\r\n  background: aquamarine;\r\n  border: none;\r\n  text-decoration: line-through;\r\n  text-decoration-style: double;\r\n}\r\n\r\n.delete-button.show-trash .trash {\r\n  display: block;\r\n}\r\n\r\n.ellipse {\r\n  display: none;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_functionality_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/functionality.js */ "./src/modules/functionality.js");
/* harmony import */ var _modules_clear_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/clear.js */ "./src/modules/clear.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
//import _ from 'lodash';





const taskManager = new _modules_functionality_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
taskManager.loadActivities();

const activitiesInput = document.getElementById('activities-input');
const addActivityBtn = document.getElementById('add-activity-btn');

addActivityBtn.addEventListener('click', () => {
  const activityValue = activitiesInput.value;
  if (activityValue !== '') {
    window.location.reload();
    taskManager.createTask(activityValue);
    activitiesInput.value = '';
  }
});

activitiesInput.addEventListener('keypress', (e) => {
  if(e.key === 'Enter') {
    const activityValue = activitiesInput.value;
    if(activityValue !== ''){
      window.location.reload();
      taskManager.createTask(activityValue);
      activitiesInput.value = '';
    }
  }
});

const deleteButton = document.querySelectorAll('.trash');
deleteButton.forEach((button) => {
  button.addEventListener('click', (e) => {
    const taskId = parseInt(e.target.parentElement.parentElement.id) - 1;
    taskManager.deleteTask(taskId);
    window.location.reload();
  });
});

const activityField = document.querySelectorAll('.li-activity');
activityField.forEach((field, i) => {
  field.addEventListener('keypress', (e) =>{
    if (e.key == 'Enter') {
      const newDescription= e.target.value;
      taskManager.upDateTask(i, newDescription);
    }
  });
});

(0,_modules_clear_js__WEBPACK_IMPORTED_MODULE_1__.addClearButtonListener)(taskManager);


/***/ }),

/***/ "./src/modules/clear.js":
/*!******************************!*\
  !*** ./src/modules/clear.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addClearButtonListener": () => (/* binding */ addClearButtonListener)
/* harmony export */ });
function addClearButtonListener (taskManager) {
  const clearButton = document.getElementById('clear-button');
  clearButton.addEventListener('click', () => {
    taskManager.taskList = taskManager.taskList.filter((task) => !task.completed);
    taskManager.saveTasks();
    window.location.reload();
  });
}

/***/ }),

/***/ "./src/modules/functionality.js":
/*!**************************************!*\
  !*** ./src/modules/functionality.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//import _ from 'lodash';
class TaskManager {
  constructor() {
      this.taskList = JSON.parse(localStorage.getItem('tasks')) || [];
      this.storageKey = 'tasks';
  }

  createTask = (description) => {
      const newTask = {
          description: description,
          completed: false,
          index: this.taskList.length + 1,
      };
      this.taskList.push(newTask);
      this.saveTasks();
  }

  displayWindow = (task) => `
    <div class="todoactivities" data-task-index="${task.index}">
      <label for="Item${task.index}" class="tasks-list">
        <button type="button" class="box ${task.completed ? 'checked' : ''}">&#x2713;</button>
        <input type="text" class="li-activity ${task.completed ? 'checked' : ''}" value="${task.description}" name="Item${task.index}" id="Item${task.index}">
          
      </label>
      <div id="index${task.index}" class="delete-button">
        <i class="bi bi-trash3-fill novisible trash" id="delete${task.index}"></i>
        <i class="bi bi-three-dots-vertical ellipse"></i>
      </div>
    </div>
  `
  
  loadCheckBoxes = () => {
    const checkBoxes = document.querySelectorAll('.box');
    checkBoxes.forEach((box) => {
      box.addEventListener('click', (e) => {
        const parentElement = e.target.parentElement.parentElement;
        const taskId = parseInt(parentElement.dataset.taskIndex);
        const task = this.taskList.find((t) => t.index === taskId);
        task.completed = !task.completed;
        this.saveTasks();
        e.target.classList.toggle('checked');
        const input = e.target.parentElement.querySelector('.li-activity');
        input.classList.toggle('checked');
        this.completionState(parseInt(e.target.parentElement.parentElement.id, 10));
      });
    });
  }

  completionState = (parentIndex) => {
    for (let i = 0; i < this.taskList.length; i++) {
      if (this.taskList[i].index === parentIndex + 1) {
        if (this.taskList[i].completed === true) {
          this.taskList[i].completed = false;
          this.saveTasks();
          return;
        }
        if (this.taskList[i].completed === false) {
          this.taskList[i].completed = true;
          this.saveTasks();
        }
      }
    }
  }

  loadActivities = () => {
    const activitiesListSection = document.getElementById('activities-list');
    for (let i = 0; i < this.taskList.length; i++) {
      const itemList = document.createElement('li');
      itemList.id = i + 1;
      itemList.innerHTML = this.displayWindow(this.taskList[i]);
      activitiesListSection.appendChild(itemList);
    }
    this.loadCheckBoxes();
  }

  deleteTask = (taskId) => {
    this.taskList.splice(taskId, 1);
    for (let i = taskId; i < this.taskList.length; i++) {
      this.taskList[i].index--;
    }
    this.saveTasks();
  }

  upDateTask = (taskId, newDescription) => {
    this.taskList[taskId].description = newDescription;
    this.saveTasks();
    window.location.reload();
  }

  saveTasks = () => {
    localStorage.setItem(this.storageKey, JSON.stringify(this.taskList));
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TaskManager);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDBCQUEwQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwwQkFBMEI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsMEJBQTBCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvbW9kdWxlcy9jbGVhci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL21vZHVsZXMvZnVuY3Rpb25hbGl0eS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnTG9ic3RlciBUd28nLCBjdXJzaXZlO1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYig2MywgOTQsIDI1MSk7XFxyXFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDYzLCA5NCwgMjUxLCAxKSAwJSwgcmdiYSg3MCwgMTU5LCAyNTIsIDEpIDc3JSk7XFxyXFxufVxcclxcblxcclxcbi5hY3Rpdml0aWVzIHtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYig2MywgOTQsIDI1MSk7XFxyXFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDYzLCA5NCwgMjUxLCAxKSAwJSwgcmdiYSg3MCwgMTU5LCAyNTIsIDEpIDc3JSk7XFxyXFxufVxcclxcblxcclxcbiosXFxyXFxuKjo6YmVmb3JlLFxcclxcbio6OmFmdGVyIHtcXHJcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1hY3Rpdml0aWVzIHtcXHJcXG4gIG1hcmdpbjogMCAzMCU7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xcclxcbiAgd2lkdGg6IDM1JTtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5hY3Rpdml0aWVzLWxpc3Qge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udXBkYXRlIHtcXHJcXG4gIG1hcmdpbjogYXV0byAwLjVyZW07XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LWRpdiB7XFxyXFxuICBtYXJnaW46IDFyZW0gMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi50b2RvLXRpdGxlIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aXZpdGllcy1pbnB1dCB7XFxyXFxuICBtYXJnaW4tbGVmdDogMXJlbTtcXHJcXG4gIGhlaWdodDogMnJlbTtcXHJcXG4gIHdpZHRoOiAzMHJlbTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnTG9ic3RlciBUd28nLCBjdXJzaXZlO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBjb2xvcjogIzgwNzU3NTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnTG9ic3RlciBUd28nLCBjdXJzaXZlO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICBsaW5lLWhlaWdodDogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5saSB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5saS1hY3Rpdml0eSB7XFxyXFxuICBmb250LWZhbWlseTogJ0xvYnN0ZXIgVHdvJywgY3Vyc2l2ZTtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxyXFxuICBoZWlnaHQ6IDJyZW07XFxyXFxuICB3aWR0aDogMjlyZW07XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIge1xcclxcbiAgaGVpZ2h0OiAzcmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbiB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBwYWRkaW5nLXRvcDogMC41cmVtO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5ib3guY2hlY2tlZCB7XFxyXFxuICBiYWNrZ3JvdW5kOiBhcXVhbWFyaW5lO1xcclxcbiAgY29sb3I6ICMwMDA7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kb2FjdGl2aXRpZXMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVsZXRlLWJ1dHRvbiB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmJveCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICB3aWR0aDogMS41cmVtO1xcclxcbiAgaGVpZ2h0OiAxLjVyZW07XFxyXFxuICBib3JkZXI6IHNvbGlkIDFweCAjODA3NTc1O1xcclxcbn1cXHJcXG5cXHJcXG4udGFza3MtbGlzdCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMC4yNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpLWFjdGl2aXR5LmNoZWNrZWQge1xcclxcbiAgYmFja2dyb3VuZDogYXF1YW1hcmluZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uLXN0eWxlOiBkb3VibGU7XFxyXFxufVxcclxcblxcclxcbi5kZWxldGUtYnV0dG9uLnNob3ctdHJhc2ggLnRyYXNoIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4uZWxsaXBzZSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLG1DQUFtQztFQUNuQyxlQUFlO0VBQ2YsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLHVGQUF1RjtBQUN6Rjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1Qix1RkFBdUY7QUFDekY7O0FBRUE7OztFQUdFLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQiw0QkFBNEI7RUFDNUIsVUFBVTtFQUNWLFFBQVE7RUFDUiwrQkFBK0I7RUFDL0IsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osWUFBWTtFQUNaLG1DQUFtQztFQUNuQyxpQkFBaUI7RUFDakIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLDBCQUEwQjtFQUMxQixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsY0FBYztFQUNkLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LWZhbWlseTogJ0xvYnN0ZXIgVHdvJywgY3Vyc2l2ZTtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2IoNjMsIDk0LCAyNTEpO1xcclxcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSg2MywgOTQsIDI1MSwgMSkgMCUsIHJnYmEoNzAsIDE1OSwgMjUyLCAxKSA3NyUpO1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aXZpdGllcyB7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2IoNjMsIDk0LCAyNTEpO1xcclxcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSg2MywgOTQsIDI1MSwgMSkgMCUsIHJnYmEoNzAsIDE1OSwgMjUyLCAxKSA3NyUpO1xcclxcbn1cXHJcXG5cXHJcXG4qLFxcclxcbio6OmJlZm9yZSxcXHJcXG4qOjphZnRlciB7XFxyXFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tYWN0aXZpdGllcyB7XFxyXFxuICBtYXJnaW46IDAgMzAlO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcXHJcXG4gIHdpZHRoOiAzNSU7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxyXFxufVxcclxcblxcclxcbi50aXRsZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aXZpdGllcy1saXN0IHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBtYXJnaW4tbGVmdDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnVwZGF0ZSB7XFxyXFxuICBtYXJnaW46IGF1dG8gMC41cmVtO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC1kaXYge1xcclxcbiAgbWFyZ2luOiAxcmVtIDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby10aXRsZSB7XFxyXFxuICBtYXJnaW4tbGVmdDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGl2aXRpZXMtaW5wdXQge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxyXFxuICBoZWlnaHQ6IDJyZW07XFxyXFxuICB3aWR0aDogMzByZW07XFxyXFxuICBmb250LWZhbWlseTogJ0xvYnN0ZXIgVHdvJywgY3Vyc2l2ZTtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgY29sb3I6ICM4MDc1NzU7XFxyXFxufVxcclxcblxcclxcbmlucHV0OjpwbGFjZWhvbGRlciB7XFxyXFxuICBmb250LWZhbWlseTogJ0xvYnN0ZXIgVHdvJywgY3Vyc2l2ZTtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxubGkge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubGktYWN0aXZpdHkge1xcclxcbiAgZm9udC1mYW1pbHk6ICdMb2JzdGVyIFR3bycsIGN1cnNpdmU7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMS41cmVtO1xcclxcbiAgaGVpZ2h0OiAycmVtO1xcclxcbiAgd2lkdGg6IDI5cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyIHtcXHJcXG4gIGhlaWdodDogM3JlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5idXR0b24ge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgcGFkZGluZy10b3A6IDAuNXJlbTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYm94LmNoZWNrZWQge1xcclxcbiAgYmFja2dyb3VuZDogYXF1YW1hcmluZTtcXHJcXG4gIGNvbG9yOiAjMDAwO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG9hY3Rpdml0aWVzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmRlbGV0ZS1idXR0b24ge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5ib3gge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgd2lkdGg6IDEuNXJlbTtcXHJcXG4gIGhlaWdodDogMS41cmVtO1xcclxcbiAgYm9yZGVyOiBzb2xpZCAxcHggIzgwNzU3NTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tzLWxpc3Qge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDAuMjVyZW07XFxyXFxufVxcclxcblxcclxcbi5saS1hY3Rpdml0eS5jaGVja2VkIHtcXHJcXG4gIGJhY2tncm91bmQ6IGFxdWFtYXJpbmU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbi1zdHlsZTogZG91YmxlO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVsZXRlLWJ1dHRvbi5zaG93LXRyYXNoIC50cmFzaCB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLmVsbGlwc2Uge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuXHJcbmltcG9ydCBUYXNrTWFuYWdlciBmcm9tICcuL21vZHVsZXMvZnVuY3Rpb25hbGl0eS5qcyc7XHJcbmltcG9ydCB7IGFkZENsZWFyQnV0dG9uTGlzdGVuZXIgfSBmcm9tICcuL21vZHVsZXMvY2xlYXIuanMnO1xyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuXHJcbmNvbnN0IHRhc2tNYW5hZ2VyID0gbmV3IFRhc2tNYW5hZ2VyKCk7XHJcbnRhc2tNYW5hZ2VyLmxvYWRBY3Rpdml0aWVzKCk7XHJcblxyXG5jb25zdCBhY3Rpdml0aWVzSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWN0aXZpdGllcy1pbnB1dCcpO1xyXG5jb25zdCBhZGRBY3Rpdml0eUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtYWN0aXZpdHktYnRuJyk7XHJcblxyXG5hZGRBY3Rpdml0eUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBjb25zdCBhY3Rpdml0eVZhbHVlID0gYWN0aXZpdGllc0lucHV0LnZhbHVlO1xyXG4gIGlmIChhY3Rpdml0eVZhbHVlICE9PSAnJykge1xyXG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgdGFza01hbmFnZXIuY3JlYXRlVGFzayhhY3Rpdml0eVZhbHVlKTtcclxuICAgIGFjdGl2aXRpZXNJbnB1dC52YWx1ZSA9ICcnO1xyXG4gIH1cclxufSk7XHJcblxyXG5hY3Rpdml0aWVzSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoZSkgPT4ge1xyXG4gIGlmKGUua2V5ID09PSAnRW50ZXInKSB7XHJcbiAgICBjb25zdCBhY3Rpdml0eVZhbHVlID0gYWN0aXZpdGllc0lucHV0LnZhbHVlO1xyXG4gICAgaWYoYWN0aXZpdHlWYWx1ZSAhPT0gJycpe1xyXG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgIHRhc2tNYW5hZ2VyLmNyZWF0ZVRhc2soYWN0aXZpdHlWYWx1ZSk7XHJcbiAgICAgIGFjdGl2aXRpZXNJbnB1dC52YWx1ZSA9ICcnO1xyXG4gICAgfVxyXG4gIH1cclxufSk7XHJcblxyXG5jb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudHJhc2gnKTtcclxuZGVsZXRlQnV0dG9uLmZvckVhY2goKGJ1dHRvbikgPT4ge1xyXG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBjb25zdCB0YXNrSWQgPSBwYXJzZUludChlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuaWQpIC0gMTtcclxuICAgIHRhc2tNYW5hZ2VyLmRlbGV0ZVRhc2sodGFza0lkKTtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICB9KTtcclxufSk7XHJcblxyXG5jb25zdCBhY3Rpdml0eUZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpLWFjdGl2aXR5Jyk7XHJcbmFjdGl2aXR5RmllbGQuZm9yRWFjaCgoZmllbGQsIGkpID0+IHtcclxuICBmaWVsZC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChlKSA9PntcclxuICAgIGlmIChlLmtleSA9PSAnRW50ZXInKSB7XHJcbiAgICAgIGNvbnN0IG5ld0Rlc2NyaXB0aW9uPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgdGFza01hbmFnZXIudXBEYXRlVGFzayhpLCBuZXdEZXNjcmlwdGlvbik7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuYWRkQ2xlYXJCdXR0b25MaXN0ZW5lcih0YXNrTWFuYWdlcik7XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBhZGRDbGVhckJ1dHRvbkxpc3RlbmVyICh0YXNrTWFuYWdlcikge1xyXG4gIGNvbnN0IGNsZWFyQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsZWFyLWJ1dHRvbicpO1xyXG4gIGNsZWFyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgdGFza01hbmFnZXIudGFza0xpc3QgPSB0YXNrTWFuYWdlci50YXNrTGlzdC5maWx0ZXIoKHRhc2spID0+ICF0YXNrLmNvbXBsZXRlZCk7XHJcbiAgICB0YXNrTWFuYWdlci5zYXZlVGFza3MoKTtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICB9KTtcclxufSIsIi8vaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuY2xhc3MgVGFza01hbmFnZXIge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICB0aGlzLnRhc2tMaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSkgfHwgW107XHJcbiAgICAgIHRoaXMuc3RvcmFnZUtleSA9ICd0YXNrcyc7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVUYXNrID0gKGRlc2NyaXB0aW9uKSA9PiB7XHJcbiAgICAgIGNvbnN0IG5ld1Rhc2sgPSB7XHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgaW5kZXg6IHRoaXMudGFza0xpc3QubGVuZ3RoICsgMSxcclxuICAgICAgfTtcclxuICAgICAgdGhpcy50YXNrTGlzdC5wdXNoKG5ld1Rhc2spO1xyXG4gICAgICB0aGlzLnNhdmVUYXNrcygpO1xyXG4gIH1cclxuXHJcbiAgZGlzcGxheVdpbmRvdyA9ICh0YXNrKSA9PiBgXHJcbiAgICA8ZGl2IGNsYXNzPVwidG9kb2FjdGl2aXRpZXNcIiBkYXRhLXRhc2staW5kZXg9XCIke3Rhc2suaW5kZXh9XCI+XHJcbiAgICAgIDxsYWJlbCBmb3I9XCJJdGVtJHt0YXNrLmluZGV4fVwiIGNsYXNzPVwidGFza3MtbGlzdFwiPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYm94ICR7dGFzay5jb21wbGV0ZWQgPyAnY2hlY2tlZCcgOiAnJ31cIj4mI3gyNzEzOzwvYnV0dG9uPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwibGktYWN0aXZpdHkgJHt0YXNrLmNvbXBsZXRlZCA/ICdjaGVja2VkJyA6ICcnfVwiIHZhbHVlPVwiJHt0YXNrLmRlc2NyaXB0aW9ufVwiIG5hbWU9XCJJdGVtJHt0YXNrLmluZGV4fVwiIGlkPVwiSXRlbSR7dGFzay5pbmRleH1cIj5cclxuICAgICAgICAgIFxyXG4gICAgICA8L2xhYmVsPlxyXG4gICAgICA8ZGl2IGlkPVwiaW5kZXgke3Rhc2suaW5kZXh9XCIgY2xhc3M9XCJkZWxldGUtYnV0dG9uXCI+XHJcbiAgICAgICAgPGkgY2xhc3M9XCJiaSBiaS10cmFzaDMtZmlsbCBub3Zpc2libGUgdHJhc2hcIiBpZD1cImRlbGV0ZSR7dGFzay5pbmRleH1cIj48L2k+XHJcbiAgICAgICAgPGkgY2xhc3M9XCJiaSBiaS10aHJlZS1kb3RzLXZlcnRpY2FsIGVsbGlwc2VcIj48L2k+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgYFxyXG4gIFxyXG4gIGxvYWRDaGVja0JveGVzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY2hlY2tCb3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ib3gnKTtcclxuICAgIGNoZWNrQm94ZXMuZm9yRWFjaCgoYm94KSA9PiB7XHJcbiAgICAgIGJveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcGFyZW50RWxlbWVudCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuICAgICAgICBjb25zdCB0YXNrSWQgPSBwYXJzZUludChwYXJlbnRFbGVtZW50LmRhdGFzZXQudGFza0luZGV4KTtcclxuICAgICAgICBjb25zdCB0YXNrID0gdGhpcy50YXNrTGlzdC5maW5kKCh0KSA9PiB0LmluZGV4ID09PSB0YXNrSWQpO1xyXG4gICAgICAgIHRhc2suY29tcGxldGVkID0gIXRhc2suY29tcGxldGVkO1xyXG4gICAgICAgIHRoaXMuc2F2ZVRhc2tzKCk7XHJcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnY2hlY2tlZCcpO1xyXG4gICAgICAgIGNvbnN0IGlucHV0ID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcubGktYWN0aXZpdHknKTtcclxuICAgICAgICBpbnB1dC5jbGFzc0xpc3QudG9nZ2xlKCdjaGVja2VkJyk7XHJcbiAgICAgICAgdGhpcy5jb21wbGV0aW9uU3RhdGUocGFyc2VJbnQoZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmlkLCAxMCkpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY29tcGxldGlvblN0YXRlID0gKHBhcmVudEluZGV4KSA9PiB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudGFza0xpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKHRoaXMudGFza0xpc3RbaV0uaW5kZXggPT09IHBhcmVudEluZGV4ICsgMSkge1xyXG4gICAgICAgIGlmICh0aGlzLnRhc2tMaXN0W2ldLmNvbXBsZXRlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgdGhpcy50YXNrTGlzdFtpXS5jb21wbGV0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgIHRoaXMuc2F2ZVRhc2tzKCk7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnRhc2tMaXN0W2ldLmNvbXBsZXRlZCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgIHRoaXMudGFza0xpc3RbaV0uY29tcGxldGVkID0gdHJ1ZTtcclxuICAgICAgICAgIHRoaXMuc2F2ZVRhc2tzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBsb2FkQWN0aXZpdGllcyA9ICgpID0+IHtcclxuICAgIGNvbnN0IGFjdGl2aXRpZXNMaXN0U2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhY3Rpdml0aWVzLWxpc3QnKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50YXNrTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBpdGVtTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgIGl0ZW1MaXN0LmlkID0gaSArIDE7XHJcbiAgICAgIGl0ZW1MaXN0LmlubmVySFRNTCA9IHRoaXMuZGlzcGxheVdpbmRvdyh0aGlzLnRhc2tMaXN0W2ldKTtcclxuICAgICAgYWN0aXZpdGllc0xpc3RTZWN0aW9uLmFwcGVuZENoaWxkKGl0ZW1MaXN0KTtcclxuICAgIH1cclxuICAgIHRoaXMubG9hZENoZWNrQm94ZXMoKTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZVRhc2sgPSAodGFza0lkKSA9PiB7XHJcbiAgICB0aGlzLnRhc2tMaXN0LnNwbGljZSh0YXNrSWQsIDEpO1xyXG4gICAgZm9yIChsZXQgaSA9IHRhc2tJZDsgaSA8IHRoaXMudGFza0xpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdGhpcy50YXNrTGlzdFtpXS5pbmRleC0tO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zYXZlVGFza3MoKTtcclxuICB9XHJcblxyXG4gIHVwRGF0ZVRhc2sgPSAodGFza0lkLCBuZXdEZXNjcmlwdGlvbikgPT4ge1xyXG4gICAgdGhpcy50YXNrTGlzdFt0YXNrSWRdLmRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XHJcbiAgICB0aGlzLnNhdmVUYXNrcygpO1xyXG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gIH1cclxuXHJcbiAgc2F2ZVRhc2tzID0gKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5zdG9yYWdlS2V5LCBKU09OLnN0cmluZ2lmeSh0aGlzLnRhc2tMaXN0KSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYXNrTWFuYWdlcjtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9