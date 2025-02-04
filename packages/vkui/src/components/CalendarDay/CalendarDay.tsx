'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { ENABLE_KEYBOARD_INPUT_EVENT_NAME } from '../../hooks/useKeyboardInputTracker';
import { useConfigProvider } from '../ConfigProvider/ConfigProviderContext';
import { Tappable } from '../Tappable/Tappable';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';
import styles from './CalendarDay.module.css';

export type CalendarDayElementProps = Omit<
  React.AllHTMLAttributes<HTMLElement>,
  'onChange' | 'size' | 'disabled' | 'selected'
>;

export type CalendarDayTestsProps = {
  /**
   * Передает атрибут `data-testid` для дня в календаре
   */
  testId?: string | ((day: Date) => string);
};

export interface CalendarDayProps extends CalendarDayElementProps, CalendarDayTestsProps {
  day: Date;
  today?: boolean;
  selected?: boolean;
  selectionStart?: boolean;
  selectionEnd?: boolean;
  hintedSelectionStart?: boolean;
  hintedSelectionEnd?: boolean;
  active?: boolean;
  hidden?: boolean;
  disabled?: boolean;
  focused?: boolean;
  hinted?: boolean;
  sameMonth?: boolean;
  size?: 's' | 'm';
  onChange: (value: Date) => void;
  onEnter?: (value: Date) => void;
  onLeave?: (value: Date) => void;
  // Функция отрисовки контента в ячейке дня
  renderDayContent?: (day: Date) => React.ReactNode;
}

export const CalendarDay: React.FC<CalendarDayProps> = React.memo(
  ({
    day,
    today,
    selected,
    onChange,
    hidden,
    disabled,
    active,
    selectionStart,
    selectionEnd,
    focused,
    onEnter,
    onLeave,
    hinted,
    hintedSelectionStart,
    hintedSelectionEnd,
    sameMonth,
    size,
    children,
    renderDayContent,
    testId,
    ...restProps
  }: CalendarDayProps) => {
    const { locale, direction } = useConfigProvider();
    const ref = React.useRef<HTMLElement>(null);
    const onClick = React.useCallback(() => onChange(day), [day, onChange]);
    const handleEnter = React.useCallback(() => onEnter?.(day), [day, onEnter]);
    const handleLeave = React.useCallback(() => onLeave?.(day), [day, onLeave]);

    const label = new Intl.DateTimeFormat(locale, {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(day);

    React.useEffect(() => {
      if (focused && ref.current) {
        ref.current.dispatchEvent(new Event(ENABLE_KEYBOARD_INPUT_EVENT_NAME, { bubbles: true }));
        ref.current.focus();
      }
    }, [focused]);

    const content = React.useMemo(() => {
      if (renderDayContent) {
        return renderDayContent(day);
      }
      return (
        <div className={styles.dayNumber}>
          <VisuallyHidden>{children ?? label}</VisuallyHidden>
          <span aria-hidden>{day.getDate()}</span>
        </div>
      );
    }, [renderDayContent, day, children, label]);

    if (hidden) {
      return <div className={classNames(styles.hidden, size === 's' && styles.sizeS)} />;
    }

    return (
      <Tappable
        baseClassName={classNames(
          styles.host,
          size === 's' && styles.sizeS,
          direction === 'rtl' && styles.rtl,
        )}
        hoverMode={styles.hostHovered}
        activeMode={styles.hostActivated}
        hasActive={false}
        onClick={onClick}
        disabled={disabled}
        tabIndex={-1}
        getRootRef={ref}
        focusVisibleMode={active ? 'outside' : 'inside'}
        onPointerEnter={handleEnter}
        onPointerLeave={handleLeave}
        data-testid={typeof testId === 'string' ? testId : testId?.(day)}
        {...restProps}
      >
        <div
          className={classNames(
            styles.content,
            size === 's' && styles.sizeS,
            today && styles.today,
            selected && !disabled && styles.selected,
            selectionStart && styles.selectionStart,
            selectionEnd && styles.selectionEnd,
            disabled && styles.disabled,
            !sameMonth && styles.notSameMonth,
          )}
        >
          <div
            className={classNames(
              styles.hinted,
              hinted && styles.hintedActive,
              hintedSelectionStart && styles.hintedSelectionStart,
              hintedSelectionEnd && styles.hintedSelectionEnd,
            )}
          >
            <div className={classNames(styles.inner, active && !disabled && styles.innerActive)}>
              {content}
            </div>
          </div>
        </div>
      </Tappable>
    );
  },
);

CalendarDay.displayName = 'CalendarDay';
