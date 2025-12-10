import type { MdxFile, PageMapItem } from 'nextra';

const sortPosts = (a: MdxFile, b: MdxFile): number => {
  if (!a.frontMatter?.date || !b.frontMatter?.date) {
    return -1;
  }

  return new Date(b.frontMatter.date).getTime() - new Date(a.frontMatter.date).getTime();
};

export const isPost = (page: PageMapItem): page is MdxFile => {
  if ('frontMatter' in page) {
    const { draft, type } = page.frontMatter || {};
    return !draft && type === 'post';
  }
  return false;
};

export function findPosts(pageMap: PageMapItem[]) {
  const posts: MdxFile[] = [];

  for (const item of pageMap) {
    if ('children' in item && item.name === 'blog') {
      for (const pageMapItem of item.children) {
        if (isPost(pageMapItem)) {
          posts.push(pageMapItem);
        }
      }
    }
  }
  posts.sort(sortPosts);
  return posts;
}
