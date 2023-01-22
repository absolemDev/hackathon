import {Module} from '../core/module';
import {random} from '../utils';

export class ShapeModule extends Module {
  constructor(type, text) {
    super(type, text);
  }
        
  trigger() {
    let rgbColor = `rgb(${random(0,255)},${random(0,255)},${random(0,255)})`;
    let randomNumber = random(20, 200); //переменная для трапеции и яйца
    let triangle = `width: 0; height: 0; border-left: ${random(10, 200)}px solid transparent; border-right: ${random(10, 200)}px solid transparent; border-bottom: ${random(10, 200) * 2}px solid ${rgbColor}; transform: rotate(${random(10, 360)}deg);`;
    let rectangle = `width: ${random(200, 300)}px; height: ${random(20, 300)}px; border-radius: ${random(0, 10)}%; background-color: ${rgbColor}`;
    let circle = `width: ${random(20, 400)}px; height: ${random(20, 500)}px; border-radius: 50%; background-color: ${rgbColor}`;
    let parallelogram = `width: ${random(20, 300)}px; height: ${random(20, 300)}px; background-color: ${rgbColor}; -webkit-transform: skew(${random(-30, 30)}deg);`;
    let trapezoid = `width: ${randomNumber}px; height: 0; border-left: ${randomNumber * 0.5}px solid transparent; border-right: ${randomNumber * 0.5}px solid transparent; border-bottom: ${randomNumber}px solid ${rgbColor}; transform: rotate(${random(0, 360)}deg);`;
    let egg = `width: ${randomNumber * 0.7}px; height: ${randomNumber}px; background-color: ${rgbColor}; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;`;
    let arrayOfShapes = [trapezoid, triangle, rectangle, circle, parallelogram, egg];
    let indexOfShapes = random(0, arrayOfShapes.length - 1);
    const box = document.createElement('div');
    box.className = 'box';
    document.body.append(box);
    box.style = arrayOfShapes[indexOfShapes]
    box.style.top = `${random(100, 400)}px`;
    box.style.left = `${random(100, 500)}px`;
    setInterval(() => {
      box.remove();
    }, 3000);
  }
}