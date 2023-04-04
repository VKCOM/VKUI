import * as React from 'react';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { UsersStack, type UsersStackProps } from './UsersStack';

const base64Image =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAACXBIWXMAAC4jAAAuIwF4pT92AAAA+' +
  '0lEQVR4nO3cwQmAMBQFQSP2Ze1WFltwURFhpoBHWP45Y865cM369QP+RKxArECsQKxArECsQKxArECsQKxArECsQKxArECsQKxArECsQKxArECsQKxge2' +
  'xpHI9NvWHu9zdcViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFY' +
  'gViBWIFYgViBWIFYgViBWIFYgViBWIFYgVjB8RH2dywrECsQKxArECsQKxArECsQKxArECsQKxArECsQKxArECsQKxArECsQKxApOni4IwwZ+iSIAAAAA' +
  'SUVORK5CYII=';

export const UsersStackPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground<UsersStackProps>
      {...props}
      propSets={[
        {
          children: ['Понравилось Анне и ещё XX людям'],
          size: ['s', 'm', 'l'],
          direction: ['row', 'column', 'row-reverse'],
          photos: [
            [base64Image],
            [base64Image, base64Image],
            [base64Image, base64Image, base64Image],
            [base64Image, base64Image, base64Image, base64Image],
          ],
        },
        // при пустом children отсутствуют отступы
        {
          children: [undefined],
          direction: ['row', 'column', 'row-reverse'],
          photos: [[base64Image, base64Image, base64Image]],
        },
      ]}
    >
      {(props) => <UsersStack {...props} />}
    </ComponentPlayground>
  );
};
