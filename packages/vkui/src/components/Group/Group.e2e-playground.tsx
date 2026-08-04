import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { Box } from '../Box/Box';
import { Header } from '../Header/Header';
import { Group, type GroupProps } from './Group';

export const GroupPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          header: [undefined, <Header key="header">Header</Header>],
          children: [
            <Box padding="system" key="Box">
              Content
            </Box>,
          ],
          mode: ['plain', 'card'],
        },
        {
          header: [<Header key="header">Header</Header>],
          children: [
            <Box padding="system" key="Box">
              Content
            </Box>,
          ],
          description: ['Description'],
        },
        {
          mode: ['card'],
          children: [
            <Box padding="system" key="Box">
              Content
            </Box>,
          ],
          noBlockStartRounding: [true],
          noBlockEndRounding: [false],
        },
        {
          mode: ['card'],
          children: [
            <Box padding="system" key="Box">
              Content
            </Box>,
          ],
          noBlockStartRounding: [false],
          noBlockEndRounding: [true],
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
              <Box
                padding="system"
                style={{ background: 'var(--vkui--color_background_accent_tint)' }}
              >
                Expanded Inline
              </Box>
            </Group.ExpandedContent>,
            <Group.ExpandedContent key="expanded-block" direction="block">
              <Box
                padding="system"
                style={{ background: 'var(--vkui--color_background_accent_tint)' }}
              >
                Expanded Block
              </Box>
            </Group.ExpandedContent>,
          ],
        },
      ]}
    >
      {(props: GroupProps) => (
        <Box padding="system" style={{ background: 'var(--vkui--color_background_warning)' }}>
          <Group {...props} />
        </Box>
      )}
    </ComponentPlayground>
  );
};
