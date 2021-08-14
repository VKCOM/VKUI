import { InputHTMLAttributes, FC, useEffect, useRef, useCallback } from 'react';
import Tappable, { ACTIVE_EFFECT_DELAY } from '../Tappable/Tappable';
import { getClassName } from '../../helpers/getClassName';
import { classNames } from '../../lib/classNames';
import { IOS, VKCOM } from '../../lib/platform';

import { Icon20CheckBoxOn, Icon20CheckBoxOff, Icon24CheckBoxOn, Icon24CheckBoxOff, Icon20CheckBoxIndetermanate } from '@vkontakte/icons';

import { HasRef, HasRootRef } from '../../types';
import { usePlatform } from '../../hooks/usePlatform';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { useExternRef } from '../../hooks/useExternRef';
import { SizeType } from '../../hoc/withAdaptivity';

import './SimpleCheckbox.css';

export interface SimpleCheckboxProps extends
  InputHTMLAttributes<HTMLInputElement>,
  HasRootRef<HTMLLabelElement>,
  HasRef<HTMLInputElement> {
  indeterminate?: boolean;
  defaultIndeterminate?: boolean;
}

export const SimpleCheckbox: FC<SimpleCheckboxProps> = (props: SimpleCheckboxProps) => {
  const { className, style, getRootRef, getRef, indeterminate, defaultIndeterminate, onChange, ...restProps } = props;
  const { sizeY } = useAdaptivity();
  const platform = usePlatform();
  const inputRef = useExternRef(getRef);
  const prevChecked = useRef<boolean | undefined>();
  const prevIndeterminate = useRef<boolean | undefined>();

  useEffect(() => {
    const indeterminateValue = indeterminate === undefined && !prevIndeterminate.current ? defaultIndeterminate : indeterminate;
    const checkedValue = restProps.checked === undefined && !prevChecked.current ? restProps.defaultChecked : restProps.checked;

    if (inputRef.current) {
      if (prevChecked.current !== undefined && prevChecked.current !== restProps.checked) {
        if (prevIndeterminate.current !== undefined && prevIndeterminate.current !== indeterminate) {
          inputRef.current.indeterminate = indeterminateValue && !checkedValue;
        } else {
          inputRef.current.indeterminate = false;
        }
      } else {
        inputRef.current.indeterminate = indeterminateValue && !checkedValue;
      }
    }

    prevChecked.current = restProps.checked;
    prevIndeterminate.current = indeterminate;
  }, [indeterminate, restProps.checked]);

  const handleChange: SimpleCheckboxProps['onChange'] = useCallback((event) => {
    if (defaultIndeterminate !== undefined && indeterminate === undefined && restProps.checked === undefined) {
      inputRef.current.indeterminate = false;
    }
    onChange && onChange(event);
  }, [onChange, indeterminate, restProps.checked]);

  return (
    <Tappable
      Component="label"
      vkuiClass={classNames(
        getClassName('SimpleCheckbox', platform),
        `SimpleCheckbox--sizeY-${sizeY}`,
      )}
      className={className}
      style={style}
      disabled={restProps.disabled}
      activeMode={platform === VKCOM ? 'SimpleCheckbox--active' : 'background'}
      activeEffectDelay={platform === IOS ? 100 : ACTIVE_EFFECT_DELAY}
      getRootRef={getRootRef}
    >
      <input {...restProps} onChange={handleChange} type="checkbox" vkuiClass="SimpleCheckbox__input" ref={inputRef} />
      <div vkuiClass="SimpleCheckbox__container">
        <div vkuiClass="SimpleCheckbox__icon SimpleCheckbox__icon--on">
          {sizeY === SizeType.COMPACT || platform === VKCOM
            ? <Icon20CheckBoxOn />
            : <Icon24CheckBoxOn />
          }
        </div>
        <div vkuiClass="SimpleCheckbox__icon SimpleCheckbox__icon--off">
          {sizeY === SizeType.COMPACT || platform === VKCOM
            ? <Icon20CheckBoxOff />
            : <Icon24CheckBoxOff />
          }
        </div>
        <div vkuiClass="SimpleCheckbox__icon SimpleCheckbox__icon--indeterminate">
          <Icon20CheckBoxIndetermanate
            width={sizeY === SizeType.COMPACT || platform === VKCOM ? 20 : 24}
            height={sizeY === SizeType.COMPACT || platform === VKCOM ? 20 : 24}
          />
        </div>
      </div>
      {platform === VKCOM && <div vkuiClass="SimpleCheckbox__activeShadow" />}
    </Tappable>
  );
};

export default SimpleCheckbox;
