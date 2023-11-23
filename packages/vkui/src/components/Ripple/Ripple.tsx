import * as React from 'react';
import { getOffsetRect } from '@vkontakte/vkjs';
import { usePlatform } from '../../hooks/usePlatform';
import { Platform } from '../../lib/platform';
import { RootComponent, RootComponentProps } from '../RootComponent/RootComponent';
import styles from './Ripple.module.css';

interface RippleProps extends RootComponentProps<HTMLSpanElement> {
  clientX?: number;
  clientY?: number;
  delay?: number;
}

const RIPPLE_EFFECT_DELAY = 600;

/**
 * INTERNAL
 */
const RippleEffect = ({
  clientX = 0,
  clientY = 0,
  delay = RIPPLE_EFFECT_DELAY,
  ...restProps
}: RippleProps) => {
  const ref = React.useRef<HTMLSpanElement>(null);

  React.useEffect(() => {
    const { top, left } = getOffsetRect(ref.current);
    const x = clientX - (left ?? 0);
    const y = clientY - (top ?? 0);

    if (ref.current) {
      ref.current.style.cssText = `--vkui_internal--ripple-x:${x};--vkui_internal--ripple-y:${y};--vkui_internal--ripple-delay:${delay}ms;`;
    }
  }, [clientX, clientY, delay]);

  return (
    <RootComponent
      getRootRef={ref}
      {...restProps}
      Component="span"
      aria-hidden
      baseClassName={styles['Ripple']}
    />
  );
};

/**
 * INTERNAL
 */
export const Ripple = (props: RippleProps) => {
  const platform = usePlatform();

  if (platform !== Platform.ANDROID) {
    return null;
  }

  return <RippleEffect {...props} />;
};
