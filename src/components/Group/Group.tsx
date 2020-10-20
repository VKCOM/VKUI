import React, { FunctionComponent, HTMLAttributes, ReactNode, useContext } from 'react';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import { HasRootRef } from '../../types';
import usePlatform from '../../hooks/usePlatform';
import Separator from '../Separator/Separator';
import withAdaptivity, { AdaptivityProps, SizeType } from '../../hoc/withAdaptivity';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import ModalRootContext from '../ModalRoot/ModalRootContext';

export interface GroupProps extends HasRootRef<HTMLDivElement>, HTMLAttributes<HTMLDivElement>, AdaptivityProps {
  header?: ReactNode;
  description?: ReactNode;
  /**
    show - разделитель всегда показывается,
    hide – разделитель всегда спрятан,
    auto – разделитель рисуется автоматически между соседними группами.
   */
  separator?: 'show' | 'hide' | 'auto';
  /**
   * Режим отображения. Если установлен 'card', выглядит как карточка c
   * обводкой и внешними отступами. Если 'plain' — без отступов и обводки.
   * По-умолчанию режим отображения зависит от `sizeX`. В модальных окнах
   * по умолчанию 'plain'.
   */
  mode?: 'plain' | 'card';
}

const Group: FunctionComponent<GroupProps> = (props: GroupProps) => {
  const { header, description, className, children, separator, getRootRef, mode, ...restProps } = props;
  const { sizeX } = useAdaptivity();
  const { isInsideModal } = useContext(ModalRootContext);
  const platform = usePlatform();
  const baseClassNames = getClassName('Group', platform);

  let computedMode: GroupProps['mode'] = mode;

  if (!mode) {
    computedMode = sizeX === SizeType.COMPACT || isInsideModal ? 'plain' : 'card';
  }

  return (
    <section
      {...restProps}
      ref={getRootRef}
      className={classNames(className, baseClassNames, `Group--sizeX-${sizeX}`, `Group--${computedMode}`)}
    >
      <div className="Group__inner">
        {header}
        {children}
        {description && <div className="Group__description">{description}</div>}
      </div>

      {separator !== 'hide' &&
        <Separator
          className={classNames('Group__separator', {
            'Group__separator--force': separator === 'show',
          })}
          expanded={sizeX === SizeType.REGULAR && !isInsideModal}
        />
      }
    </section>
  );
};

Group.defaultProps = {
  separator: 'auto',
};

export default withAdaptivity(Group, {});
