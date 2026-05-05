'use client';

import * as React from 'react';
import { Box, classNames, Flex, PanelSpinner, useColorScheme } from '@vkontakte/vkui';
import { useMounted } from 'nextra/hooks';
import { useFitScale } from '@/components/Showcase/useFitScale';
import playgroundStyles from '@/components/mdx/Playground/PlaygroundPreview/PlaygroundPreview.module.css';
import { IframePreviewContent } from './IframePreview';
import { InlinePreviewContent } from './InlinePreview';
import { ISOLATED_PREVIEW_SLUGS, resolveWrapper, STAGE_HEIGHT } from './previewShared';
import styles from './ShowcaseCard.module.css';

export interface ShowcaseCardPreviewProps {
  slug: string;
  code: string;
  direction?: 'row' | 'column' | undefined;
  wrapper?: string | undefined;
}

export function ShowcaseCardPreview({ slug, code, direction, wrapper }: ShowcaseCardPreviewProps) {
  const stageRef = React.useRef<HTMLDivElement | null>(null);
  const contentRef = React.useRef<HTMLElement | null>(null);

  const mounted = useMounted();
  const colorScheme = useColorScheme();

  const scale = useFitScale(stageRef, contentRef, {
    minScale: 0.1,
    maxScale: 1,
    enabled: mounted,
  });

  const Wrapper = React.useMemo(() => resolveWrapper(wrapper, direction), [wrapper, direction]);

  const isIsolated = ISOLATED_PREVIEW_SLUGS.has(slug);

  const style: Record<`--${string}`, string> = { '--showcase-scale': String(scale) };

  return (
    <Box
      getRootRef={stageRef}
      position="relative"
      blockSize={STAGE_HEIGHT}
      marginInline={isIsolated ? 3 : undefined}
      marginBlockStart={isIsolated ? 3 : undefined}
      overflow="hidden"
      className={classNames(
        playgroundStyles.previewBackground,
        colorScheme === 'dark' && playgroundStyles.previewBackgroundDark,
        styles.inheritBorderRadius,
      )}
      inert
    >
      {!mounted ? (
        <Flex
          align="center"
          justify="center"
          inlineSize={isIsolated ? '100%' : undefined}
          blockSize={isIsolated ? '100%' : undefined}
        >
          <PanelSpinner visibilityDelay={250} />
        </Flex>
      ) : (
        <Box
          position="absolute"
          insetBlockStart="50%"
          insetInlineStart="50%"
          minInlineSize={isIsolated ? undefined : '100%'}
          className={styles.scene}
          style={style}
        >
          {isIsolated ? (
            <IframePreviewContent
              contentRef={contentRef}
              code={code}
              colorScheme={colorScheme}
              Wrapper={Wrapper}
              mounted={mounted}
            />
          ) : (
            <InlinePreviewContent contentRef={contentRef} code={code} Wrapper={Wrapper} />
          )}
        </Box>
      )}
    </Box>
  );
}
