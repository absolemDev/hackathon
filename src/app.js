import './styles.css';
import { ContextMenu } from './menu';
import { TimerModule } from './modules/timer.module';

const menu = new ContextMenu('#menu');
menu.add(new TimerModule('Timer module', 'Таймер'));
window.addEventListener('contextmenu', (event) => {
  event.preventDefault();
  menu.open(event.pageX, event.pageY);
});
