import { SplitCol, SplitLayout, Link, IconButton, Tappable, useAppearance } from '@vkui';
import { Icon28MoonOutline, Icon28SunOutline } from '@vkontakte/icons';
import { Logo } from '../Logo/Logo';
import React from 'react';
import pkg from '../../../package.json';
import './StyleGuideHeader.css';

const prRegExp = /https:\/\/([\w]+)\.github.io\/([\w]+)\/pull\/([\d]+)/;
const prData = prRegExp.exec(location.href);

export const StyleGuideHeader = ({ switchStyleGuideAppearance }) => {
  const appearance = useAppearance();

  const links = [
    {
      title: 'v' + pkg.version,
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
        <SplitCol minWidth={340} width="30%" maxWidth={480} className="StyleGuideHeader__left">
          <div className="StyleGuideHeader__leftIn">
            <Tappable
              hasActive={false}
              hasHover={false}
              Component="a"
              href="#/About"
              className="StyleGuideHeader__logo"
            >
              <Logo />
            </Tappable>
          </div>
        </SplitCol>
        <SplitCol width="100%" className="StyleGuideHeader__main">
          <div className="StyleGuideHeader__links">
            {links.map((item, i) => (
              <Link key={i} target="_blank" className="StyleGuideHeader__link" href={item.href}>
                <Text>{item.title}</Text>
              </Link>
            ))}
          </div>
          <div className="StyleGuideHeader__aside">
            <IconButton
              aria-label="Сменить тему"
              className="StyleGuideHeader__appearance"
              onClick={switchStyleGuideAppearance}
            >
              {appearance === 'dark' ? <Icon28SunOutline /> : <Icon28MoonOutline />}
            </IconButton>
          </div>
        </SplitCol>
      </SplitLayout>
    </div>
  );
};
