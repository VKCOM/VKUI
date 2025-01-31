import { SimpleGrid } from '@vkontakte/vkui';
import { useRouter } from 'next/router';
import { useConfig } from '../contexts';
import { Post } from './components/Post';
import { findPosts } from './helpers';
import { getTags } from './tags';

export function PostsLayout() {
  const config = useConfig();
  const { pageMap, frontMatter } = config;
  const posts = findPosts(pageMap);
  const router = useRouter();
  const { type } = frontMatter;
  const tagName = type === 'tag' ? router.query.tag : null;

  return (
    <SimpleGrid columns={3} gap="xl">
      {posts.map((post) => {
        const tags = getTags(post.frontMatter);
        if (tagName) {
          if (!Array.isArray(tagName) && !tags.includes(tagName)) {
            return null;
          }
        } else if (type === 'tag') {
          return null;
        }

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
