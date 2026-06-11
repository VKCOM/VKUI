import * as React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { Icon24Cancel, Icon24Done } from '@vkontakte/icons';
import type { CustomModalProps, OpenModalPageProps } from '../../hooks/useModalManager';
import { usePlatform } from '../../hooks/usePlatform';
import { ModalWrapper } from '../../storybook/ModalWrapper';
import { withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { Div } from '../Div/Div';
import { ModalPage } from '../ModalPage/ModalPage';
import { ModalRootContext } from '../ModalRoot/ModalRootContext';
import { PanelHeaderButton } from '../PanelHeaderButton/PanelHeaderButton';
import { ModalPageHeader, type ModalPageHeaderProps } from './ModalPageHeader';

const MODAL_ID = 'MODAL_ID';

const story: Meta<ModalPageHeaderProps> = {
  title: 'Modals/ModalPageHeader',
  component: ModalPageHeader,
  parameters: {
    ...CanvasFullLayout,
    ...DisableCartesianParam,
    liveCodeEditor: {
      scope: {
        MODAL_ID,
        HeaderButton,
        ModalWrapper,
      },
    },
  },
  decorators: [withVKUILayout],
  tags: ['Модальные окна'],
};

export default story;

type Story = StoryFn<ModalPageHeaderProps>;

function HeaderButton({ children }: { children: React.ReactNode }) {
  const { onClose } = React.useContext(ModalRootContext);
  return <PanelHeaderButton onClick={() => onClose?.(MODAL_ID)}>{children}</PanelHeaderButton>;
}

export const Playground: Story = (args: ModalPageHeaderProps) => {
  const platform = usePlatform();
  const CustomModal = React.useCallback(
    ({ modalProps }: CustomModalProps<OpenModalPageProps>) => {
      return (
        <ModalPage
          id={MODAL_ID}
          header={
            <ModalPageHeader
              before={
                <React.Fragment>
                  {(platform === 'android' || platform === 'vkcom') && (
                    <HeaderButton>
                      <Icon24Cancel />
                    </HeaderButton>
                  )}
                </React.Fragment>
              }
              after={
                <React.Fragment>
                  {(platform === 'android' || platform === 'vkcom') && (
                    <HeaderButton>
                      <Icon24Done />
                    </HeaderButton>
                  )}
                  {platform === 'ios' && <HeaderButton>Готово</HeaderButton>}
                </React.Fragment>
              }
              {...args}
            >
              Заголовок модальной страницы
            </ModalPageHeader>
          }
          {...modalProps}
        >
          <Div
            style={{
              height: 1000,
            }}
          >
            Example
          </Div>
        </ModalPage>
      );
    },
    [args, platform],
  );
  return <ModalWrapper type="page" customModal={CustomModal} />;
};
