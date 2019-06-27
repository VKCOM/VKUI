export type ClassValue = string | number | { [className: string]: any } | undefined | null | boolean;

export default function classNames (...classes: ClassValue[]) {
  const result = [];

  [...classes].forEach(item => {
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
        break;
    }
  });

  return result.join(' ');
}
