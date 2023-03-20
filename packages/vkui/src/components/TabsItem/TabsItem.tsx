import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { SizeType } from '../../lib/adaptivity';
import { warnOnce } from '../../lib/warnOnce';
import { TabsContextProps, TabsModeContext } from '../Tabs/Tabs';
import { Tappable } from '../Tappable/Tappable';
import { Headline } from '../Typography/Headline/Headline';
import { Subhead } from '../Typography/Subhead/Subhead';
import styles from './TabsItem.module.css';

const sizeYClassNames = {
  none: styles['TabsItem--sizeY-none'],
  [SizeType.COMPACT]: styles['TabsItem--sizeY-compact'],
};

export interface TabsItemProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Добавляет иконку слева.
   *
   * - Для `mode="default"` используйте иконки размером 24.
   * - Для всех остальных `mode` используйте иконки размером 20.
   */
  before?: React.ReactNode;
  /**
   * Добавляет элемент слева от `after`.
   *
   * - `React.ReactElement` – либо [`Badge`](https://vkcom.github.io/VKUI/#/Badge) с параметром `mode="prominent"`.
   *   либо [`Counter`](https://vkcom.github.io/VKUI/#/Counter) с параметрами `mode="prominent" size="s"`.
   * - `number` – для показа текстового блока с переданным числом.
   */
  status?: React.ReactElement | number;
  /**
   * Добавляет иконку справа.
   *
   * Например, `<Icon16Dropdown />`
   */
  after?: React.ReactNode;
  selected?: boolean;
  disabled?: boolean;
}

const warn = warnOnce('TabsItem');

/**
 * @see https://vkcom.github.io/VKUI/#/TabsItem
 */
export const TabsItem = ({
  before,
  children,
  status,
  after,
  selected = false,
  className,
  role = 'tab',
  tabIndex: tabIndexProp,
  ...restProps
}: TabsItemProps) => {
  const { sizeY = 'none' } = useAdaptivity();
  const { mode, withGaps }: TabsContextProps = React.useContext(TabsModeContext);
  let statusComponent = null;

  const isTabFlow = role === 'tab';

  if (status) {
    statusComponent =
      typeof status === 'number' ? (
        <Subhead
          Component="span"
          className={classNames(styles['TabsItem__status'], styles['TabsItem__status--count'])}
          weight="2"
        >
          {status}
        </Subhead>
      ) : (
        <span className={styles['TabsItem__status']}>{status}</span>
      );
  }

  if (process.env.NODE_ENV === 'development' && isTabFlow) {
    if (!restProps['aria-controls']) {
      warn(`Передайте в "aria-controls" id контролируемого блока`, 'warn');
    } else if (!restProps['id']) {
      warn(
        `Передайте "id" компоненту для использования в "aria-labelledby" контролируемого блока`,
        'warn',
      );
    }
  }

  let tabIndex = tabIndexProp;
  if (isTabFlow && tabIndex === undefined) {
    tabIndex = selected ? 0 : -1;
  }

  return (
    <Tappable
      {...restProps}
      className={classNames(
        styles['TabsItem'],
        mode &&
          {
            default: styles['TabsItem--mode-default'],
            accent: styles['TabsItem--mode-accent'],
            secondary: styles['TabsItem--mode-secondary'],
          }[mode],
        selected && styles['TabsItem--selected'],
        sizeY !== SizeType.REGULAR && sizeYClassNames[sizeY],
        withGaps && styles['TabsItem--withGaps'],
        className,
      )}
      hoverMode={styles['TabsItem--hover']}
      activeMode=""
      focusVisibleMode="inside"
      hasActive={false}
      role={role}
      aria-selected={selected}
      tabIndex={tabIndex}
    >
      {before && <div className={styles['TabsItem__before']}>{before}</div>}
      <Headline
        Component="span"
        className={styles['TabsItem__label']}
        level={mode === 'default' ? '1' : '2'}
        weight="2"
      >
        {children}
      </Headline>
      {statusComponent}
      {after && <div className={styles['TabsItem__after']}>{after}</div>}
      {mode === 'default' && (
        <div className={styles['TabsItem__underline']} aria-hidden data-selected={selected} />
      )}
    </Tappable>
  );
};
