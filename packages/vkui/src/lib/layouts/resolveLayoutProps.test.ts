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
      className: 'vkui-padding-m',
      style: undefined,
    });
  });

  it('should handle string values from predefined list (position)', () => {
    const props = { position: 'absolute' as const };
    const result = resolveLayoutProps(props);

    expect(result).toEqual({
      className: 'vkui-position-absolute',
      style: undefined,
    });
  });

  it('should handle numeric values with variables (padding)', () => {
    const props = { padding: 16 };
    const result = resolveLayoutProps(props);

    expect(result).toEqual({
      className: 'vkui-padding',
      style: { '--vkui_internal--padding': '16px' },
    });
  });

  it('should handle numeric values with variables (inlineSize)', () => {
    const props = { inlineSize: 200 };
    const result = resolveLayoutProps(props);

    expect(result).toEqual({
      className: 'vkui-inline-size',
      style: { '--vkui_internal--inline-size': '200px' },
    });
  });

  it('should handle flexGrow without px suffix', () => {
    const props = { flexGrow: 2 };
    const result = resolveLayoutProps(props);

    expect(result).toEqual({
      className: 'vkui-flex-grow',
      style: { '--vkui_internal--flex-grow': 2 },
    });
  });

  it('should handle flexShrink without px suffix', () => {
    const props = { flexShrink: 1 };
    const result = resolveLayoutProps(props);

    expect(result).toEqual({
      className: 'vkui-flex-shrink',
      style: { '--vkui_internal--flex-shrink': 1 },
    });
  });

  it('should handle multiple layout props', () => {
    const props = { padding: 'm', inlineSize: 200, flexGrow: 1 };
    const result = resolveLayoutProps(props);

    expect(result).toEqual({
      className: 'vkui-padding-m vkui-inline-size vkui-flex-grow',
      style: {
        '--vkui_internal--inline-size': '200px',
        '--vkui_internal--flex-grow': 1,
      },
    });
  });

  it('should ignore undefined values', () => {
    const props = { padding: undefined, inlineSize: 100 };
    const result = resolveLayoutProps(props);

    expect(result).toEqual({
      className: 'vkui-inline-size',
      style: { '--vkui_internal--inline-size': '100px' },
    });
  });

  it('should handle string values that are not in predefined list', () => {
    const props = { padding: 'var(--custom-value)' };
    const result = resolveLayoutProps(props);

    expect(result).toEqual({
      className: 'vkui-padding',
      style: { '--vkui_internal--padding': 'var(--custom-value)' },
    });
  });

  it('should handle CSS global keywords (inherit)', () => {
    const props = { padding: 'inherit' };
    const result = resolveLayoutProps(props);

    expect(result).toEqual({
      className: 'vkui-padding-inherit',
      style: undefined,
    });
  });

  it('should handle CSS intrinsic keywords (auto)', () => {
    const props = { inlineSize: 'auto' };
    const result = resolveLayoutProps(props);

    expect(result).toEqual({
      className: 'vkui-inline-size-auto',
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
      'className': 'vkui-padding-m vkui-inline-size custom-class',
      'style': { '--vkui_internal--inline-size': '100px' },
      'data-testid': 'test',
    });
  });

  it('should handle padding="system"', () => {
    const props = { padding: 'system' };
    const result = resolveLayoutProps(props);

    expect(result).toEqual({
      className: 'vkui-padding-inline vkui-padding-block',
      style: {
        '--vkui_internal--padding-block': 'var(--vkui--size_base_padding_vertical--regular)',
        '--vkui_internal--padding-inline': 'var(--vkui--size_base_padding_horizontal--regular)',
      },
    });
  });

  it('should handle paddingBlock="system"', () => {
    const props = { paddingBlock: 'system' };
    const result = resolveLayoutProps(props);

    expect(result).toEqual({
      className: 'vkui-padding-block',
      style: {
        '--vkui_internal--padding-block': 'var(--vkui--size_base_padding_vertical--regular)',
      },
    });
  });

  it('should handle paddingInline="system"', () => {
    const props = { paddingInline: 'system' };
    const result = resolveLayoutProps(props);

    expect(result).toEqual({
      className: 'vkui-padding-inline',
      style: {
        '--vkui_internal--padding-inline': 'var(--vkui--size_base_padding_horizontal--regular)',
      },
    });
  });

  it('should handle paddingBlockStart="system"', () => {
    const props = { paddingBlockStart: 'system' };
    const result = resolveLayoutProps(props);

    expect(result).toEqual({
      className: 'vkui-padding-block-start',
      style: {
        '--vkui_internal--padding-block-start': 'var(--vkui--size_base_padding_vertical--regular)',
      },
    });
  });

  it('should handle paddingBlockEnd="system"', () => {
    const props = { paddingBlockEnd: 'system' };
    const result = resolveLayoutProps(props);

    expect(result).toEqual({
      className: 'vkui-padding-block-end',
      style: {
        '--vkui_internal--padding-block-end': 'var(--vkui--size_base_padding_vertical--regular)',
      },
    });
  });

  it('should handle paddingInlineStart="system"', () => {
    const props = { paddingInlineStart: 'system' };
    const result = resolveLayoutProps(props);

    expect(result).toEqual({
      className: 'vkui-padding-inline-start',
      style: {
        '--vkui_internal--padding-inline-start':
          'var(--vkui--size_base_padding_horizontal--regular)',
      },
    });
  });

  it('should handle paddingInlineEnd="system"', () => {
    const props = { paddingInlineEnd: 'system' };
    const result = resolveLayoutProps(props);

    expect(result).toEqual({
      className: 'vkui-padding-inline-end',
      style: {
        '--vkui_internal--padding-inline-end': 'var(--vkui--size_base_padding_horizontal--regular)',
      },
    });
  });

  it('should handle multiple system padding props', () => {
    const props = {
      paddingBlock: 'system',
      paddingInline: 'system',
      paddingBlockStart: 'system',
    };
    const result = resolveLayoutProps(props);

    expect(result).toEqual({
      className: 'vkui-padding-inline vkui-padding-block vkui-padding-block-start',
      style: {
        '--vkui_internal--padding-block': 'var(--vkui--size_base_padding_vertical--regular)',
        '--vkui_internal--padding-inline': 'var(--vkui--size_base_padding_horizontal--regular)',
        '--vkui_internal--padding-block-start': 'var(--vkui--size_base_padding_vertical--regular)',
      },
    });
  });
});
