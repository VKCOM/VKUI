import { Icon12ChevronLeft } from '@vkontakte/icons';
import { Button } from '@vkontakte/vkui';
import { useRouter } from 'next/router';
import { useConfig } from '../../contexts';
import { getTags } from '../tags';
import { PostHeading, PostMeta } from './Post';

export function PostHeader() {
  const config = useConfig();
  const { frontMatter } = config;
  const router = useRouter();
  const tags = getTags(frontMatter);

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
