import './styles.css';
import { ContextMenu } from './menu';
import { ClicksModule } from './modules/clicks.module';
import { TimerModule } from './modules/timer.module';
import { SoundModule } from './modules/sound.module';
import { ShapeModule } from './modules/shape.module';
import { BackgroundModule } from './modules/background.module';
import { MessageModule } from './modules/message.module';
import { CatchRabbitModule } from './modules/catchRabbit.module';
import { ReloadModule } from './modules/reload.module';

const menu = new ContextMenu('#menu');
menu.add(new ClicksModule('Click module', 'Считаем клики (3 секунды)'));
menu.add(new TimerModule('Timer module', 'Таймер'));
menu.add(new SoundModule('Sound module', 'Рандомный звук'));
menu.add(new ShapeModule('Shape module', 'Случайная фигура'));
menu.add(new BackgroundModule('Background module', 'Случайный фон'));
menu.add(new MessageModule('Message module', 'Показать текущую погоду'));
menu.add(new CatchRabbitModule('CatchRabbit module', 'Поймать кролика!'));
menu.add(new ReloadModule('Reload module', 'Перезагрузить страницу'));
window.addEventListener('contextmenu', (event) => {
  event.preventDefault();
  menu.open(event.pageX, event.pageY);
});
