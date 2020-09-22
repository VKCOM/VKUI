import React, { FC, MouseEvent, ReactNode } from 'react';
import SelectedIcon from '@vkontakte/icons/dist/16/done';
import classNames from '../../lib/classNames';
import { hasReactNode } from '../../lib/utils';

export interface CustomSelectOptionProps {
  label: string;
  index?: number;
  option?: any;
  selected?: boolean;
  focused?: boolean;
  hovered?: boolean;
  before?: ReactNode;
  after?: ReactNode;
  onClick?: () => void;
  onMouseDown?: (event: MouseEvent<HTMLElement>) => void;
  onMouseEnter?: (event: MouseEvent<HTMLElement>) => void;
}

const CustomSelectOption: FC<CustomSelectOptionProps> = ({
  label,
  index,
  hovered,
  selected,
  before,
  after,
  onClick,
  onMouseDown,
  onMouseEnter,
}) => {
  return (
    <div
      role="option"
      title={label}
      aria-posinset={index}
      aria-selected={selected}
      onClick={onClick}
      onMouseDown={onMouseDown}
      onMouseEnter={onMouseEnter}
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
