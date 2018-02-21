const { parse, create } = require('./querystring');

// create
test('querystring.create: simple', () => {
  expect(create({ param: 'value' })).toBe('param=value');
});

test('querystring.create: with encoding', () => {
  expect(create({ param: 'привет мир' }, { encode: true })).toBe('param=%D0%BF%D1%80%D0%B8%D0%B2%D0%B5%D1%82%20%D0%BC%D0%B8%D1%80');
});

test('querystring.create: multiple keys', () => {
  expect(create({ param1: 'value1', param2: 'value2' })).toBe('param1=value1&param2=value2');
});

// parse
test('querystring.parse: simple', () => {
  expect(parse('param=value')).toEqual({ param: 'value' });
});

test('querystring.parse: empty', () => {
  expect(parse()).toEqual({});
});

test('querystring.parse: with decoding', () => {
  expect(parse('param=%D0%BF%D1%80%D0%B8%D0%B2%D0%B5%D1%82%20%D0%BC%D0%B8%D1%80')).toEqual({ param: 'привет мир' })
});

test('querystring.create: multiple params', () => {
  expect(parse('param1=value1&param2=value2')).toEqual({ param1: 'value1', param2: 'value2' });
});

test('querystring.create: passing location.search', () => {
  expect(parse('?param=value')).toEqual({ param: 'value' });
});

test('querystring.create: passing hole url', () => {
  expect(parse('https://hole.url/?param=value')).toEqual({ param: 'value' });
});
