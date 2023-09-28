import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Icon24Cancel, Icon24Done } from '@vkontakte/icons';
import { usePlatform } from '../../hooks/usePlatform';
import { Platform } from '../../lib/platform';
import { ModalWrapper } from '../../storybook/ModalWrapper';
import { withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { Div } from '../Div/Div';
import { ModalPage } from '../ModalPage/ModalPage';
import { PanelHeaderButton } from '../PanelHeaderButton/PanelHeaderButton';
import { ModalPageHeader, ModalPageHeaderProps } from './ModalPageHeader';

const story: Meta<ModalPageHeaderProps> = {
  title: 'Modals/ModalPageHeader',
  component: ModalPageHeader,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
  decorators: [withVKUILayout],
};

export default story;

type Story = StoryObj<ModalPageHeaderProps>;

const MODAL_ID = 'MODAL_ID';

export const Example: Story = {
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
                  {(platform === Platform.ANDROID || platform === Platform.VKCOM) && (
                    <PanelHeaderButton>
                      <Icon24Cancel />
                    </PanelHeaderButton>
                  )}
                </React.Fragment>
              }
              after={
                <React.Fragment>
                  {(platform === Platform.ANDROID || platform === Platform.VKCOM) && (
                    <PanelHeaderButton>
                      <Icon24Done />
                    </PanelHeaderButton>
                  )}
                  {platform === Platform.IOS && <PanelHeaderButton>Готово</PanelHeaderButton>}
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
