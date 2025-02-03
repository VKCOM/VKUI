import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { withLabel } from '@vkui-e2e/utils';
import { SplitCol } from '../SplitCol/SplitCol';
import { SplitLayout, type SplitLayoutProps } from './SplitLayout';

export const SplitLayoutPlayground = (props: ComponentPlaygroundProps) => (
  <ComponentPlayground
    {...props}
    propSets={[
      {
        style: [withLabel({ width: 300 }, 'With 300px width')],
        center: [false, true],
        children: [
          <>
            <SplitCol maxWidth={100}>A</SplitCol>
            <SplitCol maxWidth={100}>B</SplitCol>
          </>,
        ],
      },
    ]}
  >
    {(props: SplitLayoutProps) => <SplitLayout {...props}></SplitLayout>}
  </ComponentPlayground>
);
