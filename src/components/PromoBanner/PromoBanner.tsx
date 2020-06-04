import React, { HTMLAttributes, useEffect, useMemo, useState, useCallback } from 'react';
import Icon24Dismiss from '@vkontakte/icons/dist/24/dismiss';
import Button from '../Button/Button';
import SimpleCell from '../SimpleCell/SimpleCell';
import Avatar from '../Avatar/Avatar';
import classNames from '../../lib/classNames';

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
  ageRestriction?: number;
};

export interface PromoBannerProps extends HTMLAttributes<HTMLDivElement> {
  /** Данные рекламного баннера, полученные из VKWebAppGetAds */
  bannerData: BannerData;
  /** Флаг скрытия кнопки закрытия рекламы */
  isCloseButtonHidden?: boolean;
  /** Хандлер закрытия рекламы */
  onClose: () => void;
}

const PromoBanner = (props: PromoBannerProps) => {
  const [currentPixel, setCurrentPixel] = useState('');

  const statsPixels = useMemo(() => (
    props.bannerData.statistics
      ? props.bannerData.statistics.reduce((acc, item) => ({ ...acc, [item.type]: item.url }), {})
      : {}
  ) as Record<StatsType, string | void>, [props.bannerData.statistics]);

  const onClick = useCallback(() => setCurrentPixel(statsPixels.click || ''), [statsPixels.click]);

  useEffect(() => {
    if (statsPixels.playbackStarted) {
      setCurrentPixel(statsPixels.playbackStarted);
    }
  }, [statsPixels.playbackStarted]);

  return (
    <div className={classNames('PromoBanner', props.className)}>
      <div className="PromoBanner__head">
        {props.bannerData.ageRestriction && <span className="PromoBanner__age">{props.bannerData.ageRestriction}+</span>}
        <span className="PromoBanner__label">{props.bannerData.advertisingLabel || 'Advertisement'}</span>

        {!props.isCloseButtonHidden &&
        <div className="PromoBanner__close" onClick={props.onClose}>
          <Icon24Dismiss />
        </div>
        }
      </div>
      <SimpleCell
        href={props.bannerData.trackingLink}
        onClick={onClick}
        rel="nofollow noopener noreferrer"
        target="_blank"
        before={
          <Avatar mode="image" size={48} src={props.bannerData.iconLink} alt={props.bannerData.title} />
        }
        after={<Button mode="outline">{props.bannerData.ctaText}</Button>}
        description={props.bannerData.domain}
      >
        {props.bannerData.title}
      </SimpleCell>

      {currentPixel.length > 0 &&
        <div className="PromoBanner__pixels">
          <img src={currentPixel} alt="" />
        </div>
      }
    </div>
  );
};

export default PromoBanner;
