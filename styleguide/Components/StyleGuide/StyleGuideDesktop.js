import { StyleGuideHeader } from "./StyleGuideHeader";
import React from "react";

export const StyleGuideDesktop = ({
  popout,
  switchStyleGuideAppearance,
  toc,
  children,
}) => {
  return (
    <React.Fragment>
      <StyleGuideHeader
        switchStyleGuideAppearance={switchStyleGuideAppearance}
      />
      <SplitLayout className="StyleGuide" popout={popout}>
        <SplitCol
          minWidth={340}
          width="30%"
          maxWidth={480}
          className="StyleGuide__sidebar"
        >
          <nav className="StyleGuide__sidebarIn">{toc}</nav>
        </SplitCol>
        <SplitCol width="100%" className="StyleGuide__content">
          <div className="StyleGuide__contentIn">{children}</div>
        </SplitCol>
      </SplitLayout>
    </React.Fragment>
  );
};
