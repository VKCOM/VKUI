'use client';

import {
  Icon16Dropdown,
  Icon24Done,
  Icon28AddOutline,
  Icon28SettingsOutline,
  Icon28UsersOutline,
} from '@vkontakte/icons';
import { noop } from '@vkontakte/vkjs';
import {
  Cell,
  Div,
  Panel,
  PanelHeader,
  PanelHeaderBack,
  PanelHeaderButton,
  PanelHeaderContent,
  PanelHeaderContext,
  View,
} from '../../../src';
import { ElementScrollController } from '../../../src/components/AppRoot/ScrollContext';

export const PanelHeaderContextPreview = () => {
  return (
    <ElementScrollController elRef={{ current: null }}>
      <View id="main" activePanel="panel1" style={{ minWidth: 400, maxWidth: 600 }}>
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
                    transform: `rotate(180deg)`,
                  }}
                />
              }
              onClick={noop}
            >
              Communities
            </PanelHeaderContent>
          </PanelHeader>
          <PanelHeaderContext opened={true} onClose={noop}>
            <Cell
              before={<Icon28UsersOutline />}
              after={<Icon24Done fill="var(--vkui--color_icon_accent)" />}
              onClick={noop}
              data-mode="all"
            >
              Communities
            </Cell>
            <Cell
              before={<Icon28SettingsOutline />}
              after={null}
              onClick={noop}
              data-mode="managed"
            >
              Managed Communities
            </Cell>
          </PanelHeaderContext>
          <Div>PanelHeaderContext</Div>
        </Panel>
      </View>
    </ElementScrollController>
  );
};
