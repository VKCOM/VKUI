import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { noop } from '@vkontakte/vkjs';
import { baselineComponent } from '../../testing/utils';
import { ScrollArrow } from './ScrollArrow';
import styles from './ScrollArrow.module.css';

describe(ScrollArrow, () => {
  baselineComponent((props) => <ScrollArrow direction="left" {...props} />);

  it('should have HTML style attribute for offsetY prop', () => {
    const offsetY = 10;
    const { container } = render(<ScrollArrow direction="left" offsetY={offsetY} onClick={noop} />);
    const elIcon = container.querySelector(`.${styles['ScrollArrow__icon']}`);
    expect(elIcon).toHaveStyle({ top: `${offsetY}px` });
  });

  it('should have type="button" by default', () => {
    render(<ScrollArrow direction="left" onClick={noop} />);
    expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
  });
});
