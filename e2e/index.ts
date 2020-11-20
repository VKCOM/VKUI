export async function screenshot(render: any, options = {}) {
  console.log('start screenshoting...');
  await page.goto('http://localhost:9000');
  console.log('goto done');
  await page.evaluate(({ code }) => {
    const api = Object.assign({}, window['vkui'], { React: window['React'], ReactDOM: window['ReactDOM'] });
    const jsx = eval(`(${code})(api);`);
    api.ReactDOM.render(jsx, document.getElementById('mount'));
  }, { code: render.toString() });
  console.log('script injected');
  return page.screenshot({ fullPage: true });
}
