import { Fragment } from 'react';
import FormLayoutGroup from './FormLayoutGroup';
import Input from '../Input/Input';
import { describeScreenshotFuzz } from '../../testing/e2e/utils';
import { FormItem } from '../FormItem/FormItem';

describe('FormLayoutGroup', () => {
  describeScreenshotFuzz(FormLayoutGroup, [{
    mode: ['horizontal', 'vertical'],
    children: [<Fragment key="">
      <FormItem><Input /></FormItem>
      <FormItem><Input /></FormItem>
    </Fragment>],
  }, {
    mode: ['vertical'],
    children: [<Fragment key="">
      <FormItem><Input /></FormItem>
      <FormLayoutGroup mode="horizontal">
        <FormItem><Input /></FormItem>
        <FormItem><Input /></FormItem>
      </FormLayoutGroup>
    </Fragment>],
  }, {
    mode: ['horizontal'],
    removable: [true],
    children: [
      <Fragment key="">
        <FormItem><Input /></FormItem>
        <FormItem><Input /></FormItem>
      </Fragment>,
      <Fragment key="">
        <FormItem top="Сверху"><Input /></FormItem>
        <FormItem top="И у меня"><Input /></FormItem>
      </Fragment>,
      <Fragment key="">
        <FormItem top="Сверху очень длинная надпись аж распирает"><Input /></FormItem>
        <FormItem top="И у меня тоже не короче твоей"><Input /></FormItem>
      </Fragment>,
    ],
  }]);
});
