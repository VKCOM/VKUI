import React, { FunctionComponent, ReactNode } from 'react';
import classNames from '../../lib/classNames';
import { HasClassName, HasChildren } from '../../types/props';

export interface PlaceholderProps extends HasClassName, HasChildren {
  /**
   * Иконка
   */
  icon?: ReactNode;
  /**
   * Заголовок плейсхолдера
   */
  title?: ReactNode;
  /**
   * Кнопка действия
   */
  action?: ReactNode;
  /**
   * Растягивает плейсхолдер на весь экран, но в таком случае на экране должен быть только плейсхолдер
   */
  stretched?: boolean;
}

const Placeholder: FunctionComponent<PlaceholderProps> = (props: PlaceholderProps) => {
  const { className, icon, title, action, children, stretched } = props;

  return (
    <div
      className={classNames('Placeholder', {
        'Placeholder--stretched': stretched
      }, className)}
    >
      <div className="Placeholder__in">
        {icon && <div className="Placeholder__icon">{icon}</div>}
        {title && <div className="Placeholder__title">{title}</div>}
        {children && <div className="Placeholder__text">{children}</div>}
        {action && <div className="Placeholder__action">{action}</div>}
      </div>
    </div>
  );
};

export default Placeholder;
