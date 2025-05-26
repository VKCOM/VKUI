'use client';

import { classNames, hasReactNode } from '@vkontakte/vkjs';
import { usePlatform } from '../../../hooks/usePlatform';
import * as shapes from '../../../lib/material/shapes/shapes';
import { RootComponent } from '../../RootComponent/RootComponent';
import { VisuallyHidden } from '../../VisuallyHidden/VisuallyHidden';
import { Spinner as SimpleSpinner, type SpinnerProps } from '../Spinner';
import { IconMaterial } from './icons';
import styles from './Spinner.module.css';

const iconSizeMap = {
  s: 16,
  m: 24,
  l: 32,
  xl: 44,
} as const;

const defaultShapesList = [
  shapes.softBurstParams,
  shapes.cookie9Params,
  shapes.pentagonParams,
  shapes.pillParams,
  shapes.sunnyParams,
  shapes.cookie4Params,
  shapes.ovalParams,
] as const;

export interface MaterialSpinnerProps extends SpinnerProps {
  /**
   * Последовательность форм между которыми будет происходить анимация.
   */
  polygons?: readonly [shapes.ShapeParameters, shapes.ShapeParameters, ...shapes.ShapeParameters[]];
}

function MaterialSpinner({
  polygons = defaultShapesList,
  size = 'm',
  children = 'Загружается...',
  disableAnimation = false,
  noColor = false,
  ...restProps
}: MaterialSpinnerProps) {
  const iconSize = iconSizeMap[size];

  return (
    <RootComponent
      Component="span"
      role="status"
      {...restProps}
      baseClassName={classNames(styles.host, noColor && styles.noColor)}
    >
      <IconMaterial size={iconSize} polygons={polygons} disableAnimation={disableAnimation} />
      {hasReactNode(children) && <VisuallyHidden>{children}</VisuallyHidden>}
    </RootComponent>
  );
}

export function Spinner(props: SpinnerProps) {
  const platform = usePlatform();

  const Component = platform === 'ios' ? SimpleSpinner : MaterialSpinner;

  return <Component {...props} />;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export const unstable_ExpressiveSpinner = Spinner;
