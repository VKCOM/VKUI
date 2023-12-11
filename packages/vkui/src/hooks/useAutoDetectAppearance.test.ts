import { act, renderHook } from '@testing-library/react';
import { noop } from '@vkontakte/vkjs';
import { Appearance } from '../lib/appearance';
import * as LibDOM from '../lib/dom';
import { useAutoDetectAppearance } from './useAutoDetectAppearance';

jest.mock('../lib/dom', () => {
  return {
    __esModule: true,
    ...jest.requireActual('../lib/dom'),
  };
});

describe(useAutoDetectAppearance, () => {
  describe('client', () => {
    it.each([Appearance.LIGHT, Appearance.DARK])(
      'should return appearance by property (%s)',
      (appearanceProp) => {
        const { result } = renderHook(() => useAutoDetectAppearance(appearanceProp));
        expect(result.current).toBe(appearanceProp);
      },
    );

    it.each([
      {
        initialMatches: false,
        listenerMatches: false,
        appearance: { before: Appearance.LIGHT, after: Appearance.LIGHT },
      },
      {
        initialMatches: true,
        listenerMatches: true,
        appearance: { before: Appearance.DARK, after: Appearance.DARK },
      },
      {
        initialMatches: false,
        listenerMatches: true,
        appearance: { before: Appearance.LIGHT, after: Appearance.DARK },
      },
      {
        initialMatches: true,
        listenerMatches: false,
        appearance: { before: Appearance.DARK, after: Appearance.LIGHT },
      },
    ])(
      'should auto detect appearance (initialMatches is $initialMatches, listenerMatches is $listenerMatches, appearance is $appearance)',
      ({ initialMatches, listenerMatches, appearance }) => {
        let addEventListenerHandler = noop;
        const addEventListener = jest.fn().mockImplementation((_, handlerByHook) => {
          addEventListenerHandler = () => {
            handlerByHook({ matches: listenerMatches });
          };
        });

        // Объявление скопировано из документации https://jestjs.io/docs/manual-mocks
        Object.defineProperty(window, 'matchMedia', {
          writable: true,
          value: jest.fn().mockImplementation((query) => ({
            matches: initialMatches,
            media: query,
            onchange: null,
            addListener: addEventListener, // устарело
            removeListener: jest.fn(), // устарело
            addEventListener: addEventListener,
            removeEventListener: jest.fn(),
            dispatchEvent: jest.fn(),
          })),
        });
        const { result } = renderHook(() => useAutoDetectAppearance());
        expect(result.current).toBe(appearance.before);
        act(addEventListenerHandler);
        expect(result.current).toBe(appearance.after);
      },
    );
  });

  describe('server', () => {
    it('should auto detect appearance ($appearance)', () => {
      jest.spyOn<any, any>(LibDOM, 'useDOM').mockReturnValue(() => {
        return {
          document: undefined,
          window: undefined,
        };
      });
      const { result } = renderHook(() => useAutoDetectAppearance());
      expect(result.current).toBe(Appearance.LIGHT);
    });
  });
});
