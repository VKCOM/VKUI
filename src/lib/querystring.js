const querystring = {
  parse: (string = '') => {
    const matches = /.+\?(.+)$/ig.exec(string);
    const str = matches && matches[1];

    return str ? str
      .split('&')
      .reduce((acc, item) => {
        const param = item.split('=');

        acc[param[0]] = param[1];

        return acc;
      }, {}) : {};
  },
  create: (data = {}) => {
    return Object.keys(data).reduce((acc, item) => {
      const type = typeof data[item];

      if (type === 'string' || type === 'number' || type === 'boolean') {
        acc.push(item + '=' + encodeURIComponent(data[item]));
      }

      if (Array.isArray(data[item])) {
        data[item].forEach(value => {
          acc.push(item + '[]=' + encodeURIComponent(value));
        });
      }

      return acc;
    }, []).join('&');
  }
};

export default querystring;
