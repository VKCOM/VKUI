import * as React from 'react';
import { DirectionContext } from '../components/ConfigProvider/ConfigProviderSubContexts';
import type { Direction } from '../lib/direction';

export function useConfigDirection(): Direction {
  return React.useContext(DirectionContext) || 'ltr';
}
