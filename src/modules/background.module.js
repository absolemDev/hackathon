import {Module} from '../core/module';
import {random} from '../utils';

export class BackgroundModule extends Module {
  constructor(type, text) {
    super(type, text);
  }

  trigger() {
    document.body.style.backgroundColor = `rgb(${random(0,255)},${random(0,255)},${random(0,255)})`;
  }
}