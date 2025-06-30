import { Icon20ArrowTurnRightOutline } from '@vkontakte/icons';
import { ContentBadge, Separator, SimpleCell } from '@vkontakte/vkui';
import NextLink from 'next/link';
import type { SearchResultProps } from '../types';
import styles from '../Search.module.css';

interface SearchResultsProps {
  results: SearchResultProps[];
  onClick: (hasHash: boolean) => void;
  flat?: boolean;
}

const ResultComponentBadge = (
  <ContentBadge appearance="neutral" mode="outline" size="s">
    Component
  </ContentBadge>
);

const SubResultIcon = <Icon20ArrowTurnRightOutline fill="var(--vkui--color_icon_primary)" />;

export function SearchResults({ results, flat = false, onClick }: SearchResultsProps) {
  const handleResultClick = (event: React.MouseEvent<HTMLLinkElement>) => {
    onClick(event.currentTarget.href.includes('#'));
  };

  return results.map((result) => (
    <ol key={result.url}>
      <SimpleCell
        after={result.url.includes('/components/') && ResultComponentBadge}
        Component={NextLink}
        onClick={handleResultClick}
        href={result.url}
      >
        {result.meta.title}
      </SimpleCell>
      <Separator padding />
      {!flat &&
        result.sub_results.map((subResult) => (
          <SimpleCell
            key={subResult.url}
            before={SubResultIcon}
            Component={NextLink}
            className={styles.result}
            href={subResult.url}
            onClick={handleResultClick}
            subtitle={<div dangerouslySetInnerHTML={{ __html: subResult.excerpt }} />}
            multiline
          >
            {subResult.title}
          </SimpleCell>
        ))}
    </ol>
  ));
}
