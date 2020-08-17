import React, { InputHTMLAttributes } from 'react';
import Tappable, { ACTIVE_EFFECT_DELAY } from '../Tappable/Tappable';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import { IOS } from '../../lib/platform';

import Icon20CheckboxOn from '@vkontakte/icons/dist/20/check_box_on';
import Icon20CheckboxOff from '@vkontakte/icons/dist/20/check_box_off';
import Icon24CheckboxOn from '@vkontakte/icons/dist/24/check_box_on';
import Icon24CheckboxOff from '@vkontakte/icons/dist/24/check_box_off';

import { HasFormLabels, HasRef, HasRootRef } from '../../types';
import usePlatform from '../../hooks/usePlatform';
import withAdaptivity, { AdaptivityProps, SizeType } from '../../hoc/withAdaptivity';

export interface CheckboxProps extends
  InputHTMLAttributes<HTMLInputElement>,
  HasRootRef<HTMLLabelElement>,
  HasRef<HTMLInputElement>,
  HasFormLabels,
  AdaptivityProps { }

export const Checkbox: React.FunctionComponent<CheckboxProps> = ({
  children,
  className,
  style,
  getRootRef,
  getRef,
  top,
  bottom,
  sizeY,
  ...restProps
}: CheckboxProps) => {
  const platform = usePlatform();

  return (
    <Tappable
      Component="label"
      className={classNames(getClassName('Checkbox', platform), className, `Checkbox--sizeY-${sizeY}`)}
      style={style}
      disabled={restProps.disabled}
      activeEffectDelay={platform === IOS ? 100 : ACTIVE_EFFECT_DELAY}
      getRootRef={getRootRef}
    >
      <input {...restProps} type="checkbox" className="Checkbox__input" ref={getRef} />
      <div className="Checkbox__container">
        <div className="Checkbox__icon Checkbox__iconOn">
          {sizeY === SizeType.COMPACT ?
            <Icon20CheckboxOn />
            :
            <Icon24CheckboxOn />
          }
        </div>
        <div className="Checkbox__icon Checkbox__iconOff">
          {sizeY === SizeType.COMPACT ?
            <Icon20CheckboxOff />
            :
            <Icon24CheckboxOff />
          }
        </div>
        <div className="Checkbox__content">{children}</div>
      </div>
    </Tappable>
  );
};

export default withAdaptivity(Checkbox, {
  sizeY: true,
});
