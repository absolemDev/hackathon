import {Module} from '../core/module';
import {random} from '../utils';

export class ShapeModule extends Module {
  constructor(type, text) {
    super(type, text);
  }
  
  trigger() {
    const box = document.createElement('div');
    box.className = 'box';
    document.body.append(box);
    box.style.backgroundColor = `rgb(${random(0,255)},${random(0,255)},${random(0,255)})`;
    box.style.borderRadius = `${random(10, 50)}%`;
    box.style.width = `${random(5, 20)}em`;
    box.style.height = `${random(5, 20)}em`;
    box.style.top = `${random(100, 400)}px`;
    box.style.left = `${random(100, 500)}px`;
    setInterval(() => {
      box.remove();
    }, 3000);
  }
}