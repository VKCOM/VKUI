import type { GetStaticPaths } from 'next';
import Head from 'next/head';
import type { FrontMatter, PageMapItem } from 'nextra';
import { useData } from 'nextra/hooks';
import { isPost } from './helpers';

const NEXTRA_INTERNAL = Symbol.for('__nextra_internal__');

export const TagTitle = () => {
  const { tag } = useData();
  const title = `Посты по теме ${tag}`;
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};

export const TagName = () => {
  const { tag } = useData();
  return tag || null;
};

export function getTags(frontMatter: FrontMatter | undefined) {
  if (!frontMatter) {
    return [];
  }
  const tags: string | string[] = frontMatter.tag || [];
  return (Array.isArray(tags) ? tags : tags.split(',')).map((s) => s.trim());
}

const getStaticTags = (pageMap: PageMapItem[]) => {
  const tags = [];

  for (const item of pageMap) {
    if ('children' in item && item.name === 'blog') {
      for (const pageMapItem of item.children) {
        if (isPost(pageMapItem)) {
          tags.push(...getTags(pageMapItem.frontMatter));
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
