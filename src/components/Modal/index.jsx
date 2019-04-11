import React, { Component } from 'react';
import './modal.scss';

class Modal extends Component {

  state = {

  }

  render() {
    const {
      modalBody,
      modalHeader,
      modalFooter,
      modalClose
    } = this.props;

    return (
      <div className="modal-container">
        <div className="modal-inner-dialog">
          <span className="modal-close" onClick={() => modalClose()}>X</span>
          {modalHeader()}
          {modalBody()}
          {modalFooter()}
        </div>
      </div>
    );
  }
}

export default Modal;