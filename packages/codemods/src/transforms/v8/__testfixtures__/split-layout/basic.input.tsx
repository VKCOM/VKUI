import { PanelHeader, SplitLayout } from '@vkontakte/vkui';
import React from 'react';

const App = () => {
  const rootRef = React.createRef<HTMLDivElement>()
  const contentRef = React.createRef<HTMLDivElement>();

  return (
    <React.Fragment>
      <SplitLayout
        center
        className="baseClassName"
        id="content"
        getRootRef={rootRef}
        data-testid="content"
        aria-label="content"
        getRef={contentRef}
        header={<PanelHeader delimiter="none" />}
      >
        Content
      </SplitLayout>
    </React.Fragment>
  );
};
