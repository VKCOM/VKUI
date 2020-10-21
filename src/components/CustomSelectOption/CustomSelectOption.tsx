import React, { FC, HTMLAttributes, ReactNode } from 'react';
import SelectedIcon from '@vkontakte/icons/dist/16/done';
import classNames from '../../lib/classNames';
import { hasReactNode } from '../../lib/utils';

export interface CustomSelectOptionProps extends HTMLAttributes<HTMLDivElement> {
  option?: any;
  selected?: boolean;
  focused?: boolean;
  hovered?: boolean;
  before?: ReactNode;
  after?: ReactNode;
}

const CustomSelectOption: FC<CustomSelectOptionProps> = ({
  children,
  hovered,
  selected,
  before,
  after,
  ...restProps
}) => {
  const title = typeof children === 'string' ? children : null;

  return (
    <div
      {...restProps}
      role="option"
      title={title}
      aria-selected={selected}
      className={classNames('CustomSelectOption', {
        ['CustomSelectOption--hover']: hovered,
        ['CustomSelectOption--selected']: !!selected,
      })}
    >
      {hasReactNode(before) && <div className="CustomSelectOption__before">{before}</div>}
      {children}
      {hasReactNode(after) && <div className="CustomSelectOption__after">{after}</div>}
      {selected && (
        <div className="CustomSelectOption__selectedIcon">
          <SelectedIcon fill="var(--accent)" />
        </div>
      )}
    </div>
  );
};

export default CustomSelectOption;
