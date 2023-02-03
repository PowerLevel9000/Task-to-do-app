/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n}\n\n.background span {\n  width: 5vmin;\n  height: 5vmin;\n  border-radius: 5vmin;\n  backface-visibility: hidden;\n  position: absolute;\n  animation: move;\n  animation-duration: 45s;\n  animation-timing-function: linear;\n  animation-iteration-count: infinite;\n}\n\nbody {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 80vh;\n}\nbody main {\n  display: flex;\n  background-color: #fff;\n  box-shadow: 0 0 10px black;\n  max-width: 600px;\n  width: 70%;\n}\n@media screen and (min-width: 300px) and (max-width: 900px) {\n  body main {\n    width: 99%;\n  }\n}\nbody main .task-shelf {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n}\nbody main .task-shelf .heading {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid gray;\n}\nbody main .task-shelf h2 {\n  margin: 5px 10%;\n}\nbody main .task-shelf i,\nbody main .task-shelf span {\n  margin: 5px 10% 5px 0;\n}\nbody main .task-shelf .tasks {\n  border-top: 1px solid gray;\n}\nbody main .task-shelf .task-list {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\nbody main .task-shelf .task-list:not(:last-of-type) {\n  border-bottom: 1px solid gray;\n}\nbody main .task-shelf .task-list div {\n  width: 85%;\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\nbody main .task-shelf form {\n  display: flex;\n  justify-content: space-between;\n}\nbody main .task-shelf input[type=submit] {\n  margin: 5px 10% 5px 0;\n}\nbody main .task-shelf input {\n  margin: 5px 0 5px 10%;\n  border: none;\n  height: 24px;\n}\nbody main .task-shelf input:focus {\n  outline: none;\n}\nbody main .task-shelf #taskGen {\n  width: 100%;\n}\nbody main .task-shelf label {\n  width: 85%;\n  flex-wrap: wrap;\n}\nbody main .task-shelf label:read-write:focus {\n  outline: none;\n}\n\n.strike {\n  text-decoration: line-through;\n}\n\n/* fallback */\n@font-face {\n  font-family: \"Material Symbols Outlined\";\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/materialsymbolsoutlined/v76/kJF1BvYX7BgnkSrUwT8OhrdQw4oELdPIeeII9v6oDMzByHX9rA6RzaxHMPdY43zj-jCxv3fzvRNU22ZXGJpEpjC_1n-q_4MrImHCIJIZrDCvHOej.woff2) format(\"woff2\");\n}\n.material-symbols-outlined {\n  font-family: \"Material Symbols Outlined\", sans-serif;\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px;\n  line-height: 1;\n  cursor: grab;\n  letter-spacing: normal;\n  text-transform: none;\n  display: inline-block;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n  -moz-font-feature-settings: \"liga\";\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.hidden {\n  display: none;\n}\n\n.clearall {\n  height: 40px;\n  width: 100%;\n  display: flex;\n  color: #333;\n  justify-content: center;\n  align-items: center;\n  background-color: #bed2a5;\n}\n\n.clearall h2:hover {\n  color: red;\n  cursor: pointer;\n}\n\n@media screen and (max-width: 768px) {\n  main {\n    width: 90%;\n  }\n}\n@keyframes move {\n  100% {\n    transform: translate3d(0, 0, 1px) rotate(360deg);\n  }\n}\n.background {\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  top: 0;\n  left: 0;\n  background: #d7cde4;\n  overflow: hidden;\n  z-index: -1;\n}\n\n.background span:nth-child(0) {\n  color: #e45a84;\n  top: 84%;\n  left: 33%;\n  animation-duration: 24s;\n  animation-delay: -37s;\n  transform-origin: -17vw -6vh;\n  box-shadow: 10vmin 0 1.5290608701vmin currentColor;\n}\n\n.background span:nth-child(1) {\n  color: #583c87;\n  top: 39%;\n  left: 80%;\n  animation-duration: 51s;\n  animation-delay: -8s;\n  transform-origin: -17vw 6vh;\n  box-shadow: 10vmin 0 1.2946729294vmin currentColor;\n}\n\n.background span:nth-child(2) {\n  color: #ffacac;\n  top: 13%;\n  left: 18%;\n  animation-duration: 38s;\n  animation-delay: -45s;\n  transform-origin: 21vw 18vh;\n  box-shadow: -10vmin 0 1.3970105754vmin currentColor;\n}\n\n.background span:nth-child(3) {\n  color: #e45a84;\n  top: 68%;\n  left: 62%;\n  animation-duration: 21s;\n  animation-delay: -48s;\n  transform-origin: 21vw 16vh;\n  box-shadow: -10vmin 0 1.6521214677vmin currentColor;\n}\n\n.background span:nth-child(4) {\n  color: #583c87;\n  top: 14%;\n  left: 94%;\n  animation-duration: 41s;\n  animation-delay: -38s;\n  transform-origin: -10vw -11vh;\n  box-shadow: -10vmin 0 1.3820575688vmin currentColor;\n}\n\n.background span:nth-child(5) {\n  color: #583c87;\n  top: 57%;\n  left: 59%;\n  animation-duration: 44s;\n  animation-delay: -49s;\n  transform-origin: -13vw 21vh;\n  box-shadow: 10vmin 0 1.4073696079vmin currentColor;\n}\n\n.background span:nth-child(6) {\n  color: #e45a84;\n  top: 3%;\n  left: 63%;\n  animation-duration: 44s;\n  animation-delay: -37s;\n  transform-origin: -13vw 17vh;\n  box-shadow: -10vmin 0 1.6558371243vmin currentColor;\n}\n\n.background span:nth-child(7) {\n  color: #e45a84;\n  top: 73%;\n  left: 94%;\n  animation-duration: 21s;\n  animation-delay: -8s;\n  transform-origin: 11vw -1vh;\n  box-shadow: -10vmin 0 1.344560723vmin currentColor;\n}\n\n.background span:nth-child(8) {\n  color: #583c87;\n  top: 75%;\n  left: 80%;\n  animation-duration: 9s;\n  animation-delay: -19s;\n  transform-origin: 17vw 4vh;\n  box-shadow: -10vmin 0 1.2599543643vmin currentColor;\n}\n\n.background span:nth-child(9) {\n  color: #ffacac;\n  top: 32%;\n  left: 11%;\n  animation-duration: 55s;\n  animation-delay: -20s;\n  transform-origin: 12vw 14vh;\n  box-shadow: -10vmin 0 1.5426684853vmin currentColor;\n}\n\n.background span:nth-child(10) {\n  color: #e45a84;\n  top: 18%;\n  left: 33%;\n  animation-duration: 47s;\n  animation-delay: -5s;\n  transform-origin: -17vw -13vh;\n  box-shadow: -10vmin 0 1.5568780083vmin currentColor;\n}\n\n.background span:nth-child(11) {\n  color: #e45a84;\n  top: 49%;\n  left: 42%;\n  animation-duration: 19s;\n  animation-delay: -31s;\n  transform-origin: -10vw -15vh;\n  box-shadow: -10vmin 0 1.6244881423vmin currentColor;\n}\n\n.background span:nth-child(12) {\n  color: #e45a84;\n  top: 6%;\n  left: 99%;\n  animation-duration: 44s;\n  animation-delay: -35s;\n  transform-origin: -7vw 0;\n  box-shadow: 10vmin 0 1.5608974013vmin currentColor;\n}\n\n.background span:nth-child(13) {\n  color: #e45a84;\n  top: 2%;\n  left: 35%;\n  animation-duration: 31s;\n  animation-delay: -33s;\n  transform-origin: -15vw 1vh;\n  box-shadow: -10vmin 0 1.625645375vmin currentColor;\n}\n\n.background span:nth-child(14) {\n  color: #e45a84;\n  top: 30%;\n  left: 59%;\n  animation-duration: 39s;\n  animation-delay: -21s;\n  transform-origin: 18vw 7vh;\n  box-shadow: -10vmin 0 1.7937142836vmin currentColor;\n}\n\n.background span:nth-child(15) {\n  color: #ffacac;\n  top: 84%;\n  left: 30%;\n  animation-duration: 8s;\n  animation-delay: -18s;\n  transform-origin: -3vw 20vh;\n  box-shadow: -10vmin 0 2.1082694927vmin currentColor;\n}\n\n.background span:nth-child(16) {\n  color: #583c87;\n  top: 81%;\n  left: 54%;\n  animation-duration: 7s;\n  animation-delay: -38s;\n  transform-origin: -4vw 10vh;\n  box-shadow: -10vmin 0 1.9863722896vmin currentColor;\n}\n\n.background span:nth-child(17) {\n  color: #583c87;\n  top: 78%;\n  left: 96%;\n  animation-duration: 32s;\n  animation-delay: -43s;\n  transform-origin: -18vw -19vh;\n  box-shadow: 10vmin 0 1.8767182403vmin currentColor;\n}\n\n.background span:nth-child(18) {\n  color: #e45a84;\n  top: 1%;\n  left: 80%;\n  animation-duration: 22s;\n  animation-delay: -22s;\n  transform-origin: -18vw 21vh;\n  box-shadow: -10vmin 0 1.6250526407vmin currentColor;\n}\n\n.background span:nth-child(19) {\n  color: #ffacac;\n  top: 35%;\n  left: 16%;\n  animation-duration: 24s;\n  animation-delay: -12s;\n  transform-origin: 9vw 23vh;\n  box-shadow: 10vmin 0 1.919571035vmin currentColor;\n}", "",{"version":3,"sources":["webpack://./src/styles/main.scss"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');\r\n\r\n$primary-color: #2fa8cc;\r\n$secondary-color: #f4f4f4;\r\n$box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);\r\n$small: 300px;\r\n$medium: 900px;\r\n\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\n.background span {\r\n  width: 5vmin;\r\n  height: 5vmin;\r\n  border-radius: 5vmin;\r\n  backface-visibility: hidden;\r\n  position: absolute;\r\n  animation: move;\r\n  animation-duration: 45s;\r\n  animation-timing-function: linear;\r\n  animation-iteration-count: infinite;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  min-height: 80vh;\r\n\r\n  main {\r\n    display: flex;\r\n    background-color: #fff;\r\n    box-shadow: 0 0 10px black;\r\n    max-width: 600px;\r\n    width: 70%;\r\n\r\n    @media screen and (min-width: $small) and (max-width: $medium) {\r\n      width: 99%;\r\n      //css code\r\n    }\r\n\r\n    .task-shelf {\r\n      display: flex;\r\n      flex-direction: column;\r\n      justify-content: center;\r\n      width: 100%;\r\n\r\n      .heading {\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: space-between;\r\n        border-bottom: 1px solid gray;\r\n      }\r\n\r\n      h2 {\r\n        margin: 5px 10%;\r\n      }\r\n\r\n      i,\r\n      span {\r\n        margin: 5px 10% 5px 0;\r\n      }\r\n\r\n      .tasks {\r\n        border-top: 1px solid gray;\r\n      }\r\n\r\n      .task-list {\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: space-between;\r\n      }\r\n\r\n      .task-list:not(:last-of-type) {\r\n        border-bottom: 1px solid gray;\r\n      }\r\n\r\n      .task-list div {\r\n        width: 85%;\r\n        display: flex;\r\n        align-items: center;\r\n        gap: 20px;\r\n      }\r\n\r\n      form {\r\n        display: flex;\r\n        justify-content: space-between;\r\n      }\r\n\r\n      input[type=\"submit\"] {\r\n        margin: 5px 10% 5px 0;\r\n      }\r\n\r\n      input {\r\n        margin: 5px 0 5px 10%;\r\n        border: none;\r\n        height: 24px;\r\n        // width: 95%;\r\n\r\n        &:focus {\r\n          outline: none;\r\n        }\r\n      }\r\n\r\n      #taskGen {\r\n        width: 100%;\r\n      }\r\n\r\n      label {\r\n        width: 85%;\r\n        flex-wrap: wrap;\r\n      }\r\n\r\n      label:read-write:focus {\r\n        outline: none;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n.strike {\r\n  text-decoration: line-through;\r\n}\r\n\r\n/* fallback */\r\n@font-face {\r\n  font-family: 'Material Symbols Outlined';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: url(https://fonts.gstatic.com/s/materialsymbolsoutlined/v76/kJF1BvYX7BgnkSrUwT8OhrdQw4oELdPIeeII9v6oDMzByHX9rA6RzaxHMPdY43zj-jCxv3fzvRNU22ZXGJpEpjC_1n-q_4MrImHCIJIZrDCvHOej.woff2) format('woff2');\r\n}\r\n\r\n//some changes\r\n.material-symbols-outlined {\r\n  font-family: 'Material Symbols Outlined', sans-serif;\r\n  font-weight: normal;\r\n  font-style: normal;\r\n  font-size: 24px;\r\n  line-height: 1;\r\n  cursor: grab;\r\n  letter-spacing: normal;\r\n  text-transform: none;\r\n  display: inline-block;\r\n  white-space: nowrap;\r\n  word-wrap: normal;\r\n  direction: ltr;\r\n  -moz-font-feature-settings: 'liga';\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n// .start{\r\n//   background-color:#EDEADE ;\r\n// }\r\n\r\n// .enter {\r\n//   background-color: #ffe5b4;\r\n// }\r\n\r\n// .over{\r\n//   background-color: #eedc82;\r\n// }\r\n\r\n// // .drop {\r\n\r\n// // }\r\n\r\n.clearall {\r\n  height: 40px;\r\n  width: 100%;\r\n  display: flex;\r\n  color: #333;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: #bed2a5;\r\n}\r\n\r\n.clearall h2:hover {\r\n  color: red;\r\n  cursor: pointer;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n  main {\r\n    width: 90%;\r\n  }\r\n}\r\n\r\n@keyframes move {\r\n  100% {\r\n    transform: translate3d(0, 0, 1px) rotate(360deg);\r\n  }\r\n}\r\n\r\n.background {\r\n  position: fixed;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  top: 0;\r\n  left: 0;\r\n  background: #d7cde4;\r\n  overflow: hidden;\r\n  z-index: -1;\r\n}\r\n\r\n.background span:nth-child(0) {\r\n  color: #e45a84;\r\n  top: 84%;\r\n  left: 33%;\r\n  animation-duration: 24s;\r\n  animation-delay: -37s;\r\n  transform-origin: -17vw -6vh;\r\n  box-shadow: 10vmin 0 1.5290608700823642vmin currentColor;\r\n}\r\n\r\n.background span:nth-child(1) {\r\n  color: #583c87;\r\n  top: 39%;\r\n  left: 80%;\r\n  animation-duration: 51s;\r\n  animation-delay: -8s;\r\n  transform-origin: -17vw 6vh;\r\n  box-shadow: 10vmin 0 1.2946729293981227vmin currentColor;\r\n}\r\n\r\n.background span:nth-child(2) {\r\n  color: #ffacac;\r\n  top: 13%;\r\n  left: 18%;\r\n  animation-duration: 38s;\r\n  animation-delay: -45s;\r\n  transform-origin: 21vw 18vh;\r\n  box-shadow: -10vmin 0 1.3970105753974125vmin currentColor;\r\n}\r\n\r\n.background span:nth-child(3) {\r\n  color: #e45a84;\r\n  top: 68%;\r\n  left: 62%;\r\n  animation-duration: 21s;\r\n  animation-delay: -48s;\r\n  transform-origin: 21vw 16vh;\r\n  box-shadow: -10vmin 0 1.652121467716574vmin currentColor;\r\n}\r\n\r\n.background span:nth-child(4) {\r\n  color: #583c87;\r\n  top: 14%;\r\n  left: 94%;\r\n  animation-duration: 41s;\r\n  animation-delay: -38s;\r\n  transform-origin: -10vw -11vh;\r\n  box-shadow: -10vmin 0 1.3820575687770964vmin currentColor;\r\n}\r\n\r\n.background span:nth-child(5) {\r\n  color: #583c87;\r\n  top: 57%;\r\n  left: 59%;\r\n  animation-duration: 44s;\r\n  animation-delay: -49s;\r\n  transform-origin: -13vw 21vh;\r\n  box-shadow: 10vmin 0 1.4073696078689468vmin currentColor;\r\n}\r\n\r\n.background span:nth-child(6) {\r\n  color: #e45a84;\r\n  top: 3%;\r\n  left: 63%;\r\n  animation-duration: 44s;\r\n  animation-delay: -37s;\r\n  transform-origin: -13vw 17vh;\r\n  box-shadow: -10vmin 0 1.6558371242846226vmin currentColor;\r\n}\r\n\r\n.background span:nth-child(7) {\r\n  color: #e45a84;\r\n  top: 73%;\r\n  left: 94%;\r\n  animation-duration: 21s;\r\n  animation-delay: -8s;\r\n  transform-origin: 11vw -1vh;\r\n  box-shadow: -10vmin 0 1.3445607230497882vmin currentColor;\r\n}\r\n\r\n.background span:nth-child(8) {\r\n  color: #583c87;\r\n  top: 75%;\r\n  left: 80%;\r\n  animation-duration: 9s;\r\n  animation-delay: -19s;\r\n  transform-origin: 17vw 4vh;\r\n  box-shadow: -10vmin 0 1.2599543642619708vmin currentColor;\r\n}\r\n\r\n.background span:nth-child(9) {\r\n  color: #ffacac;\r\n  top: 32%;\r\n  left: 11%;\r\n  animation-duration: 55s;\r\n  animation-delay: -20s;\r\n  transform-origin: 12vw 14vh;\r\n  box-shadow: -10vmin 0 1.5426684852936203vmin currentColor;\r\n}\r\n\r\n.background span:nth-child(10) {\r\n  color: #e45a84;\r\n  top: 18%;\r\n  left: 33%;\r\n  animation-duration: 47s;\r\n  animation-delay: -5s;\r\n  transform-origin: -17vw -13vh;\r\n  box-shadow: -10vmin 0 1.5568780082655167vmin currentColor;\r\n}\r\n\r\n.background span:nth-child(11) {\r\n  color: #e45a84;\r\n  top: 49%;\r\n  left: 42%;\r\n  animation-duration: 19s;\r\n  animation-delay: -31s;\r\n  transform-origin: -10vw -15vh;\r\n  box-shadow: -10vmin 0 1.6244881422941384vmin currentColor;\r\n}\r\n\r\n.background span:nth-child(12) {\r\n  color: #e45a84;\r\n  top: 6%;\r\n  left: 99%;\r\n  animation-duration: 44s;\r\n  animation-delay: -35s;\r\n  transform-origin: -7vw 0;\r\n  box-shadow: 10vmin 0 1.5608974013490005vmin currentColor;\r\n}\r\n\r\n.background span:nth-child(13) {\r\n  color: #e45a84;\r\n  top: 2%;\r\n  left: 35%;\r\n  animation-duration: 31s;\r\n  animation-delay: -33s;\r\n  transform-origin: -15vw 1vh;\r\n  box-shadow: -10vmin 0 1.6256453750498956vmin currentColor;\r\n}\r\n\r\n.background span:nth-child(14) {\r\n  color: #e45a84;\r\n  top: 30%;\r\n  left: 59%;\r\n  animation-duration: 39s;\r\n  animation-delay: -21s;\r\n  transform-origin: 18vw 7vh;\r\n  box-shadow: -10vmin 0 1.7937142836119246vmin currentColor;\r\n}\r\n\r\n.background span:nth-child(15) {\r\n  color: #ffacac;\r\n  top: 84%;\r\n  left: 30%;\r\n  animation-duration: 8s;\r\n  animation-delay: -18s;\r\n  transform-origin: -3vw 20vh;\r\n  box-shadow: -10vmin 0 2.1082694926655714vmin currentColor;\r\n}\r\n\r\n.background span:nth-child(16) {\r\n  color: #583c87;\r\n  top: 81%;\r\n  left: 54%;\r\n  animation-duration: 7s;\r\n  animation-delay: -38s;\r\n  transform-origin: -4vw 10vh;\r\n  box-shadow: -10vmin 0 1.986372289581031vmin currentColor;\r\n}\r\n\r\n.background span:nth-child(17) {\r\n  color: #583c87;\r\n  top: 78%;\r\n  left: 96%;\r\n  animation-duration: 32s;\r\n  animation-delay: -43s;\r\n  transform-origin: -18vw -19vh;\r\n  box-shadow: 10vmin 0 1.8767182403440104vmin currentColor;\r\n}\r\n\r\n.background span:nth-child(18) {\r\n  color: #e45a84;\r\n  top: 1%;\r\n  left: 80%;\r\n  animation-duration: 22s;\r\n  animation-delay: -22s;\r\n  transform-origin: -18vw 21vh;\r\n  box-shadow: -10vmin 0 1.6250526406849763vmin currentColor;\r\n}\r\n\r\n.background span:nth-child(19) {\r\n  color: #ffacac;\r\n  top: 35%;\r\n  left: 16%;\r\n  animation-duration: 24s;\r\n  animation-delay: -12s;\r\n  transform-origin: 9vw 23vh;\r\n  box-shadow: 10vmin 0 1.9195710349999995vmin currentColor;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

/***/ "./node_modules/localstorage-memory/lib/localstorage-memory.js":
/*!*********************************************************************!*\
  !*** ./node_modules/localstorage-memory/lib/localstorage-memory.js ***!
  \*********************************************************************/
/***/ (function(module) {

(function (root) {
  var localStorageMemory = {}
  var cache = {}

  /**
   * number of stored items.
   */
  localStorageMemory.length = 0

  /**
   * returns item for passed key, or null
   *
   * @para {String} key
   *       name of item to be returned
   * @returns {String|null}
   */
  localStorageMemory.getItem = function (key) {
    if (key in cache) {
      return cache[key]
    }

    return null
  }

  /**
   * sets item for key to passed value, as String
   *
   * @para {String} key
   *       name of item to be set
   * @para {String} value
   *       value, will always be turned into a String
   * @returns {undefined}
   */
  localStorageMemory.setItem = function (key, value) {
    if (typeof value === 'undefined') {
      localStorageMemory.removeItem(key)
    } else {
      if (!(cache.hasOwnProperty(key))) {
        localStorageMemory.length++
      }

      cache[key] = '' + value
    }
  }

  /**
   * removes item for passed key
   *
   * @para {String} key
   *       name of item to be removed
   * @returns {undefined}
   */
  localStorageMemory.removeItem = function (key) {
    if (cache.hasOwnProperty(key)) {
      delete cache[key]
      localStorageMemory.length--
    }
  }

  /**
   * returns name of key at passed index
   *
   * @para {Number} index
   *       Position for key to be returned (starts at 0)
   * @returns {String|null}
   */
  localStorageMemory.key = function (index) {
    return Object.keys(cache)[index] || null
  }

  /**
   * removes all stored items and sets length to 0
   *
   * @returns {undefined}
   */
  localStorageMemory.clear = function () {
    cache = {}
    localStorageMemory.length = 0
  }

  if (true) {
    module.exports = localStorageMemory
  } else {}
})(this)


/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
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

"use strict";


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

"use strict";


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

"use strict";


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
  } // For old IE

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

"use strict";


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

/***/ "./src/local.js":
/*!**********************!*\
  !*** ./src/local.js ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const localStorageMemory = __webpack_require__(/*! localstorage-memory */ "./node_modules/localstorage-memory/lib/localstorage-memory.js");

__webpack_require__.g.localStorage = localStorageMemory;
const dataBase = JSON.parse(localStorage.getItem('dataBase')) || [];

module.exports = dataBase;


/***/ }),

/***/ "./src/status.js":
/*!***********************!*\
  !*** ./src/status.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const dataBase = __webpack_require__(/*! ./local */ "./src/local.js")// eslint-disable-line

const clear = () => {
  const filteredBase = dataBase.filter((c) => c.check === false);
  localStorage.setItem('dataBase', JSON.stringify(filteredBase));
  window.location.reload();
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clear);

/***/ }),

/***/ "./src/submit.js":
/*!***********************!*\
  !*** ./src/submit.js ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const dataBase = __webpack_require__(/*! ./local.js */ "./src/local.js");

const submitForm = () => {
  const taskGen = document.getElementById('taskGen');
  if (taskGen.value.trim() === '') return;
  dataBase.push({ check: false, task: `${taskGen.value}`, id: dataBase.length + 1 });
  localStorage.setItem('dataBase', JSON.stringify(dataBase));
  taskGen.value = '';
};

module.exports = submitForm;

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _status_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./status.js */ "./src/status.js");


const submitForm = __webpack_require__(/*! ./submit.js */ "./src/submit.js");
// const remove = require('./remove.js');
const dataBase = __webpack_require__(/*! ./local.js */ "./src/local.js");

 // eslint-disable-line

const form = document.getElementById('formId');

const tasks = document.getElementById('tasks');
const htmlGenerator = () => {
  tasks.innerHTML = '';
  dataBase.forEach((element) => {
    if (element.check) {
      tasks.innerHTML += `
        <div class="task-list" draggable="true">
          <div>
            <input class="checkbox" type="checkbox" name="" id="${element.id}" checked>
            <label class="list strike" contenteditable="true">${element.task}</label> 
          </div>
          <span class="material-symbols-outlined">
            drag_indicator
          </span>
          <i class="fa-solid fa-trash-can hidden"></i>
        </div>
    `;
    } else {
      tasks.innerHTML += `
        <div class="task-list" draggable="true">
          <div class='task-box'>
            <input class="checkbox" type="checkbox" name="" id="${element.id}">
            <label class="list" contenteditable="true">${element.task}</label>
          </div>
          <span class="material-symbols-outlined">
            drag_indicator
          </span>
          <i class="fa-solid fa-trash-can hidden"></i>
        </div>
    `;
    }
  });
};
htmlGenerator();

form.addEventListener('submit', submitForm);

const editAble = document.querySelectorAll('.task-list');
const dragBTn = document.querySelectorAll('.material-symbols-outlined');
const trash = document.querySelectorAll('.fa-trash-can');
const checkbox = document.querySelectorAll('.checkbox');
const strike = document.querySelectorAll('label');
const complexFunctionality = () => {
  for (let i = 0; i < editAble.length; i += 1) {
    editAble[i].addEventListener('mouseover', () => {
      dragBTn[i].classList.add('hidden');
      trash[i].classList.remove('hidden');
    });

    editAble[i].addEventListener('mouseout', () => {
      dragBTn[i].classList.remove('hidden');
      trash[i].classList.add('hidden');
    });

    // trash[i].addEventListener('click', remove);

    trash[i].addEventListener('click', () => {
      dataBase.splice(i, 1);
      localStorage.setItem('dataBase', JSON.stringify(dataBase));
      window.location.reload();
    });

    checkbox[i].addEventListener('input', () => {
      if (dataBase[i].check === false) {
        dataBase[i].check = true;
        strike[i].classList.add('strike');
        localStorage.setItem('dataBase', JSON.stringify(dataBase));
      } else if (dataBase[i].check === true) {
        dataBase[i].check = false;
        strike[i].classList.remove('strike');
        localStorage.setItem('dataBase', JSON.stringify(dataBase));
      }
    });

    strike[i].addEventListener('input', () => {
      dataBase[i].task = strike[i].innerText;
      localStorage.setItem('dataBase', JSON.stringify(dataBase));
    });
  }
};

complexFunctionality();

const clearBtn = document.getElementById('clearAll');
clearBtn.addEventListener('click', _status_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
const refresh = document.querySelector('.fa-rotate');
refresh.addEventListener('click', () => {
  window.location.reload();
});
// export default dataBase;

})();

/******/ })()
;
//# sourceMappingURL=bundle30b4722411350aa4ad2e.js.map