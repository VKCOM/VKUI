import { useContext } from 'react';
import { ConfigProviderContext } from '../components/ConfigProvider/ConfigProviderContext';

export const useAppearance = () => useContext(ConfigProviderContext).appearance;
