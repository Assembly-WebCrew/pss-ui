import styled from "styled-components";
import theme from "../theme";

export const Loading = styled.div`
  display: inline-block;
  position: relative;
  width: 26px;
  height: 26px;

  &:after {
    content: " ";
    display: block;
    border-radius: 50%;
    width: 0;
    height: 0;
    margin: 3px;
    box-sizing: border-box;
    border: 10px solid ${theme.colorBlue};
    border-color: ${theme.colorBlue} transparent ${theme.colorBlue} transparent;
    animation: loading 1.2s infinite;
  }
  @keyframes loading {
    0% {
      transform: rotate(0);
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    50% {
      transform: rotate(900deg);
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    100% {
      transform: rotate(1800deg);
    }
  }
`;
