'use client';

import { PanelSpinner, Placeholder } from '@vkontakte/vkui';
import dynamic from 'next/dynamic';
import { useMounted } from 'nextra/hooks';
import { type PlaygroundProps } from './Playground';
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
  const mounted = useMounted();

  return mounted ? <PlaygroundDynamic {...props} /> : <Placeholder className={styles.skeleton} />;
}
