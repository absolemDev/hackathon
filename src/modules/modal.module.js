export class Modal {
  constructor() {
    this.modalWrapper = document.createElement('div');
    this.modal = document.createElement('div');
    this.modalContainer = document.createElement('div');
  }

  render(text) {
    this.modalWrapper.className = 'fixed-overlay';
    this.modal.className = 'modal';
    this.modalContainer.className = 'modal-container';
    this.modal.append(this.modalContainer);
    this.modalWrapper.append(this.modal);
    this.modalContainer.innerHTML = text;
    document.body.append(this.modalWrapper);
  }

  updateText(text) {
    this.modalContainer.innerHTML = text;
  }

  deleteModal() {
    this.modalWrapper.remove();
  }
}