import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { ThemeProvider } from 'styled-components';
import './index.css';
import App from './App';
import { store, persistor } from './redux/configureStore';
import NavBar from './components/NavBar/NavBar';

const theme = {
  colors: {
    bg: '#2f4454',
    shadow: '#c8c8c8',
    text: '#fefefe',
    coffee: '#2e151b',
    pink: '#da7b93',
    cyan: '#376e6f',
    semiCyan: '#376e6faa',
    dark: '#1c3334',
    semiDark: '#1c333444',
  },

  colors1: {
    lightPrimary: '#a86add',
    primary: '#8549a7',
    blackTwo: '#121212',
    textMediumColor: '#555',
    textLightColor: '#777',
    backgroundColor: '#fff',
    grey: '#e8e8e8',
    shadowColor: '#c8c8c8',
  },

  colors2: {
    bubbleGumPink: '#ff5ab7',
    blackTwo: '#1e1e1e',
    black1: '#000',
    pinkishGrey: '#c4c4c4',
    blackOne: '#121212',
    greyBorder: ' #e8e8e8,',
    coolBlue: '#4386bf',
    pinkishGrey2: '#c7c7c7',
    paleGrey: '#f5f6fa',
    dirtyWhite: ' #fafafa',
    warmGrey: '#888',
    azure: ' #0290ff',
  },

  devices: {
    mobile: '567px',
    note: '767px',
    tab: '1024px',
    desktop: '1280px',
  },
};

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <Router>
            <NavBar />
            <App />
          </Router>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
