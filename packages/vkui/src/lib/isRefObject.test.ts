import * as React from 'react';
import { isRefObject } from './isRefObject';

describe('isRefObject', () => {
  it('Returns true if object is RefObject', () => {
    const result = isRefObject(React.createRef());
    expect(result).toEqual(true);
  });

  it("Returns false if object isn't RefObject", () => {
    const result = isRefObject(null);
    expect(result).toEqual(false);
  });
});
