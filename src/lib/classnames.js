export default function classNames () {
  let result = [];

  [...arguments].forEach(item => {
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
