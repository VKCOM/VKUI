import { classNames } from '@vkontakte/vkjs';
import { AppRoot, type AppRootProps } from '../../components/AppRoot/AppRoot';
import { TEST_CLASS_NAMES } from './constants';

export type AppDefaultWrapperProps = AppRootProps & {
  /* Убираем декоративные элементы вокруг children: border */
  disableDecorations?: boolean;
};

export const AppDefaultWrapper = ({
  mode = 'embedded',
  className,
  children,
  disableDecorations,
  ...restProps
}: AppDefaultWrapperProps) => (
  <AppRoot mode={mode} className={classNames(TEST_CLASS_NAMES.APP_ROOT, className)} {...restProps}>
    <div
      style={{
        ...(disableDecorations
          ? undefined
          : {
              border: '8px solid var(--playwright-border)',
            }),

        background: 'var(--playwright-background)',
      }}
    >
      {children}
    </div>
  </AppRoot>
);
