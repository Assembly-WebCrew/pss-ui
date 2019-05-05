import * as React from "react";
import styled from "styled-components";
import theme from "../../theme";

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${theme.colorGrey};
  transition: 0.4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }
`;
const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`;
const Checkbox = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${Slider} {
    background-color: ${theme.colorBlue};

    &:before {
      transform: translateX(26px);
    }
  }
  &:focus + ${Slider} {
    box-shadow: 0 0 1px ${theme.colorBlue};
  }
`;

interface ToggleProps {
  selected?: boolean;
  name?: string;
}

const Toggle: React.FunctionComponent<ToggleProps> = props => {
  return (
    <Switch>
      <Checkbox type="checkbox" name={props.name} checked={props.selected} />
      <Slider />
    </Switch>
  );
};

export default Toggle;
