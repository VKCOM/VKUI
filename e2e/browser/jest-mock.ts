if (!window.Proxy) {
  throw new Error('The environment needs to support window.Proxy!');
}

function makeAny(): any {
  // callable
  return new Proxy(() => makeAny(), {
    // and with any property
    get: () => makeAny(),
  });
}

window.jest = makeAny();
(window as any)['page'] = makeAny();
(window as any)['expect'] = makeAny();

const notImplemented = (name: string) => () => {
  throw new Error(`${name} is not supported in react / playwright browser runtime`);
};
const noop = () => {
  /* do nothing */
};

window.beforeAll = notImplemented('beforeAll');
window.afterAll = notImplemented('afterAll');
window.beforeEach = notImplemented('beforeEach');
window.afterEach = notImplemented('afterEach');

const path: string[] = [];
const withPath = (name: string, fun: jest.ProvidesCallback) => {
  path.push(name);
  void fun(Object.assign(noop, { fail: noop }));
  path.pop();
};
const fakeTest = Object.assign(withPath, {
  each: notImplemented('describe.each'),
  only: withPath,
  skip: noop as any,
}) as any as typeof test;

(window as any).describe = fakeTest;
window.test = fakeTest;
window.it = fakeTest;

export const currentPath = () => path.join(' ');
