import { render, screen } from '@testing-library/react';
import { baselineComponent } from '../../../testing/utils';
import { EllipsisText } from './EllipsisText';
import styles from './EllipsisText.module.css';

describe('EllipsisText', () => {
  baselineComponent((props) => <EllipsisText {...props}>EllipsisText</EllipsisText>);

  it('should have specific className when maxLines > 1', async () => {
    render(
      <EllipsisText maxLines={2} data-testid="text-wrapper">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </EllipsisText>,
    );

    const text = screen.getByTestId('text-wrapper').firstElementChild as HTMLElement;
    expect(text).not.toBeNull();
    expect(text).toHaveClass(styles.contentMultiline);
  });
});
