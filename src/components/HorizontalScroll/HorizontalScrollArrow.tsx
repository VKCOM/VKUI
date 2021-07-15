import { FC } from 'react';
import { Icon24Chevron } from '@vkontakte/icons';

export interface HorizontalScrollArrowProps {
  onClick: () => void;
  direction: 'left' | 'right';
}

const HorizontalScrollArrow: FC<HorizontalScrollArrowProps> = (props: HorizontalScrollArrowProps) => {
  const { onClick, direction } = props;
  return (
    <button
      type="button"
      vkuiClass={`HorizontalScroll__arrow HorizontalScroll__arrow-${direction}`}
      onClick={onClick}
    >
      <span vkuiClass="HorizontalScroll__arrow-icon">
        <Icon24Chevron />
      </span>
    </button>
  );
};

export default HorizontalScrollArrow;
