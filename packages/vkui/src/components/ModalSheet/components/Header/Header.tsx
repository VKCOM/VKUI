import * as React from 'react';
import { HTMLAttributesWithRootRef } from '../../../../types';
import { RootComponent } from '../../../RootComponent/RootComponent';
import styles from '../../ModalSheet.module.css';

export type HeaderProps = HTMLAttributesWithRootRef<HTMLDivElement>;

export const Header = (props: HeaderProps) => (
  <RootComponent baseClassName={styles['ModalSheet__header']} {...props} />
);
