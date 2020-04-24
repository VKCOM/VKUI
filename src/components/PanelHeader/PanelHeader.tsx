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

export interface PanelHeaderProps extends HTMLAttributes<HTMLDivElement>, HasRef<HTMLDivElement>, HasRootRef<HTMLDivElement> {
  left?: ReactNode;
  /**
   * @deprecated будет удалено в 4-й версии. Раньше использовалось, как текстовое дополнение к PanelHeaderBack в iOS.
   */
  addon?: ReactNode;
  right?: ReactNode;
  separator?: boolean;
  transparent?: boolean;
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
  getRef,
  getRootRef,
  ...restProps
}: PanelHeaderProps) => {
  const platform = usePlatform();
  const { webviewType } = useContext(ConfigProviderContext);
  const panelContext = useContext(PanelContext);
  let needSeparator = separator;

  if (typeof separator !== 'boolean') {
    needSeparator = panelContext.separator;
  }

  const isPrimitive = typeof children === 'string' || typeof children === 'number';

  return (
    <div
      {...restProps}
      className={
        classNames(
          getClassname('PanelHeader', platform),
          {
            'PanelHeader--trnsp': transparent,
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
      <FixedLayout vertical="top" className="PanelHeader__fixed" getRootRef={getRef}>
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
      {needSeparator && visor && <Separator className="PanelHeader__separator" />}
    </div>
  );
};

PanelHeader.defaultProps = {
  separator: true,
  transparent: false,
  visor: true,
};

export default PanelHeader;
