import * as React from "react";
import styled from "styled-components";
import Popup from "react-modal";
import theme from "../theme";

export enum ModalSize {
  Small,
  Normal
}

const Close = styled.i`
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
      height: "250px",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      padding: "10px 20px",
      borderRadius: "34px",
      overflow: "hidden"
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
      padding: "10px 20px",
      borderRadius: "34px",
      overflow: "hidden"
    }
  }
};
const Header = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 0 0 10px;
`;

const Content = styled.div`
  height: calc(100% - 60px);
  width: 100%;
  overflow-y: auto;
  scrollbar-color: ${theme.colorGrey} transparent;
  scrollbar-width: thin;
  padding: 10px;

  &::-webkit-scrollbar {
    width: 0.5em;
  }

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${theme.colorGrey};
    outline: 1px solid ${theme.colorGrey};

    &:hover {
      background-color: #bbb;
    }
  }
`;

interface ModalProps {
  show: boolean;
  handleClose: () => void;
  title?: string;
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
        <Header>
          <h3>{this.props.title}</h3>
          <Close
            className="material-icons close"
            onClick={this.props.handleClose}
          >
            close
          </Close>
        </Header>
        <Content>{this.props.children}</Content>
      </Popup>
    );
  }
}

export default Modal;
