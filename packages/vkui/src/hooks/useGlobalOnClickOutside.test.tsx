import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { useGlobalOnClickOutside } from './useGlobalOnClickOutside';

interface WrapperUseGlobalOnClickOutsideProps {
  disableTarget?: 'target-1' | 'target-2';
  disableAllTarget?: boolean;
  globalClickHandler(): void;
}

const WrapperUseGlobalOnClickOutside = ({
  disableTarget,
  disableAllTarget = false,
  globalClickHandler,
}: WrapperUseGlobalOnClickOutsideProps) => {
  const target1Ref = React.createRef<HTMLDivElement>();
  const target2Ref = React.createRef<HTMLDivElement>();

  useGlobalOnClickOutside(
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

describe(useGlobalOnClickOutside, () => {
  it('should works with multiple refs provided', () => {
    const globalClickHandler = jest.fn();
    const result = render(
      <WrapperUseGlobalOnClickOutside globalClickHandler={globalClickHandler} />,
    );

    fireEvent.click(result.getByTestId('target-1'));
    fireEvent.click(result.getByTestId('target-2'));
    fireEvent.click(result.getByTestId('target-2-child'));
    expect(globalClickHandler).not.toHaveBeenCalled();

    fireEvent.click(document.documentElement);
    fireEvent.click(result.getByTestId('root'));
    fireEvent.click(result.getByTestId('outside'));
    expect(globalClickHandler).toHaveBeenCalledTimes(3);
  });

  it('should work with one ref provided', () => {
    const globalClickHandler = jest.fn();
    const result = render(
      <WrapperUseGlobalOnClickOutside
        globalClickHandler={globalClickHandler}
        disableTarget="target-1"
      />,
    );

    fireEvent.click(result.getByTestId('target-1'));
    fireEvent.click(result.getByTestId('target-2'));
    expect(globalClickHandler).toHaveBeenCalledTimes(1);

    result.rerender(<WrapperUseGlobalOnClickOutside globalClickHandler={globalClickHandler} />);

    fireEvent.click(result.getByTestId('target-1'));
    fireEvent.click(result.getByTestId('target-2'));
    fireEvent.click(document.documentElement);
    fireEvent.click(result.getByTestId('root'));
    fireEvent.click(result.getByTestId('outside'));
    expect(globalClickHandler).toHaveBeenCalledTimes(4);
  });

  it('should clear events if no refs provided', () => {
    const globalClickHandler = jest.fn();

    const result = render(
      <WrapperUseGlobalOnClickOutside globalClickHandler={globalClickHandler} />,
    );

    fireEvent.click(result.getByTestId('target-2'));
    expect(globalClickHandler).not.toHaveBeenCalled();

    fireEvent.click(result.getByTestId('outside'));
    expect(globalClickHandler).toHaveBeenCalledTimes(1);

    result.rerender(
      <WrapperUseGlobalOnClickOutside globalClickHandler={globalClickHandler} disableAllTarget />,
    );

    fireEvent.click(result.getByTestId('target-2'));
    fireEvent.click(result.getByTestId('outside'));
    expect(globalClickHandler).toHaveBeenCalledTimes(1);
  });
});
