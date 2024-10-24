import * as React from 'react';
import { SplitCol, SplitLayout } from '@vkui';
import { StyleGuideHeader } from './StyleGuideHeader';
import { StyleGuideModal } from './StyleGuideModal';
import './StyleGuideDesktop.css';

export const StyleGuideDesktop = ({
  activeModal,
  popout,
  switchStyleGuideColorScheme,
  toc,
  children,
}) => {
  return (
    <div className="StyleGuideDesktop">
      <StyleGuideHeader switchStyleGuideColorScheme={switchStyleGuideColorScheme} />
      <SplitLayout
        className="StyleGuide"
        popout={popout}
        modal={<StyleGuideModal activeModal={activeModal} />}
      >
        <SplitCol minWidth={340} width="20%" maxWidth={480} fixed>
          <div className="StyleGuide__sidebar">
            <div className="StyleGuide__sidebarIn">{toc}</div>
          </div>
        </SplitCol>
        <SplitCol
          width="80%"
          // `min-width` в контексте Flexbox по умолчанию имеет значение `auto`, из-за чего элементы
          // при переполнении будут выходить за границы контейнера.
          // Подробности по ссылке https://stackoverflow.com/a/66689926/2903061
          minWidth={0}
        >
          <div className="StyleGuide__content">
            <div className="StyleGuide__contentIn">{children}</div>
          </div>
        </SplitCol>
      </SplitLayout>
    </div>
  );
};
