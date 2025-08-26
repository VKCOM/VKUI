'use client';

import { Icon20MoonOutline, Icon20SunOutline } from '@vkontakte/icons';
import { Button, Skeleton } from '@vkontakte/vkui';
import { useMounted } from 'nextra/hooks';
import { useColorScheme } from '../contexts';

const SCHEME_LABEL_SWITCH = {
  system: 'Переключить на светлую тему',
  light: 'Переключить на тёмную тему',
  dark: 'Переключить на системную тему',
};

const SCHEMES = ['system', 'light', 'dark'] as const;

export function Icon20SunAutoOutline(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      className="vkuiIcon vkuiIcon--20 vkuiIcon--w-20 vkuiIcon--h-20"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      width="20"
      height="20"
      fill="currentColor"
      display="block"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M10.752 1.75a.75.75 0 1 0-1.5 0v1.833a.75.75 0 0 0 1.5 0V1.75ZM10 7.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm-2.828-.328a4 4 0 1 1 5.658 5.656 4 4 0 0 1-5.658-5.656ZM10 15.67a.75.75 0 0 1 .75.75v1.833a.75.75 0 1 1-1.5 0V16.42a.75.75 0 0 1 .75-.75ZM2.092 5.39a.75.75 0 0 1 1.017-.298l1.834 1a.75.75 0 0 1-.719 1.316l-1.833-1a.75.75 0 0 1-.3-1.017l.001-.001Zm14.8-.298a.75.75 0 1 1 .717 1.316l-1.833 1a.75.75 0 1 1-.719-1.316l1.834-1ZM5.24 12.89a.75.75 0 0 1-.298 1.017l-1.834 1a.75.75 0 0 1-.718-1.316l1.833-1a.75.75 0 0 1 1.018.299ZM13.147 19.688c.468 0 .732-.234.896-.796l.446-1.32h3.052l.446 1.337c.158.55.421.78.92.78.515 0 .884-.346.884-.833a1.6 1.6 0 0 0-.111-.562L17.36 12c-.252-.692-.662-.996-1.354-.996-.668 0-1.084.316-1.33 1.002l-2.309 6.287a1.8 1.8 0 0 0-.117.562c0 .51.346.832.897.832Zm2.824-6.95-1.096 3.464h2.257l-1.12-3.463h-.041Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function Icon20MoonAutoOutline(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      className="vkuiIcon vkuiIcon--20 vkuiIcon--w-20 vkuiIcon--h-20"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      width="20"
      height="20"
      fill="currentColor"
      display="block"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M13.147 19.683c.468 0 .732-.234.896-.796l.446-1.319h3.052l.446 1.336c.158.55.421.78.92.78.515 0 .884-.346.884-.833a1.6 1.6 0 0 0-.111-.562l-2.32-6.293c-.252-.692-.662-.996-1.354-.996-.668 0-1.084.316-1.33 1.002l-2.309 6.287a1.8 1.8 0 0 0-.117.562c0 .51.346.832.897.832Zm2.824-6.949-1.096 3.463h2.257l-1.12-3.463h-.041Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M9.895 1.5a.751.751 0 0 1 .494 1.322 5.796 5.796 0 0 0 2.285 10.03c.028.008.056.013.084.02l-.52 1.417A7.296 7.296 0 0 1 8.004 3.288a7 7 0 0 0 3.282 13.589l-.328.895h.001a3.303 3.303 0 0 0-.177.689A8.499 8.499 0 1 1 9.895 1.5Z"
      />
    </svg>
  );
}

const SCHEME_ICONS = {
  light: Icon20SunOutline,
  dark: Icon20MoonOutline,
};

const SCHEME_ICONS_SYSTEM = {
  light: Icon20SunAutoOutline,
  dark: Icon20MoonAutoOutline,
};

export function ColorSchemeSwitch() {
  const {
    setColorScheme,
    colorScheme = 'system',
    resolvedColorScheme = 'light',
  } = useColorScheme();
  const mounted = useMounted();

  if (!mounted) {
    return <Skeleton width={36} height={36} />;
  }

  const Icon =
    colorScheme === 'system' ? SCHEME_ICONS_SYSTEM[resolvedColorScheme] : SCHEME_ICONS[colorScheme];

  return (
    <Button
      size="l"
      before={<Icon />}
      mode="secondary"
      appearance="neutral"
      title={SCHEME_LABEL_SWITCH[colorScheme]}
      aria-label={SCHEME_LABEL_SWITCH[colorScheme]}
      onClick={() => setColorScheme(SCHEMES[(SCHEMES.indexOf(colorScheme) + 1) % 3])}
    />
  );
}
