import * as React from 'react';
import { Icon24ChevronCompactLeft, Icon24ChevronCompactRight } from '@vkontakte/icons';
import { PaginationPageType, usePagination } from '../../hooks/usePagination';
import type { HTMLAttributesWithRootRef } from '../../types';
import { Button } from '../Button/Button';
import { RootComponent } from '../RootComponent/RootComponent';
import { PaginationPageButton } from './PaginationPage/PaginationPageButton';
import { PaginationPageEllipsis } from './PaginationPage/PaginationPageEllipsis';
import { getPageAriaLabelDefault } from './utils';
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
   * Переопределение `aria-label` для кнопки навигации назад.
   * По умолчанию используется текст на "ru_RU".
   */
  prevButtonAriaLabel?: string;
  /**
   * Переопределение `aria-label` для кнопки навигации вперёд.
   * По умолчанию используется текст на "ru_RU".
   */
  nextButtonAriaLabel?: string;
  /**
   * Функция для переопределения и/или локализации `aria-label` атрибута.
   * По умолчанию используется текст на "ru_RU".
   */
  getPageAriaLabel?(page: number, isCurrent: boolean): string;
  onChange?(page: number): void;
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
  getPageAriaLabel = getPageAriaLabelDefault,
  prevButtonAriaLabel = 'Перейти на предыдущую страницу',
  nextButtonAriaLabel = 'Перейти на следующую страницу',
  onChange,
  ...resetProps
}: PaginationProps) => {
  const pages = usePagination({
    currentPage,
    totalPages,
    siblingCount,
    boundaryCount,
  });
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const handlePrevClick = React.useCallback(() => {
    if (onChange && !isFirstPage) {
      onChange(currentPage - 1);
    }
  }, [currentPage, isFirstPage, onChange]);

  const handleClick = React.useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      const page: string = event.currentTarget.dataset.page || '1';
      onChange?.(Number(page));
    },
    [onChange],
  );

  const handleNextClick = React.useCallback(() => {
    if (onChange && !isLastPage) {
      onChange(currentPage + 1);
    }
  }, [currentPage, isLastPage, onChange]);

  const renderPages = React.useCallback(
    (page: PaginationPageType) => {
      switch (page) {
        case 'start-ellipsis':
        case 'end-ellipsis':
          return (
            <li key={page}>
              <PaginationPageEllipsis disabled={disabled} />
            </li>
          );
        default: {
          const isCurrent = page === currentPage;
          return (
            <li key={page}>
              <PaginationPageButton
                getPageAriaLabel={getPageAriaLabel}
                isCurrent={isCurrent}
                onClick={handleClick}
                disabled={disabled}
              >
                {page}
              </PaginationPageButton>
            </li>
          );
        }
      }
    },
    [currentPage, disabled, getPageAriaLabel, handleClick],
  );

  return (
    <RootComponent
      Component="nav"
      role="navigation"
      aria-label="Навигация по страницам"
      {...resetProps}
    >
      <ul className={styles['Pagination__list']}>
        <li className={styles['Pagination__prevButtonContainer']}>
          <Button
            size="l"
            before={<Icon24ChevronCompactLeft width={24} />}
            appearance="accent"
            mode="tertiary"
            disabled={isFirstPage || disabled}
            aria-label={prevButtonAriaLabel}
            onClick={handlePrevClick}
          />
        </li>
        {pages.map(renderPages)}
        <li className={styles['Pagination__nextButtonContainer']}>
          <Button
            size="l"
            after={<Icon24ChevronCompactRight width={24} />}
            appearance="accent"
            mode="tertiary"
            disabled={isLastPage || disabled}
            aria-label={nextButtonAriaLabel}
            onClick={handleNextClick}
          />
        </li>
      </ul>
    </RootComponent>
  );
};
