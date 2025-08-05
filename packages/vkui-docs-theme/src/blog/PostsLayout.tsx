'use client';

import { SimpleGrid } from '@vkontakte/vkui';
import { type MdxFile } from 'nextra';
import { Post } from './components/Post';
import { getTags } from './tags';

export function PostsLayout({ posts }: { posts: MdxFile[] }) {
  return (
    <SimpleGrid minColWidth={190} gap="xl">
      {posts.map((post) => {
        const tags = getTags(post.frontMatter?.tags);
        const postTitle = post.frontMatter?.title || post.name;
        const date: Date | null = post.frontMatter?.date ? new Date(post.frontMatter.date) : null;

        return (
          <Post
            key={post.route}
            title={postTitle}
            description={post.frontMatter?.description}
            publishDate={date}
            tags={tags}
            route={post.route}
            image={post.frontMatter?.image}
          />
        );
      })}
    </SimpleGrid>
  );
}
