import React from 'react';
import Icon24Dismiss from '@vkontakte/icons/dist/24/dismiss';
import HeaderButton from '../HeaderButton/HeaderButton';
import classNames from '../../lib/classNames';
import Button from '../Button/Button';
import Cell from '../Cell/Cell';

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
  statistics?: { type: string; url: string }[];
  openInBrowser?: boolean;
  iconHeight?: number;
  directLink?: boolean;
  navigationType?: string;
  description?: string;
  ageRestriction?: number;
};

export interface PromoBannerProps {
  /** Данные рекламного баннера, полученные из VKWebAppGetAds */
  bannerData: BannerData;
  /** Фиксированное позиционирование блока (position: fixed) */
  isFixed?: boolean;
  /** Положение блока при фиксированном позиционировании */
  verticalAlign?: 'top' | 'bottom';
  /** Флаг скрытия кнопки закрытия рекламы */
  isCloseButtonHidden?: boolean;
  /** Хандлер закрытия рекламы */
  onClose: () => void;
}

class PromoBanner extends React.Component<PromoBannerProps> {
  public render() {
    return (
      <div
        className={classNames('PromoBanner', {
          [this.props.verticalAlign === 'bottom' ? 'PromoBanner--bottom' : 'PromoBanner--top']: this.props.isFixed,
          'PromoBanner--fixed': this.props.isFixed
        })}
      >
        <div className="PromoBanner__head">
          {this.props.bannerData.ageRestriction && <span className="PromoBanner__age">14+</span>}
          <span className="PromoBanner__label">{this.props.bannerData.advertisingLabel || 'Advertisement'}</span>

          {!this.props.isCloseButtonHidden && (
            <HeaderButton className="PromoBanner__close" onClick={this.props.onClose}>
              <Icon24Dismiss />
            </HeaderButton>
          )}
        </div>
        <a
          href={this.props.bannerData.trackingLink}
          rel="nofollow noopener noreferrer"
          target="_blank"
          className="PromoBanner__clickable-body"
        >
          <div className="PromoBanner__content">
            <Cell
              before={
                <img
                  className="PromoBanner__icon"
                  src={this.props.bannerData.iconLink}
                  alt={this.props.bannerData.title}
                />
              }
              description={
                <div className="PromoBanner__content-bottom">
                  <div className="PromoBanner__domain-wrapper">
                    <div className="PromoBanner__domain">{this.props.bannerData.domain}</div>
                  </div>

                  <Button level="outline">{this.props.bannerData.ctaText}</Button>
                </div>
              }
            >
              {this.props.bannerData.title}
            </Cell>
          </div>
        </a>
      </div>
    );
  }
}

export default PromoBanner;
