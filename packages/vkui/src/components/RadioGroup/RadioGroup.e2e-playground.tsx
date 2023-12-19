import * as React from 'react';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { FormItem } from '../FormItem/FormItem';
import { FormLayoutGroup } from '../FormLayoutGroup/FormLayoutGroup';
import { Radio } from '../Radio/Radio';
import { RadioGroup, type RadioGroupProps } from './RadioGroup';

interface RadioGroupTestProps extends RadioGroupProps {
  RadioGroupWrapper: string | React.ElementType;
}

export const RadioGroupPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          mode: [undefined, 'horizontal'],
          children: [
            <React.Fragment key="kids">
              <Radio name="size" value="s">
                Small
              </Radio>
              <Radio name="size" value="m">
                Medium
              </Radio>
            </React.Fragment>,
          ],
          // Специально передаём FormItem строкой. Если передать компонент напрямую,
          // то при приведении типов в разметке будет [object Object].
          RadioGroupWrapper: ['FormItem', 'div'],
        },
      ]}
    >
      {({ RadioGroupWrapper = 'div', ...restProps }: RadioGroupTestProps) => {
        if (RadioGroupWrapper === 'FormItem') {
          RadioGroupWrapper = FormItem;
        }

        return (
          <FormLayoutGroup>
            <RadioGroupWrapper>
              <RadioGroup {...restProps} />
            </RadioGroupWrapper>
          </FormLayoutGroup>
        );
      }}
    </ComponentPlayground>
  );
};
