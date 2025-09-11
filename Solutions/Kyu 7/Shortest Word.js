function findShort(s) {
    const listaDePalavras = s.split(" ");
    let palavraPequena = listaDePalavras[0];

    for (palavra of listaDePalavras) {
        if (palavra.length < palavraPequena.length) palavraPequena = palavra;
    }

    return palavraPequena.length;
}

console.log(findShort("Batata frita é muito bom!"));