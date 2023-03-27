import * as React from 'react';
import { Icon16Cancel, Icon16WarningTriangleOutline } from '@vkontakte/icons';
import { classNames } from '@vkontakte/vkjs';
import { ActionSheet } from '../ActionSheet/ActionSheet';
import { ActionSheetDefaultIosCloseItem } from '../ActionSheet/ActionSheetDefaultIosCloseItem';
import { ActionSheetItem } from '../ActionSheetItem/ActionSheetItem';
import { Button } from '../Button/Button';
import { Image } from '../Image/Image';
import { SimpleCell } from '../SimpleCell/SimpleCell';
import { SplitCol } from '../SplitCol/SplitCol';
import { SplitLayout } from '../SplitLayout/SplitLayout';
import { Footnote } from '../Typography/Footnote/Footnote';
import styles from './PromoBanner.module.css';

type StatsType =
  | 'playbackStarted' // Начало показа
  | 'click'; // Клик по баннеру

type AdChoicesOption = {
  name: string;
  onClick: () => void;
  shouldCloseAd?: boolean;
};

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
  adChoices?: {
    icon?: string;
    options?: AdChoicesOption[];
  };
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
  const [popout, setPopout] = React.useState<React.ReactElement | null>(null);
  const adChoicesIcon = React.useRef<HTMLDivElement>(null);

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

  const closeList = ({ target, relatedTarget }: any) => {
    if (
      (target === adChoicesIcon.current && relatedTarget?.className?.includes('vkuiActionSheet')) ||
      relatedTarget === adChoicesIcon.current
    ) {
      return;
    }
    setPopout(null);
  };

  const openList = () => {
    setPopout(
      <div className="ShortVideoNavigation__dropdownWrapper">
        <ActionSheet
          onClose={() => setPopout(null)}
          iosCloseItem={<ActionSheetDefaultIosCloseItem />}
          toggleRef={adChoicesIcon}
          className="ShortVideoNavigation__dropdown"
          onMouseLeave={closeList}
        >
          {bannerData.adChoices?.options?.map((option) => {
            return (
              <ActionSheetItem
                key={option.name}
                autoClose={option.shouldCloseAd}
                onClick={option.onClick}
              >
                {option.name}
              </ActionSheetItem>
            );
          })}
        </ActionSheet>
      </div>,
    );
  };

  React.useEffect(() => {
    if (statsPixels.playbackStarted) {
      setCurrentPixel(statsPixels.playbackStarted);
    }
  }, [statsPixels.playbackStarted]);

  return (
    <SplitLayout
      className={classNames(styles['PromoBanner'], className)}
      popout={popout}
      {...restProps}
    >
      <SplitCol>
        <div className={styles['PromoBanner__head']}>
          {bannerData.ageRestrictions && (
            <Footnote className={styles['PromoBanner__age']}>{bannerData.ageRestrictions}</Footnote>
          )}
          <Footnote>{bannerData.advertisingLabel || 'Advertisement'}</Footnote>

          {bannerData.adChoices?.options?.length ? (
            <>
              <Footnote className={styles['PromoBanner__dot']}>&middot;</Footnote>

              <div
                className={styles['PromoBanner__adChoices']}
                onClick={openList}
                ref={adChoicesIcon}
              >
                {bannerData.adChoices?.icon ?? <Icon16WarningTriangleOutline />}
              </div>
            </>
          ) : (
            ''
          )}

          {!isCloseButtonHidden && (
            <div className={styles['PromoBanner__close']} onClick={onClose}>
              <Icon16Cancel />
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
      </SplitCol>
    </SplitLayout>
  );
};
