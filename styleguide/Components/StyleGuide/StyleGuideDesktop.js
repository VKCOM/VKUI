import React from 'react';
import { StyleGuideHeader } from './StyleGuideHeader';
import './StyleGuideDesktop.css';

export const StyleGuideDesktop = ({ popout, switchStyleGuideAppearance, toc, children }) => {
  return (
    <div className="StyleGuideDesktop">
      <StyleGuideHeader switchStyleGuideAppearance={switchStyleGuideAppearance} />
      <SplitLayout className="StyleGuide" popout={popout}>
        <SplitCol minWidth={340} width="30%" maxWidth={480} className="StyleGuide__sidebar">
          <div className="StyleGuide__sidebarIn">{toc}</div>
        </SplitCol>
        <SplitCol width="100%" className="StyleGuide__content">
          <div className="StyleGuide__contentIn">{children}</div>
        </SplitCol>
      </SplitLayout>
    </div>
  );
};
