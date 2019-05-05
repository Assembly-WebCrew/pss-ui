import * as React from "react";
import styled from "styled-components";
import theme from "../theme";

const StyledButton = styled.button`
  background-color: transparent;
  border-radius: 34px;
  border: 1px solid ${theme.colorGrey};
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 600;
  outline: none;
  overflow: hidden;
  padding: 0;
  cursor: pointer;
`;

const BlueButton = styled(StyledButton)`
  background-color: ${theme.colorLightBlue};
  color: white;
  border-color: ${theme.colorBlue};
`;

const Content = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 10px 15px;
  position: relative;

  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    background-color: #fafafa;
    transform: translateY(100%);
    transition: transform 0.2s ease-in-out;
  }

  ${StyledButton}:hover &:after {
    transform: translateY(0);
  }
`;

export enum ButtonStyle {
  Normal,
  Blue
}

interface ButtonProps {
  type?: "submit" | "button";
  onClick?: (event: any) => void;
  style?: ButtonStyle;
}

const Button: React.FunctionComponent<ButtonProps> = props => {
  const { type, onClick, children, style, ...rest } = props;
  switch (style) {
    case ButtonStyle.Blue:
      return (
        <BlueButton type={type || "button"} onClick={onClick} {...rest}>
          <Content>{children}</Content>
        </BlueButton>
      );
    default:
      return (
        <StyledButton type={type || "button"} onClick={onClick} {...rest}>
          <Content>{children}</Content>
        </StyledButton>
      );
  }
};

export default Button;
