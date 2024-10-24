import { fireEvent, getByRole, render, screen } from '@testing-library/react';
import { Platform } from '../../lib/platform';
import { baselineComponent, userEvent } from '../../testing/utils';
import { ConfigProvider } from '../ConfigProvider/ConfigProvider';
import { List } from '../List/List';
import { Cell } from './Cell';
import styles from './Cell.module.css';

const label = 'Перенести ячейку';

describe('Cell', () => {
  baselineComponent((props) => <Cell {...props}>Cell</Cell>);

  describe('Controls dragging', () => {
    it('does not reorder dragged item on click', async () => {
      const initialList = ['eugpoloz', 'arthurstam', 'xyz'];
      let updatedList = [...initialList];

      render(
        <List gap={20}>
          {updatedList.map((item) => (
            <Cell
              key={item}
              data-testid={'list-' + item}
              draggable
              onDragFinish={({ from, to }) => {
                let list = [...updatedList];
                list.splice(from, 1);
                list.splice(to, 0, updatedList[from]);
                updatedList = [...list];
              }}
              draggerLabel={label}
            >
              {item}
            </Cell>
          ))}
        </List>,
      );

      await userEvent.click(
        screen.getByTestId('list-xyz').querySelector<HTMLElement>(`[aria-label="${label}"]`)!,
      );

      expect(updatedList).toEqual(initialList);
    });
  });

  test('has "a" tag by default if href is defined', () => {
    const { rerender } = render(
      <Cell Component="div" href="http://the.link">
        Саша Колобов
      </Cell>,
    );

    // Явное значение Component = div приоритетней автоматической логики по установке тэга a
    expect(document.querySelector('a[href="http://the.link"]')).toBeFalsy();
    expect(document.querySelector('div[href="http://the.link"]')).toBeTruthy();

    rerender(<Cell href="http://the.link">Саша Колобов</Cell>);

    // без явного значения в Component компонент будет иметь тэг 'a' из-за переданного значения href
    expect(document.querySelector('a[href="http://the.link"]')).toBeTruthy();
  });

  describe("mode='removable'", () => {
    test('handles click', () => {
      const removeStub = jest.fn();
      const clickStub = jest.fn();

      const { rerender } = render(
        <Cell
          mode="removable"
          onRemove={removeStub}
          onClick={clickStub}
          removeButtonTestId="removeButtonTestId"
        >
          Саша Колобов
        </Cell>,
      );

      expect(screen.getByRole('button', { name: /Саша Колобов/ })).not.toHaveAttribute(
        'aria-disabled',
        'true',
      );

      fireEvent.click(screen.getByTestId('removeButtonTestId'));
      expect(removeStub).toHaveBeenCalledTimes(1);
      expect(clickStub).not.toHaveBeenCalled();

      removeStub.mockClear();
      clickStub.mockClear();
      fireEvent.click(screen.getByText('Саша Колобов'));

      expect(removeStub).toHaveBeenCalledTimes(0);
      expect(clickStub).toHaveBeenCalledTimes(1);

      // cell should be div in removable state without onClick handler
      rerender(
        <Cell data-testid="test" mode="removable" onRemove={removeStub}>
          Саша Колобов
        </Cell>,
      );
      const el = screen.getByTestId('test');

      expect(el.tagName.toLowerCase()).toBe('div');
      expect(el.role).toBeUndefined();
      expect(el.getAttribute('disabled')).toBeNull();
      expect(el.getAttribute('aria-disabled')).toBeNull();
    });

    test('[iOS] handles click and ignores onClick in removing state', async () => {
      const removeStub = jest.fn();
      const clickStub = jest.fn();

      render(
        <ConfigProvider platform="ios">
          <Cell
            mode="removable"
            onRemove={removeStub}
            onClick={clickStub}
            toggleButtonTestId="toggleButtonTestId"
          >
            Саша Колобов
          </Cell>
        </ConfigProvider>,
      );

      // specify offset to move Cell content on remove toggle click
      // required by Removable in iOS mode to detect removing state
      const removeActionButton = screen.getAllByRole('button')[2];
      if (!removeActionButton) {
        throw new Error('Cannot find actionable remove button');
      }
      Object.defineProperty(removeActionButton, 'offsetWidth', { value: 12 });

      // transition to removing state
      fireEvent.click(screen.getByTestId('toggleButtonTestId'));
      expect(removeStub).not.toHaveBeenCalled();
      expect(clickStub).not.toHaveBeenCalled();

      // click at content resets removing state
      // and doesn't allow to handle onClick
      fireEvent.click(screen.getByText('Саша Колобов'));

      expect(removeStub).not.toHaveBeenCalled();
      expect(clickStub).not.toHaveBeenCalled();

      // click at content is handled
      fireEvent.click(screen.getByText('Саша Колобов'));
      expect(removeStub).toHaveBeenCalledTimes(0);
      expect(clickStub).toHaveBeenCalledTimes(1);
    });

    test('handles disabled', () => {
      const removeStub = jest.fn();
      const clickStub = jest.fn();

      render(
        <Cell
          mode="removable"
          onRemove={removeStub}
          onClick={clickStub}
          removeButtonTestId="removeButtonTestId"
          disabled
        >
          Саша Колобов
        </Cell>,
      );

      fireEvent.click(screen.getByTestId('removeButtonTestId'));
      expect(removeStub).not.toHaveBeenCalled();
      expect(clickStub).not.toHaveBeenCalled();

      fireEvent.click(screen.getByText('Саша Колобов'));

      expect(clickStub).not.toHaveBeenCalled();
    });
  });

  describe("mode='selectable'", () => {
    it('check selectable mode', () => {
      render(
        <Cell mode="selectable" data-testid="cell">
          Саша Колобов
        </Cell>,
      );
      const cell = screen.getByTestId('cell');
      expect(cell.tagName).toBe('LABEL');
      expect(cell.parentElement).toHaveClass(styles.selectable);

      const checkbox = getByRole(cell, 'checkbox');
      expect(checkbox).toBeInTheDocument();
    });

    it('handles disabled', () => {
      const clickStub = jest.fn();
      render(
        <Cell mode="selectable" data-testid="cell" onClick={clickStub} disabled>
          Саша Колобов
        </Cell>,
      );
      fireEvent.click(screen.getByText('Саша Колобов'));
      expect(clickStub).not.toHaveBeenCalled();

      const cell = screen.getByTestId('cell');
      const checkbox = getByRole(cell, 'checkbox');
      expect(checkbox).not.toBeChecked();
    });
  });

  it('check dragging className add when dragging cell', async () => {
    render(
      <Cell data-testid="list-xyz" draggable draggerLabel={label}>
        xyz
      </Cell>,
    );

    const cell = screen.getByTestId('list-xyz');
    const dragger = cell.querySelector<HTMLElement>(`.${styles.dragger}`)!;
    expect(dragger).toBeInTheDocument();

    fireEvent.mouseDown(dragger, {
      clientX: 0,
      clientY: 0,
    });
    fireEvent.mouseMove(dragger, {
      clientX: 0,
      clientY: 100,
    });

    expect(cell.parentElement).toHaveClass(styles.dragging);
  });

  it('check that dragger after the content in IOS', () => {
    render(
      <ConfigProvider platform={Platform.IOS}>
        <Cell data-testid="list-xyz" draggable draggerLabel={label}>
          <div data-testid="content"></div>
        </Cell>
      </ConfigProvider>,
    );
    const cell = screen.getByTestId('list-xyz');
    const dragger = cell.querySelector<HTMLElement>(`.${styles.dragger}`)!;
    const content = screen.getByTestId('content');

    // Проверяем, что dragger находится в DOM дереве после контента, значит в after
    expect(
      content.compareDocumentPosition(dragger) & Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
  });
});
