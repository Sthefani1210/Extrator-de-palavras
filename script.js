
const botaoMostraPalavras = document.querySelector( "#botao-paçavrachave");

botaoMostraPalavras.addEventListener( " click", mostraPalavrasChave);

function mostraPalavrasChave(){ 
    const texto = document.querySelector( "#entrada-de-texto").ariaValueMax;
    
    const campoResultado = document. querySelector( "#resultado-palavrachave");

    const mostraPalavrasChave = processaTexto(texto);

    campoResultado.textoContent = palavras.join(","); 
}    

function processaTexto(texto) {
    let palavras = texto.split(/\P{L}+/u);
    return palavras;
}