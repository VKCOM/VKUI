import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { useConfigDirection } from '../../hooks/useConfigDirection';
import { useColorScheme } from '../../hooks/useColorScheme';
import { useLocale } from '../../hooks/useLocale';
import { usePlatform } from '../../hooks/usePlatform';
import type { ColorSchemeType } from '../../lib/colorScheme';
import type { Direction } from '../../lib/direction';
import type { PlatformType } from '../../lib/platform';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { Button } from '../Button/Button';
import { ConfigProvider, type ConfigProviderProps } from './ConfigProvider';
import { useConfigProvider } from './ConfigProviderContext';

const story: Meta<ConfigProviderProps> = {
  title: 'Configuration/ConfigProvider',
  component: ConfigProvider,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
  tags: ['Конфигурация'],
};

export default story;

type Story = StoryObj<ConfigProviderProps>;

const DisplayConfigProvider = () => {
  const values = useConfigProvider();

  return <div style={{ padding: 5 }}>{JSON.stringify(values, undefined, 2)}</div>;
};

// =============================================================================
// Context Split Benchmark stories
// =============================================================================

const ROWS_COUNT = 50;

const FLASH_CSS = `
@keyframes __vkui_story_flash {
  0%   { background-color: rgba(255, 160, 0, 0.4); }
  100% { background-color: transparent; }
}
`;

// ---------------------------------------------------------------------------
// Shared display row — no hooks, pure props
// ---------------------------------------------------------------------------
interface RenderRowProps {
  hookName: string;
  value: string;
  renderCount: number;
}

const RenderRow = ({ hookName, value, renderCount }: RenderRowProps) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '4px 12px',
      fontFamily: 'monospace',
      fontSize: 12,
      borderBottom: '1px solid rgba(0,0,0,0.05)',
    }}
  >
    <span style={{ flex: 1, color: '#555' }}>{hookName}</span>
    <span style={{ width: 80, fontWeight: 600 }}>{value}</span>
    {[renderCount].map((c) => (
      <span
        key={c}
        style={{
          padding: '1px 8px',
          borderRadius: 999,
          fontSize: 11,
          fontWeight: 700,
          minWidth: 32,
          textAlign: 'center',
          background: c === 1 ? '#e8f5e9' : '#fff3e0',
          color: c === 1 ? '#2e7d32' : '#bf360c',
          animation: c > 1 ? '__vkui_story_flash 0.7s ease-out' : 'none',
        }}
      >
        {c}
      </span>
    ))}
  </div>
);

const BenchColumnHeader = () => (
  <div
    style={{
      display: 'flex',
      gap: 8,
      padding: '4px 12px',
      fontSize: 10,
      color: '#aaa',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.06em',
      borderBottom: '1px solid rgba(0,0,0,0.1)',
      background: '#fafafa',
    }}
  >
    <span style={{ flex: 1 }}>Хук / поле</span>
    <span style={{ width: 80 }}>Значение</span>
    <span style={{ minWidth: 32, textAlign: 'center' }}>Рендеров</span>
  </div>
);

// ---------------------------------------------------------------------------
// Fixed controls — always centered on screen
// ---------------------------------------------------------------------------
interface FixedControlsProps {
  colorScheme: ColorSchemeType;
  locale: string;
  platform: PlatformType;
  direction: Direction;
  onToggleColorScheme: () => void;
  onToggleLocale: () => void;
  onTogglePlatform: () => void;
  onToggleDirection: () => void;
  onReset: () => void;
  label: string;
  accentColor: string;
}

const FixedControls = ({
  colorScheme,
  locale,
  platform,
  direction,
  onToggleColorScheme,
  onToggleLocale,
  onTogglePlatform,
  onToggleDirection,
  onReset,
  label,
  accentColor,
}: FixedControlsProps) => (
  <div
    style={{
      position: 'fixed',
      top: 16,
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 9999,
      background: '#fff',
      border: `2px solid ${accentColor}`,
      borderRadius: 14,
      padding: '10px 18px',
      boxShadow: '0 4px 24px rgba(0,0,0,0.14)',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      whiteSpace: 'nowrap',
    }}
  >
    <span
      style={{
        fontWeight: 700,
        fontSize: 13,
        color: accentColor,
        marginRight: 4,
      }}
    >
      {label}
    </span>
    <Button size="s" onClick={onToggleColorScheme}>
      colorScheme → {colorScheme === 'light' ? 'dark' : 'light'}
    </Button>
    <Button size="s" onClick={onToggleLocale}>
      locale → {locale === 'ru' ? 'en-US' : 'ru'}
    </Button>
    <Button size="s" onClick={onTogglePlatform}>
      platform → {platform === 'android' ? 'ios' : platform === 'ios' ? 'vkcom' : 'android'}
    </Button>
    <Button size="s" onClick={onToggleDirection}>
      direction → {direction === 'ltr' ? 'rtl' : 'ltr'}
    </Button>
    <Button size="s" mode="secondary" onClick={onReset}>
      Сбросить счётчики
    </Button>
    <span style={{ fontSize: 11, color: '#999', marginLeft: 4 }}>{ROWS_COUNT * 4} компонентов</span>
  </div>
);

// ---------------------------------------------------------------------------
// NEW approach — specific hooks, each subscribes to ONE sub-context
// ---------------------------------------------------------------------------
const NewPlatformMonitor = () => {
  const platform = usePlatform();
  const count = React.useRef(0);
  count.current++;
  return <RenderRow hookName="usePlatform()" value={platform} renderCount={count.current} />;
};

const NewColorSchemeMonitor = () => {
  const colorScheme = useColorScheme();
  const count = React.useRef(0);
  count.current++;
  return <RenderRow hookName="useColorScheme()" value={colorScheme} renderCount={count.current} />;
};

const NewLocaleMonitor = () => {
  const locale = useLocale();
  const count = React.useRef(0);
  count.current++;
  return <RenderRow hookName="useLocale()" value={locale} renderCount={count.current} />;
};

const NewDirectionMonitor = () => {
  const direction = useConfigDirection();
  const count = React.useRef(0);
  count.current++;
  return (
    <RenderRow hookName="useConfigDirection()" value={direction} renderCount={count.current} />
  );
};

const NewApproachList = React.memo(() => (
  <div>
    <BenchColumnHeader />
    {Array.from({ length: ROWS_COUNT }, (_, i) => (
      <React.Fragment key={i}>
        <NewPlatformMonitor />
        <NewColorSchemeMonitor />
        <NewLocaleMonitor />
        <NewDirectionMonitor />
      </React.Fragment>
    ))}
  </div>
));

const NewApproachBenchmark = () => {
  const [colorScheme, setColorScheme] = React.useState<ColorSchemeType>('light');
  const [locale, setLocale] = React.useState('ru');
  const [platform, setPlatform] = React.useState<PlatformType>('android');
  const [direction, setDirection] = React.useState<Direction>('ltr');
  const [resetKey, setResetKey] = React.useState(0);

  const toggleColorScheme = React.useCallback(
    () => setColorScheme((cs) => (cs === 'light' ? 'dark' : 'light')),
    [],
  );
  const toggleLocale = React.useCallback(() => setLocale((l) => (l === 'ru' ? 'en-US' : 'ru')), []);
  const togglePlatform = React.useCallback(
    () => setPlatform((p) => (p === 'android' ? 'ios' : p === 'ios' ? 'vkcom' : 'android')),
    [],
  );
  const toggleDirection = React.useCallback(
    () => setDirection((d) => (d === 'ltr' ? 'rtl' : 'ltr')),
    [],
  );
  const reset = React.useCallback(() => setResetKey((k) => k + 1), []);

  return (
    <ConfigProvider
      colorScheme={colorScheme}
      locale={locale}
      platform={platform}
      direction={direction}
    >
      <style>{FLASH_CSS}</style>
      <FixedControls
        label="После оптимизации"
        accentColor="#2e7d32"
        colorScheme={colorScheme}
        locale={locale}
        platform={platform}
        direction={direction}
        onToggleColorScheme={toggleColorScheme}
        onToggleLocale={toggleLocale}
        onTogglePlatform={togglePlatform}
        onToggleDirection={toggleDirection}
        onReset={reset}
      />
      <div style={{ paddingTop: 72, paddingBottom: 32, maxWidth: 600, margin: '0 auto' }}>
        <div
          style={{
            border: '2px solid #c8e6c9',
            borderRadius: 12,
            overflow: 'hidden',
            marginTop: 8,
          }}
        >
          <div
            style={{
              padding: '8px 12px',
              background: '#e8f5e9',
              borderBottom: '1px solid #c8e6c9',
              fontSize: 13,
              fontWeight: 700,
              color: '#1b5e20',
            }}
          >
            После оптимизации — специфичные хуки
            <span style={{ fontWeight: 400, color: '#388e3c', marginLeft: 8, fontSize: 12 }}>
              каждый компонент подписан только на свой суб-контекст
            </span>
          </div>
          <NewApproachList key={resetKey} />
        </div>
        <div
          style={{
            marginTop: 12,
            padding: '8px 12px',
            background: '#f1f8e9',
            borderRadius: 8,
            fontSize: 12,
            color: '#558b2f',
          }}
        >
          При toggle <strong>colorScheme</strong>: ре-рендерятся только{' '}
          <code>useColorScheme()</code> ({ROWS_COUNT} шт). Остальные {ROWS_COUNT * 3} компонентов —
          без изменений.
        </div>
      </div>
    </ConfigProvider>
  );
};

// ---------------------------------------------------------------------------
// OLD approach — useConfigProvider() directly, subscribes to ENTIRE context
// ---------------------------------------------------------------------------
const OldPlatformMonitor = () => {
  const { platform } = useConfigProvider();
  const count = React.useRef(0);
  count.current++;
  return (
    <RenderRow
      hookName="useConfigProvider().platform"
      value={platform}
      renderCount={count.current}
    />
  );
};

const OldColorSchemeMonitor = () => {
  const { colorScheme = 'light' } = useConfigProvider();
  const count = React.useRef(0);
  count.current++;
  return (
    <RenderRow
      hookName="useConfigProvider().colorScheme"
      value={colorScheme}
      renderCount={count.current}
    />
  );
};

const OldLocaleMonitor = () => {
  const { locale } = useConfigProvider();
  const count = React.useRef(0);
  count.current++;
  return (
    <RenderRow hookName="useConfigProvider().locale" value={locale} renderCount={count.current} />
  );
};

const OldDirectionMonitor = () => {
  const { direction = 'ltr' } = useConfigProvider();
  const count = React.useRef(0);
  count.current++;
  return (
    <RenderRow
      hookName="useConfigProvider().direction"
      value={direction}
      renderCount={count.current}
    />
  );
};

const OldApproachList = React.memo(() => (
  <div>
    <BenchColumnHeader />
    {Array.from({ length: ROWS_COUNT }, (_, i) => (
      <React.Fragment key={i}>
        <OldPlatformMonitor />
        <OldColorSchemeMonitor />
        <OldLocaleMonitor />
        <OldDirectionMonitor />
      </React.Fragment>
    ))}
  </div>
));

const OldApproachBenchmark = () => {
  const [colorScheme, setColorScheme] = React.useState<ColorSchemeType>('light');
  const [locale, setLocale] = React.useState('ru');
  const [platform, setPlatform] = React.useState<PlatformType>('android');
  const [direction, setDirection] = React.useState<Direction>('ltr');
  const [resetKey, setResetKey] = React.useState(0);

  const toggleColorScheme = React.useCallback(
    () => setColorScheme((cs) => (cs === 'light' ? 'dark' : 'light')),
    [],
  );
  const toggleLocale = React.useCallback(() => setLocale((l) => (l === 'ru' ? 'en-US' : 'ru')), []);
  const togglePlatform = React.useCallback(
    () => setPlatform((p) => (p === 'android' ? 'ios' : p === 'ios' ? 'vkcom' : 'android')),
    [],
  );
  const toggleDirection = React.useCallback(
    () => setDirection((d) => (d === 'ltr' ? 'rtl' : 'ltr')),
    [],
  );
  const reset = React.useCallback(() => setResetKey((k) => k + 1), []);

  return (
    <ConfigProvider
      colorScheme={colorScheme}
      locale={locale}
      platform={platform}
      direction={direction}
    >
      <style>{FLASH_CSS}</style>
      <FixedControls
        label="До оптимизации"
        accentColor="#bf360c"
        colorScheme={colorScheme}
        locale={locale}
        platform={platform}
        direction={direction}
        onToggleColorScheme={toggleColorScheme}
        onToggleLocale={toggleLocale}
        onTogglePlatform={togglePlatform}
        onToggleDirection={toggleDirection}
        onReset={reset}
      />
      <div style={{ paddingTop: 72, paddingBottom: 32, maxWidth: 600, margin: '0 auto' }}>
        <div
          style={{
            border: '2px solid #ffccbc',
            borderRadius: 12,
            overflow: 'hidden',
            marginTop: 8,
          }}
        >
          <div
            style={{
              padding: '8px 12px',
              background: '#fbe9e7',
              borderBottom: '1px solid #ffccbc',
              fontSize: 13,
              fontWeight: 700,
              color: '#bf360c',
            }}
          >
            До оптимизации — useConfigProvider() напрямую
            <span style={{ fontWeight: 400, color: '#e64a19', marginLeft: 8, fontSize: 12 }}>
              каждый компонент подписан на весь ConfigProviderContext
            </span>
          </div>
          <OldApproachList key={resetKey} />
        </div>
        <div
          style={{
            marginTop: 12,
            padding: '8px 12px',
            background: '#fbe9e7',
            borderRadius: 8,
            fontSize: 12,
            color: '#c62828',
          }}
        >
          При toggle <strong>colorScheme</strong>: ре-рендерятся все{' '}
          <strong>{ROWS_COUNT * 4} компонентов</strong> — включая те, что используют только{' '}
          <code>.platform</code>, <code>.locale</code>, <code>.direction</code>.
        </div>
      </div>
    </ConfigProvider>
  );
};

export const Playground: Story = {
  render: (args) => {
    return (
      <ConfigProvider {...args}>
        <DisplayConfigProvider />
      </ConfigProvider>
    );
  },
};

export const ContextSplitAfter: Story = {
  name: 'Context Split: После оптимизации',
  render: () => <NewApproachBenchmark />,
};

export const ContextSplitBefore: Story = {
  name: 'Context Split: До оптимизации',
  render: () => <OldApproachBenchmark />,
};
