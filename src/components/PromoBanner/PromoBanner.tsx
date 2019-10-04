import React from 'react';
// import getClassName from '../../helpers/getClassName';

type BannerData = {
  title: string;
  url_types: string; // eslint-disable-line camelcase
  bannerID: string;
  imageWidth: number;
  imageHeight: number;
  imageLink: string;
  trackingLink: string;
  type: string;
  iconWidth: number;
  domain: string;
  ctaText: string;
  advertisingLabel: string;
  iconLink: string;
  statistics: { type: string; url: string }[];
  openInBrowser: boolean;
  iconHeight: number;
  directLink: boolean;
  navigationType: string;
  description: string;
  ageRestriction?: number;
};

export interface PromoBannerProps {
  /** Данные рекламного баннера, полученные из VKWebAppGetAds */
  bannerData: BannerData;
  /** Фиксированное позиционирование блока (position: fixed) */
  isFixed?: boolean;
  /** Положение блока при фиксированном позиционировании */
  verticalAlign?: 'top' | 'bottom';
}

class PromoBanner extends React.Component<PromoBannerProps> {
  public render() {
    return (
      <div
        className="PromoBanner"
        style={
          this.props.isFixed
            ? {
              position: 'fixed',
              [this.props.verticalAlign || 'top']: 0
            }
            : {}
        }
      >
        <div className="PromoBanner__head">
          {this.props.bannerData.ageRestriction && <span className="PromoBanner__age">14+</span>}
          <span className="PromoBanner__label">{this.props.bannerData.advertisingLabel || 'Advertisement'}</span>
        </div>
        <a
          href={this.props.bannerData.trackingLink}
          rel="nofollow noopener noreferrer"
          target="_blank"
          className="PromoBanner__clickable-body"
        >
          <div className="PromoBanner__icon">
            <img src={this.props.bannerData.iconLink} alt={this.props.bannerData.title} />
          </div>

          <div className="PromoBanner__content">
            <div className="PromoBanner__title">{this.props.bannerData.title}</div>

            <div className="PromoBanner__content-bottom">
              <div className="PromoBanner__domain-wrapper">
                <div className="PromoBanner__domain">{this.props.bannerData.domain}</div>
              </div>

              <div className="PromoBanner__button-wrapper">
                <div className="PromoBanner__button">{this.props.bannerData.ctaText}</div>
              </div>
            </div>
          </div>
        </a>
      </div>
    );
  }
}

export default PromoBanner;
