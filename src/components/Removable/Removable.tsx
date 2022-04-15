import * as React from "react";
import { HasRootRef } from "../../types";
import { classNames } from "../../lib/classNames";
import { getTitleFromChildren, noop } from "../../lib/utils";
import { useExternRef } from "../../hooks/useExternRef";
import { usePlatform } from "../../hooks/usePlatform";
import { getClassName } from "../../helpers/getClassName";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import { useDOM } from "../../lib/dom";
import { ANDROID, IOS, VKCOM } from "../../lib/platform";
import { Icon24Cancel } from "@vkontakte/icons";
import IconButton from "../IconButton/IconButton";
import { useGlobalEventListener } from "../../hooks/useGlobalEventListener";
import Tappable from "../Tappable/Tappable";
import "./Removable.css";

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

interface RemovableIosOwnProps extends RemovableProps {
  removePlaceholderString?: string;
}

const RemovableIos: React.FC<RemovableIosOwnProps> = ({
  onRemove,
  removePlaceholder,
  removePlaceholderString,
  children,
}) => {
  const { window } = useDOM();

  const removeButtonRef = React.useRef<HTMLElement>(null);
  const disabledRef = React.useRef(true);
  const [removeOffset, updateRemoveOffset] = React.useState(0);

  useGlobalEventListener(
    window,
    "click",
    () => {
      if (removeOffset > 0) {
        updateRemoveOffset(0);
      }
    },
    { capture: true }
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
        disabled={disabledRef.current}
        getRootRef={removeButtonRef}
        vkuiClass="Removable__remove"
        onClick={onRemove}
      >
        <span vkuiClass="Removable__remove-in">{removePlaceholder}</span>
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
  align?: "start" | "center";
}

export const Removable: React.FC<RemovableOwnProps> = ({
  getRootRef,
  children,
  onRemove = noop,
  removePlaceholder = "Удалить",
  align = "center",
  ...restProps
}: RemovableOwnProps) => {
  const platform = usePlatform();
  const { sizeY } = useAdaptivity();

  const ref = useExternRef(getRootRef);

  const onRemoveClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onRemove(e);
  };

  const removePlaceholderString: string =
    getTitleFromChildren(removePlaceholder);

  return (
    <div
      {...restProps}
      ref={ref}
      vkuiClass={classNames(
        getClassName("Removable", platform),
        `Removable--${align}`,
        `Removable--sizeY-${sizeY}`
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
