'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useExternRef } from '../../hooks/useExternRef';
import type { HTMLAttributesWithRootRef } from '../../types';
import { ContentBadgeContext } from './ContentBadgeContext';
import styles from './ContentBadge.module.css';

const iconsClassNames = {
  m: null,
  l: styles.iconSlotSizeL,
};

const singleIconClassNames = {
  m: styles.singleIconSlotSizeM,
  l: styles.singleIconSlotSizeL,
};

type ContentBadgeIconSlotProps = HTMLAttributesWithRootRef<HTMLDivElement>;

export const ContentBadgeIconSlot = ({
  className,
  getRootRef: getRootRefProp,
  ref: refProp,
  children,
  ...restProps
}: ContentBadgeIconSlotProps) => {
  const getRootRef = useExternRef(getRootRefProp, refProp);
  const { size, isSingleChild } = React.useContext(ContentBadgeContext);

  if (size === 's') {
    return null;
  }

  return (
    <div
      ref={getRootRef}
      className={classNames(
        className,
        styles.iconSlot,
        isSingleChild ? singleIconClassNames[size] : iconsClassNames[size],
      )}
      {...restProps}
    >
      {children}
    </div>
  );
};
