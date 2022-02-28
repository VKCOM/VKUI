import * as React from "react";
import {
  Icon24ChevronCompactLeft,
  Icon24ChevronCompactRight,
} from "@vkontakte/icons";

import type { HasRootRef } from "../../types";

import { classNames } from "../../lib/classNames";

import { useAdaptivity } from "../../hooks/useAdaptivity";
import { PaginationPageType, usePagination } from "../../hooks/usePagination";

import Tappable from "../Tappable/Tappable";
import Button from "../Button/Button";

import "./Pagination.css";

function getPageAreaLabelDefault(page: number, isCurrent: boolean): string {
  return isCurrent ? `page ${page}` : `go to page ${page}`;
}

export interface PaginationProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "onChange">,
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
   * Переобределение `aria-label` для кнопки навигации назад.
   */
  prevButtonAriaLabel?: string;
  /**
   * Компонент иконки для кнопки с навигацией назад.
   * Так как по умолчанию иконка есть, слеудет передать `null`, чтобы её скрыть.
   */
  prevButtonIcon?: React.ReactNode;
  /**
   * Текст для кнопки с навигацией назад.
   */
  prevButtonText?: React.ReactNode;
  /**
   * Текст для кнопки с навигацией вперёд.
   */
  nextButtonText?: React.ReactNode;
  /**
   * Компонент иконки для кнопки с навигацией вперёд.
   * Так как по умолчанию иконка есть, слеудет передать `null`, чтобы её скрыть.
   */
  nextButtonIcon?: React.ReactNode;
  /**
   * Переобределение `aria-label` для кнопки навигации вперёд.
   */
  nextButtonAriaLabel?: string;
  /**
   * Функция для переопределния и/или локализации `aria-label` атрибута.
   * По умолчанию используется текст на "en_US".
   */
  getPageAreaLabel?(page: number, isCurrent: boolean): string;
  onChange?(page: number): void;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage = 1,
  siblingCount = 1,
  boundaryCount = 1,
  totalPages = 1,
  disabled,
  getPageAreaLabel = getPageAreaLabelDefault,
  prevButtonAriaLabel = "go to previous page",
  prevButtonIcon = <Icon24ChevronCompactLeft />,
  prevButtonText,
  nextButtonText,
  nextButtonIcon = <Icon24ChevronCompactRight />,
  nextButtonAriaLabel = "go to next page",
  getRootRef,
  onChange,
  ...resetProps
}) => {
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
      const page: string = event.currentTarget.dataset.page || "1";
      onChange?.(Number(page));
    },
    [onChange]
  );

  const handleNextClick = React.useCallback(() => {
    if (onChange && !isLastPage) {
      onChange(currentPage + 1);
    }
  }, [currentPage, isLastPage, onChange]);

  const renderPages = React.useCallback(
    (page: PaginationPageType) => {
      switch (page) {
        case "start-ellipsis":
        case "end-ellipsis":
          return (
            <li
              key={page}
              vkuiClass="Pagination__listitem Pagination__listitem--type-narrow"
            >
              <div
                vkuiClass={classNames(
                  "Pagination__page",
                  "Pagination__page--type-ellipsis",
                  `Pagination__page--sizeY-${sizeY}`,
                  disabled && "Pagination__page--disabled"
                )}
              >
                ...
              </div>
            </li>
          );
        default: {
          const isCurrent = page === currentPage;
          return (
            <li vkuiClass="Pagination__listitem" key={page}>
              <Tappable
                vkuiClass={classNames(
                  "Pagination__page",
                  `Pagination__page--sizeY-${sizeY}`,
                  isCurrent && "Pagination__page--current",
                  disabled && "Pagination__page--disabled"
                )}
                activeMode="Pagination__page--state-active"
                hoverMode="Pagination__page--state-hover"
                hasActive={!isCurrent}
                hasHover={!isCurrent}
                focusVisibleMode="outside"
                disabled={disabled}
                data-page={page}
                aria-current={isCurrent ? true : undefined}
                aria-label={getPageAreaLabel(page, isCurrent)}
                onClick={handleClick}
              >
                {page}
              </Tappable>
            </li>
          );
        }
      }
    },
    [sizeY, currentPage, disabled, getPageAreaLabel, handleClick]
  );

  return (
    <nav
      vkuiClass="Pagination"
      role="navigation"
      aria-label="pagination navigation"
      ref={getRootRef}
      {...resetProps}
    >
      <ul vkuiClass="Pagination__list">
        <li vkuiClass="Pagination__listitem Pagination__listitem--type-before">
          <Button
            size="l"
            sizeY={sizeY}
            before={prevButtonIcon}
            appearance="accent"
            mode="tertiary"
            stretched
            disabled={isFirstPage || disabled}
            aria-label={prevButtonAriaLabel}
            onClick={handlePrevClick}
          >
            {prevButtonText}
          </Button>
        </li>
        {pages.map(renderPages)}
        <li vkuiClass="Pagination__listitem Pagination__listitem--type-after">
          <Button
            size="l"
            sizeY={sizeY}
            after={nextButtonIcon}
            appearance="accent"
            mode="tertiary"
            stretched
            disabled={isLastPage || disabled}
            aria-label={nextButtonAriaLabel}
            onClick={handleNextClick}
          >
            {nextButtonText}
          </Button>
        </li>
      </ul>
    </nav>
  );
};
