import React from 'react';
import PreviewParent from 'react-styleguidist/lib/client/rsg-components/Preview/Preview';
import ReactExample from 'react-styleguidist/lib/client/rsg-components/ReactExample/ReactExample';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import ReactFrame from 'react-frame-component';

function mapOldScheme(scheme) {
  switch (scheme) {
    case 'client_light':
      return 'bright_light';
    case 'client_dark':
      return 'space_gray';
    default:
      return scheme;
  }
}

const frameInitialContent = `
  <!DOCTYPE html>
  <html>
    <head>
      <link href="./main.css" rel="stylesheet" id="styles" />
    </head>
    <body scheme="${mapOldScheme(window.schemeId)}">
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

  static childContextTypes = {
    webviewType: PropTypes.oneOf(['vkapps', 'internal'])
  };

  getChildContext () {
    return {
      webviewType: 'internal'
    };
  }

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

  executeCode () {
    this.setState({
      error: null
    });

    const { code } = this.props;
    if (!code) {
      return;
    }

    const wrappedComponent = (
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
            <ReactExample
              code={code}
              evalInContext={this.props.evalInContext}
              onError={this.handleError}
              compilerConfig={this.context.config.compilerConfig}
            />
          </PrepareFrame>
        </ReactFrame>
    );

    window.requestAnimationFrame(() => {
      this.unmountPreview();
      try {
        ReactDOM.render(wrappedComponent, this.mountNode);
      } catch (err) {
        this.handleError(err);
      }
    });
  }
}
