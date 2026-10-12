'use client';

import { classNames } from '@vkontakte/vkjs';
import { useExternRef } from '../../hooks/useExternRef';
import type { HTMLAttributesWithRootRef } from '../../types';
import { CustomScrollView } from '../CustomScrollView/CustomScrollView';
import styles from './ModalPageContent.module.css';

export type ModalPageContentProps = HTMLAttributesWithRootRef<HTMLDivElement>;

export const ModalPageContent = ({
  children,
  className,
  getRootRef: getRootRefProp,
  ref: refProp,
  ...restProps
}: ModalPageContentProps) => {
  const getRootRef = useExternRef(getRootRefProp, refProp);
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
