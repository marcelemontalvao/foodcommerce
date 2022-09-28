const data = [
  {
    id: 1,
    img: "../img/acaraje.webp",
    nameItem: "Acarajé",
    description:
      "Bolinho feito de massa de feijão-fradinho, cebola e sal, e frito em azeite de dendê. Pode vir acompanhado de vatapá, caruru, salada e pimenta.",
    value: 10,
    addCart: "Adicionar ao carrinho",
    tag: ["Comida Baiana"],
  },
  {
    id: 2,
    img: "../img/vatapa.jpg",
    nameItem: "Vatapá",
    description:
      "Feito de pão molhado, fubá, gengibre, pimenta-malagueta, amendoim, cravo, castanha de caju, leite desnatado, azeite de oliva, cebola, alho e tomate.",
    value: 50,
    addCart: "Adicionar ao carrinho",
    tag: ["Comida Baiana"],
  },
  {
    id: 3,
    img: "../img/pizza.jpg",
    nameItem: "Pizza de Frango com Catupiry",
    description:
      "Pizza de Frango com Catupiry feita com farinha de trigo, fermento em pó, molho de tomate, frango desfiado, milho e catupiry",
    value: 40,
    addCart: "Adicionar ao carrinho",
    tag: ["Pizza"],
  },
  {
    id: 4,
    img: "../img/mugunza.jpeg",
    nameItem: "Mugunzá",
    description:
      "Grãos de milho-branco ou amarelo levemente triturados, cozidos em um caldo contendo leite de coco ou de vaca, açúcar, canela em pó ou casca e cravo-da-índia.",
    value: 15,
    addCart: "Adicionar ao carrinho",
    tag: ["Comida Brasileira"],
  },
  {
    id: 5,
    img: "../img/brigadeiro.webp",
    nameItem: "Brigadeiro",
    description:
      "Feito de leite condensado, chocolate e manteiga, e enrolado em granulado.",
    value: 5,
    addCart: "Adicionar ao carrinho",
    tag: ["Comida Brasileira"],
  },
  {
    id: 6,
    img: "../img/acai.jpeg",
    nameItem: "Açaí",
    description:
      "Palmeira muito comum na região da Amazônia que produz um fruto bacáceo de cor roxa, muito utilizado na confecção de alimentos e bebidas.",
    value: 30,
    addCart: "Adicionar ao carrinho",
    tag: ["Comida Brasileira"],
  },
  {
    id: 7,
    img: "../img/marguerita.jpg",
    nameItem: "Pizza de Marguerita",
    description:
      "Tipo de pizza tradicional. Feito com molho de tomate, muçarela, rodelas de tomate e folhas de manjericão.",
    value: 30,
    addCart: "Adicionar ao carrinho",
    tag: ["Pizza"],
  },
  {
    id: 8,
    img: "../img/pizza-de-romeu-e-julieta.webp",
    nameItem: "Pizza de Romeu e Julieta",
    description:
      "Tipo de pizza doce. Feito com queijo muçarela e doce de goiabada.",
    value: 30,
    addCart: "Adicionar ao carrinho",
    tag: ["Pizza"],
  },
  {
    id: 9,
    img: "../img/pizza-de-calabresa.jpg",
    nameItem: "Pizza de Calabresa",
    description:
      "Tipo de pizza tradicional. Feito com queijo muçarela, tomate, calabresa. Pode levar azeitona e orégano.",
    value: 30,
    addCart: "Adicionar ao carrinho",
    tag: ["Pizza"],
  },
];
//Permite repetição dos produtos
let cart = [

];
//Não permite repetição dos produtos
let cartFilter = [

];