import { act } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { baselineComponent } from '../../testing/utils';
import { ActionSheetContext } from '../ActionSheet/ActionSheetContext';
import { ActionSheetItem, type ActionSheetItemProps } from './ActionSheetItem';

const ActionSheetItemTest = (props: ActionSheetItemProps) => (
  <ActionSheetItem data-testid="item" {...props} />
);
const item = () => screen.getByTestId('item');

describe('ActionSheetItem', () => {
  baselineComponent((props) => <ActionSheetItem {...props}>ActionSheetItem</ActionSheetItem>);

  describe('deprecation warnings', () => {
    let warnSpy: ReturnType<typeof vi.spyOn>;

    beforeEach(() => {
      vi.stubEnv('NODE_ENV', 'development');
      warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => void 0);
    });

    afterEach(() => {
      warnSpy.mockClear();
      vi.unstubAllEnvs();
    });

    afterAll(() => {
      warnSpy.mockRestore();
    });

    it('warns when mode="cancel" is used', () => {
      render(<ActionSheetItemTest mode="cancel">Cancel</ActionSheetItemTest>);
      expect(warnSpy).toHaveBeenCalledTimes(1);
      const callArgs = warnSpy.mock.calls[0];
      expect(callArgs[0]).toContain('mode="cancel"');
    });

    it('warns when isCancelItem is used', () => {
      render(<ActionSheetItemTest isCancelItem>Cancel</ActionSheetItemTest>);
      expect(warnSpy).toHaveBeenCalledTimes(1);
      const callArgs = warnSpy.mock.calls[0];
      expect(callArgs[0]).toContain('isCancelItem');
    });

    it('does not warn when neither mode="cancel" nor isCancelItem is used', () => {
      render(<ActionSheetItemTest>Item</ActionSheetItemTest>);
      expect(warnSpy).not.toHaveBeenCalled();
    });
  });

  describe('cancel item detection', () => {
    const onItemClickCallback = vi.fn();

    beforeEach(() => {
      onItemClickCallback.mockClear();
    });

    const renderWithContext = (props: ActionSheetItemProps) => {
      return render(
        <ActionSheetContext.Provider
          value={{
            onItemClick: onItemClickCallback,
          }}
        >
          <ActionSheetItemTest data-testid="cancel-item" {...props}>
            Cancel
          </ActionSheetItemTest>
        </ActionSheetContext.Provider>,
      );
    };

    const clickCancelItem = async () => {
      await act(async () =>
        fireEvent(
          screen.getByTestId('cancel-item'),
          new MouseEvent('click', {
            clientX: 1,
            clientY: 1,
            bubbles: true,
          }),
        ),
      );
    };

    const expectCancelItemDetected = () => {
      expect(onItemClickCallback).toHaveBeenCalledTimes(1);
      const callArgs = onItemClickCallback.mock.calls[0][0];
      expect(callArgs.isCancelItem).toBe(true);
    };

    it('detects cancel item via isCancelItem prop (backward compatibility)', async () => {
      renderWithContext({ isCancelItem: true });
      await clickCancelItem();
      expectCancelItemDetected();
    });
  });

  it('Component: ActionSheetItem is a custom button by default', () => {
    render(<ActionSheetItemTest>ActionSheetItem</ActionSheetItemTest>);
    expect(item().tagName.toLowerCase()).toMatch('div');
    expect(item()).toHaveAttribute('role', 'button');
    expect(item()).toHaveAttribute('tabindex', '0');
  });

  it('Component: ActionSheetItem w/ href is a native link', () => {
    render(<ActionSheetItemTest href="https://vk.com">ActionSheetItem</ActionSheetItemTest>);
    const el = item();
    expect(el.tagName.toLowerCase()).toMatch('a');
  });

  it('Component: ActionSheetItem[selectable] is a label', () => {
    render(<ActionSheetItemTest selectable>ActionSheetItem</ActionSheetItemTest>);
    expect(item().tagName.toLowerCase()).toMatch('label');
  });

  it('should call close callback when Enter keydown', async () => {
    const onCloseCallback = vi.fn();
    render(
      <ActionSheetContext.Provider
        value={{
          onClose: onCloseCallback,
        }}
      >
        <ActionSheetItemTest selectable data-testid="action-item">
          ActionSheetItem
        </ActionSheetItemTest>
      </ActionSheetContext.Provider>,
    );

    await act(async () =>
      fireEvent.keyDown(screen.getByTestId('action-item'), {
        key: 'Enter',
        code: 'Enter',
      }),
    );

    expect(onCloseCallback).toHaveBeenCalledTimes(1);
  });

  it('check call onItemClick callback when click to ActionSheetItem with selectable=true', async () => {
    const onItemClickCallback = vi.fn();

    render(
      <ActionSheetContext.Provider
        value={{
          onItemClick: onItemClickCallback,
        }}
      >
        <ActionSheetItemTest selectable data-testid="action-item">
          ActionSheetItem
        </ActionSheetItemTest>
      </ActionSheetContext.Provider>,
    );

    // эмулируем событие клика при навигации стрелочками
    await act(async () =>
      fireEvent(
        screen.getByTestId('action-item'),
        new MouseEvent('click', {
          clientX: 0,
          clientY: 0,
          bubbles: true,
        }),
      ),
    );

    expect(onItemClickCallback).toHaveBeenCalledTimes(0);

    // эмулируем настоящее событие клика(отличается оно тем, что clientX и clientY != 0)
    // @see packages/vkui/src/components/ActionSheetItem/helpers.ts
    const newMouseEvent = new MouseEvent('click', {
      clientX: 1,
      clientY: 1,
      bubbles: true,
    });
    await act(async () => fireEvent(screen.getByTestId('action-item'), newMouseEvent));

    expect(onItemClickCallback).toHaveBeenCalledTimes(1);
  });
});
