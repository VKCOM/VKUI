import type { GetStaticPaths } from 'next';
import type { PageMapItem } from 'nextra';
import { isPost } from './helpers';

const NEXTRA_INTERNAL = Symbol.for('__nextra_internal__');

export function getTags(tags?: string[] | string) {
  if (!tags) {
    return [];
  }
  return (Array.isArray(tags) ? tags : tags.split(',')).map((s) => s.trim());
}

const getStaticTags = (pageMap: PageMapItem[]) => {
  const tags = [];

  for (const item of pageMap) {
    if ('children' in item && item.name === 'blog') {
      for (const pageMapItem of item.children) {
        if (isPost(pageMapItem)) {
          tags.push(...getTags(pageMapItem.frontMatter?.tags));
        }
      }
    }
  }

  return [...new Set(tags)];
};

export const getStaticPathsTags: GetStaticPaths = () => {
  const tags = getStaticTags((globalThis as any)[NEXTRA_INTERNAL].pageMap);
  return {
    paths: tags.map((v: any) => ({ params: { tag: v } })),
    fallback: false,
  };
};
