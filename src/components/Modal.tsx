import * as React from "react";
import styled from "styled-components";
import Popup from "react-modal";

const Close = styled.i`
  float: right;
  font-size: 34px;
  cursor: pointer;
  padding: 10px;
  display: block;
`;

const popupStyles = {
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
};

class Modal extends React.Component {
  public props: any;

  public render() {
    const classnames = this.props.show ? "show" : "";

    return (
      <Popup
        isOpen={this.props.show}
        onAfterOpen={this.props.afterOpenModal}
        onRequestClose={this.props.handleClose}
        contentLabel="Example Modal"
        style={popupStyles}
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
