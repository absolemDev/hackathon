import {Module} from '../core/module';
import {random, silencePromise} from '../utils';

export class SoundModule extends Module {
  constructor(name, type) {
    super(name, type);
  }

  trigger() {
    const randomSoundPath = `./src/accets/sounds/${random(1, 9)}.mp3`;
    const sound = new Audio(randomSoundPath);
    silencePromise(sound.play());
  }
}

