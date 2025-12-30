import { isEqual } from '@vkontakte/vkjs';

export function cacheDateTimeFormat() {
  let cache: Intl.DateTimeFormat | undefined = undefined;

  let prevLocales: Intl.LocalesArgument | undefined = undefined;
  let prevOptions: Intl.DateTimeFormatOptions | undefined = undefined;

  return (locales?: Intl.LocalesArgument, options?: Intl.DateTimeFormatOptions) => {
    if (cache === undefined || prevLocales !== locales || !isEqual(prevOptions, options)) {
      prevLocales = locales;
      prevOptions = options;
      cache = new Intl.DateTimeFormat(locales, options);
    }

    return cache;
  };
}
