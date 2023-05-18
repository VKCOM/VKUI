import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { withSinglePanel, withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { Avatar } from '../Avatar/Avatar';
import { Button } from '../Button/Button';
import { Card } from '../Card/Card';
import { CardScroll } from '../CardScroll/CardScroll';
import { Div } from '../Div/Div';
import { FormItem } from '../FormItem/FormItem';
import { Group } from '../Group/Group';
import { Header } from '../Header/Header';
import { HorizontalCell } from '../HorizontalCell/HorizontalCell';
import { HorizontalScroll } from '../HorizontalScroll/HorizontalScroll';
import { Input } from '../Input/Input';
import { ModalPageHeader } from '../ModalPageHeader/ModalPageHeader';
import { Panel } from '../Panel/Panel';
import { PanelHeader } from '../PanelHeader/PanelHeader';
import { SimpleCell } from '../SimpleCell/SimpleCell';
import { Textarea } from '../Textarea/Textarea';
import { ModalSheet, ModalSheetProps } from './ModalSheet';

const story: Meta<ModalSheetProps> = {
  title: 'Modals/ModalSheet',
  component: ModalSheet,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
  decorators: [withSinglePanel, withVKUILayout],
};

export default story;

type Story = StoryObj<ModalSheetProps>;

export const Example: Story = {
  render: function Render() {
    const [modal, setModal] = React.useState<undefined | string>(undefined);

    const closeModal = () => setModal(undefined);

    return (
      <Panel>
        <PanelHeader>ANKI</PanelHeader>
        <Group>
          <FormItem>
            <Input />
          </FormItem>

          <SimpleCell onClick={() => setModal('1')}>open modal 1</SimpleCell>
          <SimpleCell onClick={() => setModal('2')}>open modal 2</SimpleCell>
        </Group>

        <Group>
          {Array(50)
            .fill(undefined)
            .map((_, i) => (
              <SimpleCell key={i} expandable="always">
                SimpleCell
              </SimpleCell>
            ))}
        </Group>

        {modal === '1' && (
          <ModalSheet onClosed={closeModal}>
            <ModalSheet.Header>
              <ModalPageHeader>Заголовок</ModalPageHeader>
            </ModalSheet.Header>

            <ModalSheet.Content>
              <Group mode="plain">
                <Header>https://github.com/VKCOM/VKUI/issues/335</Header>
                <HorizontalScroll>
                  <div style={{ display: 'flex' }}>
                    {Array(50)
                      .fill(undefined)
                      .map((_, i) => (
                        <HorizontalCell key={i} header="title">
                          <Avatar />
                        </HorizontalCell>
                      ))}
                  </div>
                </HorizontalScroll>
              </Group>

              <Group>
                <Header>https://github.com/VKCOM/VKUI/issues/338</Header>
                <Header>https://github.com/VKCOM/VKUI/issues/599</Header>
                <FormItem>
                  <Input />
                </FormItem>
              </Group>

              <Group>
                <Header>https://github.com/VKCOM/VKUI/issues/1071</Header>
                <FormItem>
                  <Textarea />
                </FormItem>
              </Group>

              <Group>
                <Header>https://github.com/VKCOM/VKUI/issues/1494</Header>
                <CardScroll size="s">
                  <div style={{ display: 'flex' }}>
                    {Array(50)
                      .fill(undefined)
                      .map((_, i) => (
                        <Card key={i}>
                          <div style={{ paddingBottom: '66%' }} />
                        </Card>
                      ))}
                  </div>
                </CardScroll>
              </Group>

              <img
                style={{
                  width: '100%',
                  height: 232,
                }}
                src="https://upload.wikimedia.org/wikipedia/commons/1/17/%D0%A8%D0%B8%D1%80%D0%BE%D0%BA%D0%B8%D0%B9_%D0%9F%D1%83%D1%82%D0%B8%D0%BD_%D0%B8%D0%B4%D1%91%D1%82.jpg"
              />
              <Div>
                https://github.com/VKCOM/VKUI/issues/604 https://github.com/VKCOM/VKUI/issues/741
                https://github.com/VKCOM/VKUI/issues/876 https://github.com/VKCOM/VKUI/issues/1570
                https://github.com/VKCOM/VKUI/issues/2008 https://github.com/VKCOM/VKUI/issues/2029
                https://github.com/VKCOM/VKUI/issues/2030 https://github.com/VKCOM/VKUI/issues/2449
              </Div>
            </ModalSheet.Content>

            <ModalSheet.Footer>
              <Div>
                <Button size="l" stretched>
                  Button
                </Button>
              </Div>
            </ModalSheet.Footer>
          </ModalSheet>
        )}

        {modal === '2' && (
          <ModalSheet onClosed={closeModal}>
            <ModalSheet.Header>
              <ModalPageHeader>Заголовок</ModalPageHeader>
            </ModalSheet.Header>

            <img
              style={{
                width: '100%',
                // height: 232,
              }}
              src="https://upload.wikimedia.org/wikipedia/commons/1/17/%D0%A8%D0%B8%D1%80%D0%BE%D0%BA%D0%B8%D0%B9_%D0%9F%D1%83%D1%82%D0%B8%D0%BD_%D0%B8%D0%B4%D1%91%D1%82.jpg"
            />
          </ModalSheet>
        )}
      </Panel>
    );
  },
};
