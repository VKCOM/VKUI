import * as React from 'react';
import { noop } from '@vkontakte/vkjs';
import { useBooleanState } from '../../../hooks/useBooleanState';
import { useStableCallback } from '../../../hooks/useStableCallback';
import { type SelectProps } from '../CustomSelect';
/* eslint-disable jsdoc/require-jsdoc */
type UseDropdownOpenedControllerProps = Pick<SelectProps, 'onOpen' | 'onClose'> & {
  onOpened?: () => void;
  onClosed?: () => void;
};

type Open = () => void;
type Close = () => void;
type Toggle = () => void;

/* eslint-enable jsdoc/require-jsdoc */
export function useDropdownOpenedController({
  onClose,
  onOpen,
  onOpened,
  onClosed,
}: UseDropdownOpenedControllerProps): [boolean, Open, Close, Toggle] {
  const [opened, setOpenedTrue, setOpenedFalse] = useBooleanState();
  const onCloseCb = useStableCallback(onClose || noop);
  const onOpenCb = useStableCallback(onOpen || noop);
  const onOpenedCb = useStableCallback(onOpened || noop);
  const onClosedCb = useStableCallback(onClosed || noop);

  const close = React.useCallback(() => {
    if (!opened) {
      return;
    }
    setOpenedFalse();
    onCloseCb?.();
  }, [onCloseCb, opened, setOpenedFalse]);

  const open = React.useCallback(() => {
    if (opened) {
      return;
    }
    setOpenedTrue();
    onOpenCb?.();
  }, [onOpenCb, opened, setOpenedTrue]);

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

  return [opened, open, close, toggleOpened];
}
