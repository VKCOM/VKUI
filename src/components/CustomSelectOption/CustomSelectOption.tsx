import React, { FC } from 'react';
import SelectedIcon from '@vkontakte/icons/dist/16/done';
import classNames from '../../lib/classNames';
import { CustomSelectOptionProps } from './types';
import { hasReactNode, noop } from '../../lib/utils';

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

CustomSelectOption.defaultProps = {
  onClick: noop,
  onMouseDown: noop,
  onMouseEnter: noop,
};

export default CustomSelectOption;
