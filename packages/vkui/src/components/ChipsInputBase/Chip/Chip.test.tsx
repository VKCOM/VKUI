import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { baselineComponent, userEvent, withFakeTimers } from '../../../testing/utils';
import { Chip } from './Chip';

describe(Chip, () => {
  baselineComponent(Chip);

  it('removes chip on onRemove click', async () => {
    const onRemove = vi.fn();

    render(
      <Chip value="white" onRemove={onRemove}>
        Белый
      </Chip>,
    );

    fireEvent.click(screen.getByRole('button'));

    expect(onRemove).toHaveBeenCalled();
  });

  it('hides remove button if readOnly', async () => {
    const result = render(<Chip value="white">Белый</Chip>);

    expect(screen.getByRole('button')).toBeTruthy();

    result.rerender(
      <Chip value="white" readOnly>
        Белый
      </Chip>,
    );
    expect(() => screen.getByRole('button')).toThrow();
  });

  it.each([{ readOnly: false }, { readOnly: true }])(
    'calls user events (`readOnly` prop is `$readOnly`)',
    withFakeTimers(async ({ readOnly }) => {
      const onFocus = vi.fn();
      const onBlur = vi.fn();
      render(
        <Chip
          value="white"
          readOnly={readOnly}
          data-testid="input"
          tabIndex={0}
          onFocus={onFocus}
          onBlur={onBlur}
        />,
      );

      await userEvent.tab();
      await userEvent.tab({ shift: true });

      expect(onFocus).toHaveBeenCalled();
      expect(onBlur).toHaveBeenCalled();
    }),
  );
});
