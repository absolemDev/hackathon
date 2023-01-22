import {Module} from "../core/module";
import Rabbit from '../accets/rabbit.png';
import {random} from "@/utils";
import {Modal} from "@/modules/modal.module";

export class CatchRabbitModule extends Module {
  constructor(type, text) {
    super(type, text);
    this.clickCount = 0;
    this.modal = new Modal();
  }

  moveRabbit = () => {
    console.log('move');
    const {width, height} = document.body.getBoundingClientRect();
    const y = random(0, height - 50);
    const x = random(0, width - 50);
    this.rabbitImg.style.top = `${y}px`;
    this.rabbitImg.style.left = `${x}px`;
  };

  createRabbit() {
    this.rabbitImg = document.createElement('img');
    this.rabbitImg.src = Rabbit;
    this.rabbitImg.width = 50;
    this.rabbitImg.height = 50;
    this.rabbitImg.style.position = 'absolute';
    this.rabbitImg.style.userSelect = 'none';
    this.rabbitImg.style.webkitUserSelect = 'none';
    document.body.append(this.rabbitImg);
  }

  incrementClickCount = () => {
    this.clickCount++;
    console.log(this.clickCount);
  };

  endGame = () => {
    this.modal.deleteModal();
    this.clickCount = 0;
  };

  trigger() {
    this.createRabbit();
    const intervalId = setInterval(this.moveRabbit, 1000);
    this.rabbitImg.addEventListener('click', this.incrementClickCount);
    setTimeout(() => {
      this.rabbitImg.remove();
      this.modal.render(`Вы поймали зайца ${this.clickCount} раз :)`);
      clearInterval(intervalId);
      setTimeout(this.endGame, 3000);
    }, 15000);
  }
}
