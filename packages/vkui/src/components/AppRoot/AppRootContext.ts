import * as React from 'react';
import { noop } from '@vkontakte/vkjs';
import { Signal } from '../../lib/signal';

export interface AppRootContextInterface {
  appRoot: React.RefObject<HTMLElement>;
  portalRoot: React.RefObject<HTMLElement>;
  embedded: boolean;
  mode: 'partial' | 'embedded' | 'full';
  keyboardInput: boolean;
  disablePortal: boolean;
  layout?: 'card' | 'plain';
  openModalsSignal: Signal;
}

/**
 * Вынесен в константу, чтобы можно было в тестах создавать свой контекст и сливать перед этим значения по-умолчанию
 *
 * > Note: не смог убрать из покрытия через 'istanbul ignore next'.
 */
export const DEFAULT_APP_ROOT_CONTEXT_VALUE: AppRootContextInterface = {
  appRoot: React.createRef(),
  mode: 'full',
  portalRoot: React.createRef(),
  embedded: false,
  keyboardInput: false,
  disablePortal: false,
  openModalsSignal: { subscribe: () => noop, dispatch: noop },
};

export const AppRootContext: React.Context<AppRootContextInterface> =
  React.createContext<AppRootContextInterface>(DEFAULT_APP_ROOT_CONTEXT_VALUE);
