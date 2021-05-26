import { SplitCol, SplitLayout, Link } from '@vkui';
import { Icon24LogoVk } from '@vkontakte/icons';
import React from 'react';
import pkg from '../../../package.json';
import './StyleGuideHeader.css';


export const StyleGuideHeader = () => {
  return (
    <div className="StyleGuideHeader">
      <SplitLayout>
        <SplitCol minWidth="340px" width="30%" maxWidth="480px" className="StyleGuideHeader__left">
          <div className="StyleGuideHeader__leftIn">
            <a className="StyleGuideHeader__logo">
              <Icon24LogoVk />
              <span>ui</span>
            </a>
          </div>
        </SplitCol>
        <SplitCol width="100%">
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
          </div>
        </SplitCol>
      </SplitLayout>
    </div>
  )
}
