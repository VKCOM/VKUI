import * as React from 'react';
import { Icon28ErrorCircleOutline } from '@vkontakte/icons';
import { type PlatformType, SegmentedControl, Snackbar } from '@vkontakte/vkui';
import { PlaygroundStoreContext, usePlaygroundStore } from '@/providers/playgroundStoreProvider';
import { DEFAULT_THEME_FOR_PLATFORM, DEFAULT_THEME_NAMES } from '../../vkuiThemes/constants';
import { getDefaultByThemesPresets, loadTheme } from '../../vkuiThemes/helpers';
import { PLATFORM_OPTIONS } from './constants';

export function PlatformPicker({ className }: { className?: string }) {
  const playgroundLoading = usePlaygroundStore((store) => store.playgroundLoading);
  const platform = usePlaygroundStore((store) => store.platform);
  const store = React.useContext(PlaygroundStoreContext);
  const [snackbar, setSnackbar] = React.useState<React.ReactElement | null>(null);

  const handlePlatformChange = async (newPlatform: PlatformType) => {
    if (store) {
      const { updateThemeData, updatePlatform, updatePlaygroundLoading, themeName } =
        store.getState();

      if (DEFAULT_THEME_NAMES.includes(themeName as 'vkBase' | 'vkIOS' | 'vkCom')) {
        updatePlaygroundLoading(true);

        let newThemeName = DEFAULT_THEME_FOR_PLATFORM[newPlatform];
        let newColorSchemeOptions = getDefaultByThemesPresets(newThemeName).colorSchemeOptions;

        try {
          if (newThemeName !== 'vkBase') {
            await loadTheme(newThemeName, newColorSchemeOptions);
          }
          updateThemeData(newThemeName, newColorSchemeOptions);
          updatePlatform(newPlatform);
        } catch (error) {
          // eslint-disable-next-line no-console
          console.warn(error);
          setSnackbar(
            <Snackbar
              onClose={() => setSnackbar(null)}
              before={<Icon28ErrorCircleOutline fill="var(--vkui--color_icon_negative)" />}
            >
              {`Не удалось загрузить токены для темы ${newThemeName}`}
            </Snackbar>,
          );
        } finally {
          updatePlaygroundLoading(false);
        }
      } else {
        updatePlatform(newPlatform);
      }
    }
  };

  return (
    <>
      {snackbar}
      <SegmentedControl
        size="m"
        value={platform}
        className={className}
        options={PLATFORM_OPTIONS}
        // @ts-expect-error: TS2232 fix SegmentedControl types?
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onChange={playgroundLoading ? undefined : handlePlatformChange}
      />
    </>
  );
}
