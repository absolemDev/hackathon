import {Module} from '../core/module';

export class ClicksModule extends Module {
  constructor(type, text) {
    super(type, text);
    this.countClicks = 0;
    this.countDoubleClicks = 0;
  }

  trigger() {
    const modalWraper = document.createElement('div');
    modalWraper.className = '.modal-wrapper';
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerText = 'Считаем клики...';
    modalWraper.append(modal);
    document.append(modalWraper);
    modalWraper.style.display = 'flex';
    const handleClick = (e) => {
      (e.type === 'click') ? this.countClicks += 1 : this.countDoubleClicks += 1;
    };
    document.addEventListener('click', handleClick);
    document.addEventListener('dblclick', handleClick);
    setTimeout(() => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('dblclick', handleClick);
      modal.innerText = `Количество кликов: ${this.countClicks} <br> Количество двойных кликов: ${this.countDoubleClicks}`;
      setTimeout(() => {
        modalWraper.style.display = 'none';
        this.countClicks = 0;
        this.countDoubleClicks = 0;
      }, 3000);
    }, 3000);
  }
}