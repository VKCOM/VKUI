import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { a11yBasicTest } from '../../testing/a11y';
import { WriteBarIcon } from './WriteBarIcon';

describe('WriteBarIcon', () => {
  a11yBasicTest((props) => <WriteBarIcon aria-label="WriteBarIcon" {...props} />);

  it('a11y: adds default aria-label for assigned mode', () => {
    render(<WriteBarIcon data-testid="button" mode="send" />);

    expect(screen.getByTestId('button')).toHaveAttribute('aria-label', 'Отправить');
  });
});
