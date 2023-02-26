let sound = new Audio('.halo.mp3');

playmp3.addEventListener('click', ()=>{
	sound.play();
});

pausemp3.addEventListener('click', ()=>{
	sound.pause();
});
