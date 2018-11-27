import React from 'react';
import PropTypes from 'prop-types';
import Logo from 'react-styleguidist/lib/rsg-components/Logo';
import Markdown from 'react-styleguidist/lib/rsg-components/Markdown';
import Styled from 'react-styleguidist/lib/rsg-components/Styled';
import Link from 'react-styleguidist/lib/rsg-components/Link';
import cx from 'classnames';
import pkg from '../../package.json';
import scheme from '@vkontakte/appearance/main.valette/scheme';

const schemeOptions = Object.keys(scheme).map(scheme_id => (
  <option value={scheme_id} key={scheme_id}>{scheme_id}</option>
));

const styles = ({ color, fontFamily, fontSize, mq, space, maxWidth }) => ({
  root: {
    backgroundColor: color.baseBackground
  },
  hasSidebar: {
    paddingLeft: 230,
    [mq.small]: {
      paddingLeft: 0
    }
  },
  content: {
    maxWidth,
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
    width: 230,
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

export function StyleGuideRenderer({ classes, title, homepageUrl, children, toc, hasSidebar }) {
  return (
    <div className={cx(classes.root, hasSidebar && classes.hasSidebar)}>
      <main className={classes.content}>
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
            Платформа:&nbsp;
            <select onChange={ (e) => {
              window.localStorage.setItem('vkui-styleguide:ua', e.target.value);
              window.location.reload();
            } } value={window.navigator.userAgent}>
              <option value={window.uaList.ios}>ios</option>
              <option value={window.uaList.android}>android</option>
            </select>
            <div style={{ marginTop: 4 }}>
              Тема:&nbsp;
              <select onChange={ (e) => {
                window.localStorage.setItem('vkui-styleguide:schemeId', e.target.value);
                window.location.reload();
              } } value={window.schemeId}>
                {schemeOptions}
              </select>
            </div>
            <div style={{ marginTop: 4 }}>
              Версия:&nbsp;<Link href={`https://www.npmjs.com/package/${pkg.name}`}>{ pkg.version }</Link>
            </div>
            <div style={{ marginTop: 4 }}>
              Исходники:&nbsp;<Link href={ pkg.repository }>GitHub</Link>
            </div>
            <div style={{ marginTop: 4 }}>
              Чат:&nbsp;<Link href="https://vk.me/join/AJQ1d8dLkgTUYRPPQ/Wa6Jmd">VK</Link>
            </div>
          </div>
          {toc}
        </div>
      )}
    </div>
  );
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
