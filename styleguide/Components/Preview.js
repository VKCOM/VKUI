import React, { Profiler } from "react";
import PreviewParent from "@rsg-components/Preview/Preview";
import ReactExample from "@rsg-components/ReactExample/ReactExample";
import PlaygroundError from "@rsg-components/PlaygroundError";
import { StyleGuideContext } from "./StyleGuide/StyleGuideRenderer";
import {
  VKCOM,
  SplitCol,
  SplitLayout,
  withAdaptivity,
  ViewWidth,
  PanelHeader,
  usePlatform,
  AppRoot,
  ConfigProvider,
  AdaptivityProvider,
  classNames,
  AppearanceProvider,
} from "@vkui";
import { Frame } from "./Frame/Frame";
import { perfLogger } from "../utils";
import "./Preview.css";

const logPerf = (id, phase, time) => perfLogger.log(`${id}.${phase}`, time);

let Layout = ({ children, viewWidth }) => {
  const platform = usePlatform();
  return (
    <SplitLayout
      header={
        platform !== VKCOM && (
          <PanelHeader className="Layout__header" separator={false} />
        )
      }
    >
      <SplitCol
        spaced={viewWidth !== ViewWidth.MOBILE && platform !== VKCOM}
        animate={viewWidth <= ViewWidth.MOBILE && platform !== VKCOM}
      >
        {children}
      </SplitCol>
    </SplitLayout>
  );
};

Layout = withAdaptivity(Layout, { viewWidth: true, sizeY: true });

const Config = ({ hasMouse, children, ...config }) => {
  return (
    <ConfigProvider {...config}>
      <AdaptivityProvider hasMouse={hasMouse}>
        <AppRoot noLegacyClasses>{children}</AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};

export default withAdaptivity(
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

            const isMobile = viewWidth <= ViewWidth.MOBILE;
            const width = isMobile
              ? window.innerWidth - 32
              : styleGuideContext.width;

            return (
              <Profiler id={exampleId} onRender={logPerf}>
                <ConfigProvider
                  scheme="inherit"
                  platform={styleGuideContext.platform}
                >
                  <AppearanceProvider appearance={styleGuideContext.appearance}>
                    <div
                      className={classNames(
                        "Preview",
                        `Preview--${styleGuideContext.platform}`,
                        { "Preview--layout": layout }
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
                        style={
                          adaptivity
                            ? { height: styleGuideContext.height, width }
                            : null
                        }
                      >
                        {error ? (
                          <PlaygroundError message={error} />
                        ) : iframe ? (
                          <Frame
                            style={
                              adaptivity
                                ? { width, height: styleGuideContext.height }
                                : undefined
                            }
                          >
                            <Config
                              {...styleGuideContext}
                              exampleId={exampleId}
                            >
                              {layout ? <Layout>{example}</Layout> : example}
                            </Config>
                          </Frame>
                        ) : (
                          example
                        )}
                      </div>
                    </div>
                  </AppearanceProvider>
                </ConfigProvider>
              </Profiler>
            );
          }}
        </StyleGuideContext.Consumer>
      );
    }
  },
  { viewWidth: true }
);
