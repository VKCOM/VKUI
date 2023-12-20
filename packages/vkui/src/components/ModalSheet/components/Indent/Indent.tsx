import * as React from 'react';
import { useAdaptivity } from '../../../../hooks/useAdaptivity';
import { useGlobalEventListener } from '../../../../hooks/useGlobalEventListener';
import { useDOM } from '../../../../lib/dom';
import { useIsomorphicLayoutEffect } from '../../../../lib/useIsomorphicLayoutEffect';
import styles from './Indent.module.css';

// Отступы для модалки
function useIndents(settlingHeight: number) {
  const { document, window } = useDOM();

  const indent1Ref = React.useRef<HTMLDivElement>(null);
  const indent2Ref = React.useRef<HTMLDivElement>(null);
  const [indents, setIndents] = React.useState<[string, string]>([
    `${settlingHeight}%`,
    `${100 - settlingHeight}%`,
  ]);

  const indentCalculate = () => {
    const clientHeight = document!.documentElement.clientHeight;
    const indent1Height = (clientHeight * settlingHeight) / 100;
    const indent2Height = clientHeight - indent1Height;

    if (!indent1Ref.current || !indent2Ref.current) {
      return;
    }

    setIndents([`${indent1Height}px`, `${indent2Height}px`]);
  };

  useGlobalEventListener(window, 'resize', indentCalculate);

  useIsomorphicLayoutEffect(indentCalculate, [settlingHeight]);

  return [indent1Ref, indent2Ref, indents] as const;
}

interface IndentProps {
  settlingHeight: number;
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
}

export const Indent = ({ settlingHeight, onClick }: IndentProps) => {
  const [indent1Ref, indent2Ref, indents] = useIndents(settlingHeight);
  const { sizeX } = useAdaptivity();

  if (sizeX === 'regular') {
    return null;
  }

  return (
    <>
      <div
        className={styles['ModalSheetIndent']}
        style={{ height: indents[0] }}
        ref={indent1Ref}
        onClick={onClick}
      />
      <div
        className={styles['ModalSheetIndent']}
        style={{ height: indents[1] }}
        ref={indent2Ref}
        onClick={onClick}
      />
    </>
  );
};
