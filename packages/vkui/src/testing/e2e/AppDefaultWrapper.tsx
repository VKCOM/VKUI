import type { CSSProperties, HTMLAttributes } from 'react';
import { classNames } from '@vkontakte/vkjs';
import { AppRoot, type AppRootProps } from '../../components/AppRoot/AppRoot';
import { TEST_CLASS_NAMES } from './constants';

export type AppDefaultWrapperProps = AppRootProps & {
  /* Убираем фон под скриншоты */
  disableBackground?: boolean;
  /* Убираем декоративные элементы вокруг children: border */
  disableDecorations?: boolean;
  /* Для кастомизации внутренней обертки */
  slotProps?: {
    inner?: HTMLAttributes<HTMLDivElement>;
  };
};

export const AppDefaultWrapper = ({
  mode = 'embedded',
  className,
  children,
  disableBackground,
  disableDecorations,
  slotProps,
  ...restProps
}: AppDefaultWrapperProps) => {
  const { style, ...innerRest } = slotProps?.inner ?? {};

  return (
    <AppRoot
      mode={mode}
      className={classNames(TEST_CLASS_NAMES.APP_ROOT, className)}
      {...restProps}
    >
      <div
        style={{
          ...style,

          ...(disableDecorations
            ? undefined
            : {
                border: '8px solid var(--playwright-border)',
              }),

          ...(disableBackground
            ? undefined
            : {
                backgroundColor: 'var(--playwright-background)',
              }),
        }}
        {...innerRest}
      >
        {children}
      </div>
    </AppRoot>
  );
};
