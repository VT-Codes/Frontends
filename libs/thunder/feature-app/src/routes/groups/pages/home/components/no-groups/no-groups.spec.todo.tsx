import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { DarkTheme } from '@v-thomas/libs/thunder/themes';
import { NoGroups } from './no-groups';

describe('NoGroups', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ThemeProvider theme={DarkTheme}>
        <NoGroups />
      </ThemeProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
