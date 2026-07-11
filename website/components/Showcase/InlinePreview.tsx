'use client';

import * as React from 'react';
import { Flex } from '@vkontakte/vkui';
import { LiveContext, LiveError, LivePreview, LiveProvider } from 'react-live';
import { scope } from '@/components/mdx/Playground/scope';
import { transformCode } from './previewShared';

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

export interface InlinePreviewContentProps {
  contentRef: React.RefObject<HTMLElement | null>;
  code: string;
  Wrapper: React.ComponentType<React.PropsWithChildren>;
}

export function InlinePreviewContent({ contentRef, code, Wrapper }: InlinePreviewContentProps) {
  return (
    <Flex
      getRootRef={contentRef}
      direction="column"
      justify="center"
      minBlockSize={160}
    >
      <LiveProvider code={code} scope={scope} transformCode={transformCode}>
        <PreviewBody Wrapper={Wrapper} />
      </LiveProvider>
    </Flex>
  );
}
