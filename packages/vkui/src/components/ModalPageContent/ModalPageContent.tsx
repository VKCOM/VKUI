'use client';

import { classNames } from '@vkontakte/vkjs';
import type { HTMLAttributesWithRootRef } from '../../types';
import { CustomScrollView } from '../CustomScrollView/CustomScrollView';
import styles from './ModalPageContent.module.css';

export type ModalPageContentProps = HTMLAttributesWithRootRef<HTMLDivElement>;

export const ModalPageContent = ({
  children,
  className,
  getRootRef,
  ...restProps
}: ModalPageContentProps) => {
  return (
    <CustomScrollView
      className={classNames(className, styles.host)}
      getRootRef={getRootRef}
      {...restProps}
    >
      {children}
    </CustomScrollView>
  );
};
