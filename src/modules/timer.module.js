import {Module} from '../core/module';
import {Modal} from './modal.module';

export class TimerModule extends Module {
  constructor(type, text) {
    super(type, text);
    this.setTimer = 0;
    this.inProgress = false;
    this.isOpen = false;
    this.modal = new Modal();
    this.timerHTML = document.createElement('div');
    this.timerHTML.className = "modal-timer";
  }

  trigger() {
    if (this.inProgress && !this.isOpen) {
      this.isOpen = true;
      this.modal.render('<form><p>Таймер уже запущен. Сбросить?</p><button id="clear-interval-ok">Ок</button><button id="clear-interval-cansel">Отмена</button></form>');
      document.getElementById('clear-interval-ok').addEventListener('click', () => {
        this.timerHTML.remove();
        clearInterval(this.inProgress);
        this.inProgress = false;
        this.modal.deleteModal();
        this.setTimer = 0;
        this.isOpen = false;
      });
      document.getElementById('clear-interval-cansel').addEventListener('click', () => {
        this.modal.deleteModal();
        this.isOpen = false;
      })
    }
    if (this.inProgress || this.isOpen) return;
    this.isOpen = true;
    this.modal.render('<form id="timer-form"><input type="number" id="timer" name="timer" min="0" placeholder="Введите количество секунд"><button id="start-timer">Запустить таймер</button></form>');
    document.getElementById('timer-form').addEventListener('click', (e) => {
      e.preventDefault();
      if (!e.target.closest('#start-timer')) return;
      this.setTimer = Math.floor(Number(document.getElementById('timer').value));
      if (this.setTimer <= 0) return;
      this.modal.deleteModal();
      this.isOpen = false;
      this.timerHTML.innerText = ``;
      document.body.append(this.timerHTML);
      this.inProgress = setInterval(() => {
        const hour = Math.floor(this.setTimer / 60 / 60);
        const minute = Math.floor(this.setTimer / 60 % 60);
        const second = Math.floor(this.setTimer % 60);
        this.timerHTML.innerText = `${(hour > 9) ? hour : '0' + hour} : ${(minute > 9) ? minute : '0' + minute} : ${(second > 9) ? second : '0' + second}`;
        if (this.setTimer < 0) {
          this.isOpen = true;
          this.timerHTML.remove();
          clearInterval(this.inProgress);
          this.modal.render('Таймер закончил свою работу!');
          setTimeout(() => {
            this.modal.deleteModal();
            this.inProgress = false;
            this.isOpen = false;
          }, 3000);
        };
        this.setTimer -= 1;
      }, 1000);
    });
  }
}