const nomeITEM = "Epadada das sombras";
const precoItem = 250
const raridadeItem = "Raro"
const estoqueItem = 12;

console.log (`
=== FICHA DO ITEM ===
nomeITEM: ${nomeIntem}  
preço: R${precoItem}

raridade; ${raridadeItem} unidades 

//validação do preço
if (precoItem < 0) {
    console.log("Classificação: Comum")
 } else if (precoItem >= 100 && precoItem < 500) {
    console.log("Classificação: Lendario"):
}

//Operador ternário
const emDestaque = precoItem > 500 ? true : false:

console.log('Em destaque: $ {emDestaque}`)

//Cadastro em lote 
 for (let i = 1; i<= 5; i ++) {
    console.log(`item ${i} 
cadastro com sucesso!`);
 if (i % 2 === 0 ) {
    console.log("Este é um item de ídice par.");

     }
 }

 // controle de estoque 
 let estoqueVenda = estoqueItem;

 while(estoqueVenda > 0){
    console.log( ` Venda realizada! 
    Estoque restante: ${estoqueVenda - 1}`);
        estoqueVenda--;
 }
console.log("estoque esgotado!");

//catálago de itens
const catalogo = [
    "Espadaa das Sombras",
    "Asas Douraradas",
    "Capacete Neon",
    "Dragão ",
    "Skin Cyberpunk"
];
for (const item of catalago) {
     console.log(`Item: ${item}`);
}
 