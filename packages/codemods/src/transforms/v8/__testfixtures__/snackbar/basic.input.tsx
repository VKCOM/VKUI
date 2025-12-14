import { Snackbar } from '@vkontakte/vkui';
import React from 'react';

const App = () => {
  const handleClose = () => {
    console.log('handle close');
  };

  return (
    <React.Fragment>
      <Snackbar onClose={() => {}}>Message</Snackbar>
      <Snackbar onClose={(reason) => console.log(reason)}>Message with reason</Snackbar>
      <Snackbar
        onClose={() => {
          console.log('closed');
        }}
      >
        Message with multiline handler
      </Snackbar>
      <Snackbar onClose={handleClose}>Message with function reference</Snackbar>
      <Snackbar>Message without onClose</Snackbar>
      <Snackbar onClose={onCloseHandler} duration={5000}>
        Message with duration
      </Snackbar>
    </React.Fragment>
  );
};

function onCloseHandler() {
  console.log('handle close');
}
