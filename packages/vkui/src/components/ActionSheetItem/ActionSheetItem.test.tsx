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
      fireEvent.keyDown(screen.getByTestId('action-item'), { key: 'Enter', code: 'Enter' }),
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
