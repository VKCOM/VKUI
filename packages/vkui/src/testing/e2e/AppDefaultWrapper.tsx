import { type AppRootProps } from '../../components/AppRoot/AppRoot';
import { AppRootDefault } from './AppRootDefault';

export type AppWrapperProps = AppRootProps & {
  /* Убираем декоративные элементы вокруг children: border, background */
  disableDecorations?: boolean;
};

export const AppDefaultWrapper = ({
  mode = 'embedded',
  children,
  disableDecorations,
  ...restProps
}: AppWrapperProps) => (
  <AppRootDefault mode={mode} {...restProps}>
    <div
      style={
        disableDecorations
          ? undefined
          : {
              border: '8px solid var(--playwright-border)',
              background: 'var(--playwright-background)',
            }
      }
    >
      {children}
    </div>
  </AppRootDefault>
);
