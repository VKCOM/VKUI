import * as React from 'react';
import {
  Icon20CheckBoxIndetermanate,
  Icon20CheckBoxOff,
  Icon20CheckBoxOn,
  Icon24CheckBoxOff,
  Icon24CheckBoxOn,
} from '@vkontakte/icons';
import { classNames, hasReactNode } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { useAdaptivityConditionalRender } from '../../hooks/useAdaptivityConditionalRender';
import { useExternRef } from '../../hooks/useExternRef';
import { usePlatform } from '../../hooks/usePlatform';
import { warnOnce } from '../../lib/warnOnce';
import { HasRef, HasRootRef } from '../../types';
import { DEFAULT_ACTIVE_EFFECT_DELAY } from '../Clickable/useState';
import { Tappable, type TappableProps } from '../Tappable/Tappable';
import { Footnote } from '../Typography/Footnote/Footnote';
import { Text } from '../Typography/Text/Text';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';
import styles from './Checkbox.module.css';

const sizeYClassNames = {
  none: styles['Checkbox--sizeY-none'],
  ['compact']: styles['Checkbox--sizeY-compact'],
};

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    HasRootRef<HTMLLabelElement>,
    HasRef<HTMLInputElement>,
    Pick<
      TappableProps,
      'hoverMode' | 'activeMode' | 'hasHover' | 'hasActive' | 'focusVisibleMode'
    > {
  description?: React.ReactNode;
  indeterminate?: boolean;
  defaultIndeterminate?: boolean;
  titleAfter?: React.ReactNode;
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
  hoverMode,
  activeMode,
  hasHover,
  hasActive,
  focusVisibleMode,
  onChange,
  titleAfter,
  ...restProps
}: CheckboxProps) => {
  const inputRef = useExternRef(getRef);
  const platform = usePlatform();
  const { sizeY = 'none' } = useAdaptivity();
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
      className={classNames(
        styles['Checkbox'],
        sizeY !== 'regular' && sizeYClassNames[sizeY],
        !(hasReactNode(children) || hasReactNode(description)) && styles['Checkbox--simple'],
        className,
      )}
      style={style}
      disabled={restProps.disabled}
      activeEffectDelay={platform === 'ios' ? 100 : DEFAULT_ACTIVE_EFFECT_DELAY}
      getRootRef={getRootRef}
      hoverMode={hoverMode}
      activeMode={activeMode}
      hasHover={hasHover}
      hasActive={hasActive}
      focusVisibleMode={focusVisibleMode}
    >
      <VisuallyHidden
        {...restProps}
        Component="input"
        type="checkbox"
        onChange={handleChange}
        className={styles['Checkbox__input']}
        getRootRef={inputRef}
      />
      <div className={classNames(styles['Checkbox__icon'], styles['Checkbox__icon--on'])}>
        {platform === 'vkcom' ? (
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
      <div className={classNames(styles['Checkbox__icon'], styles['Checkbox__icon--off'])}>
        {platform === 'vkcom' ? (
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
        className={classNames(styles['Checkbox__icon'], styles['Checkbox__icon--indeterminate'])}
      >
        {platform === 'vkcom' ? (
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
        <div className={styles['Checkbox__title']}>
          <Text className={styles['Checkbox__titleBefore']}>{children}</Text>
          <div className={styles['Checkbox__titleAfter']}>{titleAfter}</div>
        </div>
        {hasReactNode(description) && (
          <Footnote className={styles['Checkbox__description']}>{description}</Footnote>
        )}
      </div>
    </Tappable>
  );
};
