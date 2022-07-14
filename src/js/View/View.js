export default class View {
  _modal = '';
  _modalBtnOpen = '';
  _modalBtnClose = '';

  _switchModalState() {
    this._modal.classList.toggle('modal--hidden');
  }

  addHandlerShowModal() {
    this._modalBtnOpen.addEventListener('click', this._switchModalState.bind(this));
  }

  addHandlerCloseModal() {
    this._modalBtnClose.addEventListener('click', this._switchModalState.bind(this));
  }
}
