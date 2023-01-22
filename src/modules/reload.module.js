import {Module} from "../core/module";

export class ReloadModule extends Module {
  constructor(type, text) {
    super(type, text);
  }

  trigger() {
    window.location.reload();
  }
}
