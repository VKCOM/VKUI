it('should import like ES6 module', async () => {
  expect(await import('./core')).toBeTruthy();
  expect(await import('./dom')).toBeTruthy();
  expect(await import('./react-dom')).toBeTruthy();
  expect(await import('./utils')).toBeTruthy();
  expect(await import('./utils/dom')).toBeTruthy();
});
