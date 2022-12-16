import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { a11yTest, baselineComponent } from '../../testing/utils';
import { WriteBarIcon } from './WriteBarIcon';

describe('WriteBarIcon', () => {
  /*
   * a11y: Buttons must have discernible text (button-name)
   *       мы не можем задать компоненту дефолтный aria-label,
   *       поэтому фиксим тест тем, что передаем его сами
   */
  baselineComponent((p) => <WriteBarIcon aria-label="WriteBarIcon" {...p} />);

  it('shows counter when count={0} is provided', () => {
    const count = 0;

    render(<WriteBarIcon mode="attach" count={0} />);
    const counter = screen.getByText(count.toString());

    expect(counter).toBeInTheDocument();
  });

  a11yTest('a11y: has no violations when mode is assigned', (p) => (
    <WriteBarIcon mode="attach" {...p} />
  ));
});
