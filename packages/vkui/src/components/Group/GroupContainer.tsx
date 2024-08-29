import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import type { SizeTypeValues } from '../../lib/adaptivity';
import { warnOnce } from '../../lib/warnOnce';
import type { HasComponent, HTMLAttributesWithRootRef } from '../../types';
import { AppRootContext } from '../AppRoot/AppRootContext';
import { ModalRootContext } from '../ModalRoot/ModalRootContext';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './Group.module.css';

const sizeXClassNames = {
  none: classNames(styles['Group--sizeX-none'], 'vkuiInternalGroup--sizeX-none'),
  regular: styles['Group--sizeX-regular'],
  compact: styles['Group--sizeX-compact'],
};

const stylesMode = {
  none: classNames(styles['Group--mode-none'], 'vkuiInternalGroup--mode-none'),
  plain: classNames(styles['Group--mode-plain'], 'vkuiInternalGroup--mode-plain'),
  card: classNames(styles['Group--mode-card'], 'vkuiInternalGroup--mode-card'),
};

const stylesPadding = {
  s: styles['Group--padding-s'],
  m: styles['Group--padding-m'],
};

type GroupMode = 'plain' | 'card' | 'none';

/**
 * Вычисляем mode для Group.
 */
function useGroupMode(
  forcedMode: GroupContainerProps['mode'],
  sizeX: SizeTypeValues | 'none',
  isInsideModal: boolean,
): GroupMode {
  const { layout } = React.useContext(AppRootContext);

  if (forcedMode) {
    return forcedMode;
  }

  if (isInsideModal) {
    return 'plain';
  }

  if (layout) {
    return layout;
  }

  if (sizeX !== 'none') {
    return sizeX === 'regular' ? 'card' : 'plain';
  }

  return 'none';
}

export type GroupContainerProps = HTMLAttributesWithRootRef<HTMLElement> &
  HasComponent & {
    /**
    `show` (только для `mode="plain"`) - разделитель всегда показывается
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
  };

const warn = warnOnce('Group');

export const GroupContainer: React.FC<GroupContainerProps> = ({
  children,
  separator = 'auto',
  mode: modeProps,
  padding = 'm',
  tabIndex: tabIndexProp,
  ...restProps
}: GroupContainerProps) => {
  const { isInsideModal } = React.useContext(ModalRootContext);
  const { sizeX = 'none' } = useAdaptivity();

  const mode = useGroupMode(modeProps, sizeX, isInsideModal);

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

  let siblingSeparatorElement: React.ReactNode = null;
  switch (separator) {
    case 'auto':
      siblingSeparatorElement = <div className={styles['Group__separator-sibling']} />;
      break;
    case 'show':
      siblingSeparatorElement = (
        <div
          className={classNames(
            styles['Group__separator-sibling'],
            mode === 'plain' || mode === 'none'
              ? styles['Group__separator-sibling--forced']
              : undefined,
          )}
        />
      );
      break;
    case 'hide':
      break;
  }
  return (
    <>
      <RootComponent
        Component="section"
        {...restProps}
        tabIndex={tabIndex}
        baseClassName={classNames(
          'vkuiInternalGroup',
          styles['Group'],
          sizeXClassNames[sizeX],
          mode === 'plain' && isInsideModal && styles['Group--mode-plain-inside-modal'],
          stylesMode[mode],
          stylesPadding[padding],
        )}
      >
        {children}
      </RootComponent>
      {siblingSeparatorElement}
    </>
  );
};
GroupContainer.displayName = 'GroupContainer';
