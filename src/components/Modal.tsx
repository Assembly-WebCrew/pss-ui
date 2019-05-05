import * as React from "react";
import styled from "styled-components";
import Popup from "react-modal";

export enum ModalSize {
  Small,
  Normal
}

const Close = styled.i`
  float: right;
  font-size: 34px;
  cursor: pointer;
  padding: 10px;
  display: block;
`;

const popupStyles = {
  [ModalSize.Small]: {
    overlay: {
      background: "rgba(0, 0, 0, 0.6)",
      zIndex: "20"
    },
    content: {
      position: "fixed",
      background: "white",
      maxWidth: "100%",
      width: "400px",
      height: "300px",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      padding: "20px 30px",
      borderRadius: "34px"
    }
  },
  [ModalSize.Normal]: {
    overlay: {
      background: "rgba(0, 0, 0, 0.6)",
      zIndex: "20"
    },
    content: {
      position: "fixed",
      background: "white",
      maxWidth: "80%",
      minWidth: "300px",
      minHeight: "200px",
      height: "auto",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      padding: "20px 30px",
      borderRadius: "34px"
    }
  }
};

interface ModalProps {
  show: boolean;
  handleClose: () => void;
  size?: ModalSize;
  afterOpenModal?: () => void;
}

class Modal extends React.Component<ModalProps> {
  render() {
    const size =
      this.props.size !== undefined ? this.props.size : ModalSize.Normal;
    return (
      <Popup
        isOpen={this.props.show}
        onAfterOpen={this.props.afterOpenModal}
        onRequestClose={this.props.handleClose}
        style={popupStyles[size]}
      >
        <Close
          className="material-icons close"
          onClick={this.props.handleClose}
        >
          close
        </Close>
        {this.props.children}
      </Popup>
    );
  }
}

export default Modal;
