import { gsap } from "gsap";
const openers = document.querySelectorAll('.main-nav-opener');

if(openers) {
  const mainNav = document.querySelector('.main-nav');
  const closers = document.querySelectorAll('.main-nav-closer');

  let windowWidth = window.innerWidth;
  window.addEventListener('resize', () => {
    windowWidth = window.innerWidth;

    gsap.set('.main-nav__section', {x: 0});
  });

  let isNavOpen = false;

  const onClickHandler = () => {
    mainNav.classList.toggle('active');
    isNavOpen = !isNavOpen;
    let tl = gsap.timeline();

    if(windowWidth > 1023 && isNavOpen) {
      tl
        .fromTo('.main-nav', {
          opacity: 0
        },{
          opacity: 1,
          duration: 1,
          ease: 'ease-out'
        })
        .fromTo('.main-nav__section:nth-of-type(1)', {
          x: '-100%',
          zIndex: 3
        },{
          x: '0',
          duration: .5,
          ease: 'ease-out'
        }, "-=.7")
        .fromTo('.main-nav__section:nth-of-type(2)', {
          x: '-200%',
          zIndex: 2
        },{
          x: '0',
          duration: .5,
          ease: 'ease-out'
        }, "-=.7")

        .fromTo('.main-nav__section:nth-of-type(3)', {
          x: '-300%',
          zIndex: 1
        },{
          x: '0',
          duration: .5,
          ease: 'ease-out'
        }, "-=.7")
    } else {
      tl.kill();
    }

    if(windowWidth < 1024 && isNavOpen) {
      gsap.fromTo('.main-nav', {opacity: 0}, {
        opacity: 1,
        duration: .6,
        ease: 'ease-in'
      })
    }
  }

  openers.forEach(opener => {
    opener.addEventListener('click', onClickHandler);
  })

  closers.forEach(closer => {
    closer.addEventListener('click', onClickHandler);
  })
}

const innerOpeners = document.querySelectorAll('.main-nav-inner-list-opener');

if(innerOpeners) {
  const backBtns = document.querySelectorAll('.main-nav-back');

  const onClickOpenInnerList = (evt) => {
    const level = evt.target.dataset.level;
    const currentNav = document.querySelector(`.main-nav__section[data-nav-level="${level}"]`)
    currentNav.style.zIndex = 100 + Number(level);

    gsap.fromTo(currentNav, {  x: '-100%' },
      {
        x: 0,
        duration: .5,
        ease: 'ease-in'
      })
  };

  const onClickCloseInnerList = (evt) => {
    const level = evt.currentTarget.dataset.level;
    const currentNav = document.querySelector(`.main-nav__section[data-nav-level="${level}"]`)

    gsap.fromTo(currentNav, {  x: '0' },
      {
        x: '-100%',
        duration: .5,
        ease: 'ease-in',
        onComplete: () => {
          currentNav.style.zIndex = Number(level) - 1;
        }
      })
  };

  innerOpeners.forEach(opener => {
    opener.addEventListener('click', onClickOpenInnerList);
  });

  backBtns.forEach(btn => {
    btn.addEventListener('click', onClickCloseInnerList);
  });
}
