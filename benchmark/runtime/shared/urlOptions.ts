export type Options = {
  instanceCount: number;
  withProviders: boolean;
};

const DEFAULT_PARAMS: Options = { instanceCount: 1, withProviders: false };

export const withOptions = (url: string, optionsProp: Partial<Options>): string => {
  const options = { ...DEFAULT_PARAMS, ...optionsProp };
  const searchParams = new URLSearchParams();
  Object.entries(options).forEach(([key, value]) => {
    searchParams.set(key, JSON.stringify(value));
  });
  const result = searchParams.toString();
  return result !== '' ? `${url}?${result}` : url;
};

export const parseOptions = (location: Location): Options => {
  const options = DEFAULT_PARAMS;

  new URLSearchParams(location.search).forEach((value, key) => {
    if (options.hasOwnProperty(key)) {
      // @ts-expect-error
      options[key] = JSON.parse(value);
    }
  });

  return options;
};
