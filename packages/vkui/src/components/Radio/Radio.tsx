import * as React from 'react';
import { classNames, hasReactNode } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { usePlatform } from '../../hooks/usePlatform';
import { HasDataAttribute, HasRef, HasRootRef } from '../../types';
import { DEFAULT_ACTIVE_EFFECT_DELAY } from '../Clickable/useState';
import { Tappable } from '../Tappable/Tappable';
import { Footnote } from '../Typography/Footnote/Footnote';
import { Text } from '../Typography/Text/Text';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';
import styles from './Radio.module.css';

const sizeYClassNames = {
  none: styles.hostSizeYNone,
  ['compact']: styles.hostSizeYCompact,
};

const RadioIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden {...props}>
      <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="12" cy="12" r="7.5" className={styles.pin} fill="currentColor" />
    </svg>
  );
};

export interface RadioProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    HasRef<HTMLInputElement>,
    HasRootRef<HTMLLabelElement> {
  description?: React.ReactNode;
  titleAfter?: React.ReactNode;
  /**
   * Позволяет передавать data-* аттрибуты элементу label
   **/
  labelProps?: HasDataAttribute;
}

/**
 * @see https://vkcom.github.io/VKUI/#/Radio
 */
export const Radio = ({
  children,
  description,
  style,
  className,
  getRootRef,
  titleAfter,
  getRef,
  labelProps,
  ...restProps
}: RadioProps) => {
  const platform = usePlatform();
  const { sizeY = 'none' } = useAdaptivity();

  return (
    <Tappable
      Component="label"
      style={style}
      className={classNames(styles.host, sizeY !== 'regular' && sizeYClassNames[sizeY], className)}
      activeEffectDelay={platform === 'ios' ? 100 : DEFAULT_ACTIVE_EFFECT_DELAY}
      disabled={restProps.disabled}
      getRootRef={getRootRef}
      {...labelProps}
    >
      <VisuallyHidden
        {...restProps}
        Component="input"
        type="radio"
        getRootRef={getRef}
        className={styles.input}
      />
      <div className={styles.container}>
        <RadioIcon className={styles.icon} />
        <div className={styles.content}>
          <div className={styles.title}>
            <Text>{children}</Text>
            <div className={styles.titleAfter}>{titleAfter}</div>
          </div>
          {hasReactNode(description) && (
            <Footnote className={styles.description}>{description}</Footnote>
          )}
        </div>
      </div>
    </Tappable>
  );
};
