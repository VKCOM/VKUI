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

export interface CalendarDayProps extends CalendarDayElementProps {
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
  onChange(value: Date): void;
  onEnter?(value: Date): void;
  onLeave?(value: Date): void;
}

export const CalendarDay = React.memo(
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
    className,
    children,
    ...restProps
  }: CalendarDayProps) => {
    const { locale } = useConfigProvider();
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

    if (hidden) {
      return <div className={styles.hidden} />;
    }

    return (
      <Tappable
        className={classNames(
          styles.host,
          size === 's' && styles.hostSizeS,
          today && styles.hostToday,
          selected && !disabled && styles.hostSelected,
          selectionStart && styles.hostSelectionStart,
          selectionEnd && styles.hostSelectionEnd,
          disabled && styles.hostDisabled,
          !sameMonth && styles.hostNotSameMonth,
          className,
        )}
        hoverMode={active ? '' : styles.hostHover}
        hasActive={false}
        onClick={onClick}
        disabled={disabled}
        tabIndex={-1}
        getRootRef={ref}
        focusVisibleMode={active ? 'outside' : 'inside'}
        onPointerEnter={handleEnter}
        onPointerLeave={handleLeave}
        {...restProps}
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
            <div className={styles.dayNumber}>
              <VisuallyHidden>{children ?? label}</VisuallyHidden>
              <span aria-hidden>{day.getDate()}</span>
            </div>
          </div>
        </div>
      </Tappable>
    );
  },
);

CalendarDay.displayName = 'CalendarDay';
