import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { NoMovies } from './no-movies';
import { DarkTheme } from '@v-thomas/shared/themes';

describe('NoMovies', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ThemeProvider theme={DarkTheme}>
        <NoMovies />
      </ThemeProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
