import { type ComponentType, type PropsWithChildren, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { AdaptivityProvider, AppRoot, ConfigProvider } from '@vkontakte/vkui';
import { PERF_MARK_END, PERF_MARK_START, PERF_MEASURE } from './constants';
import { parseOptions } from './urlOptions';
import '@vkontakte/vkui/dist/cssm/styles/themes.css';

const PerformanceMeasure = ({ children }: PropsWithChildren) => {
  useEffect(function handleApplicationDidMount() {
    performance.mark(PERF_MARK_END);
    const performanceMeasure = performance.measure(PERF_MEASURE, PERF_MARK_START, PERF_MARK_END);
    console.debug(performanceMeasure);
  }, []);
  return <div>{children}</div>;
};

export function render(Component: ComponentType<PropsWithChildren>) {
  const root = createRoot(document.getElementById('root')!);
  const { instanceCount, withProviders } = parseOptions(window.location);

  const items = instanceCount > 1 ? new Array(instanceCount).fill('Lorem ipsum') : ['Lorem ipsum'];

  if (withProviders) {
    performance.mark(PERF_MARK_START);

    root.render(
      <PerformanceMeasure>
        <ConfigProvider>
          <AdaptivityProvider>
            <AppRoot>
              {items.map((item, index) => (
                <Component key={index}>{`${item} ${index}`}</Component>
              ))}
            </AppRoot>
          </AdaptivityProvider>
        </ConfigProvider>
      </PerformanceMeasure>,
    );
  } else {
    performance.mark(PERF_MARK_START);

    root.render(
      <PerformanceMeasure>
        {items.map((item, index) => (
          <Component key={index}>{`${item} ${index}`}</Component>
        ))}
      </PerformanceMeasure>,
    );
  }
}
