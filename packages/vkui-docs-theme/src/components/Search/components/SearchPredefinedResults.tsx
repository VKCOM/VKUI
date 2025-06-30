import { Icon20ArticleBoxOutline } from '@vkontakte/icons';
import { SimpleCell } from '@vkontakte/vkui';
import NextLink from 'next/link';
import type { SearchResultProps } from '../types';

interface SearchPredefinedResultsProps {
  results: SearchResultProps[];
  onClick: () => void;
}

const PredefinedResultIcon = <Icon20ArticleBoxOutline fill="var(--vkui--color_icon_primary)" />;

export function SearchPredefinedResults({ results, onClick }: SearchPredefinedResultsProps) {
  return results.map((result) => (
    <SimpleCell
      key={result.url}
      before={PredefinedResultIcon}
      Component={NextLink}
      onClick={onClick}
      href={result.url}
    >
      {result.meta.title}
    </SimpleCell>
  ));
}
