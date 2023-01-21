import {Menu} from './core/menu'

export class ContextMenu extends Menu {
  constructor(selector) {
    super(selector);
  }
  open(pageX, pageY) {
      this.el.classList.add('open');
      this.el.style.top = pageY + 'px';
      this.el.style.left = pageX + 'px';
      let windowWidth = window.innerWidth;
      let windowHeight = window.innerHeight;
      let menuWidth = this.el.offsetWidth + 4;
      let menuHeight = this.el.offsetHeight + 4;
      if ((windowWidth - pageX) < menuWidth) {
        this.el.style.left = windowWidth - menuWidth + "px";
      } else {
        this.el.style.left = pageX + "px";
      }
      if ((windowHeight - pageY) < menuHeight) {
        this.el.style.top = windowHeight - menuHeight + "px";
      } else {
        this.el.style.top = pageY + "px";
      }
  }

  close() {
    window.addEventListener('click', () => {
      this.el.classList.remove('open');
    })
  }

  add(module) {
    let contextMenuElement = document.querySelector('#menu');
    const methodHtml = document.createElement('li');
    methodHtml.className = 'menu-item';
    methodHtml.innerText = module.text;
    contextMenuElement.append(methodHtml);
    methodHtml.addEventListener('click', (event) => {
      module.trigger();
    });
  }
}