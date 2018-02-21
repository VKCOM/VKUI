import querystring from './querystring';

const defaultOptions = {
  method: 'GET',
  data: null
};

function getXMLHttpRequest () {
  if (typeof XMLHttpRequest !== 'undefined') {
    // eslint-disable-next-line
    return new XMLHttpRequest();
  }
}

function makeRequest (url, options) {
  let isCanceled;

  const error = new Error('Request was aborted');
  const request = getXMLHttpRequest();
  const opts = Object.assign({}, defaultOptions, options);

  if (opts.data && opts.method.toLowerCase() === 'get') {
    url += `?${querystring.create(opts.data)}`;
  }

  const requestPromise = new Promise((resolve, reject) => {
    if (!request) {
      reject(new Error('XMLHttpRequest not supported'));
    }

    if (opts.timeout) {
      request.timeout = opts.timeout;
    }

    request.open(opts.method, url, true);

    if (opts.headers) {
      Object.keys(opts.headers).forEach(key => {
        request.setRequestHeader(key, opts.headers[key]);
      });
    }

    request.onreadystatechange = function () {
      if (request.readyState === 4) {
        if (request.status === 200) {
          resolve(request.responseText);
        } else {
          reject(new Error(request.status));
        }
      }
    };

    request.ontimeout = function () {
      reject(new Error('XMLHttpRequest timeout expires'));
    };

    request.send(opts.data);
  });

  return {

    promise: new Promise(function (resolve, reject) {
      requestPromise
        .then(res => isCanceled ? reject(error) : resolve(res))
        .catch((e) => isCanceled ? console.log(error) || reject(error) : reject(e));
    }),

    abort () {
      isCanceled = true;
      if (request) {
        request.abort();
      }
    }

  };
}

export default (url, options) => makeRequest(url, options);
