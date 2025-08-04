'use client';

import { type KeyboardEvent, type ReactNode, useCallback, useRef, useState } from 'react';
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
  Snackbar,
  Tooltip,
} from '../../src';
import { FlexItem } from '../../src/components/Flex/FlexItem/FlexItem';
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
  const [snackbar, setSnackbar] = useState<ReactNode | null>(null);
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

  const onIconClick = (iconName: string) => {
    const iconCode = `<${iconName} />`;

    navigator.clipboard
      .writeText(iconCode)
      .then(() => {
        setSnackbar(
          <Snackbar
            onClose={() => setSnackbar(null)}
            before={
              <Avatar size={24} style={{ background: 'var(--vkui--color_background_accent)' }}>
                <Icon16Done fill="#fff" width={14} height={14} />
              </Avatar>
            }
            style={{ maxInlineSize: 'unset', inlineSize: 'fit-content' }}
            placement="top"
          >
            <Mark>{iconCode}</Mark> скопировано!
          </Snackbar>,
        );
      })
      .catch(noop);
  };

  const onKeyDown = useCallback((e: KeyboardEvent<HTMLElement>, iconName: string) => {
    if (pressedKey(e) === Keys.ENTER) {
      onIconClick(iconName);
    }
  }, []);

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
            <FlexItem
              onClick={() => onIconClick(iconData.name)}
              onKeyDown={(e) => onKeyDown(e, iconData.name)}
              className={styles.icon}
              tabIndex={0}
              aria-label={iconData.name}
              style={{ inlineSize: Number(iconSizeData.title) }}
            >
              {iconData.node}
            </FlexItem>
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
              <FlexItem flex="shrink">
                <Button
                  size="m"
                  mode="secondary"
                  before={<Icon20RefreshOutline />}
                  onClick={() => setSelectedSizes(SIZES_OPTIONS)}
                  rounded
                  aria-label="Сбросить фильтры"
                />
              </FlexItem>
            )}
          </Flex>
        }
      />
      {snackbar}
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
