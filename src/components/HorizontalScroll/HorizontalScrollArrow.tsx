import { FC } from 'react';
import { Icon24Chevron } from '@vkontakte/icons';
import { usePlatform } from '../../hooks/usePlatform';
import { getClassName } from '../../helpers/getClassName';
import { classNames } from '../../lib/classNames';
import Tappable from '../Tappable/Tappable';

export interface HorizontalScrollArrowProps {
  onClick: () => void;
  direction: 'left' | 'right';
}

const HorizontalScrollArrow: FC<HorizontalScrollArrowProps> = ({ onClick, direction }: HorizontalScrollArrowProps) => {
  const platform = usePlatform();

  return (
    <Tappable
      Component="button"
      hasHover={false}
      hasActive={false}
      vkuiClass={classNames(
        getClassName('HorizontalScrollArrow', platform),
        `HorizontalScrollArrow--${direction}`,
      )}
      onClick={onClick}
    >
      <span vkuiClass="HorizontalScrollArrow__icon">
        <Icon24Chevron />
      </span>
    </Tappable>
  );
};

export default HorizontalScrollArrow;
