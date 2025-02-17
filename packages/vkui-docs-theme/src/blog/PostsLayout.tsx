'use client';

import { SimpleGrid } from '@vkontakte/vkui';
import { useConfig } from '../contexts';
import { Post } from './components/Post';
import { getTags } from './tags';

export function PostsLayout() {
  const config = useConfig();
  const {
    normalizePagesResult: { activePath },
  } = config;
  const posts = (
    activePath.find((item) => item.type === 'page' && item.children.length > 0)?.children || []
  ).filter((post) => post.name !== 'index');
  return (
    <SimpleGrid columns={3} gap="xl">
      {posts.map((post) => {
        const tags = getTags(post.frontMatter.tags);
        const postTitle = post.frontMatter.title || post.name;
        const date: Date | null = post.frontMatter.date ? new Date(post.frontMatter.date) : null;

        return (
          <Post
            key={post.route}
            title={postTitle}
            description={post.frontMatter.description}
            publishDate={date}
            tags={tags}
            route={post.route}
            image={post.frontMatter.image}
          />
        );
      })}
    </SimpleGrid>
  );
}
