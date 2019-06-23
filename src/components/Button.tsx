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
  transition: background-color 0.2s ease;

  &:not(:disabled):hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const BlueButton = styled(StyledButton)`
  background-color: ${theme.colorLightBlue};
  color: white;
  border-color: ${theme.colorBlue};

  &:not(:disabled):hover {
    background-color: ${theme.colorBlue};
  }
`;

const LinkButton = styled(StyledButton)`
  background-color: transparent;
  color: ${theme.colorBlue};
  text-transform: none;
  border: 0;
  border-radius: 0;
  outline: 0;
  font-weight: normal;
  font-size: 13px;
  text-decoration: underline;

  &:not(:disabled):hover {
    background-color: transparent;
    color: ${theme.colorDarkBlue};
  }
`;

const Content = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 10px 15px;
`;

export enum ButtonStyle {
  Normal,
  Blue,
  Link
}

interface ButtonProps {
  type?: "submit" | "button";
  onClick?: (event: any) => void;
  style?: ButtonStyle;
  disabled?: boolean;
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
    case ButtonStyle.Link:
      return (
        <LinkButton type={type || "button"} onClick={onClick} {...rest}>
          <Content>{children}</Content>
        </LinkButton>
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
