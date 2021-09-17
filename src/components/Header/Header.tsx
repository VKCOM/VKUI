import * as React from 'react';
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
import './Header.css';

export interface HeaderProps extends React.HTMLAttributes<HTMLElement>, HasRootRef<HTMLElement> {
  mode?: 'primary' | 'secondary' | 'tertiary';
  subtitle?: React.ReactNode;
  /**
   * Допускаются иконки, текст, Link
   */
  aside?: React.ReactNode;
  /**
   * Допускаются текст, Indicator
   */
  indicator?: React.ReactNode;
  multiline?: boolean;
}

type HeaderContentProps = Pick<HeaderProps, 'children' | 'mode'> & HasPlatform & { Component: React.ElementType };

const HeaderContent: React.FC<HeaderContentProps> = ({ platform, mode, ...restProps }) => {
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

type HeaderAsideProps = Pick<HeaderProps, 'aside'> & HasPlatform & { Component: React.ElementType };

const HeaderAside: React.FC<HeaderAsideProps> = ({ platform, ...restProps }) => {
  return platform === Platform.VKCOM
    ? <Subhead weight="regular" {...restProps} />
    : <Text weight="regular" {...restProps} />;
};

type HeaderSubtitleProps = Pick<HeaderProps, 'subtitle' | 'mode'> & { Component: React.ElementType };

const HeaderSubtitle: React.FC<HeaderSubtitleProps> = ({ mode, ...restProps }) => {
  return mode === 'secondary'
    ? <Subhead weight="regular" {...restProps} />
    : <Caption weight="regular" level="1" {...restProps} />;
};

const Header: React.FC<HeaderProps> = ({
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
          {hasReactNode(indicator) && (
            <Caption
              vkuiClass="Header__indicator"
              weight={mode === 'primary' || mode === 'secondary' ? 'medium' : 'regular'}
              level="1"
            >
              {indicator}
            </Caption>
          )}
        </HeaderContent>

        {hasReactNode(subtitle) && <HeaderSubtitle vkuiClass="Header__subtitle" Component="span">{subtitle}</HeaderSubtitle>}
      </div>

      {hasReactNode(aside) && <HeaderAside vkuiClass="Header__aside" Component="span" platform={platform}>{aside}</HeaderAside>}
    </header>
  );
};

Header.defaultProps = {
  mode: 'primary',
};

export default Header;
