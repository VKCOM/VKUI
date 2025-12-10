import { ContentBadge, Footnote } from '@vkontakte/vkui';
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
        <ContentBadge key={tag} appearance="neutral">
          # {tag}
        </ContentBadge>
      ))}
    </div>
  );
}
