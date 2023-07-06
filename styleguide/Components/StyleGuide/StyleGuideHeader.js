import React from 'react';
import { Icon16Dropdown, Icon28MoonOutline, Icon28SunOutline } from '@vkontakte/icons';
import { IconButton, Link, SplitCol, SplitLayout, Tappable, useAppearance } from '@vkui';
import { VKUI_PACKAGE } from '../../../shared';
import { Logo } from '../Logo/Logo';
import { StyleGuideContext } from './StyleGuideRenderer';
import './StyleGuideHeader.css';

const prRegExp = /https:\/\/([\w]+)\.github.io\/([\w]+)\/pull\/([\d]+)/;
const prData = prRegExp.exec(location.href);

export const StyleGuideHeader = ({ switchStyleGuideAppearance }) => {
  const { setActiveModal } = React.useContext(StyleGuideContext);
  const appearance = useAppearance();

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
      href: 'https://www.npmjs.com/package/@vkontakte/vkui',
    },
    {
      title: 'Github',
      href: 'https://github.com/VKCOM/VKUI',
    },
    {
      title: 'Релизы',
      href: 'https://github.com/VKCOM/VKUI/releases',
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
              <IconButton aria-label="Сменить тему" onClick={switchStyleGuideAppearance}>
                {appearance === 'dark' ? <Icon28SunOutline /> : <Icon28MoonOutline />}
              </IconButton>
            </div>
          </div>
        </SplitCol>
      </SplitLayout>
    </div>
  );
};
