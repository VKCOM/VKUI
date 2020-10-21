import React, { FC, HTMLAttributes, ReactNode, useCallback, MouseEvent } from 'react';
import classNames from '../../lib/classNames';
import Icon16Cancel from '@vkontakte/icons/dist/16/cancel';
import { getTitleFromChildren, hasReactNode, noop } from '../../lib/utils';

type ChipValue = string | number;

export interface ChipProps extends HTMLAttributes<HTMLDivElement> {
  value: ChipValue;
  onRemove?: (event?: MouseEvent, value?: ChipValue) => void;
  removable?: boolean;
  before?: ReactNode;
  after?: ReactNode;
}

const Chip: FC<ChipProps> = (props: ChipProps) => {
  const { value, onRemove, removable, className, before, after, children, ...restProps } = props;
  const onRemoveWrapper = useCallback((event: MouseEvent) => {
    onRemove(event, value);
  }, [onRemove, value]);
  const title = getTitleFromChildren(children);

  return (
    <div className={classNames('Chip', className)} {...restProps}>
      <div className="Chip__in">
        {hasReactNode(before) && <div className="Chip__before">{before}</div>}
        <span className="Chip__content" title={title}>{children}</span>
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
