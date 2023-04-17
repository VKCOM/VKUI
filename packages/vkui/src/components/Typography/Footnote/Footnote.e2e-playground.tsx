import * as React from 'react';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { Footnote, type FootnoteProps } from './Footnote';

export const FootnotePlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          weight: [undefined, '1', '2', '3'],
          caps: [undefined, true],
        },
        {
          normalize: [false],
        },
      ]}
    >
      {(props: FootnoteProps) => (
        <Footnote {...props} style={{ marginBottom: 16 }}>
          Footnote {props.caps && 'CAPS'} {props.weight}
        </Footnote>
      )}
    </ComponentPlayground>
  );
};
