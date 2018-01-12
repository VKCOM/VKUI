import React from 'react';
import PreviewParent from 'react-styleguidist/lib/rsg-components/Preview/Preview';
import Wrapper from 'react-styleguidist/lib/rsg-components/Wrapper/Wrapper';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import ReactFrame from 'react-frame-component';

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
          initialContent="<!DOCTYPE html><html><head><link href='/vkui.css' rel='stylesheet'></link></head><body><div></div></body></html>"
          style={{
            height: 564,
            width: 320,
            border: 'none',
            display: 'block',
            margin: 'auto'
          }}
        >
          <PreviewComponent component={exampleComponent} />
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
