import * as React from 'react';

import './Modal.css';

class Modal extends React.Component {

  public props: any;

  public render() {
    const classnames = this.props.show ? "modal show" : "modal";

    return (
      <div className={classnames}>
        <div className="modal-popup">
          <i className="material-icons close" onClick={this.props.handleClose}>close</i>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Modal;