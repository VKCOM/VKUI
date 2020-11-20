declare namespace jest {
  interface Matchers<R> {
    toMatchImageSnapshot(): R;
  }
}
