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

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (() => {

eval("\nvar pratos = [\n    {\n        nome: 'Macaron - R$15,00',\n        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora placeat ab beatae neque, facilis impedit',\n        img: 'assets-menu/macaron.jpg'\n    },\n    {\n        nome: 'Sorvete de pistache - R$15,00',\n        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora placeat ab beatae neque, facilis impedit',\n        img: 'assets-menu/ice-cream.jpg'\n    },\n    {\n        nome: 'Waffles - R$15,00',\n        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora placeat ab beatae neque, facilis impedit',\n        img: 'assets-menu/waffles.jpg'\n    },\n    {\n        nome: 'Pudim - R$15,00',\n        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora placeat ab beatae neque, facilis impedit',\n        img: 'assets-menu/pudim.jpg'\n    },\n    {\n        nome: 'Salada de frutas - R$15,00',\n        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora placeat ab beatae neque, facilis impedit',\n        img: 'assets-menu/salada-frutas.jpg'\n    },\n    {\n        nome: 'Petit Gateau - R$15,00',\n        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora placeat ab beatae neque, facilis impedit',\n        img: 'assets-menu/petit-gateau.jpg'\n    },\n    {\n        nome: 'Donnuts - R$15,00',\n        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora placeat ab beatae neque, facilis impedit',\n        img: 'assets-menu/donnuts.jpg'\n    },\n    {\n        nome: 'Banana split - R$15,00',\n        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora placeat ab beatae neque, facilis impedit',\n        img: 'assets-menu/banana-split.jpg'\n    },\n    {\n        nome: 'Milkshake de frutas - R$15,00',\n        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora placeat ab beatae neque, facilis impedit',\n        img: 'assets-menu/milkshake-frutas.jpg'\n    }\n];\nvar boxAdd = 0;\nvar boxVisiveis = 0;\nvar pratosUsados = 0;\nvar imgCarrossel = 0;\nfunction adicionar() {\n    boxAdd = boxAdd + 1;\n    boxVisiveis = boxVisiveis + 1;\n    ativarBtn();\n    document.getElementById('container-sobre').innerHTML =\n        document.getElementById('container-sobre').innerHTML +\n            `<div>\n      <img\n       src=\"../assets/images/divisor.png\"\n       alt=\"\"\n      class=\"divisor-icon\"\n     />\n    </div>\n    <div class=\"container-margin teste\">\n    <div class=\"box-pratos\">\n      <div class=\"prato\">\n        <img src=\"${pratos[pratosUsados].img}\" alt=\"\" />\n        <span>\n          <p class=\"nome\">${pratos[pratosUsados].nome}</p>\n          <p class=\"desc\">${pratos[pratosUsados].desc}\n          </p>\n        </span>\n      </div>\n      <span class=\"regua\"></span>\n      <div class=\"prato\">\n      <img src=\"${pratos[pratosUsados + 1].img}\" alt=\"\" />\n      <span>\n        <p class=\"nome\">${pratos[pratosUsados + 1].nome}</p>\n        <p class=\"desc\">${pratos[pratosUsados + 1].desc}\n        </p>\n      </span>\n    </div>\n      <span class=\"regua\"></span>\n      <div class=\"prato\">\n      <img src=\"${pratos[pratosUsados + 2].img}\" alt=\"\" />\n      <span>\n        <p class=\"nome\">${pratos[pratosUsados + 2].nome}</p>\n        <p class=\"desc\">${pratos[pratosUsados + 2].desc}\n        </p>\n      </span>\n    </div>\n      <span class=\"regua\"></span>\n    </div>\n    <div class=\"carrossel-cardapio\">\n      <img\n        src=\"assets-menu/foto-especialidades-carrossel-1.jpg\"\n        alt=\"\"\n      />\n    </div>\n  </div>`;\n    pratosUsados = pratosUsados + 3;\n}\nfunction ativarBtn() {\n    var quantPratos = pratos.length / 3;\n    const verMenos = document.getElementById('ver-menos');\n    const verMais = document.getElementById('ver-mais');\n    if (boxVisiveis == quantPratos) {\n        verMais.classList.add('sumir');\n    }\n    if (boxVisiveis >= 1) {\n        verMenos.classList.remove('sumir');\n    }\n    if (boxVisiveis == 0) {\n        verMenos.classList.add('sumir');\n    }\n    if (boxVisiveis < quantPratos) {\n        verMais.classList.remove('sumir');\n    }\n}\nfunction retirar() {\n    boxVisiveis = boxVisiveis - 1;\n    for (var i = boxAdd; i > 0; i = i - 1) {\n        var contMargin = document.querySelectorAll('.sobremesas .container-margin')[i];\n        if (contMargin.style.display = 'none') {\n        }\n        else {\n            contMargin.style.display = 'none';\n            boxVisiveis = boxVisiveis - 1;\n            i = 0;\n        }\n    }\n    ativarBtn();\n}\n\n\n//# sourceURL=webpack://rosdachef/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"]();
/******/ 	
/******/ })()
;