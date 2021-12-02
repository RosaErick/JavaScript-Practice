window.addEventListener('keydown', function (e) {
    
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    
    if (!audio) return; //faz a função não rodar toda de uma
    
    audio.currentTime = 0; 
    audio.play();
    key.classList.add('playing');

});

const keys = document.querySelectorAll('.key');

keys.forEach(key => key.addEventListener('transitionend', removeTransition));
console.log(keys);