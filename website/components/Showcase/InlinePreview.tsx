'use client';

import * as React from 'react';
import { Flex } from '@vkontakte/vkui';
import { CompiledPreview } from '@/components/mdx/Playground/CompiledPreview';

export interface InlinePreviewContentProps {
  contentRef: React.RefObject<HTMLElement | null>;
  previewId: string;
  Wrapper: React.ComponentType<React.PropsWithChildren>;
}

export function InlinePreviewContent({
  contentRef,
  previewId,
  Wrapper,
}: InlinePreviewContentProps) {
  return (
    <Flex getRootRef={contentRef} direction="column" justify="center" minBlockSize={160}>
      <Wrapper>
        <CompiledPreview previewId={previewId} />
      </Wrapper>
    </Flex>
  );
}
