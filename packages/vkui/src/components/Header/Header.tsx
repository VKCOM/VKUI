import * as React from 'react';
import { classNames, hasReactNode, isPrimitiveReactNode } from '@vkontakte/vkjs';
import { usePlatform } from '../../hooks/usePlatform';
import { HasComponent, HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import { Footnote } from '../Typography/Footnote/Footnote';
import { Headline } from '../Typography/Headline/Headline';
import { Paragraph } from '../Typography/Paragraph/Paragraph';
import { Subhead } from '../Typography/Subhead/Subhead';
import { Title } from '../Typography/Title/Title';
import styles from './Header.module.css';

export interface HeaderProps extends HTMLAttributesWithRootRef<HTMLElement>, HasComponent {
  mode?: 'primary' | 'secondary' | 'tertiary';
  size?: 'regular' | 'large';
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
}

type HeaderContentProps = Pick<HeaderProps, 'children' | 'mode' | 'size' | 'className'> &
  HasComponent;

const HeaderContent = ({ mode, size, ...restProps }: HeaderContentProps) => {
  const isLarge = size === 'large';

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
  primary: styles.hostModePrimary,
  secondary: styles.hostModeSecondary,
  tertiary: styles.hostModeTertiary,
};
/**
 * @see https://vkcom.github.io/VKUI/#/Header
 */
export const Header = ({
  mode = 'primary',
  size = 'regular',
  Component = 'h2',
  children,
  subtitle,
  subtitleComponent = 'span',
  indicator,
  aside,
  multiline,
  ...restProps
}: HeaderProps) => {
  return (
    <RootComponent
      {...restProps}
      baseClassName={classNames(
        styles.host,
        stylesMode[mode],
        size === 'large' && styles.hostLarge,
        isPrimitiveReactNode(indicator) && styles.hostPi,
        hasReactNode(subtitle) && styles.hostWithSubtitle,
      )}
    >
      <div className={styles.main}>
        <HeaderContent className={styles.content} Component={Component} mode={mode} size={size}>
          <span className={classNames(styles.contentIn, multiline && styles.contentMultiline)}>
            {children}
          </span>
          {hasReactNode(indicator) && (
            <Footnote className={styles.indicator} weight="2">
              {indicator}
            </Footnote>
          )}
        </HeaderContent>

        {hasReactNode(subtitle) && (
          <Subhead
            className={classNames(styles.subtitle, multiline && styles.contentMultiline)}
            Component={subtitleComponent}
          >
            {subtitle}
          </Subhead>
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
