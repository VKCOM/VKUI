import * as React from 'react';
import { Icon28ChevronBack, Icon28ChevronLeftOutline, Icon28ArrowLeftOutline } from '@vkontakte/icons';
import { PanelHeaderButton, PanelHeaderButtonProps } from '../PanelHeaderButton/PanelHeaderButton';
import { ANDROID, VKCOM, IOS } from '../../lib/platform';
import { usePlatform } from '../../hooks/usePlatform';
import { withAdaptivity, SizeType, AdaptivityProps } from '../../hoc/withAdaptivity';
import { getClassName } from '../../helpers/getClassName';
import { classNames } from '../../lib/classNames';
import './PanelHeaderBack.css';

export type PanelHeaderBackProps = PanelHeaderButtonProps & AdaptivityProps & {
  'aria-label'?: string;
};

const PanelHeaderBack: React.FunctionComponent<PanelHeaderBackProps> = ({ label, sizeX, ...restProps }: PanelHeaderButtonProps & AdaptivityProps) => {
  const platform = usePlatform();
  const showLabel = platform === VKCOM || platform === IOS && sizeX === SizeType.REGULAR;

  return (
    <PanelHeaderButton
      {...restProps}
      vkuiClass={classNames(getClassName('PanelHeaderBack', platform), {
        'PanelHeaderBack--has-label': showLabel && !!label,
      })}
      label={showLabel && label}
    >
      {platform === ANDROID && <Icon28ArrowLeftOutline />}
      {platform === VKCOM && <Icon28ChevronLeftOutline />}
      {platform === IOS && <Icon28ChevronBack />}
    </PanelHeaderButton>
  );
};

PanelHeaderBack.defaultProps = {
  'aria-label': 'Назад',
};

export default React.memo(withAdaptivity(PanelHeaderBack, {
  sizeX: true,
}));
