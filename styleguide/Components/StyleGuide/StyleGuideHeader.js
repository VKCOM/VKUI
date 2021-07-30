import { SplitCol, SplitLayout, Link, IconButton, Tappable } from '@vkui';
import { Icon28LogoVk, Icon28MoonOutline } from '@vkontakte/icons';
import React from 'react';
import pkg from '../../../package.json';
import './StyleGuideHeader.css';

export const StyleGuideHeader = ({ switchStyleGuideScheme }) => {
  return (
    <div className="StyleGuideHeader">
      <SplitLayout>
        <SplitCol minWidth="340px" width="30%" maxWidth="480px" className="StyleGuideHeader__left">
          <div className="StyleGuideHeader__leftIn">
            <Tappable activeMode="opacity" hoverMode="opacity" Component="a" href="#/About" className="StyleGuideHeader__logo">
              <Icon28LogoVk />
              <span>ui</span>
            </Tappable>
          </div>
        </SplitCol>
        <SplitCol width="100%" className="StyleGuideHeader__main">
          <div className="StyleGuideHeader__links">
            <Link target="_blank" className="StyleGuideHeader__link" href="https://www.npmjs.com/package/@vkontakte/vkui">
              <Text>
                v{pkg.version}
              </Text>
            </Link>
            <Link target="_blank" className="StyleGuideHeader__link" href="https://github.com/VKCOM/VKUI">
              <Text>
                Github
              </Text>
            </Link>
            <Link target="_blank" className="StyleGuideHeader__link" href="https://github.com/VKCOM/VKUI/releases">
              <Text>
                Релизы
              </Text>
            </Link>
          </div>
          <div className="StyleGuideHeader__aside">
            <IconButton className="StyleGuideHeader__scheme" onClick={switchStyleGuideScheme}>
              <Icon28MoonOutline />
            </IconButton>
          </div>
        </SplitCol>
      </SplitLayout>
    </div>
  );
};
