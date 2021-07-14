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
  'aria-label'?: string;
}

export const WriteBarIcon: FC<WriteBarIconProps> = (props: WriteBarIconProps) => {
  const platform = usePlatform();
  const {
    mode,
    children,
    count,
    ...restProps
  } = props;

  let icon: ReactNode;

  switch (mode) {
    case 'attach':
      icon = platform === IOS ? <Icon28AddCircleOutline /> : <Icon28AttachOutline />;
      break;

    case 'send':
      icon = platform === IOS ? <Icon48WritebarSend /> : <Icon24Send />;
      break;

    case 'done':
      icon = platform === IOS ? <Icon48WritebarDone /> : <Icon28CheckCircleOutline />;
      break;

    default:
      break;
  }

  return (
    <button
      type="button"
      {...restProps}
      vkuiClass={classNames(getClassName('WriteBarIcon', platform), {
        [`WriteBarIcon--${mode}`]: !!mode,
        'WriteBarIcon--disabled': restProps.disabled,
      })}
    >
      {icon || children}
      {count && <Caption vkuiClass="WriteBarIcon__count" weight="regular" level="2">{count}</Caption>}
    </button>
  );
};
