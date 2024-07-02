import * as React from 'react';
import { HTMLAttributesWithRootRef } from '../../../../types';
import { RootComponent } from '../../../RootComponent/RootComponent';
import styles from '../../ModalSheet.module.css';

export type FooterProps = HTMLAttributesWithRootRef<HTMLDivElement>;

export const Footer = (props: FooterProps) => (
  <RootComponent baseClassName={styles['ModalSheet__footer']} {...props} />
);
