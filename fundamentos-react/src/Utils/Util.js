export const corAleatoria = () =>{
    const letras = '0123456789ABCDEF';
        let cor = '#';

        for (let i = 0; i < 6; i++)
            cor += letras[Math.floor(Math.random() * 16)];

        return cor;
}

export const gerar = (quantidade = 0) => {
    let numerosMega = [];
    const aleatorio = () => Math.round(Math.random() * (61 - 1) ) + 1;

    for (let i = 0; i < quantidade; i++) {

        let numeroAleatorio = aleatorio();

        if (numerosMega.includes(numeroAleatorio))
            i--;
        else
            numerosMega.push(numeroAleatorio)

    }
     return numerosMega.sort((n1, n2) => n1 - n2);
}

export const chamadaRecursiva = (quantidade = 0, numerosMega) => {
    const aleatorio = Math.round(Math.random() * (61 - 1) ) + 1;

    return numerosMega.includes(aleatorio) ? 
    chamadaRecursiva(quantidade, numerosMega) :
               aleatorio;
}