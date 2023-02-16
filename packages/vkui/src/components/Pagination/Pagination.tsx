import * as React from 'react';
import { Icon24ChevronCompactLeft, Icon24ChevronCompactRight } from '@vkontakte/icons';
import { classNames } from '@vkontakte/vkjs';
import { getSizeYClassName } from '../../helpers/getSizeYClassName';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { PaginationPageType, usePagination } from '../../hooks/usePagination';
import type { HasRootRef } from '../../types';
import { Button } from '../Button/Button';
import { Tappable } from '../Tappable/Tappable';
import styles from './Pagination.module.css';

function getPageAriaLabelDefault(page: number, isCurrent: boolean): string {
  return isCurrent ? `${page} страница` : `Перейти на ${page} страницу`;
}

export interface PaginationProps
  extends Omit<React.HTMLAttributes<HTMLElement>, 'onChange'>,
    HasRootRef<HTMLElement> {
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
  getRootRef,
  onChange,
  className,
  ...resetProps
}: PaginationProps) => {
  const { sizeY } = useAdaptivity();

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
              <div
                className={classNames(
                  styles['Pagination__page'],
                  styles['Pagination__page--type-ellipsis'],
                  getSizeYClassName(styles['Pagination__page'], sizeY),
                  disabled && styles['Pagination__page--disabled'],
                )}
              >
                ...
              </div>
            </li>
          );
        default: {
          const isCurrent = page === currentPage;
          return (
            <li key={page}>
              <Tappable
                className={classNames(
                  styles['Pagination__page'],
                  getSizeYClassName(styles['Pagination__page'], sizeY),
                  isCurrent && styles['Pagination__page--current'],
                  disabled && styles['Pagination__page--disabled'],
                )}
                activeMode={styles['Pagination__page--state-active']}
                hoverMode={styles['Pagination__page--state-hover']}
                hasActive={!isCurrent}
                hasHover={!isCurrent}
                focusVisibleMode="outside"
                disabled={disabled}
                data-page={page}
                aria-current={isCurrent ? true : undefined}
                aria-label={getPageAriaLabel(page, isCurrent)}
                onClick={handleClick}
              >
                {page}
              </Tappable>
            </li>
          );
        }
      }
    },
    [sizeY, currentPage, disabled, getPageAriaLabel, handleClick],
  );

  return (
    <nav
      className={classNames(styles['Pagination'], className)}
      role="navigation"
      aria-label="Навигация по страницам"
      ref={getRootRef}
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
    </nav>
  );
};
