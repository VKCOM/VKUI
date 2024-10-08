import * as React from 'react';
import { Icon16Dropdown, Icon28MoonOutline, Icon28SunOutline } from '@vkontakte/icons';
import {
  IconButton,
  Link,
  SplitCol,
  SplitLayout,
  Tappable,
  useColorScheme,
  VisuallyHidden,
} from '@vkui';
import { VKUI_PACKAGE } from '../../../shared';
import { Logo } from '../Logo/Logo';
import { StyleGuideContext } from './StyleGuideRenderer';
import './StyleGuideHeader.css';

const prRegExp = /https:\/\/([\w]+)\.github.io\/([\w]+)\/pull\/([\d]+)/;
const prData = prRegExp.exec(location.href);

export const StyleGuideHeader = ({ switchStyleGuideAppearance }) => {
  const { setActiveModal } = React.useContext(StyleGuideContext);
  const colorScheme = useColorScheme();

  const links = [
    {
      title: (
        <>
          {'v' + VKUI_PACKAGE.VERSION} <Icon16Dropdown />
        </>
      ),
      onClick: () => setActiveModal('versions'),
    },
    {
      title: 'NPM',
      href: `${VKUI_PACKAGE.URLS.NPM}`,
    },
    {
      title: 'Github',
      href: `${VKUI_PACKAGE.URLS.REPOSITORY}`,
    },
    {
      title: 'Storybook',
      href: `${VKUI_PACKAGE.URLS.HOMEPAGE}playground`,
    },
    {
      title: 'Релизы',
      href: `${VKUI_PACKAGE.URLS.REPOSITORY}/releases`,
    },
    {
      title: 'Токены',
      href: VKUI_PACKAGE.URLS.TOKENS,
    },
    {
      title: 'Иконки',
      href: VKUI_PACKAGE.URLS.ICONS,
    },
  ];

  if (prData) {
    links.unshift({
      title: `pull/${prData[3]}`,
      href: `https://github.com/${prData[1]}/${prData[2]}/pull/${prData[3]}`,
    });
  }

  return (
    <div className="StyleGuideHeader">
      <SplitLayout>
        <SplitCol minWidth={340} width="20%" maxWidth={480}>
          <div className="StyleGuideHeader__left">
            <Tappable
              activeMode="opacity"
              hoverMode="opacity"
              Component="a"
              href="#/About"
              focusVisibleMode="outside"
            >
              <Logo display="block" className="StyleGuideHeader__logo" />
            </Tappable>
          </div>
        </SplitCol>
        <SplitCol width="80%">
          <div className="StyleGuideHeader__right">
            <div className="StyleGuideHeader__links">
              {links.map(({ title, ...props }, i) => (
                <Link key={i} target="_blank" {...props}>
                  <Text>{title}</Text>
                </Link>
              ))}
            </div>
            <div className="StyleGuideHeader__aside">
              <IconButton onClick={switchStyleGuideAppearance}>
                <VisuallyHidden>Сменить тему</VisuallyHidden>
                {colorScheme === 'dark' ? <Icon28SunOutline /> : <Icon28MoonOutline />}
              </IconButton>
            </div>
          </div>
        </SplitCol>
      </SplitLayout>
    </div>
  );
};
