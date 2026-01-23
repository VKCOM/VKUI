import { useMediaQuery } from './useMediaQuery';

// '(hover: hover)' — проверяет, может ли первичный ввод поддерживать hover (обычно мышь).
// '(any-hover: hover)' — проверяет, поддерживает ли любой ввод hover (полезно для гибридных устройств).
// '(pointer: fine)' — указывает, что есть «тонкий» точный указатель (мышь, трекпад).
const HOVER_SUPPORTED_QUERY = '(hover: hover), (any-hover: hover), (pointer: fine)';

export const useHoverSupported = () => {
  return useMediaQuery(HOVER_SUPPORTED_QUERY);
};
