import React from 'react';
import vkuiConnect from '@vkontakte/vkui-connect';

let initialState = {
  bottom: 0,
  top: 0,
  left: 0,
  right: 0
};

function resolveInsets (e) {
  const { type, data } = e.detail;
  switch (type) {
    case 'VKWebAppUpdateConfig':
    case 'VKWebAppUpdateInsets': // Устаревшее событие vkui-connect
      const { insets } = data;
      if (insets) {
        return { ...insets, bottom: insets.bottom > 100 ? 0 : insets.bottom }; // если больше 100 – значит открылась клава и она сама работает как инсет, то есть наш нужно занулить
      }
  }
}

vkuiConnect.subscribe((e) => {
  const insets = resolveInsets(e);
  if (insets) {
    initialState = insets;
  }
});

export default function withInsets (Component) {
  return class WithInsets extends React.Component {
    state = initialState;

    componentDidMount () {
      vkuiConnect.subscribe(this.connectListener);
    }

    componentWillUnmount () {
      vkuiConnect.unsubscribe(this.connectListener);
    }

    connectListener = (e) => {
      const insets = resolveInsets(e);
      if (insets) {
        this.setState(insets);
      }
    };

    render () {
      return (
        <Component {...this.props} insets={this.state} />
      );
    }
  };
}
