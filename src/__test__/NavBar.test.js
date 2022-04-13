import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import NavBar from '../components/NavBar/NavBar';

it('the component navbar should be in the document', async () => {
  render(
    <ThemeProvider theme={theme}>
      <Router>
        <NavBar />
      </Router>
    </ThemeProvider>,
  );
  const logoElement = screen.getByText(/COVID/);
  expect(logoElement).toBeInTheDocument();
});
