import { resolveLayoutProps } from './resolveLayoutProps';

function expectClassNamesEqual(actual?: string, expected?: string) {
  const normalize = (str = '') => str.split(/\s+/).sort().join(' ');
  expect(normalize(actual)).toBe(normalize(expected));
}

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
    const props = { position: 'absolute' };
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
    const { className, ...result } = resolveLayoutProps(props);

    expectClassNamesEqual(className, 'vkui-padding-m vkui-inline-size vkui-flex-grow');
    expect(result).toEqual({
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
    const { className, ...result } = resolveLayoutProps(props);

    expectClassNamesEqual(className, 'vkui-padding-m vkui-inline-size custom-class');
    expect(result).toEqual({
      'style': { '--vkui_internal--inline-size': '100px' },
      'data-testid': 'test',
    });
  });

  describe('flex props', () => {
    it('should work with simple values', () => {
      const props = { direction: 'row', noWrap: true, justify: 'start', align: 'end', gap: '4xl' };
      const { className, ...result } = resolveLayoutProps(props);

      expectClassNamesEqual(
        className,
        'vkui-align-flex-end vkui-justify-flex-start vkui-direction-row vkui-flex-wrap vkui-row_gap-4xl vkui-column_gap-4xl',
      );
      expect(result).toEqual({
        style: undefined,
      });
    });
    it('should work with adaptive values', () => {
      const props = {
        direction: { init: 'column', m: 'row' },
        justify: { init: 'center', m: 'end' },
        noWrap: { init: true, l: false },
      };
      const { className, ...result } = resolveLayoutProps(props);

      expectClassNamesEqual(
        className,
        'vkui-init-justify-center vkui-m-justify-flex-end vkui-init-direction-column vkui-m-direction-row vkui-init-flex-wrap vkui-l-flex-wrap',
      );
      expect(result).toEqual({
        style: undefined,
      });
    });
    it('should work with display', () => {
      const { className, ...result } = resolveLayoutProps({ display: 'inline-flex' });

      expectClassNamesEqual(className, 'vkui-display-inline-flex');
      expect(result).toEqual({
        style: undefined,
      });
    });
  });

  describe('grid props', () => {
    it('should work with simple values', () => {
      const props = { columns: 3, minColWidth: 200, align: 'end', gap: 'l' };
      const { className, ...result } = resolveLayoutProps(props);

      expectClassNamesEqual(
        className,
        'vkui-grid-columns vkui-min-col-width vkui-align-flex-end vkui-row_gap-l vkui-column_gap-l',
      );
      expect(result).toEqual({
        style: {
          '--vkui_internal--grid_columns': 3,
          '--vkui_internal--min_col_width': '200px',
        },
      });
    });
    it('should work with adaptive values', () => {
      const props = {
        columns: { init: 3, m: 1 },
        minColWidth: { init: 250, m: 50 },
        gap: { init: ['l', 'm'], l: 13 },
      };
      const { className, ...result } = resolveLayoutProps(props);

      expectClassNamesEqual(
        className,
        'vkui-init-grid-columns vkui-m-grid-columns vkui-init-min-col-width vkui-m-min-col-width vkui-init-row_gap-l vkui-init-column_gap-m vkui-l-row_gap vkui-l-column_gap',
      );
      expect(result).toEqual({
        style: {
          '--vkui_internal--init-grid_columns': 3,
          '--vkui_internal--m-grid_columns': 1,
          '--vkui_internal--init-min_col_width': '250px',
          '--vkui_internal--m-min_col_width': '50px',
          '--vkui_internal--l-column_gap': '13px',
          '--vkui_internal--l-row_gap': '13px',
        },
      });
    });
    it('should work with display', () => {
      const props = { display: 'inline-grid' };
      const { className, ...result } = resolveLayoutProps(props);

      expectClassNamesEqual(className, 'vkui-display-inline-grid');
      expect(result).toEqual({
        style: undefined,
      });
    });
  });

  describe('separator & spacing props', () => {
    it('should work with simple values', () => {
      const props = { size: '4xl' };
      const result = resolveLayoutProps(props);

      expect(result).toEqual({
        className: 'vkui-spacing-4xl',
        style: undefined,
      });
    });
    it('should work with adaptive values', () => {
      const props = {
        size: { init: 'xs', m: 10, l: '--my-custom-var' },
      };
      const { className, ...result } = resolveLayoutProps(props);

      expectClassNamesEqual(className, 'vkui-init-spacing-xs vkui-m-spacing vkui-l-spacing');
      expect(result).toEqual({
        style: {
          '--vkui_internal--l-spacing_size': 'var(--my-custom-var)',
          '--vkui_internal--m-spacing_size': '10px',
        },
      });
    });
  });

  describe('adaptive values with breakpoints', () => {
    it('should handle adaptive padding values', () => {
      const props = { padding: { init: 's', l: 'l' } };
      const { className, ...result } = resolveLayoutProps(props);

      expectClassNamesEqual(className, 'vkui-init-padding-s vkui-l-padding-l');
      expect(result).toEqual({
        style: undefined,
      });
    });

    it('should handle mixed adaptive and regular props', () => {
      const props = {
        padding: { init: 's', l: 'l' },
        inlineSize: 100,
        className: 'custom-class',
      };
      const { className, ...result } = resolveLayoutProps(props);

      expectClassNamesEqual(
        className,
        'vkui-init-padding-s vkui-l-padding-l vkui-inline-size custom-class',
      );
      expect(result).toEqual({
        style: { '--vkui_internal--inline-size': '100px' },
      });
    });

    it('should handle adaptive values with undefined breakpoints', () => {
      const props = { padding: { init: 's', l: undefined, m: 'm' } };
      const { className, ...result } = resolveLayoutProps(props);

      expectClassNamesEqual(className, 'vkui-init-padding-s vkui-m-padding-m');
      expect(result).toEqual({
        style: undefined,
      });
    });
  });
});
