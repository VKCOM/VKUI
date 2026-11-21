import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { useInputKeyboardController } from './useInputKeyboardController';

describe(useInputKeyboardController, () => {
  it.each([
    { key: 'Enter', isComposing: true },
    { key: 'Enter', keyCode: 229 },
    { key: 'ArrowDown', isComposing: true },
    { key: 'Escape', isComposing: true },
  ])('leaves IME keys to the browser (%o)', (event) => {
    const selectFocused = vi.fn();
    const focusOption = vi.fn();
    const close = vi.fn();
    const open = vi.fn();
    const onInputKeyDown = vi.fn();
    const Test = () => {
      const onKeyDown = useInputKeyboardController({
        opened: true,
        scrollBoxRef: { current: document.createElement('div') },
        selectFocused,
        focusOption,
        close,
        open,
        resetFocusedOption: vi.fn(),
        onInputKeyDown,
      });
      return <input onKeyDown={onKeyDown} />;
    };
    render(<Test />);
    const input = screen.getByRole('textbox');
    expect(fireEvent.keyDown(input, event)).toBe(true);
    expect(onInputKeyDown).toHaveBeenCalledTimes(1);
    expect(selectFocused).not.toHaveBeenCalled();
    expect(focusOption).not.toHaveBeenCalled();
    expect(close).not.toHaveBeenCalled();
    fireEvent.keyDown(input, { key: 'a', keyCode: 229 });
    expect(open).toHaveBeenCalledTimes(1);
    // 229 на мобильной клавиатуре не должен блокировать обычный ввод.
    fireEvent.keyDown(input, { key: 'Enter' });
    expect(selectFocused).toHaveBeenCalledTimes(1);
  });
});
