import { act, renderHook } from '@testing-library/react';
import { noop } from '@vkontakte/vkjs';
import * as LibDOM from '../lib/dom';
import { useAutoDetectAppearance } from './useAutoDetectAppearance';

const LIGHT = 'light' as const;
const DARK = 'dark' as const;

jest.mock('../lib/dom', () => {
  return {
    __esModule: true,
    ...jest.requireActual('../lib/dom'),
  };
});

describe(useAutoDetectAppearance, () => {
  describe('client', () => {
    it.each([LIGHT, DARK])('should return appearance by property (%s)', (appearanceProp) => {
      const { result } = renderHook(() => useAutoDetectAppearance(appearanceProp));
      expect(result.current).toBe(appearanceProp);
    });

    it.each([
      {
        initialMatches: false,
        listenerMatches: false,
        appearance: { before: LIGHT, after: LIGHT },
      },
      { initialMatches: true, listenerMatches: true, appearance: { before: DARK, after: DARK } },
      { initialMatches: false, listenerMatches: true, appearance: { before: LIGHT, after: DARK } },
      { initialMatches: true, listenerMatches: false, appearance: { before: DARK, after: LIGHT } },
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
      expect(result.current).toBeUndefined();
    });
  });
});
