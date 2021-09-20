import * as React from 'react';
import { classNames } from '../../lib/classNames';
import { hasReactNode } from '../../lib/utils';
import Title from '../Typography/Title/Title';
import Headline from '../Typography/Headline/Headline';
import { HasRootRef } from '../../types';
import './Placeholder.css';

export interface PlaceholderProps extends React.HTMLAttributes<HTMLDivElement>, HasRootRef<HTMLDivElement> {
  /**
   * Иконка
   */
  icon?: React.ReactNode;
  /**
   * Заголовок плейсхолдера
   */
  header?: React.ReactNode;
  /**
   * Кнопка действия
   */
  action?: React.ReactNode;
  /**
   * Растягивает плейсхолдер на весь экран, но в таком случае на экране должен быть только плейсхолдер
   */
  stretched?: boolean;
}

const Placeholder: React.FC<PlaceholderProps> = (props: PlaceholderProps) => {
  const {
    icon,
    header,
    action,
    children,
    stretched,
    getRootRef,
    ...restProps
  } = props;

  return (
    <div
      {...restProps}
      ref={getRootRef}
      vkuiClass={classNames('Placeholder', {
        'Placeholder--stretched': stretched,
      })}
    >
      <div vkuiClass="Placeholder__in">
        {hasReactNode(icon) && <div vkuiClass="Placeholder__icon">{icon}</div>}
        {hasReactNode(header) && <Title level="2" weight="medium" vkuiClass="Placeholder__header">{header}</Title>}
        {hasReactNode(children) && <Headline weight="regular" vkuiClass="Placeholder__text">{children}</Headline>}
        {hasReactNode(action) && <div vkuiClass="Placeholder__action">{action}</div>}
      </div>
    </div>
  );
};

export default Placeholder;
