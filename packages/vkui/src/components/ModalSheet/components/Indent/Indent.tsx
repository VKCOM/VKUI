import * as React from 'react';
import { useAdaptivity } from '../../../../hooks/useAdaptivity';
import { useGlobalEventListener } from '../../../../hooks/useGlobalEventListener';
import { useDOM } from '../../../../lib/dom';
import { useIsomorphicLayoutEffect } from '../../../../lib/useIsomorphicLayoutEffect';
import styles from './Indent.module.css';

export function firstOpenOffset(clientHeight: number, settlingHeight: number): number {
  return (clientHeight * settlingHeight) / 100;
}

// Отступы для модалки
function useIndents(settlingHeight: number) {
  const { document, window } = useDOM();

  const [indents, setIndents] = React.useState<[string, string]>([
    `${settlingHeight}%`,
    `${100 - settlingHeight}%`,
  ]);

  const indentCalculate = () => {
    const clientHeight = document!.documentElement.clientHeight;
    const indent1Height = firstOpenOffset(clientHeight, settlingHeight);
    const indent2Height = clientHeight - indent1Height;

    setIndents([`${indent1Height}px`, `${indent2Height}px`]);
  };

  useGlobalEventListener(window, 'resize', indentCalculate);

  useIsomorphicLayoutEffect(indentCalculate, [settlingHeight]);

  return indents;
}

interface IndentProps {
  settlingHeight: number;
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
}

export const Indent = ({ settlingHeight, onClick }: IndentProps) => {
  const indents = useIndents(settlingHeight);
  const { sizeX } = useAdaptivity();

  if (sizeX === 'regular') {
    return null;
  }

  return (
    <>
      <div
        className={styles['ModalSheetIndent']}
        style={{ height: indents[0] }}
        onClick={onClick}
      />
      <div
        className={styles['ModalSheetIndent']}
        style={{ height: indents[1] }}
        onClick={onClick}
      />
    </>
  );
};
