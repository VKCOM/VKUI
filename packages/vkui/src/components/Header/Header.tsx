'use client';

import * as React from 'react';
import { classNames, hasReactNode, isPrimitiveReactNode } from '@vkontakte/vkjs';
import type { HasComponent, HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import { Caption } from '../Typography/Caption/Caption';
import { Footnote } from '../Typography/Footnote/Footnote';
import { Headline } from '../Typography/Headline/Headline';
import { Paragraph } from '../Typography/Paragraph/Paragraph';
import { Subhead } from '../Typography/Subhead/Subhead';
import { Title } from '../Typography/Title/Title';
import styles from './Header.module.css';

export interface HeaderProps extends HTMLAttributesWithRootRef<HTMLElement>, HasComponent {
  size?: 's' | 'm' | 'l' | 'xl';
  subtitle?: React.ReactNode;
  /* Позволяет задать тип элемента в который будет обёрнут subtitle */
  subtitleComponent?: React.ElementType;
  /**
   * Допускаются иконки, текст, Link
   */
  after?: React.ReactNode;
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

const sizeClassNames: Record<Exclude<HeaderProps['size'], undefined>, string> = {
  s: styles.sizeS,
  m: styles.sizeM,
  l: styles.sizeL,
  xl: styles.sizeXl,
};

type HeaderContentProps = Pick<HeaderProps, 'children' | 'size' | 'className'> & HasComponent;

const HeaderContent = ({ size, ...restProps }: HeaderContentProps) => {
  switch (size) {
    case 'xl':
      return <Title level="2" weight="1" {...restProps} />;
    case 'l':
      return <Title level="3" weight="1" {...restProps} />;
    case 'm':
      return <Headline {...restProps} />;
    case 's':
      return <Footnote caps weight="1" {...restProps} />;
  }

  return null;
};

const Subtitle: React.FC<
  Pick<HeaderProps, 'multiline' | 'subtitleComponent' | 'size'> & { children: React.ReactNode }
> = ({ subtitleComponent, children, multiline, size }) => {
  const SubtitleElement = size === 'm' || size === 's' ? Caption : Subhead;
  return (
    <SubtitleElement
      className={classNames(styles.subtitle, multiline && styles.contentMultiline)}
      Component={subtitleComponent}
    >
      {children}
    </SubtitleElement>
  );
};

/**
 * @see https://vkcom.github.io/VKUI/#/Header
 */
export const Header = ({
  size = 'm',
  Component = 'h2',
  children,
  subtitle,
  subtitleComponent = 'span',
  indicator,
  after,
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
        sizeClassNames[size],
        isPrimitiveReactNode(indicator) && styles.pi,
      )}
    >
      {before && (
        <div className={classNames(styles.before, subtitle && styles.beforeWithSubtitle)}>
          {before}
        </div>
      )}
      <div className={styles.main}>
        <HeaderContent className={styles.content} Component={Component} size={size}>
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
            <Subtitle multiline={multiline} subtitleComponent={subtitleComponent} size={size}>
              {subtitle}
            </Subtitle>
            {afterSubtitle && <div className={styles.subtitleAfter}>{afterSubtitle}</div>}
          </div>
        )}
      </div>

      {hasReactNode(after) && (
        <Paragraph className={styles.after} Component="span">
          {after}
        </Paragraph>
      )}
    </RootComponent>
  );
};
