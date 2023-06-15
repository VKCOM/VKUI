import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Icon28NewsfeedOutline } from '@vkontakte/icons';
import { baselineComponent } from '../../testing/utils';
import { TabbarItem } from './TabbarItem';

describe('TabbarItem', () => {
  baselineComponent((props) => (
    <TabbarItem text="TabbarItem" {...props}>
      <Icon28NewsfeedOutline />
    </TabbarItem>
  ));

  it('renders button by default', () => {
    render(<TabbarItem data-testid="test" />);

    expect(screen.getByTestId('test').tagName.toLowerCase()).toBe('button');
  });

  it('renders link if href is passed', () => {
    render(<TabbarItem href="https://vk.com" data-testid="test" />);

    expect(screen.getByTestId('test').tagName.toLowerCase()).toBe('a');
  });

  it('renders Component if it is passed', () => {
    render(<TabbarItem Component="div" href="https://vk.com" data-testid="test" />);

    expect(screen.getByTestId('test').tagName.toLowerCase()).toBe('div');
  });

  it('handles disabled state', () => {
    const cb = jest.fn();

    const { rerender } = render(<TabbarItem onClick={cb} data-testid="test" />);
    userEvent.click(screen.getByTestId('test'));
    expect(cb).toBeCalledTimes(1);

    rerender(<TabbarItem onClick={cb} data-testid="test" disabled />);
    userEvent.click(screen.getByTestId('test'));
    expect(cb).toBeCalledTimes(1);
  });
});
