import * as React from 'react';
import { ConfigProviderContext } from '../components/ConfigProvider/ConfigProviderContext';

export const useAppearance = () => React.useContext(ConfigProviderContext).appearance;
