import * as React from 'react';
import {
  Icon24Attach,
  Icon24CheckCircleOutline,
  Icon24Send,
  Icon28AddCircleOutline,
  Icon28AttachOutline,
  Icon28CheckCircleOutline,
  Icon28Send,
  Icon48WritebarDone,
  Icon48WritebarSend,
} from '@vkontakte/icons';
import { classNames, hasReactNode } from '@vkontakte/vkjs';
import { usePlatform } from '../../hooks/usePlatform';
import { Platform } from '../../lib/platform';
import { COMMON_WARNINGS, warnOnce } from '../../lib/warnOnce';
import { Counter } from '../Counter/Counter';
import { Tappable } from '../Tappable/Tappable';
import { WriteBarIconRenderer } from './WriteBarIconRenderer';
import styles from './WriteBarIcon.module.css';

export interface WriteBarIconProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Предустановленные типы кнопок в WriteBar для отрисовки иконки в зависимости от платформы.
   * Если передать валидное значение для этого свойства, `children` игнорируется.
   *
   * - `attach` – иконка прикрепления.
   * - `send` – иконка отправки.
   * - `done` – иконка отправки в режиме редактирования.
   */
  mode?: 'attach' | 'send' | 'done';
  /**
   * Значение счётчика для кнопки. Например, для количества прикреплённых файлов.
   */
  count?: number;
}

const warn = warnOnce('WriteBarIcon');

/**
 * @see https://vkcom.github.io/VKUI/#/WriteBarIcon
 */
export const WriteBarIcon = ({
  mode,
  children,
  count,
  className,
  ...restProps
}: WriteBarIconProps) => {
  const platform = usePlatform();
  let modeLabel: string | undefined = undefined;

  let predefinedIcons;
  switch (mode) {
    case 'attach':
      predefinedIcons = {
        IconCompact: platform === Platform.IOS ? Icon28AddCircleOutline : Icon24Attach,
        IconRegular: platform === Platform.IOS ? Icon28AddCircleOutline : Icon28AttachOutline,
      };
      modeLabel = 'Прикрепить файл';
      break;

    case 'send':
      predefinedIcons = {
        IconCompact: platform === Platform.IOS ? Icon48WritebarSend : Icon24Send,
        IconRegular: platform === Platform.IOS ? Icon48WritebarSend : Icon28Send,
      };
      modeLabel = 'Отправить';
      break;

    case 'done':
      predefinedIcons = {
        IconCompact: platform === Platform.IOS ? Icon48WritebarDone : Icon24CheckCircleOutline,
        IconRegular: platform === Platform.IOS ? Icon48WritebarDone : Icon28CheckCircleOutline,
      };
      modeLabel = 'Готово';
      break;

    default:
      break;
  }

  if (process.env.NODE_ENV === 'development') {
    const isAccessible = !modeLabel && (!restProps['aria-label'] || restProps['aria-labelledby']);

    if (!isAccessible) {
      warn(COMMON_WARNINGS.a11y['button-name'], 'error');
    }
  }

  return (
    <Tappable
      aria-label={modeLabel}
      {...restProps}
      Component="button"
      hasHover={false}
      activeMode={styles['WriteBarIcon__active']}
      className={classNames(
        styles['WriteBarIcon'],
        platform === Platform.IOS && styles['WriteBarIcon--ios'],
        mode === 'send' && styles['WriteBarIcon--mode-send'],
        mode === 'done' && styles['WriteBarIcon--mode-done'],
        className,
      )}
    >
      <span className={styles['WriteBarIcon__in']}>
        {predefinedIcons ? <WriteBarIconRenderer {...predefinedIcons} /> : children}
      </span>
      {hasReactNode(count) && (
        <Counter className={styles['WriteBarIcon__counter']} size="s">
          {count}
        </Counter>
      )}
    </Tappable>
  );
};
