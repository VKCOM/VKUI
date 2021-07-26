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
        getClassName('HorizontalScrollArrow', platform),
        `HorizontalScrollArrow--${direction}`,
      )}
      onClick={onClick}
    >
      <span vkuiClass="HorizontalScrollArrow__icon">
        <Icon24Chevron />
      </span>
    </button>
  );
};

export default HorizontalScrollArrow;
