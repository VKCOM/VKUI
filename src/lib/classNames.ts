import { ObjectClassNames } from '../types/props';

export default function classNames(...classnames: Array<number | string | ObjectClassNames>) {
  let result: string[] = [];

  classnames.forEach((item: number | string | ObjectClassNames): void => {
    if (!item) {
      return;
    }
    switch (typeof item) {
      case 'string':
        result.push(item);
        break;
      case 'object':
        Object.keys(item).forEach(key => {
          if (item[key]) {
            result.push(key);
          }
        });
        break;
      default:
        result.push('' + item);
    }
  });

  return result.join(' ');
}
