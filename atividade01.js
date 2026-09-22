const nomeITEM = "Epadada das sombras";
const precoItem = 250
const raridadeItem = "Raro"
const estoqueItem = 12;

console.log (`
=== FICHA DO ITEM ===
nomeITEM: ${nomeIntem}  
preço: R${precoItem}
<<<<<<< HEAD
raridade; ${raridadeItem} unidades `)
=======
raridade; ${raridadeItem} unidades `):

//validação do preço
if (precoItem < 0) 
    console.log("Classificação: Comum");
} else if (precoItem >= 100 && precoItem < 500) {
    console.log("Classificação: Lendario");
}

//Operador ternário
const emDestaque = precoItem > 500 ? true : false

console.log('Em destaque: $ {emDestaque}')