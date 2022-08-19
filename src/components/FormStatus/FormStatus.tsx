import * as React from "react";
import { classNames } from "../../lib/classNames";
import { Headline } from "../Typography/Headline/Headline";
import { Caption } from "../Typography/Caption/Caption";
import { hasReactNode } from "../../lib/utils";
import "./FormStatus.css";

export interface FormStatusProps extends React.HTMLAttributes<HTMLDivElement> {
  mode?: "default" | "error";
  header?: React.ReactNode;
}

/* TODO: v5.0.0 удалить */

/**
 * @deprecated Этот компонент устарел и будет удален в v5.0.0. Используйте [`Banner`](#/Banner).
 * @see https://vkcom.github.io/VKUI/#/FormStatus
 */
export const FormStatus = ({
  mode,
  header,
  children,
  dangerouslySetInnerHTML,
  ...restProps
}: FormStatusProps) => {
  return (
    <div
      {...restProps}
      vkuiClass={classNames("FormStatus", `FormStatus--${mode}`)}
    >
      {hasReactNode(header) && (
        <Headline weight="2" vkuiClass="FormStatus__header">
          {header}
        </Headline>
      )}
      {dangerouslySetInnerHTML && (
        <Caption dangerouslySetInnerHTML={dangerouslySetInnerHTML} />
      )}
      {hasReactNode(children) && !dangerouslySetInnerHTML && (
        <Caption>{children}</Caption>
      )}
    </div>
  );
};
