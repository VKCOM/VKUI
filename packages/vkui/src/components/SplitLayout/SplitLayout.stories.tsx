import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  Icon56MentionOutline,
  Icon56MessageReadOutline,
  Icon56UsersOutline,
} from '@vkontakte/icons';
import { useAdaptivityConditionalRender } from '../../hooks/useAdaptivityConditionalRender';
import { useModalManager } from '../../hooks/useModalManager';
import { usePlatform } from '../../hooks/usePlatform';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { Accordion } from '../Accordion/Accordion';
import { Alert } from '../Alert/Alert';
import { Avatar } from '../Avatar/Avatar';
import { Button } from '../Button/Button';
import { Cell } from '../Cell/Cell';
import { CellButton } from '../CellButton/CellButton';
import { Group } from '../Group/Group';
import { ModalPageHeader } from '../ModalPageHeader/ModalPageHeader';
import { Panel } from '../Panel/Panel';
import { PanelHeader } from '../PanelHeader/PanelHeader';
import { Placeholder } from '../Placeholder/Placeholder';
import { Separator } from '../Separator/Separator';
import { SplitCol } from '../SplitCol/SplitCol';
import { View } from '../View/View';
import { SplitLayout, type SplitLayoutProps } from './SplitLayout';

const story: Meta<SplitLayoutProps> = {
  title: 'Layout/SplitLayout',
  component: SplitLayout,
  parameters: createStoryParameters('SplitLayout', CanvasFullLayout, DisableCartesianParam),
  tags: ['Раскладка'],
};

export default story;

type Story = StoryObj<SplitLayoutProps>;

const panels = ['panel 1', 'panel 2', 'panel 3'];
const modals = ['modal 1', 'modal 2'];

export const Playground: Story = {
  render: function Render({ children, ...restProps }: SplitLayoutProps) {
    const platform = usePlatform();
    const { viewWidth } = useAdaptivityConditionalRender();
    const [modalsApi, modalsHolder] = useModalManager({
      saveHistory: false,
    });
    const [panel, setPanel] = React.useState(panels[0]);
    const [popout, setPopout] = React.useState<React.ReactNode | null>(null);

    const isVKCOM = platform === 'vkcom';

    function openModal1() {
      modalsApi.openModalPage({
        id: modals[0],
        header: <ModalPageHeader>Modal 1</ModalPageHeader>,
        children: (
          <Group>
            <CellButton onClick={openModal2}>Modal 2</CellButton>
          </Group>
        ),
      });
    }

    function openModal2() {
      modalsApi.openModalPage({
        id: modals[1],
        header: <ModalPageHeader>Modal 2</ModalPageHeader>,
        children: (
          <Group>
            <CellButton onClick={openModal1}>Modal 1</CellButton>
          </Group>
        ),
      });
    }

    return (
      <React.Fragment>
        <SplitLayout center header={!isVKCOM && <PanelHeader delimiter="none" />} {...restProps}>
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
                  <Cell onClick={openModal1}>modal 1</Cell>
                  <Cell onClick={openModal2}>modal 2</Cell>
                  <Cell
                    onClick={() =>
                      setPopout(<Alert title="Alert!" onClosed={() => setPopout(null)} />)
                    }
                  >
                    alert
                  </Cell>
                </Group>
                <Group>
                  <AdditionalContent />
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
                    title="Уведомления от сообществ"
                    action={<Button size="m">Подключить сообщества</Button>}
                  >
                    Подключите сообщества, от которых Вы хотите получать уведомления
                  </Placeholder>
                  <Separator />
                  <Placeholder icon={<Icon56MentionOutline />}>
                    Введите адрес страницы в поле поиска
                  </Placeholder>
                  {children}
                  <AdditionalContent />
                </Group>
              </Panel>

              <Panel id={panels[1]}>
                <PanelHeader after={<Avatar size={36} />}>Panel 2</PanelHeader>
                <Group>
                  <Placeholder>Доступ запрещён</Placeholder>
                  <Separator />
                  <Placeholder
                    title="Находите друзей"
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
        {popout}
        {modalsHolder}
      </React.Fragment>
    );
  },
};

export const Empty: Story = {
  render: function Render() {
    const { viewWidth } = useAdaptivityConditionalRender();
    return (
      <SplitLayout>
        {viewWidth.tabletPlus && (
          <SplitCol fixed width={280} maxWidth={280} className={viewWidth.tabletPlus.className}>
            <div
              style={{
                padding: 12,
                height: '100%',
                boxSizing: 'border-box',
                color: 'white',
                backgroundColor: 'tomato',
              }}
            >
              Фиксированная колонка слева
            </div>
          </SplitCol>
        )}
        <SplitCol>
          <div
            style={{
              padding: 12,
              height: '1000px',
              boxSizing: 'border-box',
              color: 'white',
              backgroundColor: 'steelblue',
            }}
          >
            Колонка справа
            {viewWidth.tabletMinus && (
              <p className={viewWidth.tabletMinus.className}>
                ⚠️ колонка слева спрятана по условию адаптивности
              </p>
            )}
          </div>
        </SplitCol>
      </SplitLayout>
    );
  },
};

function AdditionalContent() {
  return (
    <Accordion>
      <Accordion.Summary>Lorem ipsum dolor?</Accordion.Summary>
      <Accordion.Content>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquid voluptate
        voluptatem corrupti cumque id sint officiis rem tempora commodi ad esse nemo facilis, ipsa
        fugiat explicabo illum adipisci aperiam? Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Blanditiis aliquid voluptate voluptatem corrupti cumque id sint officiis rem tempora
        commodi ad esse nemo facilis, ipsa fugiat explicabo illum adipisci aperiam? Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Blanditiis aliquid voluptate voluptatem
        corrupti cumque id sint officiis rem tempora commodi ad esse nemo facilis, ipsa fugiat
        explicabo illum adipisci aperiam? Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Blanditiis aliquid voluptate voluptatem corrupti cumque id sint officiis rem tempora commodi
        ad esse nemo facilis, ipsa fugiat explicabo illum adipisci aperiam? Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Blanditiis aliquid voluptate voluptatem corrupti cumque
        id sint officiis rem tempora commodi ad esse nemo facilis, ipsa fugiat explicabo illum
        adipisci aperiam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
        aliquid voluptate voluptatem corrupti cumque id sint officiis rem tempora commodi ad esse
        nemo facilis, ipsa fugiat explicabo illum adipisci aperiam? Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Blanditiis aliquid voluptate voluptatem corrupti cumque id
        sint officiis rem tempora commodi ad esse nemo facilis, ipsa fugiat explicabo illum adipisci
        aperiam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquid
        voluptate voluptatem corrupti cumque id sint officiis rem tempora commodi ad esse nemo
        facilis, ipsa fugiat explicabo illum adipisci aperiam? Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Blanditiis aliquid voluptate voluptatem corrupti cumque id
        sint officiis rem tempora commodi ad esse nemo facilis, ipsa fugiat explicabo illum adipisci
        aperiam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquid
        voluptate voluptatem corrupti cumque id sint officiis rem tempora commodi ad esse nemo
        facilis, ipsa fugiat explicabo illum adipisci aperiam? Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Blanditiis aliquid voluptate voluptatem corrupti cumque id
        sint officiis rem tempora commodi ad esse nemo facilis, ipsa fugiat explicabo illum adipisci
        aperiam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquid
        voluptate voluptatem corrupti cumque id sint officiis rem tempora commodi ad esse nemo
        facilis, ipsa fugiat explicabo illum adipisci aperiam? Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Blanditiis aliquid voluptate voluptatem corrupti cumque id
        sint officiis rem tempora commodi ad esse nemo facilis, ipsa fugiat explicabo illum adipisci
        aperiam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquid
        voluptate voluptatem corrupti cumque id sint officiis rem tempora commodi ad esse nemo
        facilis, ipsa fugiat explicabo illum adipisci aperiam? Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Blanditiis aliquid voluptate voluptatem corrupti cumque id
        sint officiis rem tempora commodi ad esse nemo facilis, ipsa fugiat explicabo illum adipisci
        aperiam?
      </Accordion.Content>
    </Accordion>
  );
}
