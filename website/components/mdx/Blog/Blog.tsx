import * as React from 'react';
import { PostsLayout } from '@vkontakte/vkui-docs-theme';
import type { MdxFile } from 'nextra';
import { getPageMap } from 'nextra/page-map';

export const Blog = async () => {
  const pageMap = (await getPageMap(`/blog`)) as unknown as MdxFile[];
  const posts = pageMap.filter((page) => page.name !== 'index');
  return <PostsLayout posts={posts} />;
};
