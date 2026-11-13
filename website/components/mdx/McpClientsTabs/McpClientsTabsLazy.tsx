'use client';

import dynamic from 'next/dynamic';
import type { McpClientsTabProps } from './McpClientsTabs';

export const McpClientsTabs = dynamic(() =>
  import('./McpClientsTabs').then((mod) => mod.McpClientsTabs),
);

// Keep tab descriptors as client elements while their rendered Markdown stays on the server.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function McpClientsTab(_: McpClientsTabProps) {
  return null;
}
