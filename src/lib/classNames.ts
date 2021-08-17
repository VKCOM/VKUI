export type ObjectClassNames = Record<string, boolean | undefined | null>;

export type ClassName = number | string | ObjectClassNames | false | null | undefined;

const stringifyClassName = (mix: ClassName): string => {
  const type = typeof mix;

  let result = '';

  if (type === 'string' || type === 'number') {
    result += mix;
  } else if (type === 'object') {
    if (Array.isArray(mix)) {
      let part;

      for (let key = 0; key < mix.length; ++key) {
        if (mix[key]) {
          if (part = stringifyClassName(mix[key])) {
            result && (result += ' ');
            result += part;
          }
        }
      }
    } else {
      const record = mix as ObjectClassNames;

      for (const key in record) {
        if (record[key]) {
          result && (result += ' ');
          result += key;
        }
      }
    }
  }

  return result;
};

export function classNames(...classnames: ClassName[]): string;
export function classNames() {
  const length = arguments.length;

  let result = '';

  let part;

  for (let i = 0; i < length; ++i) {
    if (part = arguments[i]) {
      if (part = stringifyClassName(part)) {
        result && (result += ' ');
        result += part;
      }
    }
  }

  return result;
}

export {
  classNames as classNamesString,
};
