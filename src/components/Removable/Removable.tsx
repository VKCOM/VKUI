import * as React from 'react';
import { HasRootRef } from '../../types';
import { classNamesString } from '../../lib/classNames';
import { getTitleFromChildren, noop } from '../../lib/utils';
import { useExternRef } from '../../hooks/useExternRef';
import { usePlatform } from '../../hooks/usePlatform';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { useDOM } from '../../lib/dom';
import { Platform } from '../../lib/platform';
import { Icon24Cancel } from '@vkontakte/icons';
import { IconButton } from '../IconButton/IconButton';
import { useGlobalEventListener } from '../../hooks/useGlobalEventListener';
import { Tappable } from '../Tappable/Tappable';
import { getSizeYClassName } from '../../helpers/getSizeYClassName';
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

interface RemovableIosOwnProps extends RemovableProps {
  removePlaceholderString?: string;
  children?: React.ReactNode;
}

/**
 * @see https://vkcom.github.io/VKUI/#/RemovableIos
 */
const RemovableIos = ({
  onRemove,
  removePlaceholder,
  removePlaceholderString,
  children,
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
      className={styles['Removable__content']}
      style={{ transform: `translateX(-${removeOffset ?? 0}px)` }}
      onTransitionEnd={onRemoveTransitionEnd}
    >
      <IconButton
        hasActive={false}
        hasHover={false}
        aria-label={removePlaceholderString}
        className={classNamesString(styles['Removable__action'], styles['Removable__toggle'])}
        onClick={onRemoveActivateClick}
        disabled={removeOffset > 0}
      >
        <i className={styles['Removable__toggle-in']} role="presentation" />
      </IconButton>
      {children}

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

interface RemovableOwnProps
  extends React.AllHTMLAttributes<HTMLElement>,
    RemovableProps,
    HasRootRef<HTMLDivElement> {
  /**
   * Расположение кнопки удаления.
   */
  align?: 'start' | 'center';
}

/**
 * @see https://vkcom.github.io/VKUI/#/Removable
 */
export const Removable = ({
  getRootRef,
  children,
  onRemove = noop,
  removePlaceholder = 'Удалить',
  align = 'center',
  className,
  ...restProps
}: RemovableOwnProps) => {
  const platform = usePlatform();
  const { sizeY } = useAdaptivity();

  const ref = useExternRef(getRootRef);

  const onRemoveClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onRemove(e);
  };

  const removePlaceholderString: string = getTitleFromChildren(removePlaceholder);

  return (
    <div
      {...restProps}
      ref={ref}
      className={classNamesString(
        styles['Removable'],
        platform === Platform.IOS && styles['Removable--ios'],
        styles[`Removable--align-${align}`],
        getSizeYClassName(styles['Removable'], sizeY),
        className,
      )}
    >
      {platform !== Platform.IOS && (
        <div className={styles['Removable__content']}>
          {children}

          <IconButton
            activeMode="opacity"
            hoverMode="opacity"
            className={styles['Removable__action']}
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
    </div>
  );
};
