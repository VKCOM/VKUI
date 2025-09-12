import { resolveLayoutProps } from './resolveLayoutProps';

describe('resolveLayoutProps', () => {
  it('should work with empty values', () => {
    const props = {};
    const result = resolveLayoutProps(props);

    expect(result).toEqual({
      className: '',
      style: undefined,
    });
  });

  it('should return empty values when no layout props provided', () => {
    const props = { test: 'test' };
    const result = resolveLayoutProps(props);

    expect(result).toEqual({
      test: 'test',
      className: '',
      style: undefined,
    });
  });

  it('should preserve className and style values', () => {
    const props = { className: 'test', style: { overflow: 'hidden' } };
    const result = resolveLayoutProps(props);

    expect(result).toEqual({
      className: 'test',
      style: { overflow: 'hidden' },
    });
  });

  it('should handle string values from predefined list (padding)', () => {
    const props = { padding: 'm' };
    const result = resolveLayoutProps(props);

    expect(result).toEqual({
      className: 'vkui-p--m',
      style: undefined,
    });
  });

  it('should handle string values from predefined list (position)', () => {
    const props = { position: 'absolute' };
    const result = resolveLayoutProps(props);

    expect(result).toEqual({
      className: 'vkui-pos--abs',
      style: undefined,
    });
  });

  it('should handle numeric values with variables (padding)', () => {
    const props = { padding: 16 };
    const result = resolveLayoutProps(props);

    expect(result).toEqual({
      className: 'vkui-p',
      style: { '--vkui-int-p': '16px' },
    });
  });

  it('should handle numeric values with variables (inlineSize)', () => {
    const props = { inlineSize: 200 };
    const result = resolveLayoutProps(props);

    expect(result).toEqual({
      className: 'vkui-is',
      style: { '--vkui-int-is': '200px' },
    });
  });

  it('should handle flexGrow without px suffix', () => {
    const props = { flexGrow: 2 };
    const result = resolveLayoutProps(props);

    expect(result).toEqual({
      className: 'vkui-fg',
      style: { '--vkui-int-fg': 2 },
    });
  });

  it('should handle flexShrink without px suffix', () => {
    const props = { flexShrink: 1 };
    const result = resolveLayoutProps(props);

    expect(result).toEqual({
      className: 'vkui-fs',
      style: { '--vkui-int-fs': 1 },
    });
  });

  it('should handle multiple layout props', () => {
    const props = { padding: 'm', inlineSize: 200, flexGrow: 1 };
    const result = resolveLayoutProps(props);

    expect(result).toEqual({
      className: 'vkui-p--m vkui-is vkui-fg',
      style: {
        '--vkui-int-is': '200px',
        '--vkui-int-fg': 1,
      },
    });
  });

  it('should ignore undefined values', () => {
    const props = { padding: undefined, inlineSize: 100 };
    const result = resolveLayoutProps(props);

    expect(result).toEqual({
      className: 'vkui-is',
      style: { '--vkui-int-is': '100px' },
    });
  });

  it('should handle string values that are not in predefined list', () => {
    const props = { padding: 'var(--custom-value)' };
    const result = resolveLayoutProps(props);

    expect(result).toEqual({
      className: 'vkui-p',
      style: { '--vkui-int-p': 'var(--custom-value)' },
    });
  });

  it('should handle CSS global keywords (inherit)', () => {
    const props = { padding: 'inherit' };
    const result = resolveLayoutProps(props);

    expect(result).toEqual({
      className: 'vkui-p--inh',
      style: undefined,
    });
  });

  it('should handle CSS intrinsic keywords (auto)', () => {
    const props = { inlineSize: 'auto' };
    const result = resolveLayoutProps(props);

    expect(result).toEqual({
      className: 'vkui-is--aut',
      style: undefined,
    });
  });

  it('should handle mixed regular props and layout props', () => {
    const props = {
      'className': 'custom-class',
      'padding': 'm',
      'inlineSize': 100,
      'data-testid': 'test',
    };
    const result = resolveLayoutProps(props);

    expect(result).toEqual({
      'className': 'vkui-p--m vkui-is custom-class',
      'style': { '--vkui-int-is': '100px' },
      'data-testid': 'test',
    });
  });
});
