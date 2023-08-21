/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "userInput": () => (/* binding */ userInput),
/* harmony export */   "passInput": () => (/* binding */ passInput),
/* harmony export */   "main": () => (/* binding */ main),
/* harmony export */   "userActions": () => (/* binding */ userActions),
/* harmony export */   "bookings": () => (/* binding */ bookings),
/* harmony export */   "root": () => (/* binding */ root),
/* harmony export */   "leadingZero": () => (/* binding */ leadingZero),
/* harmony export */   "upcomingBookings": () => (/* binding */ upcomingBookings),
/* harmony export */   "previousBookings": () => (/* binding */ previousBookings),
/* harmony export */   "newBooking": () => (/* binding */ newBooking),
/* harmony export */   "selectRoomTypePanel": () => (/* binding */ selectRoomTypePanel),
/* harmony export */   "roomSelect": () => (/* binding */ roomSelect),
/* harmony export */   "roomsAvailablePanel": () => (/* binding */ roomsAvailablePanel),
/* harmony export */   "roomsAvailable": () => (/* binding */ roomsAvailable),
/* harmony export */   "date": () => (/* binding */ date),
/* harmony export */   "confirmBookingPanel": () => (/* binding */ confirmBookingPanel),
/* harmony export */   "roomDetails": () => (/* binding */ roomDetails)
/* harmony export */ });
/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _domUpdates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var _images_turing_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);
/* harmony import */ var _images_user_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14);
/* harmony import */ var _images_delete_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15);
/* harmony import */ var _images_back_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16);
/* harmony import */ var _images_overlook_background_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7);
// An example of how you tell webpack to use a CSS (SCSS) file



// An example of how you tell webpack to use an image (also need to link to it in the index.html)







// query selectors
const userInput = document.querySelector('#username');
const passInput = document.querySelector('#pass');
const submitLogin = document.querySelector('#submit');
const userActions = document.querySelector('#userActions');
const main = document.querySelector('main');
const bookings = document.querySelector('#bookings');
const root = document.querySelector(':root');
const leadingZero = document.querySelector('#leadingZero');
const bookingsToggle = document.querySelector('#bookingsToggle');
const upcomingBookings = document.querySelector("#upcoming");
const previousBookings = document.querySelector("#previous");
const bookNowBtn = document.querySelector("#bookNowBtn");
const newBooking = document.querySelector("#newBooking");
const backBtn = document.querySelector("#backBtn");
const exitBtn = document.querySelector("#exitBtn");
const date = document.querySelector("#bookingDate");
const confirmDateBtn = document.querySelector("#confirmDate");
const selectRoomTypePanel = document.querySelector("#selectRoomTypePanel");
const roomSelect = document.querySelector("#roomSelect");
const confirmRoomTypeBtn = document.querySelector("#confirmRoomType");
const roomsAvailablePanel = document.querySelector("#roomsAvailablePanel");
const roomsAvailable = document.querySelector("#roomsAvailable");
const roomDetails = document.querySelector("#roomDetails");
const confirmBookingPanel = document.querySelector('#confirmBookingPanel');
const confirmBookingBtn = document.querySelector('#confirmBookingBtn');
const returnToDashBtn = document.querySelector('#returnToDash');

// event listeners

submitLogin.addEventListener('click', _domUpdates__WEBPACK_IMPORTED_MODULE_1__.loginUser);

bookingsToggle.addEventListener('click', (e) => {
    if (e.target.classList.contains("unselected-view")) {
        (0,_domUpdates__WEBPACK_IMPORTED_MODULE_1__.toggleView)(e.target.id);
    }
});

bookingsToggle.addEventListener('keyup', (e) => {
    if (e.key === 'Enter' && e.target.classList.contains("unselected-view")) {
        (0,_domUpdates__WEBPACK_IMPORTED_MODULE_1__.toggleView)(e.target.id);
    }
});

bookNowBtn.addEventListener('click', _domUpdates__WEBPACK_IMPORTED_MODULE_1__.bookNow);

bookNowBtn.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        (0,_domUpdates__WEBPACK_IMPORTED_MODULE_1__.bookNow)();
    }
});

backBtn.addEventListener('click', _domUpdates__WEBPACK_IMPORTED_MODULE_1__.goToPreviousPanel);

backBtn.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        (0,_domUpdates__WEBPACK_IMPORTED_MODULE_1__.goToPreviousPanel)();
    }
});

exitBtn.addEventListener('click', _domUpdates__WEBPACK_IMPORTED_MODULE_1__.exitPanel);

exitBtn.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        (0,_domUpdates__WEBPACK_IMPORTED_MODULE_1__.exitPanel)();
    }
});

confirmDateBtn.addEventListener('click', () => {
    (0,_domUpdates__WEBPACK_IMPORTED_MODULE_1__.confirmDate)(date);
});

confirmDateBtn.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        (0,_domUpdates__WEBPACK_IMPORTED_MODULE_1__.confirmDate)();
    }
});

confirmRoomTypeBtn.addEventListener('click', _domUpdates__WEBPACK_IMPORTED_MODULE_1__.confirmRoomType);

confirmRoomTypeBtn.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        (0,_domUpdates__WEBPACK_IMPORTED_MODULE_1__.confirmRoomType)();
    }
});

roomsAvailable.addEventListener('click', (e) => {
    if (e.target.classList && e.target.closest('.room-card')) {
        (0,_domUpdates__WEBPACK_IMPORTED_MODULE_1__.getRoomDetails)(e.target.closest('.room-card').id);
    }
});

roomsAvailable.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        (0,_domUpdates__WEBPACK_IMPORTED_MODULE_1__.getRoomDetails)(e.target.closest('.room-card').id);
    }
});

confirmBookingBtn.addEventListener('click', _domUpdates__WEBPACK_IMPORTED_MODULE_1__.confirmBooking);

confirmBookingBtn.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        (0,_domUpdates__WEBPACK_IMPORTED_MODULE_1__.confirmBooking)();
    }
});

returnToDashBtn.addEventListener('click', _domUpdates__WEBPACK_IMPORTED_MODULE_1__.returnToDash);

returnToDashBtn.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        (0,_domUpdates__WEBPACK_IMPORTED_MODULE_1__.returnToDash)();
    }
});




/***/ }),
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),
/* 2 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 3 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_overlook_background_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_images_overlook_background_png__WEBPACK_IMPORTED_MODULE_3__.default);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html {\n  height: 100%;\n  width: 100%;\n}\n\nbody {\n  height: 100%;\n  width: 100%;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-family: 'Play', sans-serif;\n}\n\nmain {\n  height: 100%;\n  width: 100%;\n}\n\nsection {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n\ndiv {\n  display: flex;\n  align-items: center;\n}\n\n#nav {\n  justify-content: space-between;\n  background-color: #A8F6B5;\n  max-height: 83px;\n}\n\n#nav div {\n  margin-right: 2em;\n  width: 225px;\n  justify-content: space-between;\n}\n\n#login {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  flex-direction: column;\n  height: 100%;\n}\n\n#home {\n  margin: 20px;\n  font-family: 'Cinzel Decorative', cursive;\n  font-size: xx-large;\n}\n\n#costAndToggle {\n  flex-direction: column;\n  background-color: #D9D9D9;\n}\n\n#bookingsToggle {\n  display: flex;\n  flex-direction: row;\n}\n\n.action-btn {\n  width: 150px;\n  height: 50px;\n  background-color: blue;\n  color: white;\n  font-size: larger;\n  border: none;\n  border-radius: 10px;\n  cursor: pointer;\n  transition: all 0.5s;\n}\n\n.action-btn:hover {\n  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);\n}\n\n.action-btn span {\n  cursor: pointer;\n  position: relative;\n  transition: 0.5s;\n}\n\n.action-btn span::after {\n  content: '\\00bb';\n  position: absolute;\n  opacity: 0;\n  top: 0;\n  right: -20px;\n  transition: 0.5s;\n}\n\n.action-btn:hover span {\n  padding-right: 20px;\n}\n\n.action-btn:hover span::after {\n  opacity: 1;\n  right: 0;\n}\n\n#userSettings {\n  height: 2em;\n  width: 2em;\n  padding: .5em;\n  border-radius: 50%;\n  background-color: #D9D9D9;\n}\n\n#totalAmountSpentTitle {\n  margin-bottom: 0;\n}\n\n#costAndToggle div {\n  margin-bottom: 20px;\n}\n\n#costAndToggle div span {\n  font-size: xx-large;\n}\n\n#totalAmountSpentTitle {\n  font-size: larger;\n}\n\n:root {\n  --costInDollars: 0;\n  --cents: 0;\n}\n\n@property --num {\n  syntax: \"<integer>\";\n  initial-value: 0;\n  inherits: false;\n}\n\n#totalAmountSpentDollars {\n  counter-reset: dollars var(--num);\n  animation: dollarCounter 5s forwards ease-in-out;\n}\n\n#totalAmountSpentDollars::after {\n  content: counter(dollars);\n}\n\n@keyframes dollarCounter {\n  from {\n    --num: 0;\n  }\n  to {\n    --num: var(--costInDollars);\n  }\n}\n\n#cents {\n  counter-reset: cents var(--num);\n  animation: centsCounter 5s forwards ease-in-out;\n}\n\n#cents::after {\n  content: counter(cents);\n}\n\n@keyframes centsCounter {\n  from {\n    --num: 0;\n  }\n  to {\n    --num: var(--cents);\n  }\n}\n\n#bookingsToggleTitle,\n#confirmBookingPanel p {\n  font-size: xx-large;\n  margin: 0 0 5px;\n}\n\n#bookingsToggle {\n  font-size: 17px;\n  color: white;\n  background-color: rgba(52, 51, 51, 0.723);\n  display: flex;\n  width: 30vw;\n  height: 60px;\n  justify-content: space-evenly;\n  align-items: center;\n  border-radius: 25px;\n  margin-bottom: 5px;\n  min-width: 230px;\n}\n\n.toggle-option {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 45%;\n  height: 40px;\n  border-radius: 25px;\n  border: solid 2px #00000000;\n}\n\n.selected-view {\n  background-color: #242528;\n}\n\n.unselected-view {\n  transition: 0.2s;\n}\n\n.unselected-view:hover {\n  border: solid 2px #242528;\n  cursor: pointer;\n}\n\n#bookings {\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: space-around;\n}\n\n#noBookings {\n  margin: 100px;\n  align-self: center;\n}\n\n#bookings div {\n  width: 100%;\n}\n\n.row {\n  animation: animate-row 0.5s ease-in-out forwards;\n}\n\n@keyframes animate-row {\n  0% {\n    opacity: 0;\n    height: 0%;\n  }\n  100% {\n    opacity: 1;\n    height: 35%;\n  }\n}\n\n#bookings div span {\n  margin-right: 30px;\n  min-width: 120px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n}\n\n/* book room flow */\n\n#newBooking {\n  position: fixed;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 85%;\n  max-height: 95%;\n  border-radius: 50px;\n  z-index: 1;\n  background-image: linear-gradient(to right, #535a72cc, #171d2fcc);\n  min-width: 500px;\n}\n\n#bookingContainer {\n  height: 90%;\n  width: 90%;\n  display: flex;\n  flex-direction: column;\n  overflow: clip;\n  border-radius: 50px;\n  background-color: white;\n}\n\n#bookingContainer > div {\n  width: 100%;\n  justify-content: flex-end;\n}\n\n.nav-btn {\n  height: 50px;\n  width: 50px;\n  margin: 30px;\n  cursor: pointer;\n}\n\n.nav-btn:hover,\n.room-card:hover {\n  transition: .2s;\n  transform: scale(1.2);\n}\n\n.panel {\n  flex-direction: column;\n  background-color: white;\n  height: 80%;\n  width: 95%;\n  border-radius: 50px;\n}\n\n.hidden {\n  display: none;\n}\n\n.no-click {\n  pointer-events: none;\n}\n\n.blur {\n  filter: blur(4px);\n}\n\n.fade-in {\n  animation: fade-in 0.5s ease-in forwards;\n}\n\n@keyframes fade-in {\n  0% {\n    visibility: hidden;\n    opacity: 0;\n    height: 0%;\n  }\n  30% {\n    visibility: hidden;\n    opacity: 0;\n  }\n  60% {\n    visibility: visible;\n    opacity: 1;\n  }\n  100% {\n    visibility: visible;\n    opacity: 1;\n    height: 98%;\n  }\n}\n\n.slide-out {\n  animation: slide-out .5s ease-in forwards;\n}\n\n@keyframes slide-out {\n  0% {\n    border: black;\n    border-style: solid;\n    visibility: visible;\n    opacity: 1;\n    transform: translateX(0px);\n  }\n  100% {\n    visibility: hidden;\n    opacity: 0;\n    transform: translateX(-100%);\n  }\n}\n\n.slide-in {\n  animation: slide-in 1.5s ease-out forwards;\n}\n\n@keyframes slide-in {\n  0% {\n    border: black;\n    border-style: solid;\n    opacity: 0;\n    transform: translateX(100%);\n  }\n  40% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n  100% {\n    border: none;\n  }\n}\n\n#datePicker {\n  height: 100%;\n  width: 100%;\n  flex-direction: column;\n}\n\n.panel label {\n  font-size: 50px;\n  margin-bottom: 50px;\n}\n\n#datePicker input {\n  font-size: 50px;\n  margin-bottom: 50px;\n}\n\n#selectRoomTypePanel select {\n  font-size: 30px;\n  margin-bottom: 50px;\n}\n\n#roomsAvailablePanel p {\n  font-size: 50px;\n  margin-top: 0;\n}\n\n#roomsAvailable {\n  flex-direction: column;\n  overflow-y: scroll;\n  padding-top: 10px;\n}\n\n#roomsAvailable p {\n  font-size: large;\n  width: 75%;\n}\n\n.room-card {\n  justify-content: space-around;\n  height: 50px;\n  min-height: 50px;\n  width: 50%;\n  border: gray solid;\n  margin-bottom: 10px;\n  cursor: pointer;\n}\n\n#roomDetails,\n#confirmationDetails {\n  justify-content: flex-start;\n  flex-direction: column;\n  height: 200px;\n}\n\n#confirmationDetails p {\n  margin: 0;\n}\n\n#confirmBookingBtn,\n#returnToDash {\n  width: 215px;\n}\n", "",{"version":3,"sources":["webpack://./src/css/styles.css"],"names":[],"mappings":"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","sourcesContent":["html {\n  height: 100%;\n  width: 100%;\n}\n\nbody {\n  height: 100%;\n  width: 100%;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-family: 'Play', sans-serif;\n}\n\nmain {\n  height: 100%;\n  width: 100%;\n}\n\nsection {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n\ndiv {\n  display: flex;\n  align-items: center;\n}\n\n#nav {\n  justify-content: space-between;\n  background-color: #A8F6B5;\n  max-height: 83px;\n}\n\n#nav div {\n  margin-right: 2em;\n  width: 225px;\n  justify-content: space-between;\n}\n\n#login {\n  background-image: url('../images/overlook-background.png');\n  flex-direction: column;\n  height: 100%;\n}\n\n#home {\n  margin: 20px;\n  font-family: 'Cinzel Decorative', cursive;\n  font-size: xx-large;\n}\n\n#costAndToggle {\n  flex-direction: column;\n  background-color: #D9D9D9;\n}\n\n#bookingsToggle {\n  display: flex;\n  flex-direction: row;\n}\n\n.action-btn {\n  width: 150px;\n  height: 50px;\n  background-color: blue;\n  color: white;\n  font-size: larger;\n  border: none;\n  border-radius: 10px;\n  cursor: pointer;\n  transition: all 0.5s;\n}\n\n.action-btn:hover {\n  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);\n}\n\n.action-btn span {\n  cursor: pointer;\n  position: relative;\n  transition: 0.5s;\n}\n\n.action-btn span::after {\n  content: '\\00bb';\n  position: absolute;\n  opacity: 0;\n  top: 0;\n  right: -20px;\n  transition: 0.5s;\n}\n\n.action-btn:hover span {\n  padding-right: 20px;\n}\n\n.action-btn:hover span::after {\n  opacity: 1;\n  right: 0;\n}\n\n#userSettings {\n  height: 2em;\n  width: 2em;\n  padding: .5em;\n  border-radius: 50%;\n  background-color: #D9D9D9;\n}\n\n#totalAmountSpentTitle {\n  margin-bottom: 0;\n}\n\n#costAndToggle div {\n  margin-bottom: 20px;\n}\n\n#costAndToggle div span {\n  font-size: xx-large;\n}\n\n#totalAmountSpentTitle {\n  font-size: larger;\n}\n\n:root {\n  --costInDollars: 0;\n  --cents: 0;\n}\n\n@property --num {\n  syntax: \"<integer>\";\n  initial-value: 0;\n  inherits: false;\n}\n\n#totalAmountSpentDollars {\n  counter-reset: dollars var(--num);\n  animation: dollarCounter 5s forwards ease-in-out;\n}\n\n#totalAmountSpentDollars::after {\n  content: counter(dollars);\n}\n\n@keyframes dollarCounter {\n  from {\n    --num: 0;\n  }\n  to {\n    --num: var(--costInDollars);\n  }\n}\n\n#cents {\n  counter-reset: cents var(--num);\n  animation: centsCounter 5s forwards ease-in-out;\n}\n\n#cents::after {\n  content: counter(cents);\n}\n\n@keyframes centsCounter {\n  from {\n    --num: 0;\n  }\n  to {\n    --num: var(--cents);\n  }\n}\n\n#bookingsToggleTitle,\n#confirmBookingPanel p {\n  font-size: xx-large;\n  margin: 0 0 5px;\n}\n\n#bookingsToggle {\n  font-size: 17px;\n  color: white;\n  background-color: rgba(52, 51, 51, 0.723);\n  display: flex;\n  width: 30vw;\n  height: 60px;\n  justify-content: space-evenly;\n  align-items: center;\n  border-radius: 25px;\n  margin-bottom: 5px;\n  min-width: 230px;\n}\n\n.toggle-option {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 45%;\n  height: 40px;\n  border-radius: 25px;\n  border: solid 2px #00000000;\n}\n\n.selected-view {\n  background-color: #242528;\n}\n\n.unselected-view {\n  transition: 0.2s;\n}\n\n.unselected-view:hover {\n  border: solid 2px #242528;\n  cursor: pointer;\n}\n\n#bookings {\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: space-around;\n}\n\n#noBookings {\n  margin: 100px;\n  align-self: center;\n}\n\n#bookings div {\n  width: 100%;\n}\n\n.row {\n  animation: animate-row 0.5s ease-in-out forwards;\n}\n\n@keyframes animate-row {\n  0% {\n    opacity: 0;\n    height: 0%;\n  }\n  100% {\n    opacity: 1;\n    height: 35%;\n  }\n}\n\n#bookings div span {\n  margin-right: 30px;\n  min-width: 120px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n}\n\n/* book room flow */\n\n#newBooking {\n  position: fixed;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 85%;\n  max-height: 95%;\n  border-radius: 50px;\n  z-index: 1;\n  background-image: linear-gradient(to right, #535a72cc, #171d2fcc);\n  min-width: 500px;\n}\n\n#bookingContainer {\n  height: 90%;\n  width: 90%;\n  display: flex;\n  flex-direction: column;\n  overflow: clip;\n  border-radius: 50px;\n  background-color: white;\n}\n\n#bookingContainer > div {\n  width: 100%;\n  justify-content: flex-end;\n}\n\n.nav-btn {\n  height: 50px;\n  width: 50px;\n  margin: 30px;\n  cursor: pointer;\n}\n\n.nav-btn:hover,\n.room-card:hover {\n  transition: .2s;\n  transform: scale(1.2);\n}\n\n.panel {\n  flex-direction: column;\n  background-color: white;\n  height: 80%;\n  width: 95%;\n  border-radius: 50px;\n}\n\n.hidden {\n  display: none;\n}\n\n.no-click {\n  pointer-events: none;\n}\n\n.blur {\n  filter: blur(4px);\n}\n\n.fade-in {\n  animation: fade-in 0.5s ease-in forwards;\n}\n\n@keyframes fade-in {\n  0% {\n    visibility: hidden;\n    opacity: 0;\n    height: 0%;\n  }\n  30% {\n    visibility: hidden;\n    opacity: 0;\n  }\n  60% {\n    visibility: visible;\n    opacity: 1;\n  }\n  100% {\n    visibility: visible;\n    opacity: 1;\n    height: 98%;\n  }\n}\n\n.slide-out {\n  animation: slide-out .5s ease-in forwards;\n}\n\n@keyframes slide-out {\n  0% {\n    border: black;\n    border-style: solid;\n    visibility: visible;\n    opacity: 1;\n    transform: translateX(0px);\n  }\n  100% {\n    visibility: hidden;\n    opacity: 0;\n    transform: translateX(-100%);\n  }\n}\n\n.slide-in {\n  animation: slide-in 1.5s ease-out forwards;\n}\n\n@keyframes slide-in {\n  0% {\n    border: black;\n    border-style: solid;\n    opacity: 0;\n    transform: translateX(100%);\n  }\n  40% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n  100% {\n    border: none;\n  }\n}\n\n#datePicker {\n  height: 100%;\n  width: 100%;\n  flex-direction: column;\n}\n\n.panel label {\n  font-size: 50px;\n  margin-bottom: 50px;\n}\n\n#datePicker input {\n  font-size: 50px;\n  margin-bottom: 50px;\n}\n\n#selectRoomTypePanel select {\n  font-size: 30px;\n  margin-bottom: 50px;\n}\n\n#roomsAvailablePanel p {\n  font-size: 50px;\n  margin-top: 0;\n}\n\n#roomsAvailable {\n  flex-direction: column;\n  overflow-y: scroll;\n  padding-top: 10px;\n}\n\n#roomsAvailable p {\n  font-size: large;\n  width: 75%;\n}\n\n.room-card {\n  justify-content: space-around;\n  height: 50px;\n  min-height: 50px;\n  width: 50%;\n  border: gray solid;\n  margin-bottom: 10px;\n  cursor: pointer;\n}\n\n#roomDetails,\n#confirmationDetails {\n  justify-content: flex-start;\n  flex-direction: column;\n  height: 200px;\n}\n\n#confirmationDetails p {\n  margin: 0;\n}\n\n#confirmBookingBtn,\n#returnToDash {\n  width: 215px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 4 */
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),
/* 5 */
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),
/* 6 */
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/overlook-background.png");

/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderDashboard": () => (/* binding */ renderDashboard),
/* harmony export */   "loginUser": () => (/* binding */ loginUser),
/* harmony export */   "toggleView": () => (/* binding */ toggleView),
/* harmony export */   "bookNow": () => (/* binding */ bookNow),
/* harmony export */   "goToPreviousPanel": () => (/* binding */ goToPreviousPanel),
/* harmony export */   "exitPanel": () => (/* binding */ exitPanel),
/* harmony export */   "confirmDate": () => (/* binding */ confirmDate),
/* harmony export */   "confirmRoomType": () => (/* binding */ confirmRoomType),
/* harmony export */   "getRoomDetails": () => (/* binding */ getRoomDetails),
/* harmony export */   "confirmBooking": () => (/* binding */ confirmBooking),
/* harmony export */   "returnToDash": () => (/* binding */ returnToDash)
/* harmony export */ });
/* harmony import */ var _scripts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _helperFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var _bookings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);
/* harmony import */ var _apiCalls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12);






let currentView = 'upcoming';
let currentPanel;
let selectedDate;
let roomsFilteredByDate;
let selectedRoomType;
let selectedRoom;
let hasBidet;

const renderDashboard = (pageData) => {
    const bookingsByView = (0,_bookings__WEBPACK_IMPORTED_MODULE_3__.getBookingsByView)(pageData.currentUserBookings, currentView);
    const totalDollarsSpent = (0,_user__WEBPACK_IMPORTED_MODULE_2__.getTotalSpent)(bookingsByView, pageData.allRooms);

    const cents = Math.trunc((totalDollarsSpent % 1).toFixed(2) * 100);
    if (cents.toString().length > 1) {
        _scripts__WEBPACK_IMPORTED_MODULE_0__.leadingZero.classList.add('hidden');
    }

    _scripts__WEBPACK_IMPORTED_MODULE_0__.root.style.setProperty('--costInDollars', totalDollarsSpent.toFixed(0));
    _scripts__WEBPACK_IMPORTED_MODULE_0__.root.style.setProperty('--cents', cents);

    let rowColor;
    _scripts__WEBPACK_IMPORTED_MODULE_0__.bookings.innerHTML = `
        <div style="background-color:gray">
            <span>Date</span>
            <span>Room No.</span>
            <span>Room Type</span>
            <span>Bed Size</span>
            <span>No. Beds</span>
            <span>$</span>
        </div>
    `;
    
    if(!bookingsByView.length) {
        _scripts__WEBPACK_IMPORTED_MODULE_0__.bookings.innerHTML += `<p id=noBookings>No ${currentView} bookings!<p>`;
    } else {
        bookingsByView.forEach((booking, i) => {
            const thisRoom = pageData.allRooms.find(room => room.number === booking.roomNumber);
            i % 2 === 0 ? rowColor = '#bbf3c5' : rowColor = 'white';
            _scripts__WEBPACK_IMPORTED_MODULE_0__.bookings.innerHTML += `
            <div class=row style=background-color:${rowColor};>
                <span>${booking.date}</span>
                <span>${booking.roomNumber}</span>
                <span>${thisRoom.roomType}</span>
                <span>${thisRoom.bedSize}</span>
                <span>${thisRoom.numBeds}</span>
                <span>${thisRoom.costPerNight}</span>
            </div>`
        });
    }
}

const loginUser = () => {
    const userID = (0,_user__WEBPACK_IMPORTED_MODULE_2__.userLookup)(_scripts__WEBPACK_IMPORTED_MODULE_0__.userInput.value);
    if (userID && _scripts__WEBPACK_IMPORTED_MODULE_0__.passInput.value === 'overlook2021') {
        login.classList.add('hidden');
        (0,_apiCalls__WEBPACK_IMPORTED_MODULE_4__.getUser)(userID);
        (0,_apiCalls__WEBPACK_IMPORTED_MODULE_4__.loadData)();
        _scripts__WEBPACK_IMPORTED_MODULE_0__.main.classList.remove('hidden');
        _scripts__WEBPACK_IMPORTED_MODULE_0__.userActions.classList.remove('hidden');
    } else {
        console.log("Incorrect username or password, try again")
    }
}

const toggleView = (clickedViewID) => {
    if (clickedViewID !== currentView) {
        (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_1__.toggleBtns)([_scripts__WEBPACK_IMPORTED_MODULE_0__.upcomingBookings, _scripts__WEBPACK_IMPORTED_MODULE_0__.previousBookings]);
        currentView = clickedViewID;
        renderDashboard(_apiCalls__WEBPACK_IMPORTED_MODULE_4__.pageData);
    }
}

const bookNow = () => {
    currentPanel = 'selectDatePanel';
    nav.classList.add('blur', 'no-click');
    costAndToggle.classList.add('blur', 'no-click');
    _scripts__WEBPACK_IMPORTED_MODULE_0__.bookings.classList.add('blur', 'no-click');
    _scripts__WEBPACK_IMPORTED_MODULE_0__.newBooking.classList.remove('hidden');
    _scripts__WEBPACK_IMPORTED_MODULE_0__.newBooking.classList.add('fade-in');
    selectDatePanel.classList.remove('hidden');
}

const goToPreviousPanel = () => {
    if (currentPanel === 'selectDatePanel') {
        exitPanel();
    } else {
        
    }
}

const exitPanel = () => {
    if (currentPanel !== 'selectDatePanel') {
        const thisPanel = document.querySelector(`#${currentPanel}`);
        thisPanel.classList.add('hidden');
        thisPanel.classList.remove('slide-in');
    }
    
    returnToDash();
}

const confirmDate = (date) => {
    if (date.valueAsDate < new Date().setDate(new Date().getDate() - 1)) {
        alert("What are you Marty McFly? Please pick a future date.")
    } else {
        currentPanel = 'selectRoomTypePanel';
        selectedDate = date.value.replaceAll('-', '/');
        roomsFilteredByDate = _apiCalls__WEBPACK_IMPORTED_MODULE_4__.pageData.allRooms.filter(room => {
            const foundBooking = _apiCalls__WEBPACK_IMPORTED_MODULE_4__.pageData.allBookings.find(booking => {
                return booking.date === selectedDate && booking.roomNumber === room.number;
            });
            
            if(!foundBooking) return room;
        });

        selectDatePanel.classList.add('slide-out');
        setTimeout(() => {
            selectDatePanel.classList.add('hidden')
            selectDatePanel.classList.remove('slide-out');
            _scripts__WEBPACK_IMPORTED_MODULE_0__.selectRoomTypePanel.classList.remove('hidden');
            _scripts__WEBPACK_IMPORTED_MODULE_0__.selectRoomTypePanel.classList.add('slide-in');
        }, 500);
    }
}

const confirmRoomType = () => {
    selectedRoomType = _scripts__WEBPACK_IMPORTED_MODULE_0__.roomSelect.value;
    currentPanel = 'roomsAvailablePanel';
    let roomsFilteredByDateAndType = roomsFilteredByDate;
    if (selectedRoomType !== 'any') {
        roomsFilteredByDateAndType = roomsFilteredByDate.filter(room => room.roomType === selectedRoomType);
    }

    _scripts__WEBPACK_IMPORTED_MODULE_0__.selectRoomTypePanel.classList.remove('slide-in');
    _scripts__WEBPACK_IMPORTED_MODULE_0__.selectRoomTypePanel.classList.add('slide-out');
    setTimeout(() => {
        _scripts__WEBPACK_IMPORTED_MODULE_0__.selectRoomTypePanel.classList.add('hidden');
        _scripts__WEBPACK_IMPORTED_MODULE_0__.selectRoomTypePanel.classList.remove('slide-out');
        _scripts__WEBPACK_IMPORTED_MODULE_0__.roomsAvailablePanel.classList.remove('hidden');
        _scripts__WEBPACK_IMPORTED_MODULE_0__.roomsAvailablePanel.classList.add('slide-in');
        getRoomsAvailable(roomsFilteredByDateAndType);
    }, 500);
}

const getRoomsAvailable = (rooms) => {
    _scripts__WEBPACK_IMPORTED_MODULE_0__.roomsAvailable.innerHTML = '';
    if (!rooms.length) {
        _scripts__WEBPACK_IMPORTED_MODULE_0__.roomsAvailable.innerHTML = `
            <p>We're supremely sorry, but no rooms of this type are available on the day you requested. Please try again for an alternate day and/or room type.</p>
        `
    } else {
        rooms.forEach(room => {
            _scripts__WEBPACK_IMPORTED_MODULE_0__.roomsAvailable.innerHTML += `
                <div tabindex=1 class=room-card id=${room.number}>
                    <span>${room.numBeds} ${room.bedSize} bed(s)</span> <span>$${room.costPerNight}</span>
                </div>
            `;
        });
    }
}

const getRoomDetails = (roomNumber) => {
    currentPanel = 'confirmBookingPanel';
    _scripts__WEBPACK_IMPORTED_MODULE_0__.roomsAvailablePanel.classList.remove('slide-in');
    _scripts__WEBPACK_IMPORTED_MODULE_0__.roomsAvailablePanel.classList.add('slide-out');
    setTimeout(() => {
        _scripts__WEBPACK_IMPORTED_MODULE_0__.roomsAvailablePanel.classList.add('hidden');
        _scripts__WEBPACK_IMPORTED_MODULE_0__.roomsAvailablePanel.classList.remove('slide-out');
        _scripts__WEBPACK_IMPORTED_MODULE_0__.confirmBookingPanel.classList.remove('hidden');
        _scripts__WEBPACK_IMPORTED_MODULE_0__.confirmBookingPanel.classList.add('slide-in');
    }, 500);

    selectedRoom = _apiCalls__WEBPACK_IMPORTED_MODULE_4__.pageData.allRooms.find(room => room.number === Number(roomNumber));
    hasBidet = selectedRoom.bidet ? 'Yes' : 'No';
    _scripts__WEBPACK_IMPORTED_MODULE_0__.roomDetails.innerHTML = `
        <p>${selectedRoom.roomType}</p>
        <p>${selectedRoom.numBeds} ${selectedRoom.bedSize} bed(s)</p>
        <p>Bidet? <span id="hasBidet">${hasBidet}</span></p>
        <p>Cost per night: $${selectedRoom.costPerNight}</p>
    `;
}

const confirmBooking = () => {
    currentPanel = 'bookingConfirmationPanel';
    _scripts__WEBPACK_IMPORTED_MODULE_0__.confirmBookingPanel.classList.remove('slide-in');
    _scripts__WEBPACK_IMPORTED_MODULE_0__.confirmBookingPanel.classList.add('slide-out');
    setTimeout(() => {
        _scripts__WEBPACK_IMPORTED_MODULE_0__.confirmBookingPanel.classList.add('hidden');
        _scripts__WEBPACK_IMPORTED_MODULE_0__.confirmBookingPanel.classList.remove('slide-out');
        bookingConfirmationPanel.classList.remove('hidden');
        bookingConfirmationPanel.classList.add('slide-in');
    }, 500);

    (0,_apiCalls__WEBPACK_IMPORTED_MODULE_4__.addBooking)(selectedDate, selectedRoom.number);
    (0,_apiCalls__WEBPACK_IMPORTED_MODULE_4__.loadData)();

    setTimeout(() => {
        confirmationDetails.innerHTML = `
            <p>Prepare for your stay on ${selectedDate}!</p>
            <p>Confirmation No. ${_apiCalls__WEBPACK_IMPORTED_MODULE_4__.pageData.latestBookingID}</p>
            <p>Room No. ${selectedRoom.number}</p>
            <p>${selectedRoom.roomType}</p>
            <p>${selectedRoom.numBeds} ${selectedRoom.bedSize} bed(s)</p>
            <p>Bidet? <span id="hasBidet">${hasBidet}</span></p>
            <p>Cost per night: $${selectedRoom.costPerNight}</p>
        `
    }, 100);
}

const returnToDash = () => {
    bookingConfirmationPanel.classList.add('hidden');
    bookingConfirmationPanel.classList.remove('slide-in');
    nav.classList.remove('blur', 'no-click');
    costAndToggle.classList.remove('blur', 'no-click');
    _scripts__WEBPACK_IMPORTED_MODULE_0__.bookings.classList.remove('blur', 'no-click');
    _scripts__WEBPACK_IMPORTED_MODULE_0__.newBooking.classList.add('hidden');
    _scripts__WEBPACK_IMPORTED_MODULE_0__.newBooking.classList.remove('fade-in');
}




/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRandomIndex": () => (/* binding */ getRandomIndex),
/* harmony export */   "toggleBtns": () => (/* binding */ toggleBtns)
/* harmony export */ });
const getRandomIndex = (array) => {
    return Math.floor(Math.random() * array.length);
}

const toggleBtns = elements => {
    elements.forEach(element => {
      element.classList.toggle('selected-view');
      element.classList.toggle('unselected-view');
    })
}




/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTotalSpent": () => (/* binding */ getTotalSpent),
/* harmony export */   "userLookup": () => (/* binding */ userLookup)
/* harmony export */ });
const userLookup = (username) => {
    const slicedUsername = Number(username.slice(8))
    if (username.startsWith('customer') && slicedUsername <= 50 && slicedUsername > 0) {
        return slicedUsername;
    }
}

const getTotalSpent = (bookings, rooms) => {
    return bookings.reduce((acc, booking) => {
        const thisRoom = rooms.find(room => room.number === booking.roomNumber);
        return acc += thisRoom.costPerNight;
    }, 0);
}




/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getBookingsByView": () => (/* binding */ getBookingsByView)
/* harmony export */ });
const sortBookings = (bookings, view) => {
    let sortedBookings;
    if (view === 'upcoming') {
        sortedBookings = bookings.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (view === 'previous') {
        sortedBookings = bookings.sort((a, b) => new Date(b.date) - new Date(a.date));
    }
    
    return sortedBookings;
}

const getBookingsByView = (bookings, view) => {
    const today = new Date();
    let filteredBookings;
    if (view === 'upcoming') {
        filteredBookings = bookings.filter(booking => Date.parse(today) <= Date.parse(booking.date));
    } else if (view === 'previous') {
        filteredBookings = bookings.filter(booking => Date.parse(today) > Date.parse(booking.date));
    }
    
    return sortBookings(filteredBookings, view);
}





/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getUser": () => (/* binding */ getUser),
/* harmony export */   "loadData": () => (/* binding */ loadData),
/* harmony export */   "pageData": () => (/* binding */ pageData),
/* harmony export */   "addBooking": () => (/* binding */ addBooking)
/* harmony export */ });
/* harmony import */ var _domUpdates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);


let pageData = {
  currentUser: {},
  currentUserBookings: [],
  allRooms: [],
  allBookings: []
};

const getUser = (userID) => {
  fetch(`http://localhost:3001/api/v1/customers/${userID}`)
    .then(response => response.json())
    .then(user => pageData.currentUser = user)
    .catch(err => console.error(err));
}
const getAllBookings = () => fetch('http://localhost:3001/api/v1/bookings');
const getAllRooms = () => fetch('http://localhost:3001/api/v1/rooms');

const handleBookingsData = bookings => {
  pageData.allBookings = bookings;
  setTimeout(() => {
    pageData.currentUserBookings = bookings.filter(booking => booking.userID === pageData.currentUser.id);
    (0,_domUpdates__WEBPACK_IMPORTED_MODULE_0__.renderDashboard)(pageData);
  }, 750);
}

const loadData = () => {
    Promise.all([getAllBookings(), getAllRooms()])
    .then (responses => {
      responses.forEach(response => {
        if(response.ok) {
          response.json()
          .then (data => {
            const functions = {
              rooms: (rooms) => pageData.allRooms = rooms,
              bookings: (bookings) => handleBookingsData(bookings)
            };
            const property = response.url.split('/').reverse()[0];
            functions[property](data[property]);
          })
          .catch(err => console.error(err));
        } else {
          console.error(response.status);
        }
    })
  })   
}

const addBooking = (date, roomNumber) => {
  const requestOptions = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    }
  };

  requestOptions.body = JSON.stringify({ 
    "userID": pageData.currentUser.id, 
    "date": date, 
    "roomNumber": roomNumber
  });
  
  fetch('http://localhost:3001/api/v1/bookings', requestOptions)
    .then(response => response.json())
    .then(data => {
      pageData.latestBookingID = data.newBooking.id;
    })
    .catch(error => console.error(error));
}




/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/turing-logo.png");

/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/user.png");

/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/delete.png");

/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/back.png");

/***/ })
/******/ 	]);
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(0);
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map