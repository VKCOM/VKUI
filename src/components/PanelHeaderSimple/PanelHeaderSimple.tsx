import React, { HTMLAttributes, ReactNode } from 'react';
import usePlatform from '../../hooks/usePlatform';
import getClassname from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import FixedLayout from '../FixedLayout/FixedLayout';
import Separator from '../Separator/Separator';
import { ANDROID } from '../../lib/platform';

export interface PanelHeaderSimpleProps extends HTMLAttributes<HTMLDivElement> {
  left?: ReactNode;
  addon?: ReactNode;
  right?: ReactNode;
  separator?: boolean;
  transparent?: boolean;
}

const PanelHeaderSimple = ({
  className,
  left,
  addon,
  children,
  right,
  separator,
  transparent,
  ...restProps
}: PanelHeaderSimpleProps) => {
  const platform = usePlatform();

  return (
    <div
      {...restProps}
      className={
        classNames(
          getClassname('PanelHeaderSimple', platform),
          { 'PanelHeaderSimple--transparent': transparent },
          className,
        )
      }
    >
      <div className="PanelHeaderSimple__height" />
      <FixedLayout vertical="top">
        <div className="PanelHeaderSimple__in">
          <div className="PanelHeaderSimple__left">
            <div className="PanelHeaderSimple__left-in">
              {left}
            </div>
            {platform === ANDROID &&
            <div className="PanelHeaderSimple__addon">
              {addon}
            </div>
            }
          </div>
          <div className="PanelHeaderSimple__content">
            {children}
          </div>
          <div className="PanelHeaderSimple__right">
            {right}
          </div>
        </div>
      </FixedLayout>
      {separator && <Separator className="PanelHeaderSimple__separator" />}
    </div>
  );
};

PanelHeaderSimple.defaultProps = {
  separator: true,
  transparent: false,
};

export default PanelHeaderSimple;
