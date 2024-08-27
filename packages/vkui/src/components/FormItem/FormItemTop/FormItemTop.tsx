import type { HasComponent, HTMLAttributesWithRootRef } from '../../../types';
import { RootComponent } from '../../RootComponent/RootComponent';
import styles from '../FormItem.module.css';

export interface FormItemTopProps extends HTMLAttributesWithRootRef<HTMLDivElement>, HasComponent {}

/**
 * Служит оберткой для составной шапки поля, отвечая за выравнивание контента и расстановку отступов.
 *
 * @since 6.1.0
 *
 */
export const FormItemTop: React.FC<FormItemTopProps> = (props: FormItemTopProps) => (
  <RootComponent {...props} baseClassName={styles.FormItem__top} />
);

FormItemTop.displayName = 'FormItemTop';
