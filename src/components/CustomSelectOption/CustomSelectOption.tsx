import React, { FC, HTMLAttributes, ReactNode } from 'react';
import SelectedIcon from '@vkontakte/icons/dist/16/done';
import classNames from '../../lib/classNames';
import { hasReactNode } from '../../lib/utils';

export interface CustomSelectOptionProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  index?: number;
  option?: any;
  selected?: boolean;
  focused?: boolean;
  hovered?: boolean;
  before?: ReactNode;
  after?: ReactNode;
}

const CustomSelectOption: FC<CustomSelectOptionProps> = ({
  label,
  index,
  hovered,
  selected,
  before,
  after,
  ...restProps
}) => {
  return (
    <div
      {...restProps}
      role="option"
      title={label}
      aria-posinset={index}
      aria-selected={selected}
      className={classNames('CustomSelectOption', {
        ['CustomSelectOption--hover']: hovered,
        ['CustomSelectOption--selected']: !!selected,
      })}
    >
      {hasReactNode(before) && <div className="CustomSelectOption__before">{before}</div>}
      {label}
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
