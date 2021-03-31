import { FunctionComponent, InputHTMLAttributes, ReactNode } from 'react';
import Tappable, { ACTIVE_EFFECT_DELAY } from '../Tappable/Tappable';
import { getClassName } from '../../helpers/getClassName';
import { classNames } from '../../lib/classNames';
import { IOS, VKCOM } from '../../lib/platform';
import { Icon20CheckBoxOn, Icon20CheckBoxOff, Icon24CheckBoxOn, Icon24CheckBoxOff } from '@vkontakte/icons';
import { HasRef, HasRootRef } from '../../types';
import { usePlatform } from '../../hooks/usePlatform';
import { withAdaptivity, AdaptivityProps, SizeType } from '../../hoc/withAdaptivity';
import { hasReactNode } from '../../lib/utils';
import Caption from '../../components/Typography/Caption/Caption';
import Text from '../Typography/Text/Text';
import Headline from '../Typography/Headline/Headline';

export interface CheckboxProps extends
  InputHTMLAttributes<HTMLInputElement>,
  HasRootRef<HTMLLabelElement>,
  HasRef<HTMLInputElement>,
  AdaptivityProps {
  description?: ReactNode;
}

export const Checkbox: FunctionComponent<CheckboxProps> = ({
  children,
  description,
  className,
  style,
  getRootRef,
  getRef,
  sizeY,
  ...restProps
}: CheckboxProps) => {
  const platform = usePlatform();

  const ContentComponent = platform === VKCOM || sizeY === SizeType.COMPACT ? Text : Headline;
  const descriptionLevel = platform === VKCOM || sizeY === SizeType.COMPACT ? '2' : '1';

  return (
    <Tappable
      Component="label"
      vkuiClass={classNames(getClassName('Checkbox', platform), `Checkbox--sizeY-${sizeY}`)}
      className={className}
      style={style}
      disabled={restProps.disabled}
      activeEffectDelay={platform === IOS ? 100 : ACTIVE_EFFECT_DELAY}
      getRootRef={getRootRef}
    >
      <input {...restProps} type="checkbox" vkuiClass="Checkbox__input" ref={getRef} />
      <div vkuiClass="Checkbox__container">
        <div vkuiClass="Checkbox__icon Checkbox__icon--on">
          {sizeY === SizeType.COMPACT || platform === VKCOM ?
            <Icon20CheckBoxOn />
            :
            <Icon24CheckBoxOn />
          }
        </div>
        <div vkuiClass="Checkbox__icon Checkbox__icon--off">
          {sizeY === SizeType.COMPACT || platform === VKCOM ?
            <Icon20CheckBoxOff />
            :
            <Icon24CheckBoxOff />
          }
        </div>
        <ContentComponent weight="regular" vkuiClass="Checkbox__content">
          <div vkuiClass="Checkbox__children">{children}</div>
          {hasReactNode(description) && <Caption level={descriptionLevel} weight="regular" vkuiClass="Checkbox__description">{description}</Caption>}
        </ContentComponent>
      </div>
    </Tappable>
  );
};

export default withAdaptivity(Checkbox, {
  sizeY: true,
});
