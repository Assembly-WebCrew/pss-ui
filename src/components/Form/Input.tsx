import styled from "styled-components";
import theme from "../../theme";

const Input = styled.input`
  border-radius: 34px;
  padding: 10px 15px;
  border: 1px solid ${theme.colorGrey};
  margin: 5px;
  outline: none;

  &:focus {
    border-color: ${theme.colorLightBlue};
  }
`;

export default Input;
