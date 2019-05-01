import React, { Component } from 'react';
import './modal.scss';

class Modal extends Component {

  render() {
    const {
      modalBody,
      modalHeader,
      modalFooter,
      name,
      showModal,
      closeModalCallback
    } = this.props;

    return (
      showModal && <div className="modal-container">
        <div className="modal-inner-dialog">
          <div className="modal-close" name={name} onClick={closeModalCallback}>X</div>
          {modalHeader()}
          {modalBody()}
          {modalFooter()}
        </div>
      </div>)
  }
}

export default Modal;