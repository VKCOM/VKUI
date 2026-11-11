import { test } from '@vkui-e2e/test';

test('field sizing experiment', async ({ mount, page }, testInfo) => {
  test.skip(process.env.VKUI_FIELD_SIZING_EXPERIMENT !== '1', 'Opt-in performance experiment');
  await mount('TextareaStatePlayground');
  const results = await page.locator('textarea').evaluate((original) => {
    const source = original as HTMLTextAreaElement;
    const root = document.createElement('div');
    root.style.width = '320px';
    document.body.append(root);
    const create = (native: boolean) => {
      const el = source.cloneNode() as HTMLTextAreaElement;
      el.removeAttribute('id');
      el.style.height = 'auto';
      if (native) {
        el.style.setProperty('field-sizing', 'content');
      }
      root.append(el);
      return el;
    };
    const js = create(false);
    const native = create(true);
    const resize = (el: HTMLTextAreaElement) => {
      el.style.height = '';
      el.style.height = `${el.scrollHeight}px`;
      return el.scrollHeight;
    };
    const cases = ['', 'text', 'one\ntwo\n', 'long '.repeat(100)];
    const dimensions = cases.map((value) => {
      js.value = native.value = value;
      resize(js);
      return { value: value.slice(0, 15), js: js.offsetHeight, native: native.offsetHeight };
    });
    js.value = native.value = '';
    js.placeholder = native.placeholder = 'long placeholder '.repeat(20);
    resize(js);
    const placeholder = { js: js.offsetHeight, native: native.offsetHeight };
    js.remove();
    native.remove();
    const benchmark = (useNative: boolean, count: number) => {
      const fields = Array.from({ length: count }, () => create(useNative));
      const start = performance.now();
      for (let i = 0; i < 100; i++) {
        for (const el of fields) {
          el.value = 'text '.repeat(1 + (i % 30));
          if (!useNative) {
            resize(el);
          }
          // Реальный кадр требует layout; не измеряем только постановку изменений в очередь.
          void el.offsetHeight;
        }
      }
      const duration = performance.now() - start;
      fields.forEach((el) => el.remove());
      return duration;
    };
    benchmark(false, 1);
    benchmark(true, 1);
    const timings = [1, 20].map((count) => ({
      count,
      jsMs: benchmark(false, count),
      nativeMs: benchmark(true, count),
    }));
    root.remove();
    return { supported: CSS.supports('field-sizing', 'content'), dimensions, placeholder, timings };
  });
  await testInfo.attach('field-sizing-results', {
    body: JSON.stringify(results, null, 2),
    contentType: 'application/json',
  });
});
