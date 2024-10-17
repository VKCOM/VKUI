import { Button,ButtonGroup, Icon56UserAddOutline, Icon56UsersOutline, Placeholder } from '@vkontakte/vkui';
import React from 'react';

const App = () => {
  return (
    <React.Fragment>
      {/* Проверяем переименование свойства header */}
      <Placeholder
        icon={<Icon56UsersOutline />}
        header={<Button size="m">Подключить сообщества</Button>}
      >
        Подключите сообщества, от которых Вы хотите получать уведомления
      </Placeholder>

      {/* Проверяем переименование подкомпонента Header */}
      <Placeholder.Container>
        <Placeholder.Header>Find friends</Placeholder.Header>
      </Placeholder.Container>

      {/* Проверяем переименование подкомпонента Header и Text */}
      <Placeholder.Container>
        <Placeholder.Icon>
          <Icon56UserAddOutline />
        </Placeholder.Icon>
        <Placeholder.Header>Find friends</Placeholder.Header>
        <Placeholder.Text>The people you add as your friends will be displayed here</Placeholder.Text>
        <Placeholder.Actions>
          <ButtonGroup mode="vertical" align="center">
            <Button size="m">Button</Button>
            <Button size="m" mode="tertiary">
              Button
            </Button>
          </ButtonGroup>
        </Placeholder.Actions>
      </Placeholder.Container>
    </React.Fragment>
  );
};
