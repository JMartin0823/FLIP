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

/***/ "./app/components/about/about.ts":
/*!***************************************!*\
  !*** ./app/components/about/about.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Attribute\": () => (/* binding */ Attribute),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Attribute;\n(function (Attribute) {\n    Attribute[\"name\"] = \"name\";\n    Attribute[\"description\"] = \"description\";\n})(Attribute || (Attribute = {}));\nclass About extends HTMLElement {\n    static get observedAttributes() {\n        const attrs = {\n            name: null,\n            description: null,\n        };\n        return Object.keys(attrs);\n    }\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    attributeChangedCallback(propName, _, newValue) {\n        switch (propName) {\n            default:\n                this[propName] = newValue;\n                break;\n        }\n        this.render();\n    }\n    render() {\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = `\n                <link rel=\"stylesheet\" href=\"./components/about/about.css\">\n                <section>\n                <h3>${this.name}</h3>\n                <p>${this.description}<span>\n                </section>\n                `;\n        }\n    }\n}\ncustomElements.define(\"my-about\", About);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (About);\n\n\n//# sourceURL=webpack://flip/./app/components/about/about.ts?");

    /***/ }),

    /***/ "./app/components/bottombar/bottombar.ts":
    /*!***********************************************!*\
      !*** ./app/components/bottombar/bottombar.ts ***!
      \***********************************************/
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Bottombar extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = `\n                <link rel=\"stylesheet\" href=\"./components/bottombar/bottombar.css\">\n                <section>\n            <button class=\"b2\"><svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon icon-tabler icon-tabler-home\" width=\"30\" height=\"30\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n            <path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path>\n            <path d=\"M5 12l-2 0l9 -9l9 9l-2 0\"></path>\n            <path d=\"M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7\"></path>\n            <path d=\"M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6\"></path>\n         </svg></button>\n            <button class=\"b3\"><svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon icon-tabler icon-tabler-hash\" width=\"30\" height=\"30\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n            <path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path>\n            <path d=\"M5 9l14 0\"></path>\n            <path d=\"M5 15l14 0\"></path>\n            <path d=\"M11 4l-4 16\"></path>\n            <path d=\"M17 4l-4 16\"></path>\n         </svg></button>\n            <button class=\"b4\"><svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon icon-tabler icon-tabler-user\" width=\"30\" height=\"30\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n            <path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path>\n            <path d=\"M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0\"></path>\n            <path d=\"M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2\"></path>\n         </svg></button>\n         <button class=\"b1\"><svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon icon-tabler icon-tabler-dots\" width=\"30\" height=\"30\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n            <path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path>\n            <path d=\"M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\"></path>\n            <path d=\"M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\"></path>\n            <path d=\"M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\"></path>\n         </svg></button>\n            </section>\n                `;\n        }\n    }\n}\ncustomElements.define(\"my-bottom\", Bottombar);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Bottombar);\n\n\n//# sourceURL=webpack://flip/./app/components/bottombar/bottombar.ts?");

    /***/ }),

    /***/ "./app/components/card/card.ts":
    /*!*************************************!*\
      !*** ./app/components/card/card.ts ***!
      \*************************************/
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Attribut\": () => (/* binding */ Attribut),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Attribut;\n(function (Attribut) {\n    Attribut[\"name\"] = \"name\";\n    Attribut[\"username\"] = \"username\";\n    Attribut[\"profile\"] = \"profile\";\n    Attribut[\"image\"] = \"image\";\n    Attribut[\"image2\"] = \"image2\";\n    Attribut[\"image3\"] = \"image3\";\n    Attribut[\"image4\"] = \"image4\";\n    Attribut[\"date\"] = \"date\";\n    Attribut[\"count\"] = \"count\";\n})(Attribut || (Attribut = {}));\nclass Card extends HTMLElement {\n    static get observedAttributes() {\n        const attrs = {\n            name: null,\n            username: null,\n            profile: null,\n            image: null,\n            image2: null,\n            image3: null,\n            image4: null,\n            date: null,\n            count: null,\n        };\n        return Object.keys(attrs);\n    }\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n        // this.onButtonClicked = this.onButtonClicked.bind(this);\n    }\n    connectedCallback() {\n        this.render();\n    }\n    attributeChangedCallback(propName, _, newValue) {\n        switch (propName) {\n            case Attribut.count:\n                this.count = newValue ? Number(newValue) : undefined;\n                break;\n            default:\n                this[propName] = newValue;\n                break;\n        }\n        this.render();\n    }\n    // mount(){\n    //     this.render();\n    //     this.addEventListeners();\n    // }\n    // addEventListeners(){\n    //     this.shadowRoot.querySelector(\"button\")\n    //     .addEventListener(\"click\", this.onButtonClicked);\n    // }\n    // onButtonClicked(){\n    //     const Value = Number(this.getAttribute(\"count\")) || 0;\n    //     this.setAttribute(\"count\", Value + 1);\n    // }\n    render() {\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = `\n                <link rel=\"stylesheet\" href=\"./components/card/card.css\">\n                <section class=\"all\">\n            <section>\n              <section class=\"top\">\n             \n                <img class=\"pp\" src=\"${this.profile}\" alt=\"\" height =\"60\" width=\"60\">\n               \n                <h4>${this.name}</h4><h6> ${this.username}</h6> <p>${this.date}</p>\n              \n            \n                <section >\n                 \n                </section>\n\n              </section>\n              <section class=\"tweet-img-wrap\">\n                <img src=\"${this.image}\" alt=\"\" class=\"tweet-img\">\n              </section>\n              <label class=\"pepe\">\n              <button><img src=\"${this.image2}\" height =\"30\" width=\"30\"</button>\n                <button><img src=\"${this.image3}\" height =\"30\" width=\"30\"</button>\n                <p>${this.count || 0}</p>\n                <button><img src=\"${this.image4}\" height =\"30\" width=\"30\"</button>\n              </label>\n              </section>\n                `;\n        }\n    }\n}\ncustomElements.define(\"my-card\", Card);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);\n\n\n//# sourceURL=webpack://flip/./app/components/card/card.ts?");

    /***/ }),

    /***/ "./app/components/index.ts":
    /*!*********************************!*\
      !*** ./app/components/index.ts ***!
      \*********************************/
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"About\": () => (/* reexport safe */ _about_about__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   \"Bottombar\": () => (/* reexport safe */ _bottombar_bottombar__WEBPACK_IMPORTED_MODULE_4__[\"default\"]),\n/* harmony export */   \"Card\": () => (/* reexport safe */ _card_card__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n/* harmony export */   \"Searchbar\": () => (/* reexport safe */ _searchbar_searchbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   \"SideB\": () => (/* reexport safe */ _sidebar_sidebar__WEBPACK_IMPORTED_MODULE_3__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _about_about__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about/about */ \"./app/components/about/about.ts\");\n/* harmony import */ var _searchbar_searchbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./searchbar/searchbar */ \"./app/components/searchbar/searchbar.ts\");\n/* harmony import */ var _card_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card/card */ \"./app/components/card/card.ts\");\n/* harmony import */ var _sidebar_sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar/sidebar */ \"./app/components/sidebar/sidebar.ts\");\n/* harmony import */ var _bottombar_bottombar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bottombar/bottombar */ \"./app/components/bottombar/bottombar.ts\");\n\n\n\n\n\n\n\n//# sourceURL=webpack://flip/./app/components/index.ts?");

    /***/ }),

    /***/ "./app/components/searchbar/searchbar.ts":
    /*!***********************************************!*\
      !*** ./app/components/searchbar/searchbar.ts ***!
      \***********************************************/
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Searchbar extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = `\n                <link rel=\"stylesheet\" href=\"./components/searchbar/searchbar.css\">\n                <section class=\"container\">\n            <form action=\"\" class=\"searchbar\"><input type=\"text\" placeholder=\"search anything\" class=\"bar\">\n            <button class=\"buttonsearch\"><svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon icon-tabler icon-tabler-search\" viewBox=\"0 0 24 24\" stroke-width=\"3\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n            <path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path>\n            <path d=\"M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0\"></path>\n            <path d=\"M21 21l-6 -6\"></path>\n         </svg></button>\n            </form>\n            </section>\n                `;\n        }\n    }\n}\ncustomElements.define(\"my-search\", Searchbar);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Searchbar);\n\n\n//# sourceURL=webpack://flip/./app/components/searchbar/searchbar.ts?");

    /***/ }),

    /***/ "./app/components/sidebar/sidebar.ts":
    /*!*******************************************!*\
      !*** ./app/components/sidebar/sidebar.ts ***!
      \*******************************************/
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Attribu\": () => (/* binding */ Attribu),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Attribu;\n(function (Attribu) {\n    Attribu[\"name\"] = \"name\";\n})(Attribu || (Attribu = {}));\nclass Sidebar extends HTMLElement {\n    static get observedAttributes() {\n        const attrs = {\n            name: null,\n        };\n        return Object.keys(attrs);\n    }\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    attributeChangedCallback(propName, _, newValue) {\n        switch (propName) {\n            default:\n                this[propName] = newValue;\n                break;\n        }\n        this.render();\n    }\n    render() {\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = `\n                <link rel=\"stylesheet\" href=\"./components/sidebar/sidebar.css\">\n                <section>\n                <Button>${this.name}</Button>\n                </section>\n                `;\n        }\n    }\n}\ncustomElements.define(\"my-sidebar\", Sidebar);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidebar);\n\n\n//# sourceURL=webpack://flip/./app/components/sidebar/sidebar.ts?");

    /***/ }),

    /***/ "./app/data.ts":
    /*!*********************!*\
      !*** ./app/data.ts ***!
      \*********************/
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst dataCard = [\n    {\n        name: \"Dagger\",\n        username: \"@daggeraiart\",\n        profile: \"https://pbs.twimg.com/profile_images/1637834032963805185/hbdT_y9m_400x400.jpg\",\n        image: \"https://pbs.twimg.com/media/FrxSGYXagAAnQWs?format=jpg&name=small\",\n        image2: \"https://img.icons8.com/windows/512/hearts.png\",\n        image3: \"https://cdn-icons-png.flaticon.com/512/1388/1388895.png\",\n        image4: \"https://cdn-icons-png.flaticon.com/512/709/709612.png\",\n        date: \"March 24\",\n    },\n    {\n        name: \"Chiakiro\",\n        username: \"@ChiakiroArt\",\n        profile: \"https://pbs.twimg.com/profile_images/1614543010397560833/IXfL6OpK_400x400.jpg\",\n        image: \"https://pbs.twimg.com/media/Frry33kWIAgYf2A?format=jpg&name=medium\",\n        image2: \"https://img.icons8.com/windows/512/hearts.png\",\n        image3: \"https://cdn-icons-png.flaticon.com/512/1388/1388895.png\",\n        image4: \"https://cdn-icons-png.flaticon.com/512/709/709612.png\",\n        date: \"March 23\",\n    },\n    {\n        name: \"JAM Star\",\n        username: \"@Jam_Star135\",\n        profile: \"https://pbs.twimg.com/profile_images/1605687328436932608/c8etiPUY_400x400.jpg\",\n        image: \"https://pbs.twimg.com/media/FrweObkaYAAjBU-?format=jpg&name=large\",\n        image2: \"https://img.icons8.com/windows/512/hearts.png\",\n        image3: \"https://cdn-icons-png.flaticon.com/512/1388/1388895.png\",\n        image4: \"https://cdn-icons-png.flaticon.com/512/709/709612.png\",\n        date: \"March 23\",\n    },\n    {\n        name: \"Star Noble\",\n        username: \"@StarNoble17\",\n        profile: \"https://pbs.twimg.com/profile_images/1629443491905282048/C2WWk0J3_400x400.jpg\",\n        image: \"https://pbs.twimg.com/media/FrmxAC1X0AEJWca?format=jpg&name=large\",\n        image2: \"https://img.icons8.com/windows/512/hearts.png\",\n        image3: \"https://cdn-icons-png.flaticon.com/512/1388/1388895.png\",\n        image4: \"https://cdn-icons-png.flaticon.com/512/709/709612.png\",\n        date: \"March 22\",\n    },\n    {\n        name: \"loran\",\n        username: \"@lorddumbb\",\n        profile: \"https://pbs.twimg.com/profile_images/1604867499539025921/dDiVxicH_400x400.jpg\",\n        image: \"https://pbs.twimg.com/media/FmQzkYoXkAA2HOq?format=jpg&name=large\",\n        image2: \"https://img.icons8.com/windows/512/hearts.png\",\n        image3: \"https://cdn-icons-png.flaticon.com/512/1388/1388895.png\",\n        image4: \"https://cdn-icons-png.flaticon.com/512/709/709612.png\",\n        date: \"March 22\",\n    },\n];\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dataCard);\n\n\n//# sourceURL=webpack://flip/./app/data.ts?");

    /***/ }),

    /***/ "./app/data2.ts":
    /*!**********************!*\
      !*** ./app/data2.ts ***!
      \**********************/
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst dataSidebar = [\n    {\n        name: \"Explore\",\n    },\n    {\n        name: \"Notifications\",\n    },\n    {\n        name: \"Messages\",\n    },\n    {\n        name: \"Bookmarks\",\n    },\n    {\n        name: \"Profile\",\n    },\n    {\n        name: \"More\",\n    },\n];\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dataSidebar);\n\n\n//# sourceURL=webpack://flip/./app/data2.ts?");

    /***/ }),

    /***/ "./app/data3.ts":
    /*!**********************!*\
      !*** ./app/data3.ts ***!
      \**********************/
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst dataAbout = [\n    {\n        name: \"Cali\",\n        description: \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae iaculis ipsum. Sed ac tellus a ipsum iaculis lobortis aliquet \",\n    },\n    {\n        name: \"Pitbull\",\n        description: \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae iaculis ipsum. Sed ac tellus a ipsum iaculis lobortis aliquet \",\n    },\n    {\n        name: \"Real Madrid C.F.\",\n        description: \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae iaculis ipsum. Sed ac tellus a ipsum iaculis lobortis aliquet \",\n    },\n    {\n        name: \"Washington D.C\",\n        description: \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae iaculis ipsum. Sed ac tellus a ipsum iaculis lobortis aliquet \",\n    },\n];\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dataAbout);\n\n\n//# sourceURL=webpack://flip/./app/data3.ts?");

    /***/ }),

    /***/ "./app/index.ts":
    /*!**********************!*\
      !*** ./app/index.ts ***!
      \**********************/
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./app/data.ts\");\n/* harmony import */ var _data2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data2 */ \"./app/data2.ts\");\n/* harmony import */ var _data3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data3 */ \"./app/data3.ts\");\n/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/index */ \"./app/components/index.ts\");\n/* harmony import */ var _components_about_about__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/about/about */ \"./app/components/about/about.ts\");\n/* harmony import */ var _components_card_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/card/card */ \"./app/components/card/card.ts\");\n/* harmony import */ var _components_sidebar_sidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/sidebar/sidebar */ \"./app/components/sidebar/sidebar.ts\");\n\n\n\n\n\n\n\nclass AppContainer extends HTMLElement {\n    constructor() {\n        super();\n        this.AboutS = [];\n        this.CardS = [];\n        this.SideB = [];\n        this.attachShadow({ mode: \"open\" });\n        _data3__WEBPACK_IMPORTED_MODULE_2__[\"default\"].forEach((user) => {\n            const aboutCard = this.ownerDocument.createElement(\"my-about\");\n            aboutCard.setAttribute(_components_about_about__WEBPACK_IMPORTED_MODULE_4__.Attribute.name, user.name);\n            aboutCard.setAttribute(_components_about_about__WEBPACK_IMPORTED_MODULE_4__.Attribute.description, user.description);\n            this.AboutS.push(aboutCard);\n        });\n        _data__WEBPACK_IMPORTED_MODULE_0__[\"default\"].forEach((user) => {\n            const sectionCard = this.ownerDocument.createElement(\"my-card\");\n            sectionCard.setAttribute(_components_card_card__WEBPACK_IMPORTED_MODULE_5__.Attribut.name, user.name);\n            sectionCard.setAttribute(_components_card_card__WEBPACK_IMPORTED_MODULE_5__.Attribut.username, user.username);\n            sectionCard.setAttribute(_components_card_card__WEBPACK_IMPORTED_MODULE_5__.Attribut.profile, user.profile);\n            sectionCard.setAttribute(_components_card_card__WEBPACK_IMPORTED_MODULE_5__.Attribut.image, user.image);\n            sectionCard.setAttribute(_components_card_card__WEBPACK_IMPORTED_MODULE_5__.Attribut.image2, user.image2);\n            sectionCard.setAttribute(_components_card_card__WEBPACK_IMPORTED_MODULE_5__.Attribut.image3, user.image3);\n            sectionCard.setAttribute(_components_card_card__WEBPACK_IMPORTED_MODULE_5__.Attribut.image4, user.image4);\n            sectionCard.setAttribute(_components_card_card__WEBPACK_IMPORTED_MODULE_5__.Attribut.date, user.date);\n            this.CardS.push(sectionCard);\n        });\n        _data2__WEBPACK_IMPORTED_MODULE_1__[\"default\"].forEach((user) => {\n            const sectionBar = this.ownerDocument.createElement(\"my-sidebar\");\n            sectionBar.setAttribute(_components_sidebar_sidebar__WEBPACK_IMPORTED_MODULE_6__.Attribu.name, user.name);\n            this.SideB.push(sectionBar);\n        });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a, _b, _c;\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML += `<link rel=\"stylesheet\" href=\"./index.css\">`;\n            this.shadowRoot.innerHTML += `<h1>About</h1>`;\n            this.shadowRoot.innerHTML += `<my-search></my-search>`;\n            this.shadowRoot.innerHTML += `<my-bottom></my-bottom>`;\n            this.shadowRoot.innerHTML += `<a href=\"index.html\"><img src=\"./fliplogo.png\" alt=\"\"></a>`;\n            this.shadowRoot.innerHTML += `<button>Post</button>`;\n            const aboutSection = this.ownerDocument.createElement(\"section\");\n            aboutSection.className = \"aboutSection\";\n            this.AboutS.forEach((ab) => {\n                aboutSection.appendChild(ab);\n            });\n            (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(aboutSection);\n        }\n        const sectionCard = this.ownerDocument.createElement(\"section\");\n        sectionCard.className = \"cardSection\";\n        this.CardS.forEach((ab) => {\n            sectionCard.appendChild(ab);\n        });\n        (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.appendChild(sectionCard);\n        const sectionBar = this.ownerDocument.createElement(\"section\");\n        sectionBar.className = \"BarSection\";\n        this.SideB.forEach((ab) => {\n            sectionBar.appendChild(ab);\n        });\n        (_c = this.shadowRoot) === null || _c === void 0 ? void 0 : _c.appendChild(sectionBar);\n    }\n}\ncustomElements.define(\"app-container\", AppContainer);\n\n\n//# sourceURL=webpack://flip/./app/index.ts?");

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
    /******/ 	var __webpack_exports__ = __webpack_require__("./app/index.ts");
    /******/
    /******/ })()
    ;