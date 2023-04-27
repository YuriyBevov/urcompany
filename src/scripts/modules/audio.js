const playBtn = document.querySelector('.audio-play-btn');

if(playBtn) {
  const onClickPlayAudio = (evt) => {
    const target = evt.currentTarget;
    const track = target.nextElementSibling;

    if( target.classList.contains('active')) {
      target.classList.remove('active');
      track.pause();
    } else {
      target.classList.add('active');
      track.play();
    }
  }

  playBtn.addEventListener('click', onClickPlayAudio );
}
