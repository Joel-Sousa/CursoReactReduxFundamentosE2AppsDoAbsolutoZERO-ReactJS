
function gerarNumeros(qtd){
    let numerosMega = [];

    const aleatorio = () => Math.round(Math.random() * (61 - 1) + 1);

    for(let i=0; i < qtd; i++){

        let numeroAleatorio = aleatorio();

        if(numerosMega.includes(numeroAleatorio))
            i--;
        else
            numerosMega.push(numeroAleatorio)
            
    }
    return numerosMega;
}


console.log(gerarNumeros(6));
console.log(gerarNumeros(6));