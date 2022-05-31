const saci = document.querySelector('.saci');
const velhovamp = document.querySelector('.velhovamp');
const velhovampdois = document.querySelector('.velhovampdois');
const nuvens = document.querySelector('.nuvens');
const gameover = document.querySelector('.gameover');


const jump = () => {
    saci.classList.add('jump')

    setTimeout(() => {
        saci.classList.remove('jump')
    }, 500);
}


const loop = setInterval(() => {

    const velhovampPosition = velhovamp.offsetLeft;
    const saciPosition = +window.getComputedStyle(saci).bottom.replace('px','');
    
    if (velhovampPosition <= 120 && velhovampPosition > 0 && saciPosition < 80) {

        velhovamp.style.animation = 'none';
        velhovamp.style.left = `${velhovampPosition}px`;

        saci.style.animation = 'none';
        saci.style.bottom = `${saciPosition}px`;

        saci.src = './images/saci-gameover.png'
        saci.style.width = '150px'
        saci.style.marginLeft= '20px'

        var gameover = document.createElement('img');
        var elemento = document.getElementsByClassName ('gameover');
        elemento.insertAdjacentHTML(afterbegin, gameover);


        clearInterval(loop);


    }

}, 10);

const loopvelhodois = setInterval(() => {

    const velhovampdoisPosition = velhovampdois.offsetLeft;
    const saciPosition = +window.getComputedStyle(saci).bottom.replace('px','');
    
    if (velhovampdoisPosition <= 120 && velhovampdoisPosition > 0 && saciPosition > 80) {

        velhovampdois.style.animation = 'none';
        velhovampdois.style.left = `${velhovampdoisPosition}px`;

        saci.style.animation = 'none';
        saci.style.bottom = `${saciPosition}px`;

        saci.src = './images/saci-gameover.png'
        saci.style.width = '150px'
        saci.style.marginLeft= '20px'

        gameover.src = '../images/tela-gameover.png'

        clearInterval(loop);

    }

}, 10);

document.addEventListener('keydown', jump);
