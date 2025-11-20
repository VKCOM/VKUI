import { createRef } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { baselineComponent } from '../../testing/utils';
import { SplitLayout } from './SplitLayout';

describe('SplitLayout', () => {
  baselineComponent(SplitLayout);

  it('should work with slotProps', () => {
    const rootRef1 = createRef<HTMLDivElement>();
    const rootRef2 = createRef<HTMLDivElement>();
    const contentRef1 = createRef<HTMLDivElement>();
    const contentRef2 = createRef<HTMLDivElement>();
    const onClick1 = vi.fn();
    const onClick2 = vi.fn();
    const onRootClick = vi.fn();

    render(
      <SplitLayout
        data-testid="root"
        className="rootClassName"
        getRootRef={rootRef1}
        getRef={contentRef1}
        onClick={onClick1}
        style={{
          backgroundColor: 'rgb(255, 0, 0)',
        }}
        slotProps={{
          root: {
            'data-testid': 'root-2',
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
            'style': {
              color: 'rgb(255, 0, 0)',
            },
            'data-testid': 'content',
            'onClick': onClick2,
          },
        }}
      />,
    );

    const content = screen.getByTestId('content');
    expect(content).toBeInTheDocument();
    expect(content).toHaveStyle('color: rgb(255, 0, 0)');
    expect(content).toHaveClass('contentClassName');

    const root = screen.getByTestId('root-2');
    expect(root).toBeInTheDocument();
    expect(root).toHaveClass('rootClassName');
    expect(root).toHaveClass('rootClassName-2');
    expect(root).toHaveStyle('color: rgb(255, 0, 0)');
    expect(root).toHaveStyle('background-color: rgb(255, 0, 0)');

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
});
