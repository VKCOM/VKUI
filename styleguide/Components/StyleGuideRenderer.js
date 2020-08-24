import React, { useCallback, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import Logo from 'react-styleguidist/lib/client/rsg-components/Logo';
import Markdown from 'react-styleguidist/lib/client/rsg-components/Markdown';
import Styled from 'react-styleguidist/lib/client/rsg-components/Styled';
import Link from 'react-styleguidist/lib/client/rsg-components/Link';
import cx from 'classnames';
import pkg from '../../package.json';
import { WebviewType } from '../../src/components/ConfigProvider/ConfigProviderContext';
import { PlatformSelect } from './PlatformSelect';
import { SchemeSelect } from './SchemeSelect';
import { WebviewTypeSelect } from './WebviewTypeSelect';
import { DESKTOP_SIZE, MOBILE_SIZE } from '../../src/components/AdaptivityProvider/AdaptivityProvider';
import { defaultConfigProviderProps } from '../../src/components/ConfigProvider/ConfigProviderContext';
import { ViewWidthSelect } from './ViewWidthSelect';

export const StyleGuideContext = React.createContext({
  ...defaultConfigProviderProps,
  webviewType: WebviewType.INTERNAL,
  width: MOBILE_SIZE
});

const styles = ({ color, fontFamily, fontSize, mq, space }) => ({
  root: {
    backgroundColor: color.baseBackground
  },
  hasSidebar: {
    paddingLeft: 200,
    [mq.small]: {
      paddingLeft: 0
    }
  },
  content: {
    padding: [[space[2], space[4]]],
    margin: [[0, 'auto']],
    [mq.small]: {
      padding: space[2]
    },
    display: 'block'
  },
  sidebar: {
    backgroundColor: color.sidebarBackground,
    border: [[color.border, 'solid']],
    borderWidth: [[0, 1, 0, 0]],
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    width: 200,
    overflow: 'auto',
    '-webkit-overflow-scrolling': 'touch',
    [mq.small]: {
      position: 'static',
      width: 'auto',
      borderWidth: [[1, 0, 0, 0]],
      paddingBottom: space[0]
    },
  },
  os: {
    fontFamily: fontFamily.base,
    fontSize: fontSize.small,
    padding: space[2],
    borderBottom: [[1, color.border, 'solid']]
  },
  logo: {
    padding: space[2],
    borderBottom: [[1, color.border, 'solid']]
  },
  footer: {
    display: 'block',
    color: color.light,
    fontFamily: fontFamily.base,
    fontSize: fontSize.small
  },
});

function StyleGuideRenderer({ classes, title, homepageUrl, children, toc, hasSidebar }) {
  const [state, setState] = useState({
    ...defaultConfigProviderProps,
    webviewType: WebviewType.INTERNAL,
    width: MOBILE_SIZE,
  });

  const width = state.width;

  const setContext = useCallback((data) => {
    setState({ ...state, ...data })
  }, [state])

  useEffect(() => {
    if (hasSidebar && width === DESKTOP_SIZE) {
      setContext({ width: MOBILE_SIZE });
    }
  }, [hasSidebar, width])

  const providerValue = useMemo(() => ({ ...state, hasSidebar, setContext }), [state, setContext, hasSidebar]);

  return (
    <StyleGuideContext.Provider value={providerValue}>
    <div className={cx(classes.root, hasSidebar && classes.hasSidebar)}>
      <main className={classes.content} style={{ maxWidth: hasSidebar ? 1200 : '100%' }}>
        {children}
        <footer className={classes.footer}>
          <Markdown text={`Generated with [React Styleguidist](${homepageUrl})`} />
        </footer>
      </main>
      {hasSidebar && (
        <div className={classes.sidebar}>
          <div className={classes.logo}>
            <Logo>{title}</Logo>
          </div>
          <div className={classes.os}>
            <PlatformSelect onChange={ (e) => setContext({ platform: e.target.value })} value={state.platform} />
            <div style={{ marginTop: 4 }}>
              <SchemeSelect onChange={ (e) => setContext({ scheme: e.target.value })} value={state.scheme} />
            </div>
            <div style={{ marginTop: 4 }}>
              <WebviewTypeSelect
                onChange={ (e) => setContext({ webviewType: e.target.value })}
                value={state.webviewType}
              />
            </div>
            <div style={{ marginTop: 4 }}>
              <ViewWidthSelect
                onChange={ (e) => setContext({ width: Number(e.target.value) })}
                value={state.width}
                isWide={!hasSidebar}
              />
            </div>
            <div style={{ marginTop: 4 }}>
              Версия:&nbsp;<Link href={`https://www.npmjs.com/package/${pkg.name}`}>{ pkg.version }</Link>
            </div>
            <div style={{ marginTop: 4 }}>
              Исходники:&nbsp;<Link href={ pkg.repository }>GitHub</Link>
            </div>
          </div>
          {toc}
        </div>
      )}
    </div>
    </StyleGuideContext.Provider>
  )
}

StyleGuideRenderer.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  homepageUrl: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  toc: PropTypes.node.isRequired,
  hasSidebar: PropTypes.bool
};

export default Styled(styles)(StyleGuideRenderer);
