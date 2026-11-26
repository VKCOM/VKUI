import { Flex, Title } from '@vkontakte/vkui';
import showcaseData from '@/generated/showcase-data.json';
import { ShowcaseCard } from './ShowcaseCard';
import type { ShowcaseData, ShowcaseItem } from './types';
import styles from './ShowcaseGrid.module.css';

const data = showcaseData as ShowcaseData;
const itemsBySlug = new Map(
  data.groups.flatMap(({ items }) => items.map((item) => [item.slug, item] as const)),
);

function ShowcaseCardList({ items }: { items: ShowcaseItem[] }) {
  return (
    <ul className={styles.grid} role="list">
      {items.map((item) => (
        <li key={item.slug} className={styles.item}>
          <ShowcaseCard item={item} />
        </li>
      ))}
    </ul>
  );
}

export function ShowcaseGrid({ slugs }: { slugs?: string[] }) {
  if (slugs) {
    const items = slugs.flatMap((slug) => itemsBySlug.get(slug) ?? []);

    return (
      <Flex direction="column" paddingBlock="2xl">
        <ShowcaseCardList items={items} />
      </Flex>
    );
  }

  return (
    <Flex direction="column" gap="4xl" paddingBlock="4xl">
      <Flex direction="column" gap="4xl">
        {data.groups.map((group) => (
          <Flex key={group.key} Component="section" direction="column" gap="2xl" id={group.key}>
            <Title level="2" Component="h2">
              {group.title}
            </Title>
            <ShowcaseCardList items={group.items} />
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}
