import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { Avatar } from '../Avatar/Avatar';
import { Group } from '../Group/Group';
import { List } from '../List/List';
import { Panel } from '../Panel/Panel';
import { PanelHeader } from '../PanelHeader/PanelHeader';
import { PanelHeaderBack } from '../PanelHeaderBack/PanelHeaderBack';
import { SimpleCell } from '../SimpleCell/SimpleCell';
import { View } from '../View/View';
import { Tooltip, TooltipProps } from './Tooltip';
import { TooltipContainer } from './TooltipContainer';

const story: Meta<TooltipProps> = {
  title: 'Poppers/Tooltip',
  component: Tooltip,
  parameters: DisableCartesianParam,
};

export default story;

type Story = StoryObj<TooltipProps>;

export const Playground: Story = {
  render: (args) => (
    <TooltipContainer style={{ minHeight: '100%' }}>
      <div
        style={{
          height: '200px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Tooltip {...args}>
          <Avatar />
        </Tooltip>
      </div>
    </TooltipContainer>
  ),
  args: {
    text: 'Tooltip',
  },
};

export const ShowCase: Story = {
  render: function Render() {
    const [tooltip, setTooltip] = React.useState(true);
    const [tooltip2, setTooltip2] = React.useState(true);
    const [tooltip3, setTooltip3] = React.useState(false);
    const [activePanel, setActivePanel] = React.useState('tooltip');

    return (
      <View activePanel={activePanel}>
        <Panel id="tooltip">
          <PanelHeader>Tooltip</PanelHeader>
          <Group>
            <List>
              <SimpleCell>Музыка</SimpleCell>
              <SimpleCell>Видео</SimpleCell>
              <SimpleCell>Игры</SimpleCell>
              <SimpleCell>Закладки</SimpleCell>
              <SimpleCell>Документы</SimpleCell>
              <SimpleCell>Денежные переводы</SimpleCell>
            </List>
          </Group>
          <Group>
            <Tooltip
              text="У нас тут brand new функционал подвезли. Зацените!"
              isShown={tooltip}
              onClose={() => setTooltip(false)}
              offsetX={10}
            >
              <SimpleCell onClick={() => setActivePanel('tooltip2')}>VK Pay</SimpleCell>
            </Tooltip>
          </Group>
        </Panel>

        <Panel id="tooltip2">
          <PanelHeader
            before={
              <Tooltip
                isShown={tooltip2}
                onClose={() => {
                  setTooltip2(false);
                  setTooltip3(true);
                }}
                text="Нажмите на кнопку, если хотите вернуться"
                header="Назад"
              >
                <PanelHeaderBack onClick={() => setActivePanel('tooltip')} />
              </Tooltip>
            }
          >
            Tooltip
          </PanelHeader>
          <Group>
            <List>
              <SimpleCell
                before={
                  <Tooltip
                    text="Теперь у нас появились аватарки в списках. Правда круто?"
                    isShown={tooltip3}
                    onClose={() => setTooltip3(false)}
                    cornerOffset={-6}
                  >
                    <Avatar />
                  </Tooltip>
                }
                subtitle="Веб-сайт"
              >
                Команда ВКонтакте
              </SimpleCell>
              <SimpleCell before={<Avatar />} subtitle="Музыкант">
                Robbie Williams
              </SimpleCell>
              <SimpleCell before={<Avatar />} subtitle="Издательский дом">
                ПостНаука
              </SimpleCell>
              <SimpleCell before={<Avatar />} subtitle="Издательский дом">
                ПостНаука
              </SimpleCell>
              <SimpleCell before={<Avatar />} subtitle="Издательский дом">
                ПостНаука
              </SimpleCell>
              <SimpleCell before={<Avatar />} subtitle="Издательский дом">
                ПостНаука
              </SimpleCell>
              <SimpleCell before={<Avatar />} subtitle="Издательский дом">
                ПостНаука
              </SimpleCell>
            </List>
          </Group>
        </Panel>
      </View>
    );
  },
  decorators: [withVKUILayout],
  parameters: CanvasFullLayout,
};

export const WithTooltipContainer: Story = {
  render: () => (
    <>
      <TooltipContainer style={{ minHeight: '120vh' }}>
        <Tooltip text="Я скроллюсь">
          <div style={{ display: 'inline-block' }}>
            <Avatar />
          </div>
        </Tooltip>
        <Tooltip text="Двигаем стрелочку" cornerOffset={20}>
          <div style={{ display: 'inline-block', marginLeft: 100 }}>
            <Avatar />
          </div>
        </Tooltip>
      </TooltipContainer>
      <TooltipContainer
        fixed
        style={{
          minHeight: '30px',
          border: '1px solid',
          margin: '100px 100px 0',
          position: 'relative',
          background: 'var(--vkui--color_background_content)',
          zIndex: 1,
        }}
      >
        <Tooltip text="Я вылезаю (fixed)">
          <div style={{ display: 'inline-block' }}>
            <Avatar />
          </div>
        </Tooltip>
      </TooltipContainer>
      <TooltipContainer
        style={{
          minHeight: '100vh',
          border: '1px solid',
          margin: '64px 100px 100px',
          position: 'relative',
          background: 'var(--vkui--color_background_content)',
          zIndex: 1,
        }}
      >
        <Tooltip text="Я прилип слева">
          <div style={{ display: 'inline-block', position: 'absolute', right: 0 }}>
            <Avatar />
          </div>
        </Tooltip>
        <Tooltip text="Я прилип справа">
          <div style={{ display: 'inline-block' }}>
            <Avatar />
          </div>
        </Tooltip>
        <Tooltip text="Я прилип слева">
          <div
            style={{
              display: 'inline-block',
              position: 'absolute',
              left: 0,
              bottom: 0,
            }}
          >
            <Avatar />
          </div>
        </Tooltip>
        <Tooltip text="Я прилип справа">
          <div
            style={{
              display: 'inline-block',
              position: 'absolute',
              right: 0,
              bottom: 0,
            }}
          >
            <Avatar />
          </div>
        </Tooltip>
        <Tooltip text="Я по центру 😎">
          <div
            style={{
              display: 'inline-block',
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(50%, 50%)',
            }}
          >
            <Avatar />
          </div>
        </Tooltip>
      </TooltipContainer>
      <div style={{ height: '100vh' }}></div>
      <TooltipContainer fixed style={{ position: 'fixed', bottom: 0, width: '100%' }}>
        <Tooltip text="Я прибит к низу">
          <div style={{ display: 'inline-block' }}>
            <Avatar />
          </div>
        </Tooltip>
      </TooltipContainer>
    </>
  ),
};

export const CustomArrowIcon: Story = {
  render: () => {
    const ARROW_HEIGHT = 11;

    const CustomIcon = (props: React.SVGAttributes<SVGSVGElement>) => {
      return (
        <svg
          width="80"
          height={ARROW_HEIGHT}
          viewBox={`0 0 80 ${ARROW_HEIGHT}`}
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path d="M40 0C33 5.5 20 10 0 10v1h80v-1C60 10 47 5.5 40 0Z" fill="currentColor" />
        </svg>
      );
    };

    return (
      <TooltipContainer>
        <Tooltip
          text="У этого тултипа кастомная стрелка"
          offsetY={ARROW_HEIGHT}
          arrowPadding={6}
          ArrowIcon={CustomIcon}
        >
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            Якорь
          </div>
        </Tooltip>
      </TooltipContainer>
    );
  },
};
