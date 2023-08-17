import { addClassNameToElement, removeClassNameFromElement } from './utils';

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
    expect(div.getAttribute('class')).toEqual('b-class a-class a-class');

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
