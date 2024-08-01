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
  mode?: 'default' | 'destructive' | 'cancel';
  before?: React.ReactNode;
  after?: React.ReactNode;
  meta?: React.ReactNode;
  subtitle?: React.ReactNode;
  /**
   * По умолчанию клик на опцию вызывает переданную в `ActionSheet` функцию `onClose`, данное свойство
   * позволяет отключить такое поведение
   */
  autoCloseDisabled?: boolean;
  selectable?: boolean;
  disabled?: boolean;
  /**
   * Все текстовые элементы при необходимости занимают несколько строк
   */
  multiline?: boolean;
  /**
   * По умолчанию onClick будет вызван после завершения анимации скрытия и после вызова onClose.
   * Из этого следует, что в объекте события значения полей типа `currentTarget` будут не определены.
   * Если вам нужен объект события именно на момент клика, используйте `onImmediateClick`.
   */
  onClick?: React.MouseEventHandler<HTMLElement>;
  onImmediateClick?: React.MouseEventHandler<HTMLElement>;
  /**
   * Иконка для `checked` режима.
   */
  iconChecked?: React.ReactNode;
  /**
   * Позволяет отделить ActionItem от CancelItem для определении того,
   * кто вызвал закрытие ActionSheet. Используется в ActionSheet.onClose()
   */
  isCancelItem?: boolean;
}

/**
 * @see https://vkcom.github.io/VKUI/#/ActionSheetItem
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
  className,
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
      activeMode={platform === 'ios' ? styles['ActionSheetItem--active'] : undefined}
      className={classNames(
        styles['ActionSheetItem'],
        platform === 'ios' && styles['ActionSheetItem--ios'],
        mode === 'cancel' && styles['ActionSheetItem--mode-cancel'],
        mode === 'destructive' && styles['ActionSheetItem--mode-destructive'],
        sizeY === 'compact' && styles['ActionSheetItem--sizeY-compact'],
        isRich && styles['ActionSheetItem--rich'],
        actionSheetMode === 'menu' && styles['ActionSheetItem--menu'],
        selectable && styles['ActionSheetItem--selectable'],
        className,
      )}
      onKeyDown={onKeyDown}
    >
      {before && <div className={styles['ActionSheetItem__before']}>{before}</div>}
      <div
        className={classNames(
          styles['ActionSheetItem__container'],
          !multiline && styles['ActionSheetItem--ellipsis'],
        )}
      >
        <div
          className={classNames(
            styles['ActionSheetItem__content'],
            isCentered && styles['ActionSheetItem--centered'],
          )}
        >
          {platform === 'ios' ? (
            <Title
              className={styles['ActionSheetItem__children']}
              weight={mode === 'cancel' ? '2' : '3'}
              level={isCentered ? '2' : '3'}
            >
              {children}
            </Title>
          ) : (
            <Text className={styles['ActionSheetItem__children']}>{children}</Text>
          )}
          {meta && <Text className={styles['ActionSheetItem__meta']}>{meta}</Text>}
        </div>
        {subtitle && <Subhead className={styles['ActionSheetItem__subtitle']}>{subtitle}</Subhead>}
      </div>
      {(selectable || after) && (
        <div className={styles['ActionSheetItem__after']}>
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
