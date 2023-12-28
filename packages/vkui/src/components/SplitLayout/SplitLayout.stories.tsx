import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import {
  Icon56MentionOutline,
  Icon56MessageReadOutline,
  Icon56UsersOutline,
} from '@vkontakte/icons';
import { useAdaptivityConditionalRender } from '../../hooks/useAdaptivityConditionalRender';
import { usePlatform } from '../../hooks/usePlatform';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { Alert } from '../Alert/Alert';
import { Avatar } from '../Avatar/Avatar';
import { Button } from '../Button/Button';
import { Cell } from '../Cell/Cell';
import { CellButton } from '../CellButton/CellButton';
import { Group } from '../Group/Group';
import { ModalPage } from '../ModalPage/ModalPage';
import { ModalPageHeader } from '../ModalPageHeader/ModalPageHeader';
import { ModalRoot } from '../ModalRoot/ModalRootAdaptive';
import { Panel } from '../Panel/Panel';
import { PanelHeader } from '../PanelHeader/PanelHeader';
import { Placeholder } from '../Placeholder/Placeholder';
import { Separator } from '../Separator/Separator';
import { SplitCol } from '../SplitCol/SplitCol';
import { View } from '../View/View';
import { SplitLayout, SplitLayoutProps } from './SplitLayout';

const story: Meta<SplitLayoutProps> = {
  title: 'Layout/SplitLayout',
  component: SplitLayout,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
};

export default story;

type Story = StoryObj<SplitLayoutProps>;

const panels = ['panel 1', 'panel 2', 'panel 3'];
const modals = ['modal 1', 'modal 2'];

export const Example: Story = {
  render: function Render() {
    const platform = usePlatform();
    const { viewWidth } = useAdaptivityConditionalRender();
    const [panel, setPanel] = React.useState(panels[0]);
    const [modal, setModal] = React.useState<string | null>(null);
    const [popout, setPopout] = React.useState<React.ReactNode | null>(null);

    const modalRoot = (
      <ModalRoot activeModal={modal}>
        <ModalPage
          id={modals[0]}
          onClose={() => setModal(null)}
          header={<ModalPageHeader>Modal 1</ModalPageHeader>}
        >
          <Group>
            <CellButton onClick={() => setModal(modals[1])}>Modal 2</CellButton>
          </Group>
        </ModalPage>
        <ModalPage
          id={modals[1]}
          onClose={() => setModal(null)}
          header={<ModalPageHeader>Modal 2</ModalPageHeader>}
        >
          <Group>
            <CellButton onClick={() => setModal(modals[0])}>Modal 1</CellButton>
          </Group>
        </ModalPage>
      </ModalRoot>
    );

    const isVKCOM = platform === 'vkcom';

    return (
      <SplitLayout
        style={{ justifyContent: 'center' }}
        header={!isVKCOM && <PanelHeader delimiter="none" />}
        popout={popout}
        modal={modalRoot}
      >
        {viewWidth.tabletPlus && (
          <SplitCol className={viewWidth.tabletPlus.className} fixed width={280} maxWidth={280}>
            <Panel>
              {!isVKCOM && <PanelHeader />}
              <Group>
                {panels.map((i) => (
                  <Cell
                    key={i}
                    disabled={i === panel}
                    style={
                      i === panel
                        ? {
                            backgroundColor: 'var(--vkui--color_background_secondary)',
                            borderRadius: 8,
                          }
                        : {}
                    }
                    onClick={() => setPanel(i)}
                  >
                    {i}
                  </Cell>
                ))}
                <Separator />
                <Cell onClick={() => setModal(modals[0])}>modal 1</Cell>
                <Cell onClick={() => setModal(modals[1])}>modal 2</Cell>
                <Cell
                  onClick={() =>
                    setPopout(<Alert header="Alert!" onClose={() => setPopout(null)} />)
                  }
                >
                  alert
                </Cell>
              </Group>
            </Panel>
          </SplitCol>
        )}

        <SplitCol width="100%" maxWidth="560px" stretchedOnMobile autoSpaced>
          <View activePanel={panel}>
            <Panel id={panels[0]}>
              <PanelHeader after={<Avatar size={36} />}>Panel 1</PanelHeader>
              <Group>
                <Placeholder
                  icon={<Icon56UsersOutline />}
                  header="Уведомления от сообществ"
                  action={<Button size="m">Подключить сообщества</Button>}
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
              <PanelHeader after={<Avatar size={36} />}>Panel 2</PanelHeader>
              <Group>
                <Placeholder>Доступ запрещён</Placeholder>
                <Separator />
                <Placeholder
                  header="Находите друзей"
                  action={<Button size="m">Найти друзей</Button>}
                >
                  Здесь будут отображаться люди, которых вы добавите в друзья
                </Placeholder>
              </Group>
            </Panel>

            <Panel id={panels[2]}>
              <PanelHeader after={<Avatar size={36} />}>Panel 3</PanelHeader>
              <Group>
                <Placeholder
                  icon={<Icon56MessageReadOutline />}
                  action={
                    <Button size="m" mode="tertiary">
                      Показать все сообщения
                    </Button>
                  }
                >
                  Нет непрочитанных
                  <br />
                  сообщений
                </Placeholder>
              </Group>
            </Panel>
          </View>
        </SplitCol>
      </SplitLayout>
    );
  },
};
