import { act, renderHook } from '@testing-library/react';
import { classNames } from '@vkontakte/vkjs';
import {
  focusVisiblePresetModeClassNames as modeClassNames,
  useFocusVisibleClassName,
  type UseFocusVisibleClassNameProps,
} from './useFocusVisibleClassName';
import styles from '../styles/focusVisible.module.css';

const focusedClasses = classNames(styles['-focus-visible'], styles['-focus-visible--focused']);

const test = (hookConfig: UseFocusVisibleClassNameProps, resultClassNameString: string) => {
  const { result } = renderHook(() => useFocusVisibleClassName(hookConfig));

  act(() => {
    expect(result.current).toEqual(resultClassNameString);
  });
};

describe('useFocusVisibleClassName()', () => {
  it('focusVisible: false returns proper class', () => {
    test({ focusVisible: false }, styles['-focus-visible']);
  });

  it('focusVisible: true (default mode) returns proper classes', () => {
    test({ focusVisible: true }, classNames(focusedClasses, modeClassNames['inside']));
  });

  it('focusVisible: true (preset mode: outside) returns proper classes', () => {
    test(
      { focusVisible: true, mode: 'outside' },
      classNames(focusedClasses, modeClassNames['outside']),
    );
  });

  it('focusVisible: true (custom mode:  customClass) returns proper classes', () => {
    test({ focusVisible: true, mode: 'customClass' }, classNames(focusedClasses, 'customClass'));
  });

  it('focusVisible: true (complex mode: customClass, inside) returns proper classes', () => {
    test(
      { focusVisible: true, mode: classNames('customClass', modeClassNames['inside']) },
      classNames(focusedClasses, 'customClass', modeClassNames['inside']),
    );
  });
});
