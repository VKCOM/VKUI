import * as React from 'react';
import { classNames, hasReactNode, isPrimitiveReactNode } from '@vkontakte/vkjs';
import { usePlatform } from '../../hooks/usePlatform';
import type { HasComponent, HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import { Footnote } from '../Typography/Footnote/Footnote';
import { Headline } from '../Typography/Headline/Headline';
import { Paragraph } from '../Typography/Paragraph/Paragraph';
import { Subhead } from '../Typography/Subhead/Subhead';
import { Title } from '../Typography/Title/Title';
import styles from './Header.module.css';

export interface HeaderProps extends HTMLAttributesWithRootRef<HTMLElement>, HasComponent {
  mode?: 'primary' | 'secondary' | 'tertiary';
  size?: 'm' | 'l';
  subtitle?: React.ReactNode;
  /* Позволяет задать тип элемента в который будет обёрнут subtitle */
  subtitleComponent?: React.ElementType;
  /**
   * Допускаются иконки, текст, Link
   */
  aside?: React.ReactNode;
  /**
   * Допускаются текст, Indicator
   */
  indicator?: React.ReactNode;
  multiline?: boolean;
  /**
   * Иконка слева (рекомендуется использовать размер 28px)
   */
  before?: React.ReactNode;
  /**
   * Иконка слева от title (рекомендуется использовать размер 16px)
   */
  beforeTitle?: React.ReactNode;
  /**
   * Иконка справа от title (рекомендуется использовать размер 16px)
   */
  afterTitle?: React.ReactNode;
  /**
   * Иконка слева от subtitle (рекомендуется использовать размер 12px)
   */
  beforeSubtitle?: React.ReactNode;
  /**
   * Иконка справа от subtitle (рекомендуется использовать размер 12px)
   */
  afterSubtitle?: React.ReactNode;
}

type HeaderContentProps = Pick<HeaderProps, 'children' | 'mode' | 'size' | 'className'> &
  HasComponent;

const HeaderContent = ({ mode, size, ...restProps }: HeaderContentProps) => {
  const isLarge = size === 'l';

  const platform = usePlatform();
  if (platform === 'ios') {
    switch (mode) {
      case 'primary':
        return isLarge ? (
          <Title level="2" weight="2" {...restProps} />
        ) : (
          <Title weight="1" level="3" {...restProps} />
        );
      case 'secondary':
        return <Footnote weight="1" caps {...restProps} />;
      case 'tertiary':
        return <Title weight="1" level="3" {...restProps} />;
    }
  }

  switch (mode) {
    case 'primary':
      return isLarge ? (
        <Title level="2" weight="2" {...restProps} />
      ) : (
        <Headline weight="2" {...restProps} />
      );
    case 'secondary':
      return <Footnote weight="1" caps {...restProps} />;
    case 'tertiary':
      return <Headline weight="2" {...restProps} />;
  }

  return null;
};

const stylesMode = {
  primary: styles.modePrimary,
  secondary: styles.modeSecondary,
  tertiary: styles.modeTertiary,
};
/**
 * @see https://vkcom.github.io/VKUI/#/Header
 */
export const Header = ({
  mode = 'primary',
  size = 'm',
  Component = 'h2',
  children,
  subtitle,
  subtitleComponent = 'span',
  indicator,
  aside,
  multiline,
  before,
  beforeTitle,
  afterTitle,
  beforeSubtitle,
  afterSubtitle,
  ...restProps
}: HeaderProps): React.ReactNode => {
  return (
    <RootComponent
      {...restProps}
      baseClassName={classNames(
        styles.host,
        stylesMode[mode],
        size === 'l' && styles.large,
        isPrimitiveReactNode(indicator) && styles.pi,
        hasReactNode(subtitle) && styles.withSubtitle,
      )}
    >
      {before && (
        <div className={classNames(styles.before, subtitle && styles.beforeWithSubtitle)}>
          {before}
        </div>
      )}
      <div className={styles.main}>
        <HeaderContent className={styles.content} Component={Component} mode={mode} size={size}>
          {beforeTitle && <div className={styles.contentBefore}>{beforeTitle}</div>}
          <span className={classNames(styles.contentIn, multiline && styles.contentMultiline)}>
            {children}
          </span>
          {afterTitle && <div className={styles.contentAfter}>{afterTitle}</div>}
          {hasReactNode(indicator) && (
            <Footnote className={styles.indicator} weight="2">
              {indicator}
            </Footnote>
          )}
        </HeaderContent>
        {hasReactNode(subtitle) && (
          <div className={styles.subtitleWrapper}>
            {beforeSubtitle && <div className={styles.subtitleBefore}>{beforeSubtitle}</div>}
            <Subhead
              className={classNames(styles.subtitle, multiline && styles.contentMultiline)}
              Component={subtitleComponent}
            >
              {subtitle}
            </Subhead>
            {afterSubtitle && <div className={styles.subtitleAfter}>{afterSubtitle}</div>}
          </div>
        )}
      </div>

      {hasReactNode(aside) && (
        <Paragraph className={styles.aside} Component="span">
          {aside}
        </Paragraph>
      )}
    </RootComponent>
  );
};
