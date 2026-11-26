'use client';

import * as React from 'react';
import { createPortal } from 'react-dom';
import { AppRoot, ConfigProvider, DOMContext } from '@vkontakte/vkui';
import type { ColorSchemeType } from '@vkontakte/vkui';
import { CompiledPreview } from '@/components/mdx/Playground/CompiledPreview';
import { syncPreviewStyles } from './syncPreviewStyles';
import styles from './ShowcaseCard.module.css';

const IFRAME_SIZE = 500;
const IFRAME_MARKUP = `<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
  </head>
  <body><div id="root"></div></body>
</html>`;

interface PreviewContentProps {
  previewId: string;
  colorScheme: ColorSchemeType;
  Wrapper: React.ComponentType<React.PropsWithChildren>;
  iframeWindow: Window;
  iframeDocument: Document;
}

function PreviewContent({
  previewId,
  colorScheme,
  Wrapper,
  iframeWindow,
  iframeDocument,
}: PreviewContentProps) {
  return (
    <DOMContext.Provider value={{ window: iframeWindow, document: iframeDocument }}>
      <AppRoot mode="partial" scroll="contain" style={{ width: '100%' }}>
        <ConfigProvider colorScheme={colorScheme}>
          <div>
            <Wrapper>
              <CompiledPreview previewId={previewId} />
            </Wrapper>
          </div>
        </ConfigProvider>
      </AppRoot>
    </DOMContext.Provider>
  );
}

export interface IframePreviewContentProps {
  contentRef: React.RefObject<HTMLIFrameElement | null>;
  previewId: string;
  colorScheme: ColorSchemeType;
  Wrapper: React.ComponentType<React.PropsWithChildren>;
}

export function IframePreviewContent({
  contentRef,
  previewId,
  colorScheme,
  Wrapper,
}: IframePreviewContentProps) {
  const [container, setContainer] = React.useState<HTMLElement | null>(null);
  const iframeDocument = container?.ownerDocument;
  const iframeWindow = iframeDocument?.defaultView;

  React.useEffect(() => {
    return iframeDocument ? syncPreviewStyles(iframeDocument) : undefined;
  }, [iframeDocument]);

  return (
    <>
      <iframe
        ref={contentRef}
        srcDoc={IFRAME_MARKUP}
        onLoad={(event) => {
          setContainer(event.currentTarget.contentDocument?.getElementById('root') ?? null);
        }}
        width={IFRAME_SIZE}
        height={IFRAME_SIZE}
        tabIndex={-1}
        aria-hidden="true"
        title="Превью компонента"
        className={styles.iframe}
      />
      {container &&
        iframeDocument &&
        iframeWindow &&
        createPortal(
          <PreviewContent
            previewId={previewId}
            colorScheme={colorScheme}
            Wrapper={Wrapper}
            iframeWindow={iframeWindow}
            iframeDocument={iframeDocument}
          />,
          container,
        )}
    </>
  );
}
