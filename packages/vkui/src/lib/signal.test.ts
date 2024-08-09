import { createSignal } from './signal';

describe(createSignal, () => {
  it('check signal working', () => {
    const callback1 = jest.fn();
    const callback2 = jest.fn();

    const signal = createSignal();

    expect(callback1).toBeCalledTimes(0);
    expect(callback2).toBeCalledTimes(0);

    const unsub1 = signal.subscribe(callback1);
    const unsub2 = signal.subscribe(callback2);

    signal.dispatch();
    expect(callback1).toBeCalledTimes(1);
    expect(callback2).toBeCalledTimes(1);

    unsub1();

    signal.dispatch();
    expect(callback1).toBeCalledTimes(1);
    expect(callback2).toBeCalledTimes(2);

    unsub2();

    signal.dispatch();
    expect(callback1).toBeCalledTimes(1);
    expect(callback2).toBeCalledTimes(2);
  });
});
