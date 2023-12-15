import * as React from 'react';
import { classNames, noop } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { useAdaptivityWithJSMediaQueries } from '../../hooks/useAdaptivityWithJSMediaQueries';
import { useEventListener } from '../../hooks/useEventListener';
import { useGlobalEventListener } from '../../hooks/useGlobalEventListener';
import { useVirtualKeyboard } from '../../hooks/useKeyboard';
import { useTimeout } from '../../hooks/useTimeout';
import { callMultiple } from '../../lib/callMultiple';
import { NavIdProps } from '../../lib/getNavId';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import { HTMLAttributesWithRootRef } from '../../types';
import { useScrollLock } from '../AppRoot/ScrollContext';
import { FocusTrap } from '../FocusTrap/FocusTrap';
import { ModalDismissButton } from '../ModalDismissButton/ModalDismissButton';
import { ModalPageContext } from '../ModalPage/ModalPageContext';
import { ModalRootContext } from '../ModalRoot/ModalRootContext';
import { Content, ContentProps } from './components/Content/Content';
import { Footer, FooterProps } from './components/Footer/Footer';
import { Header, HeaderProps } from './components/Header/Header';
import { Indent } from './components/Indent/Indent';
import styles from './ModalSheet.module.css';

const stylesSizeX = {
  none: styles['ModalSheet--sizeX-none'],
  regular: styles['ModalSheet--sizeX-regular'],
};

const sizeClassName = {
  s: styles['ModalSheet--size-s'],
  m: styles['ModalSheet--size-m'],
  l: styles['ModalSheet--size-l'],
};

function firstOpenOffset(clientHeight: number, settlingHeight: number): number {
  return (clientHeight * settlingHeight) / 100;
}

function useId(idProp: string | undefined) {
  const generatingId = React.useId();
  return idProp || generatingId;
}

// Прокрутка элемента на определенный процент
function useMobileFirstOpen(container: React.RefObject<HTMLDivElement>, settlingHeight: number) {
  const { sizeX: jsSizeX } = useAdaptivityWithJSMediaQueries();

  React.useEffect(() => {
    if (jsSizeX === 'regular') {
      return;
    }
    const el = container.current!;

    // Задержка требуется для правильной работы открытия модалки с открытой клавиатурой
    setTimeout(() => {
      el.scrollTop = 0;
      el.scrollTo({
        top: firstOpenOffset(el.clientHeight, settlingHeight),
        behavior: 'smooth',
      });
    }, 100);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

function useMobileOverlay(container: React.RefObject<HTMLDivElement>, settlingHeight: number) {
  const maskRef = React.useRef<HTMLDivElement>(null);
  const { sizeX: jsSizeX } = useAdaptivityWithJSMediaQueries();

  const scroll = () => {
    if (jsSizeX === 'regular') {
      return;
    }

    const el = container.current!;

    const indent1 = firstOpenOffset(el.clientHeight, settlingHeight);

    const opacity = Math.min(el.scrollTop / indent1, 1);

    maskRef.current!.style.opacity = `${opacity}`;
  };

  const scrollListener = useEventListener('scroll', scroll);

  useIsomorphicLayoutEffect(() => {
    const el = container.current!;
    scrollListener.add(el);
  }, [settlingHeight]);

  return maskRef;
}

function useMobileScroll(container: React.RefObject<HTMLDivElement>) {
  const [fullOpen, setFullOpen] = React.useState(false);
  const [endScroll, setEndScroll] = React.useState(false);

  const scroll = () => {
    const el = container.current!;

    const calcFullOpen = el.scrollTop >= el.offsetHeight;
    fullOpen !== calcFullOpen && setFullOpen(calcFullOpen);

    const calcEndScroll = el.offsetHeight + el.scrollTop + 1 >= el.scrollHeight;
    endScroll !== calcEndScroll && setEndScroll(calcEndScroll);
  };

  useGlobalEventListener(container.current, 'scroll', scroll);

  return { fullOpen, endScroll };
}

function useOpeningClosing(
  containerRef: React.RefObject<HTMLDivElement>,
  settlingHeight: number,
  onOpened: VoidFunction | undefined,
  onClosed: VoidFunction | undefined,
  onOpen: VoidFunction | undefined,
  onClose: VoidFunction | undefined,
) {
  useMobileFirstOpen(containerRef, settlingHeight);

  const { sizeX: jsSizeX } = useAdaptivityWithJSMediaQueries();

  const [opening, setOpening] = React.useState(true);
  const [closing, setCloses] = React.useState(false);

  // Проверяем открытие или закрытие модалки
  const animationEnd = () => {
    if (opening) {
      setOpening(false);
      onOpened && onOpened();
    }

    if (closing && onClosed) {
      onClosed();
    }
  };

  const animationFallback = useTimeout(animationEnd, 320);
  React.useEffect(() => {
    onOpen && onOpen();
    animationFallback.set();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const close = () => {
    setCloses(true);
    onClose && onClose();

    if (jsSizeX === 'compact') {
      containerRef.current?.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else {
      animationFallback.set();
    }
  };

  // Проверяем прокрутку для мобильной версии
  const onScroll = React.useCallback(() => {
    if (jsSizeX === 'regular') {
      return;
    }
    const el = containerRef.current!;

    if (opening && Math.abs(el.scrollTop - firstOpenOffset(el.clientHeight, settlingHeight)) < 2) {
      onOpened && onOpened();
      setOpening(false);
    }

    if (el.scrollTop === 0 && !opening) {
      onClosed && onClosed();
    }
  }, [jsSizeX, containerRef, opening, settlingHeight, onOpened, onClosed]);

  return {
    opening,
    closing,
    close,
    animationEnd,
    onScroll,
  };
}

export interface ModalSheetProps extends HTMLAttributesWithRootRef<HTMLDivElement>, NavIdProps {
  /**
   * Задаёт контенту максимальную ширину для десктопной версии.
   */
  size?: 's' | 'm' | 'l' | number;
  /**
   * Задаёт модальному окну фиксированную высоту.
   * Можно передать числовое значение в пикселях, а можно строкой, в том числе и в процентах "50%".
   * В мобильной версии 'settlingHeight' будет считаться относительно заданного height.
   */
  height?: string | number;

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
  onClose?: VoidFunction;
  /**
   * Будет вызвано при окончательном закрытии модалки.
   */
  onClosed?: VoidFunction;

  /**
   * Процент, на который изначально будет открыта модальная страница.
   * При settlingHeight={100} модальная страница раскрывается на всю высоту.
   */
  settlingHeight?: number;

  /**
   * Отключает оверлей.
   */
  disableOverlay?: boolean;

  /**
   * Кнопка закрытия модального окна
   */
  DismissButton?: React.ElementType;
}

export const ModalSheet = ({
  id: idProp,
  className,
  children,
  onOpen,
  onOpened,
  onClose,
  onClosed,
  settlingHeight = 75,
  disableOverlay,
  onAnimationEnd,
  size = 's',
  height,
  DismissButton = ModalDismissButton,
  ...restProp
}: ModalSheetProps) => {
  const id = useId(idProp);
  const contextValue = React.useMemo(() => ({ labelId: `${id}-label` }), [id]);

  const { sizeX = 'none' } = useAdaptivity();

  const containerRef = React.useRef<HTMLDivElement>(null);

  const { fullOpen, endScroll } = useMobileScroll(containerRef);
  const isSoftwareKeyboardOpened = useVirtualKeyboard().isOpened;

  const overlayRef = useMobileOverlay(containerRef, settlingHeight);

  const { opening, closing, close, animationEnd, onScroll } = useOpeningClosing(
    containerRef,
    settlingHeight,
    onOpened,
    onClosed,
    onOpen,
    onClose,
  );

  useScrollLock();

  /**
   * Отключаем snap при полном открытии модального окна, открытой клавиатуре или закрытии
   *
   * - `endScroll` при достижении конца прокрутки, на андроиде растягивается контент
   *
   * - `isSoftwareKeyboardOpened` с открытой клавиатуре пользователь может случайно закрыть окно
   *
   * - `closes` При закрытии, snap может остановить scrollTo
   */
  const disableSnap = endScroll || isSoftwareKeyboardOpened || closing;

  return (
    <FocusTrap
      id={id}
      className={classNames(
        className,
        styles['ModalSheet'],
        sizeX !== 'compact' && stylesSizeX[sizeX],
        opening && styles['ModalSheet--opening'],
        closing && styles['ModalSheet--closing'],
      )}
      role="dialog"
      aria-modal="true"
      aria-labelledby={contextValue.labelId}
      onAnimationEnd={callMultiple(animationEnd, onAnimationEnd)}
      onClose={close}
      {...restProp}
    >
      {!disableOverlay && (
        <div className={styles['ModalSheet__overlay']} ref={overlayRef} onClick={close} />
      )}
      <div
        className={classNames(
          styles['ModalSheet__container'],
          fullOpen && styles['ModalSheet__fullOpen'],
          disableSnap && styles['ModalSheet__disableSnap'],
          typeof size === 'string' && sizeClassName[size],
        )}
        style={{
          maxWidth: typeof size === 'number' ? size : undefined,
          height,
        }}
        ref={containerRef}
        onScroll={onScroll}
      >
        <Indent settlingHeight={settlingHeight} onClick={close} />

        <ModalPageContext.Provider value={contextValue}>
          <ModalRootContext.Provider
            value={{ updateModalHeight: noop, registerModal: noop, isInsideModal: true }}
          >
            <div className={styles['ModalSheet__content']}>{children}</div>
          </ModalRootContext.Provider>
        </ModalPageContext.Provider>
        <DismissButton className={styles['ModalSheet__dismissButton']} onClick={close} />
      </div>
    </FocusTrap>
  );
};

export type ModalSheetHeaderProps = HeaderProps;
ModalSheet.Header = Header;

export type ModalSheetContentProps = ContentProps;
ModalSheet.Content = Content;

export type ModalSheetFooterProps = FooterProps;
ModalSheet.Footer = Footer;
