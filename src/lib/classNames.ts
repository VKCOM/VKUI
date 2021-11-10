export interface ObjectClassNames {
  [index: string]: boolean | undefined | null;
}

export type ClassName = number | string | ObjectClassNames | false | null | undefined;

export function classNames(...classnames: ClassName[]): string[] {
  let result: string[] = [];

  for (let i = 0; i < classnames.length; i++) {
    const item = classnames[i];
    if (!item) {
      continue;
    }

    if (typeof item === 'object') {
      Object.keys(item).forEach((key) => {
        if (item[key]) {
          result.push(key);
        }
      });
      continue;
    }

    result.push(`${item}`);
  }

  return result;
}

export function classNamesString(...args: ClassName[]) {
  return classNames(...args).join(' ');
}
