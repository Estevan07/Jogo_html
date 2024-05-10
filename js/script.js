const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const elemento = document.querySelector('.pontuacao');
let loop;

const jump = () =>{
    mario.classList.add('jump');

    setTimeout(()=> {
        mario.classList.remove('jump');

    }, 500);

}
function incrementarValor() {
    // Obtém o valor atual do elemento como uma string
    var valorAtual = elemento.textContent;

    // Converte o valor atual para um número inteiro
    var numero = parseInt(valorAtual);

    // Incrementa o número em 1
    numero++;

    // Formata o número para ter 5 dígitos com zeros à esquerda
    var novoValor = numero.toString().padStart(5, '0');

    // Define o novo valor no elemento
    elemento.textContent = novoValor;
}


function recorde (){
    elemn
}


loop = setInterval(() =>{
    const pipePosition = pipe.offsetLeft;
    /* como nao tem a offsetBottom, precisamos pegar a caricteristica do mario, com: */
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 70){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`; /*o  tubo parar onde enconstou no mario*/

        mario.style.animation='none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './images/amor_morta.jpg';
        mario.style.width = '150px'
        mario.style.margin = '3px'
        
        clearInterval(loop);
    } 
    else{
        incrementarValor();
    }
}, 10);
document.addEventListener('keydown', jump)