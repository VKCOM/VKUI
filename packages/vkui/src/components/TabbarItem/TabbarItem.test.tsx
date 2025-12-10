import { render, screen } from '@testing-library/react';
import { Icon28NewsfeedOutline } from '@vkontakte/icons';
import {
  AppRootContext,
  DEFAULT_APP_ROOT_CONTEXT_VALUE,
} from '../../components/AppRoot/AppRootContext';
import { baselineComponent, userEvent, withFakeTimers } from '../../testing/utils';
import { TabbarItem } from './TabbarItem';
import styles from '../../styles/focusVisible.module.css';

describe('TabbarItem', () => {
  baselineComponent((props) => (
    <TabbarItem label="TabbarItem" {...props}>
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

  it(
    'handles disabled state',
    withFakeTimers(async () => {
      const cb = vi.fn();

      const { rerender } = render(<TabbarItem onClick={cb} data-testid="test" />);
      await userEvent.click(screen.getByTestId('test'));
      expect(cb).toHaveBeenCalledTimes(1);

      rerender(<TabbarItem onClick={cb} data-testid="test" disabled />);
      await userEvent.click(screen.getByTestId('test'));
      expect(cb).toHaveBeenCalledTimes(1);
    }),
  );

  function renderTabbarItemForFocus({ withKeyboardInput }: { withKeyboardInput: boolean }) {
    const onFocusStub = vi.fn();
    const onBlurStub = vi.fn();

    return {
      onFocusStub,
      onBlurStub,
      ...render(
        <AppRootContext.Provider
          value={{ ...DEFAULT_APP_ROOT_CONTEXT_VALUE, keyboardInput: withKeyboardInput }}
        >
          <TabbarItem onFocus={onFocusStub} onBlur={onBlurStub} data-testid="test" />,
        </AppRootContext.Provider>,
      ),
    };
  }

  it(
    'shows focus visible on focus with keyboard',
    withFakeTimers(async () => {
      const component = renderTabbarItemForFocus({ withKeyboardInput: true });

      await userEvent.tab();
      expect(screen.getByRole('presentation')).toHaveClass(styles['-focus-visible--focused']);

      await userEvent.tab();
      expect(screen.getByRole('presentation')).not.toHaveClass(styles['-focus-visible--focused']);

      expect(component.onFocusStub).toHaveBeenCalledTimes(1);
      expect(component.onBlurStub).toHaveBeenCalledTimes(1);
    }),
  );

  it(
    'does not show focus visible on focus without keyboard',
    withFakeTimers(async () => {
      const component = renderTabbarItemForFocus({ withKeyboardInput: false });

      await userEvent.click(screen.getByTestId('test'));
      expect(screen.getByRole('presentation')).not.toHaveClass(styles['-focus-visible--focused']);

      await userEvent.tab();
      expect(screen.getByRole('presentation')).not.toHaveClass(styles['-focus-visible--focused']);

      expect(component.onFocusStub).toHaveBeenCalledTimes(1);
      expect(component.onBlurStub).toHaveBeenCalledTimes(1);
    }),
  );
});
