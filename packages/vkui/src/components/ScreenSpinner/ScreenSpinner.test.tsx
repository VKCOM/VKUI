import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { baselineComponent, userEvent, withFakeTimers } from '../../testing/utils';
import { ScreenSpinner } from './ScreenSpinner';
import stylesDelay from '../../styles/animationVisibilityDelay.module.css';

describe('ScreenSpinner', () => {
  baselineComponent(ScreenSpinner);

  it(
    'uses a native cancel button without submitting the surrounding form',
    withFakeTimers(async () => {
      const onClick = vi.fn();
      const onKeyDown = vi.fn();
      const onSubmit = vi.fn((event: React.FormEvent) => event.preventDefault());
      const ref = React.createRef<HTMLElement>();
      render(
        <form onSubmit={onSubmit}>
          <ScreenSpinner.Container state="cancelable">
            <ScreenSpinner.SwapIcon
              cancelLabel="Cancel"
              getRootRef={ref}
              onClick={onClick}
              onKeyDown={onKeyDown}
            />
          </ScreenSpinner.Container>
        </form>,
      );
      const button = screen.getByRole('button', { name: 'Cancel' });
      expect(button.tagName).toBe('BUTTON');
      expect(ref.current).toBe(button);
      await userEvent.tab();
      expect(button).toHaveFocus();
      await userEvent.keyboard('{Enter}');
      expect(onClick).toHaveBeenCalledTimes(1);
      await userEvent.keyboard('[Space>]');
      expect(onClick).toHaveBeenCalledTimes(1);
      await userEvent.keyboard('[/Space]');
      expect(onClick).toHaveBeenCalledTimes(2);
      expect(onKeyDown).toHaveBeenCalled();
      fireEvent.click(button);
      expect(onSubmit).not.toHaveBeenCalled();
    }),
  );

  it('should delay visibility', () => {
    render(<ScreenSpinner visibilityDelay={200} />);

    expect(document.querySelector(`.${stylesDelay.visibilityDelay}`)).not.toBeNull();
  });
});
