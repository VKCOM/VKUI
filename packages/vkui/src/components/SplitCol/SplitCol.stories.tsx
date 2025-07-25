import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Icon56MentionOutline, Icon56UsersOutline } from '@vkontakte/icons';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { Button } from '../Button/Button';
import { Group } from '../Group/Group';
import { Panel } from '../Panel/Panel';
import { Placeholder } from '../Placeholder/Placeholder';
import { Separator } from '../Separator/Separator';
import { SplitLayout } from '../SplitLayout/SplitLayout';
import { View } from '../View/View';
import { SplitCol, type SplitColProps } from './SplitCol';

const story: Meta<SplitColProps> = {
  title: 'Layout/SplitLayout/SplitCol',
  component: SplitCol,
  parameters: createStoryParameters('SplitCol', CanvasFullLayout, DisableCartesianParam),
  tags: ['Раскладка'],
};

export default story;

type Story = StoryObj<SplitColProps>;

const panels = ['panel 1', 'panel 2'];

export const Playground: Story = {
  args: {
    width: '100%',
    maxWidth: 560,
  },
  render: function Render(args) {
    const [panel, setPanel] = React.useState(panels[0]);

    return (
      <SplitLayout center>
        <SplitCol {...args}>
          <View activePanel={panel}>
            <Panel id={panels[0]}>
              <Group>
                <Placeholder
                  icon={<Icon56UsersOutline />}
                  title="Уведомления от сообществ"
                  action={
                    <Button size="m" onClick={() => setPanel(panels[1])}>
                      Подключить сообщества
                    </Button>
                  }
                >
                  Подключите сообщества, от которых Вы хотите получать уведомления
                </Placeholder>
                <Separator />
                <Placeholder icon={<Icon56MentionOutline />}>
                  Введите адрес страницы в поле поиска
                </Placeholder>
              </Group>
            </Panel>
            <Panel id={panels[1]}>
              <Group>
                <Placeholder>Доступ запрещён</Placeholder>
                <Separator />
                <Placeholder
                  title="Находите друзей"
                  action={
                    <Button size="m" onClick={() => setPanel(panels[0])}>
                      Найти друзей
                    </Button>
                  }
                >
                  Здесь будут отображаться люди, которых вы добавите в друзья
                </Placeholder>
              </Group>
            </Panel>
          </View>
        </SplitCol>
      </SplitLayout>
    );
  },
};
