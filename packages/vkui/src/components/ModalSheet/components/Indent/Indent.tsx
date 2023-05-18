import * as React from 'react';
import { useAdaptivity } from '../../../../hooks/useAdaptivity';
import { useGlobalEventListener } from '../../../../hooks/useGlobalEventListener';
import { SizeType } from '../../../../lib/adaptivity';
import { useDOM } from '../../../../lib/dom';
import { useIsomorphicLayoutEffect } from '../../../../lib/useIsomorphicLayoutEffect';
import styles from '../../ModalSheet.module.css';

// Отступы для модалки
function useIndents(settlingHeight: number) {
  const { document, window } = useDOM();

  const indent1Ref = React.useRef<HTMLDivElement>(null);
  const indent2Ref = React.useRef<HTMLDivElement>(null);

  const indentCalculate = () => {
    const indent1Height = (document!.documentElement.clientHeight * settlingHeight) / 100;
    const indent2Height = document!.documentElement.clientHeight - indent1Height;

    if (!indent1Ref.current || !indent2Ref.current) {
      return;
    }

    indent1Ref.current.style.height = `${indent1Height}px`;
    indent2Ref.current.style.height = `${indent2Height}px`;
  };

  useGlobalEventListener(window, 'resize', indentCalculate);

  useIsomorphicLayoutEffect(() => {
    indentCalculate();
  }, [settlingHeight]);

  return [indent1Ref, indent2Ref];
}

interface IndentProps {
  settlingHeight: number;
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
}

export const Indent = ({ settlingHeight, onClick }: IndentProps) => {
  const [indent1Ref, indent2Ref] = useIndents(settlingHeight);
  const { sizeX } = useAdaptivity();

  if (sizeX === SizeType.REGULAR) {
    return null;
  }

  return (
    <>
      <div
        className={styles['ModalSheet__indent']}
        style={{ height: `${settlingHeight}%` }}
        ref={indent1Ref}
        onClick={onClick}
      />
      <div
        className={styles['ModalSheet__indent']}
        style={{ height: `${100 - settlingHeight}%` }}
        ref={indent2Ref}
        onClick={onClick}
      />
    </>
  );
};
