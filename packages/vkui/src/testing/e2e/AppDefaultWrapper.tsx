import { type AppRootProps } from '../../components/AppRoot/AppRoot';
import { AppRootDefault } from './AppRootDefault';

export type AppWrapperProps = AppRootProps;

export const AppDefaultWrapper = ({
  mode = 'embedded',
  children,
  ...restProps
}: AppWrapperProps) => (
  <AppRootDefault mode={mode} {...restProps}>
    <div
      style={{
        border: '8px solid var(--playwright-border)',
        background: 'var(--playwright-background)',
      }}
    >
      {children}
    </div>
  </AppRootDefault>
);
