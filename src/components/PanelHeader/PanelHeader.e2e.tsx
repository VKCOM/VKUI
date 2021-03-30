import { Fragment } from 'react';
import { Icon28PictureOutline } from '@vkontakte/icons';
import { Platform } from '../../lib/platform';
import { describeScreenshotFuzz } from '../../testing/e2e';
import Avatar from '../Avatar/Avatar';
import PanelHeaderButton from '../PanelHeaderButton/PanelHeaderButton';
import PanelHeaderBack from '../PanelHeaderBack/PanelHeaderBack';
import Search from '../Search/Search';
import Tabs from '../Tabs/Tabs';
import TabsItem from '../TabsItem/TabsItem';
import PanelHeaderContent from '../PanelHeaderContent/PanelHeaderContent';
import PanelHeader, { PanelHeaderProps } from './PanelHeader';

describe('PanelHeader', () => {
  const iconButton = <PanelHeaderButton><Icon28PictureOutline /></PanelHeaderButton>;
  const textButton = <PanelHeaderButton>Отмена</PanelHeaderButton>;
  const content = <PanelHeaderContent status="Был в сети вчера">Сложный</PanelHeaderContent>;

  describe('left and right', () => {
    describeScreenshotFuzz<PanelHeaderProps>((p) => <PanelHeader style={{ maxWidth: '720px' }} fixed={false} {...p} />, [{
      left: [
        undefined,
        <Avatar size={36} />,
        <PanelHeaderBack />,
        iconButton,
        textButton],
      children: [content],
    }, {
      right: [
        undefined,
        <Avatar size={36} />,
        iconButton,
        <Fragment>{iconButton}{iconButton}</Fragment>,
        textButton],
      children: [content],
    }]);
  });

  describe('content', () => {
    jest.setTimeout(15000);
    describeScreenshotFuzz<PanelHeaderProps>((p) => <PanelHeader fixed={false} {...p} />, [{
      left: [
        undefined,
        iconButton,
        textButton],
      right: [
        undefined,
        iconButton,
        textButton],
      children: [
        'Заголовок',
        content,
        <Search />,
        <Tabs>
          <TabsItem selected>Новости</TabsItem>
          <TabsItem>Интересное</TabsItem>
        </Tabs>,
      ],
    }], {
      platforms: [Platform.IOS, Platform.ANDROID],
    });

    const vkcomContent = [
      'Заголовок',
      content,
      <Search />,
      <Tabs>
        <TabsItem selected>Новости</TabsItem>
        <TabsItem>Интересное</TabsItem>
        <TabsItem>Интересное</TabsItem>
        <TabsItem>Интересное</TabsItem>
        <TabsItem>Интересное</TabsItem>
        <TabsItem>Интересное</TabsItem>
        <TabsItem>Интересное</TabsItem>
      </Tabs>,
    ];
    describeScreenshotFuzz<PanelHeaderProps>((p) => <PanelHeader style={{ width: '600px' }} fixed={false} {...p} />, [{
      children: vkcomContent,
    }, {
      left: [iconButton, textButton],
      children: vkcomContent,
    }, {
      right: [iconButton, textButton],
      children: vkcomContent,
    }], {
      platforms: [Platform.VKCOM],
    });
  });
});
