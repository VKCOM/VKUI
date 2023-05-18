import * as React from 'react';
import { HTMLAttributesWithRootRef } from '../../../../types';
import { RootComponent } from '../../../RootComponent/RootComponent';
import styles from '../../ModalSheet.module.css';

export type ContentProps = HTMLAttributesWithRootRef<HTMLDivElement>;

export const Content = (props: ContentProps) => (
  <RootComponent baseClassName={styles['ModalSheet__Content']} {...props} />
);
