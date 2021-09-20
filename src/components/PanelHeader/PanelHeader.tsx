import * as React from 'react';
import { usePlatform } from '../../hooks/usePlatform';
import { getClassName } from '../../helpers/getClassName';
import { classNames } from '../../lib/classNames';
import FixedLayout from '../FixedLayout/FixedLayout';
import Separator from '../Separator/Separator';
import { Platform, VKCOM } from '../../lib/platform';
import { HasRef, HasRootRef } from '../../types';
import { ConfigProviderContext, WebviewType } from '../ConfigProvider/ConfigProviderContext';
import { AdaptivityProps, SizeType, withAdaptivity } from '../../hoc/withAdaptivity';
import { isPrimitiveReactNode } from '../../lib/utils';
import Text from '../Typography/Text/Text';
import { TooltipContainer } from '../Tooltip/TooltipContainer';
import './PanelHeader.css';

export interface PanelHeaderProps extends
  React.HTMLAttributes<HTMLDivElement>,
  HasRef<HTMLDivElement>,
  HasRootRef<HTMLDivElement>,
  AdaptivityProps {
  left?: React.ReactNode;
  right?: React.ReactNode;
  separator?: boolean;
  transparent?: boolean;
  shadow?: boolean;
  /**
   * Если `false`, то шапка будет нулевой высоты и контент панели "залезет" под неё
   */
  visor?: boolean;
  /**
   * Если `false`, то шапка будет в потоке. По умолчанию `true`, но если платформа vkcom, то по умолчанию `false`.
   */
  fixed?: boolean;
}

const PanelHeaderInTypography: React.FC<PanelHeaderProps> = ({ children }: PanelHeaderProps) => {
  const platform = usePlatform();

  return platform === VKCOM
    ? <Text weight="medium">{children}</Text>
    : <span vkuiClass="PanelHeader__content-in">{children}</span>;
};

const PanelHeaderIn: React.FC<PanelHeaderProps> = ({ children, left, right }) => {
  const { webviewType } = React.useContext(ConfigProviderContext);
  const isPrimitive = isPrimitiveReactNode(children);

  return (
    <TooltipContainer fixed vkuiClass="PanelHeader__in">
      <div vkuiClass="PanelHeader__left">
        {left}
      </div>
      <div vkuiClass="PanelHeader__content">
        {isPrimitive ? <PanelHeaderInTypography>{children}</PanelHeaderInTypography> : children}
      </div>
      <div vkuiClass="PanelHeader__right">
        {webviewType !== WebviewType.VKAPPS && right}
      </div>
    </TooltipContainer>
  );
};

const PanelHeader: React.FC<PanelHeaderProps> = (props: PanelHeaderProps) => {
  const {
    left,
    children,
    right,
    separator,
    visor,
    transparent,
    shadow,
    getRef,
    getRootRef,
    sizeX,
    sizeY,
    fixed,
    ...restProps
  } = props;
  const platform = usePlatform();
  const { webviewType } = React.useContext(ConfigProviderContext);
  const needShadow = shadow && sizeX === SizeType.REGULAR;
  let isFixed = fixed !== undefined ? fixed : platform !== Platform.VKCOM;

  return (
    <div
      {...restProps}
      vkuiClass={
        classNames(
          getClassName('PanelHeader', platform),
          {
            'PanelHeader--trnsp': transparent,
            'PanelHeader--shadow': needShadow,
            'PanelHeader--vis': visor,
            'PanelHeader--sep': separator && visor,
            'PanelHeader--vkapps': webviewType === WebviewType.VKAPPS,
            'PanelHeader--no-left': !left,
            'PanelHeader--no-right': !right,
            'PanelHeader--fixed': isFixed,
          },
          `PanelHeader--sizeX-${sizeX}`,
        )
      }
      ref={isFixed ? getRootRef : getRef}
    >
      {isFixed ?
        <FixedLayout vkuiClass="PanelHeader__fixed" vertical="top" getRootRef={getRef}>
          <PanelHeaderIn {...props} />
        </FixedLayout> :
        <PanelHeaderIn {...props} />
      }
      {separator && visor && platform !== VKCOM && <Separator
        vkuiClass="PanelHeader__separator"
        expanded={sizeX === SizeType.REGULAR}
      />}
    </div>
  );
};

PanelHeader.defaultProps = {
  separator: true,
  transparent: false,
  visor: true,
};

export default withAdaptivity(PanelHeader, {
  sizeX: true,
  sizeY: true,
});
