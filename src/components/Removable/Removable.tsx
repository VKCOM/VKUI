import React, { AllHTMLAttributes, FC, ReactNode, MouseEvent, useState, useEffect, useRef } from 'react';
import { classNames } from '../../lib/classNames';
import usePlatform from '../../hooks/usePlatform';
import { getClassName } from '../../helpers/getClassName';
import withAdaptivity, { AdaptivityProps } from '../../hoc/withAdaptivity';
import { useDOM } from '../../lib/dom';
import { ANDROID, IOS, VKCOM } from '../../lib/platform';
import { Icon24Cancel } from '@vkontakte/icons';
import IconButton from '../IconButton/IconButton';

export interface RemovableProps extends AllHTMLAttributes<HTMLElement> {
  /**
   * Коллбэк срабатывает при клике на контрол удаления.
   */
  onRemove?(e: MouseEvent): void;
  /**
   * iOS only. Текст в выезжаеющей кнопке для удаления ячейки.
   */
  removePlaceholder?: ReactNode;
}

export const Removable: FC<RemovableProps & AdaptivityProps> = withAdaptivity((props: RemovableProps & AdaptivityProps) => {
  const {
    className,
    children,
    sizeY,
    onRemove,
    removePlaceholder,
    ...restProps
  } = props;
  const platform = usePlatform();
  const { document } = useDOM();

  const removeButtonRef = useRef(null);

  const [isRemoveActivated, setRemoveActivated] = useState(false);
  const [removeOffset, updateRemoveOffset] = useState(0);

  const deactivateRemove = () => {
    setRemoveActivated(false);
    updateRemoveOffset(0);
    document.removeEventListener('click', deactivateRemove);
  };

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
  }, []);

  return (
    <div
      {...restProps}
      className={classNames(
        getClassName('Removable', platform),
        `Removable--sizeY-${sizeY}`,
        className,
      )}
    >
      <div className="Removable__content" style={platform === IOS ? { transform: `translateX(-${removeOffset}px)` } : null}>
        {platform === IOS && <button className="Removable__remove-marker" onClick={onRemoveActivateClick} />}

        <div className="Removable__children">
          {children}
        </div>

        {(platform === ANDROID || platform === VKCOM) &&
          <IconButton className="Removable__remove" onClick={onRemoveClick}>
            <Icon24Cancel />
          </IconButton>
        }
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
  removePlaceholder: 'Удалить',
};
