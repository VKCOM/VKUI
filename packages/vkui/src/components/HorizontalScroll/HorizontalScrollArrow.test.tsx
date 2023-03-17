import * as React from 'react';
import { render } from '@testing-library/react';
import { noop } from '@vkontakte/vkjs';
import { baselineComponent } from '../../testing/utils';
import { HorizontalScrollArrow } from './HorizontalScrollArrow';
import styles from './HorizontalScrollArrow.module.css';

describe(HorizontalScrollArrow, () => {
  baselineComponent(HorizontalScrollArrow);

  it('should have HTML style attribute for offsetY prop', () => {
    const offsetY = 10;
    const { container } = render(
      <HorizontalScrollArrow direction="left" offsetY={offsetY} onClick={noop} />,
    );
    const elIcon = container.querySelector(`.${styles['HorizontalScrollArrow__icon']}`);
    expect(elIcon).toHaveStyle({ top: `${offsetY}px` });
  });
});
