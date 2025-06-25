import * as React from 'react';
import { noop } from '@vkontakte/vkjs';
import { useStableCallback } from '../../../hooks/useStableCallback';
import { type SelectProps } from '../CustomSelect';
/* eslint-disable jsdoc/require-jsdoc */
type UseDropdownOpenedControllerProps = Pick<SelectProps, 'onOpen' | 'onClose'> & {
  onOpened?: () => void;
  onClosed?: () => void;
};
/* eslint-enable jsdoc/require-jsdoc */
export function useDropdownOpenedController({
  onClose,
  onOpen,
  onOpened,
  onClosed,
}: UseDropdownOpenedControllerProps) {
  const [opened, setOpened] = React.useState(false);
  const onCloseCb = useStableCallback(onClose || noop);
  const onOpenCb = useStableCallback(onOpen || noop);
  const onOpenedCb = useStableCallback(onOpened || noop);
  const onClosedCb = useStableCallback(onClosed || noop);

  const close = React.useCallback(() => {
    if (!opened) {
      return;
    }
    setOpened(false);
    onCloseCb?.();
  }, [onCloseCb, opened]);

  const open = React.useCallback(() => {
    if (opened) {
      return;
    }
    setOpened(true);
    onOpenCb?.();
  }, [onOpenCb, opened]);

  const toggleOpened = React.useCallback(() => {
    if (opened) {
      close();
    } else {
      open();
    }
  }, [close, open, opened]);

  React.useEffect(() => {
    if (opened) {
      onOpenedCb();
    } else {
      onClosedCb();
    }
  }, [onClosedCb, onOpenedCb, opened]);

  return {
    opened,
    open,
    close,
    toggleOpened,
  };
}
