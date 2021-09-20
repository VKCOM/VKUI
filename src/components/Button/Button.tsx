import * as React from 'react';
import { getClassName } from '../../helpers/getClassName';
import { classNames } from '../../lib/classNames';
import Tappable, { TappableProps } from '../Tappable/Tappable';
import Title from '../Typography/Title/Title';
import Text from '../Typography/Text/Text';
import Subhead from '../Typography/Subhead/Subhead';
import Caption from '../Typography/Caption/Caption';
import { HasAlign } from '../../types';
import { usePlatform } from '../../hooks/usePlatform';
import { AdaptivityProps, SizeType, withAdaptivity } from '../../hoc/withAdaptivity';
import { Platform, IOS, VKCOM } from '../../lib/platform';
import Spinner from '../Spinner/Spinner';
import './Button.css';

export interface VKUIButtonProps extends HasAlign {
  mode?: 'primary' | 'secondary' | 'tertiary' | 'outline' | 'commerce' | 'destructive' | 'overlay_primary' | 'overlay_secondary' | 'overlay_outline';
  size?: 's' | 'm' | 'l';
  stretched?: boolean;
  before?: React.ReactNode;
  after?: React.ReactNode;
  loading?: boolean;
}

export interface ButtonProps extends Omit<TappableProps, 'size'>, VKUIButtonProps {}

interface ButtonTypographyProps {
  size: ButtonProps['size'];
  platform: Platform;
  sizeY: AdaptivityProps['sizeY'];
  children?: ButtonProps['children'];
  Component?: React.ElementType;
}

const ButtonTypography: React.FC<ButtonTypographyProps> = (props: ButtonTypographyProps) => {
  const { size, sizeY, platform, ...restProps } = props;
  const isCompact = sizeY === SizeType.COMPACT;

  switch (size) {
    case 'l':
      if (isCompact) {
        return <Text weight="medium" {...restProps} />;
      }

      return <Title level="3" weight="medium" {...restProps} />;
    case 'm':
      if (isCompact) {
        return <Subhead weight={platform === VKCOM ? 'regular' : 'medium'} {...restProps} />;
      }

      return <Text weight="medium" {...restProps} />;
    case 's':
    default:
      if (platform === IOS) {
        return <Subhead weight="medium" {...restProps} />;
      }

      if (platform === VKCOM) {
        return <Caption level="1" weight="regular" {...restProps} />;
      }

      if (isCompact) {
        return <Caption level="1" weight="medium" {...restProps} />;
      }

      return <Subhead weight="medium" {...restProps} />;
  }
};

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const platform = usePlatform();
  const {
    size,
    mode,
    stretched,
    align,
    children,
    before,
    after,
    getRootRef,
    sizeY,
    Component = 'button',
    loading,
    onClick,
    ...restProps
  } = props;

  const hasIcons = Boolean(before || after);

  return (
    <Tappable
      {...restProps}
      Component={restProps.href ? 'a' : Component}
      onClick={loading ? null : onClick}
      focusVisibleMode="outside"
      vkuiClass={
        classNames(
          getClassName('Button', platform),
          `Button--sz-${size}`,
          `Button--lvl-${mode}`,
          `Button--aln-${align}`,
          `Button--sizeY-${sizeY}`,
          {
            ['Button--stretched']: stretched,
            ['Button--with-icon']: hasIcons,
          },
        )
      }
      getRootRef={getRootRef}
      activeMode="opacity"
    >
      {loading && <Spinner size="small" vkuiClass="Button__spinner" />}
      <span vkuiClass="Button__in">
        {before && <span vkuiClass="Button__before">{before}</span>}
        {children && (
          <ButtonTypography
            size={size}
            sizeY={sizeY}
            platform={platform}
            vkuiClass="Button__content"
            Component="span"
          >
            {children}
          </ButtonTypography>
        )}
        {after && <span vkuiClass="Button__after">{after}</span>}
      </span>
    </Tappable>
  );
};

Button.defaultProps = {
  mode: 'primary',
  align: 'center',
  size: 's',
  stretched: false,
  stopPropagation: true,
};

export default withAdaptivity(Button, {
  sizeY: true,
});
