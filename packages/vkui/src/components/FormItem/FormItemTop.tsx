import * as React from 'react';
import { HasComponent, HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './FormItem.module.css';

export interface FormItemTopProps extends HTMLAttributesWithRootRef<HTMLDivElement>, HasComponent {}

export const FormItemTop = (props: FormItemTopProps) => (
  <RootComponent {...props} baseClassName={styles.FormItem__top} />
);
