import * as React from 'react';
import { classNames, hasReactNode, isPrimitiveReactNode } from '@vkontakte/vkjs';
import { usePlatform } from '../../hooks/usePlatform';
import { Platform } from '../../lib/platform';
import { HasComponent, HasRootRef } from '../../types';
import { Footnote } from '../Typography/Footnote/Footnote';
import { Headline } from '../Typography/Headline/Headline';
import { Subhead } from '../Typography/Subhead/Subhead';
import { Text } from '../Typography/Text/Text';
import { Title } from '../Typography/Title/Title';
import styles from './Header.module.css';

export interface HeaderProps extends React.HTMLAttributes<HTMLElement>, HasRootRef<HTMLElement> {
  mode?: 'primary' | 'secondary' | 'tertiary';
  size?: 'regular' | 'large';
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

type HeaderContentProps = Pick<HeaderProps, 'children' | 'mode' | 'size' | 'className'> &
  HasComponent;

const HeaderContent = ({ mode, size, ...restProps }: HeaderContentProps) => {
  const isLarge = size === 'large';

  const platform = usePlatform();
  if (platform === Platform.IOS) {
    switch (mode) {
      case 'primary':
        return isLarge ? (
          <Title level="2" weight="2" {...restProps} />
        ) : (
          <Title weight="1" level="3" {...restProps} />
        );
      case 'tertiary':
        return <Title weight="1" level="3" {...restProps} />;
      case 'secondary':
        return <Footnote weight="2" caps {...restProps} />;
    }
  }

  if (platform === Platform.VKCOM) {
    switch (mode) {
      case 'primary':
        return isLarge ? (
          <Title level="2" weight="1" {...restProps} />
        ) : (
          <Headline weight="3" {...restProps} />
        );
      case 'secondary':
      case 'tertiary':
        return <Footnote {...restProps} />;
    }
  }

  switch (mode) {
    case 'primary':
      return isLarge ? (
        <Title level="2" weight="2" {...restProps} />
      ) : (
        <Headline weight="2" {...restProps} />
      );
    case 'tertiary':
      return <Headline weight="2" {...restProps} />;
    case 'secondary':
      return <Footnote weight="1" caps {...restProps} />;
  }

  return null;
};

/**
 * @see https://vkcom.github.io/VKUI/#/Header
 */
export const Header = ({
  mode = 'primary',
  size = 'regular',
  children,
  subtitle,
  indicator,
  aside,
  getRootRef,
  multiline,
  className,
  ...restProps
}: HeaderProps) => {
  const platform = usePlatform();

  const AsideTypography = platform === Platform.VKCOM ? Subhead : Text;
  const SubtitleTypography = mode === 'secondary' ? Subhead : Footnote;

  return (
    <header
      {...restProps}
      ref={getRootRef}
      className={classNames(
        styles['Header'],
        platform === Platform.VKCOM && styles['Header--vkcom'],
        platform === Platform.ANDROID && styles['Header--android'],
        platform === Platform.IOS && styles['Header--ios'],
        {
          primary: styles['Header--mode-primary'],
          secondary: styles['Header--mode-secondary'],
          tertiary: styles['Header--mode-tertiary'],
        }[mode],
        isPrimitiveReactNode(indicator) && styles['Header--pi'],
        className,
      )}
    >
      <div className={styles['Header__main']}>
        <HeaderContent
          className={styles['Header__content']}
          Component="span"
          mode={mode}
          size={size}
        >
          <span
            className={classNames(
              styles['Header__content-in'],
              multiline && styles['Header__content-in--multiline'],
            )}
          >
            {children}
          </span>
          {hasReactNode(indicator) && (
            <Footnote
              className={styles['Header__indicator']}
              weight={mode === 'primary' || mode === 'secondary' ? '1' : undefined}
            >
              {indicator}
            </Footnote>
          )}
        </HeaderContent>

        {hasReactNode(subtitle) && (
          <SubtitleTypography className={styles['Header__subtitle']} Component="span">
            {subtitle}
          </SubtitleTypography>
        )}
      </div>

      {hasReactNode(aside) && (
        <AsideTypography className={styles['Header__aside']} Component="span">
          {aside}
        </AsideTypography>
      )}
    </header>
  );
};
