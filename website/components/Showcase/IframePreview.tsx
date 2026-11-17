'use client';

import * as React from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { AppRoot, ConfigProvider, DOMContext } from '@vkontakte/vkui';
import type { ColorSchemeType } from '@vkontakte/vkui';
import { CompiledPreview } from '@/components/mdx/Playground/CompiledPreview';
import { syncPreviewStyles } from './syncPreviewStyles';
import styles from './ShowcaseCard.module.css';

const IFRAME_SIZE = 500;

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
  mounted: boolean;
}

export function IframePreviewContent({
  contentRef,
  previewId,
  colorScheme,
  Wrapper,
  mounted,
}: IframePreviewContentProps) {
  const reactRootRef = React.useRef<Root | null>(null);

  React.useEffect(() => {
    if (!mounted) {
      return;
    }
    const iframe = contentRef.current;
    if (!iframe) {
      return;
    }

    const doc = iframe.contentDocument;
    if (!doc) {
      return;
    }

    doc.open();
    doc.write(
      '<!DOCTYPE html>' +
        '<html>' +
        '<head><meta charset="utf-8">' +
        '<meta name="viewport" content="width=device-width,initial-scale=1">' +
        '</head>' +
        '<body style="background: transparent;">' +
        '<div id="root"></div>' +
        '</body></html>',
    );
    doc.close();

    const rootEl = doc.getElementById('root');
    if (!rootEl) {
      return;
    }

    reactRootRef.current = createRoot(rootEl);
    return syncPreviewStyles(doc);
  }, [mounted]);

  React.useEffect(() => {
    const root = reactRootRef.current;
    const iframe = contentRef.current;
    if (!iframe) {
      return;
    }

    const doc = iframe.contentDocument;
    if (!doc) {
      return;
    }

    const win = doc.defaultView;
    if (!win) {
      return;
    }

    if (!mounted || !root) {
      return;
    }

    root.render(
      <PreviewContent
        previewId={previewId}
        colorScheme={colorScheme}
        Wrapper={Wrapper}
        iframeWindow={win}
        iframeDocument={doc}
      />,
    );
  }, [previewId, colorScheme, Wrapper, mounted]);

  React.useEffect(() => {
    return () => {
      const root = reactRootRef.current;
      reactRootRef.current = null;
      if (!root) {
        return;
      }
      queueMicrotask(() => root.unmount());
    };
  }, []);

  return (
    <iframe
      ref={contentRef}
      width={IFRAME_SIZE}
      height={IFRAME_SIZE}
      tabIndex={-1}
      aria-hidden="true"
      title="Превью компонента"
      className={styles.iframe}
    />
  );
}
