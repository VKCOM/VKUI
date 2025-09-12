import { act } from 'react';
import { renderHook } from '@testing-library/react';
import { noop } from '@vkontakte/vkjs';
import { ColorScheme } from '../lib/colorScheme';
import * as LibDOM from '../lib/dom';
import { useAutoDetectColorScheme } from './useAutoDetectColorScheme';

vi.mock('../lib/dom', async () => {
  const module = await vi.importActual('../lib/dom');
  return {
    __esModule: true,
    ...module,
  };
});

describe(useAutoDetectColorScheme, () => {
  describe('client', () => {
    it.each([ColorScheme.LIGHT, ColorScheme.DARK])(
      'should return colorScheme by property (%s)',
      (colorScheme) => {
        const { result } = renderHook(() => useAutoDetectColorScheme(colorScheme));
        expect(result.current).toBe(colorScheme);
      },
    );

    it.each([
      {
        initialMatches: false,
        listenerMatches: false,
        colorScheme: { before: ColorScheme.LIGHT, after: ColorScheme.LIGHT },
      },
      {
        initialMatches: true,
        listenerMatches: true,
        colorScheme: { before: ColorScheme.DARK, after: ColorScheme.DARK },
      },
      {
        initialMatches: false,
        listenerMatches: true,
        colorScheme: { before: ColorScheme.LIGHT, after: ColorScheme.DARK },
      },
      {
        initialMatches: true,
        listenerMatches: false,
        colorScheme: { before: ColorScheme.DARK, after: ColorScheme.LIGHT },
      },
    ])(
      'should auto detect colorScheme (initialMatches is $initialMatches, listenerMatches is $listenerMatches, colorScheme is $colorScheme)',
      ({ initialMatches, listenerMatches, colorScheme }) => {
        let addEventListenerHandler = noop;
        const addEventListener = vi.fn().mockImplementation((_, handlerByHook) => {
          addEventListenerHandler = () => {
            handlerByHook({ matches: listenerMatches });
          };
        });

        // Объявление скопировано из документации https://jestjs.io/docs/manual-mocks
        Object.defineProperty(window, 'matchMedia', {
          writable: true,
          value: vi.fn().mockImplementation((query) => ({
            matches: initialMatches,
            media: query,
            onchange: null,
            addListener: addEventListener, // устарело
            removeListener: vi.fn(), // устарело
            addEventListener: addEventListener,
            removeEventListener: vi.fn(),
            dispatchEvent: vi.fn(),
          })),
        });
        const { result } = renderHook(() => useAutoDetectColorScheme());
        expect(result.current).toBe(colorScheme.before);
        act(addEventListenerHandler);
        expect(result.current).toBe(colorScheme.after);
      },
    );
  });

  describe('server', () => {
    it('should auto detect colorScheme ($colorScheme)', () => {
      vi.spyOn<any, any>(LibDOM, 'useDOM').mockReturnValue(() => {
        return {
          document: undefined,
          window: undefined,
        };
      });
      const { result } = renderHook(() => useAutoDetectColorScheme());
      expect(result.current).toBe(ColorScheme.LIGHT);
    });
  });
});
