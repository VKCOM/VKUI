import React, { FunctionComponent, ReactNode, HTMLAttributes, MouseEventHandler } from 'react';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import usePlatform from '../../hooks/usePlatform';
import Icon24Chevron from '@vkontakte/icons/dist/24/chevron';
import Icon24DismissSubstract from '@vkontakte/icons/dist/24/dismiss_substract';
import Icon24DismissDark from '@vkontakte/icons/dist/24/dismiss_dark';
import Tappable from '../Tappable/Tappable';

export interface BannerProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Тип баннера.
   */
  mode?: 'tint' | 'image';
  size?: 's' | 'm';
  /**
   * Тип действия в правой части баннера.
   *
   * - `dismiss` – отображается иконка крестика, при клике на неё сработает свойство `onDismiss`.
   * - `expand` – отображается иконка шеврона, которая подразумевает, что при клике на баннер можно куда-то перейти.
   */
  asideMode?: 'dismiss' | 'expand';
  /**
   * Срабатывает при клике на иконку крестика при `asideMode="dismiss"`.
   */
  onDismiss?: MouseEventHandler<HTMLDivElement>;
  /**
   * Содержимое, отображаемое в левой части баннера.
   */
  before?: ReactNode;
  /**
   * Заголовок. <br />
   * При использовании этого свойства рекомендуется не указывать `text`.
   */
  header?: ReactNode;
  /**
   * Подзаголовок. <br />
   * При использовании этого свойства рекомендуется не указывать `text`.
   */
  subheader?: ReactNode;
  /**
   * Текст баннера. <br />
   * Это свойство следует использовать без указания `header` и `subheader`.
   */
  text?: ReactNode;
  /**
   * При использовании `mode="image"`.
   *
   * - `light` – в качестве фона используется светлое изображение, цвет текста в баннере будет тёмным.
   * - `dark` – в качестве фона используется тёмное изображение, цвет текста будет светлым.
   */
  imageTheme?: 'light' | 'dark';
  /**
   * При использовании `mode="image"`.
   *
   * Элемент, который нужно стилизовать цветом и/или фоном. Этот элемент будет растянут на 100% ширины и высоты баннера.
   */
  background?: ReactNode;
  /**
   * Кнопки, отображаемые в баннере.
   *
   * - В режиме `tint` или в `image` со светлым фоном рекомендуется использовать только `<Button mode="primary" />` или `<Button mode="tertiary" />`.
   * - В режиме `image` с тёмным фоном – `<Button mode="overlay" />`.
   */
  actions?: ReactNode;
}

const Banner: FunctionComponent<BannerProps> = (props: BannerProps) => {
  const platform = usePlatform();
  const {
    className, mode, imageTheme, size, before, asideMode, header, subheader, text, children, background, actions,
    onDismiss,
    ...restProps
  } = props;

  const InnerComponent = asideMode === 'expand' ? Tappable : 'div';

  return (
    <div
      {...restProps}
      className={classNames(
        getClassName('Banner', platform),
        `Banner--md-${mode}`,
        `Banner--sz-${size}`, {
          'Banner--inverted': mode === 'image' && imageTheme === 'dark',
        }, className,
      )}
    >
      <InnerComponent className="Banner__in">
        {mode === 'image' && background &&
        <div className="Banner__bg">
          {background}
        </div>
        }

        {before && <div className="Banner__before">{before}</div>}

        <div className="Banner__content">
          {header && <div className="Banner__header">{header}</div>}
          {subheader && <div className="Banner__subheader">{subheader}</div>}
          {text && <div className="Banner__text">{text}</div>}

          {actions &&
          <div className="Banner__actions">{actions}</div>
          }
        </div>

        {asideMode === 'expand' &&
        <div className="Banner__expand">
          <Icon24Chevron />
        </div>
        }

        {asideMode === 'dismiss' &&
        <div className="Banner__dismiss">
          <div className="Banner__dismissIcon" onClick={onDismiss}>
            {mode === 'image' ? <Icon24DismissDark /> : <Icon24DismissSubstract />}
          </div>
        </div>
        }
      </InnerComponent>
    </div>
  );
};

Banner.defaultProps = {
  mode: 'tint',
  size: 's',
  imageTheme: 'dark',
};

export default Banner;
