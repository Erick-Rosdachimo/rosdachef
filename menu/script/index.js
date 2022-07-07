"use strict";
var pratos = [
    {
        nome: 'Macaron - R$15,00',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora placeat ab beatae neque, facilis impedit',
        img: 'assets-menu/macaron.jpg'
    },
    {
        nome: 'Sorvete de pistache - R$15,00',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora placeat ab beatae neque, facilis impedit',
        img: 'assets-menu/ice-cream.jpg'
    },
    {
        nome: 'Waffles - R$15,00',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora placeat ab beatae neque, facilis impedit',
        img: 'assets-menu/waffles.jpg'
    },
    {
        nome: 'Pudim - R$15,00',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora placeat ab beatae neque, facilis impedit',
        img: 'assets-menu/pudim.jpg'
    },
    {
        nome: 'Salada de frutas - R$15,00',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora placeat ab beatae neque, facilis impedit',
        img: 'assets-menu/salada-frutas.jpg'
    },
    {
        nome: 'Petit Gateau - R$15,00',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora placeat ab beatae neque, facilis impedit',
        img: 'assets-menu/petit-gateau.jpg'
    },
    {
        nome: 'Donnuts - R$15,00',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora placeat ab beatae neque, facilis impedit',
        img: 'assets-menu/donnuts.jpg'
    },
    {
        nome: 'Banana split - R$15,00',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora placeat ab beatae neque, facilis impedit',
        img: 'assets-menu/banana-split.jpg'
    },
    {
        nome: 'Milkshake de frutas - R$15,00',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora placeat ab beatae neque, facilis impedit',
        img: 'assets-menu/milkshake-frutas.jpg'
    }
];
var boxAdd = 0;
var boxVisiveis = 0;
var pratosUsados = 0;
function adicionar() {
    var contMargin = document.querySelectorAll('.sobremesas .container-margin');
    var contAtual = contMargin[boxVisiveis + 1];
    var divisorImg = document.querySelectorAll('.sobremesas .divisor-img');
    var divisorAtual = divisorImg[boxVisiveis];
    if (boxVisiveis == boxAdd) {
        document.getElementById('container-sobre').innerHTML =
            document.getElementById('container-sobre').innerHTML +
                "<img\n       src=\"../assets/images/divisor.png\"\n       alt=\"\"\n      class=\"divisor-icon divisor-img\"\n     />\n    <div class=\"container-margin \">\n    <div class=\"box-pratos\">\n      <div class=\"prato\">\n        <img src=\"".concat(pratos[pratosUsados].img, "\" alt=\"\" />\n        <span>\n          <p class=\"nome\">").concat(pratos[pratosUsados].nome, "</p>\n          <p class=\"desc\">").concat(pratos[pratosUsados].desc, "\n          </p>\n        </span>\n      </div>\n      <span class=\"regua\"></span>\n      <div class=\"prato\">\n      <img src=\"").concat(pratos[pratosUsados + 1].img, "\" alt=\"\" />\n      <span>\n        <p class=\"nome\">").concat(pratos[pratosUsados + 1].nome, "</p>\n        <p class=\"desc\">").concat(pratos[pratosUsados + 1].desc, "\n        </p>\n      </span>\n    </div>\n      <span class=\"regua\"></span>\n      <div class=\"prato\">\n      <img src=\"").concat(pratos[pratosUsados + 2].img, "\" alt=\"\" />\n      <span>\n        <p class=\"nome\">").concat(pratos[pratosUsados + 2].nome, "</p>\n        <p class=\"desc\">").concat(pratos[pratosUsados + 2].desc, "\n        </p>\n      </span>\n    </div>\n      <span class=\"regua\"></span>\n    </div>\n    <div class=\"carrossel-cardapio\">\n      <div class=\"box-carrossel\">\n        <img src=\"").concat(pratos[pratosUsados].img, "\" alt=\"\"/>\n        <img src=\"").concat(pratos[pratosUsados + 1].img, "\" alt=\"\"/>\n        <img src=\"").concat(pratos[pratosUsados + 2].img, "\" alt=\"\"/>\n        <img src=\"").concat(pratos[pratosUsados].img, "\" alt=\"\"/>\n      </div>\n    </div>\n  </div>");
        boxAdd = boxAdd + 1;
        pratosUsados = pratosUsados + 3;
    }
    else {
        divisorAtual.style.display = 'block';
        contAtual.style.display = 'flex';
    }
    boxVisiveis = boxVisiveis + 1;
    ativarBtn();
}
function ativarBtn() {
    var quantPratos = pratos.length / 3;
    var verMenos = document.getElementById('ver-menos');
    var verMais = document.getElementById('ver-mais');
    if (boxVisiveis == quantPratos) {
        verMais.classList.add('sumir');
    }
    if (boxVisiveis >= 1) {
        verMenos.classList.remove('sumir');
    }
    if (boxVisiveis == 0) {
        verMenos.classList.add('sumir');
    }
    if (boxVisiveis < quantPratos) {
        verMais.classList.remove('sumir');
    }
}
function retirar() {
    var contMargin = document.querySelectorAll('.sobremesas .container-margin');
    var contAtual = contMargin[boxVisiveis];
    var divisorImg = document.querySelectorAll('.sobremesas .divisor-img');
    var divisorAtual = divisorImg[boxVisiveis - 1];
    divisorAtual.style.display = 'none';
    contAtual.style.display = 'none';
    boxVisiveis = boxVisiveis - 1;
    ativarBtn();
}
