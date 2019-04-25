import React, { Component } from 'react';
import './modal.scss';

class Modal extends Component {
  render() {
    const {
      modalBody,
      modalHeader,
      modalFooter,
      modalClose,
      name
    } = this.props;

    return (
      <div className="modal-container">
        <div className="modal-inner-dialog">
          <div className="modal-close" name={name} onClick={(e) => modalClose(e)}>X</div>
          {modalHeader()}
          {modalBody()}
          {modalFooter()}
        </div>
      </div>
    );
  }
}

export default Modal;