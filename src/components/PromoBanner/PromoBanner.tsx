import * as React from 'react';
import { classNamesString } from '../../lib/classNames';
import { Icon24Dismiss } from '@vkontakte/icons';
import { Button } from '../Button/Button';
import { SimpleCell } from '../SimpleCell/SimpleCell';
import { Image } from '../Image/Image';
import { Footnote } from '../Typography/Footnote/Footnote';
import styles from './PromoBanner.module.css';

type StatsType =
  | 'playbackStarted' // Начало показа
  | 'click'; // Клик по баннеру

type BannerData = {
  title?: string;
  url_types?: string;
  bannerID?: string;
  imageWidth?: number;
  imageHeight?: number;
  imageLink?: string;
  trackingLink?: string;
  type?: string;
  iconWidth?: number;
  domain?: string;
  ctaText?: string;
  advertisingLabel?: string;
  iconLink?: string;
  statistics?: Array<{ type: StatsType; url: string }>;
  openInBrowser?: boolean;
  iconHeight?: number;
  directLink?: boolean;
  navigationType?: string;
  description?: string;
  ageRestrictions?: string;
};

export interface PromoBannerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Данные рекламного баннера, полученные из VKWebAppGetAds */
  bannerData: BannerData;
  /** Флаг скрытия кнопки закрытия рекламы */
  isCloseButtonHidden?: boolean;
  /** Хандлер закрытия рекламы */
  onClose: () => void;
}

/**
 * @see https://vkcom.github.io/VKUI/#/PromoBanner
 */
export const PromoBanner = ({
  bannerData = {},
  onClose,
  isCloseButtonHidden,
  className,
  ...restProps
}: PromoBannerProps) => {
  const [currentPixel, setCurrentPixel] = React.useState('');

  const statsPixels = React.useMemo(
    () =>
      (bannerData.statistics
        ? bannerData.statistics.reduce((acc, item) => ({ ...acc, [item.type]: item.url }), {})
        : {}) as Record<StatsType, string | void>,
    [bannerData.statistics],
  );

  const onClick = React.useCallback(
    () => setCurrentPixel(statsPixels.click || ''),
    [statsPixels.click],
  );

  React.useEffect(() => {
    if (statsPixels.playbackStarted) {
      setCurrentPixel(statsPixels.playbackStarted);
    }
  }, [statsPixels.playbackStarted]);

  return (
    <div className={classNamesString(styles['PromoBanner'], className)} {...restProps}>
      <div className={styles['PromoBanner__head']}>
        <Footnote className={styles['PromoBanner__label']}>
          {bannerData.advertisingLabel || 'Advertisement'}
        </Footnote>
        {bannerData.ageRestrictions && (
          <Footnote className={styles['PromoBanner__age']}>{bannerData.ageRestrictions}</Footnote>
        )}

        {!isCloseButtonHidden && (
          <div className={styles['PromoBanner__close']} onClick={onClose}>
            <Icon24Dismiss />
          </div>
        )}
      </div>
      <SimpleCell
        href={bannerData.trackingLink}
        onClick={onClick}
        rel="nofollow noopener noreferrer"
        target="_blank"
        before={
          bannerData.iconLink && (
            <Image
              size={48}
              src={bannerData.iconLink}
              alt={bannerData.title}
              data-testid={process.env.NODE_ENV === 'test' ? 'avatar' : undefined}
            />
          )
        }
        after={
          bannerData.ctaText && (
            <Button
              mode="outline"
              data-testid={process.env.NODE_ENV === 'test' ? 'button-ctaText' : undefined}
            >
              {bannerData.ctaText}
            </Button>
          )
        }
        subtitle={bannerData.domain}
      >
        {bannerData.title}
      </SimpleCell>

      {currentPixel.length > 0 && (
        <div className={styles['PromoBanner__pixels']}>
          <img src={currentPixel} alt="" />
        </div>
      )}
    </div>
  );
};
