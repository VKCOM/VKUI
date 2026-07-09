import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { baselineComponent } from '../../testing/utils';
import { ColorSchemeProvider } from '../ColorSchemeProvider/ColorSchemeProvider';
import { Banner } from './Banner';
import styles from './Banner.module.css';

describe('Banner', () => {
  baselineComponent(Banner);

  it('imageTheme=auto', () => {
    render(
      <ColorSchemeProvider value="dark">
        <Banner
          title="Баста в Ледовом"
          subtitle="Большой концерт"
          mode="image"
          imageTheme="auto"
          data-testid="banner"
        />
      </ColorSchemeProvider>,
    );
    expect(screen.getByTestId('banner')).toHaveClass(styles.inverted);
  });

  it('string after', () => {
    render(<Banner title="Баста в Ледовом" data-testid="banner" after="After" />);
    expect(screen.getByText('After')).toBeInTheDocument();
  });
});
