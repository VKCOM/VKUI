import React from 'react';
import PlaygroundError from '@rsg-components/PlaygroundError';
import PreviewParent from '@rsg-components/Preview/Preview';
import ReactExample from '@rsg-components/ReactExample/ReactExample';
import {
  AdaptivityProvider,
  AppRoot,
  classNames,
  ConfigProvider,
  PanelHeader,
  PanelSpinner,
  SplitCol,
  SplitLayout,
  usePlatform,
} from '@vkui';
import { BREAKPOINTS } from '@vkui/lib/adaptivity';
import { getVKUIConfigProviderTokensClassNamesWithGlobalAppearance } from '../lib/theme';
import { useLoadThemeTokens } from '../lib/theme/useLoadThemeTokens';
import { useViewPortSize } from '../utils';
import { Frame } from './Frame/Frame';
import { StyleGuideContext } from './StyleGuide/StyleGuideRenderer';
import './Preview.css';

const Layout = ({ children }) => {
  const platform = usePlatform();

  return (
    <SplitLayout
      header={platform !== 'vkcom' && <PanelHeader className="Layout__header" delimiter="none" />}
    >
      <SplitCol autoSpaced={platform !== 'vkcom'}>{children}</SplitCol>
    </SplitLayout>
  );
};

const Config = ({
  hasPointer,
  colorScheme,
  colorSchemeOptions,
  themeName,
  layout,
  children,
  ...config
}) => {
  return (
    <ConfigProvider
      {...config}
      colorScheme={colorScheme}
      tokensClassNames={getVKUIConfigProviderTokensClassNamesWithGlobalAppearance(
        themeName,
        colorSchemeOptions,
      )}
    >
      <AdaptivityProvider hasPointer={hasPointer}>
        <AppRoot layout={layout}>{children}</AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};

const WithoutFrame = ({ themeName, colorSchemeOptions, children }) => {
  const loaded = useLoadThemeTokens(themeName, colorSchemeOptions);
  return loaded ? children : <PanelSpinner />;
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
      showLayoutSelect,
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
          let hasPointer = undefined; // по умолчанию берем автоматическое определение
          if (viewWidth >= BREAKPOINTS.SMALL_TABLET) {
            width = styleGuideContext.width;
            hasPointer = styleGuideContext.hasPointer;
          } else {
            width = viewWidth - 32;
          }

          const appRootLayout = showLayoutSelect ? styleGuideContext.layout : undefined;

          return (
            <ConfigProvider
              platform={styleGuideContext.platform}
              colorScheme={styleGuideContext.colorScheme}
              tokensClassNames={getVKUIConfigProviderTokensClassNamesWithGlobalAppearance(
                styleGuideContext.themeName,
                styleGuideContext.colorSchemeOptions,
              )}
            >
              <div
                className={classNames(
                  'Preview',
                  `Preview--${styleGuideContext.platform}`,
                  layout && 'Preview--layout',
                )}
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
                      platform={styleGuideContext.platform}
                      colorSchemeOptions={styleGuideContext.colorSchemeOptions}
                      themeName={styleGuideContext.themeName}
                    >
                      <Config
                        {...styleGuideContext}
                        hasPointer={hasPointer}
                        layout={appRootLayout}
                        exampleId={exampleId}
                      >
                        {layout ? <Layout>{example}</Layout> : example}
                      </Config>
                    </Frame>
                  ) : (
                    <WithoutFrame
                      themeName={styleGuideContext.themeName}
                      colorSchemeOptions={styleGuideContext.colorSchemeOptions}
                    >
                      {example}
                    </WithoutFrame>
                  )}
                </div>
              </div>
            </ConfigProvider>
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
