/* eslint-disable jsdoc/require-jsdoc */

import * as React from 'react';
import type { AppRootUserSelectMode, SafeAreaInsets } from './types';

export interface AppRootContextInterface {
  appRoot: React.RefObject<HTMLElement | null>;
  portalRoot?: HTMLElement | React.RefObject<HTMLElement | null> | null | undefined;
  safeAreaInsets?: SafeAreaInsets | undefined;
  embedded: boolean;
  mode: 'partial' | 'embedded' | 'full';
  disablePortal: boolean;
  layout?: 'card' | 'plain' | undefined;
  userSelectMode?: AppRootUserSelectMode | undefined;
}

/**
 * Вынесен в константу, чтобы можно было в тестах создавать свой контекст и сливать перед этим значения по-умолчанию.
 *
 * > Note: не смог убрать из покрытия через 'istanbul ignore next'.
 */
export const DEFAULT_APP_ROOT_CONTEXT_VALUE: AppRootContextInterface = {
  appRoot: React.createRef(),
  mode: 'full',
  portalRoot: null,
  safeAreaInsets: undefined,
  embedded: false,
  disablePortal: false,
};

export const AppRootContext: React.Context<AppRootContextInterface> =
  React.createContext<AppRootContextInterface>(DEFAULT_APP_ROOT_CONTEXT_VALUE);
