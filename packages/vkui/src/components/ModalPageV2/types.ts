import type { HTMLAttributesWithRootRef } from '../../types';

export type CloseReason = 'clickBackdrop' | 'clickCloseButton' | 'escapeKeyDown' | 'swipeDown';

export interface ModalPageV2Props extends HTMLAttributesWithRootRef<HTMLDivElement> {
  open: boolean;
  /**
   * Задаёт контенту максимальную ширину на десктопе.
   */
  desktopMaxWidth?: 's' | 'm' | 'l' | number;
  /**
   * Задаёт модальному окну фиксированную высоту.
   * Можно передать числовое значение в пикселях, а можно строкой, в том числе и в процентах "50%".
   * В мобильной версии 'settlingHeight' будет считаться относительно заданного height.
   */
  // height?: string | number;
  /**
   * Процент, на который изначально будет открыта модальная страница. При `settlingHeight={100}` модальная страница раскрывается на всю высоту.
   */
  settlingHeight?: number;
  /**
   * Если высота контента в модальной странице может поменяться, нужно установить это свойство
   */
  dynamicContentHeight?: boolean;
  /**
   * Скрывает кнопку закрытия (актуально для iOS, т.к. можно отрисовать кнопку закрытия внутри модалки)
   */
  disableCloseButton?: boolean;
  /**
   * `data-testid` для кнопки закрытия
   */
  closeButtonTestId?: string;
  /**
   * Позволяет отключить возможность закрытия модальной страницы (смахивание, клавиша `ESC`, клик по подложке)
   *
   * ⚠️ ВНИМАНИЕ: использование этой опции негативно сказывается на пользовательском опыте
   */
  // preventClose?: boolean;
  disableAutoFocus?: boolean;
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
  onClose?(event: React.MouseEvent<HTMLElement> | undefined, reason: CloseReason): void;
  /**
   * Будет вызвано при окончательном закрытии модалки.
   */
  onClosed?(): void;
}
