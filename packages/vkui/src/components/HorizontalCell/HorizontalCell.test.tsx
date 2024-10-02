import { render, screen } from '@testing-library/react';
import { baselineComponent } from '../../testing/utils';
import { HorizontalCell } from './HorizontalCell';
import styles from './HorizontaCell.module.css';

describe('HorizontalCell', () => {
  baselineComponent((props) => <HorizontalCell {...props}>HorizontalCell</HorizontalCell>);

  test('content part is not rendered if there is nothing to render', () => {
    const { rerender } = render(
      <HorizontalCell size="s">
        <div>Children data</div>
      </HorizontalCell>,
    );

    expect(screen.queryByText('Children data')).toBeTruthy();
    expect(document.querySelector(`.${styles.content}`)).toBeNull();

    rerender(
      <HorizontalCell size="s" title="Author name">
        <div>Children data</div>
      </HorizontalCell>,
    );

    expect(document.querySelector(`.${styles.content}`)).not.toBeNull();
  });
});
