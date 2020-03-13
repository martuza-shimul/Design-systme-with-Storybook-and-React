import { createGlobalStyle } from "styled-components";
import { primaryFont } from "./typography";
import { normalize } from "polished";

export const GlobalStyle = createGlobalStyle`

${normalize()}

hmtl{
  font-size: 16px;
  box-sizing: border-box;
}
*, *:before,*:after{
  box-sizing: inherit
}

Body{
  margin: 0;
  font-family: ${primaryFont}
}

.main{
  width: 90%;
  margin: 0 auto;
}

`;
