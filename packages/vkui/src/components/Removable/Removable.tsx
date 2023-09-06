import * as React from 'react';
import { Icon24Cancel } from '@vkontakte/icons';
import { classNames, noop } from '@vkontakte/vkjs';
import { useGlobalEventListener } from '../../hooks/useGlobalEventListener';
import { usePlatform } from '../../hooks/usePlatform';
import { useDOM } from '../../lib/dom';
import { Platform } from '../../lib/platform';
import { getTitleFromChildren } from '../../lib/utils';
import { HasChildren, HTMLAttributesWithRootRef } from '../../types';
import { IconButton } from '../IconButton/IconButton';
import { RootComponent } from '../RootComponent/RootComponent';
import { Tappable } from '../Tappable/Tappable';
import styles from './Removable.module.css';

export interface RemovableProps {
  /**
   * iOS only. Текст в выезжающей кнопке для удаления ячейки.
   */
  removePlaceholder?: React.ReactNode;
  /**
   * Коллбэк срабатывает при клике на контрол удаления.
   */
  onRemove?: (e: React.MouseEvent, rootEl?: HTMLElement | null) => void;
}

interface RemovableIosOwnProps extends RemovableProps, HasChildren {
  removePlaceholderString?: string;
}

/**
 * @see https://vkcom.github.io/VKUI/#/RemovableIos
 */
const RemovableIos = ({
  onRemove,
  removePlaceholder,
  removePlaceholderString,
  children: childrenProp,
}: RemovableIosOwnProps) => {
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

  return (
    <div
      className={classNames(styles['Removable__content'], 'vkuiInternalRemovable__content')}
      style={{ transform: `translateX(-${removeOffset ?? 0}px)` }}
      onTransitionEnd={onRemoveTransitionEnd}
    >
      <IconButton
        hasActive={false}
        hasHover={false}
        aria-label={removePlaceholderString}
        className={classNames(
          styles['Removable__action'],
          styles['Removable__toggle'],
          'vkuiInternalRemovable__action',
        )}
        onClick={onRemoveActivateClick}
        disabled={removeOffset > 0}
      >
        <i className={styles['Removable__toggle-in']} role="presentation" />
      </IconButton>
      {typeof childrenProp === 'function'
        ? childrenProp({ isRemoving: removeOffset > 0 })
        : childrenProp}

      <span className={styles['Removable__offset']} aria-hidden />

      <Tappable
        Component="button"
        hasActive={false}
        hasHover={false}
        disabled={disabledRef.current}
        getRootRef={removeButtonRef}
        className={styles['Removable__remove']}
        onClick={onRemove}
      >
        <span className={styles['Removable__remove-in']}>{removePlaceholder}</span>
      </Tappable>
    </div>
  );
};

interface RemovableIosRenderProps {
  /**
   * Показывает состояние Removable на платформе iOS при клике на иконку удаления.
   * Для имитации поведения на iOS при клике на иконку удаления самого удаление не происходит,
   * контент сдвигается влево и справа выезжает настоящая кнопка "Удалить".
   * Когда контент сдвинут `isRemoving = true`.
   */
  isRemoving: boolean;
}

interface RemovableOwnProps extends HTMLAttributesWithRootRef<HTMLDivElement>, RemovableProps {
  /**
   * Расположение кнопки удаления.
   */
  align?: 'start' | 'center';
  /**
   * Скрывает кнопку, но оставляет отступ.
   * @since 5.4.0
   */
  indent?: boolean;
  children?: React.ReactNode | ((renderProps: RemovableIosRenderProps) => React.ReactNode);
}

/**
 * @see https://vkcom.github.io/VKUI/#/Removable
 */
export const Removable = ({
  children,
  onRemove = noop,
  removePlaceholder = 'Удалить',
  align = 'center',
  indent = false,
  ...restProps
}: RemovableOwnProps) => {
  const platform = usePlatform();

  const onRemoveClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onRemove(e);
  };

  const removePlaceholderString: string = getTitleFromChildren(removePlaceholder);

  return (
    <RootComponent
      {...restProps}
      baseClassName={classNames(
        platform === Platform.IOS && styles['Removable--ios'],
        align === 'start' && styles['Removable--align-start'],
        indent && styles['Removable--indent'],
      )}
    >
      {platform !== Platform.IOS && (
        <div className={classNames(styles['Removable__content'], 'vkuiInternalRemovable__content')}>
          {children}

          <IconButton
            activeMode="opacity"
            hoverMode="opacity"
            className={classNames(styles['Removable__action'], 'vkuiInternalRemovable__action')}
            onClick={onRemoveClick}
            aria-label={removePlaceholderString}
          >
            <Icon24Cancel role="presentation" />
          </IconButton>

          <span className={styles['Removable__offset']} aria-hidden />
        </div>
      )}

      {platform === Platform.IOS && (
        <RemovableIos
          onRemove={onRemoveClick}
          removePlaceholder={removePlaceholder}
          removePlaceholderString={removePlaceholderString}
        >
          {children}
        </RemovableIos>
      )}
    </RootComponent>
  );
};
