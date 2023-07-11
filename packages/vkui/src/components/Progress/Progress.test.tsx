import React from 'react';
import { render, screen } from '@testing-library/react';
import { baselineComponent } from '../../testing/utils';
import { Progress } from './Progress';

describe('Progress', () => {
  baselineComponent(Progress);

  it('Custom height', () => {
    render(<Progress data-testid="progress" height={10} />);

    expect(screen.getByTestId('progress').style.height).toBe('10px');
    expect(screen.getByTestId('progress').style.borderRadius).toBe('5px');
  });
});
