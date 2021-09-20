import * as React from 'react';
import { getClassName } from '../../helpers/getClassName';
import { classNames } from '../../lib/classNames';
import { usePlatform } from '../../hooks/usePlatform';
import { HasRef } from '../../types';
import { isPrimitiveReactNode } from '../../lib/utils';
import { VKCOM } from '../../lib/platform';
import Separator from '../Separator/Separator';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import './ModalPageHeader.css';

export interface ModalPageHeaderProps extends React.HTMLAttributes<HTMLDivElement>, HasRef<HTMLDivElement> {
  /**
   * Иконки, отображаемые слева
   */
  left?: React.ReactNode;
  /**
   * Иконки, отображаемые справа
   */
  right?: React.ReactNode;
  separator?: boolean;
}

const ModalPageHeader: React.FunctionComponent<ModalPageHeaderProps> = (props: ModalPageHeaderProps) => {
  const platform = usePlatform();
  const { sizeX } = useAdaptivity();
  const { left, right, children, separator, getRef, ...restProps } = props;
  const isPrimitive = isPrimitiveReactNode(children);
  const hasSeparator = separator && platform === VKCOM;

  return (
    <div
      {...restProps}
      vkuiClass={classNames(getClassName('ModalPageHeader', platform), `ModalPageHeader--sizeX-${sizeX}`)}
      ref={getRef}
    >
      <div vkuiClass="ModalPageHeader__in">
        <div vkuiClass="ModalPageHeader__left">
          {left}
        </div>

        <div vkuiClass="ModalPageHeader__content">
          <div vkuiClass="ModalPageHeader__content-in">
            {isPrimitive ? <span>{children}</span> : children}
          </div>
        </div>

        <div vkuiClass="ModalPageHeader__right">
          {right}
        </div>
      </div>

      {hasSeparator && <Separator wide vkuiClass="ModalPageHeader__separator" />}
    </div>
  );
};

ModalPageHeader.defaultProps = {
  separator: true,
};

export default ModalPageHeader;
