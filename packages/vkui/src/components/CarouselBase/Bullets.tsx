/* eslint-disable jsdoc/require-jsdoc */

import { classNames } from '@vkontakte/vkjs';
import { type BaseGalleryProps } from './types';
import styles from './CarouselBase.module.css';

export interface BulletsTestIds {
  /**
   * Передает атрибут `data-testid` для bullets.
   */
  bulletTestId?: (index: number, active: boolean) => string;
}

interface BulletsProps extends BulletsTestIds {
  bullets: Exclude<BaseGalleryProps['bullets'], false | undefined>;
  slideIndex: number;
  count: number;
}

const stylesBullets = {
  dark: styles.bulletsDark,
  light: styles.bulletsLight,
};

export const Bullets = ({ bullets, slideIndex, count, bulletTestId }: BulletsProps) => {
  return (
    <div aria-hidden className={classNames(styles.bullets, stylesBullets[bullets])}>
      {Array.from({ length: count }).map((_, index) => (
        <div
          className={classNames(styles.bullet, index === slideIndex && styles.bulletActive)}
          data-testid={bulletTestId?.(index, index === slideIndex)}
          key={index}
        />
      ))}
    </div>
  );
};
