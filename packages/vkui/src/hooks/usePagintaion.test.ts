import { renderHook } from '@testing-library/react';
import { usePagination } from './usePagination';

describe(usePagination, () => {
  it('Should return single page by default', () => {
    const pages = renderHook(() => usePagination()).result.current;
    expect(pages).toEqual([1]);
  });

  it('Should return empty array if properties incorrect', () => {
    const { result } = renderHook(() => usePagination({ currentPage: 1, totalPages: 0 }));
    expect(result.current).toEqual([]);
  });

  it('Should has no ellipses when count <= 7', () => {
    const pages = renderHook(() => usePagination({ totalPages: 7 })).result.current;
    expect(pages).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  it('Should has an end ellipsis by default when count >= 8', () => {
    const pages = renderHook(() => usePagination({ totalPages: 8 })).result.current;
    expect(pages).toEqual([1, 2, 3, 4, 5, 'end-ellipsis', 8]);
  });

  it('Should has a start ellipsis when page >= 5', () => {
    const pages = renderHook(() => usePagination({ totalPages: 8, currentPage: 5 })).result.current;
    expect(pages).toEqual([1, 'start-ellipsis', 4, 5, 6, 7, 8]);
  });

  it('Should has start & end ellipsis when count >= 9', () => {
    const pages = renderHook(() => usePagination({ totalPages: 9, currentPage: 5 })).result.current;
    expect(pages).toEqual([1, 'start-ellipsis', 4, 5, 6, 'end-ellipsis', 9]);
  });

  it('Can have a reduced siblingCount', () => {
    const pages = renderHook(() =>
      usePagination({ totalPages: 7, currentPage: 4, siblingCount: 0 }),
    ).result.current;
    expect(pages).toEqual([1, 'start-ellipsis', 4, 'end-ellipsis', 7]);
  });

  it('Can have an increased siblingCount', () => {
    const pages = renderHook(() =>
      usePagination({ totalPages: 11, currentPage: 6, siblingCount: 2 }),
    ).result.current;
    expect(pages).toEqual([1, 'start-ellipsis', 4, 5, 6, 7, 8, 'end-ellipsis', 11]);
  });

  it('Can have a reduced boundaryCount', () => {
    const pages = renderHook(() =>
      usePagination({ totalPages: 11, currentPage: 6, boundaryCount: 0 }),
    ).result.current;
    expect(pages).toEqual(['start-ellipsis', 5, 6, 7, 'end-ellipsis']);
  });

  it('Can have an increased boundaryCount', () => {
    const pages = renderHook(() =>
      usePagination({ totalPages: 11, currentPage: 6, boundaryCount: 2 }),
    ).result.current;
    expect(pages).toEqual([1, 2, 'start-ellipsis', 5, 6, 7, 'end-ellipsis', 10, 11]);
  });

  it('Can have a reduced siblingCount and boundaryCount', () => {
    const pages = renderHook(() =>
      usePagination({
        totalPages: 11,
        currentPage: 6,
        siblingCount: 0,
        boundaryCount: 0,
      }),
    ).result.current;
    expect(pages).toEqual(['start-ellipsis', 6, 'end-ellipsis']);
  });
});
