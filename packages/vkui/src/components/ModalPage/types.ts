import type { CSSProperties, ReactNode, Ref, UIEvent } from 'react';
import { type UseFocusTrapProps } from '../../hooks/useFocusTrap';
import type { NavIdProps } from '../../lib/getNavId';
import type { HTMLAttributesWithRootRef } from '../../types';

export type ModalPageCloseReason =
  | 'click-overlay'
  | 'click-close-button'
  | 'escape-key'
  | 'swipe-down';

type OmittedStyleAttribute = {
  style?: Omit<CSSProperties, 'height' | 'maxWidth' | 'maxHeight'>;
};

export interface ModalPageProps
  extends NavIdProps,
    Omit<HTMLAttributesWithRootRef<HTMLDivElement>, 'id' | 'style'>,
    Pick<UseFocusTrapProps, 'restoreFocus'>,
    OmittedStyleAttribute {
  /**
   * Состояние видимости.
   *
   * @default false
   */
  open?: boolean;
  /**
   * Сохранять ли компонент в DOM при `open={false}`.
   *
   * @default false
   */
  keepMounted?: boolean;
  /**
   * Шапка модальной страницы, `<ModalPageHeader />`
   */
  header?: ReactNode;
  /**
   * Подвал модальной страницы, `<ModalPageFooter />`
   */
  footer?: ReactNode;
  /**
   * Задаёт контенту максимальную ширину на десктопе.
   */
  size?: 's' | 'm' | 'l' | number;
  /**
   * Задаёт модальному окну фиксированную высоту.
   * Можно передать числовое значение в пикселях, а можно строкой, в том числе и в процентах "50%".
   * В мобильной версии 'settlingHeight' будет считаться относительно заданного height.
   */
  height?: string | number;
  /**
   * Процент, на который изначально будет открыта модальная страница.
   *
   * > ⚠️ Следует использовать следующие значения: `25`, `50`, `75`, `100`.
   * > При передаче `< 25` значение приведётся к `25`, при передаче `> 75` значение приведётся к `75`.
   *
   * Игнорируется при включении `dynamicContentHeight`.
   */
  settlingHeight?: number;
  /**
   * Если высота контента в модальной странице может поменяться, нужно установить это свойство.
   */
  dynamicContentHeight?: boolean;
  /**
   * Отключает фокус на интерактивный элемент после открытия модалки.
   */
  noFocusToDialog?: boolean;
  /**
   * Скрывает кнопку закрытия (актуально для iOS, т.к. можно отрисовать кнопку закрытия внутри модалки)
   */
  hideCloseButton?: boolean;
  /**
   * `data-testid` для содержимого модального окна.
   */
  modalContentTestId?: string;
  /**
   * Возвращает DOM-элемент содержимого модального окна.
   */
  getModalContentRef?: Ref<HTMLDivElement>;
  /**
   * `data-testid` для оверлея.
   */
  modalOverlayTestId?: string;
  /**
   * `data-testid` для кнопки закрытия.
   */
  modalDismissButtonTestId?: string;
  /**
   * Текст для скринридера
   */
  modalDismissButtonLabel?: string;
  /**
   * Позволяет отключить возможность закрытия модальной страницы (смахивание, клавиша `ESC`, клик по подложке)
   *
   * ⚠️ ВНИМАНИЕ: использование этой опции негативно сказывается на пользовательском опыте
   */
  preventClose?: boolean;
  /**
   * Отключает раскрытие и закрытие панели в мобильном виде.
   */
  disableContentPanningGesture?: boolean;
  /**
   * Будет вызвано при начале открытия модалки.
   */
  onOpen?: VoidFunction;
  /**
   * Будет вызвано при окончательном открытии модалки.
   */
  onOpened?: VoidFunction;
  /**
   * Будет вызвано при начале закрытия модалки.
   */
  onClose?: (reason: ModalPageCloseReason, event?: UIEvent<HTMLElement>) => void;
  /**
   * Будет вызвано при окончательном закрытии модалки.
   */
  onClosed?: VoidFunction;
  /**
   * Управляющие элементы под кнопкой закрытия.
   *
   * Доступно только в `compact`-режиме. Рекомендуется размещать иконки размера 20, обернутые в ModalOutsideButton
   *
   */
  outsideButtons?: React.ReactNode;
  /**
   * Позволяет отключить захват фокуса.
   *
   * Нужно использовать, когда поверх одной модалки открывается другая, чтобы два `FocusTrap` не конфликтовали
   */
  disableFocusTrap?: UseFocusTrapProps['disabled'];
}
