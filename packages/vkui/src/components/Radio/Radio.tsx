import * as React from 'react';
import { classNames, hasReactNode } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { usePlatform } from '../../hooks/usePlatform';
import { SizeType } from '../../lib/adaptivity';
import { Platform } from '../../lib/platform';
import { HasRef, HasRootRef } from '../../types';
import { ACTIVE_EFFECT_DELAY, Tappable } from '../Tappable/Tappable';
import { Footnote } from '../Typography/Footnote/Footnote';
import { VisuallyHiddenInput } from '../VisuallyHiddenInput/VisuallyHiddenInput';
import styles from './Radio.module.css';

const sizeYClassNames = {
  none: styles['Radio--sizeY-none'],
  [SizeType.COMPACT]: styles['Radio--sizeY-compact'],
  [SizeType.REGULAR]: null,
};

const RadioIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden {...props}>
      <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="12" cy="12" r="7.5" className={styles['Radio__pin']} fill="currentColor" />
    </svg>
  );
};

export interface RadioProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    HasRef<HTMLInputElement>,
    HasRootRef<HTMLLabelElement> {
  description?: React.ReactNode;
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
  ...restProps
}: RadioProps) => {
  const platform = usePlatform();
  const { sizeY = 'none' } = useAdaptivity();

  return (
    <Tappable
      Component="label"
      style={style}
      className={classNames(styles['Radio'], sizeYClassNames[sizeY], className)}
      activeEffectDelay={platform === Platform.IOS ? 100 : ACTIVE_EFFECT_DELAY}
      disabled={restProps.disabled}
      getRootRef={getRootRef}
    >
      <VisuallyHiddenInput {...restProps} className={styles['Radio__input']} type="radio" />
      <div className={styles['Radio__container']}>
        <RadioIcon className={styles['Radio__icon']} />
        <div className={styles['Radio__content']}>
          <div className={styles['Radio__children']}>{children}</div>
          {hasReactNode(description) && (
            <Footnote className={styles['Radio__description']}>{description}</Footnote>
          )}
        </div>
      </div>
    </Tappable>
  );
};
