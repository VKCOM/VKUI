import React, { Profiler } from 'react';
import PreviewParent from '@rsg-components/Preview/Preview';
import ReactExample from '@rsg-components/ReactExample/ReactExample';
import PlaygroundError from '@rsg-components/PlaygroundError';
import { StyleGuideContext } from './StyleGuide/StyleGuideRenderer';
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
} from '@vkui';
import { Frame } from './Frame/Frame';
import { perfLogger } from '../utils';
import './Preview.css';

const logPerf = (id, phase, time) => perfLogger.log(`${id}.${phase}`, time);

let Layout = ({ children, viewWidth }) => {
  const platform = usePlatform();
  return (
    <SplitLayout header={platform !== VKCOM && <PanelHeader className="Layout__header" separator={false} />}>
      <SplitCol spaced={viewWidth !== ViewWidth.MOBILE && platform !== VKCOM} animate={viewWidth <= ViewWidth.MOBILE && platform !== VKCOM}>
        {children}
      </SplitCol>
    </SplitLayout>
  );
};

Layout = withAdaptivity(Layout, { viewWidth: true, sizeY: true });

const Config = ({ platform, scheme, webviewType, hasMouse, exampleId, children, schemeTarget, mode, ...config }) => {
  return (
    <Profiler id={exampleId} onRender={logPerf}>
      <ConfigProvider
        platform={platform}
        scheme={scheme}
        webviewType={webviewType}
        schemeTarget={schemeTarget}
        {...config}
      >
        <AdaptivityProvider hasMouse={hasMouse}>
          <AppRoot mode={mode} noLegacyClasses>
            {children}
          </AppRoot>
        </AdaptivityProvider>
      </ConfigProvider>
    </Profiler>
  );
};

export default withAdaptivity(class Preview extends PreviewParent {
  componentDidUpdate(prevProps) {
    if (this.props.code !== prevProps.code && this.state.error) {
      this.setState({
        error: null,
      });
    }
  }

  shouldComponentUpdate() { // Оверрайдим методы PreviewParent
    return true;
  }

  componentDidMount() {} // Оверрайдим методы PreviewParent

  componentWillUnmount() {} // Оверрайдим методы PreviewParent

  getSchemeTargetRef = (el) => {
    this.setState({ schemeTarget: el });
  }

  render() {
    const { code, layout = true, adaptivity = true, iframe = true, config = {}, exampleId, viewWidth } = this.props;
    const { error, schemeTarget } = this.state;
    const ready = !!schemeTarget;

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

          const content = (
            <Config
              {...styleGuideContext}
              {...config}
              exampleId={exampleId}
              schemeTarget={!iframe && schemeTarget}
              mode={iframe ? 'full' : 'embedded'}
            >
              {layout ? <Layout>{example}</Layout> : example}
            </Config>
          );
          const isMobile = viewWidth <= ViewWidth.MOBILE;
          const width = isMobile ? window.innerWidth - 32 : styleGuideContext.width;

          return (
            <div ref={this.getSchemeTargetRef} className={classNames('Preview', `Preview--${styleGuideContext.platform}`, { 'Preview--layout': layout })}>
              {ready &&
                <React.Fragment>
                  <div className="Preview__shadow" style={adaptivity ? { maxWidth: width, maxHeight: styleGuideContext.height } : null} />
                  <div className="Preview__in" style={adaptivity ? { height: styleGuideContext.height, width } : null}>
                    {error ?
                      <PlaygroundError message={error} /> :
                      iframe ?
                        <Frame width={adaptivity && width} height={adaptivity && styleGuideContext.height} scheme={styleGuideContext.scheme}>
                          {content}
                        </Frame> :
                        content
                    }
                  </div>
                </React.Fragment>
              }
            </div>
          );
        }}
      </StyleGuideContext.Consumer>
    );
  }
}, { viewWidth: true });
