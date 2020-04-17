import React, { HTMLAttributes, ReactNode, useContext } from 'react';
import usePlatform from '../../hooks/usePlatform';
import getClassname from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import FixedLayout from '../FixedLayout/FixedLayout';
import Separator from '../Separator/Separator';
import { ANDROID } from '../../lib/platform';
import { HasRef, HasRootRef } from '../../types';
import { ConfigProviderContext, WebviewType } from '../ConfigProvider/ConfigProviderContext';

export interface PanelHeaderSimpleProps extends HTMLAttributes<HTMLDivElement>, HasRef<HTMLDivElement>, HasRootRef<HTMLDivElement> {
  left?: ReactNode;
  addon?: ReactNode;
  right?: ReactNode;
  separator?: boolean;
  transparent?: boolean;
  /**
   * Если `false`, то шапка будет нулевой высоты и контент панели "залезет" под неё
   */
  visor?: boolean;
}

const PanelHeaderSimple = ({
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
}: PanelHeaderSimpleProps) => {
  const platform = usePlatform();
  const { webviewType } = useContext(ConfigProviderContext);

  return (
    <div
      {...restProps}
      className={
        classNames(
          getClassname('PanelHeaderSimple', platform),
          {
            'PanelHeaderSimple--trnsp': transparent,
            'PanelHeaderSimple--vis': visor,
            'PanelHeaderSimple--sep': separator && visor,
            'PanelHeaderSimple--vkapps': webviewType === WebviewType.VKAPPS,
          },
          className,
        )
      }
      ref={getRootRef}
    >
      <FixedLayout vertical="top" className="PanelHeaderSimple__fixed" getRootRef={getRef}>
        <div className="PanelHeaderSimple__in">
          <div className="PanelHeaderSimple__left">
            <div className="PanelHeaderSimple__left-in">
              {left}
            </div>
            {platform !== ANDROID && !!addon &&
            <div className="PanelHeaderSimple__addon">
              {addon}
            </div>
            }
          </div>
          <div className="PanelHeaderSimple__content">
            {children}
          </div>
          <div className="PanelHeaderSimple__right">
            {webviewType !== WebviewType.VKAPPS && right}
          </div>
        </div>
      </FixedLayout>
      {separator && visor && <Separator className="PanelHeaderSimple__separator" />}
    </div>
  );
};

PanelHeaderSimple.defaultProps = {
  separator: true,
  transparent: false,
  visor: true,
};

export default PanelHeaderSimple;
