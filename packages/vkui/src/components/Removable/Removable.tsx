'use client';

import * as React from 'react';
import { Icon24Cancel } from '@vkontakte/icons';
import { classNames } from '@vkontakte/vkjs';
import { useConfigDirection } from '../../hooks/useConfigDirection';
import { useGlobalEventListener } from '../../hooks/useGlobalEventListener';
import { usePlatform } from '../../hooks/usePlatform';
import { getTextFromChildren } from '../../lib/children';
import { useDOM } from '../../lib/dom';
import type { CSSCustomProperties, HTMLAttributesWithRootRef } from '../../types';
import { IconButton } from '../IconButton/IconButton';
import { RootComponent } from '../RootComponent/RootComponent';
import { Tappable } from '../Tappable/Tappable';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';
import styles from './Removable.module.css';

export interface RemovableProps {
  /**
   * Текст кнопки удаления ячейки. Визуально скрыт везде, кроме iOS. На iOS появляется в выезжающей кнопке для удаления ячейки.
   */
  removePlaceholder?: React.ReactNode;
  /**
   * Обработчик, срабатывающий при нажатии на контрол удаления.
   */
  onRemove?: (e: React.MouseEvent, rootEl?: HTMLElement | null) => void;
  /**
   * Передает атрибут `data-testid` для кнопки, которая активирует кнопку удаления (iOS only).
   */
  toggleButtonTestId?: string;
  /**
   * Передает атрибут `data-testid` для кнопки удаления.
   */
  removeButtonTestId?: string;
  /**
   * Блокировка взаимодействия с компонентом.
   */
  disabled?: boolean;
}
/* eslint-disable jsdoc/require-jsdoc */
interface RemovableIosOwnProps extends RemovableProps {
  removePlaceholderString?: string;
  children?: React.ReactNode | ((renderProps: RemovableIosRenderProps) => React.ReactNode);
}
/* eslint-enable jsdoc/require-jsdoc */

/**
 * @see https://vkcom.github.io/VKUI/#/RemovableIos
 */
const RemovableIos = ({
  onRemove,
  removePlaceholder,
  removePlaceholderString,
  children: childrenProp,
  toggleButtonTestId,
  removeButtonTestId,
  disabled,
}: RemovableIosOwnProps) => {
  const direction = useConfigDirection();
  const isRtl = direction === 'rtl';
  const { window } = useDOM();

  const removeButtonRef = React.useRef<HTMLElement>(null);
  const disabledRef = React.useRef(true);
  const [removeOffset, updateRemoveOffset] = React.useState(0);

  useGlobalEventListener(
    window,
    'click',
    () => {
      if (removeOffset > 0) {
        updateRemoveOffset(0);
      }
    },
    { capture: true },
  );

  const onRemoveTransitionEnd = () => {
    if (removeOffset > 0) {
      removeButtonRef?.current?.focus();
    } else {
      disabledRef.current = true;
    }
  };

  const onRemoveActivateClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!removeButtonRef.current) {
      return;
    }
    const { offsetWidth } = removeButtonRef.current;
    disabledRef.current = false;
    updateRemoveOffset(offsetWidth);
  };

  const style: CSSCustomProperties = {
    '--vkui_internal_Removable_remove_offset': String(removeOffset ?? 0),
  };

  return (
    <div
      className={classNames(styles.content, isRtl && styles.rtl, 'vkuiInternalRemovable__content')}
      style={style}
      onTransitionEnd={onRemoveTransitionEnd}
    >
      <IconButton
        hasActive={false}
        hasHover={false}
        className={classNames(styles.action, styles.toggle, 'vkuiInternalRemovable__action')}
        onClick={onRemoveActivateClick}
        disabled={removeOffset > 0 || disabled}
        data-testid={toggleButtonTestId}
      >
        <VisuallyHidden>{removePlaceholderString}</VisuallyHidden>
        <i className={styles.toggleIn} role="presentation" />
      </IconButton>
      {typeof childrenProp === 'function'
        ? childrenProp({ isRemoving: removeOffset > 0 })
        : childrenProp}

      <span className={styles.offset} aria-hidden />

      <Tappable
        Component="button"
        hasActive={false}
        hasHover={false}
        disabled={disabledRef.current}
        getRootRef={removeButtonRef}
        className={styles.remove}
        onClick={onRemove}
        data-testid={removeButtonTestId}
      >
        <span className={styles.removeIn}>{removePlaceholder}</span>
      </Tappable>
    </div>
  );
};

interface RemovableIosRenderProps {
  /**
   * Показывает состояние Removable на платформе iOS при нажатии на иконку удаления.
   * Для имитации поведения на iOS при нажатии на иконку удаления самого удаление не происходит,
   * контент сдвигается влево и справа выезжает настоящая кнопка "Удалить".
   * Когда контент сдвинут `isRemoving = true`.
   */
  isRemoving: boolean;
}

interface RemovableOwnProps
  extends Omit<HTMLAttributesWithRootRef<HTMLDivElement>, 'children'>,
    RemovableProps {
  /**
   * Расположение кнопки удаления.
   */
  align?: 'start' | 'center';
  /**
   * Скрывает кнопку, но оставляет отступ.
   * @since 5.4.0
   */
  indent?: boolean;
  /**
   * Убирает базовые отступы для базовой платформы.
   */
  noPadding?: boolean;
  /**
   * Содержимое. Можно передать функцию для отрисовки.
   */
  children?: React.ReactNode | ((renderProps: RemovableIosRenderProps) => React.ReactNode);
}

/**
 * @see https://vkcom.github.io/VKUI/#/Removable
 */
export const Removable = ({
  children,
  onRemove,
  removePlaceholder = 'Удалить',
  align = 'center',
  indent = false,
  toggleButtonTestId,
  removeButtonTestId,
  disabled,
  noPadding,
  ...restProps
}: RemovableOwnProps): React.ReactNode => {
  const platform = usePlatform();

  const onRemoveClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onRemove?.(e);
  };

  const removePlaceholderString: string = getTextFromChildren(removePlaceholder);

  return (
    <RootComponent
      {...restProps}
      baseClassName={classNames(
        platform === 'ios' && styles.ios,
        align === 'start' && styles.alignStart,
        indent && styles.indent,
      )}
    >
      {platform !== 'ios' && (
        <div
          className={classNames(
            styles.content,
            !noPadding && styles.withPadding,
            'vkuiInternalRemovable__content',
          )}
        >
          {typeof children === 'function' ? children({ isRemoving: false }) : children}

          <IconButton
            activeMode="opacity"
            hoverMode="opacity"
            className={classNames(styles.action, 'vkuiInternalRemovable__action')}
            onClick={onRemoveClick}
            label={removePlaceholderString}
            data-testid={removeButtonTestId}
            disabled={disabled}
          >
            <Icon24Cancel role="presentation" />
          </IconButton>

          <span className={styles.offset} aria-hidden />
        </div>
      )}

      {platform === 'ios' && (
        <RemovableIos
          onRemove={onRemoveClick}
          removePlaceholder={removePlaceholder}
          removePlaceholderString={removePlaceholderString}
          toggleButtonTestId={toggleButtonTestId}
          removeButtonTestId={removeButtonTestId}
          disabled={disabled}
        >
          {children}
        </RemovableIos>
      )}
    </RootComponent>
  );
};
