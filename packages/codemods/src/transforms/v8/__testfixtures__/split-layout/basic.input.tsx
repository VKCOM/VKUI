import { PanelHeader, SplitLayout } from '@vkontakte/vkui';
import React from 'react';

const App = () => {
  const contentRef = React.createRef<HTMLInputElement>();

  return (
    <React.Fragment>
      <SplitLayout center data-testid="content" aria-label="content" getRef={contentRef} header={<PanelHeader delimiter="none" />}>
        Content
      </SplitLayout>
    </React.Fragment>
  );
};
