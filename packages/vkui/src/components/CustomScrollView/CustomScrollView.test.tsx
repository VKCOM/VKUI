import { render, screen } from '@testing-library/react';
import { baselineComponent } from '../../testing/utils';
import { CustomScrollView } from './CustomScrollView';
import styles from './CustomScrollView.module.css';

describe(CustomScrollView, () => {
  baselineComponent(CustomScrollView);

  it('should have overscroll specific className', () => {
    const getBoxElement = () => screen.getByTestId('scroll-view');

    const { rerender } = render(
      <CustomScrollView data-testid="scroll-view" enableHorizontalScroll>
        <span>content</span>
      </CustomScrollView>,
    );

    expect(getBoxElement()).not.toHaveClass(styles.boxOverscrollBehaviorContain);
    expect(getBoxElement()).not.toHaveClass(styles.boxOverscrollBehaviorNone);

    rerender(
      <CustomScrollView data-testid="scroll-view" overscrollBehavior="contain">
        <span>content</span>
      </CustomScrollView>,
    );

    expect(getBoxElement()).toHaveClass(styles.boxOverscrollBehaviorContain);
    expect(getBoxElement()).not.toHaveClass(styles.boxOverscrollBehaviorNone);

    rerender(
      <CustomScrollView data-testid="scroll-view" overscrollBehavior="none">
        <span>content</span>
      </CustomScrollView>,
    );

    expect(getBoxElement()).not.toHaveClass(styles.boxOverscrollBehaviorContain);
    expect(getBoxElement()).toHaveClass(styles.boxOverscrollBehaviorNone);
  });
});
