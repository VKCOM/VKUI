import * as React from 'react';
import { Button } from '@vkontakte/vkui';

export function UwuModeSwitcher() {
  const [enabled, setEnabled] = React.useState(false);

  React.useLayoutEffect(() => setEnabled(document.documentElement.classList.contains('uwu')), []);

  const toggleUmuMode = () => {
    const newEnabled = !enabled;
    setEnabled(newEnabled);
    if (newEnabled) {
      document.documentElement.classList.add('uwu');
    } else {
      document.documentElement.classList.remove('uwu');
    }
  };

  return (
    <Button size="l" mode="link" appearance="neutral" onClick={toggleUmuMode}>
      {enabled ? 'no uwu plz' : 'uwu?'}
    </Button>
  );
}
