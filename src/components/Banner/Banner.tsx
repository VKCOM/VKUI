import { Children, FunctionComponent, ReactNode, HTMLAttributes, MouseEventHandler } from 'react';
import { getClassName } from '../../helpers/getClassName';
import { classNames } from '../../lib/classNames';
import { usePlatform } from '../../hooks/usePlatform';
import { ANDROID, IOS, VKCOM } from '../../lib/platform';
import { Icon24Chevron, Icon24DismissSubstract, Icon24DismissDark, Icon24Cancel } from '@vkontakte/icons';
import Tappable from '../Tappable/Tappable';
import Headline from '../Typography/Headline/Headline';
import Caption from '../Typography/Caption/Caption';
import Text from '../Typography/Text/Text';
import { hasReactNode } from '../../lib/utils';
import Title from '../Typography/Title/Title';

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
   * - В режиме `tint` или в `image` со светлым фоном рекомендуется использовать только `<Button mode="primary" />` или `<Button mode="tertiary" hasHover={false} />`.
   * - В режиме `image` с тёмным фоном – `<Button mode="overlay_primary" />`.
   */
  actions?: ReactNode;
}

function renderHeader({ size, header }: Pick<BannerProps, 'size' | 'header'>) {
  switch (size) {
    case 's':
      return <Headline weight="medium" vkuiClass="Banner__header">{header}</Headline>;
    case 'm':
      return <Title level="2" weight="medium" vkuiClass="Banner__header">{header}</Title>;
  }
}

function renderSubheader({ size, subheader }: Pick<BannerProps, 'size' | 'subheader'>) {
  switch (size) {
    case 's':
      return <Caption level="1" weight="regular" vkuiClass="Banner__subheader">{subheader}</Caption>;
    case 'm':
      return <Text weight="regular" vkuiClass="Banner__subheader">{subheader}</Text>;
  }
}

const Banner: FunctionComponent<BannerProps> = (props: BannerProps) => {
  const platform = usePlatform();
  const {
    mode, imageTheme, size, before, asideMode, header, subheader, text, children, background, actions,
    onDismiss,
    ...restProps
  } = props;

  const InnerComponent = asideMode === 'expand' ? Tappable : 'div';
  const innerProps = asideMode === 'expand' ? {
    activeMode: platform === IOS ? 'opacity' : 'background',
  } : {};

  return (
    <div
      {...restProps}
      vkuiClass={classNames(
        getClassName('Banner', platform),
        `Banner--md-${mode}`,
        `Banner--sz-${size}`, {
          'Banner--inverted': mode === 'image' && imageTheme === 'dark',
        },
      )}
    >
      <InnerComponent vkuiClass="Banner__in" {...innerProps}>
        {mode === 'image' && background &&
        <div vkuiClass="Banner__bg">
          {background}
        </div>
        }

        {before && <div vkuiClass="Banner__before">{before}</div>}

        <div vkuiClass="Banner__content">
          {hasReactNode(header) && renderHeader({ size, header })}
          {hasReactNode(subheader) && renderSubheader({ size, subheader })}
          {hasReactNode(text) && <Text weight="regular" vkuiClass="Banner__text">{text}</Text>}
          {hasReactNode(actions) && Children.count(actions) > 0 &&
          <div vkuiClass="Banner__actions">{actions}</div>
          }
        </div>

        {asideMode === 'expand' &&
        <div vkuiClass="Banner__expand">
          <Icon24Chevron />
        </div>
        }

        {asideMode === 'dismiss' &&
        <div vkuiClass="Banner__dismiss">
          <div vkuiClass="Banner__dismissIcon" onClick={onDismiss}>
            {(platform === ANDROID || platform === VKCOM) && <Icon24Cancel />}
            {platform === IOS && (mode === 'image' ? <Icon24DismissDark /> : <Icon24DismissSubstract />)}
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
