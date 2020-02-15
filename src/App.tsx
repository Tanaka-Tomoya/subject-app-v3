import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider as MaterialThemeProvider } from '@material-ui/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline';
import Page from '@/pages/Page';
import theme from './utils/theme';

const App = () => (
  <MaterialThemeProvider theme={theme}>
    <StyledThemeProvider theme={theme}>
      <CssBaseline>
        <Page />
      </CssBaseline>
    </StyledThemeProvider>
  </MaterialThemeProvider>
);
ReactDOM.render(<App />, document.getElementById('app'));
