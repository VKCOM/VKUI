// exported for tests =(
export const __controller = {
  _noConflict: false,
  _isSet: false,
  get noConflict() {
    return this._noConflict;
  },
  set noConflict(v: boolean) {
    if (this._isSet && v !== this.noConflict) {
      setTimeout(() => {
        throw new Error('[vkui]: Single VKUI instance can not have different globalClassName settings');
      }, 0);
    }
    this._noConflict = v;
    this._isSet = true;
  },
};

export const classScopingMode: { noConflict: boolean } = __controller;
