import * as React from 'react';
import { usePatchChildrenRef } from '../../hooks/usePatchChildrenRef';
import { HasRootRef } from '../../types';
import { ScrollSaveModeType } from './types';
import { useScrollSaver } from './useScrollSaver';

export interface ScrollSaverProps {
  /*
   * Уникальный идентификатор элемента скролл которого надо запомнить.
   * Важно задавать id, так как на одной панели может понадобится запомнить позиции нескольких скролл-боксов.
   **/
  id: string;
  /*
   * Режим сохранения скролла: по умолчанию `forward`.
   * `forward` - позиция скролла сохраняется только при переходе вперёд и восстанавливается при переходе назад.
   * `always` - позиция скролла сохраняется и при переходе вперёд и при переходе назад.
   **/
  saveMode?: ScrollSaveModeType;
  /*
   * Если передан реакт-компонент, то он должен поддерживать getRootRef.
   **/
  children: React.ReactElement<HasRootRef<any>> | React.ReactElement;
  /*
   * Режим для получения рефа на элемент для скролла через getRef проп, вместо getRootRef (актуально для компонента HorizontalScroll)
   **/
  useGetRef?: boolean;
}

/**
 * Компонент-обертка для сохранения позиции скролла элемента при переходах между View и Panel.
 * По умолчанию позволяет восстановить значение скролла при возвращении назад.
 *
 * @see https://vkcom.github.io/VKUI/#/ScrollSaver
 */
export const ScrollSaver = (props: ScrollSaverProps) => {
  const [childrenRef, children] = usePatchChildrenRef(props.children, props.useGetRef);
  useScrollSaver(childrenRef, props.id, props.saveMode);

  return children;
};
