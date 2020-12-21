import { Platform } from '../lib/platform';
import { getClassName } from './getClassName';

describe(getClassName, () => {
  it('embeds platform name', () => expect(getClassName('base', Platform.IOS)).toBe('base base--ios'));
});
