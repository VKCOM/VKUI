import React, { AllHTMLAttributes, FC, ReactNode, MouseEvent, useEffect, useRef, useState } from 'react';
import { classNames } from '../../lib/classNames';
import { getTitleFromChildren } from '../../lib/utils';
import { usePlatform } from '../../hooks/usePlatform';
import { getClassName } from '../../helpers/getClassName';
import { withAdaptivity, AdaptivityProps } from '../../hoc/withAdaptivity';
import { useDOM } from '../../lib/dom';
import { ANDROID, IOS, VKCOM } from '../../lib/platform';
import { Icon24Cancel } from '@vkontakte/icons';
import IconButton from '../IconButton/IconButton';
import { useGlobalEventListener } from '../../hooks/useGlobalEventListener';

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

  useGlobalEventListener(document, 'click', isRemoveActivated && (() => {
    setRemoveActivated(false);
    updateRemoveOffset(0);
  }));

  const onRemoveActivateClick = (e: MouseEvent) => {
    e.nativeEvent.stopPropagation();
    e.preventDefault();
    setRemoveActivated(true);
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

  const removePlaceholderString: string = getTitleFromChildren(removePlaceholder);

  return (
    <div
      {...restProps}
      vkuiClass={classNames(
        getClassName('Removable', platform),
        `Removable--${align}`,
        `Removable--sizeY-${sizeY}`,
      )}
    >
      {(platform === ANDROID || platform === VKCOM) && (
        <div vkuiClass="Removable__content">
          {children}

          <IconButton
            aria-label={removePlaceholderString}
            vkuiClass="Removable__action Removable__action--remove"
            onClick={onRemoveClick}
          >
            <Icon24Cancel />
          </IconButton>
        </div>
      )}

      {platform === IOS && (
        <React.Fragment>
          <div vkuiClass="Removable__content" style={{ transform: `translateX(-${removeOffset}px)` }}>
            <button
              type="button"
              aria-label={removePlaceholderString}
              vkuiClass="Removable__action Removable__action--indicator"
              onClick={onRemoveActivateClick}
            >
              <i vkuiClass="Removable__action-in" role="presentation" />
            </button>

            {children}

            <span vkuiClass="Removable__offset" aria-hidden="true"></span>
          </div>

          <button
            type="button"
            tabIndex={isRemoveActivated ? null : -1}
            ref={removeButtonRef}
            vkuiClass="Removable__action Removable__action--remove"
            onClick={onRemoveClick}
            style={{ transform: `translateX(-${removeOffset}px)` }}
          >
            <span vkuiClass="Removable__action-in">{removePlaceholder}</span>
          </button>
        </React.Fragment>
      )}
    </div>
  );
}, {
  sizeY: true,
});

Removable.defaultProps = {
  align: 'center',
  removePlaceholder: 'Удалить',
};
