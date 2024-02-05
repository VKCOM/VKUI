import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import {
  Icon16Dropdown,
  Icon24Done,
  Icon28AddOutline,
  Icon28SettingsOutline,
  Icon28UsersOutline,
} from '@vkontakte/icons';
import { noop } from '@vkontakte/vkjs';
import { withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { Cell } from '../Cell/Cell';
import { Div } from '../Div/Div';
import { Panel } from '../Panel/Panel';
import { PanelHeader } from '../PanelHeader/PanelHeader';
import { PanelHeaderBack } from '../PanelHeaderBack/PanelHeaderBack';
import { PanelHeaderButton } from '../PanelHeaderButton/PanelHeaderButton';
import { PanelHeaderContent } from '../PanelHeaderContent/PanelHeaderContent';
import { View } from '../View/View';
import { PanelHeaderContext, PanelHeaderContextProps } from './PanelHeaderContext';

const story: Meta<PanelHeaderContextProps> = {
  title: 'Layout/PanelHeaderContext',
  component: PanelHeaderContext,
  parameters: {
    ...CanvasFullLayout,
    ...DisableCartesianParam,
  },
  decorators: [withVKUILayout],
};

export default story;

type Story = StoryObj<PanelHeaderContextProps>;

export const Example: Story = {
  render: function Render() {
    const [contextOpened, setContextOpened] = React.useState(true);
    const [mode, setMode] = React.useState<string | undefined>('all');

    const toggleContext = () => {
      setContextOpened((prev) => !prev);
    };

    const select = (e: React.MouseEvent<HTMLElement>) => {
      const mode = e.currentTarget.dataset.mode;
      setMode(mode);
      requestAnimationFrame(toggleContext);
    };

    return (
      <View id="main" activePanel="panel1">
        <Panel id="panel1">
          <PanelHeader
            before={<PanelHeaderBack onClick={noop} />}
            after={
              <PanelHeaderButton onClick={noop}>
                <Icon28AddOutline />
              </PanelHeaderButton>
            }
          >
            <PanelHeaderContent
              aside={
                <Icon16Dropdown
                  style={{
                    transform: `rotate(${contextOpened ? '180deg' : '0'})`,
                  }}
                />
              }
              onClick={toggleContext}
            >
              Communities
            </PanelHeaderContent>
          </PanelHeader>
          <PanelHeaderContext opened={contextOpened} onClose={toggleContext}>
            <Cell
              before={<Icon28UsersOutline />}
              after={mode === 'all' ? <Icon24Done fill="var(--vkui--color_icon_accent)" /> : null}
              onClick={select}
              data-mode="all"
            >
              Communities
            </Cell>
            <Cell
              before={<Icon28SettingsOutline />}
              after={
                mode === 'managed' ? <Icon24Done fill="var(--vkui--color_icon_accent)" /> : null
              }
              onClick={select}
              data-mode="managed"
            >
              Managed Communities
            </Cell>
          </PanelHeaderContext>
          <Div>PanelHeaderContext</Div>
        </Panel>
      </View>
    );
  },
};
