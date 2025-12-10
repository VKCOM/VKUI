'use client';

import { type KeyboardEvent, useCallback, useRef, useState } from 'react';
import { Icon16Done, Icon20RefreshOutline } from '@vkontakte/icons';
import { noop } from '@vkontakte/vkjs';
import {
  AdaptivityProvider,
  AppRoot,
  Avatar,
  Button,
  type ChipOption,
  ChipsSelect,
  ConfigProvider,
  Flex,
  Mark,
  Tooltip,
  useSnackbarManager,
} from '../../src';
import { Keys, pressedKey } from '../../src/lib/accessibility';
import { OverviewLayout } from '../common/components/OverviewLayout';
import { useGetGlobalParams } from '../common/hooks/useGetGlobalParams';
import { ColorPickerControl } from './components/ColorPickerControl';
import { CONFIG, type ConfigData, ICON_SIZES } from './config';
import styles from './IconsOverview.module.css';

const SIZES_OPTIONS: ChipOption[] = ICON_SIZES.map((size) => ({
  value: size,
  label: size,
}));

const filterConfig = (config: ConfigData[], query: string, sizes: string[]) => {
  if (!query && sizes.length === SIZES_OPTIONS.length) {
    return config;
  }

  const resultConfig: ConfigData[] = [];
  config.forEach((sizeData) => {
    if (!sizes.includes(sizeData.size)) {
      return;
    }
    const icons: ConfigData['icons'] = sizeData.icons.filter((iconData) =>
      iconData.name.toLocaleLowerCase().includes(query),
    );
    if (icons.length) {
      resultConfig.push({
        size: sizeData.size,
        icons,
      });
    }
  });
  return resultConfig;
};

const IconsOverview = () => {
  const [snackbarApi, contextHolder] = useSnackbarManager({
    limit: 1,
  });
  const [selectedSizes, setSelectedSizes] = useState<ChipOption[]>(SIZES_OPTIONS);
  const rootRef = useRef<HTMLDivElement | null>(null);

  const _filterConfig = useCallback(
    (config: ConfigData[], query: string) =>
      filterConfig(
        config,
        query,
        selectedSizes.map(({ value }) => String(value)),
      ),
    [selectedSizes],
  );

  const onIconClick = useCallback(
    (iconName: string) => {
      const iconCode = `<${iconName} />`;

      navigator.clipboard
        .writeText(iconCode)
        .then(() => {
          snackbarApi.open({
            before: (
              <Avatar size={24} style={{ background: 'var(--vkui--color_background_accent)' }}>
                <Icon16Done fill="#fff" width={14} height={14} />
              </Avatar>
            ),
            children: (
              <>
                <Mark>{iconCode}</Mark> скопировано!
              </>
            ),
            style: { maxInlineSize: 'unset', inlineSize: 'fit-content' },
            placement: 'top-end',
          });
        })
        .catch(noop);
    },
    [snackbarApi],
  );

  const onKeyDown = useCallback(
    (e: KeyboardEvent<HTMLElement>, iconName: string) => {
      if (pressedKey(e) === Keys.ENTER) {
        onIconClick(iconName);
      }
    },
    [onIconClick],
  );

  return (
    <div className={styles.host} ref={rootRef}>
      <OverviewLayout
        title="Витрина иконок"
        config={CONFIG}
        filterConfig={_filterConfig}
        remapConfigToSections={(config) =>
          config.map((configItem) => ({
            id: configItem.size,
            title: configItem.size,
            displayTitle: configItem.size,
            items: configItem.icons,
          }))
        }
        ItemsContainer={({ children }) => <Flex gap={['2xl', 'xl']}>{children}</Flex>}
        renderSectionItem={(iconData, iconSizeData) => (
          <Tooltip key={iconData.name} title={iconData.name} strategy="absolute">
            <div
              onClick={() => onIconClick(iconData.name)}
              onKeyDown={(e) => onKeyDown(e, iconData.name)}
              className={styles.icon}
              tabIndex={0}
              aria-label={iconData.name}
              style={{ inlineSize: Number(iconSizeData.title) }}
            >
              {iconData.node}
            </div>
          </Tooltip>
        )}
        additionalHeaderItem={
          <Flex gap={10} noWrap align="center">
            <ChipsSelect
              value={selectedSizes}
              onChange={setSelectedSizes}
              options={SIZES_OPTIONS}
              placeholder="Выберите размеры иконок"
              allowClearButton
            />
            {selectedSizes.length < SIZES_OPTIONS.length && (
              <Flex flexShrink={1}>
                <Button
                  size="m"
                  mode="secondary"
                  before={<Icon20RefreshOutline />}
                  onClick={() => setSelectedSizes(SIZES_OPTIONS)}
                  rounded
                  aria-label="Сбросить фильтры"
                />
              </Flex>
            )}
          </Flex>
        }
      />
      {contextHolder}
      <ColorPickerControl containerRef={rootRef} />
    </div>
  );
};

export const IconsOverviewPage = () => {
  const { colorScheme, platform, direction, hasCustomPanelHeaderAfter, hasPointer } =
    useGetGlobalParams();

  return (
    <ConfigProvider
      colorScheme={colorScheme}
      platform={platform}
      hasCustomPanelHeaderAfter={hasCustomPanelHeaderAfter}
      direction={direction}
    >
      <AdaptivityProvider hasPointer={hasPointer}>
        <AppRoot className="sb-unstyled" dir={direction}>
          <IconsOverview />
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};
