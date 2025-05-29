'use client';

import * as React from 'react';
import { SegmentedControl, type SegmentedControlProps } from '@vkontakte/vkui';
import { Pre } from '../Pre/Pre';
import styles from './PackageManagers.module.css';

interface PackageManagersClientProps {
  packageManagers: Array<{
    id: 'npm' | 'yarn' | 'pnpm';
    content: React.ReactNode;
  }>;
}

export function PackageManagersClient({ packageManagers }: PackageManagersClientProps) {
  const [activeTab, setActiveTab] = React.useState<string | undefined>('npm');

  const options: SegmentedControlProps['options'] = packageManagers.map((manager) => ({
    'label': manager.id,
    'value': manager.id,
    'aria-controls': `tab-content-${manager.id}`,
    'id': `tab-${manager.id}`,
    'className': styles['pkg-manager'],
  }));

  return (
    <div className={styles.root}>
      <Pre
        data-copy=""
        header={
          <SegmentedControl
            role="tablist"
            value={activeTab}
            // @ts-expect-error: TS2322 VKUI fix typing?
            onChange={setActiveTab}
            options={options}
            size="m"
          />
        }
      >
        {packageManagers.map(
          (manager) =>
            activeTab === manager.id && (
              <div
                key={manager.id}
                id={`tab-content-${manager.id}`}
                aria-labelledby={`tab-${manager.id}`}
                role="tabpanel"
                tabIndex={0}
              >
                {manager.content}
              </div>
            ),
        )}
      </Pre>
    </div>
  );
}
