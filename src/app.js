import './styles.css'
import {ContextMenu} from "@/menu";


const menu = new ContextMenu('#menu');
window.addEventListener('contextmenu', (event) => {
  event.preventDefault();
  menu.open(event);
})









