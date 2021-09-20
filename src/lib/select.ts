type Option = {
  label?: string;
  [index: string]: any;
};

type GetOptionLabel = (option: Option) => string;

const wordSplitters = /\p{Pd}|\p{Z}/u;

/**
 * Убирает кавычки, скобки, точки и запятые
 */
const cleanSentence = (sentence = '') => {
  return sentence.replace(/\p{Ps}|\p{Pe}|\p{Pi}|\p{Pf}|"|'|,|\./gu, '');
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

  label = cleanSentence(label);
  if (label.startsWith(query)) {
    return true;
  }

  const words: string[] = label.split(wordSplitters);
  const wordsLength = words.length;

  for (let start = 0; start <= wordsLength; start++) {
    for (let end = start + 2; end <= wordsLength; end++) {
      words.push(words.slice(start, end).join(' '));
    }
  }

  for (const word of words) {
    if (word.startsWith(query)) {
      return true;
    }
  }

  return false;
};
