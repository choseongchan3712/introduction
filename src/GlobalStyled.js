import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyled = createGlobalStyle`
${reset};

* {
  box-sizing: border-box;
}

img {
  width: 100%;
  display: block;
}

a {
  text-decoration: none;
}

:root {
  --main-color: #1C1C1C;
  --box-color: #292929;
  --font-color: #fff;
  --point-light: #D4AF37;
  --point-dark: #B8860B;
  --border-color: #000;
}
`;
