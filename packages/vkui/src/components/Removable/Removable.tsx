'use client';

import * as React from 'react';
import { Icon24Cancel } from '@vkontakte/icons';
import { classNames } from '@vkontakte/vkjs';
import { usePlatform } from '../../hooks/usePlatform';
import { getTextFromChildren } from '../../lib/children';
import type { HTMLAttributesWithRootRef } from '../../types';
import { IconButton } from '../IconButton/IconButton';
import { RootComponent } from '../RootComponent/RootComponent';
import { RemovableIos } from './RemovableIos';
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
interface RemovableCommonOwnProps
  extends Pick<
    RemovableOwnProps,
    'noPadding' | 'children' | 'removeButtonTestId' | 'disabled' | 'indent'
  > {
  removePlaceholderString?: string;
  onRemoveClick: (e: React.MouseEvent) => void;
}
/* eslint-enable jsdoc/require-jsdoc */

const RemovableCommon = ({
  noPadding,
  children,
  removePlaceholderString,
  onRemoveClick,
  removeButtonTestId,
  disabled,
  indent,
}: RemovableCommonOwnProps) => {
  return (
    <div
      className={classNames(
        styles.content,
        !noPadding && styles.withPadding,
        'vkuiInternalRemovable__content',
      )}
    >
      {typeof children === 'function' ? children({ isRemoving: false }) : children}

      {indent ? (
        <div className={classNames(styles.action, styles.indentation)} />
      ) : (
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
      )}
      <span className={styles.offset} aria-hidden />
    </div>
  );
};

export interface RemovableIosRenderProps {
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
      {platform === 'ios' ? (
        <RemovableIos
          onRemove={onRemoveClick}
          removePlaceholder={removePlaceholder}
          removePlaceholderString={removePlaceholderString}
          toggleButtonTestId={toggleButtonTestId}
          removeButtonTestId={removeButtonTestId}
          disabled={disabled}
          indent={indent}
        >
          {children}
        </RemovableIos>
      ) : (
        <RemovableCommon
          onRemoveClick={onRemoveClick}
          noPadding={noPadding}
          removeButtonTestId={removeButtonTestId}
          removePlaceholderString={removePlaceholderString}
          disabled={disabled}
          indent={indent}
        >
          {children}
        </RemovableCommon>
      )}
    </RootComponent>
  );
};
