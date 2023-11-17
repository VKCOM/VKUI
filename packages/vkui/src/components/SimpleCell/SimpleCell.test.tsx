import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { baselineComponent } from '../../testing/utils';
import { AdaptivityProvider } from '../AdaptivityProvider/AdaptivityProvider';
import { SimpleCell } from './SimpleCell';

describe('SimpleCell', () => {
  baselineComponent((props) => <SimpleCell {...props}>SimpleCell</SimpleCell>);

  it('[typography] indicator is a span regardless of sizeY', () => {
    const { rerender } = render(
      <AdaptivityProvider sizeY="regular">
        <SimpleCell indicator="Русский">Язык</SimpleCell>
      </AdaptivityProvider>,
    );
    expect(screen.getByText('Русский').tagName.toLowerCase()).toMatch('span');

    rerender(
      <AdaptivityProvider sizeY="compact">
        <SimpleCell indicator="English">Language</SimpleCell>
      </AdaptivityProvider>,
    );
    expect(screen.getByText('English').tagName.toLowerCase()).toMatch('span');
  });
});
