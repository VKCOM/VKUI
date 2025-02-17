'use client';

import { Icon12ChevronLeft } from '@vkontakte/icons';
import { Button } from '@vkontakte/vkui';
import { useRouter } from 'next/navigation';
import { getTags } from '../tags';
import { PostHeading, PostMeta } from './Post';

interface PostHeaderProps {
  frontMatter: {
    tags?: string;
    date?: string;
    title?: string;
  };
}

export function PostHeader({ frontMatter }: PostHeaderProps) {
  const router = useRouter();
  const tags = getTags(frontMatter.tags);

  const back = () => {
    void router.push('/blog');
  };

  const date: Date | null = frontMatter.date ? new Date(frontMatter.date) : null;

  return (
    <div>
      <Button onClick={back} mode="link" before={<Icon12ChevronLeft />} size="s">
        Назад
      </Button>
      <PostMeta publishDate={date} tags={tags} />
      <PostHeading Tag="h1">{frontMatter.title}</PostHeading>
    </div>
  );
}
