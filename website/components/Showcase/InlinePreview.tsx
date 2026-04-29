'use client';

import * as React from 'react';
import { Box, classNames, Flex, PanelSpinner, useColorScheme } from '@vkontakte/vkui';
import { LiveContext, LiveError, LivePreview, LiveProvider } from 'react-live';
import { useFitScale } from '@/components/Showcase/useFitScale';
import { scope } from '@/components/mdx/Playground/scope';
import { type PreviewRendererProps, resolveWrapper, transformCode } from './previewShared';
import styles from './ShowcaseCard.module.css';

function PreviewBody({ Wrapper }: { Wrapper: React.ComponentType<React.PropsWithChildren> }) {
  const { error } = React.useContext(LiveContext);
  if (error) {
    return null;
  }
  return (
    <>
      <LivePreview Component={Wrapper} />
      <LiveError style={{ display: 'none' }} />
    </>
  );
}

export function InlinePreview({ code, direction, wrapper }: PreviewRendererProps) {
  const stageRef = React.useRef<HTMLDivElement | null>(null);
  const measureRef = React.useRef<HTMLDivElement | null>(null);
  const [mounted, setMounted] = React.useState(false);
  const colorScheme = useColorScheme();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const scale = useFitScale(stageRef, measureRef, {
    minScale: 0.1,
    maxScale: 1,
    enabled: mounted,
  });

  const Wrapper = React.useMemo(() => resolveWrapper(wrapper, direction), [wrapper, direction]);

  const style: Record<`--${string}`, string> = { '--showcase-scale': String(scale) };

  return (
    <Box
      getRootRef={stageRef}
      position="relative"
      inlineSize="calc(100% - 6px)"
      blockSize={220}
      marginInline={3}
      marginBlockStart={3}
      overflow="hidden"
      className={classNames(styles.stage, colorScheme === 'dark' && styles.stageDark)}
      inert
    >
      {!mounted ? (
        <Flex align="center" justify="center">
          <PanelSpinner visibilityDelay={250} />
        </Flex>
      ) : (
        <Box
          position="absolute"
          insetBlockStart="50%"
          insetInlineStart="50%"
          minInlineSize="100%"
          className={styles.scene}
          style={style}
        >
          <Flex getRootRef={measureRef} direction="column" justify="center" minBlockSize={160}>
            <LiveProvider code={code} scope={scope} transformCode={transformCode}>
              <PreviewBody Wrapper={Wrapper} />
            </LiveProvider>
          </Flex>
        </Box>
      )}
    </Box>
  );
}
