import { FC } from 'react';
import { Icon24Chevron } from '@vkontakte/icons';
import './HorizontalScrollArrow.css';

export interface HorizontalScrollArrowProps {
  onClick: () => void;
  direction: 'left' | 'right';
}

const HorizontalScrollArrow: FC<HorizontalScrollArrowProps> = (props) => {
  const { onClick, direction } = props;
  return (
    <div vkuiClass={`HorizontalScroll__arrow HorizontalScroll__arrow-${direction}`} onClick={onClick}>
      <div vkuiClass="HorizontalScroll__arrow-icon">
        <Icon24Chevron />
      </div>
    </div>
  );
};

export default HorizontalScrollArrow;
