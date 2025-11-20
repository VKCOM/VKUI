import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { useGlobalOnClickOutside, useGlobalOnEventOutside } from './useGlobalOnClickOutside';

interface WrapperUseGlobalOnClickOutsideProps {
  disableTarget?: 'target-1' | 'target-2';
  disableAllTarget?: boolean;
  globalClickHandler: () => void;
  useGlobalOnClickOutsideImpl: typeof useGlobalOnClickOutside;
}

const WrapperUseGlobalOnClickOutside = ({
  disableTarget,
  disableAllTarget = false,
  globalClickHandler,
  useGlobalOnClickOutsideImpl,
}: WrapperUseGlobalOnClickOutsideProps) => {
  const target1Ref = React.createRef<HTMLDivElement>();
  const target2Ref = React.createRef<HTMLDivElement>();

  // eslint-disable-next-line react-compiler/react-compiler
  useGlobalOnClickOutsideImpl(
    globalClickHandler,
    disableAllTarget || disableTarget === 'target-1' ? null : target1Ref,
    disableAllTarget || disableTarget === 'target-2' ? null : target2Ref,
  );

  return (
    <div data-testid="root">
      <div data-testid="outside" />
      <div data-testid="target-1" ref={target1Ref}></div>
      <div data-testid="target-2" ref={target2Ref}>
        <div data-testid="target-2-child" />
      </div>
    </div>
  );
};

const useGlobalOnMouseDownOutside = <
  T extends React.RefObject<ElementType | null> | undefined | null,
  ElementType extends Element = Element,
>(
  callback: (event: MouseEvent) => void,
  ...refs: T[]
): void => {
  useGlobalOnEventOutside('mousedown', callback, ...refs);
};

describe.each([
  ['click', useGlobalOnClickOutside],
  ['mousedown', useGlobalOnMouseDownOutside],
])('check for %s', (event, hook) => {
  const targetEvent = (element: HTMLElement) => {
    (event === 'click' ? fireEvent.click : fireEvent.mouseDown)(element);
  };

  it('should works with multiple refs provided', () => {
    const globalClickHandler = vi.fn();
    const result = render(
      <WrapperUseGlobalOnClickOutside
        globalClickHandler={globalClickHandler}
        useGlobalOnClickOutsideImpl={hook}
      />,
    );

    targetEvent(result.getByTestId('target-1'));
    targetEvent(result.getByTestId('target-2'));
    targetEvent(result.getByTestId('target-2-child'));
    expect(globalClickHandler).not.toHaveBeenCalled();

    targetEvent(document.documentElement);
    targetEvent(result.getByTestId('root'));
    targetEvent(result.getByTestId('outside'));
    expect(globalClickHandler).toHaveBeenCalledTimes(3);
  });

  it('should work with one ref provided', () => {
    const globalClickHandler = vi.fn();
    const result = render(
      <WrapperUseGlobalOnClickOutside
        globalClickHandler={globalClickHandler}
        disableTarget="target-1"
        useGlobalOnClickOutsideImpl={hook}
      />,
    );

    targetEvent(result.getByTestId('target-1'));
    targetEvent(result.getByTestId('target-2'));
    expect(globalClickHandler).toHaveBeenCalledTimes(1);

    result.rerender(
      <WrapperUseGlobalOnClickOutside
        globalClickHandler={globalClickHandler}
        useGlobalOnClickOutsideImpl={hook}
      />,
    );

    targetEvent(result.getByTestId('target-1'));
    targetEvent(result.getByTestId('target-2'));
    targetEvent(document.documentElement);
    targetEvent(result.getByTestId('root'));
    targetEvent(result.getByTestId('outside'));
    expect(globalClickHandler).toHaveBeenCalledTimes(4);
  });

  it('should clear events if no refs provided', () => {
    const globalClickHandler = vi.fn();

    const result = render(
      <WrapperUseGlobalOnClickOutside
        globalClickHandler={globalClickHandler}
        useGlobalOnClickOutsideImpl={hook}
      />,
    );

    targetEvent(result.getByTestId('target-2'));
    expect(globalClickHandler).not.toHaveBeenCalled();

    targetEvent(result.getByTestId('outside'));
    expect(globalClickHandler).toHaveBeenCalledTimes(1);

    result.rerender(
      <WrapperUseGlobalOnClickOutside
        globalClickHandler={globalClickHandler}
        disableAllTarget
        useGlobalOnClickOutsideImpl={hook}
      />,
    );

    targetEvent(result.getByTestId('target-2'));
    targetEvent(result.getByTestId('outside'));
    expect(globalClickHandler).toHaveBeenCalledTimes(1);
  });
});
