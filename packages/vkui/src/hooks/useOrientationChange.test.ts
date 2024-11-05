import { renderHook } from '@testing-library/react';
import { useOrientationChange } from './useOrientationChange';

const mockScreenOrientation = (angle = 0, useDeprecated = false) => {
  if (useDeprecated) {
    Object.defineProperty(window, 'orientation', {
      writable: true,
      value: angle,
    });
  }

  Object.defineProperty(window.screen, 'orientation', {
    writable: true,
    value: useDeprecated ? undefined : { angle },
  });
};

describe(useOrientationChange, () => {
  it.each([
    { angle: 0, type: 'portrait', useDeprecated: false },
    { angle: 90, type: 'landscape', useDeprecated: false },
    { angle: 0, type: 'portrait', useDeprecated: true },
    { angle: 90, type: 'landscape', useDeprecated: true },
  ])(
    'returns $type if angle is $angle (useDeprecated="$useDeprecated")',
    ({ angle, type, useDeprecated }) => {
      mockScreenOrientation(angle, useDeprecated);

      const { result } = renderHook(useOrientationChange);
      expect(result.current).toBe(type);
    },
  );
});
