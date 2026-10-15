import { render, screen } from '@testing-library/react';
import { classNames, noop } from '@vkontakte/vkjs';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { ModalContext } from '../../context/ModalContext';
import { ViewWidth, type ViewWidthType } from '../../lib/adaptivity';
import { baselineComponent, setNodeEnv } from '../../testing/utils';
import { AdaptivityContext } from '../AdaptivityProvider/AdaptivityContext';
import {
  AppRootContext,
  type AppRootContextInterface,
  DEFAULT_APP_ROOT_CONTEXT_VALUE,
} from '../AppRoot/AppRootContext';
import { Group, type GroupProps } from './Group';
import styles from './Group.module.css';

describe('Group', () => {
  baselineComponent(Group);

  it.each<{
    layoutMode: GroupProps['layoutMode'];
    isInsideModal: boolean;
    viewWidth?: ViewWidthType | undefined;
    appRootLayoutMode?: AppRootContextInterface['layoutMode'] | undefined;
    className: string;
  }>([
    {
      layoutMode: 'plain',
      isInsideModal: true,
      viewWidth: undefined,
      appRootLayoutMode: undefined,
      className: styles.modePlain,
    },
    {
      layoutMode: undefined,
      isInsideModal: true,
      viewWidth: undefined,
      appRootLayoutMode: undefined,
      className: classNames(styles.modePlain, styles.modePlainInsideModal),
    },
    {
      layoutMode: undefined,
      isInsideModal: false,
      viewWidth: undefined,
      appRootLayoutMode: 'card',
      className: styles.modeCard,
    },
    {
      layoutMode: undefined,
      isInsideModal: false,
      appRootLayoutMode: undefined,
      viewWidth: ViewWidth.MOBILE,
      className: styles.modePlain,
    },
    {
      layoutMode: undefined,
      isInsideModal: false,
      appRootLayoutMode: undefined,
      viewWidth: ViewWidth.SMALL_TABLET,
      className: styles.modeCard,
    },
    {
      layoutMode: undefined,
      isInsideModal: false,
      appRootLayoutMode: undefined,
      viewWidth: undefined,
      className: styles.modeNone,
    },
  ])(
    'should have className $className with layoutMode $layoutMode isInsideModal $isInsideModal viewWidth $viewWidth',
    ({ layoutMode, isInsideModal, viewWidth, appRootLayoutMode, className }) => {
      render(
        <AppRootContext.Provider
          value={{
            ...DEFAULT_APP_ROOT_CONTEXT_VALUE,
            layoutMode: appRootLayoutMode,
          }}
        >
          <AdaptivityContext.Provider value={{ viewWidth }}>
            <ModalContext.Provider value={isInsideModal ? 'test' : null}>
              <Group layoutMode={layoutMode} data-testid="group">
                <div />
              </Group>
            </ModalContext.Provider>
          </AdaptivityContext.Provider>
        </AppRootContext.Provider>,
      );

      expect(screen.getByTestId('group')).toHaveClass(className);
    },
  );

  it.each(['show', 'hide', 'auto'] as const)('should force show separator', (separator) => {
    const getSeparatorEl = (container: HTMLElement) =>
      container.getElementsByClassName(styles.separatorSibling)[0] ?? null;

    const modeNoneResult = render(
      <Group separator={separator}>
        <div />
      </Group>,
    );
    const modePlainResult = render(
      <Group separator={separator} layoutMode="plain">
        <div />
      </Group>,
    );
    const modeCardResult = render(
      <Group separator={separator} layoutMode="card">
        <div />
      </Group>,
    );
    const modeNoneSeparatorEl = getSeparatorEl(modeNoneResult.container);
    const modePlainSeparatorEl = getSeparatorEl(modePlainResult.container);
    const modeCardSeparatorEl = getSeparatorEl(modeCardResult.container);

    switch (separator) {
      case 'show':
        expect(modeNoneSeparatorEl).toHaveClass(styles.separatorSiblingForced);
        expect(modePlainSeparatorEl).toHaveClass(styles.separatorSiblingForced);
        expect(modeCardSeparatorEl).not.toHaveClass(styles.separatorSiblingForced);
        break;
      case 'auto':
        expect(modeNoneSeparatorEl).not.toHaveClass(styles.separatorSiblingForced);
        expect(modePlainSeparatorEl).not.toHaveClass(styles.separatorSiblingForced);
        expect(modeCardSeparatorEl).not.toHaveClass(styles.separatorSiblingForced);
        break;
      case 'hide':
        expect(modeNoneSeparatorEl).toBeNull();
        expect(modePlainSeparatorEl).toBeNull();
        expect(modeCardSeparatorEl).toBeNull();
        break;
    }
  });

  describe('DEV errors', () => {
    beforeEach(() => setNodeEnv('development'));
    afterEach(() => setNodeEnv('test'));

    it('check DEV errors', () => {
      const error = vi.spyOn(console, 'warn').mockImplementation(noop);
      render(
        <Group role="tabpanel">
          <div />
        </Group>,
      );

      expect(error).toHaveBeenCalledExactlyOnceWith(
        '%c[VKUI/Group] При использовании роли "tabpanel" необходимо задать значение свойств "aria-controls" и "id"',
        undefined,
      );
    });
  });
});
