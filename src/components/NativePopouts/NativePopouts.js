import React from 'react';
import removeObjectKeys from '../../lib/removeObjectKeys';
import PropTypes from 'prop-types';
import Alert from '../Alert/Alert';
import ActionSheet from '../ActionSheet/ActionSheet';
import ActionSheetItem from '../ActionSheetItem/ActionSheetItem';
import {brToNl} from '../../lib/string';

let actionId = 1;

export default class NativePopouts extends React.Component {

  state = {
    popout: null
  };

  actions = [];
  actionsStore = {};

  static propTypes = {
    popout: PropTypes.oneOfType([
      PropTypes.shape({
        style: PropTypes.oneOf(['alert', 'actionSheet']).isRequired,
        title: PropTypes.string,
        text: PropTypes.string,
        onClose: PropTypes.func.isRequired,
        actions: PropTypes.arrayOf(PropTypes.shape({
          style: PropTypes.oneOf(['cancel', 'default', 'destructive']),
          title: PropTypes.string,
          action: PropTypes.func
        }))
      }),
      PropTypes.element
    ]),
    vkuiConnect: PropTypes.shape({
      send: PropTypes.func.isRequired,
      subscribe: PropTypes.func.isRequired,
      unsubscribe: PropTypes.func.isRequired
    }).isRequired,
    // Root or View
    component: PropTypes.func.isRequired
  };

  static contextTypes = {
    isWebView: PropTypes.bool
  };

  componentDidMount () {
    this.props.vkuiConnect.subscribe(this.vkuiListener);
  }

  componentWillUnmount () {
    this.actions = [];
    this.actionsStore = {};
    this.props.vkuiConnect.unsubscribe(this.vkuiListener);
  }

  vkuiListener = (e) => {
    if (e.type === 'VKWebAppEvent' && e.detail && e.detail.action) {
      if (this.actionsStore.hasOwnProperty(e.detail.action)) {
        this.actionsStore[e.detail.action](e.detail);
        this.props.popout && this.props.popout.onClose && this.props.popout.onClose();
      }
    }
  };

  renderNativeAlert (popout) {
    const { style, title, text: message } = popout;
    this.props.vkuiConnect.send('VKWebAppAlert', {
      style,
      title: brToNl(title),
      message: brToNl(message),
      actions: this.actions.map(item =>
        removeObjectKeys(item, ['action'])
      )
    });
  }

  renderUIAlert (popout) {
    const { title, text, onClose } = popout;
    this.setState({
      popout: (<Alert
        actions={this.actions.map(item =>
          removeObjectKeys(item, ['params'])
        )}
        onClose={onClose}
        actionsLayout={this.actions.length > 2 ? 'vertical' : 'horizontal'}
      >
        {title && <h2>{title}</h2>}
        {text && <p>{text}</p>}
      </Alert>)
    });
  }

  renderNativeSheet (popout) {
    const { style } = popout;
    this.props.vkuiConnect.send('VKWebAppAlert', {
      style,
      actions: this.actions.map(item =>
        removeObjectKeys(item, ['action'])
      )
    });
  }

  renderUISheet (popout) {
    const { title, text, onClose } = popout;
    this.setState({
      popout: (
        <ActionSheet
          title={title}
          text={text}
          onClose={onClose}
        >
          { this.actions.map((item, index) => (
            <ActionSheetItem autoclose={item.autoclose} theme={item.style} onClick={item.action} key={`${index}`}>
              {item.title}
            </ActionSheetItem>
          )) }
        </ActionSheet>
      )
    });
  }

  closeUIPopout () {
    this.setState({ popout: null });
    this.actions = [];
    this.actionsStore = {};
  }

  componentWillReceiveProps (nextProps) {
    if (!nextProps.popout && this.props.popout) {
      this.closeUIPopout();
    }
    if (nextProps.popout && nextProps.popout !== this.props.popout) {
      this.context.isWebView && this.closeUIPopout();
      if (nextProps.popout.style) {
        this.actions = nextProps.popout.actions.map((item) => Object.assign({}, item, {
          autoclose: item.hasOwnProperty('autoclose') ? item.autoclose : true,
          action: item.action || nextProps.popout.onClose,
          handler: Object.assign({}, item.params, { action: `action-${actionId++}` })
        }));

        this.actionsStore = this.actions.reduce((res, item) => { res[item.handler.action] = item.action; return res; }, {});

        switch (nextProps.popout.style) {
          case 'alert':
            this.context.isWebView ? this.renderNativeAlert(nextProps.popout) : this.renderUIAlert(nextProps.popout);
            break;
          case 'actionSheet':
            this.context.isWebView ? this.renderNativeSheet(nextProps.popout) : this.renderUISheet(nextProps.popout);
            break;
        }
      } else {
        this.setState({ popout: nextProps.popout });
      }
    }
  }

  render () {
    let Component = this.props.component;
    return <Component {...removeObjectKeys(this.props, ['popout'])} popout={this.state.popout} />;
  }
}
