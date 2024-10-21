'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
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

export type ContentBadgeSlotIconProps = HTMLAttributesWithRootRef<HTMLDivElement>;

export const ContentBadgeSlotIcon: React.FC<ContentBadgeSlotIconProps> = ({
  className,
  getRootRef,
  children,
  ...restProps
}: ContentBadgeSlotIconProps) => {
  const { size, isSingleChild } = React.useContext(ContentBadgeContext);

  if (size === 's') {
    return null;
  }

  return (
    <div
      ref={getRootRef}
      className={classNames(
        className,
        isSingleChild ? singleIconClassNames[size] : iconsClassNames[size],
      )}
      {...restProps}
    >
      {children}
    </div>
  );
};

ContentBadgeSlotIcon.displayName = 'ContentBadgeSlotIcon';
