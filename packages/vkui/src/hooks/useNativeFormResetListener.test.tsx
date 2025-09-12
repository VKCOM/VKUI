import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { useNativeFormResetListener } from './useNativeFormResetListener';

const CustomFormItemComponent = ({
  defaultValue,
  disabledRef,
  hookCallback,
  ...restProps
}: {
  defaultValue: string;
  disabledRef?: boolean;
  hookCallback: (event: Event) => void;
}) => {
  const [value, setValue] = React.useState(defaultValue);
  const ref = React.useRef<HTMLDivElement>(null);

  const reset = React.useCallback(
    (event: Event) => {
      setValue('');
      hookCallback(event);
    },
    [hookCallback],
  );

  useNativeFormResetListener(ref, reset);

  return (
    <div ref={disabledRef ? undefined : ref} {...restProps}>
      {value}
    </div>
  );
};

describe(useNativeFormResetListener, () => {
  it('should reset state of custom form item component', () => {
    const hookCallback = vi.fn();
    const result = render(
      <form>
        <CustomFormItemComponent
          defaultValue="text"
          data-testid="custom-form-item"
          hookCallback={hookCallback}
        />
        <input data-testid="reset" type="reset" />
      </form>,
    );
    const customFormItemLocator = result.getByTestId('custom-form-item');

    expect(customFormItemLocator).toHaveTextContent('text');

    fireEvent.click(result.getByTestId('reset'));

    expect(customFormItemLocator).toHaveTextContent('');
    expect(hookCallback).toHaveBeenCalledWith(
      expect.objectContaining({
        isTrusted: true,
      }),
    );
  });

  it.each([
    { Wrapper: 'form' as const, props: { disabledRef: true }, description: 'ref is null' },
    { Wrapper: 'div' as const, props: {}, description: 'form is not exist' },
  ])('should be disabled if $description', ({ Wrapper, props }) => {
    const hookCallback = vi.fn();
    const result = render(
      <Wrapper>
        <CustomFormItemComponent
          {...props}
          defaultValue="text"
          data-testid="custom-form-item"
          hookCallback={hookCallback}
        />
        <input data-testid="reset" type="reset" />
      </Wrapper>,
    );
    const customFormItemLocator = result.getByTestId('custom-form-item');

    expect(customFormItemLocator).toHaveTextContent('text');

    fireEvent.click(result.getByTestId('reset'));

    expect(customFormItemLocator).toHaveTextContent('text');
    expect(hookCallback).not.toHaveBeenCalled();
  });
});
