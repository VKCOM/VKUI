import * as React from "react";
import { classNamesString } from "../../lib/classNames";
import { hasReactNode } from "../../lib/utils";
import { Title } from "../Typography/Title/Title";
import { Headline } from "../Typography/Headline/Headline";
import { HasRootRef } from "../../types";
import styles from "./Placeholder.module.css";

export interface PlaceholderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    HasRootRef<HTMLDivElement> {
  /**
   * Иконка
   */
  icon?: React.ReactNode;
  /**
   * Заголовок плейсхолдера
   */
  header?: React.ReactNode;
  /**
   * Кнопка действия
   */
  action?: React.ReactNode;
  /**
   * Растягивает плейсхолдер на весь экран, но в таком случае на экране должен быть только плейсхолдер
   */
  stretched?: boolean;
}

/**
 * @see https://vkcom.github.io/VKUI/#/Placeholder
 */
export const Placeholder = ({
  icon,
  header,
  action,
  children,
  stretched,
  getRootRef,
  className,
  ...restProps
}: PlaceholderProps) => (
  <div
    {...restProps}
    ref={getRootRef}
    className={classNamesString(
      styles["Placeholder"],
      stretched && styles["Placeholder--stretched"],
      className
    )}
  >
    <div className={styles["Placeholder__in"]}>
      {hasReactNode(icon) && (
        <div className={styles["Placeholder__icon"]}>{icon}</div>
      )}
      {hasReactNode(header) && (
        <Title level="2" weight="2" className={styles["Placeholder__header"]}>
          {header}
        </Title>
      )}
      {hasReactNode(children) && (
        <Headline weight="3" className={styles["Placeholder__text"]}>
          {children}
        </Headline>
      )}
      {hasReactNode(action) && (
        <div className={styles["Placeholder__action"]}>{action}</div>
      )}
    </div>
  </div>
);
