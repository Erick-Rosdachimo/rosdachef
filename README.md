# Sobre o projeto

Este projeto é uma versão em HTML CSS e JS de um projeto antigo no wordpress que eu já tinha feito, então o design ja esta pronto mas vou mudar algumas coisas e ir colocando novos elementos de acordo com oque eu estiver estudando

O projeto é um site para restaurante.

## Notas da atualização:

Nesta atualização, o cardápio ganhou uma função de ver mais pratos, que pode ser desfeita com o botão ver menos, a função pode ser ativada até os pratos disponiveis acabarem, feita em typescript, ela busca as informações do prato em um array de objetos, e cria a partir de uma template string, a função ver menos pega o container de pratos pra ser escondido a partir de uma variável que guarda a quantidade de containers vísiveis, escondendo a partir desta variavel, após isto a função ver mais teve que ser adaptada, para só criar novos elementos quando a quantidade de containers vísiveis seja igual a quantidade dos container já criados, quando esta afirmação for true, cria normalmente com template string, se não, apenas deixa o container vísivel novamente mudando o estilo.

link para o projeto: https://erick-rosdachimo.github.io/rosdachef

Projeto original: http://duxdino.rf.gd/ ( não concluido )
