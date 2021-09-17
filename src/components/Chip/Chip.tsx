import * as React from 'react';
import { Icon16Cancel } from '@vkontakte/icons';
import { getTitleFromChildren, hasReactNode, noop } from '../../lib/utils';
import { classNames } from '../../lib/classNames';
import Caption from '../Typography/Caption/Caption';
import Tappable from '../Tappable/Tappable';
import './Chip.css';

type ChipValue = string | number;

export interface ChipProps extends React.HTMLAttributes<HTMLDivElement> {
  value: ChipValue;
  option?: { value?: ChipValue };
  onRemove?: (event?: React.MouseEvent, value?: ChipValue) => void;
  removable?: boolean;
  removeAriaLabel?: string;
  before?: React.ReactNode;
  after?: React.ReactNode;
}

const Chip: React.FC<ChipProps> = ({
  value = '',
  option,
  removable = true,
  onRemove = noop,
  removeAriaLabel = 'Удалить',
  before = null,
  after,
  children,
  ...restProps
}: ChipProps) => {
  const onRemoveWrapper = React.useCallback((event: React.MouseEvent) => {
    onRemove(event, value);
  }, [onRemove, value]);
  const title = getTitleFromChildren(children);

  return (
    <div
      vkuiClass={classNames('Chip', { 'Chip--removable': removable })}
      role="option"
      aria-label={title}
      {...restProps}
    >
      <div vkuiClass="Chip__in" role="presentation">
        {hasReactNode(before) && <div vkuiClass="Chip__before">{before}</div>}
        <Caption level="1" weight="regular" vkuiClass="Chip__content" title={title} aria-hidden="true">{children}</Caption>
        {hasReactNode(after) && <div vkuiClass="Chip__after">{after}</div>}

        {removable &&
          <Tappable
            Component="button"
            vkuiClass="Chip__remove"
            onClick={onRemoveWrapper}
            hasHover={false}
            hasActive={false}
            aria-label={`${removeAriaLabel} ${title}`}
          >
            <Icon16Cancel aria-hidden={true} />
          </Tappable>
        }
      </div>
    </div>
  );
};

export default Chip;
