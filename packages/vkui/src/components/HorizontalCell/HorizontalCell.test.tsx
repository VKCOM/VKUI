import { render, screen } from '@testing-library/react';
import { baselineComponent } from '../../testing/utils';
import { CUSTOM_CSS_TOKEN_FOR_CELL_WIDTH, HorizontalCell } from './HorizontalCell';
import styles from './HorizontalCell.module.css';

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

  it('should use custom size', () => {
    const h = render(<HorizontalCell size={100} title="Image" />);
    expect(h.container.firstElementChild).toHaveStyle(`${CUSTOM_CSS_TOKEN_FOR_CELL_WIDTH}: 100px`);
  });

  it('should preserve user style', () => {
    const h = render(<HorizontalCell size={100} style={{ background: 'red' }} />);
    expect(h.container.firstElementChild).toHaveStyle(
      `background: red; ${CUSTOM_CSS_TOKEN_FOR_CELL_WIDTH}: 100px`,
    );
  });
});
