import { HTMLAttributes, FunctionComponent } from 'react';
import { getClassName } from '../../helpers/getClassName';
import { usePlatform } from '../../hooks/usePlatform';
import { HasRootRef } from '../../types';

export interface DivProps extends HTMLAttributes<HTMLDivElement>, HasRootRef<HTMLDivElement> {}

export const Div: FunctionComponent<DivProps> = ({ children, getRootRef, ...restProps }: DivProps) => {
  const platform = usePlatform();
  return (
    <div {...restProps} ref={getRootRef} vkuiClass={getClassName('Div', platform)}>
      {children}
    </div>
  );
};

export default Div;
