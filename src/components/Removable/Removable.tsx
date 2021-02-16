import { AllHTMLAttributes, FC, ReactNode, MouseEvent, useCallback, useEffect, useRef, useState } from 'react';
import { classNames } from '../../lib/classNames';
import { usePlatform } from '../../hooks/usePlatform';
import { getClassName } from '../../helpers/getClassName';
import { withAdaptivity, AdaptivityProps } from '../../hoc/withAdaptivity';
import { useDOM } from '../../lib/dom';
import { ANDROID, IOS, VKCOM } from '../../lib/platform';
import { Icon24Cancel } from '@vkontakte/icons';
import IconButton from '../IconButton/IconButton';

export interface RemovePlaceholderProps {
  /**
   * iOS only. Текст в выезжающей кнопке для удаления ячейки.
   */
  removePlaceholder?: ReactNode;
}

interface RemovableProps extends AllHTMLAttributes<HTMLElement>, RemovePlaceholderProps {
  /**
   * Расположение кнопки удаления.
   */
  align?: 'start' | 'center';
  onRemove?: (e: MouseEvent) => void;
}

export const Removable: FC<RemovableProps> = withAdaptivity((props: RemovableProps & Pick<AdaptivityProps, 'sizeY'>) => {
  const {
    className,
    children,
    sizeY,
    onRemove,
    removePlaceholder,
    align,
    ...restProps
  } = props;
  const platform = usePlatform();
  const { document } = useDOM();

  const removeButtonRef = useRef(null);

  const [isRemoveActivated, setRemoveActivated] = useState(false);
  const [removeOffset, updateRemoveOffset] = useState(0);

  const deactivateRemove = useCallback(() => {
    setRemoveActivated(false);
    updateRemoveOffset(0);

    document.removeEventListener('click', deactivateRemove);
  }, [setRemoveActivated, updateRemoveOffset]);

  const onRemoveActivateClick = (e: MouseEvent) => {
    e.nativeEvent.stopPropagation();
    e.preventDefault();
    setRemoveActivated(true);

    document.addEventListener('click', deactivateRemove);
  };

  const onRemoveClick = (e: MouseEvent) => {
    e.nativeEvent.stopImmediatePropagation();
    e.preventDefault();
    onRemove && onRemove(e);
  };

  useEffect(() => {
    if (isRemoveActivated && removeButtonRef?.current) {
      updateRemoveOffset(removeButtonRef.current.offsetWidth);
    }
  }, [isRemoveActivated]);

  useEffect(() => {
    return () => {
      document.removeEventListener('click', deactivateRemove);
    };
  }, [deactivateRemove]);

  return (
    <div
      {...restProps}
      className={classNames(
        getClassName('Removable', platform),
        `Removable--${align}`,
        `Removable--sizeY-${sizeY}`,
        className,
      )}
    >
      <div className="Removable__content" style={platform === IOS ? { transform: `translateX(-${removeOffset}px)` } : null}>
        {children}

        {(platform === ANDROID || platform === VKCOM) &&
          <IconButton className="Removable__control Removable__remove" onClick={onRemoveClick}>
            <Icon24Cancel />
          </IconButton>
        }
        {platform === IOS && (
          <button className="Removable__control Removable__indicator" onClick={onRemoveActivateClick}>
            <i className="Removable__indicator-in" />
          </button>
        )}
      </div>

      {platform === IOS &&
        <button
          ref={removeButtonRef}
          className="Removable__remove"
          onClick={onRemoveClick}
          style={{ transform: `translateX(-${removeOffset}px)` }}
        >
          <span className="Removable__remove-in">{removePlaceholder}</span>
        </button>
      }
    </div>
  );
}, {
  sizeY: true,
});

Removable.defaultProps = {
  align: 'center',
  removePlaceholder: 'Удалить',
};
