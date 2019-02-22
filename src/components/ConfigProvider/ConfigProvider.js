import React from 'react';
import PropTypes from 'prop-types';
import { isWebView } from '../../lib/webview';

const Provider = React.createContext();

export default class ConfigProvider extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      bottomInset: props.insets.bottom > 100 ? 0 : props.insets.bottom
    };
  }

  static childContextTypes = {
    insets: PropTypes.shape({
      top: PropTypes.number,
      right: PropTypes.number,
      bottom: PropTypes.number,
      left: PropTypes.number
    }),
    isWebView: PropTypes.bool,
    scheme: PropTypes.string,
    webviewType: PropTypes.oneOf(['vkapps', 'internal']),
    app: PropTypes.string
  };

  static propTypes = {
    insets: PropTypes.shape({
      top: PropTypes.number,
      right: PropTypes.number,
      bottom: PropTypes.number,
      left: PropTypes.number
    }),
    scheme: PropTypes.string,
    isWebView: PropTypes.bool,
    webviewType: PropTypes.oneOf(['vkapps', 'internal']),
    app: PropTypes.string,
    children: PropTypes.node
  };

  static defaultProps = {
    webviewType: 'internal',
    isWebView,
    scheme: 'client_light',
    insets: {}
  };

  static contextTypes = {
    document: PropTypes.object
  };

  get document () { return this.context.document || window.document; }

  componentWillMount () {
    this.document.body.setAttribute('scheme', this.props.scheme);
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.scheme !== this.props.scheme) {
      this.document.body.setAttribute('scheme', nextProps.scheme);
    }
    if (nextProps.insets.bottom !== this.props.insets.bottom) {
      this.setState({ bottomInset: nextProps.insets.bottom > 100 ? this.props.insets.bottom : nextProps.insets.bottom });
    }
  }

  render () {
    const { insets, isWebView, webviewType, scheme, app, children } = this.props;
    const context = {
      insets: { ...insets, bottom: this.state.bottomInset },
      isWebView,
      webviewType,
      scheme,
      app
    };
    return <Provider value={context}>{children}</Provider>;
  }
}
