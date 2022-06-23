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
]
var boxAdd = 0
var pratosUsados = 0
var imgCarrossel = 0
function adicionar() {
  const containerSobre = document.getElementById('container-sobre')

  // criando o separador
  const divisor = document.createElement('img')

  // --- editando o separador
  divisor.setAttribute('src', '../assets/images/divisor.png')
  divisor.classList.add('divisor-icon')

  // ------ adicionando o separador
  containerSobre.appendChild(divisor)

  // criando as bases
  const contMargin = document.createElement('div')
  const boxPratos = document.createElement('div')
  const boxG = document.createElement('div')

  // --- editando as bases
  contMargin.classList.add('container-margin')
  boxPratos.classList.add('box-pratos')
  boxG.classList.add('carrossel-cardapio')

  // ------- adicionando as bases
  containerSobre.appendChild(contMargin)
  contMargin.appendChild(boxPratos)
  contMargin.appendChild(boxG)

  // criando elementos para o prato
  const prato1 = document.createElement('div')
  const prato2 = document.createElement('div')
  const prato3 = document.createElement('div')
  const pratoImg1 = document.createElement('img')
  const pratoImg2 = document.createElement('img')
  const pratoImg3 = document.createElement('img')
  const pratoSpan1 = document.createElement('span')
  const pratoSpan2 = document.createElement('span')
  const pratoSpan3 = document.createElement('span')
  const pratoNome1 = document.createElement('p')
  const pratoNome2 = document.createElement('p')
  const pratoNome3 = document.createElement('p')
  const pratoDesc1 = document.createElement('p')
  const pratoDesc2 = document.createElement('p')
  const pratoDesc3 = document.createElement('p')

  // --- editando e adicionando elementos para o prato

  var spanRegua1 = document.createElement('span')
  spanRegua1.classList.add('regua')
  var spanRegua2 = document.createElement('span')
  spanRegua2.classList.add('regua')
  var spanRegua3 = document.createElement('span')
  spanRegua3.classList.add('regua')
  // prato 1
  pratoDesc1.textContent = pratos[pratosUsados].desc
  pratoDesc1.classList.add('desc')
  pratoNome1.textContent = pratos[pratosUsados].nome
  pratoNome1.classList.add('nome')
  pratoImg1.setAttribute('src', pratos[pratosUsados].img)

  prato1.classList.add('prato')

  prato1.appendChild(pratoImg1)
  pratoSpan1.appendChild(pratoNome1)
  pratoSpan1.appendChild(pratoDesc1)
  prato1.appendChild(pratoSpan1)

  boxPratos.appendChild(prato1)

  pratosUsados = pratosUsados + 1

  boxPratos.appendChild(spanRegua1)

  // prato 2
  pratoDesc2.textContent = pratos[pratosUsados].desc
  pratoDesc2.classList.add('desc')
  pratoNome2.textContent = pratos[pratosUsados].nome
  pratoNome2.classList.add('nome')
  pratoImg2.setAttribute('src', pratos[pratosUsados].img)
  prato2.classList.add('prato')

  pratoSpan2.appendChild(pratoNome2)
  pratoSpan2.appendChild(pratoDesc2)
  prato2.appendChild(pratoImg2)
  prato2.appendChild(pratoSpan2)

  boxPratos.appendChild(prato2)

  pratosUsados = pratosUsados + 1
  boxPratos.appendChild(spanRegua2)

  // prato 3
  pratoDesc3.textContent = pratos[pratosUsados].desc
  pratoDesc3.classList.add('desc')
  pratoNome3.textContent = pratos[pratosUsados].nome
  pratoNome3.classList.add('nome')
  pratoImg3.setAttribute('src', pratos[pratosUsados].img)
  prato3.classList.add('prato')

  pratoSpan3.appendChild(pratoNome3)
  pratoSpan3.appendChild(pratoDesc3)
  prato3.appendChild(pratoImg3)
  prato3.appendChild(pratoSpan3)

  boxPratos.appendChild(prato3)

  pratosUsados = pratosUsados + 1
  boxPratos.appendChild(spanRegua3)

  // criandos as bases do carrossel

  const boxM = document.createElement('div')

  // --- editando as bases carrossel
  boxM.classList.add('box-carrossel')

  // --- add box carrossel
  boxG.appendChild(boxM)

  // criando as imagens do carrossel
  const primeiraImg = document.createElement('img')
  const segundaImg = document.createElement('img')
  const terceiraImg = document.createElement('img')
  const quartaImg = document.createElement('img')

  // --- editando as imagens do carrossel

  primeiraImg.setAttribute('src', pratos[imgCarrossel].img)
  quartaImg.setAttribute('src', pratos[imgCarrossel].img)
  imgCarrossel = imgCarrossel + 1

  segundaImg.setAttribute('src', pratos[imgCarrossel].img)
  imgCarrossel = imgCarrossel + 1

  terceiraImg.setAttribute('src', pratos[imgCarrossel].img)
  imgCarrossel = imgCarrossel + 1

  boxM.appendChild(primeiraImg)
  boxM.appendChild(segundaImg)
  boxM.appendChild(terceiraImg)
  boxM.appendChild(quartaImg)

  boxAdd = boxAdd + 1
  ativarBtn()
}

function ativarBtn() {
  var quantPratos = pratos.length / 3
  const verMenos = document.getElementById('ver-menos')

  if (boxAdd == quantPratos) {
    document.getElementById('ver-mais').classList.add('sumir')
  }

  if (boxAdd >= 1) {
    verMenos.classList.remove('sumir')
  }
}
