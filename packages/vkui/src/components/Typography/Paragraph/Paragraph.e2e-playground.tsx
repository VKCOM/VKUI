import * as React from 'react';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { Paragraph, type ParagraphProps } from './Paragraph';

export const ParagraphPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          weight: ['3', '2', '1'],
        },
        {
          normalize: [true],
        },
      ]}
    >
      {(props: ParagraphProps) => (
        <Paragraph {...props} style={{ marginBottom: 16 }}>
          Paragraph {props.weight}
        </Paragraph>
      )}
    </ComponentPlayground>
  );
};
