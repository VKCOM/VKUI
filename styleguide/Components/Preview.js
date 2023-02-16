import React, { Profiler } from 'react';
import PlaygroundError from '@rsg-components/PlaygroundError';
import PreviewParent from '@rsg-components/Preview/Preview';
import ReactExample from '@rsg-components/ReactExample/ReactExample';
import {
  AdaptivityProvider,
  AppearanceProvider,
  AppRoot,
  classNames,
  ConfigProvider,
  PanelHeader,
  Platform,
  PlatformProvider,
  SplitCol,
  SplitLayout,
  usePlatform,
} from '@vkui';
import { BREAKPOINTS } from '@vkui/shared/breakpoints';
import { perfLogger, useViewPortSize } from '../utils';
import { Frame } from './Frame/Frame';
import { usePlatformStyle } from './Frame/usePlatformStyle';
import { StyleGuideContext } from './StyleGuide/StyleGuideRenderer';
import './Preview.css';

const logPerf = (id, phase, time) => perfLogger.log(`${id}.${phase}`, time);

const Layout = ({ children }) => {
  const platform = usePlatform();

  return (
    <SplitLayout
      header={
        platform !== Platform.VKCOM && <PanelHeader className="Layout__header" separator={false} />
      }
    >
      <SplitCol autoSpaced={platform !== Platform.VKCOM}>{children}</SplitCol>
    </SplitLayout>
  );
};

const Config = ({ hasPointer, children, ...config }) => {
  return (
    <ConfigProvider {...config}>
      <AdaptivityProvider hasPointer={hasPointer}>
        <AppRoot>{children}</AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};

const WithoutFrame = ({ platform, children }) => {
  const loaded = usePlatformStyle(platform);

  return loaded ? (
    children
  ) : (
    <PlatformProvider value={platform}>
      <PanelSpinner />
    </PlatformProvider>
  );
};

class Preview extends PreviewParent {
  componentDidUpdate(prevProps) {
    if (this.props.code !== prevProps.code && this.state.error) {
      this.setState({
        error: null,
      });
    }
  }

  shouldComponentUpdate() {
    // Оверрайдим методы PreviewParent
    return true;
  }

  componentDidMount() {} // Оверрайдим методы PreviewParent

  componentWillUnmount() {} // Оверрайдим методы PreviewParent

  render() {
    const {
      code,
      layout = true,
      adaptivity = true,
      iframe = true,
      exampleId,
      viewWidth,
    } = this.props;
    const { error } = this.state;

    if (!this.state.error) {
      console.clear();
    }

    return (
      <StyleGuideContext.Consumer>
        {(styleGuideContext) => {
          let example = (
            <ReactExample
              code={code}
              evalInContext={this.props.evalInContext}
              onError={this.handleError}
              compilerConfig={this.context.config.compilerConfig}
            />
          );

          let width;
          if (viewWidth >= BREAKPOINTS.SMALL_TABLET) {
            width = styleGuideContext.width;
          } else {
            width = viewWidth - 32;
          }

          return (
            <Profiler id={exampleId} onRender={logPerf}>
              <AppearanceProvider appearance={styleGuideContext.appearance}>
                <div
                  className={classNames('Preview', `Preview--${styleGuideContext.platform}`, {
                    'Preview--layout': layout,
                  })}
                >
                  <div
                    className="Preview__shadow"
                    style={
                      adaptivity
                        ? {
                            maxWidth: width,
                            maxHeight: styleGuideContext.height,
                          }
                        : null
                    }
                  />
                  <div
                    className="Preview__in"
                    style={adaptivity ? { height: styleGuideContext.height, width } : null}
                  >
                    {error ? (
                      <PlaygroundError message={error} />
                    ) : iframe ? (
                      <Frame
                        style={adaptivity ? { width, height: styleGuideContext.height } : undefined}
                        appearance={styleGuideContext.appearance}
                        platform={styleGuideContext.platform}
                      >
                        <Config {...styleGuideContext} exampleId={exampleId}>
                          {layout ? <Layout>{example}</Layout> : example}
                        </Config>
                      </Frame>
                    ) : (
                      <WithoutFrame platform={styleGuideContext.platform}>{example}</WithoutFrame>
                    )}
                  </div>
                </div>
              </AppearanceProvider>
            </Profiler>
          );
        }}
      </StyleGuideContext.Consumer>
    );
  }
}

export default (props) => {
  const { viewWidth } = useViewPortSize();

  return <Preview {...props} viewWidth={viewWidth} />;
};
