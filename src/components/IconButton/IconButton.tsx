import { ReactNode, FunctionComponent } from 'react';
import Tappable, { TappableProps } from '../Tappable/Tappable';
import { getClassName } from '../../helpers/getClassName';
import { classNames } from '../../lib/classNames';
import { usePlatform } from '../../hooks/usePlatform';
import { withAdaptivity } from '../../hoc/withAdaptivity';
import { IOS } from '../../lib/platform';
import './IconButton.css';

export interface IconButtonProps extends TappableProps {
  /**
   * @deprecated будет удалено в 5.0.0. Используйте `children`
   */
  icon?: ReactNode;
}

const IconButton: FunctionComponent<IconButtonProps> = ({
  icon,
  sizeY,
  children,
  ...restProps
}: IconButtonProps) => {
  const Component = restProps.href ? 'a' : 'button';
  const platform = usePlatform();

  return (
    <Tappable
      {...restProps}
      Component={Component}
      activeEffectDelay={200}
      activeMode={platform === IOS ? 'opacity' : 'IconButton--active'}
      vkuiClass={classNames(
        getClassName('IconButton', platform),
        `IconButton--sizeY-${sizeY}`,
      )}
    >
      {icon || children}
    </Tappable>
  );
};

export default withAdaptivity(IconButton, {
  sizeY: true,
});
