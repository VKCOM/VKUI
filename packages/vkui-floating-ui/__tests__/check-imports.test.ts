describe('Check imports', () => {
  it('should import like UMD module', () => {
    expect(() => require('../core')).toBeTruthy();
    expect(() => require('../dom')).toBeTruthy();
    expect(() => require('../react-dom')).toBeTruthy();
    expect(() => require('../utils')).toBeTruthy();
    expect(() => require('../utils/dom')).toBeTruthy();
  });

  it('should import like ES6 module', async () => {
    // @ts-expect-error TS2306: не нравится *.d.ts файл, пишет 'File 'core/<path>' is not a module'
    expect(async () => await import('../core')).toBeTruthy();
    // @ts-expect-error TS2306: не нравится *.d.ts файл, пишет 'File 'dom/<path>' is not a module'
    expect(async () => await import('../dom')).toBeTruthy();
    // @ts-expect-error TS2306: не нравится *.d.ts файл, пишет 'File 'react/<path>' is not a module'
    expect(async () => await import('../react-dom')).toBeTruthy();
    // @ts-expect-error TS2306: не нравится *.d.ts файл, пишет 'File 'utils/<path>' is not a module'
    expect(async () => await import('../utils')).toBeTruthy();
    // @ts-expect-error TS2306: не нравится *.d.ts файл, пишет 'File 'utils/dom/<path>' is not a module'
    expect(async () => await import('../utils/dom')).toBeTruthy();
  });
});
