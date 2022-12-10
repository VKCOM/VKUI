import * as React from 'react';
import { ACTIVE_EFFECT_DELAY, Tappable } from '../Tappable/Tappable';
import { classNamesString } from '../../lib/classNames';
import { Platform } from '../../lib/platform';
import {
  Icon20CheckBoxOn,
  Icon24CheckBoxOn,
  Icon20CheckBoxOff,
  Icon24CheckBoxOff,
  Icon20CheckBoxIndetermanate,
} from '@vkontakte/icons';
import { HasRef, HasRootRef } from '../../types';
import { usePlatform } from '../../hooks/usePlatform';
import { hasReactNode } from '../../lib/utils';
import { Footnote } from '../Typography/Footnote/Footnote';
import { getSizeYClassName } from '../../helpers/getSizeYClassName';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { useExternRef } from '../../hooks/useExternRef';
import { useAdaptivityConditionalRender } from '../../hooks/useAdaptivityConditionalRender';
import { VisuallyHiddenInput } from '../VisuallyHiddenInput/VisuallyHiddenInput';
import { warnOnce } from '../../lib/warnOnce';
import styles from './Checkbox.module.css';

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    HasRootRef<HTMLLabelElement>,
    HasRef<HTMLInputElement> {
  description?: React.ReactNode;
  indeterminate?: boolean;
  defaultIndeterminate?: boolean;
}

const warn = warnOnce('Checkbox');

/**
 * @see https://vkcom.github.io/VKUI/#/Checkbox
 */
export const Checkbox = ({
  children,
  className,
  style,
  getRootRef,
  getRef,
  description,
  indeterminate,
  defaultIndeterminate,
  onChange,
  ...restProps
}: CheckboxProps) => {
  const inputRef = useExternRef(getRef);
  const platform = usePlatform();
  const { sizeY } = useAdaptivity();
  const { sizeY: adaptiveSizeY } = useAdaptivityConditionalRender();

  React.useEffect(() => {
    const indeterminateValue = indeterminate === undefined ? defaultIndeterminate : indeterminate;

    if (inputRef.current) {
      inputRef.current.indeterminate = Boolean(indeterminateValue);
    }
  }, [defaultIndeterminate, indeterminate, inputRef]);

  const handleChange: CheckboxProps['onChange'] = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (
        defaultIndeterminate !== undefined &&
        indeterminate === undefined &&
        restProps.checked === undefined &&
        inputRef.current
      ) {
        inputRef.current.indeterminate = false;
      }
      if (indeterminate !== undefined && inputRef.current) {
        inputRef.current.indeterminate = indeterminate;
      }
      onChange && onChange(event);
    },
    [defaultIndeterminate, indeterminate, restProps.checked, onChange, inputRef],
  );

  if (process.env.NODE_ENV === 'development') {
    if (defaultIndeterminate && restProps.defaultChecked) {
      warn('defaultIndeterminate и defaultChecked не могут быть true одновременно', 'error');
    }

    if (indeterminate && restProps.checked) {
      warn('indeterminate и checked не могут быть true одновременно', 'error');
    }

    if (restProps.defaultChecked && restProps.checked) {
      warn('defaultChecked и checked не могут быть true одновременно', 'error');
    }
  }

  return (
    <Tappable
      Component="label"
      className={classNamesString(
        styles['Checkbox'],
        platform === Platform.VKCOM && styles['Checkbox--vkcom'],
        getSizeYClassName(styles['Checkbox'], sizeY),
        !(hasReactNode(children) || hasReactNode(description)) && styles['Checkbox--simple'],
        className,
      )}
      style={style}
      disabled={restProps.disabled}
      activeEffectDelay={platform === Platform.IOS ? 100 : ACTIVE_EFFECT_DELAY}
      getRootRef={getRootRef}
    >
      <VisuallyHiddenInput
        {...restProps}
        onChange={handleChange}
        type="checkbox"
        className={styles['Checkbox__input']}
        getRef={inputRef}
      />
      <div className={classNamesString(styles['Checkbox__icon'], styles['Checkbox__icon--on'])}>
        {platform === Platform.VKCOM ? (
          <Icon20CheckBoxOn />
        ) : (
          <React.Fragment>
            {adaptiveSizeY.compact && (
              <Icon20CheckBoxOn className={adaptiveSizeY.compact.className} />
            )}
            {adaptiveSizeY.regular && (
              <Icon24CheckBoxOn className={adaptiveSizeY.regular.className} />
            )}
          </React.Fragment>
        )}
      </div>
      <div className={classNamesString(styles['Checkbox__icon'], styles['Checkbox__icon--off'])}>
        {platform === Platform.VKCOM ? (
          <Icon20CheckBoxOff />
        ) : (
          <React.Fragment>
            {adaptiveSizeY.compact && (
              <Icon20CheckBoxOff className={adaptiveSizeY.compact.className} />
            )}
            {adaptiveSizeY.regular && (
              <Icon24CheckBoxOff className={adaptiveSizeY.regular.className} />
            )}
          </React.Fragment>
        )}
      </div>
      <div
        className={classNamesString(
          styles['Checkbox__icon'],
          styles['Checkbox__icon--indeterminate'],
        )}
      >
        {platform === Platform.VKCOM ? (
          <Icon20CheckBoxIndetermanate width={20} height={20} />
        ) : (
          <React.Fragment>
            {adaptiveSizeY.compact && (
              <Icon20CheckBoxIndetermanate
                className={adaptiveSizeY.compact.className}
                width={20}
                height={20}
              />
            )}
            {adaptiveSizeY.regular && (
              <Icon20CheckBoxIndetermanate
                className={adaptiveSizeY.regular.className}
                width={24}
                height={24}
              />
            )}
          </React.Fragment>
        )}
      </div>
      <div className={styles['Checkbox__content']}>
        <div className={styles['Checkbox__children']}>{children}</div>
        {hasReactNode(description) && (
          <Footnote className={styles['Checkbox__description']}>{description}</Footnote>
        )}
      </div>
    </Tappable>
  );
};
