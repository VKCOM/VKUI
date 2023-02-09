import * as React from 'react';
import {
  Icon24Send,
  Icon28AddCircleOutline,
  Icon28AttachOutline,
  Icon28CheckCircleOutline,
  Icon48WritebarDone,
  Icon48WritebarSend,
} from '@vkontakte/icons';
import { usePlatform } from '../../hooks/usePlatform';
import { classNames, hasReactNode } from '@vkontakte/vkjs';
import { Platform } from '../../lib/platform';
import { Counter } from '../Counter/Counter';
import { Tappable } from '../Tappable/Tappable';
import { warnOnce } from '../../lib/warnOnce';
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

  let icon: React.ReactNode;
  let modeLabel: string | undefined = undefined;

  switch (mode) {
    case 'attach':
      icon = platform === Platform.IOS ? <Icon28AddCircleOutline /> : <Icon28AttachOutline />;
      modeLabel = 'Прикрепить файл';
      break;

    case 'send':
      icon = platform === Platform.IOS ? <Icon48WritebarSend /> : <Icon24Send />;
      modeLabel = 'Отправить';
      break;

    case 'done':
      icon = platform === Platform.IOS ? <Icon48WritebarDone /> : <Icon28CheckCircleOutline />;
      modeLabel = 'Готово';
      break;

    default:
      break;
  }

  if (process.env.NODE_ENV === 'development' && !restProps['aria-label'] && !modeLabel) {
    warn(
      'a11y: У WriteBarIcon нет aria-label. Кнопка будет недоступной для части пользователей.',
      'error',
    );
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
        mode && styles[`WriteBarIcon--mode-${mode}`],
        className,
      )}
    >
      <span className={styles['WriteBarIcon__in']}>{icon || children}</span>
      {hasReactNode(count) && (
        <Counter className={styles['WriteBarIcon__counter']} size="s">
          {count}
        </Counter>
      )}
    </Tappable>
  );
};
