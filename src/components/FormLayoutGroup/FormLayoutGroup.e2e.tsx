import React from 'react';
import FormLayoutGroup from './FormLayoutGroup';
import Input from '../Input/Input';
import { describeScreenshotFuzz } from '../../testing/e2e/utils';
import { FormItem } from '../FormItem/FormItem';

describe('FormLayoutGroup', () => {
  describeScreenshotFuzz(FormLayoutGroup, [{
    mode: ['horizontal', 'vertical'],
    children: [<>
      <FormItem><Input /></FormItem>
      <FormItem><Input /></FormItem>
    </>],
  }, {
    mode: ['vertical'],
    children: [<>
      <FormItem><Input /></FormItem>
      <FormLayoutGroup mode="horizontal">
        <FormItem><Input /></FormItem>
        <FormItem><Input /></FormItem>
      </FormLayoutGroup>
    </>],
  }, {
    mode: ['horizontal'],
    removable: [true],
    children: [
      <>
        <FormItem><Input /></FormItem>
        <FormItem><Input /></FormItem>
      </>,
      <>
        <FormItem top="Сверху"><Input /></FormItem>
        <FormItem top="И у меня"><Input /></FormItem>
      </>,
      <>
        <FormItem top="Сверху очень длинная надпись аж распирает"><Input /></FormItem>
        <FormItem top="И у меня тоже не короче твоей"><Input /></FormItem>
      </>,
    ],
  }]);
});
