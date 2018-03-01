import React from 'react';
import PreviewParent from 'react-styleguidist/lib/rsg-components/Preview/Preview';
import Wrapper from 'react-styleguidist/lib/rsg-components/Wrapper/Wrapper';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import ReactFrame from 'react-frame-component';

const frameInitialContent = `
  <!DOCTYPE html>
  <html>
    <head>
      <link href="./main.css" rel="stylesheet" id="styles"></link>
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

  state = {
    loaded: false
  };

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

class PreviewComponent extends React.Component {
  static propTypes = {
    component: PropTypes.func.isRequired
  };

  constructor () {
    super();
    this.state = {};
    this.setState = this.setState.bind(this);
    this.setInitialState = this.setInitialState.bind(this);
  }

  // Synchronously set initial state, so it will be ready before first render
  // Ignore all consequent calls
  setInitialState (initialState) {
    Object.assign(this.state, initialState);
    this.setInitialState = undefined;
  }

  render () {
    return this.props.component(this.state, this.setState, this.setInitialState);
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

    const compiledCode = this.compileCode(code);
    if (!compiledCode) {
      return;
    }

    const exampleComponent = this.evalInContext(compiledCode);
    const wrappedComponent = (
      <Wrapper onError={this.handleError}>
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
            <PreviewComponent component={exampleComponent} />
          </LoadStyles>
        </ReactFrame>
      </Wrapper>
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
