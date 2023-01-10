import * as React from 'react';
import { Platform } from '../../lib/platform';
import { classNames, hasReactNode } from '@vkontakte/vkjs';
import { HasRootRef } from '../../types';
import { usePlatform } from '../../hooks/usePlatform';
import { Spacing } from '../Spacing/Spacing';
import { Separator } from '../Separator/Separator';
import { Footnote } from '../Typography/Footnote/Footnote';
import { warnOnce } from '../../lib/warnOnce';
import { ModalRootContext } from '../ModalRoot/ModalRootContext';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { getSizeXClassName } from '../../helpers/getSizeXClassName';
import styles from './Group.module.css';

export interface GroupProps extends HasRootRef<HTMLElement>, React.HTMLAttributes<HTMLElement> {
  header?: React.ReactNode;
  description?: React.ReactNode;
  /**
    show - разделитель всегда показывается,
    hide - разделитель всегда спрятан,
    auto - разделитель рисуется автоматически между соседними группами.
   */
  separator?: 'show' | 'hide' | 'auto';
  /**
   * Режим отображения. Если установлен 'card', выглядит как карточка c
   * обводкой и внешними отступами. Если 'plain' — без отступов и обводки.
   * По умолчанию режим отображения зависит от `sizeX`. В модальных окнах
   * по умолчанию 'plain'.
   */
  mode?: 'plain' | 'card';
  /**
   * Отвечает за отступы вокруг контента в режиме 'card'.
   */
  padding?: 's' | 'm';
  children?: React.ReactNode;
}

const warn = warnOnce('TabsItem');

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
  const { sizeX } = useAdaptivity();

  let mode: GroupProps['mode'] | 'none' = modeProps;

  if (!modeProps) {
    // Подробнее в "none" можно прочитать в ADAPTIVITY_GUIDE.md
    mode = isInsideModal ? 'plain' : 'none';
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
    <section
      {...restProps}
      tabIndex={tabIndex}
      ref={getRootRef}
      className={classNames(
        styles['Group'],
        platform === Platform.IOS && styles['Group--ios'],
        getSizeXClassName(styles['Group'], sizeX),
        mode && styles[`Group--mode-${mode}`],
        styles[`Group--padding-${padding}`],
        className,
      )}
    >
      <div className={styles['Group__inner']}>
        {header}
        {children}
        {hasReactNode(description) && (
          <Footnote className={styles['Group__description']}>{description}</Footnote>
        )}
      </div>
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
    </section>
  );
};
