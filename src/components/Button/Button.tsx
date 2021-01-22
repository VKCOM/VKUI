import { FunctionComponent, ReactNode } from 'react';
import { getClassName } from '../../helpers/getClassName';
import { classNames } from '../../lib/classNames';
import Tappable, { TappableProps } from '../Tappable/Tappable';
import Title from '../Typography/Title/Title';
import Text from '../Typography/Text/Text';
import Subhead from '../Typography/Subhead/Subhead';
import Caption from '../Typography/Caption/Caption';
import { HasAlign } from '../../types';
import { usePlatform } from '../../hooks/usePlatform';
import { withAdaptivity, AdaptivityProps, SizeType } from '../../hoc/withAdaptivity';
import { Platform, VKCOM } from '../../lib/platform';
import './Button.css';

export interface VKUIButtonProps extends HasAlign {
  mode?: 'primary' | 'secondary' | 'tertiary' | 'outline' | 'commerce' | 'destructive' | 'overlay_primary' | 'overlay_secondary' | 'overlay_outline';
  size?: 's' | 'm' | 'l';
  stretched?: boolean;
  before?: ReactNode;
  after?: ReactNode;
}

export interface ButtonProps extends Omit<TappableProps, 'size'>, VKUIButtonProps {}

const getContent = (size: ButtonProps['size'], children: ButtonProps['children'], hasIcons: boolean, sizeY: AdaptivityProps['sizeY'], platform: Platform) => {
  switch (size) {
    case 'l':
      return (
        sizeY === SizeType.COMPACT ?
          <Text weight="medium" vkuiClass="Button__content">{children}</Text>
          :
          <Title level="3" weight="medium" Component="div" vkuiClass="Button__content">
            {children}
          </Title>
      );
    case 'm':
      return (
        sizeY === SizeType.COMPACT ?
          <Subhead weight={platform === VKCOM ? 'regular' : 'medium'} vkuiClass="Button__content" Component="div">
            {children}
          </Subhead>
          :
          <Text weight="medium" vkuiClass="Button__content">
            {children}
          </Text>
      );
    case 's':
    default:
      if (hasIcons) {
        return (
          <Caption
            caps={platform !== Platform.VKCOM}
            level={platform === Platform.VKCOM ? '1' : sizeY === SizeType.COMPACT ? '3' : '2'}
            weight={platform === Platform.VKCOM ? 'regular' : 'medium'}
            vkuiClass={classNames('Button__content', { 'Button__content--caps': platform !== Platform.VKCOM })}
          >
            {children}
          </Caption>
        );
      }

      return (
        sizeY === SizeType.COMPACT ?
          <Caption
            weight={platform === VKCOM ? 'regular' : 'medium'}
            level="1"
            vkuiClass="Button__content"
          >
            {children}
          </Caption>
          :
          <Subhead
            weight="medium"
            Component="div"
            vkuiClass="Button__content"
          >
            {children}
          </Subhead>
      );
  }
};

const Button: FunctionComponent<ButtonProps> = (props: ButtonProps) => {
  const platform = usePlatform();
  const { size, mode, stretched, align, children, before, after, getRootRef, Component, sizeY, ...restProps } = props;
  const hasIcons = Boolean(before || after);

  return <Tappable {...restProps}
    vkuiClass={
      classNames(
        getClassName('Button', platform),
        `Button--sz-${size}`,
        `Button--lvl-${mode}`,
        `Button--aln-${align}`,
        `Button--sizeY-${sizeY}`,
        {
          ['Button--str']: stretched,
          ['Button--with-icon']: hasIcons,
        },
      )
    }
    getRootRef={getRootRef}
    Component={restProps.href ? 'a' : Component}
    activeMode="opacity"
  >
    <div vkuiClass="Button__in">
      {before && <div vkuiClass="Button__before">{before}</div>}
      {children && getContent(size, children, hasIcons, sizeY, platform)}
      {after && <div vkuiClass="Button__after">{after}</div>}
    </div>
  </Tappable>;
};

Button.defaultProps = {
  mode: 'primary',
  Component: 'button',
  align: 'center',
  size: 's',
  stretched: false,
  stopPropagation: true,
};

export default withAdaptivity(Button, {
  sizeY: true,
});
