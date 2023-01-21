export class Modal {
  constructor() {
    this.modalWrapper = document.createElement('div');
    this.modalText = document.createElement('div');
  }

  render(text) {
    this.modalWraper.className = '.modal-wrapper';
    this.modalText.className = 'modal';
    this.modalText.innerText = text;
    this.modalWraper.append(this.modalText);
    document.append(this.modalWraper);
  }

  updateText(text) {
    this.modalText.innerText = text;
  }

  deleteModal() {
    this.modalWrapper.remove();
  }
}