import * as React from 'react';
import {
  addClassNameToElement,
  excludeKeysWithUndefined,
  isForwardRefElement,
  removeClassNameFromElement,
} from './utils';

describe('addClassNameToElement', () => {
  test('adds className to element', () => {
    const div = document.createElement('div');
    addClassNameToElement(div, 'a-class');

    expect(div.getAttribute('class')).toEqual('a-class');

    // allows to add duplicated class name
    addClassNameToElement(div, 'a-class');
    expect(div.getAttribute('class')).toEqual('a-class a-class');

    addClassNameToElement(div, 'b-class');
    expect(div.getAttribute('class')).toEqual('a-class a-class b-class');
  });
});

describe('removeClassNameFromElement', () => {
  test('removes className from element', () => {
    const div = document.createElement('div');
    div.setAttribute('class', 'a-class');

    removeClassNameFromElement(div, 'a-class');
    expect(div.getAttribute('class')).toEqual('');

    // allows to remove duplicated class name
    div.setAttribute('class', 'a-class b-class a-class');

    // remove not existing class
    removeClassNameFromElement(div, 'unknown-class');
    expect(div.getAttribute('class')).toEqual('a-class b-class a-class');

    removeClassNameFromElement(div, 'a-class');
    expect(div.getAttribute('class')).toEqual('b-class a-class');

    // allows to remove duplicated class name
    div.setAttribute('class', 'a-class b-class a-class');

    removeClassNameFromElement(div, 'b-class');
    expect(div.getAttribute('class')).toEqual('a-class a-class');

    removeClassNameFromElement(div, 'a-class');
    expect(div.getAttribute('class')).toEqual('a-class');

    removeClassNameFromElement(div, 'a-class');
    expect(div.getAttribute('class')).toEqual('');
  });
});

describe(excludeKeysWithUndefined, () => {
  test('should exclude keys with undefined ', () => {
    expect(excludeKeysWithUndefined({})).toEqual({});
    expect(excludeKeysWithUndefined({ key1: 1 })).toEqual({ key1: 1 });
    expect(excludeKeysWithUndefined({ key1: 1, key2: undefined })).toEqual({ key1: 1 });
    expect(excludeKeysWithUndefined({ key1: 1, key2: null, key3: undefined })).toEqual({ key1: 1, key2: null }); // prettier-ignore
  });
});

describe('isForwardRefElement', () => {
  test('detects components with React.forwardRef', () => {
    function TestComponent() {
      return null;
    }

    const TestWithForwardRefComponent = React.forwardRef(function WithForwardRefComponent() {
      return null;
    });

    expect(isForwardRefElement(<TestWithForwardRefComponent />)).toBeTruthy();
    expect(isForwardRefElement(<TestComponent />)).toBeFalsy();
  });

  test('returns false for not valid react elements', () => {
    expect(isForwardRefElement(45)).toBeFalsy();
    expect(isForwardRefElement(null)).toBeFalsy();
    expect(isForwardRefElement('Hello')).toBeFalsy();
  });
});
