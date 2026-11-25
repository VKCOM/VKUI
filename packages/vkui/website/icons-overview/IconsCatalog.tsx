'use client';

import { useState } from 'react';
import { Flex, Tooltip } from '../../src';
import type { HasChildren } from '../../src/types';
import { OverviewLayout } from '../common/components/OverviewLayout';
import { IconSidebar } from './IconSidebar';
import { type ConfigData, getIconDisplayName, type IconData } from './config';
import { filterIcons } from './filterIcons';
import styles from './IconsOverview.module.css';

const ItemsContainer = ({ children }: HasChildren) => <Flex gap={['xs', 'xs']}>{children}</Flex>;
const normalizeIconQuery = (query: string) => query.toLocaleLowerCase();

export const IconsCatalog = ({ config }: { config: ConfigData[] }) => {
  const [selectedIcon, setSelectedIcon] = useState(config[0]?.icons[0]);

  return (
    <div className={styles.host}>
      <IconSidebar icon={selectedIcon} />
      <div className={styles.overview}>
        <OverviewLayout<ConfigData[], IconData>
          scrollable
          initialSectionsCount={2}
          config={config}
          filterConfig={filterIcons}
          normalizeQuery={normalizeIconQuery}
          headerClassName={styles.header}
          contentClassName={styles.scrollable}
          loaderClassName={styles.loader}
          showSpinner={false}
          showSectionItemCount={false}
          remapConfigToSections={(config) =>
            config.map((configItem) => ({
              id: configItem.size,
              title: configItem.size,
              displayTitle: configItem.size,
              items: configItem.icons,
            }))
          }
          ItemsContainer={ItemsContainer}
          renderSectionItem={(iconData, iconSizeData) => (
            <Tooltip
              key={iconData.name}
              title={getIconDisplayName(iconData.name)}
              strategy="absolute"
            >
              <button
                type="button"
                onClick={() => setSelectedIcon(iconData)}
                className={styles.icon}
                aria-label={iconData.name}
                style={{ inlineSize: Number(iconSizeData.title) }}
              >
                {iconData.node}
              </button>
            </Tooltip>
          )}
        />
      </div>
    </div>
  );
};
