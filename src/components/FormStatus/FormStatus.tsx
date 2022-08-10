import * as React from "react";
import { classNames } from "../../lib/classNames";
import { getClassName } from "../../helpers/getClassName";
import { usePlatform } from "../../hooks/usePlatform";
import { Headline } from "../Typography/Headline/Headline";
import { Footnote } from "../Typography/Footnote/Footnote";
import { hasReactNode } from "../../lib/utils";
import "./FormStatus.css";

export interface FormStatusProps extends React.HTMLAttributes<HTMLDivElement> {
  mode?: "default" | "error";
  header?: React.ReactNode;
}

/**
 * @see https://vkcom.github.io/VKUI/#/FormStatus
 */
export const FormStatus = ({
  mode,
  header,
  children,
  dangerouslySetInnerHTML,
  ...restProps
}: FormStatusProps) => {
  const platform = usePlatform();

  return (
    <div
      {...restProps}
      vkuiClass={classNames(
        getClassName("FormStatus", platform),
        `FormStatus--${mode}`
      )}
    >
      {hasReactNode(header) && (
        <Headline weight="2" vkuiClass="FormStatus__header">
          {header}
        </Headline>
      )}
      {dangerouslySetInnerHTML && (
        <Footnote dangerouslySetInnerHTML={dangerouslySetInnerHTML} />
      )}
      {hasReactNode(children) && !dangerouslySetInnerHTML && (
        <Footnote>{children}</Footnote>
      )}
    </div>
  );
};
