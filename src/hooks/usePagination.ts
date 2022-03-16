import * as React from "react";

interface UsePagintaionProps {
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
}

export type PaginationPageType = "start-ellipsis" | "end-ellipsis" | number;

export type UsePaginationResult = PaginationPageType[];

/**
 * Хук взаимствован у @mui с некоторыми изменениями.
 *  [usePagination.js](https://github.com/mui/material-ui/blob/master/packages/mui-material/src/usePagination/usePagination.js).
 *
 * Примеры вывода:
 *           v
 * [1, 2, 3, 4, 5, 'end-ellipsis', 10]
 *                          v
 * [1, 'start-ellipsis', 4, 5, 6, 'end-ellipsis', 10]
 *                          v
 * [1, 'start-ellipsis', 6, 7, 8, 9, 10]
 */
export const usePagination = ({
  currentPage = 1,
  siblingCount = 1,
  boundaryCount = 1,
  totalPages: endPage = 1,
}: UsePagintaionProps = {}): UsePaginationResult =>
  React.useMemo(() => {
    const range = (from: number, to: number, step = 1) => {
      const range = [];
      let i = from;

      while (i <= to) {
        range.push(i);
        i += step;
      }

      return range;
    };

    const startPages = range(1, Math.min(boundaryCount, endPage));
    const endPages = range(
      Math.max(endPage - boundaryCount + 1, boundaryCount + 1),
      endPage
    );

    const lowerBoundaryWhenCurrentPageHigh =
      endPage - boundaryCount - 1 - 2 * siblingCount;
    const siblingsStart = Math.max(
      Math.min(currentPage - siblingCount, lowerBoundaryWhenCurrentPageHigh),
      boundaryCount + 2
    );

    const upperBounadryWhenCurrentPageLow =
      boundaryCount + 2 + 2 * siblingCount;
    const siblingsEnd = Math.min(
      Math.max(currentPage + siblingCount, upperBounadryWhenCurrentPageLow),
      endPages.length > 0 ? endPages[0] - 2 : endPage - 1
    );

    const pages: UsePaginationResult = startPages;

    if (siblingsStart > boundaryCount + 2) {
      pages.push("start-ellipsis");
    } else if (boundaryCount + 1 < endPage - boundaryCount) {
      pages.push(boundaryCount + 1);
    }

    pages.push(...range(siblingsStart, siblingsEnd));

    if (siblingsEnd < endPage - boundaryCount - 1) {
      pages.push("end-ellipsis");
    } else if (endPage - boundaryCount > boundaryCount) {
      pages.push(endPage - boundaryCount);
    }

    pages.push(...endPages);

    return pages;
  }, [currentPage, endPage, siblingCount, boundaryCount]);
