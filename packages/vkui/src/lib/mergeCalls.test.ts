import { mergeCalls } from './mergeCalls';

describe('mergeCalls', () => {
  it('Runs functions with same args call', () => {
    const props1 = {
      fn1: jest.fn(),
      fn3: jest.fn(),
    };
    const props2 = {
      fn1: jest.fn(),
      fn2: jest.fn(),
      fn3: jest.fn(),
    };
    const props3 = {
      fn4: jest.fn(),
    };

    const props = mergeCalls(props1, props2, props3);

    props.fn1(1);
    props.fn2(2);
    props.fn3(3);
    props.fn4(4);

    expect(props1.fn1).toHaveBeenCalledWith(1);
    expect(props1.fn3).toHaveBeenCalledWith(3);
    expect(props2.fn1).toHaveBeenCalledWith(1);
    expect(props2.fn2).toHaveBeenCalledWith(2);
    expect(props2.fn3).toHaveBeenCalledWith(3);
    expect(props3.fn4).toHaveBeenCalledWith(4);
  });
});
