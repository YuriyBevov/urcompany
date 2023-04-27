const items = document.querySelectorAll('.stuff-section__list-item');

if(items) {
  const showBtn = document.querySelector('.stuff-section__btn');

  let width = window.innerWidth;
  const count = 5;
  console.log(width);

  setHiddenClass = (el) => {
    !el.classList.contains('hidden') ?
    el.classList.add('hidden') : null;
  }

  removeHiddenClass = (el) => {
    el.classList.contains('hidden') ?
    el.classList.remove('hidden') : null;
  }

  const hideItems = (width) => {
    showBtn.style.display = 'flex';
    if(width > 533) {
      items.forEach((item, index) => {
        if(index > count - 1) {
          removeHiddenClass(item);
        }
      });

      showBtn.style.display = 'none';
    } else {
      items.forEach((item, index) => {
        if(index > count - 1) {
          setHiddenClass(item);
        }
      })
    }
  }

  const onResizeShowItems = () => {
    width = window.innerWidth;
    hideItems(width);
  }

  hideItems(width);

  window.addEventListener('resize', onResizeShowItems);

  showBtn.addEventListener('click', () => {
    items.forEach((item, index) => {
      if(index > count - 1) {
        removeHiddenClass(item);
      }
    });

    showBtn.style.display = 'none';
  });
}
