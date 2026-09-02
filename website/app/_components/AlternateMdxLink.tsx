'use client';

import { useFSRoute } from 'nextra/hooks';
import { createMdxUrl } from '@/components/mdx/Overview/OverviewHeaderLinks/helpers';

export function AlternateMdxLink() {
  const fsRoute = useFSRoute();
  const mdxUrl = createMdxUrl(fsRoute);

  return <link rel="alternate" type="text/markdown" href={mdxUrl} />;
}
