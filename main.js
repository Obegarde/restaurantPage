/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
___CSS_LOADER_EXPORT___.push([module.id, `/*
  1. Use a more-intuitive box-sizing model.
*/
*, *::before, *::after {
    box-sizing: border-box;
  }
  /*
    2. Remove default margin
  */
  * {
    margin: 0;
  }
  /*
    Typographic tweaks!
    3. Add accessible line-height
    4. Improve text rendering
  */
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }
  /*
    5. Improve media defaults
  */
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
  /*
    6. Remove built-in form typography styles
  */
  input, button, textarea, select {
    font: inherit;
  }
  /*
    7. Avoid text overflows
  */
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }
  /*
    8. Create a root stacking context
  */
  #root, #__next {
    isolation: isolate;
  }

:root{
    --main-bg-color:#503e21;
    --main-accent-color:#74954f;
    --secondary-accent-color:#435134;
    --main-text-color:#aec398;

}
img{
    height: 800px;
    width:600px;
}

body{
    background-color: var(--main-accent-color);
    height:100vh;
    display: grid;
    grid-template-columns: 1fr 6fr 1fr;
    grid-template-rows: 1fr 6fr 1fr;
    grid-template-areas: 
    'left header right'
    'left content right'
    'leftbottom footer rightbottom';
}

header{
    grid-area: header;
    background-color: var(--main-bg-color);
    border-bottom: 3px solid var(--main-accent-color);
    display:flex;
    justify-content: space-between;
}

button{
    padding:6px 10px 6px 10px;
    background-color: var(--main-bg-color);
    border-style: none;
    color:var(--main-text-color);
}

header h1{
    color:var(--main-accent-color);
    align-self: center;
}

#content{
    grid-area: content;
    background-color: var(--main-bg-color);
    color: lightgray;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: 
    'contentOne contentTwo'
    'contentOne contentTwo';
}

.left{
    grid-area: left;
    background-color: var(--main-bg-color);
}
.right{
    grid-area: right;
    background-color: var(--main-bg-color);
}
footer{
    grid-area: footer;
    background-color: var(--secondary-accent-color);
    display: flex;
    justify-content: space-between;
}
.footer.locations{
    display: flex;
    justify-content: space-between;
    gap: 12px;
}

.footer div{
    display: flex;
    flex-direction: column;
}

nav{
    align-self: center;
}
h1{
    color:var(--main-text-color);
    font-family:Georgia, 'Times New Roman', Times, serif;
    font-size: 36px;
    
}
span{
    color:var(--main-text-color);
}
.right-bottom{
    grid-area: rightbottom;
    background-color: var(--secondary-accent-color);
}
.left-bottom{
    grid-area:leftbottom;
    background-color: var(--secondary-accent-color);
}
.contentOne{
    grid-area:contentOne;
    width:80%;
    
}
.contentTwo{
    grid-area:contentTwo;
    width: 80%;
}

li{
  margin-top:12px;
}

form{
  display: flex;
  flex-direction: column;
}
form label{
  font-size: 1.5rem;
}
form input{
  background-color: var(--main-text-color);
}

.submitButton{
  padding:6px 10px 6px 10px;
  background-color: var(--main-bg-color);
  border-style: none;
  color:var(--main-text-color);
  font-size: 1.5rem;
}

`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;CAEC;AACD;IACI,sBAAsB;EACxB;EACA;;GAEC;EACD;IACE,SAAS;EACX;EACA;;;;GAIC;EACD;IACE,gBAAgB;IAChB,mCAAmC;EACrC;EACA;;GAEC;EACD;IACE,cAAc;IACd,eAAe;EACjB;EACA;;GAEC;EACD;IACE,aAAa;EACf;EACA;;GAEC;EACD;IACE,yBAAyB;EAC3B;EACA;;GAEC;EACD;IACE,kBAAkB;EACpB;;AAEF;IACI,uBAAuB;IACvB,2BAA2B;IAC3B,gCAAgC;IAChC,yBAAyB;;AAE7B;AACA;IACI,aAAa;IACb,WAAW;AACf;;AAEA;IACI,0CAA0C;IAC1C,YAAY;IACZ,aAAa;IACb,kCAAkC;IAClC,+BAA+B;IAC/B;;;mCAG+B;AACnC;;AAEA;IACI,iBAAiB;IACjB,sCAAsC;IACtC,iDAAiD;IACjD,YAAY;IACZ,8BAA8B;AAClC;;AAEA;IACI,yBAAyB;IACzB,sCAAsC;IACtC,kBAAkB;IAClB,4BAA4B;AAChC;;AAEA;IACI,8BAA8B;IAC9B,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,sCAAsC;IACtC,gBAAgB;IAChB,aAAa;IACb,8BAA8B;IAC9B,2BAA2B;IAC3B;;2BAEuB;AAC3B;;AAEA;IACI,eAAe;IACf,sCAAsC;AAC1C;AACA;IACI,gBAAgB;IAChB,sCAAsC;AAC1C;AACA;IACI,iBAAiB;IACjB,+CAA+C;IAC/C,aAAa;IACb,8BAA8B;AAClC;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;AACtB;AACA;IACI,4BAA4B;IAC5B,oDAAoD;IACpD,eAAe;;AAEnB;AACA;IACI,4BAA4B;AAChC;AACA;IACI,sBAAsB;IACtB,+CAA+C;AACnD;AACA;IACI,oBAAoB;IACpB,+CAA+C;AACnD;AACA;IACI,oBAAoB;IACpB,SAAS;;AAEb;AACA;IACI,oBAAoB;IACpB,UAAU;AACd;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,wCAAwC;AAC1C;;AAEA;EACE,yBAAyB;EACzB,sCAAsC;EACtC,kBAAkB;EAClB,4BAA4B;EAC5B,iBAAiB;AACnB","sourcesContent":["/*\n  1. Use a more-intuitive box-sizing model.\n*/\n*, *::before, *::after {\n    box-sizing: border-box;\n  }\n  /*\n    2. Remove default margin\n  */\n  * {\n    margin: 0;\n  }\n  /*\n    Typographic tweaks!\n    3. Add accessible line-height\n    4. Improve text rendering\n  */\n  body {\n    line-height: 1.5;\n    -webkit-font-smoothing: antialiased;\n  }\n  /*\n    5. Improve media defaults\n  */\n  img, picture, video, canvas, svg {\n    display: block;\n    max-width: 100%;\n  }\n  /*\n    6. Remove built-in form typography styles\n  */\n  input, button, textarea, select {\n    font: inherit;\n  }\n  /*\n    7. Avoid text overflows\n  */\n  p, h1, h2, h3, h4, h5, h6 {\n    overflow-wrap: break-word;\n  }\n  /*\n    8. Create a root stacking context\n  */\n  #root, #__next {\n    isolation: isolate;\n  }\n\n:root{\n    --main-bg-color:#503e21;\n    --main-accent-color:#74954f;\n    --secondary-accent-color:#435134;\n    --main-text-color:#aec398;\n\n}\nimg{\n    height: 800px;\n    width:600px;\n}\n\nbody{\n    background-color: var(--main-accent-color);\n    height:100vh;\n    display: grid;\n    grid-template-columns: 1fr 6fr 1fr;\n    grid-template-rows: 1fr 6fr 1fr;\n    grid-template-areas: \n    'left header right'\n    'left content right'\n    'leftbottom footer rightbottom';\n}\n\nheader{\n    grid-area: header;\n    background-color: var(--main-bg-color);\n    border-bottom: 3px solid var(--main-accent-color);\n    display:flex;\n    justify-content: space-between;\n}\n\nbutton{\n    padding:6px 10px 6px 10px;\n    background-color: var(--main-bg-color);\n    border-style: none;\n    color:var(--main-text-color);\n}\n\nheader h1{\n    color:var(--main-accent-color);\n    align-self: center;\n}\n\n#content{\n    grid-area: content;\n    background-color: var(--main-bg-color);\n    color: lightgray;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    grid-template-areas: \n    'contentOne contentTwo'\n    'contentOne contentTwo';\n}\n\n.left{\n    grid-area: left;\n    background-color: var(--main-bg-color);\n}\n.right{\n    grid-area: right;\n    background-color: var(--main-bg-color);\n}\nfooter{\n    grid-area: footer;\n    background-color: var(--secondary-accent-color);\n    display: flex;\n    justify-content: space-between;\n}\n.footer.locations{\n    display: flex;\n    justify-content: space-between;\n    gap: 12px;\n}\n\n.footer div{\n    display: flex;\n    flex-direction: column;\n}\n\nnav{\n    align-self: center;\n}\nh1{\n    color:var(--main-text-color);\n    font-family:Georgia, 'Times New Roman', Times, serif;\n    font-size: 36px;\n    \n}\nspan{\n    color:var(--main-text-color);\n}\n.right-bottom{\n    grid-area: rightbottom;\n    background-color: var(--secondary-accent-color);\n}\n.left-bottom{\n    grid-area:leftbottom;\n    background-color: var(--secondary-accent-color);\n}\n.contentOne{\n    grid-area:contentOne;\n    width:80%;\n    \n}\n.contentTwo{\n    grid-area:contentTwo;\n    width: 80%;\n}\n\nli{\n  margin-top:12px;\n}\n\nform{\n  display: flex;\n  flex-direction: column;\n}\nform label{\n  font-size: 1.5rem;\n}\nform input{\n  background-color: var(--main-text-color);\n}\n\n.submitButton{\n  padding:6px 10px 6px 10px;\n  background-color: var(--main-bg-color);\n  border-style: none;\n  color:var(--main-text-color);\n  font-size: 1.5rem;\n}\n\n"],"sourceRoot":""}]);
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

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   aboutCreator: () => (/* binding */ aboutCreator)
/* harmony export */ });
/* harmony import */ var _french_onion_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./french-onion.jpg */ "./src/french-onion.jpg");


function aboutCreator(){
    const contentWrapper = document.getElementById('content');
    const contentOne = document.createElement('div');
    const contentTwo = document.createElement('div');
    contentOne.setAttribute('class','contentOne');
    contentTwo.setAttribute('class', 'contentTwo');

    const imageContent = document.createElement('img');
    imageContent.src = _french_onion_jpg__WEBPACK_IMPORTED_MODULE_0__;
    imageContent.setAttribute('alt','Gratinated french onion soup in a traditional bowl');

    contentTwo.appendChild(imageContent);

    const headline = document.createElement('h1');
    headline.innerText = 'Le Foie Heureux';
    contentOne.appendChild(headline);
    const nextline = document.createElement('div');
    nextline.innerText = 'An elegant Ankh-Morpork restaurant.';
    contentOne.appendChild(nextline);

    const heroText = document.createElement('div');
    heroText.innerText ="Step into the culinary haven of Le Foie Heureux, nestled in the heart of Ankh Morpork.\nIndulge in gastronomic delights crafted with finesse, where every bite is a symphony of flavors. \nOur menu celebrates the art of Quirmian cuisine, inviting you on a journey of exquisite taste and unparalleled satisfaction. \nJoin us and savor moments of pure culinary bliss at Le Foie Heureux."
    contentOne.appendChild(heroText);





    contentWrapper.appendChild(contentOne);
    contentWrapper.appendChild(contentTwo);

}

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contactCreator: () => (/* binding */ contactCreator)
/* harmony export */ });
/* harmony import */ var _rumman_amin_X39jZ5OqRmk_unsplash_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rumman-amin-X39jZ5OqRmk-unsplash.jpg */ "./src/rumman-amin-X39jZ5OqRmk-unsplash.jpg");


function contactCreator(){
    const restaurantContact = {
        address: {
          line1: "42 Quirmish Lane",
          city: "Ankh-Morpork",
          state: "Discworld",
          zip: "12345"
        },
        phone: "(123) 456-7890",
        email: "info@LeFoie.com",
        socialMedia: {
          facebook: "https://www.facebook.com/LeFoie",
          twitter: "https://www.twitter.com/LeFoie",
          instagram: "https://www.instagram.com/LeFoie"
        }
      };
      

    const contentWrapper = document.getElementById('content');
    const contentOne = document.createElement('div');
    const contentTwo = document.createElement('div');
    

    contentOne.setAttribute('class','contentOne');
    contentTwo.setAttribute('class', 'contentTwo');

    const imageContent = document.createElement('img');
    imageContent.src = _rumman_amin_X39jZ5OqRmk_unsplash_jpg__WEBPACK_IMPORTED_MODULE_0__;
    imageContent.setAttribute('alt','Photo by Rumman Amin on Unsplash');

    contentOne.appendChild(imageContent);

    const headline = document.createElement('h1');
    headline.innerText = 'Contact information';
    contentTwo.appendChild(headline);

    for (const [key, value] of Object.entries(restaurantContact)) {
        const itemHeadline = document.createElement('h2');
        itemHeadline.innerText = key;
        contentTwo.appendChild(itemHeadline);
        
        if (typeof value === 'object') {
            for (const [keyTwo, valueTwo] of Object.entries(value)) {
                const questionElement = document.createElement('h3');
                questionElement.innerText = keyTwo.toUpperCase();
                contentTwo.appendChild(questionElement);

                const answerElement = document.createElement('div');
                answerElement.innerText = valueTwo;
                contentTwo.appendChild(answerElement);
            }
        } else {
            const answerElement = document.createElement('div');
            answerElement.innerText = value;
            contentTwo.appendChild(answerElement);
        }
    }
    contentWrapper.appendChild(contentOne);
    contentWrapper.appendChild(contentTwo);
}

/***/ }),

/***/ "./src/faq.js":
/*!********************!*\
  !*** ./src/faq.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   faqCreator: () => (/* binding */ faqCreator)
/* harmony export */ });
/* harmony import */ var _steak_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./steak.jpg */ "./src/steak.jpg");


function faqCreator(){
    const restaurantFAQ = {
        question1: {
          question: "What are your opening hours?",
          answer: "We are open from 11:30 AM to 11:00 PM, Monday through Sunday."
        },
        question2: {
          question: "Do you offer vegetarian options?",
          answer: "Yes, we have a variety of vegetarian dishes available on our menu."
        },
        question3: {
          question: "Can I make a reservation?",
          answer: "Certainly! You can make a reservation by calling us at (123) 456-7890 or through our online reservation system."
        },
        question4: {
          question: "Do you provide catering services?",
          answer: "Yes, we offer catering services for events of all sizes. Please contact us for more information."
        },
        question5: {
          question: "Is there parking available?",
          answer: "Yes, we have parking available for our customers. There is a parking lot adjacent to the restaurant."
        }
      };
      

    const contentWrapper = document.getElementById('content');
    const contentOne = document.createElement('div');
    const contentTwo = document.createElement('div');
    

    contentOne.setAttribute('class','contentOne');
    contentTwo.setAttribute('class', 'contentTwo');

    const imageContent = document.createElement('img');
    imageContent.src = _steak_jpg__WEBPACK_IMPORTED_MODULE_0__;
    imageContent.setAttribute('alt',' Steak frites with bearnaise by daenskitchen.com');

    contentTwo.appendChild(imageContent);

    const headline = document.createElement('h1');
    headline.innerText = 'Frequently Asked Questions';
    contentOne.appendChild(headline);

    for(const [key, value] of Object.entries(restaurantFAQ)){
        const questionElement = document.createElement('h2');
        questionElement.innerText = value['question'];
        contentOne.appendChild(questionElement);

        const answerElement = document.createElement('div');
        answerElement.innerText = value['answer'];
        contentOne.appendChild(answerElement);
    };
    contentWrapper.appendChild(contentOne);
    contentWrapper.appendChild(contentTwo);
}

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   menuCreator: () => (/* binding */ menuCreator)
/* harmony export */ });


function menuCreator(){
    const menuOne = {
        "Appetizers": [
          "Crispy Calamari with Spicy Aioli",
          "Caprese Salad with Fresh Mozzarella and Basil"
        ],
        "Soups & Salads": [
          "Roasted Tomato Soup with Garlic Croutons",
          "Caesar Salad with Grilled Chicken"
        ],
        "Main Courses": [
          "Grilled Salmon with Lemon Dill Sauce, served with Steamed Asparagus and Garlic Mashed Potatoes",
          "Mushroom Risotto with Parmesan Cheese and Truffle Oil"
        ],
        "Pasta": [
          "Spaghetti Carbonara with Pancetta, Egg, and Parmesan"
        ]
    }

        const menuTwo = {
        "Sandwiches": [
          "Classic Club Sandwich with Turkey, Bacon, Lettuce, Tomato, and Mayo, served with French Fries"
        ],
        "Burgers": [
          "Angus Beef Burger with Caramelized Onions, Swiss Cheese, and BBQ Sauce, served with Sweet Potato Fries"
        ],
        "Vegetarian Options": [
          "Vegetable Stir-Fry with Tofu, Mixed Vegetables, and Soy Ginger Sauce, served over Jasmine Rice"
        ],
        "Desserts": [
          "Chocolate Lava Cake with Vanilla Ice Cream and Raspberry Coulis",
          "New York Style Cheesecake with Strawberry Compote"
        ],
        "Beverages": [
          "Freshly Squeezed Orange Juice",
          "Iced Matcha Latte"
        ]
      };

    const contentWrapper = document.getElementById('content');
    const contentOne = document.createElement('div');
    const contentTwo = document.createElement('div');
    

    contentOne.setAttribute('class','contentOne');
    contentTwo.setAttribute('class', 'contentTwo');
    const menuListOne = document.createElement('ul');
    const menuListTwo = document.createElement('ul');


    for(const [key, value] of Object.entries(menuOne)){
        const newListHeader = document.createElement('li');
        const newListSizer = document.createElement('h2');
        newListSizer.innerText = key;
        
        newListHeader.appendChild(newListSizer);
        menuListOne.appendChild(newListHeader);

        for(let i = 0; i < value.length; i++){
            const newListItem = document.createElement('li');
            newListItem.innerText = value[i];
            menuListOne.appendChild(newListItem);

        }
    }
    

    for(const [key, value] of Object.entries(menuTwo)){
        const newListHeader = document.createElement('li');
        const newListSizer = document.createElement('h2');
        newListSizer.innerText = key;
        
        newListHeader.appendChild(newListSizer);
        menuListTwo.appendChild(newListHeader);

        for(let i = 0; i < value.length; i++){
            const newListItem = document.createElement('li');
            newListItem.innerText = value[i];
            menuListTwo.appendChild(newListItem);

        }
    }
    contentOne.appendChild(menuListOne);
    contentTwo.appendChild(menuListTwo);
    contentWrapper.appendChild(contentOne);
    contentWrapper.appendChild(contentTwo);





}


/***/ }),

/***/ "./src/reservations.js":
/*!*****************************!*\
  !*** ./src/reservations.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   reservationCreator: () => (/* binding */ reservationCreator)
/* harmony export */ });
/* harmony import */ var _reservations_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reservations.jpg */ "./src/reservations.jpg");


function reservationCreator(){
    const contentWrapper = document.getElementById('content');
    const contentOne = document.createElement('div');
    const contentTwo = document.createElement('div');
    

    contentOne.setAttribute('class','contentOne');
    contentTwo.setAttribute('class', 'contentTwo');

    const imageContent = document.createElement('img');
    imageContent.src = _reservations_jpg__WEBPACK_IMPORTED_MODULE_0__;
    imageContent.setAttribute('alt','Three white linen covered restaurant tables overlooking the mediterranean by Ελευθέριος Μπέτσης');

    contentOne.appendChild(imageContent);

    const textTitle = document.createElement('h1');
    textTitle.innerText='Reserve a table';

    contentTwo.appendChild(textTitle);

    const formContent = document.createElement('form');

    const formLabels = ['Name','People','Date','Email','Phone Number'];

    for(let i = 0; i < formLabels.length; i++){
        const formLabel = document.createElement('label');
        formLabel.setAttribute('for',formLabels[i]);
        formLabel.innerText = formLabels[i];
        formContent.appendChild(formLabel);

        const formInput = document.createElement('input');
        formInput.setAttribute('id',formLabels[i]);
        formInput.setAttribute('name',formLabels[i]);

        switch(formLabels[i]){
            case 'Name':
                formInput.setAttribute('type', 'text');
                break;
            case 'People':
                formInput.setAttribute('type', 'number');
                break;
            case 'Email':
                formInput.setAttribute('type', 'email');
                break;
            case 'Phone Number':
                formInput.setAttribute('type','tel');
                break;
            case 'Date':
                formInput.setAttribute('type','date')
                break;
            default:
                break;

        }
        formContent.appendChild(formInput);
    }

    const formSubmit = document.createElement('input');
    formSubmit.setAttribute('type','submit');
    formSubmit.setAttribute('class','submitButton');
    formContent.appendChild(formSubmit);
    
    contentTwo.appendChild(formContent);

    contentWrapper.appendChild(contentOne);
    contentWrapper.appendChild(contentTwo);

    formContent.addEventListener('submit', event =>{
        event.preventDefault();

        alert('Reservations submitted succesfully')
    })
}

/***/ }),

/***/ "./src/french-onion.jpg":
/*!******************************!*\
  !*** ./src/french-onion.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "392a311df0fca277d1cf.jpg";

/***/ }),

/***/ "./src/reservations.jpg":
/*!******************************!*\
  !*** ./src/reservations.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "44194a16629fc75cd8ba.jpg";

/***/ }),

/***/ "./src/rumman-amin-X39jZ5OqRmk-unsplash.jpg":
/*!**************************************************!*\
  !*** ./src/rumman-amin-X39jZ5OqRmk-unsplash.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "177d2e914543fea9e765.jpg";

/***/ }),

/***/ "./src/steak.jpg":
/*!***********************!*\
  !*** ./src/steak.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b46dd59dc1e9cc33edaa.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _reservations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reservations */ "./src/reservations.js");
/* harmony import */ var _faq__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./faq */ "./src/faq.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about */ "./src/about.js");







const menuButtons = document.getElementById('navButtons');

function pageWiper(){
    const contentWrapper = document.getElementById('content');
    let contentElement = contentWrapper.lastElementChild;
    while(contentElement){
        contentWrapper.removeChild(contentElement);
        contentElement = contentWrapper.lastElementChild;
    }

}

menuButtons.addEventListener("focusin", event =>{
    switch(event.target.className){
        case 'menu':
            pageWiper();
            (0,_menu__WEBPACK_IMPORTED_MODULE_1__.menuCreator)();
            break;
        case 'reservations':
            pageWiper();
            (0,_reservations__WEBPACK_IMPORTED_MODULE_2__.reservationCreator)();
            break;
        case 'faq':
            pageWiper();
            (0,_faq__WEBPACK_IMPORTED_MODULE_3__.faqCreator)();
            break;
        case 'contact':
            pageWiper();
            (0,_contact__WEBPACK_IMPORTED_MODULE_4__.contactCreator)();
            break;
        case 'about':
            pageWiper();
            (0,_about__WEBPACK_IMPORTED_MODULE_5__.aboutCreator)();
            break;
        default:
            break;
    }
})


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LHdEQUFjO0FBQzFCO0FBQ0E7QUFDQTtBQUNBLFlBQVksb0RBQVk7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9mYXEuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9yZXNlcnZhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLypcbiAgMS4gVXNlIGEgbW9yZS1pbnR1aXRpdmUgYm94LXNpemluZyBtb2RlbC5cbiovXG4qLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG4gIC8qXG4gICAgMi4gUmVtb3ZlIGRlZmF1bHQgbWFyZ2luXG4gICovXG4gICoge1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICAvKlxuICAgIFR5cG9ncmFwaGljIHR3ZWFrcyFcbiAgICAzLiBBZGQgYWNjZXNzaWJsZSBsaW5lLWhlaWdodFxuICAgIDQuIEltcHJvdmUgdGV4dCByZW5kZXJpbmdcbiAgKi9cbiAgYm9keSB7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgfVxuICAvKlxuICAgIDUuIEltcHJvdmUgbWVkaWEgZGVmYXVsdHNcbiAgKi9cbiAgaW1nLCBwaWN0dXJlLCB2aWRlbywgY2FudmFzLCBzdmcge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgfVxuICAvKlxuICAgIDYuIFJlbW92ZSBidWlsdC1pbiBmb3JtIHR5cG9ncmFwaHkgc3R5bGVzXG4gICovXG4gIGlucHV0LCBidXR0b24sIHRleHRhcmVhLCBzZWxlY3Qge1xuICAgIGZvbnQ6IGluaGVyaXQ7XG4gIH1cbiAgLypcbiAgICA3LiBBdm9pZCB0ZXh0IG92ZXJmbG93c1xuICAqL1xuICBwLCBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICB9XG4gIC8qXG4gICAgOC4gQ3JlYXRlIGEgcm9vdCBzdGFja2luZyBjb250ZXh0XG4gICovXG4gICNyb290LCAjX19uZXh0IHtcbiAgICBpc29sYXRpb246IGlzb2xhdGU7XG4gIH1cblxuOnJvb3R7XG4gICAgLS1tYWluLWJnLWNvbG9yOiM1MDNlMjE7XG4gICAgLS1tYWluLWFjY2VudC1jb2xvcjojNzQ5NTRmO1xuICAgIC0tc2Vjb25kYXJ5LWFjY2VudC1jb2xvcjojNDM1MTM0O1xuICAgIC0tbWFpbi10ZXh0LWNvbG9yOiNhZWMzOTg7XG5cbn1cbmltZ3tcbiAgICBoZWlnaHQ6IDgwMHB4O1xuICAgIHdpZHRoOjYwMHB4O1xufVxuXG5ib2R5e1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYWNjZW50LWNvbG9yKTtcbiAgICBoZWlnaHQ6MTAwdmg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA2ZnIgMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDZmciAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXG4gICAgJ2xlZnQgaGVhZGVyIHJpZ2h0J1xuICAgICdsZWZ0IGNvbnRlbnQgcmlnaHQnXG4gICAgJ2xlZnRib3R0b20gZm9vdGVyIHJpZ2h0Ym90dG9tJztcbn1cblxuaGVhZGVye1xuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmctY29sb3IpO1xuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB2YXIoLS1tYWluLWFjY2VudC1jb2xvcik7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuYnV0dG9ue1xuICAgIHBhZGRpbmc6NnB4IDEwcHggNnB4IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZy1jb2xvcik7XG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xuICAgIGNvbG9yOnZhcigtLW1haW4tdGV4dC1jb2xvcik7XG59XG5cbmhlYWRlciBoMXtcbiAgICBjb2xvcjp2YXIoLS1tYWluLWFjY2VudC1jb2xvcik7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4jY29udGVudHtcbiAgICBncmlkLWFyZWE6IGNvbnRlbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZy1jb2xvcik7XG4gICAgY29sb3I6IGxpZ2h0Z3JheTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXG4gICAgJ2NvbnRlbnRPbmUgY29udGVudFR3bydcbiAgICAnY29udGVudE9uZSBjb250ZW50VHdvJztcbn1cblxuLmxlZnR7XG4gICAgZ3JpZC1hcmVhOiBsZWZ0O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmctY29sb3IpO1xufVxuLnJpZ2h0e1xuICAgIGdyaWQtYXJlYTogcmlnaHQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZy1jb2xvcik7XG59XG5mb290ZXJ7XG4gICAgZ3JpZC1hcmVhOiBmb290ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWFjY2VudC1jb2xvcik7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uZm9vdGVyLmxvY2F0aW9uc3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBnYXA6IDEycHg7XG59XG5cbi5mb290ZXIgZGl2e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxubmF2e1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cbmgxe1xuICAgIGNvbG9yOnZhcigtLW1haW4tdGV4dC1jb2xvcik7XG4gICAgZm9udC1mYW1pbHk6R2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbiAgICBmb250LXNpemU6IDM2cHg7XG4gICAgXG59XG5zcGFue1xuICAgIGNvbG9yOnZhcigtLW1haW4tdGV4dC1jb2xvcik7XG59XG4ucmlnaHQtYm90dG9te1xuICAgIGdyaWQtYXJlYTogcmlnaHRib3R0b207XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWFjY2VudC1jb2xvcik7XG59XG4ubGVmdC1ib3R0b217XG4gICAgZ3JpZC1hcmVhOmxlZnRib3R0b207XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWFjY2VudC1jb2xvcik7XG59XG4uY29udGVudE9uZXtcbiAgICBncmlkLWFyZWE6Y29udGVudE9uZTtcbiAgICB3aWR0aDo4MCU7XG4gICAgXG59XG4uY29udGVudFR3b3tcbiAgICBncmlkLWFyZWE6Y29udGVudFR3bztcbiAgICB3aWR0aDogODAlO1xufVxuXG5saXtcbiAgbWFyZ2luLXRvcDoxMnB4O1xufVxuXG5mb3Jte1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuZm9ybSBsYWJlbHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5mb3JtIGlucHV0e1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLXRleHQtY29sb3IpO1xufVxuXG4uc3VibWl0QnV0dG9ue1xuICBwYWRkaW5nOjZweCAxMHB4IDZweCAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnLWNvbG9yKTtcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xuICBjb2xvcjp2YXIoLS1tYWluLXRleHQtY29sb3IpO1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztDQUVDO0FBQ0Q7SUFDSSxzQkFBc0I7RUFDeEI7RUFDQTs7R0FFQztFQUNEO0lBQ0UsU0FBUztFQUNYO0VBQ0E7Ozs7R0FJQztFQUNEO0lBQ0UsZ0JBQWdCO0lBQ2hCLG1DQUFtQztFQUNyQztFQUNBOztHQUVDO0VBQ0Q7SUFDRSxjQUFjO0lBQ2QsZUFBZTtFQUNqQjtFQUNBOztHQUVDO0VBQ0Q7SUFDRSxhQUFhO0VBQ2Y7RUFDQTs7R0FFQztFQUNEO0lBQ0UseUJBQXlCO0VBQzNCO0VBQ0E7O0dBRUM7RUFDRDtJQUNFLGtCQUFrQjtFQUNwQjs7QUFFRjtJQUNJLHVCQUF1QjtJQUN2QiwyQkFBMkI7SUFDM0IsZ0NBQWdDO0lBQ2hDLHlCQUF5Qjs7QUFFN0I7QUFDQTtJQUNJLGFBQWE7SUFDYixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSwwQ0FBMEM7SUFDMUMsWUFBWTtJQUNaLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsK0JBQStCO0lBQy9COzs7bUNBRytCO0FBQ25DOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHNDQUFzQztJQUN0QyxpREFBaUQ7SUFDakQsWUFBWTtJQUNaLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixzQ0FBc0M7SUFDdEMsa0JBQWtCO0lBQ2xCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsc0NBQXNDO0lBQ3RDLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLDJCQUEyQjtJQUMzQjs7MkJBRXVCO0FBQzNCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHNDQUFzQztBQUMxQztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHNDQUFzQztBQUMxQztBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLCtDQUErQztJQUMvQyxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLDRCQUE0QjtJQUM1QixvREFBb0Q7SUFDcEQsZUFBZTs7QUFFbkI7QUFDQTtJQUNJLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLCtDQUErQztBQUNuRDtBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLCtDQUErQztBQUNuRDtBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLFNBQVM7O0FBRWI7QUFDQTtJQUNJLG9CQUFvQjtJQUNwQixVQUFVO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSx3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsc0NBQXNDO0VBQ3RDLGtCQUFrQjtFQUNsQiw0QkFBNEI7RUFDNUIsaUJBQWlCO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qXFxuICAxLiBVc2UgYSBtb3JlLWludHVpdGl2ZSBib3gtc2l6aW5nIG1vZGVsLlxcbiovXFxuKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB9XFxuICAvKlxcbiAgICAyLiBSZW1vdmUgZGVmYXVsdCBtYXJnaW5cXG4gICovXFxuICAqIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgfVxcbiAgLypcXG4gICAgVHlwb2dyYXBoaWMgdHdlYWtzIVxcbiAgICAzLiBBZGQgYWNjZXNzaWJsZSBsaW5lLWhlaWdodFxcbiAgICA0LiBJbXByb3ZlIHRleHQgcmVuZGVyaW5nXFxuICAqL1xcbiAgYm9keSB7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgfVxcbiAgLypcXG4gICAgNS4gSW1wcm92ZSBtZWRpYSBkZWZhdWx0c1xcbiAgKi9cXG4gIGltZywgcGljdHVyZSwgdmlkZW8sIGNhbnZhcywgc3ZnIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gIH1cXG4gIC8qXFxuICAgIDYuIFJlbW92ZSBidWlsdC1pbiBmb3JtIHR5cG9ncmFwaHkgc3R5bGVzXFxuICAqL1xcbiAgaW5wdXQsIGJ1dHRvbiwgdGV4dGFyZWEsIHNlbGVjdCB7XFxuICAgIGZvbnQ6IGluaGVyaXQ7XFxuICB9XFxuICAvKlxcbiAgICA3LiBBdm9pZCB0ZXh0IG92ZXJmbG93c1xcbiAgKi9cXG4gIHAsIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbiAgfVxcbiAgLypcXG4gICAgOC4gQ3JlYXRlIGEgcm9vdCBzdGFja2luZyBjb250ZXh0XFxuICAqL1xcbiAgI3Jvb3QsICNfX25leHQge1xcbiAgICBpc29sYXRpb246IGlzb2xhdGU7XFxuICB9XFxuXFxuOnJvb3R7XFxuICAgIC0tbWFpbi1iZy1jb2xvcjojNTAzZTIxO1xcbiAgICAtLW1haW4tYWNjZW50LWNvbG9yOiM3NDk1NGY7XFxuICAgIC0tc2Vjb25kYXJ5LWFjY2VudC1jb2xvcjojNDM1MTM0O1xcbiAgICAtLW1haW4tdGV4dC1jb2xvcjojYWVjMzk4O1xcblxcbn1cXG5pbWd7XFxuICAgIGhlaWdodDogODAwcHg7XFxuICAgIHdpZHRoOjYwMHB4O1xcbn1cXG5cXG5ib2R5e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWFjY2VudC1jb2xvcik7XFxuICAgIGhlaWdodDoxMDB2aDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNmZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNmZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICAgICdsZWZ0IGhlYWRlciByaWdodCdcXG4gICAgJ2xlZnQgY29udGVudCByaWdodCdcXG4gICAgJ2xlZnRib3R0b20gZm9vdGVyIHJpZ2h0Ym90dG9tJztcXG59XFxuXFxuaGVhZGVye1xcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZy1jb2xvcik7XFxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB2YXIoLS1tYWluLWFjY2VudC1jb2xvcik7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG5idXR0b257XFxuICAgIHBhZGRpbmc6NnB4IDEwcHggNnB4IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmctY29sb3IpO1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIGNvbG9yOnZhcigtLW1haW4tdGV4dC1jb2xvcik7XFxufVxcblxcbmhlYWRlciBoMXtcXG4gICAgY29sb3I6dmFyKC0tbWFpbi1hY2NlbnQtY29sb3IpO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbiNjb250ZW50e1xcbiAgICBncmlkLWFyZWE6IGNvbnRlbnQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmctY29sb3IpO1xcbiAgICBjb2xvcjogbGlnaHRncmF5O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICAgICdjb250ZW50T25lIGNvbnRlbnRUd28nXFxuICAgICdjb250ZW50T25lIGNvbnRlbnRUd28nO1xcbn1cXG5cXG4ubGVmdHtcXG4gICAgZ3JpZC1hcmVhOiBsZWZ0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnLWNvbG9yKTtcXG59XFxuLnJpZ2h0e1xcbiAgICBncmlkLWFyZWE6IHJpZ2h0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnLWNvbG9yKTtcXG59XFxuZm9vdGVye1xcbiAgICBncmlkLWFyZWE6IGZvb3RlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWFjY2VudC1jb2xvcik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLmZvb3Rlci5sb2NhdGlvbnN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZ2FwOiAxMnB4O1xcbn1cXG5cXG4uZm9vdGVyIGRpdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxubmF2e1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcbmgxe1xcbiAgICBjb2xvcjp2YXIoLS1tYWluLXRleHQtY29sb3IpO1xcbiAgICBmb250LWZhbWlseTpHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xcbiAgICBmb250LXNpemU6IDM2cHg7XFxuICAgIFxcbn1cXG5zcGFue1xcbiAgICBjb2xvcjp2YXIoLS1tYWluLXRleHQtY29sb3IpO1xcbn1cXG4ucmlnaHQtYm90dG9te1xcbiAgICBncmlkLWFyZWE6IHJpZ2h0Ym90dG9tO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktYWNjZW50LWNvbG9yKTtcXG59XFxuLmxlZnQtYm90dG9te1xcbiAgICBncmlkLWFyZWE6bGVmdGJvdHRvbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWFjY2VudC1jb2xvcik7XFxufVxcbi5jb250ZW50T25le1xcbiAgICBncmlkLWFyZWE6Y29udGVudE9uZTtcXG4gICAgd2lkdGg6ODAlO1xcbiAgICBcXG59XFxuLmNvbnRlbnRUd297XFxuICAgIGdyaWQtYXJlYTpjb250ZW50VHdvO1xcbiAgICB3aWR0aDogODAlO1xcbn1cXG5cXG5saXtcXG4gIG1hcmdpbi10b3A6MTJweDtcXG59XFxuXFxuZm9ybXtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5mb3JtIGxhYmVse1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcbmZvcm0gaW5wdXR7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLXRleHQtY29sb3IpO1xcbn1cXG5cXG4uc3VibWl0QnV0dG9ue1xcbiAgcGFkZGluZzo2cHggMTBweCA2cHggMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmctY29sb3IpO1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgY29sb3I6dmFyKC0tbWFpbi10ZXh0LWNvbG9yKTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGZyZW5jaE9uaW9uIGZyb20gJy4vZnJlbmNoLW9uaW9uLmpwZyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBhYm91dENyZWF0b3IoKXtcbiAgICBjb25zdCBjb250ZW50V3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgY29uc3QgY29udGVudE9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNvbnRlbnRUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250ZW50T25lLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdjb250ZW50T25lJyk7XG4gICAgY29udGVudFR3by5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NvbnRlbnRUd28nKTtcblxuICAgIGNvbnN0IGltYWdlQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltYWdlQ29udGVudC5zcmMgPSBmcmVuY2hPbmlvbjtcbiAgICBpbWFnZUNvbnRlbnQuc2V0QXR0cmlidXRlKCdhbHQnLCdHcmF0aW5hdGVkIGZyZW5jaCBvbmlvbiBzb3VwIGluIGEgdHJhZGl0aW9uYWwgYm93bCcpO1xuXG4gICAgY29udGVudFR3by5hcHBlbmRDaGlsZChpbWFnZUNvbnRlbnQpO1xuXG4gICAgY29uc3QgaGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGhlYWRsaW5lLmlubmVyVGV4dCA9ICdMZSBGb2llIEhldXJldXgnO1xuICAgIGNvbnRlbnRPbmUuYXBwZW5kQ2hpbGQoaGVhZGxpbmUpO1xuICAgIGNvbnN0IG5leHRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmV4dGxpbmUuaW5uZXJUZXh0ID0gJ0FuIGVsZWdhbnQgQW5raC1Nb3Jwb3JrIHJlc3RhdXJhbnQuJztcbiAgICBjb250ZW50T25lLmFwcGVuZENoaWxkKG5leHRsaW5lKTtcblxuICAgIGNvbnN0IGhlcm9UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVyb1RleHQuaW5uZXJUZXh0ID1cIlN0ZXAgaW50byB0aGUgY3VsaW5hcnkgaGF2ZW4gb2YgTGUgRm9pZSBIZXVyZXV4LCBuZXN0bGVkIGluIHRoZSBoZWFydCBvZiBBbmtoIE1vcnBvcmsuXFxuSW5kdWxnZSBpbiBnYXN0cm9ub21pYyBkZWxpZ2h0cyBjcmFmdGVkIHdpdGggZmluZXNzZSwgd2hlcmUgZXZlcnkgYml0ZSBpcyBhIHN5bXBob255IG9mIGZsYXZvcnMuIFxcbk91ciBtZW51IGNlbGVicmF0ZXMgdGhlIGFydCBvZiBRdWlybWlhbiBjdWlzaW5lLCBpbnZpdGluZyB5b3Ugb24gYSBqb3VybmV5IG9mIGV4cXVpc2l0ZSB0YXN0ZSBhbmQgdW5wYXJhbGxlbGVkIHNhdGlzZmFjdGlvbi4gXFxuSm9pbiB1cyBhbmQgc2F2b3IgbW9tZW50cyBvZiBwdXJlIGN1bGluYXJ5IGJsaXNzIGF0IExlIEZvaWUgSGV1cmV1eC5cIlxuICAgIGNvbnRlbnRPbmUuYXBwZW5kQ2hpbGQoaGVyb1RleHQpO1xuXG5cblxuXG5cbiAgICBjb250ZW50V3JhcHBlci5hcHBlbmRDaGlsZChjb250ZW50T25lKTtcbiAgICBjb250ZW50V3JhcHBlci5hcHBlbmRDaGlsZChjb250ZW50VHdvKTtcblxufSIsImltcG9ydCBjb250YWN0SW1hZ2UgZnJvbSAnLi9ydW1tYW4tYW1pbi1YMzlqWjVPcVJtay11bnNwbGFzaC5qcGcnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29udGFjdENyZWF0b3IoKXtcbiAgICBjb25zdCByZXN0YXVyYW50Q29udGFjdCA9IHtcbiAgICAgICAgYWRkcmVzczoge1xuICAgICAgICAgIGxpbmUxOiBcIjQyIFF1aXJtaXNoIExhbmVcIixcbiAgICAgICAgICBjaXR5OiBcIkFua2gtTW9ycG9ya1wiLFxuICAgICAgICAgIHN0YXRlOiBcIkRpc2N3b3JsZFwiLFxuICAgICAgICAgIHppcDogXCIxMjM0NVwiXG4gICAgICAgIH0sXG4gICAgICAgIHBob25lOiBcIigxMjMpIDQ1Ni03ODkwXCIsXG4gICAgICAgIGVtYWlsOiBcImluZm9ATGVGb2llLmNvbVwiLFxuICAgICAgICBzb2NpYWxNZWRpYToge1xuICAgICAgICAgIGZhY2Vib29rOiBcImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9MZUZvaWVcIixcbiAgICAgICAgICB0d2l0dGVyOiBcImh0dHBzOi8vd3d3LnR3aXR0ZXIuY29tL0xlRm9pZVwiLFxuICAgICAgICAgIGluc3RhZ3JhbTogXCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL0xlRm9pZVwiXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBcblxuICAgIGNvbnN0IGNvbnRlbnRXcmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBjb25zdCBjb250ZW50T25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgY29udGVudFR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIFxuXG4gICAgY29udGVudE9uZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnY29udGVudE9uZScpO1xuICAgIGNvbnRlbnRUd28uc2V0QXR0cmlidXRlKCdjbGFzcycsICdjb250ZW50VHdvJyk7XG5cbiAgICBjb25zdCBpbWFnZUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWFnZUNvbnRlbnQuc3JjID0gY29udGFjdEltYWdlO1xuICAgIGltYWdlQ29udGVudC5zZXRBdHRyaWJ1dGUoJ2FsdCcsJ1Bob3RvIGJ5IFJ1bW1hbiBBbWluIG9uIFVuc3BsYXNoJyk7XG5cbiAgICBjb250ZW50T25lLmFwcGVuZENoaWxkKGltYWdlQ29udGVudCk7XG5cbiAgICBjb25zdCBoZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaGVhZGxpbmUuaW5uZXJUZXh0ID0gJ0NvbnRhY3QgaW5mb3JtYXRpb24nO1xuICAgIGNvbnRlbnRUd28uYXBwZW5kQ2hpbGQoaGVhZGxpbmUpO1xuXG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMocmVzdGF1cmFudENvbnRhY3QpKSB7XG4gICAgICAgIGNvbnN0IGl0ZW1IZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIGl0ZW1IZWFkbGluZS5pbm5lclRleHQgPSBrZXk7XG4gICAgICAgIGNvbnRlbnRUd28uYXBwZW5kQ2hpbGQoaXRlbUhlYWRsaW5lKTtcbiAgICAgICAgXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IFtrZXlUd28sIHZhbHVlVHdvXSBvZiBPYmplY3QuZW50cmllcyh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBxdWVzdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICAgICAgICAgIHF1ZXN0aW9uRWxlbWVudC5pbm5lclRleHQgPSBrZXlUd28udG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgICAgICBjb250ZW50VHdvLmFwcGVuZENoaWxkKHF1ZXN0aW9uRWxlbWVudCk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBhbnN3ZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgYW5zd2VyRWxlbWVudC5pbm5lclRleHQgPSB2YWx1ZVR3bztcbiAgICAgICAgICAgICAgICBjb250ZW50VHdvLmFwcGVuZENoaWxkKGFuc3dlckVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgYW5zd2VyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgYW5zd2VyRWxlbWVudC5pbm5lclRleHQgPSB2YWx1ZTtcbiAgICAgICAgICAgIGNvbnRlbnRUd28uYXBwZW5kQ2hpbGQoYW5zd2VyRWxlbWVudCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29udGVudFdyYXBwZXIuYXBwZW5kQ2hpbGQoY29udGVudE9uZSk7XG4gICAgY29udGVudFdyYXBwZXIuYXBwZW5kQ2hpbGQoY29udGVudFR3byk7XG59IiwiaW1wb3J0IHN0ZWFrUGljIGZyb20gJy4vc3RlYWsuanBnJztcblxuZXhwb3J0IGZ1bmN0aW9uIGZhcUNyZWF0b3IoKXtcbiAgICBjb25zdCByZXN0YXVyYW50RkFRID0ge1xuICAgICAgICBxdWVzdGlvbjE6IHtcbiAgICAgICAgICBxdWVzdGlvbjogXCJXaGF0IGFyZSB5b3VyIG9wZW5pbmcgaG91cnM/XCIsXG4gICAgICAgICAgYW5zd2VyOiBcIldlIGFyZSBvcGVuIGZyb20gMTE6MzAgQU0gdG8gMTE6MDAgUE0sIE1vbmRheSB0aHJvdWdoIFN1bmRheS5cIlxuICAgICAgICB9LFxuICAgICAgICBxdWVzdGlvbjI6IHtcbiAgICAgICAgICBxdWVzdGlvbjogXCJEbyB5b3Ugb2ZmZXIgdmVnZXRhcmlhbiBvcHRpb25zP1wiLFxuICAgICAgICAgIGFuc3dlcjogXCJZZXMsIHdlIGhhdmUgYSB2YXJpZXR5IG9mIHZlZ2V0YXJpYW4gZGlzaGVzIGF2YWlsYWJsZSBvbiBvdXIgbWVudS5cIlxuICAgICAgICB9LFxuICAgICAgICBxdWVzdGlvbjM6IHtcbiAgICAgICAgICBxdWVzdGlvbjogXCJDYW4gSSBtYWtlIGEgcmVzZXJ2YXRpb24/XCIsXG4gICAgICAgICAgYW5zd2VyOiBcIkNlcnRhaW5seSEgWW91IGNhbiBtYWtlIGEgcmVzZXJ2YXRpb24gYnkgY2FsbGluZyB1cyBhdCAoMTIzKSA0NTYtNzg5MCBvciB0aHJvdWdoIG91ciBvbmxpbmUgcmVzZXJ2YXRpb24gc3lzdGVtLlwiXG4gICAgICAgIH0sXG4gICAgICAgIHF1ZXN0aW9uNDoge1xuICAgICAgICAgIHF1ZXN0aW9uOiBcIkRvIHlvdSBwcm92aWRlIGNhdGVyaW5nIHNlcnZpY2VzP1wiLFxuICAgICAgICAgIGFuc3dlcjogXCJZZXMsIHdlIG9mZmVyIGNhdGVyaW5nIHNlcnZpY2VzIGZvciBldmVudHMgb2YgYWxsIHNpemVzLiBQbGVhc2UgY29udGFjdCB1cyBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cIlxuICAgICAgICB9LFxuICAgICAgICBxdWVzdGlvbjU6IHtcbiAgICAgICAgICBxdWVzdGlvbjogXCJJcyB0aGVyZSBwYXJraW5nIGF2YWlsYWJsZT9cIixcbiAgICAgICAgICBhbnN3ZXI6IFwiWWVzLCB3ZSBoYXZlIHBhcmtpbmcgYXZhaWxhYmxlIGZvciBvdXIgY3VzdG9tZXJzLiBUaGVyZSBpcyBhIHBhcmtpbmcgbG90IGFkamFjZW50IHRvIHRoZSByZXN0YXVyYW50LlwiXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBcblxuICAgIGNvbnN0IGNvbnRlbnRXcmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBjb25zdCBjb250ZW50T25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgY29udGVudFR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIFxuXG4gICAgY29udGVudE9uZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnY29udGVudE9uZScpO1xuICAgIGNvbnRlbnRUd28uc2V0QXR0cmlidXRlKCdjbGFzcycsICdjb250ZW50VHdvJyk7XG5cbiAgICBjb25zdCBpbWFnZUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWFnZUNvbnRlbnQuc3JjID0gc3RlYWtQaWM7XG4gICAgaW1hZ2VDb250ZW50LnNldEF0dHJpYnV0ZSgnYWx0JywnIFN0ZWFrIGZyaXRlcyB3aXRoIGJlYXJuYWlzZSBieSBkYWVuc2tpdGNoZW4uY29tJyk7XG5cbiAgICBjb250ZW50VHdvLmFwcGVuZENoaWxkKGltYWdlQ29udGVudCk7XG5cbiAgICBjb25zdCBoZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaGVhZGxpbmUuaW5uZXJUZXh0ID0gJ0ZyZXF1ZW50bHkgQXNrZWQgUXVlc3Rpb25zJztcbiAgICBjb250ZW50T25lLmFwcGVuZENoaWxkKGhlYWRsaW5lKTtcblxuICAgIGZvcihjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMocmVzdGF1cmFudEZBUSkpe1xuICAgICAgICBjb25zdCBxdWVzdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICBxdWVzdGlvbkVsZW1lbnQuaW5uZXJUZXh0ID0gdmFsdWVbJ3F1ZXN0aW9uJ107XG4gICAgICAgIGNvbnRlbnRPbmUuYXBwZW5kQ2hpbGQocXVlc3Rpb25FbGVtZW50KTtcblxuICAgICAgICBjb25zdCBhbnN3ZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGFuc3dlckVsZW1lbnQuaW5uZXJUZXh0ID0gdmFsdWVbJ2Fuc3dlciddO1xuICAgICAgICBjb250ZW50T25lLmFwcGVuZENoaWxkKGFuc3dlckVsZW1lbnQpO1xuICAgIH07XG4gICAgY29udGVudFdyYXBwZXIuYXBwZW5kQ2hpbGQoY29udGVudE9uZSk7XG4gICAgY29udGVudFdyYXBwZXIuYXBwZW5kQ2hpbGQoY29udGVudFR3byk7XG59IiwiXG5cbmV4cG9ydCBmdW5jdGlvbiBtZW51Q3JlYXRvcigpe1xuICAgIGNvbnN0IG1lbnVPbmUgPSB7XG4gICAgICAgIFwiQXBwZXRpemVyc1wiOiBbXG4gICAgICAgICAgXCJDcmlzcHkgQ2FsYW1hcmkgd2l0aCBTcGljeSBBaW9saVwiLFxuICAgICAgICAgIFwiQ2FwcmVzZSBTYWxhZCB3aXRoIEZyZXNoIE1venphcmVsbGEgYW5kIEJhc2lsXCJcbiAgICAgICAgXSxcbiAgICAgICAgXCJTb3VwcyAmIFNhbGFkc1wiOiBbXG4gICAgICAgICAgXCJSb2FzdGVkIFRvbWF0byBTb3VwIHdpdGggR2FybGljIENyb3V0b25zXCIsXG4gICAgICAgICAgXCJDYWVzYXIgU2FsYWQgd2l0aCBHcmlsbGVkIENoaWNrZW5cIlxuICAgICAgICBdLFxuICAgICAgICBcIk1haW4gQ291cnNlc1wiOiBbXG4gICAgICAgICAgXCJHcmlsbGVkIFNhbG1vbiB3aXRoIExlbW9uIERpbGwgU2F1Y2UsIHNlcnZlZCB3aXRoIFN0ZWFtZWQgQXNwYXJhZ3VzIGFuZCBHYXJsaWMgTWFzaGVkIFBvdGF0b2VzXCIsXG4gICAgICAgICAgXCJNdXNocm9vbSBSaXNvdHRvIHdpdGggUGFybWVzYW4gQ2hlZXNlIGFuZCBUcnVmZmxlIE9pbFwiXG4gICAgICAgIF0sXG4gICAgICAgIFwiUGFzdGFcIjogW1xuICAgICAgICAgIFwiU3BhZ2hldHRpIENhcmJvbmFyYSB3aXRoIFBhbmNldHRhLCBFZ2csIGFuZCBQYXJtZXNhblwiXG4gICAgICAgIF1cbiAgICB9XG5cbiAgICAgICAgY29uc3QgbWVudVR3byA9IHtcbiAgICAgICAgXCJTYW5kd2ljaGVzXCI6IFtcbiAgICAgICAgICBcIkNsYXNzaWMgQ2x1YiBTYW5kd2ljaCB3aXRoIFR1cmtleSwgQmFjb24sIExldHR1Y2UsIFRvbWF0bywgYW5kIE1heW8sIHNlcnZlZCB3aXRoIEZyZW5jaCBGcmllc1wiXG4gICAgICAgIF0sXG4gICAgICAgIFwiQnVyZ2Vyc1wiOiBbXG4gICAgICAgICAgXCJBbmd1cyBCZWVmIEJ1cmdlciB3aXRoIENhcmFtZWxpemVkIE9uaW9ucywgU3dpc3MgQ2hlZXNlLCBhbmQgQkJRIFNhdWNlLCBzZXJ2ZWQgd2l0aCBTd2VldCBQb3RhdG8gRnJpZXNcIlxuICAgICAgICBdLFxuICAgICAgICBcIlZlZ2V0YXJpYW4gT3B0aW9uc1wiOiBbXG4gICAgICAgICAgXCJWZWdldGFibGUgU3Rpci1Gcnkgd2l0aCBUb2Z1LCBNaXhlZCBWZWdldGFibGVzLCBhbmQgU295IEdpbmdlciBTYXVjZSwgc2VydmVkIG92ZXIgSmFzbWluZSBSaWNlXCJcbiAgICAgICAgXSxcbiAgICAgICAgXCJEZXNzZXJ0c1wiOiBbXG4gICAgICAgICAgXCJDaG9jb2xhdGUgTGF2YSBDYWtlIHdpdGggVmFuaWxsYSBJY2UgQ3JlYW0gYW5kIFJhc3BiZXJyeSBDb3VsaXNcIixcbiAgICAgICAgICBcIk5ldyBZb3JrIFN0eWxlIENoZWVzZWNha2Ugd2l0aCBTdHJhd2JlcnJ5IENvbXBvdGVcIlxuICAgICAgICBdLFxuICAgICAgICBcIkJldmVyYWdlc1wiOiBbXG4gICAgICAgICAgXCJGcmVzaGx5IFNxdWVlemVkIE9yYW5nZSBKdWljZVwiLFxuICAgICAgICAgIFwiSWNlZCBNYXRjaGEgTGF0dGVcIlxuICAgICAgICBdXG4gICAgICB9O1xuXG4gICAgY29uc3QgY29udGVudFdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGNvbnN0IGNvbnRlbnRPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBjb250ZW50VHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgXG5cbiAgICBjb250ZW50T25lLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdjb250ZW50T25lJyk7XG4gICAgY29udGVudFR3by5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NvbnRlbnRUd28nKTtcbiAgICBjb25zdCBtZW51TGlzdE9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgY29uc3QgbWVudUxpc3RUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuXG5cbiAgICBmb3IoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKG1lbnVPbmUpKXtcbiAgICAgICAgY29uc3QgbmV3TGlzdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGNvbnN0IG5ld0xpc3RTaXplciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIG5ld0xpc3RTaXplci5pbm5lclRleHQgPSBrZXk7XG4gICAgICAgIFxuICAgICAgICBuZXdMaXN0SGVhZGVyLmFwcGVuZENoaWxkKG5ld0xpc3RTaXplcik7XG4gICAgICAgIG1lbnVMaXN0T25lLmFwcGVuZENoaWxkKG5ld0xpc3RIZWFkZXIpO1xuXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBjb25zdCBuZXdMaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICBuZXdMaXN0SXRlbS5pbm5lclRleHQgPSB2YWx1ZVtpXTtcbiAgICAgICAgICAgIG1lbnVMaXN0T25lLmFwcGVuZENoaWxkKG5ld0xpc3RJdGVtKTtcblxuICAgICAgICB9XG4gICAgfVxuICAgIFxuXG4gICAgZm9yKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhtZW51VHdvKSl7XG4gICAgICAgIGNvbnN0IG5ld0xpc3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBjb25zdCBuZXdMaXN0U2l6ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICBuZXdMaXN0U2l6ZXIuaW5uZXJUZXh0ID0ga2V5O1xuICAgICAgICBcbiAgICAgICAgbmV3TGlzdEhlYWRlci5hcHBlbmRDaGlsZChuZXdMaXN0U2l6ZXIpO1xuICAgICAgICBtZW51TGlzdFR3by5hcHBlbmRDaGlsZChuZXdMaXN0SGVhZGVyKTtcblxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgY29uc3QgbmV3TGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgICAgbmV3TGlzdEl0ZW0uaW5uZXJUZXh0ID0gdmFsdWVbaV07XG4gICAgICAgICAgICBtZW51TGlzdFR3by5hcHBlbmRDaGlsZChuZXdMaXN0SXRlbSk7XG5cbiAgICAgICAgfVxuICAgIH1cbiAgICBjb250ZW50T25lLmFwcGVuZENoaWxkKG1lbnVMaXN0T25lKTtcbiAgICBjb250ZW50VHdvLmFwcGVuZENoaWxkKG1lbnVMaXN0VHdvKTtcbiAgICBjb250ZW50V3JhcHBlci5hcHBlbmRDaGlsZChjb250ZW50T25lKTtcbiAgICBjb250ZW50V3JhcHBlci5hcHBlbmRDaGlsZChjb250ZW50VHdvKTtcblxuXG5cblxuXG59XG4iLCJpbXBvcnQgcmVzZXJ2YXRpb25QaWMgZnJvbSAnLi9yZXNlcnZhdGlvbnMuanBnJztcblxuZXhwb3J0IGZ1bmN0aW9uIHJlc2VydmF0aW9uQ3JlYXRvcigpe1xuICAgIGNvbnN0IGNvbnRlbnRXcmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBjb25zdCBjb250ZW50T25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgY29udGVudFR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIFxuXG4gICAgY29udGVudE9uZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnY29udGVudE9uZScpO1xuICAgIGNvbnRlbnRUd28uc2V0QXR0cmlidXRlKCdjbGFzcycsICdjb250ZW50VHdvJyk7XG5cbiAgICBjb25zdCBpbWFnZUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWFnZUNvbnRlbnQuc3JjID0gcmVzZXJ2YXRpb25QaWM7XG4gICAgaW1hZ2VDb250ZW50LnNldEF0dHJpYnV0ZSgnYWx0JywnVGhyZWUgd2hpdGUgbGluZW4gY292ZXJlZCByZXN0YXVyYW50IHRhYmxlcyBvdmVybG9va2luZyB0aGUgbWVkaXRlcnJhbmVhbiBieSDOlc67zrXPhc64zq3Pgc65zr/PgiDOnM+Azq3PhM+DzrfPgicpO1xuXG4gICAgY29udGVudE9uZS5hcHBlbmRDaGlsZChpbWFnZUNvbnRlbnQpO1xuXG4gICAgY29uc3QgdGV4dFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICB0ZXh0VGl0bGUuaW5uZXJUZXh0PSdSZXNlcnZlIGEgdGFibGUnO1xuXG4gICAgY29udGVudFR3by5hcHBlbmRDaGlsZCh0ZXh0VGl0bGUpO1xuXG4gICAgY29uc3QgZm9ybUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG5cbiAgICBjb25zdCBmb3JtTGFiZWxzID0gWydOYW1lJywnUGVvcGxlJywnRGF0ZScsJ0VtYWlsJywnUGhvbmUgTnVtYmVyJ107XG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgZm9ybUxhYmVscy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGNvbnN0IGZvcm1MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGZvcm1MYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsZm9ybUxhYmVsc1tpXSk7XG4gICAgICAgIGZvcm1MYWJlbC5pbm5lclRleHQgPSBmb3JtTGFiZWxzW2ldO1xuICAgICAgICBmb3JtQ29udGVudC5hcHBlbmRDaGlsZChmb3JtTGFiZWwpO1xuXG4gICAgICAgIGNvbnN0IGZvcm1JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGZvcm1JbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJyxmb3JtTGFiZWxzW2ldKTtcbiAgICAgICAgZm9ybUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsZm9ybUxhYmVsc1tpXSk7XG5cbiAgICAgICAgc3dpdGNoKGZvcm1MYWJlbHNbaV0pe1xuICAgICAgICAgICAgY2FzZSAnTmFtZSc6XG4gICAgICAgICAgICAgICAgZm9ybUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdQZW9wbGUnOlxuICAgICAgICAgICAgICAgIGZvcm1JbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnbnVtYmVyJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdFbWFpbCc6XG4gICAgICAgICAgICAgICAgZm9ybUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdlbWFpbCcpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnUGhvbmUgTnVtYmVyJzpcbiAgICAgICAgICAgICAgICBmb3JtSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywndGVsJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdEYXRlJzpcbiAgICAgICAgICAgICAgICBmb3JtSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywnZGF0ZScpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIH1cbiAgICAgICAgZm9ybUNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9ybUlucHV0KTtcbiAgICB9XG5cbiAgICBjb25zdCBmb3JtU3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBmb3JtU3VibWl0LnNldEF0dHJpYnV0ZSgndHlwZScsJ3N1Ym1pdCcpO1xuICAgIGZvcm1TdWJtaXQuc2V0QXR0cmlidXRlKCdjbGFzcycsJ3N1Ym1pdEJ1dHRvbicpO1xuICAgIGZvcm1Db250ZW50LmFwcGVuZENoaWxkKGZvcm1TdWJtaXQpO1xuICAgIFxuICAgIGNvbnRlbnRUd28uYXBwZW5kQ2hpbGQoZm9ybUNvbnRlbnQpO1xuXG4gICAgY29udGVudFdyYXBwZXIuYXBwZW5kQ2hpbGQoY29udGVudE9uZSk7XG4gICAgY29udGVudFdyYXBwZXIuYXBwZW5kQ2hpbGQoY29udGVudFR3byk7XG5cbiAgICBmb3JtQ29udGVudC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBldmVudCA9PntcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBhbGVydCgnUmVzZXJ2YXRpb25zIHN1Ym1pdHRlZCBzdWNjZXNmdWxseScpXG4gICAgfSlcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBtZW51Q3JlYXRvciB9IGZyb20gJy4vbWVudSc7XG5pbXBvcnQgeyByZXNlcnZhdGlvbkNyZWF0b3IgfSBmcm9tICcuL3Jlc2VydmF0aW9ucyc7XG5pbXBvcnQgeyBmYXFDcmVhdG9yIH0gZnJvbSAnLi9mYXEnO1xuaW1wb3J0IHsgY29udGFjdENyZWF0b3IgfSBmcm9tICcuL2NvbnRhY3QnO1xuaW1wb3J0IHsgYWJvdXRDcmVhdG9yIH0gZnJvbSAnLi9hYm91dCc7XG5cbmNvbnN0IG1lbnVCdXR0b25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdkJ1dHRvbnMnKTtcblxuZnVuY3Rpb24gcGFnZVdpcGVyKCl7XG4gICAgY29uc3QgY29udGVudFdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGxldCBjb250ZW50RWxlbWVudCA9IGNvbnRlbnRXcmFwcGVyLmxhc3RFbGVtZW50Q2hpbGQ7XG4gICAgd2hpbGUoY29udGVudEVsZW1lbnQpe1xuICAgICAgICBjb250ZW50V3JhcHBlci5yZW1vdmVDaGlsZChjb250ZW50RWxlbWVudCk7XG4gICAgICAgIGNvbnRlbnRFbGVtZW50ID0gY29udGVudFdyYXBwZXIubGFzdEVsZW1lbnRDaGlsZDtcbiAgICB9XG5cbn1cblxubWVudUJ1dHRvbnMuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzaW5cIiwgZXZlbnQgPT57XG4gICAgc3dpdGNoKGV2ZW50LnRhcmdldC5jbGFzc05hbWUpe1xuICAgICAgICBjYXNlICdtZW51JzpcbiAgICAgICAgICAgIHBhZ2VXaXBlcigpO1xuICAgICAgICAgICAgbWVudUNyZWF0b3IoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdyZXNlcnZhdGlvbnMnOlxuICAgICAgICAgICAgcGFnZVdpcGVyKCk7XG4gICAgICAgICAgICByZXNlcnZhdGlvbkNyZWF0b3IoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdmYXEnOlxuICAgICAgICAgICAgcGFnZVdpcGVyKCk7XG4gICAgICAgICAgICBmYXFDcmVhdG9yKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnY29udGFjdCc6XG4gICAgICAgICAgICBwYWdlV2lwZXIoKTtcbiAgICAgICAgICAgIGNvbnRhY3RDcmVhdG9yKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYWJvdXQnOlxuICAgICAgICAgICAgcGFnZVdpcGVyKCk7XG4gICAgICAgICAgICBhYm91dENyZWF0b3IoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufSlcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9