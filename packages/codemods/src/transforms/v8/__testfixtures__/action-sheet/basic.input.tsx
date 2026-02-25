import { ActionSheet } from '@vkontakte/vkui';
import React from 'react';

const App = () => {
  const handleClose = () => {
    console.log('handle close');
  };

  return (
    <React.Fragment>
      <ActionSheet onClose={() => {}}>Content</ActionSheet>
      <ActionSheet onClose={() => console.log('onClose')}>Content</ActionSheet>
      <ActionSheet
        onClose={() => {
          console.log('closed');
        }}
      >
        Content with multiline handler
      </ActionSheet>
      <ActionSheet onClose={handleClose}>Content with function reference</ActionSheet>
      <ActionSheet>Content without onClose</ActionSheet>
      <ActionSheet onClose={onCloseHandler} mode="sheet">
        Content with extra props
      </ActionSheet>
    </React.Fragment>
  );
};

function onCloseHandler() {
  console.log('handle close');
}
