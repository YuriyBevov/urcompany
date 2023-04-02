const openers = document.querySelectorAll('.main-nav-opener');
console.log(openers);

if(openers) {
  const mainNav = document.querySelector('.main-nav');
  const closer = document.querySelector('.main-nav-closer');
  openers.forEach(opener => {

    const onClickOpenMainNav = () => {
      mainNav.classList.add('active');
    }

    const onClickCloseMainNav = () => {
      mainNav.classList.remove('active');
    }

    closer.addEventListener('click', onClickCloseMainNav);
    opener.addEventListener('click', onClickOpenMainNav);
  })
}
