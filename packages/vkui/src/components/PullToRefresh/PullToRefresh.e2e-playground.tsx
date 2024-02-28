import * as React from 'react';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { Div } from '../Div/Div';
import { PullToRefresh, type PullToRefreshProps } from './PullToRefresh';

export const PullToRefreshPlayground = (
  props: ComponentPlaygroundProps & { paddingLeft?: string },
) => {
  const { paddingLeft, ...playgroundProps } = props;
  return (
    <ComponentPlayground {...playgroundProps} platform="vkcom">
      {({ ...props }: PullToRefreshProps) => (
        <Div style={{ width: '300px', paddingLeft }}>
          <PullToRefresh {...props}>
            <div
              style={{
                /**
                 * Playwright >= 1.40 (https://github.com/microsoft/playwright/releases/tag/v1.40.0)
                 * В WebKit начал выделяется текст, поэтому отключаем выделение.
                 *
                 * > Note: необходимо именно использовать префикс `-webkit-*`, т.к. React не поллифилит.
                 */
                WebkitUserSelect: 'none',
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a sollicitudin lectus, a
              commodo sapien. Vivamus a urna leo. Integer iaculis dignissim urna, sit amet
              vestibulum diam bibendum a. Donec eu arcu ut augue porttitor faucibus. Vestibulum nec
              pretium tortor, sit amet congue nunc. Aenean ullamcorper ex sem, sed interdum quam
              consequat et. Vestibulum a ex non diam fringilla feugiat. Nunc eu tellus sed leo
              elementum cursus. Mauris blandit porta egestas. Curabitur eget justo elementum,
              malesuada lacus ut, congue mauris. Integer orci nisi, convallis vitae dapibus sit
              amet, molestie a risus. Aenean ultricies lacus eros, sit amet condimentum urna
              malesuada et. Sed quis dolor tempus orci fringilla volutpat in sed velit. Aenean
              aliquet bibendum pretium.
            </div>
          </PullToRefresh>
        </Div>
      )}
    </ComponentPlayground>
  );
};

export const PullToRefreshChildrenPositionPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground {...props} platform="vkcom">
      {({ ...props }: PullToRefreshProps) => (
        <Div style={{ width: '300px', height: '500px', display: 'flex' }}>
          <PullToRefresh {...props}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center',
                justifyContent: 'center',
                flex: '1 0',
              }}
            >
              Smaller content can be centered vertically
            </div>
          </PullToRefresh>
        </Div>
      )}
    </ComponentPlayground>
  );
};
