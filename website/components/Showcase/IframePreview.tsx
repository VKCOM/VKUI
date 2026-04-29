'use client';

import * as React from 'react';
import { createRoot, type Root } from 'react-dom/client';
import {
  AppRoot,
  Box,
  ConfigProvider,
  DOMContext,
  Flex,
  PanelSpinner,
  useColorScheme,
} from '@vkontakte/vkui';
import { LiveContext, LiveError, LivePreview, LiveProvider } from 'react-live';
import { scope } from '@/components/mdx/Playground/scope';
import { type PreviewRendererProps, resolveWrapper, transformCode } from './previewShared';
import styles from './ShowcaseCard.module.css';

const IFRAME_SIZE = 500;

const STAGE_HEIGHT = 220;

interface PreviewContentProps {
  code: string;
  colorScheme: 'light' | 'dark';
  Wrapper: React.ComponentType<React.PropsWithChildren>;
  iframeWindow: Window;
  iframeDocument: Document;
}

/**
 * Рендерится внутри iframe. Компонент отображается нативно во всём
 * пространстве iframe (IFRAME_SIZE × IFRAME_SIZE). Никаких внутренних
 * трансформаций — масштабирование происходит снаружи на уровне iframe-элемента.
 */
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

/**
 * Изолированное превью внутри iframe.
 *
 * Iframe имеет фиксированный размер IFRAME_SIZE × IFRAME_SIZE и рендерит
 * компонент нативно (без внутренних трансформаций). Сам iframe-элемент
 * масштабируется через `transform: scale`, чтобы вписаться в окошко карточки.
 *
 * Используется для компонентов с порталами и `position: fixed` (см.
 * `ISOLATED_PREVIEW_SLUGS`).
 */
export function IframePreview({ code, direction, wrapper }: PreviewRendererProps) {
  const stageRef = React.useRef<HTMLDivElement | null>(null);
  const iframeRef = React.useRef<HTMLIFrameElement | null>(null);
  const reactRootRef = React.useRef<Root | null>(null);

  const [mounted, setMounted] = React.useState(false);
  const [scale, setScale] = React.useState(1);
  const [iframeDom, setIframeDom] = React.useState<{ win: Window; doc: Document } | null>(null);
  const colorScheme = useColorScheme();

  const Wrapper = React.useMemo(() => resolveWrapper(wrapper, direction), [wrapper, direction]);

  React.useEffect(() => {
    const stage = stageRef.current;
    if (!stage) {
      return undefined;
    }

    const update = () => {
      const sw = stage.clientWidth;
      const sh = stage.clientHeight;
      if (!sw || !sh) {
        return;
      }
      const next = Math.min(1, sw / IFRAME_SIZE, sh / IFRAME_SIZE);
      setScale((prev) => (Math.abs(prev - next) < 0.001 ? prev : next));
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(stage);
    return () => ro.disconnect();
  }, []);

  React.useEffect(() => {
    const iframe = iframeRef.current;
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

    if (doc.defaultView) {
      setIframeDom({ win: doc.defaultView, doc });
    }
    setMounted(true);
  }, []);

  React.useEffect(() => {
    const root = reactRootRef.current;
    if (!root || !iframeDom) {
      return;
    }

    root.render(
      <PreviewContent
        code={code}
        colorScheme={colorScheme}
        Wrapper={Wrapper}
        iframeWindow={iframeDom.win}
        iframeDocument={iframeDom.doc}
      />,
    );
  }, [code, colorScheme, Wrapper, mounted, iframeDom]);

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
    <Box
      getRootRef={stageRef}
      position="relative"
      inlineSize="calc(100% - 6px)"
      blockSize={STAGE_HEIGHT}
      marginInline={3}
      marginBlockStart={3}
      overflow="hidden"
      className={colorScheme === 'dark' ? `${styles.stage} ${styles.stageDark}` : styles.stage}
      inert
    >
      {!mounted && (
        <Flex align="center" justify="center" inlineSize="100%" blockSize="100%">
          <PanelSpinner visibilityDelay={250} />
        </Flex>
      )}

      {/* Iframe позиционируется по центру stage и масштабируется трансформом */}
      <Box
        position="absolute"
        insetInlineStart="50%"
        insetBlockStart="50%"
        style={{
          transform: `translate(-50%, -50%) scale(${scale})`,
          transformOrigin: 'center center',
          pointerEvents: 'none',
          opacity: mounted ? 1 : 0,
          transition: 'opacity 200ms ease',
        }}
      >
        <iframe
          ref={iframeRef}
          width={IFRAME_SIZE}
          height={IFRAME_SIZE}
          tabIndex={-1}
          aria-hidden="true"
          title="Превью компонента"
          style={{
            display: 'block',
            border: 'none',
            background: 'transparent',
            colorScheme: 'normal',
          }}
        />
      </Box>
    </Box>
  );
}
