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
        <div/>
      </FormItem>

      <FormItem
        topNode={
          <FormItem.Top>
            <FormItem.TopLabel htmlFor="about" multiline>Дополнительная информация</FormItem.TopLabel>
            <FormItem.TopAside>0/100</FormItem.TopAside>
          </FormItem.Top>
        }
      >
        <div/>
      </FormItem>

      <FormItem
        top={
          <FormItem.Top>
            <FormItem.TopLabel htmlFor="about" multiline={true}>Дополнительная информация</FormItem.TopLabel>
            <FormItem.TopAside>0/100</FormItem.TopAside>
          </FormItem.Top>
        }
        topMultiline={false}
      >
        <div/>
      </FormItem>

      <FormItem
        top={
          <FormItem.Top>
            <FormItem.TopLabel htmlFor="about" multiline={false}>Дополнительная информация</FormItem.TopLabel>
            <FormItem.TopAside>0/100</FormItem.TopAside>
          </FormItem.Top>
        }
        topMultiline={true}
      >
        <div/>
      </FormItem>

      <FormItem>
        <FormItem.Top>
          <FormItem.TopLabel htmlFor="about" multiline>Дополнительная информация</FormItem.TopLabel>
          <FormItem.TopAside>0/100</FormItem.TopAside>
        </FormItem.Top>
      </FormItem>
    </React.Fragment>
  );
};
