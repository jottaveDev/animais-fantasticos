/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/accordion.js":
/*!*********************************!*\
  !*** ./js/modules/accordion.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAccordion)\n/* harmony export */ });\nfunction initAccordion() {\n  const accordionList = document.querySelectorAll(\n    '[data-anime=\"accordion\"] dt'\n  );\n  const activeClass = \"ativo\";\n\n  function activeAccordion() {\n    this.classList.toggle(activeClass);\n    this.nextElementSibling.classList.toggle(activeClass);\n  }\n\n  if (accordionList.length) {\n    accordionList[0].classList.add(activeClass);\n    accordionList[0].nextElementSibling.classList.add(activeClass);\n\n    accordionList.forEach((item) => {\n      item.addEventListener(\"click\", activeAccordion);\n    });\n  }\n}\n\n\n//# sourceURL=webpack://z-projeto-final/./js/modules/accordion.js?");

/***/ }),

/***/ "./js/modules/anima-numeros.js":
/*!*************************************!*\
  !*** ./js/modules/anima-numeros.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimaNumeros)\n/* harmony export */ });\nfunction initAnimaNumeros() {\n  function animaNumeros() {\n    const numeros = document.querySelectorAll(\"[data-numero]\");\n\n    numeros.forEach((numero) => {\n      const total = +numero.innerText;\n      const incremento = Math.floor(total / 100);\n\n      let start = 0;\n      const timer = setInterval(() => {\n        start = start + incremento;\n        numero.innerText = start;\n        if (start > total) {\n          numero.innerText = total;\n          clearInterval(timer);\n        }\n      }, 25 * Math.random());\n    });\n  }\n\n  function handleMutation(mutation) {\n    if (mutation[0].target.classList.contains(\"ativo\")) {\n      observer.disconnect();\n      animaNumeros();\n    }\n  }\n\n  const observerTarget = document.querySelector(\".numeros\");\n  const observer = new MutationObserver(handleMutation);\n\n  observer.observe(observerTarget, { attributes: true });\n}\n\n\n//# sourceURL=webpack://z-projeto-final/./js/modules/anima-numeros.js?");

/***/ }),

/***/ "./js/modules/animais-fetch.js":
/*!*************************************!*\
  !*** ./js/modules/animais-fetch.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimaisFetch)\n/* harmony export */ });\n/* harmony import */ var _anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anima-numeros.js */ \"./js/modules/anima-numeros.js\");\n\n\nfunction initAnimaisFetch() {\n  function createAnimal(animal) {\n    const div = document.createElement(\"div\");\n    div.classList.add(\"numero-animal\");\n\n    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;\n    return div;\n  }\n\n  async function fetchAnimais(url) {\n    try {\n      const animaisResponse = await fetch(url);\n      const animaisJSON = await animaisResponse.json();\n      const numerosGrid = document.querySelector(\".numeros-grid\");\n      animaisJSON.forEach((animal) => {\n        const divAnimal = createAnimal(animal);\n        numerosGrid.appendChild(divAnimal);\n      });\n      (0,_anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    } catch (erro) {\n      console.log(erro);\n    }\n  }\n  fetchAnimais(\"./animaisapi.json\");\n}\n\n\n//# sourceURL=webpack://z-projeto-final/./js/modules/animais-fetch.js?");

/***/ }),

/***/ "./js/modules/dropdown-menu.js":
/*!*************************************!*\
  !*** ./js/modules/dropdown-menu.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initDropdownMenu)\n/* harmony export */ });\n/* harmony import */ var _outsideclick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideclick.js */ \"./js/modules/outsideclick.js\");\n\r\n\r\nfunction initDropdownMenu() {\r\n  function handleClick(event) {\r\n    event.preventDefault();\r\n    this.classList.add(\"active\");\r\n    (0,_outsideclick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, [\"click\", \"touchstart\"], () => {\r\n      this.classList.remove(\"active\");\r\n    });\r\n  }\r\n\r\n  const dropdownMenus = document.querySelectorAll(\"[data-dropdown]\");\r\n\r\n  dropdownMenus.forEach((menu) => {\r\n    [\"click\", \"touchstart\"].forEach((userEvent) => {\r\n      menu.addEventListener(userEvent, handleClick);\r\n    });\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://z-projeto-final/./js/modules/dropdown-menu.js?");

/***/ }),

/***/ "./js/modules/fetch-bitcoin.js":
/*!*************************************!*\
  !*** ./js/modules/fetch-bitcoin.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchBitcoin)\n/* harmony export */ });\nfunction initFetchBitcoin() {\n  fetch(\"https://blockchain.info/ticker\")\n    .then((response) => response.json())\n    .then((bitcoin) => {\n      const btcPreco = document.querySelector(\".btc-preco\");\n      btcPreco.innerText = (100 / bitcoin.BRL.buy).toFixed(4);\n    })\n    .catch((erro) => console.log(Error(erro)));\n}\n\n\n//# sourceURL=webpack://z-projeto-final/./js/modules/fetch-bitcoin.js?");

/***/ }),

/***/ "./js/modules/funcionamento.js":
/*!*************************************!*\
  !*** ./js/modules/funcionamento.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFuncionamento)\n/* harmony export */ });\nfunction initFuncionamento() {\n  const funcionamento = document.querySelector(\"[data-semana]\");\n  const diasSemana = funcionamento.dataset.semana.split(\",\").map(Number);\n  const horarioSemana = funcionamento.dataset.horario.split(\",\").map(Number);\n\n  const dataAgora = new Date();\n  const diaAgora = dataAgora.getDay();\n  const horarioAgora = dataAgora.getHours();\n\n  const semanaTrue = diasSemana.indexOf(diaAgora) !== -1;\n  const horarioTrue =\n    horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1];\n\n  if (semanaTrue && horarioTrue) {\n    funcionamento.classList.add(\"aberto\");\n  }\n}\n\n\n//# sourceURL=webpack://z-projeto-final/./js/modules/funcionamento.js?");

/***/ }),

/***/ "./js/modules/menu-mobile.js":
/*!***********************************!*\
  !*** ./js/modules/menu-mobile.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initMenuMobile)\n/* harmony export */ });\n/* harmony import */ var _outsideclick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideclick.js */ \"./js/modules/outsideclick.js\");\n\n\nfunction initMenuMobile() {\n  const menuButton = document.querySelector('[data-menu=\"button\"]');\n  const menuList = document.querySelector(\"#menu\");\n  const eventos = [\"click\", \"touchstart\"];\n\n  function openMenu() {\n    menuList.classList.add(\"active\");\n    menuButton.classList.add(\"active\");\n    (0,_outsideclick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(menuList, eventos, () => {\n      menuList.classList.remove(\"active\");\n      menuButton.classList.remove(\"active\");\n    });\n  }\n\n  if (menuButton) {\n    eventos.forEach((evento) => menuButton.addEventListener(evento, openMenu));\n  }\n}\n\n\n//# sourceURL=webpack://z-projeto-final/./js/modules/menu-mobile.js?");

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initModal)\n/* harmony export */ });\nfunction initModal() {\r\n  const botaoAbrir = document.querySelector('[data-modal=\"abrir\"]');\r\n  const botaoFechar = document.querySelector('[data-modal=\"fechar\"]');\r\n  const containerModal = document.querySelector('[data-modal=\"container\"]');\r\n\r\n  function toggleModal(event) {\r\n    event.preventDefault();\r\n    containerModal.classList.toggle(\"ativo\");\r\n  }\r\n\r\n  function cliqueForaModal(event) {\r\n    if (event.target === this) {\r\n      toggleModal(event);\r\n    }\r\n  }\r\n\r\n  if (botaoAbrir && botaoFechar && containerModal) {\r\n    botaoAbrir.addEventListener(\"click\", toggleModal);\r\n    botaoFechar.addEventListener(\"click\", toggleModal);\r\n    containerModal.addEventListener(\"click\", cliqueForaModal);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://z-projeto-final/./js/modules/modal.js?");

/***/ }),

/***/ "./js/modules/outsideclick.js":
/*!************************************!*\
  !*** ./js/modules/outsideclick.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outsideClick)\n/* harmony export */ });\nfunction outsideClick(element, events, callback) {\n  const html = document.documentElement;\n  const outside = \"data-outside\";\n\n  function handleOutsideClick(event) {\n    if (!element.contains(event.target)) {\n      element.removeAttribute(outside);\n      events.forEach((userEvent) => {\n        html.removeEventListener(userEvent, handleOutsideClick);\n      });\n      callback();\n    }\n  }\n\n  if (!element.hasAttribute(outside)) {\n    events.forEach((userEvent) => {\n      setTimeout(() => html.addEventListener(userEvent, handleOutsideClick));\n    });\n    element.setAttribute(outside, \"\");\n  }\n}\n\n\n//# sourceURL=webpack://z-projeto-final/./js/modules/outsideclick.js?");

/***/ }),

/***/ "./js/modules/scroll-animacao.js":
/*!***************************************!*\
  !*** ./js/modules/scroll-animacao.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimacaoScroll)\n/* harmony export */ });\nfunction initAnimacaoScroll() {\n  const sections = document.querySelectorAll('[data-anime=\"scroll\"]');\n  const windowMetade = window.innerHeight * 0.6;\n\n  function animaScroll() {\n    sections.forEach((section) => {\n      const sectionTop = section.getBoundingClientRect().top;\n      const isSectionVisible = sectionTop - windowMetade < 0;\n      if (isSectionVisible) {\n        section.classList.add(\"ativo\");\n      } else if (section.classList.contains(\"ativo\")) {\n        section.classList.remove(\"ativo\");\n      }\n    });\n  }\n\n  if (sections.length) {\n    animaScroll();\n\n    window.addEventListener(\"scroll\", animaScroll);\n  }\n}\n\n\n//# sourceURL=webpack://z-projeto-final/./js/modules/scroll-animacao.js?");

/***/ }),

/***/ "./js/modules/scroll-suave.js":
/*!************************************!*\
  !*** ./js/modules/scroll-suave.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ScrollSuave)\n/* harmony export */ });\nclass ScrollSuave {\n  constructor(links, options) {\n    this.linksInternos = document.querySelectorAll(links);\n    if (options === undefined) {\n      this.options = { behavior: \"smooth\", block: \"start\" };\n    } else {\n      this.options = options;\n    }\n    this.scrollToSection = this.scrollToSection.bind(this);\n  }\n\n  scrollToSection(event) {\n    event.preventDefault();\n    const href = event.currentTarget.getAttribute(\"href\");\n    const section = document.querySelector(href);\n    section.scrollIntoView(this.options);\n  }\n\n  addLinkEvent() {\n    this.linksInternos.forEach((link) => {\n      link.addEventListener(\"click\", this.scrollToSection);\n    });\n  }\n\n  init() {\n    if (this.linksInternos.length) {\n      this.addLinkEvent();\n    }\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack://z-projeto-final/./js/modules/scroll-suave.js?");

/***/ }),

/***/ "./js/modules/tabnav.js":
/*!******************************!*\
  !*** ./js/modules/tabnav.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTabNav)\n/* harmony export */ });\nfunction initTabNav() {\n  const tabMenu = document.querySelectorAll('[data-tab=\"menu\"] li');\n  const tabContent = document.querySelectorAll('[data-tab=\"content\"] section');\n\n  function activeTab(index) {\n    tabContent.forEach((section) => {\n      section.classList.remove(\"ativo\");\n    });\n    const direcao = tabContent[index].dataset.anime;\n    tabContent[index].classList.add(\"ativo\", direcao);\n  }\n\n  if (tabMenu.length && tabContent.length) {\n    tabContent[0].classList.add(\"ativo\");\n\n    tabMenu.forEach((itemMenu, index) => {\n      itemMenu.addEventListener(\"click\", () => {\n        activeTab(index);\n      });\n    });\n  }\n}\n\n\n//# sourceURL=webpack://z-projeto-final/./js/modules/tabnav.js?");

/***/ }),

/***/ "./js/modules/tooltip.js":
/*!*******************************!*\
  !*** ./js/modules/tooltip.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initToolTip)\n/* harmony export */ });\nfunction initToolTip() {\r\n  const tooltips = document.querySelectorAll(\"[data-tooltip]\");\r\n\r\n  const onMouseMove = {\r\n    handleEvent(event) {\r\n      this.tooltipBox.style.top = `${event.pageY + 20}px`;\r\n      this.tooltipBox.style.left = `${event.pageX + 20}px`;\r\n    },\r\n  };\r\n\r\n  const onMouseLeave = {\r\n    handleEvent() {\r\n      this.tooltipBox.remove();\r\n      this.element.removeEventListener(\"mouseleave\", onMouseLeave);\r\n      this.element.removeEventListener(\"mousemove\", onMouseMove);\r\n    },\r\n  };\r\n\r\n  function criarTooltipBox(element) {\r\n    const tooltipBox = document.createElement(\"div\");\r\n    const text = element.getAttribute(\"aria-label\");\r\n    tooltipBox.classList.add(\"tooltip\");\r\n    tooltipBox.innerText = text;\r\n    document.body.appendChild(tooltipBox);\r\n    return tooltipBox;\r\n  }\r\n\r\n  function onMouseOver() {\r\n    const tooltipBox = criarTooltipBox(this);\r\n\r\n    onMouseMove.tooltipBox = tooltipBox;\r\n    this.addEventListener(\"mousemove\", onMouseMove);\r\n    onMouseLeave.tooltipBox = tooltipBox;\r\n    onMouseLeave.element = this;\r\n    this.addEventListener(\"mouseleave\", onMouseLeave);\r\n  }\r\n\r\n  tooltips.forEach((item) => {\r\n    item.addEventListener(\"mouseover\", onMouseOver);\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://z-projeto-final/./js/modules/tooltip.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/scroll-suave.js */ \"./js/modules/scroll-suave.js\");\n/* harmony import */ var _modules_scroll_animacao_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/scroll-animacao.js */ \"./js/modules/scroll-animacao.js\");\n/* harmony import */ var _modules_accordion_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/accordion.js */ \"./js/modules/accordion.js\");\n/* harmony import */ var _modules_tabnav_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tabnav.js */ \"./js/modules/tabnav.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modal.js */ \"./js/modules/modal.js\");\n/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tooltip.js */ \"./js/modules/tooltip.js\");\n/* harmony import */ var _modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/dropdown-menu.js */ \"./js/modules/dropdown-menu.js\");\n/* harmony import */ var _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/menu-mobile.js */ \"./js/modules/menu-mobile.js\");\n/* harmony import */ var _modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/funcionamento.js */ \"./js/modules/funcionamento.js\");\n/* harmony import */ var _modules_animais_fetch_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/animais-fetch.js */ \"./js/modules/animais-fetch.js\");\n/* harmony import */ var _modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/fetch-bitcoin.js */ \"./js/modules/fetch-bitcoin.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nconst scrollSuave = new _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('[data-menu=\"suave\"] a[href^=\"#\"]');\nscrollSuave.init();\n(0,_modules_scroll_animacao_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_modules_accordion_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_modules_tabnav_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n(0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n(0,_modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n(0,_modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n(0,_modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n(0,_modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\n(0,_modules_animais_fetch_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\n(0,_modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"])();\n\n\n//# sourceURL=webpack://z-projeto-final/./js/script.js?");

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
/******/ 			// no module.id needed
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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;