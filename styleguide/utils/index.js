export const perfLogger = {
  _isEnabled: localStorage.getItem('vkui:perf-logging') === 'true',
  set isEnabled(value) {
    localStorage.setItem('vkui:perf-logging', value);
    this._isEnabled = value;
  },
  get isEnabled() {
    return this._isEnabled;
  },
  log(event, duration) {
    if (this.isEnabled) {
      console.log(event, Number(duration.toFixed(2)));
    }
  },
};

export const getDeprecatedFromComponentTags = (component) => {
  const { deprecated } = component?.props?.tags || {};

  const description =
    process.env.NODE_ENV === 'development' && process.env.VKUI_STYLEGUIDE_PROPSPARSER !== 1
      ? deprecated?.[0]?.description // baseConfig
      : deprecated; // prodConfig

  return {
    isDeprecated: !!deprecated,
    description,
  };
};

export * from './useViewPortSize';
