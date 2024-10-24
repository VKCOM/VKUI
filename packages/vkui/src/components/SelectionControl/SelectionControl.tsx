'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { usePlatform } from '../../hooks/usePlatform';
import type { HasRootRef } from '../../types';
import { DEFAULT_ACTIVE_EFFECT_DELAY } from '../Clickable/useState';
import { Tappable, type TappableProps } from '../Tappable/Tappable';
import { SelectionControlLabel } from './SelectionControlLabel/SelectionControlLabel';
import styles from './SelectionControl.module.css';

const sizeYClassNames = {
  none: styles.sizeYNone,
  compact: styles.sizeYCompact,
};

export interface SelectionControlProps
  extends React.ComponentProps<'label'>,
    HasRootRef<HTMLLabelElement>,
    Pick<
      TappableProps,
      'hoverMode' | 'activeMode' | 'hasHover' | 'hasActive' | 'focusVisibleMode' | 'disabled'
    > {}

/**
 * @see https://vkcom.github.io/VKUI/#/SelectionControl
 */
export const SelectionControl = (restProps: SelectionControlProps): React.ReactNode => {
  const { sizeY = 'none' } = useAdaptivity();
  const platform = usePlatform();

  return (
    <Tappable
      Component="label"
      baseClassName={classNames(styles.host, sizeY !== 'regular' && sizeYClassNames[sizeY])}
      activeEffectDelay={platform === 'ios' ? 100 : DEFAULT_ACTIVE_EFFECT_DELAY}
      {...restProps}
    />
  );
};

SelectionControl.Label = SelectionControlLabel;
