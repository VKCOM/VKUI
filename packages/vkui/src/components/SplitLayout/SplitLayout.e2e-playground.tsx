import {
  AppDefaultWrapper,
  ComponentPlayground,
  type ComponentPlaygroundProps,
} from '@vkui-e2e/playground-helpers';
import { withLabel } from '@vkui-e2e/utils';
import { useAdaptivityConditionalRender } from '../../hooks/useAdaptivityConditionalRender';
import { usePlatform } from '../../hooks/usePlatform';
import { AdaptivityProvider } from '../AdaptivityProvider/AdaptivityProvider';
import { Box } from '../Box/Box';
import { ConfigProvider } from '../ConfigProvider/ConfigProvider';
import { Flex } from '../Flex/Flex';
import { Group } from '../Group/Group';
import { Panel } from '../Panel/Panel';
import { PanelHeader } from '../PanelHeader/PanelHeader';
import { SplitCol } from '../SplitCol/SplitCol';
import { View } from '../View/View';
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

const LayoutWithStickyElements = () => {
  const isVKCOM = usePlatform() === 'vkcom';
  const { viewWidth } = useAdaptivityConditionalRender();
  return (
    <SplitLayout center header={!isVKCOM && <PanelHeader delimiter="none" />}>
      {viewWidth.tabletPlus && (
        <SplitCol className={viewWidth.tabletPlus.className} fixed width={280} maxWidth={280}>
          <Panel>
            {!isVKCOM && <PanelHeader />}
            <Group>
              <Flex gap={16} direction="column">
                {new Array(4).fill(0).map((t, i) => (
                  <Box key={i} padding={16} style={{ backgroundColor: 'steelblue' }}>
                    {t + i}
                  </Box>
                ))}
              </Flex>
            </Group>
          </Panel>
        </SplitCol>
      )}

      <SplitCol width="100%" maxWidth="560px" stretchedOnMobile autoSpaced>
        <View activePanel="root">
          <Panel id="root">
            <PanelHeader>Panel</PanelHeader>
            <Group>
              <Flex gap={16} direction="column">
                {new Array(20).fill(0).map((t, i) => (
                  <Box key={i} padding={16} style={{ backgroundColor: 'tomato' }}>
                    {t + i}
                  </Box>
                ))}
              </Flex>
            </Group>
          </Panel>
        </View>
      </SplitCol>
    </SplitLayout>
  );
};

export const StickyElementsPlayground = ({
  platform,
  colorScheme,
  adaptivityProviderProps,
}: ComponentPlaygroundProps) => (
  <ConfigProvider platform={platform} colorScheme={colorScheme}>
    <AdaptivityProvider {...adaptivityProviderProps}>
      <AppDefaultWrapper
        mode="full"
        disableDecorations
        disableBackground
        slotProps={{
          inner: {
            style: {
              blockSize: '100%',
            },
          },
        }}
      >
        <LayoutWithStickyElements />
      </AppDefaultWrapper>
    </AdaptivityProvider>
  </ConfigProvider>
);
