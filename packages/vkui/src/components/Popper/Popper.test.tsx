import * as React from 'react';
import { render } from '@testing-library/react';
import { waitForFloatingPosition } from '../../testing/utils';
import { Popper, type PopperProps } from './Popper';

const TestComponent = ({
  hideWhenReferenceHidden,
  ...restProps
}: Omit<PopperProps, 'targetRef'>) => {
  const ref = React.useRef<HTMLDivElement>(null);
  return (
    <div>
      <div ref={ref}>Reference element</div>
      <Popper
        targetRef={ref}
        hideWhenReferenceHidden={hideWhenReferenceHidden}
        data-testid="popper"
        {...restProps}
      >
        The popper content
      </Popper>
    </div>
  );
};

describe('Popper', () => {
  it('should use arrow', async () => {
    const result = render(<TestComponent arrow arrowProps={{ 'data-testid': 'arrow-element' }} />);
    await waitForFloatingPosition();
    expect(result.getByTestId('arrow-element')).toBeVisible();
  });

  it('should call onPlacementChange', async () => {
    const onPlacementChange = jest.fn();
    const result = render(
      <TestComponent placement="bottom" onPlacementChange={onPlacementChange} />,
    );
    await waitForFloatingPosition();

    expect(onPlacementChange).not.toHaveBeenCalled();

    result.rerender(<TestComponent placement="auto" onPlacementChange={onPlacementChange} />);
    await waitForFloatingPosition();

    expect(onPlacementChange).toHaveBeenCalledWith('top');
  });

  it('should use same width', async () => {
    const result = render(<TestComponent sameWidth />);
    await waitForFloatingPosition();
    expect(result.getByTestId('popper')).not.toHaveStyle('width: max-content');
    expect(result.getByTestId('popper')).toHaveStyle('width: 0'); // в окружении jest размер не будет высчитан, поэтому 0
  });

  it('should hides when reference is hidden', async () => {
    const result = render(<TestComponent hideWhenReferenceHidden={false} />);
    await waitForFloatingPosition();

    expect(result.getByTestId('popper')).toBeVisible();

    result.rerender(<TestComponent hideWhenReferenceHidden={true} />);
    await waitForFloatingPosition();

    expect(result.getByTestId('popper')).not.toBeVisible();
  });

  it('should render with virtual element', async () => {
    const result = render(
      <Popper
        targetRef={{
          getBoundingClientRect() {
            return DOMRect.fromRect({
              x: 10,
              y: 10,
              width: 100,
              height: 100,
            });
          },
        }}
        data-testid="popper"
      >
        Virtual element
      </Popper>,
    );
    await waitForFloatingPosition();
    expect(result.getByTestId('popper')).toBeVisible();
  });
});
