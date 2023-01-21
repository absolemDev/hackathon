import './styles.css'
import { ContextMenu } from './menu';
import { ClicksModule } from './modules/clicks.module';
import { TimerModule } from './modules/timer.module';

const menu = new ContextMenu('#menu');
menu.add(new ClicksModule('Click module', 'Считаем клики (3 секунды)'));
menu.add(new TimerModule('Timer module', 'Таймер'));
window.addEventListener('contextmenu', (event) => {
  event.preventDefault();
  menu.open(event.pageX, event.pageY);
});
