import './styles.css'
import { ContextMenu } from './menu';
import { ClicksModule } from './modules/clicks.module';

const menu = new ContextMenu('#menu');
menu.add(new ClicksModule('Click module', 'Считаем клики (3 секунды)'));
window.addEventListener('contextmenu', (event) => {
  event.preventDefault();
  menu.open(event.pageX, event.pageY);
});