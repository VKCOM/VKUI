import { FC, HTMLAttributes } from 'react';
import { usePlatform } from '../../hooks/usePlatform';
import { classNames } from '../../lib/classNames';
import { getClassName } from '../../helpers/getClassName';
import HorizontalScroll from '../HorizontalScroll/HorizontalScroll';

export interface SubnavigationBarProps extends HTMLAttributes<HTMLDivElement> {
  mode?: 'fixed' | 'overflow';
}

export const SubnavigationBar: FC<SubnavigationBarProps> = (props: SubnavigationBarProps) => {
  const platform = usePlatform();
  const {
    mode,
    className,
    children,
    ...restProps
  } = props;

  const ScrollWrapper = mode === 'fixed' ? 'div' : HorizontalScroll;

  return (
    <div
      {...restProps}
      className={classNames(getClassName('SubnavigationBar', platform), `SubnavigationBar--${mode}`, className)}
    >
      <ScrollWrapper className="SubnavigationBar__in">
        <div className="SubnavigationBar__scrollIn">
          <div className="SubnavigationBar__gap" />
          {children}
          <div className="SubnavigationBar__gap" />
        </div>
      </ScrollWrapper>
    </div>
  );
};

SubnavigationBar.defaultProps = {
  mode: 'overflow',
};
