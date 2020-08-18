import React from 'react';
import PreviewParent from 'react-styleguidist/lib/client/rsg-components/Preview/Preview';
import ReactExample from 'react-styleguidist/lib/client/rsg-components/ReactExample/ReactExample';
import PlaygroundError from 'react-styleguidist/lib/client/rsg-components/PlaygroundError';
import PropTypes from 'prop-types';
import ReactFrame from 'react-frame-component';
import ConfigProvider from '../../src/components/ConfigProvider/ConfigProvider';
import { StyleGuideContext } from './StyleGuideRenderer';

const frameInitialContent = `
  <!DOCTYPE html>
  <html>
    <head>
      <link href="./main.css" rel="stylesheet" id="styles" />
    </head>
    <body>
    </body>
  </html>
`;

class PrepareFrame extends React.Component {
  state = {
    loaded: false
  };

  static contextTypes = {
    document: PropTypes.any
  };

  componentDidMount () {
    // Пихаем в iFrame с примером спрайты для иконок
    const sprite = document.getElementById('__SVG_SPRITE_NODE__');
    const masks = document.getElementById('__SVG_MASKS_NODE__');

    this.context.document.body.appendChild(sprite.cloneNode(true));
    this.context.document.body.appendChild(masks.cloneNode(true));

    this.context.document.querySelector('.frame-content').setAttribute('id', 'root');

    // Пихаем в iFrame vkui стили
    const url = "./main.css",
      head = this.context.document.getElementsByTagName('head')[0],
      link = this.context.document.createElement('link');

    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = url;

    link.onload = () => {
      this.setState({ loaded: true });
    };

    head.appendChild(link);
  }

  render () {
    return this.state.loaded ? this.props.children : null
  }
}

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
    return;
  }

  render() {
    const { code } = this.props;
    const { error } = this.state;
    return (
      error ?
        <PlaygroundError message={error} /> :
        <ReactFrame
          initialContent={frameInitialContent}
          mountTarget="body"
          style={{
            height: 667,
            width: 375,
            border: '1px solid rgba(0, 0, 0, .12)',
            display: 'block',
            margin: 'auto'
          }}
        >
          <PrepareFrame>
            <StyleGuideContext.Consumer>
              {(styleGuideContext) => {
                return (
                  <ConfigProvider
                    platform={styleGuideContext.platform}
                    scheme={styleGuideContext.scheme}
                    webviewType={styleGuideContext.webviewType}
                  >
                    <ReactExample
                      code={code}
                      evalInContext={this.props.evalInContext}
                      onError={this.handleError}
                      compilerConfig={this.context.config.compilerConfig}
                    />
                  </ConfigProvider>
                )
              }}
            </StyleGuideContext.Consumer>
          </PrepareFrame>
        </ReactFrame>
    )
  }
}
