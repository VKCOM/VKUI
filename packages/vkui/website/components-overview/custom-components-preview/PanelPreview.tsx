import { Icon28MusicOutline, Icon28UserOutline, Icon28UsersOutline } from '@vkontakte/icons';
import {
  Avatar,
  Cell,
  Group,
  Panel,
  PanelHeader,
  PanelHeaderBack,
  Search,
  Spinner,
  View,
} from '../../../src';

export const PanelPreview = () => {
  return (
    <View activePanel="panel1" style={{ minWidth: 400 }}>
      <Panel id="panel1">
        <PanelHeader>More</PanelHeader>
        <Group>
          <Cell chevron="auto" before={<Icon28UserOutline />}>
            Friends
          </Cell>
          <Cell chevron="auto" before={<Icon28UsersOutline />}>
            Communities
          </Cell>
          <Cell chevron="auto" before={<Icon28MusicOutline />}>
            Music
          </Cell>
        </Group>
      </Panel>
      <Panel id="panel2">
        <PanelHeader delimiter="spacing" before={<PanelHeaderBack />}>
          Communities
        </PanelHeader>
        <Group>
          <Search />
          <Cell subtitle="Humor" before={<Avatar />}>
            Swipe Right
          </Cell>
          <Cell subtitle="Cultural Center" before={<Avatar />}>
            Out Cinema
          </Cell>
          <Cell subtitle="Movies" before={<Avatar />}>
            #ARTPOKAZ
          </Cell>
        </Group>
      </Panel>
      <Panel id="panel3" centered>
        <PanelHeader before={<PanelHeaderBack />}>Out Cinema</PanelHeader>
        <Spinner />
        <div style={{ marginTop: 10 }}>Centered Content</div>
      </Panel>
    </View>
  );
};
