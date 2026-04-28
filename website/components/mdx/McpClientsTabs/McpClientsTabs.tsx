'use client';

import * as React from 'react';
import { Tabs, TabsItem } from '@vkontakte/vkui';
import styles from './McpClientsTabs.module.css';

type McpClientsTabProps = {
  id: string;
  title: string;
  children: React.ReactNode;
};

type McpClientsTabsProps = {
  children: React.ReactNode;
};

type McpTabEntry = {
  id: string;
  title: string;
  content: React.ReactNode;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function McpClientsTab(_: McpClientsTabProps) {
  return null;
}

McpClientsTab.displayName = 'McpClientsTab';

function extractTabEntryFromNode(child: React.ReactNode): McpTabEntry | null {
  if (!React.isValidElement(child)) {
    return null;
  }

  const props = child.props as Partial<McpClientsTabProps> | null | undefined;
  if (!props) {
    return null;
  }

  if (typeof props.id !== 'string' || typeof props.title !== 'string') {
    return null;
  }

  return {
    id: props.id,
    title: props.title,
    content: props.children,
  };
}

export function McpClientsTabs({ children }: McpClientsTabsProps) {
  const tabs = React.useMemo<McpTabEntry[]>(() => {
    return React.Children.toArray(children)
      .map(extractTabEntryFromNode)
      .filter((entry): entry is McpTabEntry => entry !== null);
  }, [children]);

  const [activeTab, setActiveTab] = React.useState<string>(tabs[0]?.id ?? '');

  if (!tabs.length) {
    return null;
  }

  const activeContent = tabs.find((tab) => tab.id === activeTab) ?? tabs[0];
  const panelId = `mcp-client-tabpanel-${activeContent.id}`;

  return (
    <div className={styles.root}>
      <Tabs
        className={styles.tabs}
        selectedId={activeTab}
        onSelectedIdChange={setActiveTab}
        mode="secondary"
        layoutFillMode="shrinked"
      >
        {tabs.map((tab) => (
          <TabsItem key={tab.id} id={tab.id} aria-controls={`mcp-client-tabpanel-${tab.id}`}>
            {tab.title}
          </TabsItem>
        ))}
      </Tabs>
      <div id={panelId} role="tabpanel" aria-labelledby={activeContent.id} className={styles.panel}>
        {activeContent.content}
      </div>
    </div>
  );
}
