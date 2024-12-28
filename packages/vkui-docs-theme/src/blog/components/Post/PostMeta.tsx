import { ContentBadge, Footnote } from '@vkontakte/vkui';
import NextLink from 'next/link';
import { DateFormatter } from '../../../helpers/date';
import styles from './Post.module.css';

export interface PostMetaProps {
  publishDate?: Date | null;
  tags?: string[];
  className?: string;
}

export function PostMeta({ publishDate, tags = [], className }: PostMetaProps) {
  return (
    <div className={className}>
      {publishDate && (
        <Footnote className={styles.date} inline>
          <time dateTime={publishDate.toISOString()}>{DateFormatter.format(publishDate)}</time>
        </Footnote>
      )}
      {tags.map((tag) => (
        <NextLink href={`/blog/tags/${tag}`} key={tag}>
          <ContentBadge appearance="neutral"># {tag}</ContentBadge>
        </NextLink>
      ))}
    </div>
  );
}
