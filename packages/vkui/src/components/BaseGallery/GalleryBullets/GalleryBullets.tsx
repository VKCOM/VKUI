import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { Tappable } from '../../Tappable/Tappable';
import { BaseGalleryProps } from '../types';
import styles from '../BaseGallery.module.css';

const stylesBullets = {
  dark: styles['BaseGallery__bullets--dark'],
  light: styles['BaseGallery__bullets--light'],
};

interface GalleryBulletsProps
  extends Pick<BaseGalleryProps, 'slideIndex' | 'children' | 'onChange' | 'bulletsClassName'> {
  bullets: Exclude<BaseGalleryProps['bullets'], false | undefined>;
}

export const GalleryBullets = ({
  bullets,
  slideIndex,
  children,
  onChange,
  bulletsClassName,
}: GalleryBulletsProps) => {
  return (
    <div
      aria-hidden
      className={classNames(
        styles['BaseGallery__bullets'],
        stylesBullets[bullets],
        bulletsClassName,
      )}
    >
      {React.Children.map(children, (_item: React.ReactNode, index: number) => (
        <Tappable
          Component="button"
          className={classNames(
            styles['BaseGallery__bullet'],
            index === slideIndex && styles['BaseGallery__bullet--active'],
          )}
          onClick={() => onChange?.(index)}
          key={index}
        />
      ))}
    </div>
  );
};
