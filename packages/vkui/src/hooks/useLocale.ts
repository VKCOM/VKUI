import * as React from 'react';
import { LocaleContext } from '../components/ConfigProvider/ConfigProviderSubContexts';

export function useLocale(): string {
  return React.useContext(LocaleContext);
}
