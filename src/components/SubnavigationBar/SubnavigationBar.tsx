import * as React from 'react';
import { usePlatform } from '../../hooks/usePlatform';
import { classNames } from '../../lib/classNames';
import { getClassName } from '../../helpers/getClassName';
import HorizontalScroll from '../HorizontalScroll/HorizontalScroll';
import './SubnavigationBar.css';

export interface SubnavigationBarProps extends React.HTMLAttributes<HTMLDivElement> {
  mode?: 'fixed' | 'overflow';
}

export const SubnavigationBar: React.FC<SubnavigationBarProps> = (props: SubnavigationBarProps) => {
  const platform = usePlatform();
  const {
    mode,
    children,
    ...restProps
  } = props;

  const ScrollWrapper = mode === 'fixed' ? 'div' : HorizontalScroll;

  return (
    <div
      {...restProps}
      vkuiClass={classNames(getClassName('SubnavigationBar', platform), `SubnavigationBar--${mode}`)}
    >
      <ScrollWrapper vkuiClass="SubnavigationBar__in">
        <div vkuiClass="SubnavigationBar__scrollIn">
          {children}
        </div>
      </ScrollWrapper>
    </div>
  );
};

SubnavigationBar.defaultProps = {
  mode: 'overflow',
};
