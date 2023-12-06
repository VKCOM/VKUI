import * as React from 'react';
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
import { OnboardingTooltip, OnboardingTooltipProps } from './OnboardingTooltip';
import { OnboardingTooltipContainer } from './OnboardingTooltipContainer';

const story: Meta<OnboardingTooltipProps> = {
  title: 'Poppers/OnboardingTooltip',
  component: OnboardingTooltip,
  parameters: DisableCartesianParam,
};

export default story;

type Story = StoryObj<OnboardingTooltipProps>;

export const Playground: Story = {
  render: (args) => (
    <OnboardingTooltipContainer style={{ minHeight: '100%' }}>
      <div
        style={{
          height: '200px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <OnboardingTooltip {...args}>
          <Avatar />
        </OnboardingTooltip>
      </div>
    </OnboardingTooltipContainer>
  ),
  args: {
    text: 'OnboardingTooltip',
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
          <PanelHeader>Onboarding tooltip</PanelHeader>
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
            <OnboardingTooltip
              text="У нас тут brand new функционал подвезли. Зацените!"
              shown={tooltip}
              onClose={() => setTooltip(false)}
              offsetByMainAxis={10}
            >
              <SimpleCell onClick={() => setActivePanel('tooltip2')}>VK Pay</SimpleCell>
            </OnboardingTooltip>
          </Group>
        </Panel>

        <Panel id="tooltip2">
          <PanelHeader
            before={
              <OnboardingTooltip
                shown={tooltip2}
                onClose={() => {
                  setTooltip2(false);
                  setTooltip3(true);
                }}
                text="Нажмите на кнопку, если хотите вернуться"
                header="Назад"
              >
                <PanelHeaderBack onClick={() => setActivePanel('tooltip')} />
              </OnboardingTooltip>
            }
          >
            OnboardingTooltip
          </PanelHeader>
          <Group>
            <List>
              <SimpleCell
                before={
                  <OnboardingTooltip
                    text="Теперь у нас появились аватарки в списках. Правда круто?"
                    shown={tooltip3}
                    onClose={() => setTooltip3(false)}
                    arrowOffset={-6}
                  >
                    <Avatar />
                  </OnboardingTooltip>
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

export const WithOnboardingTooltipContainer: Story = {
  render: () => (
    <>
      <OnboardingTooltipContainer style={{ minHeight: '120vh' }}>
        <OnboardingTooltip text="Я скроллюсь">
          <div style={{ display: 'inline-block' }}>
            <Avatar />
          </div>
        </OnboardingTooltip>
        <OnboardingTooltip text="Двигаем стрелочку" arrowOffset={20}>
          <div style={{ display: 'inline-block', marginLeft: 100 }}>
            <Avatar />
          </div>
        </OnboardingTooltip>
      </OnboardingTooltipContainer>
      <OnboardingTooltipContainer
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
        <OnboardingTooltip text="Я вылезаю (fixed)">
          <div style={{ display: 'inline-block' }}>
            <Avatar />
          </div>
        </OnboardingTooltip>
      </OnboardingTooltipContainer>
      <OnboardingTooltipContainer
        style={{
          minHeight: '100vh',
          border: '1px solid',
          margin: '64px 100px 100px',
          position: 'relative',
          background: 'var(--vkui--color_background_content)',
          zIndex: 1,
        }}
      >
        <OnboardingTooltip text="Я прилип слева">
          <div style={{ display: 'inline-block', position: 'absolute', right: 0 }}>
            <Avatar />
          </div>
        </OnboardingTooltip>
        <OnboardingTooltip text="Я прилип справа">
          <div style={{ display: 'inline-block' }}>
            <Avatar />
          </div>
        </OnboardingTooltip>
        <OnboardingTooltip text="Я прилип слева">
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
        </OnboardingTooltip>
        <OnboardingTooltip text="Я прилип справа">
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
        </OnboardingTooltip>
        <OnboardingTooltip text="Я по центру 😎">
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
        </OnboardingTooltip>
      </OnboardingTooltipContainer>
      <div style={{ height: '100vh' }}></div>
      <OnboardingTooltipContainer fixed style={{ position: 'fixed', bottom: 0, width: '100%' }}>
        <OnboardingTooltip text="Я прибит к низу">
          <div style={{ display: 'inline-block' }}>
            <Avatar />
          </div>
        </OnboardingTooltip>
      </OnboardingTooltipContainer>
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
      <OnboardingTooltipContainer>
        <OnboardingTooltip
          text="У этого тултипа кастомная стрелка"
          offsetByCrossAxis={ARROW_HEIGHT}
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
        </OnboardingTooltip>
      </OnboardingTooltipContainer>
    );
  },
};
