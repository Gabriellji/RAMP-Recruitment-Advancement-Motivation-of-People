  
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  outline: none;
  font-family: Inter, sans-serif;
}
&::-webkit-scrollbar{
  display:none
}
`;