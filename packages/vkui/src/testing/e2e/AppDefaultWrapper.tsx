import * as React from 'react';
import { AppRoot, type AppRootProps } from '../../components/AppRoot/AppRoot';

export type AppWrapperProps = AppRootProps;

export const AppDefaultWrapper = ({ children, ...restProps }: AppWrapperProps) => (
  <AppRoot mode="embedded" {...restProps}>
    <div
      style={{
        border: '8px solid var(--vkui--color_image_border_alpha)',
        background: 'var(--vkui--color_background)',
      }}
    >
      {children}
    </div>
  </AppRoot>
);
