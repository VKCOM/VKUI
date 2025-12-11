import { ActionSheet } from '@vkontakte/vkui';
import React from 'react';

const App = () => {
  const handleClose = (options: { closedBy: string }) => {
    console.log('Closed by:', options.closedBy);
  };

  return (
    <React.Fragment>
      {/* Простое использование onClose */}
      <ActionSheet onClose={handleClose} toggleRef={null}>
        <div>Content 1</div>
      </ActionSheet>

      {/* onClose с инлайн функцией */}
      <ActionSheet
        onClose={(options) => {
          console.log(options.closedBy);
        }}
        toggleRef={null}
      >
        <div>Content 2</div>
      </ActionSheet>

      {/* onClose с другими пропами */}
      <ActionSheet onClose={handleClose} toggleRef={null} title="Title" description="Description">
        <div>Content 3</div>
      </ActionSheet>
    </React.Fragment>
  );
};
