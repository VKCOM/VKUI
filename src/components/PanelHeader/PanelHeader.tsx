import React, { FC, HTMLAttributes, ReactNode, useContext } from 'react';
import { usePlatform } from '../../hooks/usePlatform';
import { getClassName } from '../../helpers/getClassName';
import { classNames } from '../../lib/classNames';
import FixedLayout from '../FixedLayout/FixedLayout';
import Separator from '../Separator/Separator';
import { VKCOM } from '../../lib/platform';
import { HasRef, HasRootRef } from '../../types';
import { ConfigProviderContext, WebviewType } from '../ConfigProvider/ConfigProviderContext';
import { withAdaptivity, AdaptivityProps, SizeType } from '../../hoc/withAdaptivity';
import { isPrimitiveReactNode } from '../../lib/utils';
import Text from '../Typography/Text/Text';
import { TooltipContainer } from '../Tooltip/TooltipContainer';

export interface PanelHeaderProps extends
  HTMLAttributes<HTMLDivElement>,
  HasRef<HTMLDivElement>,
  HasRootRef<HTMLDivElement>,
  AdaptivityProps {
  left?: ReactNode;
  right?: ReactNode;
  separator?: boolean;
  transparent?: boolean;
  shadow?: boolean;
  /**
   * Если `false`, то шапка будет нулевой высоты и контент панели "залезет" под неё
   */
  visor?: boolean;
  /**
   * Если `false`, то шапка будет в потоке
   */
  fixed?: boolean;
}

const PanelHeaderInTypography: FC<PanelHeaderProps> = ({ children }: PanelHeaderProps) => {
  const platform = usePlatform();

  return platform === VKCOM
    ? <Text Component="span" weight="medium">{children}</Text>
    : <span className="PanelHeader__content-in">{children}</span>;
};

const PanelHeaderIn: FC<PanelHeaderProps> = ({ children, left, right }) => {
  const { webviewType } = useContext(ConfigProviderContext);
  const isPrimitive = isPrimitiveReactNode(children);

  return (
    <TooltipContainer fixed className="PanelHeader__in">
      <div className="PanelHeader__left">
        {left}
      </div>
      <div className="PanelHeader__content">
        {isPrimitive ? <PanelHeaderInTypography>{children}</PanelHeaderInTypography> : children}
      </div>
      <div className="PanelHeader__right">
        {webviewType !== WebviewType.VKAPPS && right}
      </div>
    </TooltipContainer>
  );
};

const PanelHeader: FC<PanelHeaderProps> = (props) => {
  const {
    className,
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
  const { webviewType } = useContext(ConfigProviderContext);
  const needShadow = shadow && sizeX === SizeType.REGULAR;
  const isFixed = platform === VKCOM ? false : fixed;

  return (
    <div
      {...restProps}
      className={
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
          className,
        )
      }
      ref={isFixed ? getRootRef : getRef}
    >
      {isFixed ?
        <FixedLayout className="PanelHeader__fixed" vertical="top" getRootRef={getRef}>
          <PanelHeaderIn {...props} />
        </FixedLayout> :
        <PanelHeaderIn {...props} />
      }
      {separator && visor && platform !== VKCOM && <Separator
        className="PanelHeader__separator"
        expanded={sizeX === SizeType.REGULAR}
      />}
    </div>
  );
};

PanelHeader.defaultProps = {
  separator: true,
  transparent: false,
  visor: true,
  fixed: true,
};

export default withAdaptivity(PanelHeader, {
  sizeX: true,
  sizeY: true,
});
