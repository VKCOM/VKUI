'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { usePlatform } from '../../hooks/usePlatform';
import type { HasComponent, HasRootRef } from '../../types';
import { DEFAULT_ACTIVE_EFFECT_DELAY } from '../Clickable/useState';
import { Tappable, type TappableOmitProps } from '../Tappable/Tappable';
import { SelectionControlContext } from './SelectionControlContext';
import { SelectionControlLabel } from './SelectionControlLabel/SelectionControlLabel';
import styles from './SelectionControl.module.css';

const sizeYClassNames = {
  none: styles.sizeYNone,
  compact: styles.sizeYCompact,
};

export interface SelectionControlProps
  extends React.ComponentProps<'label'>,
    HasRootRef<HTMLLabelElement>,
    HasComponent,
    Pick<
      TappableOmitProps,
      'hoverMode' | 'activeMode' | 'hasHover' | 'hasActive' | 'focusVisibleMode' | 'disabled'
    > {
  /**
   * Отключает отступы. При использовании этого свойства, значение по умолчанию для свойств `hoverMode` и `activeMode` становится `"opacity"`.
   */
  noPadding?: boolean;
}

/**
 * @see https://vkui.io/components/selection-control
 */
export const SelectionControl = ({
  noPadding = false,
  hoverMode: hoverModeProp,
  activeMode: activeModeProp,
  ...restProps
}: SelectionControlProps): React.ReactNode => {
  const { sizeY = 'none' } = useAdaptivity();
  const platform = usePlatform();

  const hoverMode = hoverModeProp || (noPadding ? 'opacity' : 'background');
  const activeMode = activeModeProp || (noPadding ? 'opacity' : 'background');

  return (
    <SelectionControlContext.Provider value={{ noPadding }}>
      <Tappable
        Component="label"
        baseClassName={classNames(
          styles.host,
          sizeY !== 'regular' && sizeYClassNames[sizeY],
          !noPadding && styles.withPadding,
        )}
        activeEffectDelay={platform === 'ios' ? 100 : DEFAULT_ACTIVE_EFFECT_DELAY}
        hoverMode={hoverMode}
        activeMode={activeMode}
        {...restProps}
      />
    </SelectionControlContext.Provider>
  );
};

SelectionControl.Label = SelectionControlLabel;
