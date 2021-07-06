import { FC, useState, useEffect } from 'react';
import { useDOM } from '../../lib/dom';
import {
  ConfigProviderContext,
  ConfigProviderContextInterface,
  Scheme,
  AppearanceScheme,
  defaultConfigProviderProps,
} from './ConfigProviderContext';
import { PlatformType, VKCOM } from '../../lib/platform';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import { useObjectMemo } from '../../hooks/useObjectMemo';
import { noop } from '../../lib/utils';
import { warnOnce } from '../../lib/warnOnce';

export interface ConfigProviderProps extends ConfigProviderContextInterface {
  /**
   * Цветовая схема приложения
   */
  scheme?: AppearanceScheme;
}

function useInheritResolver(scheme: ConfigProviderProps['scheme']): string {
  const inherit = scheme === 'inherit';
  const getScheme = () => inherit ? document.body.getAttribute('scheme') : scheme;
  const [realScheme, setScheme] = useState(getScheme());
  useEffect(() => {
    if (!inherit) {
      return noop;
    }
    setScheme(getScheme);
    const observer = new MutationObserver(() => {
      setScheme(getScheme());
    });
    observer.observe(document.body);
    return () => observer.disconnect();
  }, [inherit]);
  return realScheme;
}

function normalizeScheme(scheme: AppearanceScheme, platform: PlatformType): AppearanceScheme {
  if (scheme === 'inherit') {
    return scheme;
  }
  if (platform === VKCOM) {
    return Scheme.VKCOM;
  }
  switch (scheme) {
    case Scheme.DEPRECATED_CLIENT_LIGHT:
      return Scheme.BRIGHT_LIGHT;
    case Scheme.DEPRECATED_CLIENT_DARK:
      return Scheme.SPACE_GRAY;
    default:
      return scheme;
  }
}

const warn = warnOnce('ConfigProvider');

const ConfigProvider: FC<ConfigProviderProps> = ({ children, ...config }) => {
  const scheme = normalizeScheme(config.scheme, config.platform);

  const { document } = useDOM();
  useIsomorphicLayoutEffect(() => {
    if (scheme === 'inherit') {
      return noop;
    }
    if (process.env.NODE_ENV === 'development' && document.body.hasAttribute('scheme')) {
      warn('<body scheme> was set before VKUI mount - did you forget scheme="inherit"?');
    }
    document.body.setAttribute('scheme', scheme);
    return () => document.body.removeAttribute('scheme');
  }, [scheme]);

  const resolvedScheme = useInheritResolver(scheme);
  const configContext = useObjectMemo({ ...config, scheme: resolvedScheme });

  return (
    <ConfigProviderContext.Provider value={configContext}>
      {children}
    </ConfigProviderContext.Provider>
  );
};

// Деструктуризация нужна из бага в react-docgen-typescript
// https://github.com/styleguidist/react-docgen-typescript/issues/195
ConfigProvider.defaultProps = { ...defaultConfigProviderProps };

export default ConfigProvider;
