// CSS imports
import '../sass/main.scss';

// Close navigation menu when clicking off
const elements = {
    checkbox: document.querySelector('.navigation__check'),
    menu: document.querySelector('.navigation__btn'),
    icon: document.querySelector('.navigation__btn--icon')
};

document.addEventListener('click', e => {
    if (e.target !== elements.checkbox && e.target !== elements.icon && e.target !== elements.menu) {
      elements.checkbox.checked = false;
    }
});