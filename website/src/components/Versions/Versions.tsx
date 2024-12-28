import * as React from 'react';
import ReactDOM from 'react-dom';
import { Icon24ChevronDown } from '@vkontakte/icons';
import { type AdaptivityProps, AdaptivityProvider, SelectMimicry } from '@vkontakte/vkui';
import { useMounted } from 'nextra/hooks';
import vkuiPgk from '../../../../packages/vkui/package.json';
import { VersionsModal } from './VersionsModal';

export function Versions({ sizeY = 'compact' }: Pick<AdaptivityProps, 'sizeY'>) {
  const [open, setOpen] = React.useState(false);
  const mounted = useMounted();

  return (
    <>
      <AdaptivityProvider sizeY={sizeY}>
        <SelectMimicry
          style={{ width: 128 }}
          after={<Icon24ChevronDown />}
          onClick={() => setOpen((o) => !o)}
          readOnly
        >
          v{vkuiPgk.version}
        </SelectMimicry>
      </AdaptivityProvider>
      {mounted &&
        ReactDOM.createPortal(<VersionsModal open={open} setOpen={setOpen} />, document.body)}
    </>
  );
}
