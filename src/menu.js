import {Menu} from './core/menu'
import {logPlugin} from "@babel/preset-env/lib/debug";

export class ContextMenu extends Menu {
  constructor(selector) {
    super(selector);
  }
  open() {
    window.addEventListener('contextmenu', (event) => {
      event.preventDefault();
      this.el.classList.add('open')
      this.el.style.top = event.pageY + 'px'
      this.el.style.left = event.pageX + 'px'
      let windowWidth = window.innerWidth
      let windowHeight = window.innerHeight
      let menuWidth = this.el.offsetWidth + 4;
      let menuHeight = this.el.offsetHeight + 4;
      if ((windowWidth - event.pageX) < menuWidth) {
        this.el.style.left = windowWidth - menuWidth + "px";
      } else {
        this.el.style.left = event.pageX + "px";
      }
      if ((windowHeight - event.pageY) < menuHeight) {
        this.el.style.top = windowHeight - menuHeight + "px";
      } else {
        this.el.style.top = event.pageY + "px";
      }
    })
  }

  close() {
    let contextMenuElement = document.querySelector('#menu')
    window.addEventListener('click', function () {
      contextMenuElement.classList.remove('open')
    })
  }

  add(module) {
    let contextMenuElement = document.querySelector('#menu')
    const methodHtml = document.createElement('li')
    methodHtml.className = 'menu-item'
    methodHtml.innerText = module.text
    contextMenuElement.append(methodHtml)
    methodHtml.addEventListener('click', (event) => {
      module.trigger()
    })
  }
}