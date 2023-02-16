import * as React from 'react';
import { ElementType, Fragment } from 'react';
import { describeScreenshotFuzz } from '../../testing/e2e';
import { FormItem } from '../FormItem/FormItem';
import { FormLayout } from '../FormLayout/FormLayout';
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
    <FormLayout>
      <RadioGroupWrapper>
        <RadioGroup {...restProps} />
      </RadioGroupWrapper>
    </FormLayout>
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
