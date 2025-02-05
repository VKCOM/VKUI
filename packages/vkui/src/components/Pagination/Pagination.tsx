'use client';

import * as React from 'react';
import { Icon24ChevronCompactLeft, Icon24ChevronCompactRight } from '@vkontakte/icons';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { useConfigDirection } from '../../hooks/useConfigDirection';
import { type PaginationPageType, usePagination } from '../../hooks/usePagination';
import type { HasComponent, HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';
import {
  type CustomPaginationNavigationButton,
  PaginationNavigationButton,
  type PaginationNavigationButtonProps,
} from './PaginationNavigationButton/PaginationNavigationButton';
import {
  type CustomPaginationPageButtonProps,
  PaginationPageButton,
} from './PaginationPage/PaginationPageButton';
import { PaginationPageEllipsis } from './PaginationPage/PaginationPageEllipsis';
import styles from './Pagination.module.css';

export interface PaginationProps extends Omit<HTMLAttributesWithRootRef<HTMLElement>, 'onChange'> {
  /**
   * Текущая страница.
   */
  currentPage?: number;
  /**
   * Кол-во всегда видимых страниц по краям текущей страницы.
   */
  siblingCount?: number;
  /**
   * Кол-во всегда видимых страниц в начале и в конце.
   */
  boundaryCount?: number;
  /**
   * Общее кол-во страниц.
   */
  totalPages?: number;
  /**
   * Блокировка всех кнопок.
   */
  disabled?: boolean;
  /**
   * Декоративный текст для кнопки навигации назад.
   *
   * > Note: Экранные дикторы будут использовать `prevButtonLabel`.
   */
  prevButtonCaption?: string;
  /**
   * Декоративный текст для кнопки навигации вперёд.
   *
   * > Note: Экранные дикторы будут использовать `nextButtonLabel`.
   */
  nextButtonCaption?: string;
  /**
   * Задаёт стиль отображения кнопок навигации.
   *
   * - `icon` – показывать только иконку;
   * - `caption` – показывать только подпись;
   * - `both` – показывать и иконку, и подпись.
   */
  navigationButtonsStyle?: PaginationNavigationButtonProps['style'];
  /**
   * [a11y] Метка для обозначения блока навигации.
   */
  navigationLabel?: string;
  navigationLabelComponent?: HasComponent['Component'];
  /**
   * [a11y] Метка для кнопки навигации назад.
   */
  prevButtonLabel?: string;
  /**
   * [a11y] Метка для кнопки навигации вперёд.
   */
  nextButtonLabel?: string;
  /**
   * [a11y] Функция для переопределения и/или локализации метки кнопки страницы.
   *
   * > Note: По возможности лучше не использовать,
   * так как компонент и так проставляет номер страницы в разметку,
   * что достаточно для пользователей скринридеров.
   * Дополнительная информация скорее будет избыточна,
   * так как будет зачитываться для каждой кнопки при перемещении по списку.
   */
  getPageLabel?: (isCurrent: boolean) => string;
  onChange?: (page: number, event: React.MouseEvent<HTMLElement>) => void;
  /**
   * Функция для кастомного рендера кнопок страниц.
   *
   * > Note: `CustomPaginationPageButtonProps` наследует API [Tappable](https://vkcom.github.io/VKUI/#/Tappable).
   */
  renderPageButton?: (props: CustomPaginationPageButtonProps) => React.ReactNode;
  /**
   Функция для кастомного рендера кнопок навигации `prev` и `next`.
   *
   * > Note: `CustomPaginationNavigationButton` наследует API [Button](https://vkcom.github.io/VKUI/#/Button).
   */
  renderNavigationButton?: (props: CustomPaginationNavigationButton) => React.ReactNode;
  /**
   * Передает атрибут `data-testid` для кнопок страниц
   */
  pageButtonTestId?: (day: PaginationPageType, active: boolean) => string;
  /**
   * Передает атрибут `data-testid` для кнопки `prev`
   */
  prevButtonTestId?: string;
  /**
   * Передает атрибут `data-testid` для кнопки `next`
   */
  nextButtonTestId?: string;
}

/**
 * @see https://vkcom.github.io/VKUI/#/Pagination
 */
export const Pagination = ({
  currentPage = 1,
  siblingCount = 1,
  boundaryCount = 1,
  totalPages = 1,
  disabled,
  prevButtonCaption = 'Назад',
  nextButtonCaption = 'Вперёд',
  navigationButtonsStyle = 'icon',
  getPageLabel,
  navigationLabel = 'Страницы',
  navigationLabelComponent = 'h2',
  prevButtonLabel = 'Перейти на предыдущую страницу',
  nextButtonLabel = 'Перейти на следующую страницу',
  onChange,
  renderPageButton,
  pageButtonTestId,
  prevButtonTestId,
  nextButtonTestId,
  renderNavigationButton,
  ...resetProps
}: PaginationProps): React.ReactNode => {
  const direction = useConfigDirection();
  const isRtl = direction === 'rtl';
  const pages = usePagination({
    currentPage,
    totalPages,
    siblingCount,
    boundaryCount,
  });
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;
  const prevPage = isFirstPage ? undefined : currentPage - 1;
  const nextPage = isLastPage ? undefined : currentPage + 1;

  const handlePrevClick = React.useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      if (onChange && prevPage !== undefined) {
        onChange(prevPage, event);
      }
    },
    [prevPage, onChange],
  );

  const handleClick = React.useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      const page: string = event.currentTarget.dataset.page || '1';
      onChange?.(Number(page), event);
    },
    [onChange],
  );

  const handleNextClick = React.useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      if (onChange && nextPage !== undefined) {
        onChange(nextPage, event);
      }
    },
    [nextPage, onChange],
  );

  const { sizeY } = useAdaptivity();

  const renderPages = React.useCallback(
    (page: PaginationPageType) => {
      const isCurrent = page === currentPage;
      const dataTestId = pageButtonTestId?.(page, isCurrent);

      switch (page) {
        case 'start-ellipsis':
        case 'end-ellipsis':
          return (
            <li key={page}>
              <PaginationPageEllipsis disabled={disabled} data-testid={dataTestId} />
            </li>
          );
        default: {
          return (
            <li key={page}>
              <PaginationPageButton
                getPageLabel={getPageLabel}
                isCurrent={isCurrent}
                onClick={handleClick}
                disabled={disabled}
                sizeY={sizeY}
                renderPageButton={renderPageButton}
                data-testid={dataTestId}
              >
                {page}
              </PaginationPageButton>
            </li>
          );
        }
      }
    },
    [currentPage, disabled, getPageLabel, handleClick, renderPageButton, sizeY, pageButtonTestId],
  );

  const navigationLabelId = React.useId();

  return (
    <RootComponent
      Component="nav"
      role="navigation"
      aria-labelledby={navigationLabelId}
      {...resetProps}
    >
      <VisuallyHidden id={navigationLabelId} Component={navigationLabelComponent}>
        {navigationLabel}
      </VisuallyHidden>
      <ul className={styles.list}>
        <li className={styles.prevButtonContainer}>
          <PaginationNavigationButton
            type="prev"
            style={navigationButtonsStyle}
            caption={prevButtonCaption}
            Icon={isRtl ? Icon24ChevronCompactRight : Icon24ChevronCompactLeft}
            a11yLabel={prevButtonLabel}
            disabled={isFirstPage || disabled}
            onClick={handlePrevClick}
            data-page={prevPage}
            data-testid={prevButtonTestId}
            renderNavigationButton={renderNavigationButton}
          />
        </li>
        {pages.map(renderPages)}
        <li className={styles.nextButtonContainer}>
          <PaginationNavigationButton
            type="next"
            style={navigationButtonsStyle}
            caption={nextButtonCaption}
            Icon={isRtl ? Icon24ChevronCompactLeft : Icon24ChevronCompactRight}
            a11yLabel={nextButtonLabel}
            disabled={isLastPage || disabled}
            onClick={handleNextClick}
            data-page={nextPage}
            data-testid={nextButtonTestId}
            renderNavigationButton={renderNavigationButton}
          />
        </li>
      </ul>
    </RootComponent>
  );
};
