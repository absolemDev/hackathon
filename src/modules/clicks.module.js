import {Module} from '../core/module';
import {Modal} from './modal.module';

export class ClicksModule extends Module {
  constructor(type, text) {
    super(type, text);
    this.countClicks = 0;
    this.countDoubleClicks = 0;
  }

  trigger() {
    const modal = new Modal();
    modal.render('<div>Считаем клики...</div>');
    const handleClick = (e) => {
      (e.type === 'click') ? this.countClicks += 1 : this.countDoubleClicks += 1;
    };
    document.addEventListener('click', handleClick);
    document.addEventListener('dblclick', handleClick);
    setTimeout(() => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('dblclick', handleClick);
      modal.updateText(`<div>Количество кликов: ${this.countClicks}</div><div>Количество двойных кликов: ${this.countDoubleClicks}</div>`);
      setTimeout(() => {
        modal.deleteModal();
        this.countClicks = 0;
        this.countDoubleClicks = 0;
      }, 3000);
    }, 3000);
  }
}