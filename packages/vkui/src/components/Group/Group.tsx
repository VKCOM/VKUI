import * as React from 'react';
import { classNames, hasReactNode } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { usePlatform } from '../../hooks/usePlatform';
import { SizeTypeValues } from '../../lib/adaptivity';
import { warnOnce } from '../../lib/warnOnce';
import { HTMLAttributesWithRootRef } from '../../types';
import { AppRootContext } from '../AppRoot/AppRootContext';
import { ModalRootContext } from '../ModalRoot/ModalRootContext';
import { RootComponent } from '../RootComponent/RootComponent';
import { Separator } from '../Separator/Separator';
import { Spacing } from '../Spacing/Spacing';
import { Footnote } from '../Typography/Footnote/Footnote';
import styles from './Group.module.css';

const sizeXClassNames = {
  none: classNames(styles.hostSizeXNone, 'vkuiInternalGroupSizeXNone'),
  ['compact']: styles.hostSizeXCompact,
};

const stylesMode = {
  none: classNames(styles.hostModeNone, 'vkuiInternalGroupModeNone'),
  plain: classNames(styles.hostModePlain, 'vkuiInternalGroupModePlain'),
  card: classNames(styles.hostModeCard, 'vkuiInternalGroupModeCard'),
};

const stylesPadding = {
  s: styles.hostPaddingS,
  m: styles.hostPaddingM,
};

/**
 * Вычисляем mode для Group.
 */
function useGroupMode(
  forcedMode: GroupProps['mode'],
  sizeX: SizeTypeValues | 'none',
  isInsideModal: boolean,
): 'plain' | 'card' | 'none' {
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

export interface GroupProps extends HTMLAttributesWithRootRef<HTMLElement> {
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
  mode: modeProps,
  padding = 'm',
  tabIndex: tabIndexProp,
  ...restProps
}: GroupProps) => {
  const { isInsideModal } = React.useContext(ModalRootContext);
  const platform = usePlatform();
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

  return (
    <>
      <RootComponent
        Component="section"
        {...restProps}
        tabIndex={tabIndex}
        baseClassName={classNames(
          'vkuiInternalGroup',
          styles.host,
          isInsideModal && styles.hostInsideModal,
          platform === 'ios' && styles.hostIos,
          sizeX !== 'regular' && sizeXClassNames[sizeX],
          mode && stylesMode[mode],
          stylesPadding[padding],
        )}
      >
        {hasReactNode(header) && <div className={styles.header}>{header}</div>}
        {children}
        {hasReactNode(description) && (
          <Footnote className={styles.description}>{description}</Footnote>
        )}
      </RootComponent>

      {separator !== 'hide' && (
        <React.Fragment>
          <Spacing className={classNames(styles.separator, styles.separatorSpacing)} size={16} />
          <Separator
            className={classNames(
              styles.separator,
              styles.separatorSeparator,
              separator === 'show' && styles.separatorForce,
            )}
          />
        </React.Fragment>
      )}
    </>
  );
};
