import styled from "styled-components";
import theme from "../theme";

const Input = styled.input`
  border-radius: 34px;
  padding: 10px 15px;
  border: 1px solid ${theme.greyBorder};
  margin: 5px;
  outline: none;

  &:focus {
    border-color: ${theme.blueBorder};
  }
`;

export default Input;
