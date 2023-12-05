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
import { hasAccessibleName } from '../../lib/accessibility';
import { COMMON_WARNINGS, warnOnce } from '../../lib/warnOnce';
import { AdaptiveIconRenderer } from '../AdaptiveIconRenderer/AdaptiveIconRenderer';
import { Counter } from '../Counter/Counter';
import { Tappable } from '../Tappable/Tappable';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';
import styles from './WriteBarIcon.module.css';

const predefinedLabel = {
  attach: 'Прикрепить файл',
  send: 'Отправить',
  done: 'Готово',
};

export interface WriteBarIconProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Предустановленные типы кнопок в WriteBar для отрисовки иконки и установки текста кнопки в зависимости от платформы.
   * Если передать валидное значение для этого свойства, `children` игнорируются, а для `label` по умолчанию используется текст на "ru_RU".
   *
   * Валидные значения:
   * - `attach` – иконка прикрепления, текст по умолчанию — "Прикрепить файл";
   * - `send` – иконка отправки, текст по умолчанию — "Отправить";
   * - `done` – иконка отправки в режиме редактирования, текст по умолчанию — "Готово";
   */
  mode?: 'attach' | 'send' | 'done';
  /**
   * Значение счётчика для кнопки. Например, для количества прикреплённых файлов.
   */
  count?: number;
  /**
   * Текст кнопки. Необходим для ассистивных технологий.
   */
  label?: string;
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
  label: labelProp,
  ...restProps
}: WriteBarIconProps) => {
  const platform = usePlatform();

  let predefinedIcons;

  switch (mode) {
    case 'attach':
      predefinedIcons = {
        IconCompact: platform === 'ios' ? Icon28AddCircleOutline : Icon24Attach,
        IconRegular: platform === 'ios' ? Icon28AddCircleOutline : Icon28AttachOutline,
      };
      break;

    case 'send':
      predefinedIcons = {
        IconCompact: platform === 'ios' ? Icon48WritebarSend : Icon24Send,
        IconRegular: platform === 'ios' ? Icon48WritebarSend : Icon28Send,
      };
      break;

    case 'done':
      predefinedIcons = {
        IconCompact: platform === 'ios' ? Icon48WritebarDone : Icon24CheckCircleOutline,
        IconRegular: platform === 'ios' ? Icon48WritebarDone : Icon28CheckCircleOutline,
      };
      break;

    default:
      break;
  }

  const label = labelProp ?? (mode && predefinedLabel[mode]);

  if (process.env.NODE_ENV === 'development') {
    /* istanbul ignore next: проверка в dev mode, тест на hasAccessibleName() есть в lib/accessibility.test.tsx */
    const isAccessible = hasAccessibleName({
      children: [children, label],
      ...restProps,
    });

    if (!isAccessible) {
      warn(COMMON_WARNINGS.a11y['button-name'], 'error');
    }
  }

  return (
    <Tappable
      {...restProps}
      Component="button"
      hasHover={false}
      activeMode={styles['WriteBarIcon__active']}
      className={classNames(
        styles['WriteBarIcon'],
        platform === 'ios' && styles['WriteBarIcon--ios'],
        mode === 'send' && styles['WriteBarIcon--mode-send'],
        mode === 'done' && styles['WriteBarIcon--mode-done'],
        className,
      )}
    >
      <span className={styles['WriteBarIcon__in']}>
        {label && <VisuallyHidden>{label}</VisuallyHidden>}
        {predefinedIcons ? <AdaptiveIconRenderer {...predefinedIcons} /> : children}
      </span>
      {hasReactNode(count) && (
        <Counter className={styles['WriteBarIcon__counter']} size="s">
          {count}
        </Counter>
      )}
    </Tappable>
  );
};
