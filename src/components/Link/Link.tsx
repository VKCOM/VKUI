import { classNames } from "../../lib/classNames";
import { TappableProps, Tappable } from "../Tappable/Tappable";
import "./Link.css";

export interface LinkProps extends TappableProps {
  /**
   * Включает состояние `visited`, которое позволяет пользователю понять посещал ли он ссылку или нет
   */
  hasVisited?: boolean;
}

/**
 * @see https://vkcom.github.io/VKUI/#/Link
 */
export const Link = ({ hasVisited, children, ...restProps }: LinkProps) => {
  return (
    <Tappable
      Component={restProps.href ? "a" : "button"}
      {...restProps}
      vkuiClass={classNames("Link", hasVisited && "Link--has-visited")}
      hasHover={false}
      activeMode="opacity"
      focusVisibleMode="Link--focus-visible"
    >
      {children}
    </Tappable>
  );
};
