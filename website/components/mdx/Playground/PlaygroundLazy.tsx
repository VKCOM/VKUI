'use client';

import { PanelSpinner, Placeholder } from '@vkontakte/vkui';
import dynamic from 'next/dynamic';
import { type PlaygroundProps } from './Playground';
import styles from './Playground.module.css';

const PlaygroundDynamic = dynamic(() => import('./Playground').then((mod) => mod.Playground), {
  ssr: false,
  loading: () => (
    <Placeholder className={styles.skeleton}>
      <PanelSpinner />
    </Placeholder>
  ),
});

export function PlaygroundLazy(props: PlaygroundProps) {
  return <PlaygroundDynamic {...props} />;
}
