import { Component } from 'react';
import { defaultSideEffectContext, SideEffect, SideEffectContext } from './SideEffectContext';

abstract class SideEffectComponent<P = {}, S = {}> extends Component<P, S> {
  static contextType = SideEffectContext;
  context!: SideEffect;

  get document() {
    return this.context.document || defaultSideEffectContext.document;
  }

  get window() {
    return this.context.window || defaultSideEffectContext.window;
  }
}

export default SideEffectComponent;
