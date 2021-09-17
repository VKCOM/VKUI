import * as React from 'react';
import { Icon24Dismiss } from '@vkontakte/icons';
import Button from '../Button/Button';
import SimpleCell from '../SimpleCell/SimpleCell';
import Avatar from '../Avatar/Avatar';
import Caption from '../Typography/Caption/Caption';
import { usePlatform } from '../../hooks/usePlatform';
import { getClassName } from '../../helpers/getClassName';
import './PromoBanner.css';

type StatsType =
  | 'playbackStarted' // Начало показа
  | 'click'; // Клик по баннеру

type BannerData = {
  title?: string;
  url_types?: string; // eslint-disable-line camelcase
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
  /** @deprecated */
  ageRestriction?: number;
};

export interface PromoBannerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Данные рекламного баннера, полученные из VKWebAppGetAds */
  bannerData: BannerData;
  /** Флаг скрытия кнопки закрытия рекламы */
  isCloseButtonHidden?: boolean;
  /** Хандлер закрытия рекламы */
  onClose: () => void;
}

const PromoBanner = (props: PromoBannerProps) => {
  const platform = usePlatform();
  const { bannerData = {}, onClose, ...restProps } = props;

  const ageRestrictions =
    bannerData.ageRestrictions != null
      ? parseInt(bannerData.ageRestrictions)
      : bannerData.ageRestriction;

  const [currentPixel, setCurrentPixel] = React.useState('');

  const statsPixels = React.useMemo(
    () =>
      (bannerData.statistics
        ? bannerData.statistics.reduce((acc, item) => ({ ...acc, [item.type]: item.url }), {})
        : {}) as Record<StatsType, string | void>,
    [bannerData.statistics],
  );

  const onClick = React.useCallback(() => setCurrentPixel(statsPixels.click || ''), [statsPixels.click]);

  React.useEffect(() => {
    if (statsPixels.playbackStarted) {
      setCurrentPixel(statsPixels.playbackStarted);
    }
  }, [statsPixels.playbackStarted]);

  return (
    <div vkuiClass={getClassName('PromoBanner', platform)} {...restProps}>
      <div vkuiClass="PromoBanner__head">
        <Caption weight="regular" level="1" vkuiClass="PromoBanner__label">{bannerData.advertisingLabel || 'Advertisement'}</Caption>
        {ageRestrictions != null && <Caption weight="regular" level="1" vkuiClass="PromoBanner__age">{ageRestrictions}+</Caption>}

        {!props.isCloseButtonHidden &&
          <div vkuiClass="PromoBanner__close" onClick={props.onClose}>
            <Icon24Dismiss />
          </div>
        }
      </div>
      <SimpleCell
        href={bannerData.trackingLink}
        onClick={onClick}
        rel="nofollow noopener noreferrer"
        target="_blank"
        before={
          <Avatar mode="image" size={48} src={bannerData.iconLink} alt={bannerData.title} />
        }
        after={<Button mode="outline">{bannerData.ctaText}</Button>}
        description={bannerData.domain}
      >
        {bannerData.title}
      </SimpleCell>

      {currentPixel.length > 0 &&
        <div vkuiClass="PromoBanner__pixels">
          <img src={currentPixel} alt="" />
        </div>
      }
    </div>
  );
};

export default PromoBanner;
