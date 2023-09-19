import * as React from 'react';
import { classNames, noop } from '@vkontakte/vkjs';
import { useAdaptivityWithJSMediaQueries } from '../../hooks/useAdaptivityWithJSMediaQueries';
import { usePlatform } from '../../hooks/usePlatform';
import { SizeType } from '../../lib/adaptivity';
import { Platform } from '../../lib/platform';
import { ActionSheetContext, type ActionSheetContextType } from '../ActionSheet/ActionSheetContext';
import { Tappable } from '../Tappable/Tappable';
import { Subhead } from '../Typography/Subhead/Subhead';
import { Text } from '../Typography/Text/Text';
import { Title } from '../Typography/Title/Title';
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
  autoClose?: boolean;
  selectable?: boolean;
  disabled?: boolean;
  /**
   * Все текстовые элементы при необходимости занимают несколько строк
   */
  multiline?: boolean;
  /**
   * Если autoClose === true, onClick будет вызван после завершения анимации скрытия и после вызова onClose.
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
  autoClose,
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
}: ActionSheetItemProps) => {
  const platform = usePlatform();
  const { onItemClick = () => noop, mode: actionSheetMode } =
    React.useContext<ActionSheetContextType<HTMLElement>>(ActionSheetContext);
  const { sizeY } = useAdaptivityWithJSMediaQueries();

  let Component: React.ElementType = restProps.href ? 'a' : 'div';

  if (selectable) {
    Component = 'label';
  }

  const isRich = subtitle || meta || selectable;
  const isCentered = !isRich && !before && platform === Platform.IOS;

  return (
    <Tappable
      Component={Component}
      {...restProps}
      onClick={
        selectable
          ? onClick
          : onItemClick({
              action: onClick,
              immediateAction: onImmediateClick,
              autoClose: Boolean(autoClose),
              isCancelItem: Boolean(isCancelItem),
            })
      }
      activeMode={platform === Platform.IOS ? styles['ActionSheetItem--active'] : undefined}
      className={classNames(
        styles['ActionSheetItem'],
        platform === Platform.IOS && styles['ActionSheetItem--ios'],
        mode === 'cancel' && styles['ActionSheetItem--mode-cancel'],
        mode === 'destructive' && styles['ActionSheetItem--mode-destructive'],
        sizeY === SizeType.COMPACT && styles['ActionSheetItem--sizeY-compact'],
        isRich && styles['ActionSheetItem--rich'],
        actionSheetMode === 'menu' && styles['ActionSheetItem--menu'],
        selectable && styles['ActionSheetItem--selectable'],
        className,
      )}
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
          {platform === Platform.IOS ? (
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
              onClick={onItemClick({
                action: noop,
                immediateAction: noop,
                autoClose: Boolean(autoClose),
                isCancelItem: Boolean(isCancelItem),
              })}
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
