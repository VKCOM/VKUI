import type { HasComponent, HasRender, HTMLAttributesWithRootRef } from '../../../types';
import { RootComponent } from '../../RootComponent/RootComponent';
import styles from '../FormItem.module.css';

export interface FormItemTopProps
  extends HTMLAttributesWithRootRef<HTMLDivElement>,
    HasComponent,
    HasRender<HTMLDivElement> {}

/**
 * Служит оберткой для составной шапки поля, отвечая за выравнивание контента и расстановку отступов.
 *
 * @since 6.1.0
 *
 */
export const FormItemTop = (props: FormItemTopProps) => (
  <RootComponent {...props} baseClassName={styles.top} />
);
