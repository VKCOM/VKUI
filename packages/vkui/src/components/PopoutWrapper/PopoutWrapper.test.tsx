import * as React from 'react';
import { render } from '@testing-library/react';
import { baselineComponent, fakeTimers, runAllTimers } from '../../testing/utils';
import { PopoutWrapper } from './PopoutWrapper';
import styles from './PopoutWrapper.module.css';

describe(PopoutWrapper, () => {
  baselineComponent(PopoutWrapper);

  describe('opened state', () => {
    fakeTimers();

    it('should be opened immediately if no mask', () => {
      const result = render(<PopoutWrapper data-testid="popout-wrapper" hasMask={false} />);
      expect(result.getByTestId('popout-wrapper')).toHaveClass(styles['PopoutWrapper--opened']);
    });

    it('should be opened after animation if has mask', () => {
      const result = render(<PopoutWrapper data-testid="popout-wrapper" hasMask />);
      const locator = result.getByTestId('popout-wrapper');
      expect(locator).not.toHaveClass(styles['PopoutWrapper--opened']);
      runAllTimers();
      expect(locator).toHaveClass(styles['PopoutWrapper--opened']);
    });
  });
});
