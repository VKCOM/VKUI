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

export * from './useViewPortSize';
