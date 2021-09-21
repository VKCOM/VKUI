type Option = {
  label?: string;
  [index: string]: any;
};

type GetOptionLabel = (option: Option) => string;

const findAllIncludes = (target = '', search = '') => {
  const includes = [];

  for (let i = 0; i <= target.length;) {
    const index = target.indexOf(search, i);
    if (index >= 0) {
      includes.push(index);
      i = index + 1;
    } else {
      return includes;
    }
  }

  return includes;
};

export const defaultFilterFn = (
  query = '',
  option: Option,
  getOptionLabel: GetOptionLabel = (option) => option.label,
) => {
  if (query.length === 0) {
    return true;
  }

  query = query.toLowerCase();
  let label = getOptionLabel(option).toLowerCase();

  if (label.startsWith(query)) {
    return true;
  }

  const includes = findAllIncludes(label, query);

  // Если предыдущий символ не является буквой, то значит поиск валидный.
  // На момент написания флаг u не поддерживался рядом браузеров, поэтому добавили фоллбэк.
  try {
    for (const index of includes) {
      if (!/\p{L}/u.test(label[index - 1])) {
        return true;
      }
    }
  } catch (e) {
    return includes.length > 0;
  }

  return false;
};
