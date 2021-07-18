import React, { createRef, Profiler } from 'react';
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

const Config = ({ platform, scheme, webviewType, hasMouse, exampleId, children, schemeTarget, ...config }) => {
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
          <AppRoot noLegacyClasses>
            {children}
          </AppRoot>
        </AdaptivityProvider>
      </ConfigProvider>
    </Profiler>
  );
};

export default class Preview extends PreviewParent {
  shouldComponentUpdate() {
    return true;
  }

  schemeTarget = createRef();

  componentDidUpdate(prevProps) {
    if (this.props.code !== prevProps.code && this.state.error) {
      this.setState({
        error: null,
        ready: true,
      });
    }
  }

  componentDidMount() {
    this.setState({ ready: true }); // Если отрендерить сразу, то schemeTarget будет null, попадет в таком виде в ConfigProvider и тот переключит scheme на body, а не на Preview
    return true;
  }

  componentWillUnmount() {
    return true;
  }

  render() {
    const { code, layout = true, iframe = true, config = {}, exampleId } = this.props;
    const { error, ready } = this.state;

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
              schemeTarget={!iframe && this.schemeTarget.current}
              mode={iframe ? 'full' : 'embedded'}
            >
              {layout ? <Layout>{example}</Layout> : example}
            </Config>
          );

          return (
            <div ref={this.schemeTarget} className={classNames('Preview', `Preview--${styleGuideContext.platform}`, { 'Preview--layout': layout } )}>
              {ready &&
                <React.Fragment>
                  <div className="Preview__shadow" style={layout ? { maxWidth: styleGuideContext.width } : null} />
                  <div className="Preview__in" style={layout ? { height: styleGuideContext.height } : null}>
                    {error ?
                      <PlaygroundError message={error} /> :
                      iframe ?
                        <Frame width={layout && styleGuideContext.width} height={layout && styleGuideContext.height} scheme={styleGuideContext.scheme}>{content}</Frame> :
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
}
