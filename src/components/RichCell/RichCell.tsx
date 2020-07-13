import React, { FunctionComponent, HTMLAttributes, ReactNode } from 'react';
import classNames from '../../lib/classNames';
import usePlatform from '../../hooks/usePlatform';
import getClassName from '../../helpers/getClassName';
import { HasLinkProps, HasRootRef } from '../../types';
import Tappable from '../Tappable/Tappable';
import { hasReactNode } from '../../lib/utils';

export interface RichCellProps extends HTMLAttributes<HTMLElement>, HasRootRef<HTMLElement>, HasLinkProps {
  /**
   * Контейнер для текста под `children`.
   */
  text?: ReactNode;
  /**
   * Контейнер для текста под `text`.
   */
  caption?: ReactNode;
  /**
   * Контейнер для контента под `caption`. Например `<UsersStack size="s" />`
   */
  bottom?: ReactNode;
  /**
   * Кнопка или набор кнопок `<Button size="m" />`. Располагается под `bottom`.
   */
  actions?: ReactNode;
  /**
   * `<Avatar size={48|72} />`
   */
  before?: ReactNode;
  /**
   * Иконка 28 или текст
   */
  after?: ReactNode;
  disabled?: boolean;
  multiline?: boolean;
}

const RichCell: FunctionComponent<RichCellProps> = ({
  children,
  text,
  caption,
  before,
  after,
  bottom,
  actions,
  multiline,
  className,
  ...restProps
}) => {
  const platform = usePlatform();
  const isAfterPrimitive = typeof after === 'string' || typeof after === 'number';

  return (
    <Tappable
      {...restProps}
      Component={restProps.href ? 'a' : 'div'}
      className={
        classNames(
          className,
          getClassName('RichCell', platform),
          {
            'RichCell--mult': multiline,
          },
        )
      }
    >
      {before}
      <div className="RichCell__in">
        <div className="RichCell__top">
          {/* Этот after будет скрыт из верстки. Он нужен для CSS */}
          {isAfterPrimitive ? <span>{after}</span> : after}
          <div className="RichCell__content">
            <div className="RichCell__children">{children}</div>
            {hasReactNode(after) && <div className="RichCell__after">{after}</div>}
          </div>
          {hasReactNode(text) && <div className="RichCell__text">{text}</div>}
          {hasReactNode(caption) && <div className="RichCell__caption">{caption}</div>}
          {(hasReactNode(bottom) || hasReactNode(actions)) &&
            <div className="RichCell__bottom">
              {bottom}
              {hasReactNode(actions) && <div className="RichCell__actions">{actions}</div>}
            </div>
          }
        </div>
      </div>
    </Tappable>
  );
};

export default RichCell;
