import React from 'react';
import PropTypes from 'prop-types';
import Logo from 'react-styleguidist/lib/rsg-components/Logo';
import Markdown from 'react-styleguidist/lib/rsg-components/Markdown';
import Styled from 'react-styleguidist/lib/rsg-components/Styled';
import cx from 'classnames';
import {uaList} from '../setup';
import pkg from '../../package.json';

console.log(pkg.version);

const styles = ({ color, fontFamily, fontSize, sidebarWidth, mq, space, maxWidth }) => ({
  root: {
    backgroundColor: color.baseBackground
  },
  hasSidebar: {
    paddingLeft: sidebarWidth,
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
    width: sidebarWidth,
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
            Platform:&nbsp;
            <select onChange={ (e) => {
              window.localStorage.setItem('vkui-styleguide:ua', e.target.value);
              window.location.reload();
            } }>
              <option value={uaList.ios} selected={window.navigator.userAgent === uaList.ios}>ios</option>
              <option value={uaList.android} selected={window.navigator.userAgent === uaList.android}>android</option>
            </select>
            <div style={{ marginTop: 4 }}>
              Version:&nbsp;{ pkg.version }
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
