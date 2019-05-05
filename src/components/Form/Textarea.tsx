import styled from "styled-components";
import theme from "../../theme";

const Textarea = styled.textarea`
  border-radius: 34px;
  padding: 10px 15px;
  border: 1px solid ${theme.colorGrey};
  margin: 5px;
  outline: none;
  min-height: 60px;

  &:focus {
    border-color: ${theme.colorLightBlue};
  }
`;

export default Textarea;
