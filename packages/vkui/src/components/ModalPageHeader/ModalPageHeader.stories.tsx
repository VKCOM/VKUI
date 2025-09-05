import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Icon24Cancel, Icon24Done } from '@vkontakte/icons';
import { usePlatform } from '../../hooks/usePlatform';
import { ModalWrapper } from '../../storybook/ModalWrapper';
import { withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { Div } from '../Div/Div';
import { ModalPage } from '../ModalPage/ModalPage';
import { ModalRootContext } from '../ModalRoot/ModalRootContext';
import { PanelHeaderButton } from '../PanelHeaderButton/PanelHeaderButton';
import { ModalPageHeader, type ModalPageHeaderProps } from './ModalPageHeader';

const story: Meta<ModalPageHeaderProps> = {
  title: 'Modals/ModalPageHeader',
  component: ModalPageHeader,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
  decorators: [withVKUILayout],
  tags: ['Модальные окна'],
};

export default story;

type Story = StoryObj<ModalPageHeaderProps>;

const MODAL_ID = 'MODAL_ID';

const HeaderButton = ({ children }: { children: React.ReactNode }) => {
  const { onClose } = React.useContext(ModalRootContext);
  return <PanelHeaderButton onClick={() => onClose?.(MODAL_ID)}>{children}</PanelHeaderButton>;
};

export const Playground: Story = {
  render: function Render(args) {
    const platform = usePlatform();

    return (
      <ModalWrapper modalId={MODAL_ID}>
        <ModalPage
          id={MODAL_ID}
          header={
            <ModalPageHeader
              before={
                <React.Fragment>
                  {platform !== 'ios' && (
                    <HeaderButton>
                      <Icon24Cancel />
                    </HeaderButton>
                  )}
                </React.Fragment>
              }
              after={
                <React.Fragment>
                  {platform !== 'ios' ? (
                    <HeaderButton>
                      <Icon24Done />
                    </HeaderButton>
                  ) : (
                    <HeaderButton>Готово</HeaderButton>
                  )}
                </React.Fragment>
              }
              {...args}
            >
              Заголовок модальной страницы
            </ModalPageHeader>
          }
        >
          <Div style={{ height: 1000 }}>Example</Div>
        </ModalPage>
      </ModalWrapper>
    );
  },
};
