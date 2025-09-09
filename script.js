
const botaoMostraPalavras = document.querySelector( "#botao-paçavrachave");

botaoMostraPalavras.addEventListener( " click", mostraPalavrasChave);

function mostraPalavrasChave(){ 
    const texto = document.querySelector( "#entrada-de-texto").ariaValueMax;

    const campoResultado = document. querySelector( "#resultado-palavrachave");

    const palavras = texto.split("");

    campoResultado.textoContent = palavras; 
}    