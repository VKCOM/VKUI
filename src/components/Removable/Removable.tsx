import * as React from 'react';
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
  removePlaceholder?: React.ReactNode;
  /**
   * Коллбэк срабатывает при клике на контрол удаления.
   */
  onRemove?: (e: React.MouseEvent, rootEl?: HTMLElement) => void;
}

interface RemovableIosOwnProps extends Pick<RemovableProps, 'removePlaceholder'> {
  onRemoveClick?: (e: React.MouseEvent, rootEl?: HTMLElement) => void;
  removePlaceholderString?: string;
}

const RemovableIos: React.FC<RemovableIosOwnProps> = ({
  onRemoveClick,
  removePlaceholder,
  removePlaceholderString,
  children,
}) => {
  const { document } = useDOM();

  const removeButtonRef = React.useRef(null);
  const [removeOffset, updateRemoveOffset] = React.useState(0);

  useGlobalEventListener(document, 'click', removeOffset > 0 && (() => {
    updateRemoveOffset(0);
  }));

  const onRemoveTransitionEnd = () => {
    if (removeOffset > 0) {
      removeButtonRef?.current?.focus();
    }
  };

  const onRemoveActivateClick = () => {
    const { offsetWidth = 0 } = removeButtonRef?.current;
    updateRemoveOffset(offsetWidth);
  };

  return (
    <div
      vkuiClass="Removable__content"
      style={{ transform: `translateX(-${removeOffset ?? 0}px)` }}
      onTransitionEnd={onRemoveTransitionEnd}
    >
      <IconButton
        hasActive={false}
        hasHover={false}
        aria-label={removePlaceholderString}
        vkuiClass="Removable__action Removable__toggle"
        onClick={onRemoveActivateClick}
        disabled={removeOffset > 0}
      >
        <i vkuiClass="Removable__toggle-in" role="presentation" />
      </IconButton>
      {children}

      <span vkuiClass="Removable__offset" aria-hidden="true"></span>

      <Tappable
        Component="button"
        hasActive={false}
        hasHover={false}
        disabled={removeOffset === 0}
        getRootRef={removeButtonRef}
        vkuiClass="Removable__remove"
        onClick={onRemoveClick}
        onTransitionEnd={onRemoveTransitionEnd}
      >
        <span vkuiClass="Removable__remove-in">{removePlaceholder}</span>
      </Tappable>
    </div>
  );
};

interface RemovableOwnProps extends React.AllHTMLAttributes<HTMLElement>, RemovableProps {
  /**
   * Расположение кнопки удаления.
   */
  align?: 'start' | 'center';
}

export const Removable: React.FC<RemovableOwnProps> = ({
  children,
  onRemove,
  removePlaceholder = 'Удалить',
  align = 'center',
  ...restProps
}: RemovableOwnProps) => {
  const platform = usePlatform();
  const { sizeY } = useAdaptivity();

  const onRemoveClick = (e: React.MouseEvent) => {
    e.preventDefault();

    onRemove && onRemove(e);
  };

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
            activeMode="opacity"
            hoverMode="opacity"
            vkuiClass="Removable__action"
            onClick={onRemoveClick}
            aria-label={removePlaceholderString}
          >
            <Icon24Cancel role="presentation" />
          </IconButton>
        </div>
      )}

      {platform === IOS && (
        <RemovableIos
          onRemoveClick={onRemoveClick}
          removePlaceholder={removePlaceholder}
          removePlaceholderString={removePlaceholderString}
        >
          {children}
        </RemovableIos>
      )}
    </div>
  );
};
