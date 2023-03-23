import * as React from 'react';
import { ElementType, Fragment } from 'react';
import { describeScreenshotFuzz } from '../../testing/e2e';
import { Form } from '../Form/Form';
import { FormItem } from '../FormItem/FormItem';
import { Radio } from '../Radio/Radio';
import { RadioGroup, RadioGroupProps } from './RadioGroup';

type RadioGroupTestProps = RadioGroupProps & {
  RadioGroupWrapper: string | ElementType;
};

const RadioGroupTest = ({ RadioGroupWrapper = 'div', ...restProps }: RadioGroupTestProps) => {
  // hack to show wrapper component name in props list
  if (RadioGroupWrapper === 'FormItem') {
    RadioGroupWrapper = FormItem;
  }

  return (
    <Form>
      <RadioGroupWrapper>
        <RadioGroup {...restProps} />
      </RadioGroupWrapper>
    </Form>
  );
};

describe('RadioGroup', () => {
  describeScreenshotFuzz(RadioGroupTest, [
    {
      mode: [undefined, 'horizontal'],
      RadioGroupWrapper: ['FormItem', 'div'],
      children: [
        <Fragment key="kids">
          <Radio name="size" value="s">
            Small
          </Radio>
          <Radio name="size" value="m">
            Medium
          </Radio>
        </Fragment>,
      ],
    },
  ]);
});
