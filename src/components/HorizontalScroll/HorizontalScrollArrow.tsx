import { FC } from 'react';
import { Icon24Chevron } from '@vkontakte/icons';
import { usePlatform } from '../../hooks/usePlatform';
import { getClassName } from '../../helpers/getClassName';
import { classNames } from '../../lib/classNames';

export interface HorizontalScrollArrowProps {
  onClick: () => void;
  direction: 'left' | 'right';
}

const HorizontalScrollArrow: FC<HorizontalScrollArrowProps> = ({ onClick, direction }: HorizontalScrollArrowProps) => {
  const platform = usePlatform();

  return (
    <button
      type="button"
      vkuiClass={classNames(
        getClassName('HorizontalScroll__arrow', platform),
        `HorizontalScroll__arrow-${direction}`,
      )}
      onClick={onClick}
    >
      <span vkuiClass="HorizontalScroll__arrow-icon">
        <Icon24Chevron />
      </span>
    </button>
  );
};

export default HorizontalScrollArrow;
