import * as React from 'react';
import { classNames, hasMouse as hasPointerLib, noop } from '@vkontakte/vkjs';
import { usePlatform } from '../../hooks/usePlatform';
import { useTimeout } from '../../hooks/useTimeout';
import { getOffsetRect } from '../../lib/offset';
import styles from './Tappable.module.css';

/**
 * Возможно нужен Ripple эффект. Данный хук нужен для отказа
 * от двойного ререндера.
 */
export const useMaybeNeedRipple = (activeMode: string, hasPointer: boolean | undefined) => {
  const platform = usePlatform();

  return platform === 'android' && !hasPointer && activeMode === 'background';
};

interface Wave {
  x: number;
  y: number;
  id: number;
  pointerId: number;
}

const DELAY = 70;
const WAVE_LIVE = 225;

/**
 * Хук для создания Ripple эффектов
 */
export const useRipple = (needRipple: boolean, hasPointerContext: boolean | undefined) => {
  const [clicks, setClicks] = React.useState<Wave[]>([]);

  /**
   * Коллекция нажатий и таймеров задержки появления волны
   */
  const pointerDelayTimers = React.useMemo(
    () => new Map<number, ReturnType<typeof setTimeout>>(),
    [],
  );

  const clearClicks = useTimeout(() => setClicks([]), WAVE_LIVE);

  function addClick(x: number, y: number, pointerId: number) {
    const dateNow = Date.now();
    const filteredClicks = clicks.filter((click) => click.id + WAVE_LIVE > dateNow);

    setClicks([...filteredClicks, { x, y, id: dateNow, pointerId }]);
    clearClicks.set();
    pointerDelayTimers.delete(pointerId);
  }

  /**
   * Добавляем волну с задержкой. Задержка необходима при отмене волны.
   */
  const onPointerDown: React.PointerEventHandler<HTMLSpanElement> = (e) => {
    const { top, left } = getOffsetRect(e.currentTarget);
    const x = e.clientX - (left ?? 0);
    const y = e.clientY - (top ?? 0);

    pointerDelayTimers.set(
      e.pointerId,
      setTimeout(() => addClick(x, y, e.pointerId), DELAY),
    );
  };

  const onPointerCancel: React.PointerEventHandler<HTMLSpanElement> = (e) => {
    const timer = pointerDelayTimers.get(e.pointerId);
    clearTimeout(timer);
    pointerDelayTimers.delete(e.pointerId);
  };

  // WARNING: не использовать для рендеринга
  const reallyNeedRipple = (!hasPointerLib || hasPointerContext === false) && needRipple;

  return {
    clicks,
    onPointerDown: reallyNeedRipple ? onPointerDown : noop,
    onPointerCancel: reallyNeedRipple ? onPointerCancel : noop,
  };
};

export interface RippleProps {
  needRipple: boolean;
  clicks: Wave[];
}

export const Ripple = ({ needRipple = true, clicks }: RippleProps) => {
  return (
    <span
      aria-hidden
      className={classNames(
        styles['Tappable__stateLayer'],
        needRipple && styles['Tappable__ripple'],
      )}
    >
      {clicks.map((wave) => (
        <span
          key={wave.id}
          className={styles['Tappable__wave']}
          style={{ top: wave.y, left: wave.x }}
        />
      ))}
    </span>
  );
};
