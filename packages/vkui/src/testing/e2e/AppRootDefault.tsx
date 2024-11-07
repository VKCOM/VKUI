import { classNames } from '@vkontakte/vkjs';
import { AppRoot, type AppRootProps } from '../../components/AppRoot/AppRoot';
import { TEST_CLASS_NAMES } from './constants';

export type AppRootDefaultProps = AppRootProps;

export const AppRootDefault = ({
  mode = 'embedded',
  className,
  children,
  ...restProps
}: AppRootDefaultProps) => (
  <AppRoot mode={mode} className={classNames(TEST_CLASS_NAMES.APP_ROOT, className)} {...restProps}>
    {children}
  </AppRoot>
);
