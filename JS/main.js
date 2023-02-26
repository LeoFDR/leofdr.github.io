let sound = new Audio('./MULTIMEDIA/halo.mp3');

playmp3.addEventListener('click', ()=>{
	sound.play();
});

pausemp3.addEventListener('click', ()=>{
	sound.pause();
});
