import React from 'react';
import connect from '@vkontakte/vk-connect';

let initialState = {
  bottom: null,
  top: null,
  left: null,
  right: null
};

function resolveInsets (e) {
  const { type, data } = e.detail;
  switch (type) {
    case 'VKWebAppUpdateConfig':
    case 'VKWebAppUpdateInsets': // Устаревшее событие vkui-connect
      const { insets } = data;
      if (insets) {
        return {
          ...insets,
          bottom: insets.bottom > 100 ? 0 : insets.bottom // если больше 100 – значит открылась клава и она сама работает как инсет, то есть наш нужно занулить
        };
      }
  }
}

connect.subscribe((e) => {
  const insets = resolveInsets(e);
  if (insets) {
    initialState = insets;
  }
});

export default function withInsets (Component) {
  return class WithInsets extends React.Component {
    state = initialState;

    componentDidMount () {
      connect.subscribe(this.connectListener);
    }

    componentWillUnmount () {
      connect.unsubscribe(this.connectListener);
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
