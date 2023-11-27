import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
import {
  useCustomEnsuredControl,
  type UseCustomEnsuredControlProps,
  useEnsuredControl,
  type UseEnsuredControlProps,
} from './useEnsuredControl';

describe(useEnsuredControl, () => {
  const UseEnsuredControlComponent = (
    props: UseEnsuredControlProps<number, React.ChangeEvent<HTMLInputElement>>,
  ) => {
    const [value, onChange] = useEnsuredControl(props);
    return <input type="number" value={value} onChange={onChange} />;
  };

  it('should work like uncontrolled', () => {
    const handleChange = jest.fn((event: React.ChangeEvent<HTMLInputElement>) =>
      Number(event.target.value),
    );
    const prevValue = 1;
    const rendered = render(
      <UseEnsuredControlComponent
        key="uncontrolled"
        defaultValue={prevValue}
        onChange={handleChange}
      />,
    );
    const valueEl = rendered.getByRole('spinbutton');

    expect(valueEl).toHaveValue(prevValue);
    expect(handleChange).not.toHaveBeenCalled();

    const nextValue = 2;
    fireEvent.change(valueEl, { target: { value: nextValue } });

    expect(valueEl).toHaveValue(nextValue);
    expect(handleChange).toHaveReturnedWith(nextValue);

    rendered.rerender(
      <UseEnsuredControlComponent
        key="uncontrolled"
        disabled
        defaultValue={1}
        onChange={handleChange}
      />,
    );

    fireEvent.change(valueEl, { target: { value: 3 } });
    expect(valueEl).toHaveValue(2);
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('should work like controlled', () => {
    const handleChange = jest.fn((event: React.ChangeEvent<HTMLInputElement>) =>
      Number(event.target.value),
    );
    const prevValue = 1;
    const rendered = render(
      <UseEnsuredControlComponent
        key="controlled"
        value={prevValue}
        defaultValue={prevValue}
        onChange={handleChange}
      />,
    );
    const valueEl = rendered.getByRole('spinbutton');

    expect(valueEl).toHaveValue(prevValue);
    expect(handleChange).not.toHaveBeenCalled();

    const nextValue = prevValue + 1;
    fireEvent.change(valueEl, { target: { value: nextValue } });

    expect(valueEl).toHaveValue(prevValue);
    expect(handleChange).toHaveReturnedWith(nextValue);

    rendered.rerender(
      <UseEnsuredControlComponent
        key="controlled"
        value={nextValue}
        defaultValue={prevValue}
        onChange={handleChange}
      />,
    );
    // сразу проверяем disabled состояние
    rendered.rerender(
      <UseEnsuredControlComponent
        key="controlled"
        disabled
        value={nextValue}
        defaultValue={prevValue}
        onChange={handleChange}
      />,
    );
    fireEvent.change(valueEl, { target: { value: 3 } });

    expect(valueEl).toHaveValue(nextValue);
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});

describe(useCustomEnsuredControl, () => {
  const UseCustomEnsuredControlComponent = ({
    useFunction,
    ...props
  }: UseCustomEnsuredControlProps<number> & { useFunction?: boolean }) => {
    const [value, onChange] = useCustomEnsuredControl(props);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (useFunction) {
        onChange((prev) => {
          const next = Number(event.target.value);
          return prev !== next ? next : prev;
        });
      } else {
        onChange(Number(event.target.value));
      }
    };
    return <input type="number" value={value} onChange={handleChange} />;
  };

  it.each([{ useFunction: true }, { useFunction: false }])(
    'should work like uncontrolled (useFunction: $useFunction)',
    (prop) => {
      const handleChange = jest.fn((value: number) => value);
      const rendered = render(
        <UseCustomEnsuredControlComponent
          key="uncontrolled"
          defaultValue={1}
          onChange={handleChange}
          {...prop}
        />,
      );
      const valueEl = rendered.getByRole('spinbutton');

      expect(valueEl).toHaveValue(1);
      expect(handleChange).not.toHaveBeenCalled();

      fireEvent.change(valueEl, { target: { value: 2 } });
      // сразу проверяем disabled состояние
      rendered.rerender(
        <UseCustomEnsuredControlComponent
          key="uncontrolled"
          disabled
          defaultValue={1}
          onChange={handleChange}
        />,
      );
      fireEvent.change(valueEl, { target: { value: 3 } });

      expect(valueEl).toHaveValue(2);
      expect(handleChange).toHaveReturnedWith(2);
    },
  );

  it.each([{ useFunction: true }, { useFunction: false }])(
    'should work like controlled (useFunction: $useFunction)',
    (prop) => {
      const handleChange = jest.fn((value: number) => value);
      const prevValue = 1;
      const rendered = render(
        <UseCustomEnsuredControlComponent
          key="controlled"
          value={prevValue}
          defaultValue={prevValue}
          onChange={handleChange}
          {...prop}
        />,
      );
      const valueEl = rendered.getByRole('spinbutton');

      expect(valueEl).toHaveValue(prevValue);
      expect(handleChange).not.toHaveBeenCalled();

      const nextValue = prevValue + 1;
      fireEvent.change(valueEl, { target: { value: nextValue } });

      expect(valueEl).toHaveValue(prevValue);
      expect(handleChange).toHaveReturnedWith(nextValue);

      rendered.rerender(
        <UseCustomEnsuredControlComponent
          key="controlled"
          value={nextValue}
          defaultValue={prevValue}
          onChange={handleChange}
        />,
      );
      // сразу проверяем disabled состояние
      rendered.rerender(
        <UseCustomEnsuredControlComponent
          key="controlled"
          disabled
          value={nextValue}
          defaultValue={1}
          onChange={handleChange}
        />,
      );
      fireEvent.change(valueEl, { target: { value: 3 } });

      expect(valueEl).toHaveValue(nextValue);
      expect(handleChange).toHaveBeenCalledTimes(1);
    },
  );
});
