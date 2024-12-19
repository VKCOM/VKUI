/* eslint-disable no-console */
import { HorizontalScroll } from '@vkontakte/vkui';

export function Test() {
  // @ts-expect-error: TS2345 fdg
  console.log('sdf', HorizontalScroll.__docgenInfo);
  return null;
}
