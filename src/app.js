import './styles.css'
import { ContextMenu } from './menu';
import { ClicksModule } from './modules/clicks.module';
import { TimerModule } from './modules/timer.module';
import { SoundModule } from './modules/sound.module';
import { ShapeModule } from './modules/shape.module'

const menu = new ContextMenu('#menu');
menu.add(new ClicksModule('Click module', 'Считаем клики (3 секунды)'));
menu.add(new TimerModule('Timer module', 'Таймер'));
menu.add(new SoundModule('Sound module', 'Рандомный звук'));
menu.add(new ShapeModule('Shape module', 'Рандомная фигура'))
window.addEventListener('contextmenu', (event) => {
  event.preventDefault();
  menu.open(event.pageX, event.pageY);
});
