import { ReactNode, FunctionComponent } from 'react';
import Tappable, { TappableProps } from '../Tappable/Tappable';
import { getClassName } from '../../helpers/getClassName';
import { classNames } from '../../lib/classNames';
import { usePlatform } from '../../hooks/usePlatform';
import { withAdaptivity } from '../../hoc/withAdaptivity';
import { IOS } from '../../lib/platform';

export interface IconButtonProps extends TappableProps {
  /**
   * @deprecated будет удалено в 5.0.0. Используйте `children`
   */
  icon?: ReactNode;
  /**
   * Задайте вашей кнопке текстовое содержание для повышения ее доступности.
   */
  'aria-label'?: string;
}

const IconButton: FunctionComponent<IconButtonProps> = ({
  icon,
  sizeY,
  children,
  Component,
  ...restProps
}: IconButtonProps) => {
  const platform = usePlatform();

  return (
    <Tappable
      {...restProps}
      Component={restProps.href ? 'a' : Component}
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

IconButton.defaultProps = {
  Component: 'button',
};

export default withAdaptivity(IconButton, {
  sizeY: true,
});
