import { FormItem } from '@vkontakte/vkui';
import React from 'react';

const App = () => {
  return (
    <React.Fragment>
      <FormItem top={top}></FormItem>
      <FormItem top={top} htmlFor={htmlFor}></FormItem>
      <FormItem></FormItem>
    </React.Fragment>
  );
};
