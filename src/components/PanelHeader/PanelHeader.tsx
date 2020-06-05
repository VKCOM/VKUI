import React, { HTMLAttributes, ReactNode, useContext } from 'react';
import usePlatform from '../../hooks/usePlatform';
import getClassname from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import FixedLayout from '../FixedLayout/FixedLayout';
import Separator from '../Separator/Separator';
import { ANDROID } from '../../lib/platform';
import { HasRef, HasRootRef } from '../../types';
import { ConfigProviderContext, WebviewType } from '../ConfigProvider/ConfigProviderContext';
import { PanelContext } from '../Panel/PanelContext';
import withAdaptivity, { AdaptivityProps, SizeType } from '../../hoc/withAdaptivity';
import { SplitContext } from '../SplitLayout/SplitLayout';

export interface PanelHeaderProps extends HTMLAttributes<HTMLDivElement>, HasRef<HTMLDivElement>, HasRootRef<HTMLDivElement>, AdaptivityProps {
  left?: ReactNode;
  /**
   * @deprecated будет удалено в 4-й версии. Раньше использовалось, как текстовое дополнение к PanelHeaderBack в iOS.
   */
  addon?: ReactNode;
  right?: ReactNode;
  separator?: boolean;
  transparent?: boolean;
  shadow?: boolean;
  /**
   * Если `false`, то шапка будет нулевой высоты и контент панели "залезет" под неё
   */
  visor?: boolean;
}

const PanelHeader = ({
  className,
  left,
  addon,
  children,
  right,
  separator,
  visor,
  transparent,
  shadow,
  getRef,
  getRootRef,
  sizeX,
  ...restProps
}: PanelHeaderProps) => {
  const platform = usePlatform();
  const { webviewType } = useContext(ConfigProviderContext);
  const panelContext = useContext(PanelContext);
  const splitContext = useContext(SplitContext);
  const needShadow = shadow && sizeX === SizeType.REGULAR;
  let needSeparator = separator;

  if (typeof separator !== 'boolean') {
    needSeparator = panelContext.separator;
  }

  const isPrimitive = typeof children === 'string' || typeof children === 'number';

  if (!right && splitContext && splitContext.headerRight) {
    right = React.cloneElement(splitContext.headerRight);
  }

  return (
    <div
      {...restProps}
      className={
        classNames(
          getClassname('PanelHeader', platform),
          {
            'PanelHeader--trnsp': transparent,
            'PanelHeader--shadow': needShadow,
            'PanelHeader--vis': visor,
            'PanelHeader--sep': needSeparator && visor,
            'PanelHeader--vkapps': webviewType === WebviewType.VKAPPS,
            'PanelHeader--no-left': left === undefined,
            'PanelHeader--no-right': right === undefined,
          },
          className,
        )
      }
      ref={getRootRef}
    >
      <FixedLayout
        vertical="top"
        className={
          classNames(
            'PanelHeader__fixed',
            {
              'PanelHeader__fixed--shadow': needShadow,
            },
          )
        }
        getRootRef={getRef}
      >
        <div className="PanelHeader__in">
          <div className="PanelHeader__left">
            {left}
            {platform !== ANDROID && addon}
          </div>
          <div className="PanelHeader__content">
            {isPrimitive ? <span>{children}</span> : children}
          </div>
          <div className="PanelHeader__right">
            {webviewType !== WebviewType.VKAPPS && right}
          </div>
        </div>
      </FixedLayout>
      {needSeparator && visor && <Separator
        className={sizeX === SizeType.COMPACT ? 'PanelHeader__separator' : ''}
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
});
