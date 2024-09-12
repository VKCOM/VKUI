import { FormItem, Textarea } from '@vkontakte/vkui';
import React from 'react';
import '@vkontakte/vkui/dist/vkui.css';

const App = () => {
  return (
    <React.Fragment>
      <FormItem
        top={
          <FormItem.Top>
            <FormItem.TopLabel htmlFor="about" multiline>Дополнительная информация</FormItem.TopLabel>
            <FormItem.TopAside>0/100</FormItem.TopAside>
          </FormItem.Top>
        }
      >
        <Textarea id="about" name="about" />
      </FormItem>
    </React.Fragment>
  );
};
