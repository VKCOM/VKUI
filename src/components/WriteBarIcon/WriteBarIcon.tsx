import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import {
  Icon24Send,
  Icon28AddCircleOutline,
  Icon28AttachOutline,
  Icon28CheckCircleOutline,
  Icon48WritebarDone,
  Icon48WritebarSend,
} from '@vkontakte/icons';
import { usePlatform } from '../../hooks/usePlatform';
import { classNames } from '../../lib/classNames';
import { getClassName } from '../../helpers/getClassName';
import { IOS } from '../../lib/platform';
import Caption from '../Typography/Caption/Caption';
import Tappable from '../Tappable/Tappable';
import './WriteBarIcon.css';

export interface WriteBarIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
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

export const WriteBarIcon: FC<WriteBarIconProps> = ({
  mode,
  children,
  count,
  ...restProps
}: WriteBarIconProps) => {
  const platform = usePlatform();

  let icon: ReactNode;
  let ariaLabel: string;

  switch (mode) {
    case 'attach':
      icon = platform === IOS ? <Icon28AddCircleOutline /> : <Icon28AttachOutline />;
      ariaLabel = 'Прикрепить файл';
      break;

    case 'send':
      icon = platform === IOS ? <Icon48WritebarSend /> : <Icon24Send />;
      ariaLabel = 'Отправить';
      break;

    case 'done':
      icon = platform === IOS ? <Icon48WritebarDone /> : <Icon28CheckCircleOutline />;
      ariaLabel = 'Готово';
      break;

    default:
      break;
  }

  return (
    <Tappable
      aria-label={ariaLabel}
      {...restProps}
      Component="button"
      hasHover={false}
      activeMode="WriteBarIcon__active"
      aria-label={restProps['aria-label'] ? restProps['aria-label'] : ariaLabel}
      vkuiClass={classNames(getClassName('WriteBarIcon', platform), {
        [`WriteBarIcon--${mode}`]: !!mode,
      })}
    >
      <span vkuiClass="WriteBarIcon__in">
        {icon || children}
        {count && <Caption vkuiClass="WriteBarIcon__count" weight="regular" level="2">{count}</Caption>}
      </span>
    </Tappable>
  );
};
