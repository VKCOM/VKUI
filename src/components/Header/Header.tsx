import * as React from 'react';
import { classNamesString } from '../../lib/classNames';
import { usePlatform } from '../../hooks/usePlatform';
import { HasComponent, HasRootRef } from '../../types';
import { hasReactNode, isPrimitiveReactNode } from '../../lib/utils';
import { Platform } from '../../lib/platform';
import { Headline } from '../Typography/Headline/Headline';
import { Footnote } from '../Typography/Footnote/Footnote';
import { Title } from '../Typography/Title/Title';
import { Text } from '../Typography/Text/Text';
import { Subhead } from '../Typography/Subhead/Subhead';
import styles from './Header.module.css';

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

type HeaderContentProps = Pick<HeaderProps, 'children' | 'mode' | 'className'> & HasComponent;

const HeaderContent = ({ mode, ...restProps }: HeaderContentProps) => {
  const platform = usePlatform();
  if (platform === Platform.IOS) {
    switch (mode) {
      case 'primary':
      case 'tertiary':
        return <Title weight="1" level="3" {...restProps} />;
      case 'secondary':
        return <Footnote weight="2" caps {...restProps} />;
    }
  }

  if (platform === Platform.VKCOM) {
    switch (mode) {
      case 'primary':
        return <Headline weight="3" {...restProps} />;
      case 'secondary':
      case 'tertiary':
        return <Footnote {...restProps} />;
    }
  }

  switch (mode) {
    case 'primary':
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
      className={classNamesString(
        styles['Header'],
        platform === Platform.VKCOM && styles['Header--vkcom'],
        platform === Platform.ANDROID && styles['Header--android'],
        platform === Platform.IOS && styles['Header--ios'],
        styles[`Header--mode-${mode}`],
        isPrimitiveReactNode(indicator) && styles['Header--pi'],
        className,
      )}
    >
      <div className={styles['Header__main']}>
        <HeaderContent className={styles['Header__content']} Component="span" mode={mode}>
          <span
            className={classNamesString(
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
