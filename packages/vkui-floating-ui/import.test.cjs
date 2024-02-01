it('should import like UMD module', async () => {
  expect(require('./core')).toBeTruthy();
  expect(require('./dom')).toBeTruthy();
  expect(require('./react-dom')).toBeTruthy();
  expect(require('./utils')).toBeTruthy();
  expect(require('./utils/dom')).toBeTruthy();
});
