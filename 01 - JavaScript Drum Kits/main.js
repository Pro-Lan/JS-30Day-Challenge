function playAudio(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!audio) return;
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if(!key) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}
window.addEventListener('keydown',playAudio);

function stopTransition(e){
    if(e.propertyName !== 'transform') return;
    console.log(this === e.target); //true
    e.target.classList.remove('playing');
  }
const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend',stopTransition));