import React from 'react';
import vkuiConnect from '@vkontakte/vkui-connect';

export type Insets = {
  bottom: number;
  top: number;
  left: number;
  right: number;
};

let initialState: Insets = {
  bottom: 0,
  top: 0,
  left: 0,
  right: 0
};

function resolveInsets (e): Insets | void {
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

vkuiConnect.subscribe(e => {
  const insets = resolveInsets(e);
  if (insets) {
    initialState = insets;
  }
});

export default function withInsets<P> (Component: React.ComponentType<P & { insets: Partial<Insets> }>) {
  return class WithInsets extends React.Component<P> {
    state = initialState;

    componentDidMount () {
      vkuiConnect.subscribe(this.connectListener);
    }

    componentWillUnmount () {
      vkuiConnect.unsubscribe(this.connectListener);
    }

    connectListener = e => {
      const insets = resolveInsets(e);

      if (insets) {
        this.setState(insets);
      }
    };

    render () {
      return <Component {...this.props} insets={this.state} />;
    }
  };
}
