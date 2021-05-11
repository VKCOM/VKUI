import React, { Profiler } from 'react';
import PreviewParent from 'react-styleguidist/lib/client/rsg-components/Preview/Preview';
import ReactExample from 'react-styleguidist/lib/client/rsg-components/ReactExample/ReactExample';
import PlaygroundError from 'react-styleguidist/lib/client/rsg-components/PlaygroundError';
import PropTypes from 'prop-types';
import ReactFrame  from 'react-frame-component';
import { StyleGuideContext } from './StyleGuideRenderer';
import { VKCOM, SplitCol, SplitLayout, withAdaptivity, ViewWidth, PanelHeader, usePlatform, AppRoot, ConfigProvider, AdaptivityProvider } from '../../src';
import { DOMContext } from '../../src/lib/dom';
import { perfLogger } from '../utils';

const logPerf = (id, phase, time) => perfLogger.log(`${id}.${phase}`, time);

class FrameDomProvider extends React.Component {
  static contextTypes = {
    document: PropTypes.any,
    window: PropTypes.any,
  };

  componentDidMount () {
    // Пихаем в iFrame с примером спрайты для иконок
    const sprite = document.getElementById('__SVG_SPRITE_NODE__');
    const masks = document.getElementById('__SVG_MASKS_NODE__');

    if (sprite) {
      this.context.document.body.appendChild(sprite.cloneNode(true));
    }

    if (masks) {
      this.context.document.body.appendChild(masks.cloneNode(true));
    }

    this.context.document.querySelector('.frame-content').setAttribute('id', 'root');

    // Пихаем в iFrame vkui стили
    const frameAssets = document.createDocumentFragment();
    this.hotObservers = [];
    Array.from(document.getElementsByClassName('vkui-style')).map(style => {
      const frameStyle = style.cloneNode(true);
      frameAssets.appendChild(frameStyle);

      if (process.env.NODE_ENV === 'development') {
        const hotStyleChange = new MutationObserver(() => {
          frameStyle.firstChild.nodeValue = style.firstChild.nodeValue;
        });
        hotStyleChange.observe(style, { characterData: true, childList: true });
        this.hotObservers.push(hotStyleChange);
      }
    });
    this.context.document.head.appendChild(frameAssets);
  }

  componentWillUnmount() {
    this.hotObservers.forEach(o => o.disconnect());
  }

  render () {
    return (
      <DOMContext.Provider value={this.context}>
        {this.props.children}
      </DOMContext.Provider>
    );
  }
}

let DefaultLayout = ({ children, viewWidth }) => {
  const platform = usePlatform();
  return (
    <SplitLayout header={platform !== VKCOM && <PanelHeader separator={false} />}>
      <SplitCol spaced={viewWidth !== ViewWidth.MOBILE} animate={viewWidth <= ViewWidth.MOBILE && platform !== VKCOM}>
        {children}
      </SplitCol>
    </SplitLayout>
  )
}

DefaultLayout = withAdaptivity(DefaultLayout, { viewWidth: true, sizeY: true })

const initialFrameContent = `
<!DOCTYPE html>
<html>
  <head>
    <style>
      #root {
        height: 100%;
      }
    </style>
  </head>
  <body>
  </body>
</html>
`;

export default class Preview extends PreviewParent {

  shouldComponentUpdate() {
    return true;
  }

  componentDidUpdate(prevProps) {
    if (this.props.code !== prevProps.code && this.state.error) {
      this.setState({
        error: null,
      });
    }
  }

  componentDidMount() {
    if (!window.IntersectionObserver) {
      return this.setState({ isVisible: true });
    }
    this.onScreenObserver = new IntersectionObserver(([{ isIntersecting }]) => {
      if (Boolean(this.state.isVisible) !== isIntersecting) {
        this.setState({ isVisible: isIntersecting });
      }
    }, {
      rootMargin: '100% 0px',
    });
    this.onScreenObserver.observe(this.frameRef.current);
  }

  componentWillUnmount() {
    this.onScreenObserver.disconnect();
  }

  frameRef = React.createRef();

  render() {
    const { code, autoLayout = 'all', config = {}, exampleId } = this.props;
    const { error, isVisible } = this.state;
    return (
      <StyleGuideContext.Consumer>
        {(styleGuideContext) => {
          const integration = this.props.integration || styleGuideContext.integration;
          const isEmbedded = integration === "embedded";
          const isPartial = integration === "partial";

          let example = (
            <ReactExample
              code={code}
              evalInContext={this.props.evalInContext}
              onError={this.handleError}
              compilerConfig={this.context.config.compilerConfig}
            />
          );
          example = autoLayout === 'all' ? <DefaultLayout>{example}</DefaultLayout> : example;
          example = isPartial || autoLayout === 'none' ? example : <AppRoot embedded={isEmbedded} noLegacyClasses>{example}</AppRoot>;

          const frameStyle = {
            height: styleGuideContext.height,
            width: styleGuideContext.width,
            border: '1px solid rgba(0, 0, 0, .12)',
            display: 'block',
            margin: 'auto',
          };
          const containerStyle = Object.assign(isEmbedded ? {
            marginTop: 8,
            position: 'relative',
            border: '1px solid #000',
            maxWidth: 1024,
            width: "calc(100% - 10px)",
            height: 600
          } : {
            position: 'relative',
            height: '100%'
          }, this.props.containerStyle || {});

          const frame = (
            <ReactFrame
              mountTarget="body"
              style={{
                height: styleGuideContext.height,
                width: styleGuideContext.width,
                border: 'none',
                display: 'block',
              }}
              initialContent={initialFrameContent}
            >
              {isEmbedded && (
                <button onClick={() => this.setState(s => ({
                  ...s,
                  hideEmbeddedApp:!s.hideEmbeddedApp
                }))}>
                  {this.state.hideEmbeddedApp ? "mount embedded app" : "unmount embedded app"}
                </button>
              )}
              <div
                key={`vkui-${integration}`}
                className={isPartial ? "vkui__root" : null}
                style={containerStyle}
              >
                <FrameDomProvider>
                  {!(isEmbedded && this.state.hideEmbeddedApp) &&
                    <Profiler id={exampleId} onRender={logPerf}>
                      <ConfigProvider
                        platform={styleGuideContext.platform}
                        scheme={styleGuideContext.scheme}
                        webviewType={styleGuideContext.webviewType}
                        {...config}
                      >
                        <AdaptivityProvider hasMouse={styleGuideContext.hasMouse}>
                          {example}
                        </AdaptivityProvider>
                      </ConfigProvider>
                    </Profiler>
                  }
                </FrameDomProvider>
              </div>
            </ReactFrame>
          );

          return (
            <div ref={this.frameRef} style={frameStyle}>
              {error
                ? <PlaygroundError message={error} />
                : (isVisible && frame)}
            </div>
          );
        }}
      </StyleGuideContext.Consumer>
    );
  }
}
