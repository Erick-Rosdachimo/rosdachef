var pratos:{nome:string, desc:string, img:string}[] = [
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
var boxAdd:number = 0
var boxVisiveis:number = 0
var pratosUsados:number = 0

function adicionar():void {

  let BoxDisponiveis:number = pratos.length / 3
  let contMargin = document.querySelectorAll('.sobremesas .container-margin'); 
  let contAtual = contMargin[boxVisiveis + 1] as HTMLElement;
  let divisorImg = document.querySelectorAll('.sobremesas .divisor-img');
  let divisorAtual = divisorImg[boxVisiveis] as HTMLElement

  
  if(boxVisiveis == boxAdd){
    document.getElementById('container-sobre')!.innerHTML =
    document.getElementById('container-sobre')!.innerHTML +
    `<img
       src="../assets/images/divisor.png"
       alt=""
      class="divisor-icon divisor-img"
     />
    <div class="container-margin ">
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
      <div class="box-carrossel">
        <img src="${pratos[pratosUsados].img}" alt=""/>
        <img src="${pratos[pratosUsados +1 ].img}" alt=""/>
        <img src="${pratos[pratosUsados +2 ].img}" alt=""/>
        <img src="${pratos[pratosUsados].img}" alt=""/>
      </div>
    </div>
  </div>`
  boxAdd = boxAdd + 1
  pratosUsados = pratosUsados + 3
  }else{
    divisorAtual.style.display = 'block'
    contAtual.style.display = 'flex'
  }
  
  boxVisiveis = boxVisiveis + 1
  ativarBtn()
}

function ativarBtn():void {
  var quantPratos:number = pratos.length / 3
  const verMenos = document.getElementById('ver-menos')!
  const verMais = document.getElementById('ver-mais')!

  if (boxVisiveis == quantPratos) {
    verMais.classList.add('sumir')
  }

  if (boxVisiveis >= 1) {
    verMenos.classList.remove('sumir')
  }

  if (boxVisiveis == 0) {
    verMenos.classList.add('sumir')
  }

  if(boxVisiveis < quantPratos){
    verMais.classList.remove('sumir')
  }
}

function retirar() {
  
  let contMargin = document.querySelectorAll('.sobremesas .container-margin'); 
  let contAtual = contMargin[boxVisiveis] as HTMLElement;
  let divisorImg = document.querySelectorAll('.sobremesas .divisor-img');
  let divisorAtual = divisorImg[boxVisiveis - 1] as HTMLElement
  divisorAtual.style.display = 'none'
  contAtual.style.display = 'none'
  
  
  boxVisiveis = boxVisiveis - 1
  ativarBtn()
}
