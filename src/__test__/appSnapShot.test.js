import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import renderer from 'react-test-renderer';
import { store } from '../redux/configureStore';
import NavBar from '../components/NavBar/NavBar';
import Home from '../pages/Home';
import SubRegions from '../pages/SubRegions';
import CountryList from '../pages/CountryList';

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

  devices: {
    mobile: '567px',
    note: '767px',
    tab: '1024px',
    desktop: '1280px',
  },
};

it('Home Page renders correctly when there are no items', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Router>
            <Home />
          </Router>
        </ThemeProvider>
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('Nav Bar renders correctly when there are no items', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Router>
            <NavBar />
          </Router>
        </ThemeProvider>
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('Sub Regions Page renders correctly when there are no items', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Router>
            <SubRegions />
          </Router>
        </ThemeProvider>
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('Countrly List renders correctly when there are no items', async () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Router>
            <CountryList />
          </Router>
        </ThemeProvider>
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
