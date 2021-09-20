import * as React from 'react';
import { getClassName } from '../../helpers/getClassName';
import { classNames } from '../../lib/classNames';
import { usePlatform } from '../../hooks/usePlatform';
import { ANDROID, IOS, VKCOM } from '../../lib/platform';
import { hasReactNode } from '../../lib/utils';
import { Icon24Chevron, Icon24DismissSubstract, Icon24DismissDark, Icon24Cancel } from '@vkontakte/icons';
import Tappable from '../Tappable/Tappable';
import IconButton from '../IconButton/IconButton';
import Headline from '../Typography/Headline/Headline';
import Subhead from '../Typography/Subhead/Subhead';
import Text from '../Typography/Text/Text';
import Title from '../Typography/Title/Title';
import './Banner.css';

export interface BannerProps extends React.HTMLAttributes<HTMLDivElement> {
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
  onDismiss?: React.MouseEventHandler<HTMLButtonElement>;
  /**
   * `aria-label` для кнопки при `asideMode="dismiss". Необходим, чтобы кнопка была доступной.
   */
  dismissLabel?: string;
  /**
   * Содержимое, отображаемое в левой части баннера.
   */
  before?: React.ReactNode;
  /**
   * Заголовок. <br />
   * При использовании этого свойства рекомендуется не указывать `text`.
   */
  header?: React.ReactNode;
  /**
   * Подзаголовок. <br />
   * При использовании этого свойства рекомендуется не указывать `text`.
   */
  subheader?: React.ReactNode;
  /**
   * Текст баннера. <br />
   * Это свойство следует использовать без указания `header` и `subheader`.
   */
  text?: React.ReactNode;
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
  background?: React.ReactNode;
  /**
   * Кнопки, отображаемые в баннере.
   *
   * - В режиме `tint` или в `image` со светлым фоном рекомендуется использовать только `<Button mode="primary" />` или `<Button mode="tertiary" hasHover={false} />`.
   * - В режиме `image` с тёмным фоном – `<Button mode="overlay_primary" />`.
   */
  actions?: React.ReactNode;
}

interface BannerTypographyProps extends Pick<BannerProps, 'size'> {
  Component?: React.ElementType;
}

const BannerHeader: React.FC<BannerTypographyProps> = ({ size, ...restProps }: BannerTypographyProps) => {
  return size === 'm'
    ? <Title level="2" weight="medium" {...restProps} />
    : <Headline weight="medium" {...restProps} />;
};

const BannerSubheader: React.FC<BannerTypographyProps> = ({ size, ...restProps }: BannerTypographyProps) => {
  return size === 'm'
    ? <Text weight="regular" {...restProps} />
    : <Subhead weight="regular" {...restProps} />;
};

const Banner: React.FC<BannerProps> = (props: BannerProps) => {
  const platform = usePlatform();
  const {
    mode, imageTheme, size, before, asideMode, header, subheader, text, children, background, actions,
    onDismiss, dismissLabel,
    ...restProps
  } = props;

  return (
    <section
      {...restProps}
      vkuiClass={classNames(
        getClassName('Banner', platform),
        `Banner--md-${mode}`,
        `Banner--sz-${size}`,
        {
          'Banner--inverted': mode === 'image' && imageTheme === 'dark',
        },
      )}
    >
      <Tappable
        vkuiClass="Banner__in"
        activeMode={platform === IOS ? 'opacity' : 'background'}
        disabled={asideMode !== 'expand'}
        role={asideMode === 'expand' ? 'button' : null}
      >
        {mode === 'image' && background &&
          <div aria-hidden="true" vkuiClass="Banner__bg">
            {background}
          </div>
        }

        {before && <div vkuiClass="Banner__before">{before}</div>}

        <div vkuiClass="Banner__content">
          {hasReactNode(header) && (
            <BannerHeader size={size} Component="h2" vkuiClass="Banner__header">{header}</BannerHeader>
          )}
          {hasReactNode(subheader) && (
            <BannerSubheader Component="span" size={size} vkuiClass="Banner__subheader">{subheader}</BannerSubheader>
          )}
          {hasReactNode(text) && <Text weight="regular" vkuiClass="Banner__text">{text}</Text>}
          {hasReactNode(actions) && React.Children.count(actions) > 0 && (
            <div vkuiClass="Banner__actions">{actions}</div>
          )}
        </div>

        {!!asideMode && (
          <div vkuiClass="Banner__aside">
            {asideMode === 'expand' && <Icon24Chevron />}

            {asideMode === 'dismiss' && (
              <IconButton
                aria-label={dismissLabel}
                vkuiClass="Banner__dismiss"
                onClick={onDismiss}
                hoverMode="opacity"
                hasActive={false}
              >
                {(platform === ANDROID || platform === VKCOM) && <Icon24Cancel />}
                {platform === IOS && (mode === 'image' ? <Icon24DismissDark /> : <Icon24DismissSubstract />)}
              </IconButton>
            )}
          </div>
        )}
      </Tappable>
    </section>
  );
};

Banner.defaultProps = {
  dismissLabel: 'Скрыть',
  mode: 'tint',
  size: 's',
  imageTheme: 'dark',
};

export default Banner;
