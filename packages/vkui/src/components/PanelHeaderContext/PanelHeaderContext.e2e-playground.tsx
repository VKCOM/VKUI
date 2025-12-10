import {
  Icon16Dropdown,
  Icon24Done,
  Icon28AddOutline,
  Icon28SettingsOutline,
  Icon28UsersOutline,
} from '@vkontakte/icons';
import { noop } from '@vkontakte/vkjs';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { Panel } from '../Panel/Panel';
import { PanelHeader } from '../PanelHeader/PanelHeader';
import { PanelHeaderBack } from '../PanelHeaderBack/PanelHeaderBack';
import { PanelHeaderButton } from '../PanelHeaderButton/PanelHeaderButton';
import { PanelHeaderContent } from '../PanelHeaderContent/PanelHeaderContent';
import { SimpleCell } from '../SimpleCell/SimpleCell';
import { SplitCol } from '../SplitCol/SplitCol';
import { SplitLayout } from '../SplitLayout/SplitLayout';
import { View } from '../View/View';
import { PanelHeaderContext, type PanelHeaderContextProps } from './PanelHeaderContext';

export const PanelHeaderContextPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground {...props}>
      {(props: PanelHeaderContextProps) => (
        <SplitLayout center header={<PanelHeader delimiter="none" />}>
          <SplitCol
            width="100%"
            maxWidth="560px"
            stretchedOnMobile
            autoSpaced
            style={{ height: 600 }}
          >
            <View activePanel="context2">
              <Panel id="context2">
                <PanelHeader
                  before={<PanelHeaderBack onClick={noop} hideLabelOnVKCom hideLabelOnIOS />}
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
                          transform: `rotate('180deg'})`,
                        }}
                      />
                    }
                  >
                    Communities
                  </PanelHeaderContent>
                </PanelHeader>
                <PanelHeaderContext {...props} opened>
                  <SimpleCell
                    before={<Icon28UsersOutline />}
                    after={<Icon24Done fill="var(--vkui--color_icon_accent)" />}
                    onClick={noop}
                    data-mode="all"
                  >
                    Communities
                  </SimpleCell>
                  <SimpleCell before={<Icon28SettingsOutline />} onClick={noop} data-mode="managed">
                    Managed Communities
                  </SimpleCell>
                </PanelHeaderContext>
              </Panel>
            </View>
          </SplitCol>
        </SplitLayout>
      )}
    </ComponentPlayground>
  );
};
