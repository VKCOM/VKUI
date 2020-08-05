import React, { FC, ReactNode, useCallback } from 'react';
import classNames from '../../lib/classNames';
import Icon16Cancel from '@vkontakte/icons/dist/16/cancel';
import { hasReactNode, noop } from '../../lib/utils';

type ChipValue = string | number;

export interface ChipProps {
  value: ChipValue;
  label: string;
  onRemove?: (value?: ChipValue) => void;
  removable?: boolean;
  className?: string;
  before?: ReactNode;
  after?: ReactNode;
}

const Chip: FC<ChipProps> = (props: ChipProps) => {
  const { value, label, onRemove, removable, className, before, after } = props;
  const onRemoveWrapper = useCallback(() => {
    onRemove(value);
  }, [onRemove, value]);

  return (
    <div className={classNames('Chip', className)}>
      <div className="Chip__in">
        {hasReactNode(before) && <div className="Chip__before">{before}</div>}
        <span className="Chip__content" title={label}>{label}</span>
        {hasReactNode(after) && <div className="Chip__after">{after}</div>}
        {removable && <>
          <div className="Chip__remove" onClick={onRemoveWrapper}>
            <Icon16Cancel fill="var(--icon_secondary)" />
          </div>
        </>}
      </div>
    </div>
  );
};

Chip.defaultProps = {
  removable: true,
  before: null,
  value: '',
  onRemove: noop,
};

export default Chip;
