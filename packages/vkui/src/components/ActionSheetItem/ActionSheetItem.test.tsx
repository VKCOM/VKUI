import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { baselineComponent } from '../../testing/utils';
import { ActionSheetItem, ActionSheetItemProps } from './ActionSheetItem';

const ActionSheetItemTest = (props: ActionSheetItemProps) => (
  <ActionSheetItem data-testid="item" {...props} />
);
const item = () => screen.getByTestId('item');

describe('ActionSheetItem', () => {
  /*
   * a11y: ARIA commands must have an accessible name (aria-command-name)
   *       тест ругается на отсутствие текста, доступного скринридерам.
   *       в реальной жизни мы вряд ли будем так использовать компонент
   */
  baselineComponent((p) => <ActionSheetItem {...p}>ActionSheetItem</ActionSheetItem>);

  it('Component: ActionSheetItem is a custom button by default', () => {
    render(<ActionSheetItemTest>ActionSheetItem</ActionSheetItemTest>);
    expect(item().tagName.toLowerCase()).toMatch('div');
    expect(item()).toHaveAttribute('role', 'button');
    expect(item()).toHaveAttribute('tabindex', '0');
  });

  it('Component: ActionSheetItem w/ href is a native link', () => {
    render(<ActionSheetItemTest href="https://vk.com">ActionSheetItem</ActionSheetItemTest>);
    expect(item().tagName.toLowerCase()).toMatch('a');
  });

  it('Component: ActionSheetItem[selectable] is a label', () => {
    render(<ActionSheetItemTest selectable>ActionSheetItem</ActionSheetItemTest>);
    expect(item().tagName.toLowerCase()).toMatch('label');
  });
});
