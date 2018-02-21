import querystring from './querystring';

function typeSamples (omit) {
  const types = {
    NUMBER: 1,
    STRING: 'string',
    NULL: null,
    NAN: NaN,
    UNDEFINED: undefined,
    OBJECT: {},
    ARRAY: []
  };

  return Object.keys(types).reduce((res, typeKey) => {
    omit.indexOf(typeKey) === -1 && res.push(types[typeKey]);
    return res
  }, [])
}

// create
test('querystring.create: simple', () => {
  expect(querystring.create({ param: 'value' })).toBe('param=value');
});

test('querystring.create: empty', () => {
  expect(querystring.create()).toBe('');
});

test('querystring.create: invalid types', () => {
  typeSamples(['OBJECT']).forEach(typeSample => expect(querystring.create(typeSample)).toEqual(''));
});

test('querystring.create: enabled encoding', () => {
  expect(querystring.create({ param: 'привет мир' })).toBe('param=%D0%BF%D1%80%D0%B8%D0%B2%D0%B5%D1%82%20%D0%BC%D0%B8%D1%80');
});

test('querystring.create: disabled encoding', () => {
  expect(querystring.create({ param: 'привет мир' }, { encode: false })).toBe('param=привет мир');
});

test('querystring.create: multiple keys', () => {
  expect(querystring.create({ param1: 'value1', param2: 'value2' })).toBe('param1=value1&param2=value2');
});



// parse
test('querystring.parse: simple', () => {
  expect(querystring.parse('param=value')).toEqual({ param: 'value' });
});

test('querystring.parse: empty', () => {
  expect(querystring.parse()).toEqual({});
});

test('querystring.parse: invalid types', () => {
  typeSamples(['STRING']).forEach(typeSample => expect(querystring.parse(typeSample)).toEqual({}));
});

test('querystring.parse: decoding test', () => {
  expect(querystring.parse('param=%D0%BF%D1%80%D0%B8%D0%B2%D0%B5%D1%82%20%D0%BC%D0%B8%D1%80')).toEqual({ param: 'привет мир' })
});

test('querystring.create: multiple params', () => {
  expect(querystring.parse('param1=value1&param2=value2')).toEqual({ param1: 'value1', param2: 'value2' });
});

test('querystring.parse: passing location.search', () => {
  expect(querystring.parse('?param=value')).toEqual({ param: 'value' });
});

test('querystring.parse: passing hole url', () => {
  expect(querystring.parse('https://hole.url/?param=value')).toEqual({ param: 'value' });
});
