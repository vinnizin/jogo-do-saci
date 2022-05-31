const saci = document.querySelector('.saci');
const velhovamp = document.querySelector('.velhovamp');
const velhovampdois = document.querySelector('.velhovampdois');
const nuvens = document.querySelector('.nuvens');

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


        clearInterval(loop);

    }

}, 10);

document.addEventListener('keydown', jump);
