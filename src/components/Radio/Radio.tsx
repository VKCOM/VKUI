import React, { FunctionComponent, InputHTMLAttributes, ReactNode } from 'react';
import Tappable, { ACTIVE_EFFECT_DELAY } from '../Tappable/Tappable';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import { IOS } from '../../lib/platform';
import { HasFormLabels, HasRef, HasRootRef } from '../../types';
import usePlatform from '../../hooks/usePlatform';

export interface RadioProps extends
  InputHTMLAttributes<HTMLInputElement>,
  HasRef<HTMLInputElement>,
  HasRootRef<HTMLLabelElement>,
  HasFormLabels {
  description?: ReactNode;
}

const Radio: FunctionComponent<RadioProps> = (props: RadioProps) => {
  const { children, description, style, className, getRef, getRootRef, top, bottom, ...restProps } = props;
  const platform = usePlatform();

  return (
    <Tappable
      Component="label"
      style={style}
      className={classNames(getClassName('Radio', platform), className)}
      activeEffectDelay={platform === IOS ? 100 : ACTIVE_EFFECT_DELAY}
      disabled={restProps.disabled}
      getRootRef={getRootRef}
    >
      <input {...restProps} type="radio" className="Radio__input" ref={getRef} />
      <div className="Radio__container">
        <div className="Radio__icon" />
        <div className="Radio__content">
          {children}
          {description && <div className="Radio__description">{description}</div>}
        </div>
      </div>
    </Tappable>
  );
};

export default Radio;
