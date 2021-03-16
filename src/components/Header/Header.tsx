import { FunctionComponent, HTMLAttributes, ReactNode, Fragment } from 'react';
import { getClassName } from '../../helpers/getClassName';
import { classNames } from '../../lib/classNames';
import { usePlatform } from '../../hooks/usePlatform';
import { HasPlatform, HasRootRef } from '../../types';
import { hasReactNode, isPrimitiveReactNode } from '../../lib/utils';
import { Platform, PlatformType } from '../../lib/platform';
import Headline from '../Typography/Headline/Headline';
import Caption from '../Typography/Caption/Caption';
import Title from '../Typography/Title/Title';
import Text from '../Typography/Text/Text';
import Subhead from '../Typography/Subhead/Subhead';

export interface HeaderProps extends HTMLAttributes<HTMLDivElement>, HasRootRef<HTMLDivElement> {
  mode?: 'primary' | 'secondary' | 'tertiary';
  subtitle?: ReactNode;
  /**
   * Допускаются иконки, текст, Link
   */
  aside?: ReactNode;
  /**
   * Допускаются текст, Indicator
   */
  indicator?: ReactNode;
  multiline?: boolean;
}

function renderChildren({ children, platform, mode }: Pick<HeaderProps, 'children' | 'mode'> & HasPlatform) {
  switch (platform) {
    case Platform.ANDROID:
      switch (mode) {
        case 'primary':
          return <Headline vkuiClass="Header__content" weight="medium">{children}</Headline>;
        case 'secondary':
          return <Caption vkuiClass="Header__content" level="1" weight="medium" caps>{children}</Caption>;
        case 'tertiary':
          return <Headline vkuiClass="Header__content" weight="medium">{children}</Headline>;
      }
      break;
    case Platform.IOS:
      switch (mode) {
        case 'primary':
        case 'tertiary':
          return <Title vkuiClass="Header__content" weight="semibold" level="3">{children}</Title>;
        case 'secondary':
          return <Caption vkuiClass="Header__content" level="1" weight="semibold" caps>{children}</Caption>;
      }
      break;
    case Platform.VKCOM:
      switch (mode) {
        case 'primary':
          return <Headline vkuiClass="Header__content" weight="regular">{children}</Headline>;
        case 'secondary':
        case 'tertiary':
          return <Caption vkuiClass="Header__content" level="1" weight="regular">{children}</Caption>;
      }
  }
}

function renderAside({ aside, platform }: { aside: HeaderProps['aside']; platform: PlatformType }) {
  if (platform === Platform.VKCOM) {
    return <Subhead weight="regular" vkuiClass="Header__aside">{aside}</Subhead>;
  }
  return <Text weight="regular" vkuiClass="Header__aside">{aside}</Text>;
}

const Header: FunctionComponent<HeaderProps> = ({
  mode,
  children,
  subtitle,
  indicator,
  aside,
  getRootRef,
  multiline,
  ...restProps
}: HeaderProps) => {
  const platform = usePlatform();
  const baseClassNames = getClassName('Header', platform);

  return (
    <div
      {...restProps}
      ref={getRootRef}
      vkuiClass={classNames(baseClassNames, `Header--mode-${mode}`, {
        'Header--pi': isPrimitiveReactNode(indicator),
      })}
    >
      <div vkuiClass="Header__in">
        <div vkuiClass="Header__main">
          {renderChildren({
            children: (
              <Fragment>
                <div vkuiClass={classNames('Header__content-base', {
                  'Header__content-base--multiline': multiline,
                })}>{children}</div>
                {hasReactNode(indicator) && <Caption vkuiClass="Header__indicator" weight="regular" level="1">{indicator}</Caption>}
              </Fragment>
            ),
            platform,
            mode,
          })}
          {hasReactNode(subtitle) && <Caption vkuiClass="Header__subtitle" weight="regular" level="1">{subtitle}</Caption>}
        </div>
        {hasReactNode(aside) && renderAside({ aside, platform })}
      </div>
    </div>
  );
};

Header.defaultProps = {
  mode: 'primary',
};

export default Header;
