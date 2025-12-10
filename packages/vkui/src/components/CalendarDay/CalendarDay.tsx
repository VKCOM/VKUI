'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useFocusVisible } from '../../hooks/useFocusVisible';
import { useFocusVisibleClassName } from '../../hooks/useFocusVisibleClassName';
import { mergeCalls } from '../../lib/mergeCalls';
import { defineComponentDisplayNames } from '../../lib/react/defineComponentDisplayNames';
import { useConfigProvider } from '../ConfigProvider/ConfigProviderContext';
import { Tappable } from '../Tappable/Tappable';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';
import styles from './CalendarDay.module.css';

export type CalendarDayElementProps = Omit<
  React.AllHTMLAttributes<HTMLElement>,
  'onChange' | 'size' | 'disabled' | 'selected' | 'onFocus'
>;

export type CalendarDayTestsProps = {
  /**
   * Передает атрибут `data-testid` для дня в календаре.
   */
  testId?: string | ((day: Date) => string);
};

export interface CalendarDayProps extends CalendarDayElementProps, CalendarDayTestsProps {
  /**
   * Дата, которую представляет этот день.
   */
  day: Date;
  /**
   * Является ли день сегодняшним.
   */
  today?: boolean;
  /**
   * Выбран ли день (в режиме одиночного выбора или как часть диапазона).
   */
  selected?: boolean;
  /**
   * Является ли день началом выделенного диапазона.
   */
  selectionStart?: boolean;
  /**
   * Является ли день концом выделенного диапазона.
   */
  selectionEnd?: boolean;
  /**
   * Подсветить день как начало предполагаемого диапазона (при наведении).
   */
  hintedSelectionStart?: boolean;
  /**
   * Подсветить день как конец предполагаемого диапазона (при наведении).
   */
  hintedSelectionEnd?: boolean;
  /**
   * Активен ли день (текущая дата в календаре).
   */
  active?: boolean;
  /**
   * Скрыть день (например, дни соседних месяцев).
   */
  hidden?: boolean;
  /**
   * Блокировка взаимодействия с компонентом.
   */
  disabled?: boolean;
  /**
   * Находится ли день в фокусе (клавиатурная навигация).
   */
  focused?: boolean;
  /**
   * Подсвечен ли день (ховер).
   */
  hinted?: boolean;
  /**
   * Принадлежит ли день текущему отображаемому месяцу.
   */
  sameMonth?: boolean;
  /**
   * Размер компонента.
   */
  size?: 's' | 'm';
  /**
   * Обработчик выбора/изменения дня.
   */
  onChange: (value: Date) => void;
  /**
   * Обработчик наведения на день.
   */
  onEnter?: (value: Date) => void;
  /**
   * Обработчик снятия ховера с дня.
   */
  onLeave?: (value: Date) => void;
  /**
   * Обработчик фокуса на дне.
   */
  onFocus?: (value: Date) => void;
  /**
   * Кастомизация отображения содержимого дня.
   */
  renderDayContent?: (day: Date) => React.ReactNode;
}

// eslint-disable-next-line react/display-name -- используется defineComponentDisplayNames
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
    onFocus,
    onBlur,
    hinted,
    hintedSelectionStart,
    hintedSelectionEnd,
    sameMonth,
    size,
    children,
    renderDayContent,
    testId,
    role,
    'aria-colindex': colIndex,
    ...restProps
  }: CalendarDayProps) => {
    const { locale, direction } = useConfigProvider();
    const ref = React.useRef<HTMLElement>(null);
    const onClick = React.useCallback(() => onChange(day), [day, onChange]);
    const handleEnter = React.useCallback(() => onEnter?.(day), [day, onEnter]);
    const handleLeave = React.useCallback(() => onLeave?.(day), [day, onLeave]);
    const handleFocus = React.useCallback(() => onFocus?.(day), [day, onFocus]);

    const focusVisibleMode = active ? 'outside' : 'inside';
    const { focusVisible, ...focusEvents } = useFocusVisible();
    const focusVisibleClassNames = useFocusVisibleClassName({
      focusVisible,
      mode: focusVisibleMode,
    });
    const focusHandlers = mergeCalls(focusEvents, { onFocus: handleFocus, onBlur });

    const label = new Intl.DateTimeFormat(locale, {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    }).format(day);

    React.useEffect(() => {
      if (focused && ref.current) {
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
      return (
        <div
          role={role}
          aria-colindex={colIndex}
          className={classNames(styles.hidden, size === 's' && styles.sizeS)}
        />
      );
    }

    return (
      <Tappable
        baseClassName={classNames(
          styles.host,
          size === 's' && styles.sizeS,
          direction === 'rtl' && styles.rtl,
          focusVisibleClassNames,
        )}
        role={role}
        aria-colindex={colIndex}
        hoverMode={styles.hostHovered}
        activeMode={styles.hostActivated}
        hasActive={false}
        onClick={onClick}
        disabled={disabled}
        getRootRef={ref}
        onPointerEnter={handleEnter}
        onPointerLeave={handleLeave}
        data-testid={typeof testId === 'string' ? testId : testId?.(day)}
        {...restProps}
        {...focusHandlers}
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

if (process.env.NODE_ENV !== 'production') {
  defineComponentDisplayNames(CalendarDay, 'CalendarDay');
}
