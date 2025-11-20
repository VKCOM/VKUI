import * as React from 'react';

function isAppleSystem(): boolean {
  return /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform);
}

const DEFAULT_MODIFIER_KEY = 'Ctrl';
const APPLE_MODIFIER_KEY = '⌘';

type ModifierKeyType = typeof DEFAULT_MODIFIER_KEY | typeof APPLE_MODIFIER_KEY;

export function useModifierKey() {
  const [modifierKey, setModifierKey] = React.useState<ModifierKeyType | null>(null);

  React.useLayoutEffect(() => {
    if (navigator) {
      setModifierKey(isAppleSystem() ? APPLE_MODIFIER_KEY : DEFAULT_MODIFIER_KEY);
    }
  }, []);

  return modifierKey;
}
