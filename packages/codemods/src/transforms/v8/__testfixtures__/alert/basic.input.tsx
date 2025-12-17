import { Alert } from '@vkontakte/vkui';
import React from 'react';

const App = () => {
  return (
    <React.Fragment>
      {/* Простой случай - переименовываем onClose в onClosed */}
      <Alert title="Alert title" onClose={() => console.log('closed')} />

      {/* С другими пропами */}
      <Alert
        title="Alert title"
        description="Alert description"
        onClose={() => console.log('closed')}
        actions={[{ title: 'OK', mode: 'default' }]}
      />

      {/* С функцией */}
      <Alert title="Alert title" onClose={handleClose} />

      {/* Вложенный случай */}
      <div>
        <Alert title="Nested Alert" onClose={() => setVisible(false)} />
      </div>
    </React.Fragment>
  );
};

function handleClose() {
  console.log('closed');
}
