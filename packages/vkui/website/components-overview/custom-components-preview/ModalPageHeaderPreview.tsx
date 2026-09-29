'use client';

import * as React from 'react';
import { Icon24Cancel, Icon24Done } from '@vkontakte/icons';
import { noop } from '@vkontakte/vkjs';
import { Div, ModalPageHeader, PanelHeaderButton, usePlatform } from '../../../src';
import { ModalPageBase } from '../../../src/components/ModalPage/ModalPageBase';

const HeaderButton = ({ children }: { children: React.ReactNode }) => {
  return <PanelHeaderButton onClick={noop}>{children}</PanelHeaderButton>;
};

export const ModalPageHeaderPreview = () => {
  const platform = usePlatform();

  return (
    <div
      style={{
        display: 'flex',
        maxBlockSize: 200,
      }}
    >
      <ModalPageBase
        isDesktop
        hideCloseButton
        header={
          <ModalPageHeader
            before={
              <React.Fragment>
                {(platform === 'android' || platform === 'vkcom') && (
                  <HeaderButton>
                    <Icon24Cancel />
                  </HeaderButton>
                )}
              </React.Fragment>
            }
            after={
              <React.Fragment>
                {(platform === 'android' || platform === 'vkcom') && (
                  <HeaderButton>
                    <Icon24Done />
                  </HeaderButton>
                )}
                {platform === 'ios' && <HeaderButton>Готово</HeaderButton>}
              </React.Fragment>
            }
          >
            Заголовок модальной страницы
          </ModalPageHeader>
        }
      >
        <Div style={{ height: 50 }}>Example</Div>
      </ModalPageBase>
    </div>
  );
};
