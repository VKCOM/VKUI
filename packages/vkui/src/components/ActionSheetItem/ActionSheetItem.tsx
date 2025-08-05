'use client';

import * as React from 'react';
import { classNames, noop } from '@vkontakte/vkjs';
import { useAdaptivityWithJSMediaQueries } from '../../hooks/useAdaptivityWithJSMediaQueries';
import { usePlatform } from '../../hooks/usePlatform';
import { Keys, pressedKey } from '../../lib/accessibility';
import { ActionSheetContext, type ActionSheetContextType } from '../ActionSheet/ActionSheetContext';
import { Tappable } from '../Tappable/Tappable';
import { Subhead } from '../Typography/Subhead/Subhead';
import { Text } from '../Typography/Text/Text';
import { Title } from '../Typography/Title/Title';
import { isRealClickEvent } from './helpers';
import { Radio } from './subcomponents/Radio/Radio';
import styles from './ActionSheetItem.module.css';

export interface ActionSheetItemProps
  extends React.HTMLAttributes<HTMLElement>,
    React.AnchorHTMLAttributes<HTMLElement>,
    Pick<React.InputHTMLAttributes<HTMLInputElement>, 'name' | 'checked' | 'value'> {
  /**
   * Свойство, определяющее внешний вид элемента действия.
   */
  mode?: 'default' | 'destructive' | 'cancel';
  /**
   * Если указано, элемент будет использоваться как ссылка.
   */
  href?: string;
  /**
   * Атрибут `target` для тега `<a>`.
   */
  target?: string;
  /**
   * Иконка или другой React-элемент для отображения перед основным контентом.
   */
  before?: React.ReactNode;
  /**
   * Иконка или другой React-элемент для отображения после основного контента.
   */
  after?: React.ReactNode;
  /**
   * Дополнительная информация, отображаемая рядом с основным контентом.
   */
  meta?: React.ReactNode;
  /**
   * Слот для подсказки или вспомогательного текста.
   */
  subtitle?: React.ReactNode;
  /**
   * По умолчанию нажатие на опцию вызывает переданную в `ActionSheet` функцию `onClose`, данное свойство
   * позволяет отключить такое поведение.
   */
  autoCloseDisabled?: boolean;
  /**
   * Включает возможность выбрать элемент (отображает радиокнопку).
   */
  selectable?: boolean;
  /**
   * Блокировка взаимодействия с компонентом.
   */
  disabled?: boolean;
  /**
   * Все текстовые элементы при необходимости занимают несколько строк.
   */
  multiline?: boolean;
  /**
   * По умолчанию `onClick` будет вызван после завершения анимации скрытия и после вызова `onClose`.
   * Из этого следует, что в объекте события значения полей типа `currentTarget` будут не определены.
   * Если вам нужен объект события именно на момент нажатия, используйте `onImmediateClick`.
   */
  onClick?: React.MouseEventHandler<HTMLElement>;
  /**
   * Обработчик нажатия, вызывающийся непосредственно в момент нажатия (в отличие от `onClick`).
   */
  onImmediateClick?: React.MouseEventHandler<HTMLElement>;
  /**
   * Иконка для `selectable` режима.
   */
  iconChecked?: React.ReactNode;
  /**
   * Позволяет отделить `ActionItem` от `CancelItem` для определении того,
   * кто вызвал закрытие `ActionSheet`. Используется в `ActionSheet.onClose()`.
   */
  isCancelItem?: boolean;
}

/**
 * @see https://vkui.io/components/action-sheet#action-sheet-item
 */
export const ActionSheetItem = ({
  children,
  autoCloseDisabled = false,
  mode = 'default',
  meta,
  subtitle,
  before,
  after,
  selectable,
  value,
  name,
  checked,
  defaultChecked,
  onChange,
  onClick,
  onImmediateClick,
  multiline = false,
  iconChecked,
  isCancelItem,
  ...restProps
}: ActionSheetItemProps): React.ReactNode => {
  const platform = usePlatform();
  const {
    onItemClick = () => noop,
    mode: actionSheetMode,
    onClose: onActionSheetClose,
  } = React.useContext<ActionSheetContextType<HTMLElement>>(ActionSheetContext);
  const { sizeY } = useAdaptivityWithJSMediaQueries();

  const Component: React.ElementType | undefined = selectable ? 'label' : undefined;

  const isRich = subtitle || meta || selectable;
  const isCentered = !isRich && !before && platform === 'ios';

  const onItemClickHandler = React.useCallback(
    (e: React.MouseEvent) => {
      onItemClick({
        action: onClick,
        immediateAction: onImmediateClick,
        autoClose: !autoCloseDisabled,
        isCancelItem: Boolean(isCancelItem),
      })?.(e);
    },
    [autoCloseDisabled, isCancelItem, onClick, onImmediateClick, onItemClick],
  );

  const onKeyDown: React.KeyboardEventHandler<HTMLElement> = React.useCallback(
    (event) => {
      if (pressedKey(event) === Keys.ENTER) {
        onActionSheetClose?.();
      }
    },
    [onActionSheetClose],
  );

  const onItemClickImpl: React.MouseEventHandler<HTMLElement> = React.useCallback(
    (event) => {
      if (selectable) {
        if (isRealClickEvent(event)) {
          onItemClickHandler(event);
        }
      } else {
        onItemClickHandler(event);
      }
    },
    [onItemClickHandler, selectable],
  );

  return (
    <Tappable
      {...(Component && { Component })}
      {...restProps}
      onClick={onItemClickImpl}
      activeMode={platform === 'ios' ? styles.active : undefined}
      baseClassName={classNames(
        styles.host,
        platform === 'ios' && styles.ios,
        mode === 'cancel' && styles.modeCancel,
        mode === 'destructive' && styles.modeDestructive,
        sizeY === 'compact' && styles.sizeYCompact,
        isRich && styles.rich,
        actionSheetMode === 'menu' && styles.menu,
        restProps.disabled && styles.disabled,
      )}
      onKeyDown={onKeyDown}
    >
      {before && <div className={styles.before}>{before}</div>}
      <div className={classNames(styles.container, !multiline && styles.ellipsis)}>
        <div className={classNames(styles.content, isCentered && styles.centered)}>
          {platform === 'ios' ? (
            <Title
              className={styles.children}
              weight={mode === 'cancel' ? '2' : '3'}
              level={isCentered ? '2' : '3'}
            >
              {children}
            </Title>
          ) : (
            <Text className={styles.children}>{children}</Text>
          )}
          {meta && <Text className={styles.meta}>{meta}</Text>}
        </div>
        {subtitle && <Subhead className={styles.subtitle}>{subtitle}</Subhead>}
      </div>
      {(selectable || after) && (
        <div className={styles.after}>
          {after}
          {selectable && (
            <Radio
              name={name}
              value={value}
              onChange={onChange}
              defaultChecked={defaultChecked}
              checked={checked}
              disabled={restProps.disabled}
            >
              {iconChecked}
            </Radio>
          )}
        </div>
      )}
    </Tappable>
  );
};
