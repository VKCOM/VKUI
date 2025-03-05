import * as React from 'react';
import { RootComponent, type RootComponentProps } from '../RootComponent/RootComponent';
import { Separator } from '../Separator/Separator';
import styles from './CellButtonGroup.module.css';

export type CellButtonGroupProps = Omit<
  RootComponentProps<HTMLElement>,
  'baseClassName' | 'baseStyle'
>;

/**
 * @see https://vkcom.github.io/VKUI/#/CellButtonGroup
 */
export const CellButtonGroup = ({
  children,
  ...restProps
}: CellButtonGroupProps): React.ReactNode => {
  return (
    <RootComponent baseClassName={styles.host} role="group" {...restProps}>
      {React.Children.toArray(children).map((child, index) => (
        <React.Fragment key={index}>
          {index > 0 && <Separator className={styles.separator} padding direction="vertical" />}
          {child}
        </React.Fragment>
      ))}
    </RootComponent>
  );
};
