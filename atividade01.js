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

 