'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useConfigDirection } from '../../hooks/useConfigDirection';
import { useGlobalEventListener } from '../../hooks/useGlobalEventListener';
import { useDOM } from '../../lib/dom';
import { type CSSCustomProperties } from '../../types';
import { IconButton } from '../IconButton/IconButton';
import { Tappable } from '../Tappable/Tappable';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';
import { type RemovableIosRenderProps, type RemovableProps } from './Removable';
import styles from './Removable.module.css';

/* eslint-disable jsdoc/require-jsdoc */
interface RemovableIosOwnProps extends RemovableProps {
  indent?: boolean;
  removePlaceholderString?: string;
  children?: React.ReactNode | ((renderProps: RemovableIosRenderProps) => React.ReactNode);
}
/* eslint-enable jsdoc/require-jsdoc */

const RemovableIosWithRemove = ({
  onRemove,
  removePlaceholder,
  removePlaceholderString,
  children: childrenProp,
  toggleButtonTestId,
  removeButtonTestId,
  disabled,
}: Omit<RemovableIosOwnProps, 'indent'>) => {
  const direction = useConfigDirection();
  const isRtl = direction === 'rtl';
  const { window } = useDOM();

  const removeButtonRef = React.useRef<HTMLElement>(null);
  const disabledRef = React.useRef(true);
  const [removeOffset, updateRemoveOffset] = React.useState(0);

  useGlobalEventListener(
    window,
    'click',
    () => {
      if (removeOffset > 0) {
        updateRemoveOffset(0);
      }
    },
    { capture: true },
  );

  const onRemoveTransitionEnd = () => {
    if (removeOffset > 0) {
      removeButtonRef?.current?.focus();
    } else {
      disabledRef.current = true;
    }
  };

  const onRemoveActivateClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!removeButtonRef.current) {
      return;
    }
    const { offsetWidth } = removeButtonRef.current;
    disabledRef.current = false;
    updateRemoveOffset(offsetWidth);
  };

  const style: CSSCustomProperties = {
    '--vkui_internal_Removable_remove_offset': String(removeOffset ?? 0),
  };

  return (
    <div
      className={classNames(styles.content, isRtl && styles.rtl, 'vkuiInternalRemovable__content')}
      style={style}
      onTransitionEnd={onRemoveTransitionEnd}
    >
      <IconButton
        hasActive={false}
        hasHover={false}
        className={classNames(styles.action, styles.toggle, 'vkuiInternalRemovable__action')}
        onClick={onRemoveActivateClick}
        disabled={removeOffset > 0 || disabled}
        data-testid={toggleButtonTestId}
      >
        <VisuallyHidden>{removePlaceholderString}</VisuallyHidden>
        <i className={styles.toggleIn} role="presentation" />
      </IconButton>
      {typeof childrenProp === 'function'
        ? childrenProp({ isRemoving: removeOffset > 0 })
        : childrenProp}

      <span className={styles.offset} aria-hidden />

      <Tappable
        Component="button"
        hasActive={false}
        hasHover={false}
        disabled={disabledRef.current}
        getRootRef={removeButtonRef}
        className={styles.remove}
        onClick={onRemove}
        data-testid={removeButtonTestId}
      >
        <span className={styles.removeIn}>{removePlaceholder}</span>
      </Tappable>
    </div>
  );
};

const RemovableIosWithIndent = ({
  children: childrenProp,
}: Pick<RemovableIosOwnProps, 'children'>) => {
  return (
    <div className={classNames(styles.content, 'vkuiInternalRemovable__content')}>
      <div
        className={classNames(styles.action, styles.indentation, 'vkuiInternalRemovable__action')}
      />
      {typeof childrenProp === 'function' ? childrenProp({ isRemoving: false }) : childrenProp}

      <span className={styles.offset} aria-hidden />
    </div>
  );
};

const RemovableIos = ({ indent, children, ...restProps }: RemovableIosOwnProps) => {
  return indent ? (
    <RemovableIosWithIndent>{children}</RemovableIosWithIndent>
  ) : (
    <RemovableIosWithRemove {...restProps}>{children}</RemovableIosWithRemove>
  );
};

export { RemovableIos };
