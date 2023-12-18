import { createGlobalStyle } from 'styled-components/macro';
import { StyleConstants } from './StyleConstants';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    /* font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; */
     /* padding-top: ${StyleConstants.NAV_BAR_HEIGHT}; */
    background-color: ${p => p.theme.background};
  }

  /* body.fontLoaded {
    font-family: 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  } */

  #root {
    min-height: 100%;
    min-width: 100%;
  }

  /* p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  input, select {
    font-family: inherit;
    font-size: inherit;
  } */
`;
