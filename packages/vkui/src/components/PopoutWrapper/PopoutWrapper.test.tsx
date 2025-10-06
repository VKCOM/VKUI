import { render } from '@testing-library/react';
import { baselineComponent } from '../../testing/utils';
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
        fixed: false,
        className: '',
      },
      {
        fixed: true,
        className: styles.fixed,
      },
      {
        className: styles.fixed,
      },
    ])(
      'should have className $className when use strategy $strategy, fixed $fixed',
      ({ strategy, fixed, className }) => {
        const result = render(
          <PopoutWrapper strategy={strategy} fixed={fixed} data-testid="popout-wrapper" />,
        );
        const locator = result.getByTestId('popout-wrapper');
        className && expect(locator).toHaveClass(className);
        const filteredClassNames = strategyClassNames.filter((cn) => cn !== className).join(' ');
        expect(locator).not.toHaveClass(filteredClassNames);
      },
    );
  });
});
