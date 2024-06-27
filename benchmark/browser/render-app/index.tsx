import { type ComponentType, type PropsWithChildren, useLayoutEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { AdaptivityProvider, AppRoot, ConfigProvider } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/cssm/styles/themes.css';

const start = performance.now();
let end;

const Measure = ({ children }: PropsWithChildren) => {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (ref.current === null) {
      return;
    }

    // Force layout
    ref.current.getBoundingClientRect();

    end = performance.now();
    window.timing = { render: end - start };
    console.log('complete');
  });

  return <div ref={ref}>{children}</div>;
};

export default (Component: ComponentType) => {
  const root = createRoot(document.getElementById('root')!);

  root.render(
    <Measure>
      <ConfigProvider>
        <AdaptivityProvider>
          <AppRoot>
            <Component />
          </AppRoot>
        </AdaptivityProvider>
      </ConfigProvider>
    </Measure>,
  );
};
