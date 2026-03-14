import { render } from '@testing-library/react';
import { noop } from '@vkontakte/vkjs';
import { baselineComponent } from '../../testing/utils';
import { ScrollContext } from '../AppRoot/ScrollContext';
import { PopoutWrapper, type PopoutWrapperProps } from './PopoutWrapper';
import styles from './PopoutWrapper.module.css';

describe(PopoutWrapper, () => {
  baselineComponent(PopoutWrapper);

  describe('opened state', () => {
    it('should be opened by default', () => {
      const result = render(<PopoutWrapper data-testid="popout-wrapper" />);
      const locator = result.getByTestId('popout-wrapper');
      expect(locator).not.toHaveClass(styles.closing);
      expect(locator).toHaveClass(styles.opened);
    });

    it('should be closed if closing={true}', () => {
      const result = render(<PopoutWrapper closing={true} data-testid="popout-wrapper" />);
      const locator = result.getByTestId('popout-wrapper');
      expect(locator).not.toHaveClass(styles.opened);
      expect(locator).toHaveClass(styles.closing);
    });

    const strategyClassNames = [styles.fixed, styles.absolute];
    it.each<{ strategy?: PopoutWrapperProps['strategy']; fixed?: boolean; className: string }>([
      {
        strategy: 'none',
        className: '',
      },
      {
        strategy: 'fixed',
        className: styles.fixed,
      },
      {
        strategy: 'absolute',
        className: styles.absolute,
      },
      {
        className: styles.fixed,
      },
    ])('should have className $className when use strategy $strategy, fixed $fixed', ({
      strategy,
      className,
    }) => {
      const result = render(<PopoutWrapper strategy={strategy} data-testid="popout-wrapper" />);
      const locator = result.getByTestId('popout-wrapper');
      className && expect(locator).toHaveClass(className);
      const filteredClassNames = strategyClassNames.filter((cn) => cn !== className).join(' ');
      expect(locator).not.toHaveClass(filteredClassNames);
    });
  });

  describe('scroll lock', () => {
    it('should disable scroll', () => {
      const incrementScrollLockCounter = vi.fn();
      render(
        <ScrollContext.Provider
          value={{
            getScroll: () => ({ x: 0, y: 0 }),
            scrollTo: noop,
            incrementScrollLockCounter,
            decrementScrollLockCounter: noop,
          }}
        >
          <PopoutWrapper data-testid="popout-wrapper" scrollLock />
        </ScrollContext.Provider>,
      );

      expect(incrementScrollLockCounter).toHaveBeenCalledTimes(1);
    });
  });
});
