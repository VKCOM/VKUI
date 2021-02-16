import { FC } from 'react';
import { Icon24Chevron } from '@vkontakte/icons';

export interface HorizontalScrollArrowProps {
  onClick: () => void;
  direction: 'left' | 'right';
}

const HorizontalScrollArrow: FC<HorizontalScrollArrowProps> = (props) => {
  const { onClick, direction } = props;
  return (
    <div className={`HorizontalScroll__arrow HorizontalScroll__arrow-${direction}`} onClick={onClick}>
      <div className="HorizontalScroll__arrow-icon">
        <Icon24Chevron />
      </div>
    </div>
  );
};

export default HorizontalScrollArrow;
