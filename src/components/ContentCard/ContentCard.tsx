import * as React from "react";
import { Card, CardProps } from "../Card/Card";
import { Caption } from "../Typography/Caption/Caption";
import { Headline } from "../Typography/Headline/Headline";
import { Text } from "../Typography/Text/Text";
import { TappableProps, Tappable } from "../Tappable/Tappable";
import { hasReactNode } from "../../lib/utils";
import { warnOnce } from "../../lib/warnOnce";
import { HasRef, HasRootRef } from "../../types";
import { classNames } from "../../lib/classNames";
import "./ContentCard.css";

export interface ContentCardProps
  extends HasRootRef<HTMLDivElement>,
    Omit<TappableProps, "getRootRef" | "crossOrigin">,
    Omit<
      React.ImgHTMLAttributes<HTMLImageElement>,
      keyof React.HTMLAttributes<HTMLImageElement>
    >,
    HasRef<HTMLImageElement> {
  /**
   Текст над заголовком
   */
  subtitle?: React.ReactNode;
  /**
   Заголовок
   */
  header?: React.ReactNode;
  /**
   Текст
   */
  text?: React.ReactNode;
  /**
   Нижний текст
   */
  caption?: React.ReactNode;
  /**
    @deprecated будет удалено в 5.0.0. Используйте src
   */
  image?: string;
  /**
    Максимальная высота изображения
   */
  maxHeight?: number;
  mode?: CardProps["mode"];
}

const warn = warnOnce("ContentCard");

/**
 * @see https://vkcom.github.io/VKUI/#/ContentCard
 */
export const ContentCard = ({
  subtitle,
  header,
  text,
  caption,
  // card props
  className,
  mode = "shadow",
  style,
  getRootRef,
  // img props
  getRef,
  maxHeight,
  image,
  src,
  srcSet,
  alt,
  width,
  height,
  crossOrigin,
  decoding,
  loading,
  referrerPolicy,
  sizes,
  useMap,
  ...restProps
}: ContentCardProps) => {
  const source = image || src;

  if (image && process.env.NODE_ENV === "development") {
    warn("Свойство image устарело и будет удалено в 5.0.0. Используйте src");
  }

  return (
    <Card
      mode={mode}
      getRootRef={getRootRef}
      vkuiClass={classNames(
        "ContentCard",
        restProps.disabled && "ContentCard--disabled"
      )}
      style={style}
      className={className}
    >
      <Tappable
        {...restProps}
        disabled={restProps.disabled || (!restProps.onClick && !restProps.href)}
        hasHover={false}
        hasActive={false}
        vkuiClass="ContentCard__tappable"
      >
        {(source || srcSet) && (
          <img
            ref={getRef}
            vkuiClass="ContentCard__img"
            src={source}
            srcSet={srcSet}
            alt={alt}
            crossOrigin={crossOrigin}
            decoding={decoding}
            loading={loading}
            referrerPolicy={referrerPolicy}
            sizes={sizes}
            useMap={useMap}
            height={height}
            style={{ maxHeight }}
            width="100%"
          />
        )}
        <div vkuiClass="ContentCard__body">
          {hasReactNode(subtitle) && (
            <Caption
              vkuiClass="ContentCard__text ContentCard__subtitle"
              weight="1"
              level="3"
              caps
            >
              {subtitle}
            </Caption>
          )}
          {hasReactNode(header) && (
            <Headline vkuiClass="ContentCard__text" weight="2" level="1">
              {header}
            </Headline>
          )}
          {hasReactNode(text) && (
            <Text vkuiClass="ContentCard__text">{text}</Text>
          )}
          {hasReactNode(caption) && (
            <Caption vkuiClass="ContentCard__text ContentCard__caption">
              {caption}
            </Caption>
          )}
        </div>
      </Tappable>
    </Card>
  );
};
