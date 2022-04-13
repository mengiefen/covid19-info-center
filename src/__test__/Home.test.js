import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import Home from '../pages/Home';

it('the home component shoudl have six cards', async () => {
  render(
    <ThemeProvider theme={theme}>
      <Router>
        <Home />
      </Router>
    </ThemeProvider>,
  );
  const home = await screen.getAllByRole('heading', { level: 3 });
  expect(home).toHaveLength(6);
});
