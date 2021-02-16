import { FunctionComponent, HTMLAttributes, ReactNode } from 'react';
import { getClassName } from '../../helpers/getClassName';
import { classNames } from '../../lib/classNames';
import { usePlatform } from '../../hooks/usePlatform';
import { HasRef } from '../../types';
import { isPrimitiveReactNode } from '../../lib/utils';
import { VKCOM } from '../../lib/platform';
import Separator from '../Separator/Separator';
import { useAdaptivity } from '../../hooks/useAdaptivity';

export interface ModalPageHeaderProps extends HTMLAttributes<HTMLDivElement>, HasRef<HTMLDivElement> {
  /**
   * Иконки, отображаемые слева
   */
  left?: ReactNode;
  /**
   * Иконки, отображаемые справа
   */
  right?: ReactNode;
  separator?: boolean;
}

const ModalPageHeader: FunctionComponent<ModalPageHeaderProps> = (props: ModalPageHeaderProps) => {
  const platform = usePlatform();
  const { sizeX } = useAdaptivity();
  const { className, left, right, children, separator, getRef, ...restProps } = props;
  const isPrimitive = isPrimitiveReactNode(children);
  const hasSeparator = separator && platform === VKCOM;

  return (
    <div
      {...restProps}
      className={classNames(getClassName('ModalPageHeader', platform), className, `ModalPageHeader--sizeX-${sizeX}`)}
      ref={getRef}
    >
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

      {hasSeparator && <Separator wide className="ModalPageHeader__separator" />}
    </div>
  );
};

ModalPageHeader.defaultProps = {
  separator: true,
};

export default ModalPageHeader;
