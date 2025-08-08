
function multiplica(valor1:number,valor2:number):number | string{
    return `O resultado da multiplicação de ${valor1} X ${valor2} deu ${valor1*valor2}`;
    // return valor1 * valor2;
}

function mensagemBoasVindas(nome:string):string{
    return `Olá ${nome}, seja bem-vindo!\nEsperamos que você esteja bem.`;
}

console.log(multiplica(10,20)); 
console.log(mensagemBoasVindas('Mestre'));