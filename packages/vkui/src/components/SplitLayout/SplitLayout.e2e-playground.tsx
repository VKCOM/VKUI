import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { SplitCol } from '../SplitCol/SplitCol';
import { SplitLayout, type SplitLayoutProps } from './SplitLayout';

export const SplitLayoutPlayground = (props: ComponentPlaygroundProps) => (
  <ComponentPlayground
    {...props}
    propSets={[
      {
        style: [{ width: 300 }],
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
