export interface ObjectClassNames {
  [index: string]: boolean | undefined | null;
}

export type ClassName = number | string | ObjectClassNames | false | null | undefined;

export function classNames(...classnames: ClassName[]) {
  let result: string[] = [];

  classnames.forEach((item: ClassName): void => {
    if (!item) {
      return;
    }
    switch (typeof item) {
      case 'string':
        result.push(item);
        break;
      case 'object':
        Object.keys(item).forEach((key: string) => {
          if (item[key]) {
            result.push(key);
          }
        });
        break;
      default:
        result.push(`${item}`);
    }
  });

  return result.join(' ');
}

export default classNames;
