import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import { rootFontSize } from './utils/responsive';

import '@fontsource/dm-sans';
import '@fontsource/dm-sans/500.css';
import '@fontsource/dm-sans/700.css';

const GlobalStyle = createGlobalStyle`
  ${normalize};
  * {
    box-sizing: border-box;
  }
  body {
    font-family: "DM Sans", -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
    "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;
    font-size: ${rootFontSize}
  }
  #__next {
    display: flex;
    min-height: 100vh;

    > * {
      flex: 1;
    }
  }
  p, h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }
`;

export default GlobalStyle;
