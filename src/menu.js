import {Menu} from './core/menu'
import {logPlugin} from "@babel/preset-env/lib/debug";

export class ContextMenu extends Menu {
    constructor(selector) {
        super(selector);

    }


    open() {

            window.addEventListener('contextmenu', function (event) {
            let contextMenuElement = document.querySelector('#menu')
            event.preventDefault();
                contextMenuElement.classList.add('open')
                contextMenuElement.style.top = event.pageY + 'px'
                contextMenuElement.style.left = event.pageX + 'px'

            let windowWidth = window.innerWidth
            let windowHeight  = window.innerHeight

            let menuWidth = contextMenuElement.offsetWidth + 4;
            let menuHeight = contextMenuElement.offsetHeight + 4;

            if ((windowWidth - event.pageX) < menuWidth) {
                contextMenuElement.style.left = windowWidth - menuWidth + "px";
            } else {
                contextMenuElement.style.left = event.pageX + "px";
            }

            if ((windowHeight - event.pageY) < menuHeight) {
                contextMenuElement.style.top = windowHeight - menuHeight + "px";
            } else {
                contextMenuElement.style.top = event.pageY + "px";
            }

        })


    }

    close() {
        let contextMenuElement = document.querySelector('#menu')
        window.addEventListener('click', function () {
            contextMenuElement.classList.remove('open')
        })

    }

    add(methodName) {

        let contextMenuElement = document.querySelector('#menu')
        const methodHtml = document.createElement('li')
        methodHtml.className = 'menu-item'
        methodHtml.innerText = methodName
        contextMenuElement.append(methodHtml)

    }
  
}