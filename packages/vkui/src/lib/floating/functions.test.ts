import {
  checkIsNotAutoPlacement,
  convertFloatingDataToReactCSSProperties,
  getAutoPlacementAlign,
} from './functions';

describe('floating/functions', () => {
  describe(checkIsNotAutoPlacement, () => {
    it('should be true', () => {
      expect(checkIsNotAutoPlacement('top')).toBeTruthy();
      expect(checkIsNotAutoPlacement('top-start')).toBeTruthy();
      expect(checkIsNotAutoPlacement('bottom')).toBeTruthy();
    });

    it('should be false', () => {
      expect(checkIsNotAutoPlacement('auto')).toBeFalsy();
      expect(checkIsNotAutoPlacement('auto-start')).toBeFalsy();
      expect(checkIsNotAutoPlacement('auto-end')).toBeFalsy();
    });
  });

  describe(getAutoPlacementAlign, () => {
    it('should be null', () => {
      expect(getAutoPlacementAlign('auto')).toEqual(null);
    });

    it('should be start', () => {
      expect(getAutoPlacementAlign('auto-start')).toEqual('start');
    });

    it('should be end', () => {
      expect(getAutoPlacementAlign('auto-end')).toEqual('end');
    });
  });

  describe(convertFloatingDataToReactCSSProperties, () => {
    it('should return basic css properties', () => {
      const expectedCSSProperties = {
        top: 10,
        right: 'auto',
        bottom: 'auto',
        left: 10,
        width: 'max-content',
      };
      expect(convertFloatingDataToReactCSSProperties('absolute', 10, 10)).toEqual({
        position: 'absolute',
        ...expectedCSSProperties,
      });
      expect(convertFloatingDataToReactCSSProperties('fixed', 10, 10)).toEqual({
        position: 'fixed',
        ...expectedCSSProperties,
      });
    });

    it('should return default value for top and left if top and/or left is null', () => {
      const expectedCSSProperties = {
        position: 'absolute',
        top: 0,
        right: 'auto',
        bottom: 'auto',
        left: 0,
        width: 'max-content',
      };
      expect(convertFloatingDataToReactCSSProperties('absolute', null, null)).toEqual(
        expectedCSSProperties,
      );
      expect(convertFloatingDataToReactCSSProperties('absolute', 0, null)).toEqual(
        expectedCSSProperties,
      );
      expect(convertFloatingDataToReactCSSProperties('absolute', null, 0)).toEqual(
        expectedCSSProperties,
      );
    });

    it('should ignore `width` property if `initialWidth` prop is null', () => {
      expect(convertFloatingDataToReactCSSProperties('absolute', 0, 0, null)).toEqual({
        position: 'absolute',
        top: 0,
        right: 'auto',
        bottom: 'auto',
        left: 0,
      });
    });
  });
});
