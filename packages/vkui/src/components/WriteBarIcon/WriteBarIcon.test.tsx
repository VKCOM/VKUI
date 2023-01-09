import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { baselineComponent } from '../../testing/utils';
import { WriteBarIcon, WriteBarIconProps } from './WriteBarIcon';

const WriteBarIconTest = (props: WriteBarIconProps) => (
  <WriteBarIcon data-testid="button" {...props} />
);
const button = () => screen.getByTestId('button');

describe('WriteBarIcon', () => {
  baselineComponent(WriteBarIcon);

  it('shows counter when count={0} is provided', () => {
    const count = 0;

    render(<WriteBarIconTest mode="attach" count={0} />);
    const counter = screen.getByText(count.toString());

    expect(counter).toBeInTheDocument();
  });

  it('a11y: adds default aria-label for assigned mode', () => {
    render(<WriteBarIconTest mode="send" />);

    expect(button()).toHaveAttribute('aria-label', 'Отправить');
  });
});
