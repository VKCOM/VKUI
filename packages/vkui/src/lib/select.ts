import * as React from 'react';
import { getTitleFromChildren } from './utils';
import { SelectType } from '../components/Select/Select';

type Option = {
  label?: React.ReactElement | string;
  [index: string]: any;
};

const findAllIncludes = (target = '', search = '') => {
  const includes = [];

  let i = target.indexOf(search);
  while (i !== -1) {
    includes.push(i);
    i = target.indexOf(search, i + 1);
  }

  return includes;
};

let letterRegexp: RegExp;

// На момент написания флаг u не поддерживался рядом браузеров, поэтому добавили фоллбэк.
try {
  letterRegexp = new RegExp('\\p{L}', 'u');
} catch (e) {}

type GetOptionLabel = (option: Option) => string | undefined;

const _getOptionLabel: GetOptionLabel = (option) => getTitleFromChildren(option.label);

export const defaultFilterFn = (
  query = '',
  option: Option,
  getOptionLabel: GetOptionLabel = _getOptionLabel,
) => {
  query = query.toLocaleLowerCase();
  let label = getOptionLabel(option)?.toLocaleLowerCase();

  if (label?.startsWith(query)) {
    return true;
  }

  const includes = findAllIncludes(label, query);

  // Ищем вхождение перед началом которого не буква
  if (letterRegexp && label) {
    for (const index of includes) {
      if (!letterRegexp.test(label[index - 1])) {
        return true;
      }
    }
  } else {
    // если regexp не поддерживается, то ищем любое вхождение
    return includes.length > 0;
  }

  return false;
};

export const getFormFieldModeFromSelectType = (selectType: SelectType = 'default') => {
  return selectType === 'default' ? 'default' : 'plain';
};
