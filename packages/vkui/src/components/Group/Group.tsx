import * as React from 'react';
import { classNames, hasReactNode } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { usePlatform } from '../../hooks/usePlatform';
import { SizeType } from '../../lib/adaptivity';
import { Platform } from '../../lib/platform';
import { warnOnce } from '../../lib/warnOnce';
import { HasChildren, HasRootRef } from '../../types';
import { ModalRootContext } from '../ModalRoot/ModalRootContext';
import { Separator } from '../Separator/Separator';
import { Spacing } from '../Spacing/Spacing';
import { Footnote } from '../Typography/Footnote/Footnote';
import styles from './Group.module.css';

const sizeXClassNames = {
  none: classNames(styles['Group--sizeX-none'], 'vkuiInternalGroup--sizeX-none'),
  [SizeType.COMPACT]: styles['Group--sizeX-compact'],
};

export interface GroupProps
  extends HasRootRef<HTMLElement>,
    React.HTMLAttributes<HTMLElement>,
    HasChildren {
  header?: React.ReactNode;
  description?: React.ReactNode;
  /**
    `show` - разделитель всегда показывается,
    `hide` - разделитель всегда спрятан,
    `auto` - разделитель рисуется автоматически между соседними группами.
   */
  separator?: 'show' | 'hide' | 'auto';
  /**
   * Режим отображения. Если установлен `card`, выглядит как карточка c
   * обводкой и внешними отступами. Если `plain` — без отступов и обводки.
   * По умолчанию режим отображения зависит от `sizeX` (`mode=card` при `sizeX=REGULAR` и `mode=plain` при `sizeX=COMPACT`)
   * В модальных окнах по умолчанию `plain`.
   */
  mode?: 'plain' | 'card';
  /**
   * Отвечает за отступы вокруг контента в режиме `card`.
   */
  padding?: 's' | 'm';
}

const warn = warnOnce('Group');
/**
 * @see https://vkcom.github.io/VKUI/#/Group
 */
export const Group = ({
  header,
  description,
  children,
  separator = 'auto',
  getRootRef,
  mode: modeProps,
  padding = 'm',
  className,
  tabIndex: tabIndexProp,
  ...restProps
}: GroupProps) => {
  const { isInsideModal } = React.useContext(ModalRootContext);
  const platform = usePlatform();
  const { sizeX = 'none' } = useAdaptivity();

  let mode: GroupProps['mode'] | 'none' = modeProps;

  if (!modeProps) {
    // Подробнее в "none" можно прочитать в ADAPTIVITY_GUIDE.md
    mode = isInsideModal ? 'plain' : 'none';
  }

  if (mode === 'none' && sizeX !== 'none') {
    mode = sizeX === SizeType.REGULAR ? 'card' : 'plain';
  }

  const isTabPanel = restProps.role === 'tabpanel';

  if (
    process.env.NODE_ENV === 'development' &&
    isTabPanel &&
    (!restProps['aria-controls'] || !restProps['id'])
  ) {
    warn(
      'При использовании роли "tabpanel" необходимо задать значение свойств "aria-controls" и "id"',
    );
  }

  const tabIndex = isTabPanel && tabIndexProp === undefined ? 0 : tabIndexProp;

  const separatorClassName = classNames(
    styles['Group__separator'],
    separator === 'show' && styles['Group__separator--force'],
  );

  return (
    <>
      <section
        {...restProps}
        tabIndex={tabIndex}
        ref={getRootRef}
        className={classNames(
          'vkuiInternalGroup',
          styles['Group'],
          platform === Platform.IOS && styles['Group--ios'],
          sizeX !== SizeType.REGULAR && sizeXClassNames[sizeX],
          mode &&
            {
              none: classNames(styles['Group--mode-none'], 'vkuiInternalGroup--mode-none'),
              plain: classNames(styles['Group--mode-plain'], 'vkuiInternalGroup--mode-plain'),
              card: classNames(styles['Group--mode-card'], 'vkuiInternalGroup--mode-card'),
            }[mode],
          {
            s: styles['Group--padding-s'],
            m: styles['Group--padding-m'],
          }[padding],
          className,
        )}
      >
        {header}
        {children}
        {hasReactNode(description) && (
          <Footnote className={styles['Group__description']}>{description}</Footnote>
        )}
      </section>

      {separator !== 'hide' && (
        <React.Fragment>
          <Spacing
            className={classNames(separatorClassName, styles['Group__separator--spacing'])}
            size={16}
          />
          <Separator
            className={classNames(separatorClassName, styles['Group__separator--separator'])}
          />
        </React.Fragment>
      )}
    </>
  );
};
