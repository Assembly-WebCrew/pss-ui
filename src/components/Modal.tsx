import * as React from "react";
import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: none;

  &.show {
    display: block;
  }
`;

const Popup = styled.div`
  position: fixed;
  background: white;
  width: 80%;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
  border-radius: 34px;

  .close {
    float: right;
    font-size: 34px;
    cursor: pointer;
    padding: 10px;
    display: block;
  }
`;

class Modal extends React.Component {
  public props: any;

  public render() {
    const classnames = this.props.show ? "show" : "";

    return (
      <Overlay className={classnames}>
        <Popup>
          <i className="material-icons close" onClick={this.props.handleClose}>
            close
          </i>
          {this.props.children}
        </Popup>
      </Overlay>
    );
  }
}

export default Modal;
