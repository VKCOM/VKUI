const querystring = {
  parse: (string = '') => {
    const matches = /\?(.+)$/ig.exec(string);
    const str = matches ? matches[1] : string;

    return str
      .split('&')
      .reduce((acc, item) => {
        const param = item.split('=');

        if (param[1]) {
          acc[param[0]] = decodeURIComponent(param[1]);
        }

        return acc;
      }, {});
  },
  create: (data = {}, opts) => {
    let options = { encode: false, ...opts };

    return Object.keys(data).reduce((acc, item) => {
      const type = typeof data[item];

      if (type === 'string' || type === 'number' || type === 'boolean') {
        acc.push(item + '=' + (options.encode ? encodeURIComponent(data[item]) : data[item]));
      }

      if (Array.isArray(data[item])) {
        data[item].forEach(value => {
          acc.push(item + '[]=' + (options.encode ? encodeURIComponent(value) : value));
        });
      }

      return acc;
    }, []).join('&');
  }
};

export const parse = querystring.parse;
export const create = querystring.create;

export default querystring;
