import type { CSSProperties, ReactNode, Ref, UIEvent } from 'react';
import type { NavIdProps } from '../../lib/getNavId';
import type { HTMLAttributesWithRootRef, LiteralUnion } from '../../types';

export type ModalPageCloseReason =
  | 'click-overlay'
  | 'click-close-button'
  | 'escape-key'
  | 'swipe-down';

type OmittedStyleAttribute = {
  /**
   * Дополнительные стили.
   */
  style?: Omit<CSSProperties, 'height' | 'maxWidth' | 'maxHeight'> | undefined;
};

export interface ModalPageProps
  extends NavIdProps,
    Omit<HTMLAttributesWithRootRef<HTMLDivElement>, 'id' | 'style'>,
    OmittedStyleAttribute {
  /**
   * Состояние видимости.
   *
   * @default false
   */
  open?: boolean | undefined;
  /**
   * Сохранять ли компонент в DOM при `open={false}`.
   *
   * @default false
   */
  keepMounted?: boolean | undefined;
  /**
   * Шапка модальной страницы, `<ModalPageHeader />`.
   */
  header?: ReactNode | undefined;
  /**
   * Подвал модальной страницы, `<ModalPageFooter />`.
   */
  footer?: ReactNode | undefined;
  /**
   * Задаёт контенту максимальную ширину на десктопе.
   */
  size?: LiteralUnion<
    's' | 'm' | 'l' | 'auto' | 'fit-content' | 'max-content' | 'min-content',
    string | number
  >;
  /**
   * Задаёт модальному окну фиксированную высоту.
   * Можно передать числовое значение в пикселях, а можно строкой, в том числе и в процентах "50%".
   * В мобильной версии 'settlingHeight' будет считаться относительно заданного height.
   */
  height?: string | number | undefined;
  /**
   * Процент, на который изначально будет открыта модальная страница.
   *
   * > ⚠️ Следует использовать следующие значения: `25`, `50`, `75`, `100`.
   * > При передаче `< 25` значение приведётся к `25`, при передаче `> 75` значение приведётся к `75`.
   *
   * Игнорируется при включении `dynamicContentHeight`.
   */
  settlingHeight?: number | undefined;
  /**
   * Если высота контента в модальной странице может поменяться, нужно установить это свойство.
   */
  dynamicContentHeight?: boolean | undefined;
  /**
   * Отключает фокус на интерактивный элемент после открытия модалки.
   *
   * > Важно установить фокус после открытия в любое место модалки используя событие `onOpened`, иначе не будет работать закрытие по нажатию `Esc`.
   */
  noFocusToDialog?: boolean | undefined;
  /**
   * Скрывает кнопку закрытия (актуально для iOS, так как можно отрисовать кнопку закрытия внутри модалки).
   */
  hideCloseButton?: boolean | undefined;
  /**
   * `data-testid` для содержимого модального окна.
   */
  modalContentTestId?: string | undefined;
  /**
   * Возвращает DOM-элемент содержимого модального окна.
   */
  getModalContentRef?: Ref<HTMLDivElement> | undefined;
  /**
   * `data-testid` для оверлея.
   */
  modalOverlayTestId?: string | undefined;
  /**
   * `data-testid` для кнопки закрытия.
   */
  modalDismissButtonTestId?: string | undefined;
  /**
   * Текст для скринридера.
   */
  modalDismissButtonLabel?: string | undefined;
  /**
   * Позволяет отключить возможность закрытия модальной страницы (смахивание, клавиша `ESC`, нажатие на подложку).
   *
   * ⚠️ ВНИМАНИЕ: использование этой опции негативно сказывается на пользовательском опыте.
   */
  preventClose?: boolean | undefined;
  /**
   * Отключает раскрытие и закрытие панели в мобильном виде.
   */
  disableContentPanningGesture?: boolean | undefined;
  /**
   * Будет вызвано при начале открытия модалки.
   */
  onOpen?: VoidFunction | undefined;
  /**
   * Будет вызвано при окончательном открытии модалки.
   */
  onOpened?: VoidFunction | undefined;
  /**
   * Будет вызвано при начале закрытия модалки.
   */
  onClose?: ((reason: ModalPageCloseReason, event?: UIEvent<HTMLElement>) => void) | undefined;
  /**
   * Будет вызвано при окончательном закрытии модалки.
   */
  onClosed?: VoidFunction | undefined;
  /**
   * Управляющие элементы под кнопкой закрытия.
   *
   * Доступно только в `compact`-режиме. Рекомендуется размещать иконки размера 20, обернутые в ModalOutsideButton.
   *
   */
  outsideButtons?: React.ReactNode | undefined;
  /**
   * Управление поведением возврата фокуса при закрытии всплывающего окна.
   * @default true
   */
  restoreFocus?: boolean | (() => boolean | HTMLElement) | undefined;
  /**
   * Позволяет отключить захват фокуса.
   *
   * Нужно использовать, когда поверх одной модалки открывается другая, чтобы два `FocusTrap` не конфликтовали.
   */
  disableFocusTrap?: boolean | undefined;
  /**
   * Отключает отображение и взаимодействие с фоном модалки.
   */
  disableModalOverlay?: boolean | undefined;
  /**
   * Отключает анимацию открытия модалки.
   */
  disableOpenAnimation?: boolean | undefined;
  /**
   * Отключает анимацию закрытия модалки.
   */
  disableCloseAnimation?: boolean | undefined;
}
