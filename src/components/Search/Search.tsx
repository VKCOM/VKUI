import * as React from "react";
import { classNames } from "../../lib/classNames";
import { withPlatform } from "../../hoc/withPlatform";
import {
  Icon16SearchOutline,
  Icon16Clear,
  Icon24Cancel,
} from "@vkontakte/icons";
import { Platform } from "../../lib/platform";
import { HasPlatform, HasRef } from "../../types";
import { Touch, TouchEvent } from "../Touch/Touch";
import { VKUITouchEvent } from "../../lib/touch";
import { noop } from "../../lib/utils";
import { Title } from "../Typography/Title/Title";
import { Headline } from "../Typography/Headline/Headline";
import { useExternRef } from "../../hooks/useExternRef";
import { useEnsuredControl } from "../../hooks/useEnsuredControl";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import { getSizeYClassName } from "../../helpers/getSizeYClassName";
import "./Search.css";

export type InputRef = (element: HTMLInputElement) => void;

interface SearchPlaceholderTypographyProps
  extends HasPlatform,
    React.HTMLAttributes<HTMLElement> {}

const SearchPlaceholderTypography = ({
  platform,
  children,
  ...restProps
}: SearchPlaceholderTypographyProps) => {
  switch (platform) {
    case Platform.IOS:
      return (
        <Title {...restProps} level="3" weight="3">
          {children}
        </Title>
      );
    default:
      return (
        <Headline {...restProps} weight="3">
          {children}
        </Headline>
      );
  }
};

export interface SearchProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    HasRef<HTMLInputElement>,
    HasPlatform {
  /**
   * iOS only. Текст кнопки "отмена", которая чистит текстовое поле и убирает фокус.
   */
  after?: React.ReactNode;
  before?: React.ReactNode;
  icon?: React.ReactNode;
  onIconClick?: (e: VKUITouchEvent) => void;
  defaultValue?: string;
}

/**
 * @see https://vkcom.github.io/VKUI/#/Search
 */
const SearchComponent = ({
  before = <Icon16SearchOutline aria-hidden />,
  className,
  defaultValue = "",
  placeholder = "Поиск",
  after = "Отмена",
  getRef,
  platform,
  icon,
  onIconClick = noop,
  style,
  autoComplete = "off",
  ...inputProps
}: SearchProps) => {
  const inputRef = useExternRef(getRef);
  const [isFocused, setFocused] = React.useState(false);
  const [value, onChange] = useEnsuredControl(inputProps, { defaultValue });
  const { sizeY } = useAdaptivity();

  const onFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocused(true);
    inputProps.onFocus && inputProps.onFocus(e);
  };

  const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocused(false);
    inputProps.onBlur && inputProps.onBlur(e);
  };

  const onCancel = React.useCallback(() => {
    // eslint-disable-next-line @typescript-eslint/unbound-method
    const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
      HTMLInputElement.prototype,
      "value"
    )?.set;
    nativeInputValueSetter?.call(inputRef.current, "");

    const ev2 = new Event("input", { bubbles: true });
    inputRef.current?.dispatchEvent(ev2);
  }, [inputRef]);

  const onIconClickStart = React.useCallback(
    (e: TouchEvent) => onIconClick(e.originalEvent),
    [onIconClick]
  );

  const onIconCancelClickStart = React.useCallback(
    (e: TouchEvent) => {
      e.originalEvent.preventDefault();
      inputRef.current?.focus();
      onCancel();
    },
    [inputRef, onCancel]
  );

  return (
    <div
      vkuiClass={classNames(
        "Search",
        platform === Platform.IOS && "Search--ios",
        getSizeYClassName("Search", sizeY),
        isFocused && "Search--focused",
        value && "Search--has-value",
        icon && "Search--has-after",
        after && "Search--has-icon"
      )}
      className={className}
      style={style}
    >
      <div vkuiClass="Search__in">
        <div vkuiClass="Search__width" />
        <label vkuiClass="Search__control">
          <input
            type="search"
            {...inputProps}
            autoComplete={autoComplete}
            ref={inputRef}
            vkuiClass="Search__input"
            onFocus={onFocus}
            onBlur={onBlur}
            onChange={onChange}
            value={value}
          />
          {platform === Platform.IOS && after && (
            <div vkuiClass="Search__after-width">{after}</div>
          )}
          <div vkuiClass="Search__placeholder">
            <div vkuiClass="Search__placeholder-in">
              {before}
              <SearchPlaceholderTypography
                vkuiClass="Search__placeholder-text"
                platform={platform}
              >
                {placeholder}
              </SearchPlaceholderTypography>
            </div>
            {isFocused && platform === Platform.IOS && after && (
              <div vkuiClass="Search__after-width">{after}</div>
            )}
          </div>
        </label>
        <div vkuiClass="Search__after" onClick={onCancel}>
          <div vkuiClass="Search__icons">
            {icon && (
              <Touch onStart={onIconClickStart} vkuiClass="Search__icon">
                {icon}
              </Touch>
            )}
            {!!value && (
              <Touch onStart={onIconCancelClickStart} vkuiClass="Search__icon">
                {platform === Platform.IOS ? <Icon16Clear /> : <Icon24Cancel />}
              </Touch>
            )}
          </div>
          {platform === Platform.IOS && after && (
            <div vkuiClass="Search__after-in">{after}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export const Search = withPlatform(SearchComponent);

Search.displayName = "Search";
