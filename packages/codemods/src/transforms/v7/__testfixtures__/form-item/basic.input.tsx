import { FormItem } from '@vkontakte/vkui';
import React from 'react';
import '@vkontakte/vkui/dist/vkui.css';

const App = () => {
  const flag = true;
  const calculateMultiline = () => true;
  return (
    <React.Fragment>
      {/* test 1: should find TopLabel inside top prop */}
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

      {/* test 2: should find TopLabel inside topNode prop */}
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

      {/* test 3: TopLabel multiline={true} -> FormItem topMultiline */}
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

      {/* test 4: TopLabel multiline={false} -> FormItem topMultiline={false} */}
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

      {/* test 5: should find multiline in child of FormItem */}
      <FormItem>
        <FormItem.Top>
          <FormItem.TopLabel htmlFor="about" multiline>Дополнительная информация</FormItem.TopLabel>
          <FormItem.TopAside>0/100</FormItem.TopAside>
        </FormItem.Top>
      </FormItem>

      {/* test 6: should move multiline expression in topMultiline */}
      <FormItem
        top={
          <FormItem.Top>
            <FormItem.TopLabel htmlFor="about" multiline={flag && calculateMultiline()}>Дополнительная информация</FormItem.TopLabel>
            <FormItem.TopAside>0/100</FormItem.TopAside>
          </FormItem.Top>
        }
      >
        <div/>
      </FormItem>

      {/* test 6: should replace topMultiline expression by multiline expression */}
      <FormItem
        topMultiline={!flag || calculateMultiline()}
        top={
          <FormItem.Top>
            <FormItem.TopLabel htmlFor="about" multiline={flag && calculateMultiline()}>Дополнительная информация</FormItem.TopLabel>
            <FormItem.TopAside>0/100</FormItem.TopAside>
          </FormItem.Top>
        }
      >
        <div/>
      </FormItem>

      {/* test 7: do nothing because multiline not set */}
      <FormItem
        topMultiline
        top={
          <FormItem.Top>
            <FormItem.TopLabel htmlFor="about">Дополнительная информация</FormItem.TopLabel>
            <FormItem.TopAside>0/100</FormItem.TopAside>
          </FormItem.Top>
        }
      >
        <div/>
      </FormItem>
    </React.Fragment>
  );
};
