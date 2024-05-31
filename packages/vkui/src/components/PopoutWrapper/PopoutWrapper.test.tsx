import { render } from '@testing-library/react';
import { baselineComponent, fakeTimers } from '../../testing/utils';
import { PopoutWrapper } from './PopoutWrapper';
import styles from './PopoutWrapper.module.css';

describe(PopoutWrapper, () => {
  baselineComponent(PopoutWrapper);

  describe('opened state', () => {
    fakeTimers();

    it('should be opened by default', () => {
      const result = render(<PopoutWrapper data-testid="popout-wrapper" />);
      const locator = result.getByTestId('popout-wrapper');
      expect(locator).not.toHaveClass(styles['PopoutWrapper--closing']);
      expect(locator).toHaveClass(styles['PopoutWrapper--opened']);
    });

    it('should be closed if closing={true}', () => {
      const result = render(<PopoutWrapper closing={true} data-testid="popout-wrapper" />);
      const locator = result.getByTestId('popout-wrapper');
      expect(locator).not.toHaveClass(styles['PopoutWrapper--opening']);
      expect(locator).toHaveClass(styles['PopoutWrapper--closing']);
    });
  });
});
