import React, {HTMLAttributes} from 'react';
import Tappable, { ACTIVE_EFFECT_DELAY } from '../Tappable/Tappable';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import { IOS } from '../../lib/platform';
import Icon16Done from '@vkontakte/icons/dist/16/done';
import { HasChildren, HasRootRef } from '../../types/props';
import usePlatform from '../../hooks/usePlatform';

export interface CheckboxProps extends HTMLAttributes<HTMLInputElement>, HasRootRef<HTMLLabelElement>, HasChildren {
  /**
   * @ignore
   */
  disabled?: boolean
}

export const Checkbox: React.FunctionComponent<CheckboxProps> = ({
  children,
  className,
  style,
  getRootRef,
  ...restProps
}: CheckboxProps) => {
  const platform = usePlatform();

  return (
    <Tappable
      component="label"
      className={classNames(getClassName('Checkbox', platform), className)}
      style={style}
      disabled={restProps.disabled}
      activeEffectDelay={platform === IOS ? 100 : ACTIVE_EFFECT_DELAY }
      getRootRef={getRootRef}
    >
      <input {...restProps} type="checkbox" className="Checkbox__input" />
      <div className="Checkbox__container">
        <div className="Checkbox__icon"><Icon16Done /></div>
        <div className="Checkbox__content">{children}</div>
      </div>
    </Tappable>
  );
};

export default Checkbox;
