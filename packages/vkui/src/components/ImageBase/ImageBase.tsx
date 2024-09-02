import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useExternRef } from '../../hooks/useExternRef';
import { minOr } from '../../lib/comparing';
import { getFetchPriorityProp } from '../../lib/utils';
import type { AnchorHTMLAttributesOnly, HasRef, HasRootRef, LiteralUnion } from '../../types';
import { Clickable } from '../Clickable/Clickable';
import { ImageBaseBadge, type ImageBaseBadgeProps } from './ImageBaseBadge/ImageBaseBadge';
import { ImageBaseOverlay, type ImageBaseOverlayProps } from './ImageBaseOverlay/ImageBaseOverlay';
import { ImageBaseContext } from './context';
import type { ImageBaseContextProps, ImageBaseExpectedIconProps, ImageBaseSize } from './types';
import { validateFallbackIcon, validateSize } from './validators';
import styles from './ImageBase.module.css';

export type {
  ImageBaseSize,
  ImageBaseExpectedIconProps,
  ImageBaseBadgeProps,
  ImageBaseOverlayProps,
  ImageBaseContextProps,
};

export {
  getBadgeIconSizeByImageBaseSize,
  getFallbackIconSizeByImageBaseSize,
  getOverlayIconSizeByImageBaseSize,
} from './helpers';

export { ImageBaseContext };

/**
 * Размер по умолчанию.
 */
const defaultSize = 24;

export interface ImageBaseProps
  extends React.ImgHTMLAttributes<HTMLElement>,
    AnchorHTMLAttributesOnly,
    HasRootRef<HTMLDivElement>,
    HasRef<HTMLImageElement> {
  /**
   * Задаёт размер картинки.
   *
   * Используйте размеры заданные дизайн-системой `16 | 20 | 24 | 28 | 32 | 36 | 40 | 44 | 48 | 56 | 64 | 72 | 80 | 88 | 96`.
   *
   * > ⚠️ Использование кастомного размера – это пограничный кейс.
   */
  size?: LiteralUnion<ImageBaseSize, number>;
  /**
   * Ширина изображения
   */
  widthSize?: number | string;
  /**
   * Высота изображения
   */
  heightSize?: number | string;
  /**
   * Отключает обводку.
   */
  noBorder?: boolean;
  /**
   * Фолбек на случай, если картинка не прогрузилась.
   *
   * > 📝 Нужный для `<ImageBase size={...} />` размер можно узнать из функции `getFallbackIconSizeByImageBaseSize()`.
   *
   * > Предпочтительней использовать иконки из `@vkontakte/icons`.
   *
   * > 📊️ Если вы хотите передать кастомную иконку, то следует именовать её по шаблону `Icon<size><name>`. Или же
   * > чтобы в неё был передан параметр `width`. Тогда мы сможем выводить в консоль подсказку правильного ли размера вы
   * > использовали иконку.
   *
   * > ⚠️ Может перекрывать `children`.
   */
  fallbackIcon?: React.ReactElement<ImageBaseExpectedIconProps>;
  /**
   * Отключает фон, заданный по умолчанию. Полезен для отображения картинок с прозрачностью.
   * @since 5.10.0
   */
  withTransparentBackground?: boolean;
  /**
   * Пользовательское значения стиля object-fit
   * Подробнее можно почитать в [документации](https://developer.mozilla.org/ru/docs/Web/CSS/object-fit)
   */
  objectFit?: React.CSSProperties['objectFit'];
  /**
   * Флаг для сохранения пропорций картинки.
   * Для корректной работы необходимо задать размеры хотя бы одной стороны картинки
   */
  keepAspectRatio?: boolean;
}

const getObjectFitClassName = (objectFit: React.CSSProperties['objectFit']) => {
  switch (objectFit) {
    case 'contain':
      return styles['ImageBase__img--objectFit-contain'];
    case 'cover':
      return styles['ImageBase__img--objectFit-cover'];
    case 'none':
      return styles['ImageBase__img--objectFit-none'];
    case 'scale-down':
      return styles['ImageBase__img--objectFit-scaleDown'];
  }
  return undefined;
};

const parsePx = (value: string): number | undefined => {
  if (value.endsWith('px')) {
    return parseInt(value);
  }
  return undefined;
};

const sizeToNumber = (size: number | string | undefined): number | undefined => {
  if (typeof size === 'string') {
    return parsePx(size);
  }
  return size;
};

/**
 * @see https://vkcom.github.io/VKUI/#/ImageBase
 */
export const ImageBase: React.FC<ImageBaseProps> & {
  Badge: typeof ImageBaseBadge;
  Overlay: typeof ImageBaseOverlay;
} = ({
  alt,
  crossOrigin,
  decoding,
  loading,
  referrerPolicy,
  sizes,
  src,
  srcSet,
  useMap,
  fetchPriority,
  getRef,
  size: sizeProp,
  width: widthImg,
  height: heightImg,
  widthSize,
  heightSize,
  style,
  noBorder = false,
  fallbackIcon: fallbackIconProp,
  children,
  onLoad,
  onError,
  withTransparentBackground,
  objectFit = 'cover',
  keepAspectRatio = false,
  ...restProps
}: ImageBaseProps) => {
  const size = sizeProp ?? minOr([sizeToNumber(widthSize), sizeToNumber(heightSize)], defaultSize);

  const width = widthSize ?? (keepAspectRatio ? undefined : size);
  const height = heightSize ?? (keepAspectRatio ? undefined : size);

  const [loaded, setLoaded] = React.useState(false);
  const [failed, setFailed] = React.useState(false);

  const hasSrc = src || srcSet;
  const needShowFallbackIcon = (failed || !hasSrc) && React.isValidElement(fallbackIconProp);

  const fallbackIcon = needShowFallbackIcon ? fallbackIconProp : null;

  if (process.env.NODE_ENV === 'development') {
    validateSize(size);
    if (fallbackIcon) {
      validateFallbackIcon(size, { name: 'fallbackIcon', value: fallbackIcon });
    }
  }

  const handleImageLoad = (event: React.SyntheticEvent<HTMLImageElement>) => {
    if (loaded) {
      return;
    }

    setLoaded(true);
    setFailed(false);
    onLoad?.(event);
  };

  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    setLoaded(false);
    setFailed(true);
    onError?.(event);
  };

  const imgRef = useExternRef(getRef);
  const isOnLoadStatusCheckedRef = React.useRef(false);
  React.useEffect(
    function dispatchLoadEventForAlreadyLoadedResourceIfReactInitializedLater() {
      if (isOnLoadStatusCheckedRef.current) {
        return;
      }
      isOnLoadStatusCheckedRef.current = true;

      if (imgRef.current && imgRef.current.complete && !loaded) {
        const event = new Event('load');
        imgRef.current.dispatchEvent(event);
      }
    },
    [imgRef, loaded],
  );

  return (
    <ImageBaseContext.Provider value={{ size }}>
      <Clickable
        style={{ width, height, ...style }}
        baseClassName={classNames(
          styles['ImageBase'],
          loaded && styles['ImageBase--loaded'],
          withTransparentBackground && styles['ImageBase--transparent-background'],
        )}
        {...restProps}
      >
        {hasSrc && (
          <img
            ref={imgRef}
            alt={alt}
            className={classNames(
              styles['ImageBase__img'],
              getObjectFitClassName(objectFit),
              keepAspectRatio && styles['ImageBase__img--keepRatio'],
            )}
            crossOrigin={crossOrigin}
            decoding={decoding}
            loading={loading}
            referrerPolicy={referrerPolicy}
            style={
              keepAspectRatio
                ? {
                    width: widthImg || width,
                    height: heightImg || height,
                  }
                : undefined
            }
            sizes={sizes}
            src={src}
            srcSet={srcSet}
            useMap={useMap}
            width={widthImg}
            height={heightImg}
            onLoad={handleImageLoad}
            onError={handleImageError}
            {...getFetchPriorityProp(fetchPriority)}
          />
        )}
        {fallbackIcon && <div className={styles['ImageBase__fallback']}>{fallbackIcon}</div>}
        {children && <div className={styles['ImageBase__children']}>{children}</div>}
        {!noBorder && <div aria-hidden className={styles['ImageBase__border']} />}
      </Clickable>
    </ImageBaseContext.Provider>
  );
};

ImageBase.displayName = 'ImageBase';

ImageBase.Badge = ImageBaseBadge;
ImageBase.Badge.displayName = 'ImageBase.Badge';

ImageBase.Overlay = ImageBaseOverlay;
ImageBase.Overlay.displayName = 'ImageBase.Overlay';
