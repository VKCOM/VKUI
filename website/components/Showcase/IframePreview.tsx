'use client';

import * as React from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { AppRoot, ConfigProvider, DOMContext } from '@vkontakte/vkui';
import type { ColorSchemeType } from '@vkontakte/vkui';
import { LiveContext, LiveError, LivePreview, LiveProvider } from 'react-live';
import { scope } from '@/components/mdx/Playground/scope';
import { transformCode } from './previewShared';
import styles from './ShowcaseCard.module.css';

const IFRAME_SIZE = 500;

interface PreviewContentProps {
  code: string;
  colorScheme: ColorSchemeType;
  Wrapper: React.ComponentType<React.PropsWithChildren>;
  iframeWindow: Window;
  iframeDocument: Document;
}

function PreviewContent({
  code,
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
            <LiveProvider code={code} scope={scope} transformCode={transformCode}>
              <PreviewBody Wrapper={Wrapper} />
            </LiveProvider>
          </div>
        </ConfigProvider>
      </AppRoot>
    </DOMContext.Provider>
  );
}

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

/**
 * Копирует все `<link rel="stylesheet">` и `<style>` из родительского документа
 * в документ iframe — иначе VKUI и пользовательские стили там не применятся.
 */
function copyStylesInto(targetDoc: Document): void {
  document.querySelectorAll<HTMLLinkElement>('link[rel="stylesheet"]').forEach((link) => {
    const clone = targetDoc.createElement('link');
    clone.rel = 'stylesheet';
    clone.href = link.href;
    targetDoc.head.appendChild(clone);
  });
  document.querySelectorAll('style').forEach((style) => {
    targetDoc.head.appendChild(style.cloneNode(true));
  });
}

export interface IframePreviewContentProps {
  contentRef: React.RefObject<HTMLElement | null>;
  code: string;
  colorScheme: ColorSchemeType;
  Wrapper: React.ComponentType<React.PropsWithChildren>;
  mounted: boolean;
}

export function IframePreviewContent({
  contentRef,
  code,
  colorScheme,
  Wrapper,
  mounted,
}: IframePreviewContentProps) {
  const reactRootRef = React.useRef<Root | null>(null);

  React.useEffect(() => {
    if (!mounted) {
      return;
    }
    const iframe = contentRef.current as HTMLIFrameElement | null;
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

    copyStylesInto(doc);

    const rootEl = doc.getElementById('root');
    if (!rootEl) {
      return;
    }

    reactRootRef.current = createRoot(rootEl);
  }, [mounted]);

  React.useEffect(() => {
    const root = reactRootRef.current;
    const iframe = contentRef.current as HTMLIFrameElement | null;
    const doc = iframe?.contentDocument;
    const win = doc?.defaultView;
    if (!mounted || !root || !iframe || !doc || !win) {
      return;
    }

    root.render(
      <PreviewContent
        code={code}
        colorScheme={colorScheme}
        Wrapper={Wrapper}
        iframeWindow={win}
        iframeDocument={doc}
      />,
    );
  }, [code, colorScheme, Wrapper, mounted]);

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
      ref={contentRef as React.Ref<HTMLIFrameElement>}
      width={IFRAME_SIZE}
      height={IFRAME_SIZE}
      tabIndex={-1}
      aria-hidden="true"
      title="Превью компонента"
      className={styles.iframe}
    />
  );
}
