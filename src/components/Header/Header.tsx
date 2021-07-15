import { ElementType, FC, HTMLAttributes, ReactNode } from 'react';
import { getClassName } from '../../helpers/getClassName';
import { classNames } from '../../lib/classNames';
import { usePlatform } from '../../hooks/usePlatform';
import { HasPlatform, HasRootRef } from '../../types';
import { hasReactNode, isPrimitiveReactNode } from '../../lib/utils';
import { Platform } from '../../lib/platform';
import Headline from '../Typography/Headline/Headline';
import Caption from '../Typography/Caption/Caption';
import Title from '../Typography/Title/Title';
import Text from '../Typography/Text/Text';
import Subhead from '../Typography/Subhead/Subhead';

export interface HeaderProps extends HTMLAttributes<HTMLElement>, HasRootRef<HTMLElement> {
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

type HeaderContentProps = Pick<HeaderProps, 'children' | 'mode'> & HasPlatform & { Component: ElementType };

const HeaderContent: FC<HeaderContentProps> = ({ platform, mode, ...restProps }) => {
  if (platform === Platform.IOS) {
    switch (mode) {
      case 'primary':
      case 'tertiary':
        return <Title weight="semibold" level="3" {...restProps} />;
      case 'secondary':
        return <Caption level="1" weight="semibold" caps {...restProps} />;
    }
  }

  if (platform === Platform.VKCOM) {
    switch (mode) {
      case 'primary':
        return <Headline weight="regular" {...restProps} />;
      case 'secondary':
      case 'tertiary':
        return <Caption level="1" weight="regular" {...restProps} />;
    }
  }

  switch (mode) {
    case 'primary':
    case 'tertiary':
      return <Headline weight="medium" {...restProps} />;
    case 'secondary':
      return <Caption level="1" weight="medium" caps {...restProps} />;
  }
};

const HeaderAside: FC<Pick<HeaderProps, 'aside'> & HasPlatform> = ({ platform, ...restProps }) => {
  return platform === Platform.VKCOM
    ? <Subhead weight="regular" {...restProps} />
    : <Text weight="regular" {...restProps} />;
};

const Header: FC<HeaderProps> = ({
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

  return (
    <header
      {...restProps}
      ref={getRootRef}
      vkuiClass={classNames(getClassName('Header', platform), `Header--mode-${mode}`, { 'Header--pi': isPrimitiveReactNode(indicator) })}
    >
      <div vkuiClass="Header__main">
        <HeaderContent vkuiClass="Header__content" Component="h3" mode={mode} platform={platform}>
          <span vkuiClass={classNames('Header__content-in', { 'Header__content-in--multiline': multiline })}>{children}</span>
          {hasReactNode(indicator) && <Caption vkuiClass="Header__indicator" weight="regular" level="1">{indicator}</Caption>}
        </HeaderContent>

        {hasReactNode(subtitle) && <Caption vkuiClass="Header__subtitle" weight="regular" level="1">{subtitle}</Caption>}
      </div>

      {hasReactNode(aside) && <HeaderAside vkuiClass="Header__aside" platform={platform}>{aside}</HeaderAside>}
    </header>
  );
};

Header.defaultProps = {
  mode: 'primary',
};

export default Header;
