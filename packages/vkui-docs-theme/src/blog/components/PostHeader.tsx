import { Icon12ChevronLeft } from '@vkontakte/icons';
import { Button } from '@vkontakte/vkui';
import { NextLink } from '../../components/NextLink';
import { getTags } from '../tags';
import { PostHeading, PostMeta } from './Post';

interface PostHeaderProps {
  frontMatter: {
    tags?: string | undefined;
    date?: string | undefined;
    title?: string | undefined;
  };
}

export function PostHeader({ frontMatter }: PostHeaderProps) {
  const tags = getTags(frontMatter.tags);

  const date: Date | null = frontMatter.date ? new Date(frontMatter.date) : null;

  return (
    <div>
      <Button Component={NextLink} href="/blog" mode="link" before={<Icon12ChevronLeft />} size="s">
        Назад
      </Button>
      <PostMeta publishDate={date} tags={tags} />
      <PostHeading Tag="h1">{frontMatter.title}</PostHeading>
    </div>
  );
}
