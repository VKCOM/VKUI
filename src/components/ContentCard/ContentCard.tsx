import * as React from "react";
import { Card, CardProps } from "../Card/Card";
import { Caption } from "../Typography/Caption/Caption";
import Title from "../Typography/Title/Title";
import Text from "../Typography/Text/Text";
import Tappable, { TappableProps } from "../Tappable/Tappable";
import { getClassName } from "../../helpers/getClassName";
import { usePlatform } from "../../hooks/usePlatform";
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
const ContentCard: React.FC<ContentCardProps> = (props: ContentCardProps) => {
  const {
    subtitle,
    header,
    text,
    caption,
    // card props
    className,
    mode,
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
  } = props;
  const platform = usePlatform();

  const source = image || src;

  if (image && process.env.NODE_ENV === "development") {
    warn("Свойство image устарело и будет удалено в 5.0.0. Используйте src");
  }

  return (
    <Card
      mode={mode}
      getRootRef={getRootRef}
      vkuiClass={classNames(getClassName("ContentCard", platform), {
        "ContentCard--disabled": restProps.disabled,
      })}
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
            <Caption caps vkuiClass="ContentCard__text" weight="1" level="3">
              {subtitle}
            </Caption>
          )}
          {hasReactNode(header) && (
            <Title vkuiClass="ContentCard__text" weight="3" level="1">
              {header}
            </Title>
          )}
          {hasReactNode(text) && (
            <Text vkuiClass="ContentCard__text" weight="regular">
              {text}
            </Text>
          )}
          {hasReactNode(caption) && (
            <Caption vkuiClass="ContentCard__text">{caption}</Caption>
          )}
        </div>
      </Tappable>
    </Card>
  );
};

ContentCard.defaultProps = {
  mode: "shadow",
};

// eslint-disable-next-line import/no-default-export
export default ContentCard;
