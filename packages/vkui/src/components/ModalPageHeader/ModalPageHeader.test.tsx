import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { baselineComponent } from '../../testing/utils';
import { ModalPageHeader } from './ModalPageHeader';

describe('ModalPageHeader', () => {
  baselineComponent((props) => <ModalPageHeader {...props}>ModalPageHeader</ModalPageHeader>);

  test('typographyProps can be partially overriden', () => {
    const { rerender } = render(<ModalPageHeader>Стартовый экран</ModalPageHeader>);

    expect(screen.queryByRole('heading', { level: 2, name: 'Стартовый экран' })).toBeTruthy();
    expect(screen.queryByTestId('header-text-id')).toBeFalsy();

    rerender(
      <ModalPageHeader typographyProps={{ 'data-testid': 'header-text-id' }}>
        Стартовый экран
      </ModalPageHeader>,
    );

    // cвойства по-умолчанию не сбросились
    expect(screen.queryByRole('heading', { level: 2, name: 'Стартовый экран' })).toBeTruthy();
    expect(screen.queryByTestId('header-text-id')).toBeTruthy();

    rerender(
      <ModalPageHeader typographyProps={{ 'Component': 'h3', 'data-testid': 'header-text-id' }}>
        Стартовый экран
      </ModalPageHeader>,
    );

    expect(screen.queryByRole('heading', { level: 2, name: 'Стартовый экран' })).toBeFalsy();
    expect(screen.queryByRole('heading', { level: 3, name: 'Стартовый экран' })).toBeTruthy();
    expect(screen.queryByTestId('header-text-id')).toBeTruthy();
  });
});
