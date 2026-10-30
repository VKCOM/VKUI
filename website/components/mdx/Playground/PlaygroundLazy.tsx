'use client';

import { PanelSpinner, Placeholder } from '@vkontakte/vkui';
import dynamic from 'next/dynamic';
import { useDeferredMount } from '@/components/useDeferredMount';
import type { PlaygroundProps } from './Playground';
import styles from './Playground.module.css';

const PlaygroundDynamic = dynamic(() => import('./Playground').then((mod) => mod.Playground), {
  ssr: false,
  loading: () => (
    <Placeholder className={styles.skeleton}>
      <PanelSpinner visibilityDelay={250} />
    </Placeholder>
  ),
});

export function PlaygroundLazy(props: PlaygroundProps) {
  const [placeholderRef, shouldMount] = useDeferredMount<HTMLDivElement>(!props.hide);

  if (props.hide) {
    return null;
  }

  return shouldMount ? (
    <PlaygroundDynamic {...props} />
  ) : (
    <Placeholder getRootRef={placeholderRef} className={styles.skeleton} />
  );
}
