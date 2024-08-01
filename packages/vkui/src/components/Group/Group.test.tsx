import { render, screen } from '@testing-library/react';
import { classNames, noop } from '@vkontakte/vkjs';
import { SizeTypeValues } from '../../lib/adaptivity';
import { baselineComponent } from '../../testing/utils';
import { AdaptivityContext } from '../AdaptivityProvider/AdaptivityContext';
import {
  AppRootContext,
  AppRootContextInterface,
  DEFAULT_APP_ROOT_CONTEXT_VALUE,
} from '../AppRoot/AppRootContext';
import { ModalRootContext } from '../ModalRoot/ModalRootContext';
import { Group, GroupProps } from './Group';
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
      className: classNames(styles['Group--mode-plain'], styles['Group--inside-modal']),
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

  it('should force show separator', () => {
    const { container } = render(
      <Group separator="show" data-testid="group">
        <div />
      </Group>,
    );
    expect(container.getElementsByClassName(styles['Group__separator'])[0]).toHaveClass(
      styles['Group__separator--force'],
    );
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
