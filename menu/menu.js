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
var boxVisiveis = 0
var pratosUsados = 0
var imgCarrossel = 0

function adicionar() {
  boxAdd = boxAdd + 1
  boxVisiveis = boxVisiveis + 1
  ativarBtn()

  document.getElementById('container-sobre').innerHTML =
    document.getElementById('container-sobre').innerHTML +
    `<div>
      <img
       src="../assets/images/divisor.png"
       alt=""
      class="divisor-icon"
     />
    </div>
    <div class="container-margin teste">
    <div class="box-pratos">
      <div class="prato">
        <img src="${pratos[pratosUsados].img}" alt="" />
        <span>
          <p class="nome">${pratos[pratosUsados].nome}</p>
          <p class="desc">${pratos[pratosUsados].desc}
          </p>
        </span>
      </div>
      <span class="regua"></span>
      <div class="prato">
      <img src="${pratos[pratosUsados + 1].img}" alt="" />
      <span>
        <p class="nome">${pratos[pratosUsados + 1].nome}</p>
        <p class="desc">${pratos[pratosUsados + 1].desc}
        </p>
      </span>
    </div>
      <span class="regua"></span>
      <div class="prato">
      <img src="${pratos[pratosUsados + 2].img}" alt="" />
      <span>
        <p class="nome">${pratos[pratosUsados + 2].nome}</p>
        <p class="desc">${pratos[pratosUsados + 2].desc}
        </p>
      </span>
    </div>
      <span class="regua"></span>
    </div>
    <div class="carrossel-cardapio">
      <img
        src="assets-menu/foto-especialidades-carrossel-1.jpg"
        alt=""
      />
    </div>
  </div>`
  pratosUsados = pratosUsados + 3
}

function ativarBtn() {
  var quantPratos = pratos.length / 3
  const verMenos = document.getElementById('ver-menos')

  if (boxVisiveis == quantPratos) {
    document.getElementById('ver-mais').classList.add('sumir')
  }

  if (boxVisiveis >= 1) {
    verMenos.classList.remove('sumir')
  }

  if (boxVisiveis == 0) {
    verMenos.classList.add('sumir')
  }
}

function retirar() {
  for (var i = boxAdd; i > 0; i = i - 1) {
    if (
      document.querySelectorAll('.sobremesas .container-margin')[i].style
        .display == 'none'
    ) {
    } else {
      document.querySelectorAll('.sobremesas .container-margin')[
        i
      ].style.display = 'none'
      boxVisiveis = boxVisiveis - 1
      i = 0
    }
  }
  ativarBtn()
}
