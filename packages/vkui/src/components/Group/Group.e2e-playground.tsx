import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { Div } from '../Div/Div';
import { Header } from '../Header/Header';
import { Group, GroupProps } from './Group';

export const GroupPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          header: [undefined, <Header key="header">Header</Header>],
          children: [<Div key="div">Content</Div>],
          mode: ['plain', 'card'],
        },
        {
          header: [<Header key="header">Header</Header>],
          children: [<Div key="div">Content</Div>],
          description: ['Description'],
        },
      ]}
    >
      {Group}
    </ComponentPlayground>
  );
};

export const GroupWithExpandedContentPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          mode: ['plain', 'card'],
          padding: ['s', 'm'],
          $adaptivity: 'x',
          children: [
            <Group.ExpandedContent key="expanded-inline" direction="inline">
              <Div style={{ background: 'var(--vkui--color_background_accent_tint)' }}>
                Expanded Inline
              </Div>
            </Group.ExpandedContent>,
            <Group.ExpandedContent key="expanded-block" direction="block">
              <Div style={{ background: 'var(--vkui--color_background_accent_tint)' }}>
                Expanded Block
              </Div>
            </Group.ExpandedContent>,
          ],
        },
      ]}
    >
      {(props: GroupProps) => (
        <Div style={{ background: 'var(--vkui--color_background_warning)' }}>
          <Group {...props} />
        </Div>
      )}
    </ComponentPlayground>
  );
};
