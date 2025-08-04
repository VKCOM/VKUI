import type { SearchResultProps } from './types';

export function prepareData(data: SearchResultProps[]) {
  const preparedData = data.map((newData) => ({
    ...newData,
    url: newData.url.replace(/\.html(?=#|$)/, ''),
    sub_results: newData.sub_results.map((r) => ({
      ...r,
      url: r.url.replace(/\.html(?=#|$)/, ''),
    })),
  }));
  return preparedData.sort((a, b) => {
    const aMaxWeight = a.weighted_locations.reduce((max, loc) => Math.max(max, loc.weight), 0);

    const bMaxWeight = b.weighted_locations.reduce((max, loc) => Math.max(max, loc.weight), 0);

    return bMaxWeight - aMaxWeight;
  });
}

export function getErrorMessage(error: unknown) {
  return error instanceof Error ? error.message : String(error);
}
