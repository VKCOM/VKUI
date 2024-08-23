import { render, screen } from '@testing-library/react';
import { classNames, noop } from '@vkontakte/vkjs';
import type { SizeTypeValues } from '../../lib/adaptivity';
import { baselineComponent } from '../../testing/utils';
import { AdaptivityContext } from '../AdaptivityProvider/AdaptivityContext';
import {
  AppRootContext,
  type AppRootContextInterface,
  DEFAULT_APP_ROOT_CONTEXT_VALUE,
} from '../AppRoot/AppRootContext';
import { ModalRootContext } from '../ModalRoot/ModalRootContext';
import { Group, type GroupProps } from './Group';
import styles from './Group.module.css';

describe('Group', () => {
  baselineComponent(Group);

  it.each<{
    mode: GroupProps['mode'];
    isInsideModal: boolean;
    sizeX?: SizeTypeValues;
    layout?: AppRootContextInterface['layout'];
    className: string;
  }>([
    {
      mode: 'plain',
      isInsideModal: true,
      sizeX: undefined,
      layout: undefined,
      className: styles['Group--mode-plain'],
    },
    {
      mode: undefined,
      isInsideModal: true,
      sizeX: undefined,
      layout: undefined,
      className: classNames(styles['Group--mode-plain'], styles['Group--mode-plain-inside-modal']),
    },
    {
      mode: undefined,
      isInsideModal: false,
      sizeX: undefined,
      layout: 'card',
      className: styles['Group--mode-card'],
    },
    {
      mode: undefined,
      isInsideModal: false,
      layout: undefined,
      sizeX: 'compact',
      className: styles['Group--mode-plain'],
    },
    {
      mode: undefined,
      isInsideModal: false,
      layout: undefined,
      sizeX: 'regular',
      className: styles['Group--mode-card'],
    },
    {
      mode: undefined,
      isInsideModal: false,
      layout: undefined,
      sizeX: undefined,
      className: styles['Group--mode-none'],
    },
  ])(
    'should have className $className with mode $mode isInsideModal $isInsideModal sizeX $sizeX',
    ({ mode, isInsideModal, sizeX, layout, className }) => {
      render(
        <AppRootContext.Provider
          value={{
            ...DEFAULT_APP_ROOT_CONTEXT_VALUE,
            layout,
          }}
        >
          <AdaptivityContext.Provider value={{ sizeX }}>
            <ModalRootContext.Provider
              value={{
                isInsideModal,
                updateModalHeight: noop,
                registerModal: noop,
              }}
            >
              <Group mode={mode} data-testid="group">
                <div />
              </Group>
            </ModalRootContext.Provider>
          </AdaptivityContext.Provider>
        </AppRootContext.Provider>,
      );

      expect(screen.getByTestId('group')).toHaveClass(className);
    },
  );

  it.each(['show', 'hide', 'auto'] as const)('should force show separator', (separator) => {
    const getSeparatorEl = (container: HTMLElement) =>
      container.getElementsByClassName(styles['Group__separator-sibling'])[0] ?? null;

    const modeNoneResult = render(
      <Group separator={separator}>
        <div />
      </Group>,
    );
    const modePlainResult = render(
      <Group separator={separator} mode="plain">
        <div />
      </Group>,
    );
    const modeCardResult = render(
      <Group separator={separator} mode="card">
        <div />
      </Group>,
    );
    const modeNoneSeparatorEl = getSeparatorEl(modeNoneResult.container);
    const modePlainSeparatorEl = getSeparatorEl(modePlainResult.container);
    const modeCardSeparatorEl = getSeparatorEl(modeCardResult.container);

    switch (separator) {
      case 'show':
        expect(modeNoneSeparatorEl).toHaveClass(styles['Group__separator-sibling--forced']);
        expect(modePlainSeparatorEl).toHaveClass(styles['Group__separator-sibling--forced']);
        expect(modeCardSeparatorEl).not.toHaveClass(styles['Group__separator-sibling--forced']);
        break;
      case 'auto':
        expect(modeNoneSeparatorEl).not.toHaveClass(styles['Group__separator-sibling--forced']);
        expect(modePlainSeparatorEl).not.toHaveClass(styles['Group__separator-sibling--forced']);
        expect(modeCardSeparatorEl).not.toHaveClass(styles['Group__separator-sibling--forced']);
        break;
      case 'hide':
        expect(modeNoneSeparatorEl).toBeNull();
        expect(modePlainSeparatorEl).toBeNull();
        expect(modeCardSeparatorEl).toBeNull();
        break;
    }
  });

  it('check DEV errors', () => {
    process.env.NODE_ENV = 'development';
    const error = jest.spyOn(console, 'warn').mockImplementation(noop);
    render(
      <Group role="tabpanel">
        <div />
      </Group>,
    );

    expect(error).toHaveBeenCalledWith(
      '%c[VKUI/Group] При использовании роли "tabpanel" необходимо задать значение свойств "aria-controls" и "id"',
      undefined,
    );

    process.env.NODE_ENV = 'test';
  });
});
