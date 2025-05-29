'use client';

import * as React from 'react';
import { Tabs, TabsItem } from '@vkontakte/vkui';
import { Pre } from '../Pre/Pre';
import styles from './PackageManagers.module.css';

interface PackageManagersClientProps {
  packageManagers: Array<{
    id: 'npm' | 'yarn' | 'pnpm';
    content: React.ReactNode;
  }>;
}

export function PackageManagersClient({ packageManagers }: PackageManagersClientProps) {
  const [activeTab, setActiveTab] = React.useState<string>(packageManagers[0].id);

  return (
    <div className={styles.root}>
      <Pre
        data-copy=""
        header={
          <Tabs
            selectedId={activeTab}
            onSelectedIdChange={setActiveTab}
            mode="secondary"
            layoutFillMode="shrinked"
          >
            {packageManagers.map((manager) => (
              <TabsItem
                key={manager.id}
                id={manager.id}
                aria-controls={`tab-content-${manager.id}`}
              >
                {manager.id}
              </TabsItem>
            ))}
          </Tabs>
        }
      >
        {packageManagers.map(
          (manager) =>
            activeTab === manager.id && (
              <div
                key={manager.id}
                id={`tab-content-${manager.id}`}
                aria-labelledby={manager.id}
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
