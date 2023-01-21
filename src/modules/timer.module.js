import {Module} from '../core/module';
import {Modal} from './modal.module';

export class TimerModule extends Module {
  constructor(type, text) {
    super(type, text);
    this.setTimer = 0;
  }

  trigger() {
    const modal = new Modal();
    modal.render('<form><input type="number" id="timer" name="timer" min="0"><input type="submit" value="Запустить таймер"></form>');
    const form = document.getElementById("timer");
    document.addEventListener('submit', (e) => {
      e.preventDefault();
      modal.deleteModal();
      if (Number(e.target.timer.value) > 0) {
        this.setTimer = e.target.timer.value;
        const timerHTML = document.createElement('div');
        timerHTML.className = "modal_timer";
        document.body.append(timerHTML);
        const timer = setInterval(() => {
          const hour = Math.floor(this.setTimer / 60 / 60);
          const minute = Math.floor(this.setTimer / 60);
          const second = this.setTimer % 60;
          timerHTML.innerText = `${(hour > 9) ? hour : '0' + hour} : ${(minute > 9) ? minute : '0' + minute} : ${(second > 9) ? second : '0' + second}`;
          if (this.setTimer < 0) {
            timerHTML.remove();
            clearInterval(timer);
            modal.render('Таймер закончил свою работу!');
            setTimeout(() => {
              modal.deleteModal();
            }, 3000);
          };
          this.setTimer -= 1;
        }, 1000);
      }
    });
  }
}