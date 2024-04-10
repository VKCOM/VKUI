import * as React from 'react';
import {
  AppDefaultWrapper,
  AppWrapperProps,
  ComponentPlayground,
  type ComponentPlaygroundProps,
} from '@vkui-e2e/playground-helpers';
import { Snackbar, type SnackbarProps } from './Snackbar';

const AppWrapper = ({ children, ...restProps }: AppWrapperProps) => (
  <AppDefaultWrapper disablePortal {...restProps}>
    {children}
  </AppDefaultWrapper>
);

export const SnackbarPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      AppWrapper={AppWrapper}
      propSets={[
        {
          children: ['Text message'],
          action: ['Button'],
          mode: ['dark', 'light'],
        },
      ]}
    >
      {(props: SnackbarProps) => (
        <Snackbar style={{ position: 'relative' }} duration={100000} {...props} />
      )}
    </ComponentPlayground>
  );
};
