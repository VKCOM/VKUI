import { createRef } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { baselineComponent } from '../../testing/utils';
import { CUSTOM_CSS_TOKEN_FOR_CELL_WIDTH, HorizontalCell } from './HorizontalCell';
import styles from './HorizontalCell.module.css';

describe('HorizontalCell', () => {
  baselineComponent((props) => <HorizontalCell {...props}>HorizontalCell</HorizontalCell>);

  it('should work with slotProps', () => {
    const rootRef1 = createRef<HTMLDivElement>();
    const rootRef2 = createRef<HTMLDivElement>();
    const contentRef1 = createRef<HTMLDivElement>();
    const contentRef2 = createRef<HTMLDivElement>();
    const onClick1 = vi.fn();
    const onClick2 = vi.fn();
    const onRootClick = vi.fn();

    render(
      <HorizontalCell
        data-testid="content"
        className="rootClassName"
        getRootRef={rootRef1}
        getRef={contentRef1}
        onClick={onClick1}
        style={{
          backgroundColor: 'rgb(255, 0, 0)',
        }}
        slotProps={{
          root: {
            'data-testid': 'root',
            'className': 'rootClassName-2',
            'style': {
              color: 'rgb(255, 0, 0)',
            },
            'getRootRef': rootRef2,
            'onClick': onRootClick,
          },
          content: {
            'className': 'contentClassName',
            'getRootRef': contentRef2,
            'data-testid': 'content-2',
            'onClick': onClick2,
          },
        }}
      />,
    );

    expect(screen.queryByTestId('content')).not.toBeInTheDocument();
    const content = screen.getByTestId('content-2');
    expect(content).toBeInTheDocument();
    expect(content).toHaveClass('contentClassName');

    const root = screen.getByTestId('root');
    expect(root).toBeInTheDocument();
    expect(root).toHaveClass('rootClassName');
    expect(root).toHaveClass('rootClassName-2');
    expect(root).toHaveStyle('background-color: rgb(255, 0, 0)');
    expect(root).toHaveStyle('color: rgb(255, 0, 0)');

    expect(rootRef1.current).toBe(rootRef2.current);
    expect(rootRef1.current).toBe(root);

    expect(contentRef1.current).toBe(contentRef2.current);
    expect(contentRef1.current).toBe(content);

    fireEvent.click(content);
    expect(onClick1).toHaveBeenCalledTimes(1);
    expect(onClick2).toHaveBeenCalledTimes(1);

    fireEvent.click(root);
    expect(onRootClick).toHaveBeenCalledTimes(2);
  });

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
