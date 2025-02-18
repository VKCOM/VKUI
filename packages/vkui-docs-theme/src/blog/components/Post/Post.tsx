import * as React from 'react';
import { Card, Link, Text } from '@vkontakte/vkui';
import NextLink from 'next/link';
import { PostHeading } from './PostHeading';
import { PostMeta, type PostMetaProps } from './PostMeta';
import styles from './Post.module.css';

interface PostProps extends PostMetaProps {
  title: React.ReactNode;
  description?: React.ReactNode;
  route?: string;
  image?: string;
}

export function Post({ title, description, tags, publishDate, route, image }: PostProps) {
  return (
    <Card className={styles.root} mode="outline-tint" Component="article">
      <img
        src={`${process.env.NEXT_PUBLIC_VKUI_DOCS_BASE_PATH || ''}${image}`}
        alt={`Лого для карточки ${title}`}
        width="100%"
      />
      <div className={styles.content}>
        <PostHeading>
          <Link href={route} Component={NextLink}>
            {title}
          </Link>
        </PostHeading>
        {description && (
          <Text className={styles.description}>
            {description}{' '}
            <Link href={route} Component={NextLink}>
              Читать далее...
            </Link>
          </Text>
        )}
        <PostMeta className={styles.meta} publishDate={publishDate} tags={tags} />
      </div>
    </Card>
  );
}
