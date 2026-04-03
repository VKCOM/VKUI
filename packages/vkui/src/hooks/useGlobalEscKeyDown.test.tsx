import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { useGlobalEscKeyDown } from './useGlobalEscKeyDown';

type EscHandlersFixtureProps = {
  onOuterClose: () => void;
  onInnerClose: () => void;
};

const EscHandlersFixture = ({ onOuterClose, onInnerClose }: EscHandlersFixtureProps) => {
  const [outerOpened, setOuterOpened] = React.useState(true);
  const [innerOpened, setInnerOpened] = React.useState(true);

  useGlobalEscKeyDown(outerOpened, () => {
    onOuterClose();
    setOuterOpened(false);
  });

  useGlobalEscKeyDown(innerOpened, () => {
    onInnerClose();
    setInnerOpened(false);
  });

  return <input data-testid="target" />;
};

const SingleEscHandlerFixture = ({
  enabled,
  onEscKeyDown,
}: {
  enabled: boolean;
  onEscKeyDown?: (event: KeyboardEvent) => void;
}) => {
  useGlobalEscKeyDown(enabled, onEscKeyDown);
  return <input data-testid="target" />;
};

describe(useGlobalEscKeyDown, () => {
  it('should close layers in stack order', () => {
    const onOuterClose = vi.fn();
    const onInnerClose = vi.fn();
    const { getByTestId } = render(
      <EscHandlersFixture onOuterClose={onOuterClose} onInnerClose={onInnerClose} />,
    );

    const target = getByTestId('target');

    fireEvent.keyDown(target, { key: 'Escape' });
    expect(onInnerClose).toHaveBeenCalledTimes(1);
    expect(onOuterClose).not.toHaveBeenCalled();

    fireEvent.keyDown(target, { key: 'Escape' });
    expect(onOuterClose).toHaveBeenCalledTimes(1);
  });

  it('should not call callback for non-escape keys', () => {
    const onEscKeyDown = vi.fn();
    const { getByTestId } = render(<SingleEscHandlerFixture enabled onEscKeyDown={onEscKeyDown} />);

    fireEvent.keyDown(getByTestId('target'), { key: 'Enter' });
    expect(onEscKeyDown).not.toHaveBeenCalled();
  });

  it('should not subscribe when callback is not provided', () => {
    const { getByTestId } = render(<SingleEscHandlerFixture enabled={true} />);

    expect(() => fireEvent.keyDown(getByTestId('target'), { key: 'Escape' })).not.toThrow();
  });

  it('should re-subscribe when enabled state changes', () => {
    const onEscKeyDown = vi.fn();
    const { getByTestId, rerender } = render(
      <SingleEscHandlerFixture enabled={false} onEscKeyDown={onEscKeyDown} />,
    );

    fireEvent.keyDown(getByTestId('target'), { key: 'Escape' });
    expect(onEscKeyDown).not.toHaveBeenCalled();

    rerender(<SingleEscHandlerFixture enabled onEscKeyDown={onEscKeyDown} />);

    fireEvent.keyDown(getByTestId('target'), { key: 'Escape' });
    expect(onEscKeyDown).toHaveBeenCalledTimes(1);
  });

  it('should call latest callback after rerender', () => {
    const firstCallback = vi.fn();
    const secondCallback = vi.fn();
    const { getByTestId, rerender } = render(
      <SingleEscHandlerFixture enabled onEscKeyDown={firstCallback} />,
    );

    rerender(<SingleEscHandlerFixture enabled onEscKeyDown={secondCallback} />);

    fireEvent.keyDown(getByTestId('target'), { key: 'Escape' });
    expect(firstCallback).not.toHaveBeenCalled();
    expect(secondCallback).toHaveBeenCalledTimes(1);
  });
});
