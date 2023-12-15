import * as React from 'react';
import { render } from '@testing-library/react';
import { baselineComponent, fakeTimers, runAllTimers } from '../../testing/utils';
import { PopoutWrapper } from './PopoutWrapper';
import styles from './PopoutWrapper.module.css';

describe(PopoutWrapper, () => {
  baselineComponent(PopoutWrapper);

  describe('opened state', () => {
    fakeTimers();

    it('should be opened immediately if noBackground', () => {
      const result = render(<PopoutWrapper data-testid="popout-wrapper" noBackground />);
      expect(result.getByTestId('popout-wrapper')).toHaveClass(styles['PopoutWrapper--opened']);
    });

    it('should be opened after animation by default', () => {
      const result = render(<PopoutWrapper data-testid="popout-wrapper" />);
      const locator = result.getByTestId('popout-wrapper');
      expect(locator).not.toHaveClass(styles['PopoutWrapper--opened']);
      runAllTimers();
      expect(locator).toHaveClass(styles['PopoutWrapper--opened']);
    });
  });
});
