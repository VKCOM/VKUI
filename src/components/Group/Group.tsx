import { FC, HTMLAttributes, ReactNode, useContext } from 'react';
import { getClassName } from '../../helpers/getClassName';
import { classNames } from '../../lib/classNames';
import { HasRootRef } from '../../types';
import { usePlatform } from '../../hooks/usePlatform';
import Separator from '../Separator/Separator';
import { hasReactNode } from '../../lib/utils';
import Caption from '../Typography/Caption/Caption';
import { withAdaptivity, AdaptivityProps, SizeType } from '../../hoc/withAdaptivity';
import ModalRootContext from '../ModalRoot/ModalRootContext';

export interface GroupProps extends HasRootRef<HTMLElement>, HTMLAttributes<HTMLElement>, AdaptivityProps {
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
   * По умолчанию режим отображения зависит от `sizeX`. В модальных окнах
   * по умолчанию 'plain'.
   */
  mode?: 'plain' | 'card';
}

const Group: FC<GroupProps> = (props: GroupProps) => {
  const { header, description, children, separator, getRootRef, mode, sizeX, ...restProps } = props;
  const { isInsideModal } = useContext(ModalRootContext);
  const platform = usePlatform();

  let computedMode: GroupProps['mode'] = mode;

  if (!mode) {
    computedMode = sizeX === SizeType.COMPACT || isInsideModal ? 'plain' : 'card';
  }

  return (
    <section
      {...restProps}
      ref={getRootRef}
      vkuiClass={classNames(
        getClassName('Group', platform),
        `Group--sizeX-${sizeX}`,
        `Group--${computedMode}`,
      )}
    >
      <div vkuiClass="Group__inner">
        {header}
        {children}
        {hasReactNode(description) && <Caption vkuiClass="Group__description" weight="regular" level="1">{description}</Caption>}
      </div>

      {separator !== 'hide' && (
        <Separator
          vkuiClass={classNames('Group__separator', {
            'Group__separator--force': separator === 'show',
          })}
          expanded={computedMode === 'card'}
        />
      )}
    </section>
  );
};

Group.defaultProps = {
  separator: 'auto',
};

export default withAdaptivity(Group, { sizeX: true });
