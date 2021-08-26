import { AllHTMLAttributes, FC, ReactNode, MouseEvent, useEffect, useRef, useState, Fragment } from 'react';
import { classNames } from '../../lib/classNames';
import { getTitleFromChildren } from '../../lib/utils';
import { usePlatform } from '../../hooks/usePlatform';
import { getClassName } from '../../helpers/getClassName';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { useDOM } from '../../lib/dom';
import { ANDROID, IOS, VKCOM } from '../../lib/platform';
import { Icon24Cancel } from '@vkontakte/icons';
import IconButton from '../IconButton/IconButton';
import { useGlobalEventListener } from '../../hooks/useGlobalEventListener';
import Tappable from '../Tappable/Tappable';
import './Removable.css';

export interface RemovableProps {
  /**
   * iOS only. Текст в выезжающей кнопке для удаления ячейки.
   */
  removePlaceholder?: ReactNode;
  /**
   * Коллбэк срабатывает при клике на контрол удаления.
   */
  onRemove?: (e: MouseEvent) => void;
}

interface RemovableOwnProps extends AllHTMLAttributes<HTMLElement>, RemovableProps {
  /**
   * Расположение кнопки удаления.
   */
  align?: 'start' | 'center';
}

export const Removable: FC<RemovableOwnProps> = ({
  children,
  onRemove,
  removePlaceholder,
  align,
  ...restProps
}: RemovableOwnProps) => {
  const platform = usePlatform();
  const { sizeY } = useAdaptivity();
  const { document } = useDOM();

  const removeButtonRef = useRef(null);

  const [isRemoveActivated, setRemoveActivated] = useState(false);
  const [removeOffset, updateRemoveOffset] = useState(0);

  useGlobalEventListener(document, 'click', isRemoveActivated && (() => {
    setRemoveActivated(false);
    updateRemoveOffset(0);
  }));

  const onRemoveTransitionEnd = () => {
    if (isRemoveActivated) {
      removeButtonRef?.current?.focus();
    }
  };

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
    const removeButton = removeButtonRef?.current;

    if (isRemoveActivated && removeButton) {
      updateRemoveOffset(removeButton.offsetWidth);
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
        <Fragment>
          <div vkuiClass="Removable__content" style={{ transform: `translateX(-${removeOffset}px)` }}>
            <IconButton
              hasActive={false}
              hasHover={false}
              aria-label={removePlaceholderString}
              vkuiClass="Removable__action Removable__action--indicator"
              onClick={onRemoveActivateClick}
            >
              <i vkuiClass="Removable__action-in" role="presentation" />
            </IconButton>
            {children}

            <span vkuiClass="Removable__offset" aria-hidden="true"></span>
          </div>

          <Tappable
            Component="button"
            hasActive={false}
            hasHover={false}
            disabled={!isRemoveActivated}
            getRootRef={removeButtonRef}
            vkuiClass="Removable__action Removable__action--remove"
            onClick={onRemoveClick}
            onTransitionEnd={onRemoveTransitionEnd}
            style={{ transform: `translateX(-${removeOffset}px)` }}
          >
            <span vkuiClass="Removable__action-in">{removePlaceholder}</span>
          </Tappable>
        </Fragment>
      )}
    </div>
  );
};

Removable.defaultProps = {
  align: 'center',
  removePlaceholder: 'Удалить',
};
