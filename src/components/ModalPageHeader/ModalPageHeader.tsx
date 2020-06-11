import React, { FunctionComponent, HTMLAttributes, ReactNode } from 'react';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import usePlatform from '../../hooks/usePlatform';
import { HasRef } from '../../types';
import withAdaptivity, { AdaptivityProps, SizeType } from '../../hoc/withAdaptivity';

export interface ModalPageHeaderProps extends HTMLAttributes<HTMLDivElement>, HasRef<HTMLDivElement>, AdaptivityProps {
  /**
   * Иконки, отображаемые слева
   */
  left?: ReactNode;
  /**
   * Иконки, отображаемые справа
   */
  right?: ReactNode;
  noShadow?: boolean;
}

const ModalPageHeader: FunctionComponent<ModalPageHeaderProps> = (props: ModalPageHeaderProps) => {
  const platform = usePlatform();
  const { className, left, right, children, noShadow, getRef, sizeX } = props;
  const isPrimitive = typeof children === 'string' || typeof children === 'number';

  const isDesktop = sizeX === SizeType.REGULAR;

  return (
    <div className={classNames(getClassName('ModalPageHeader', platform), className, {
      'ModalPageHeader__desktop': isDesktop,
    })} ref={getRef}>
      <div className="ModalPageHeader__in">
        <div className="ModalPageHeader__left">
          {left}
        </div>

        <div className="ModalPageHeader__content">
          <div className="ModalPageHeader__content-in">
            {isPrimitive ? <span>{children}</span> : children}
          </div>
        </div>

        <div className="ModalPageHeader__right">
          {right}
        </div>
      </div>

      {!noShadow && <div className="ModalPageHeader__shadow" />}
    </div>
  );
};

export default withAdaptivity(ModalPageHeader, {
  sizeX: true,
});
