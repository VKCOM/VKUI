import React, { FunctionComponent, HTMLAttributes, ReactNode } from 'react';
import classNames from '../../lib/classNames';

export interface PlaceholderProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Иконка
   */
  icon?: ReactNode;
  /**
   * Заголовок плейсхолдера
   */
  header?: ReactNode;
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
  const { className, icon, header, action, children, stretched } = props;

  return (
    <div
      className={classNames('Placeholder', {
        'Placeholder--stretched': stretched,
      }, className)}
    >
      <div className="Placeholder__in">
        {icon && <div className="Placeholder__icon">{icon}</div>}
        {header && <div className="Placeholder__header">{header}</div>}
        {children && <div className="Placeholder__text">{children}</div>}
        {action && <div className="Placeholder__action">{action}</div>}
      </div>
    </div>
  );
};

export default Placeholder;
