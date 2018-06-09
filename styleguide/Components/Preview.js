import React from 'react';
import PreviewParent from 'react-styleguidist/lib/rsg-components/Preview/Preview';
import ReactExample from 'react-styleguidist/lib/rsg-components/ReactExample/ReactExample';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import ReactFrame from 'react-frame-component';

const frameInitialContent = `
  <!DOCTYPE html>
  <html>
    <head>
      <link href="./vkui.css" rel="stylesheet" id="styles"></link>
      <style>
        .frame-content {
          margin: 0;
          padding: 0;
          height: 100%;
          height: 100vh;
          user-select: none;
          -webkit-font-smoothing: antialiased;
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          -webkit-tap-highlight-color: transparent;
          -webkit-text-size-adjust: 100%;
        }
      </style>
    </head>
    <body>
  
    </body>
  </html>
`;

class InsertSvgSprite extends React.Component {

  static contextTypes = {
    document: PropTypes.any
  };

  componentDidMount () {
    let sprite = document.getElementById('__SVG_SPRITE_NODE__');
    this.context.document.body.appendChild(sprite.cloneNode(true));
  }

  render () {
    return null
  }
}


class LoadStyles extends React.Component {

  state = {
    loaded: false
  };

  static contextTypes = {
    document: PropTypes.any
  };

  componentDidMount () {
    let styles = this.context.document.getElementById('styles');

    if (styles.sheet) this.setState({ loaded: true });

    styles.onload = styles.onreadystatechange = () => {
      this.setState({ loaded: true });
    };
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
            height: 564,
            width: 320,
            border: '1px solid rgba(0, 0, 0, .12)',
            display: 'block',
            margin: 'auto'
          }}
        >
          <InsertSvgSprite />
          <LoadStyles>
            <ReactExample
              code={code}
              evalInContext={this.props.evalInContext}
              onError={this.handleError}
              compilerConfig={this.context.config.compilerConfig}
            />
          </LoadStyles>
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
